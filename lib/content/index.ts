import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import type {
  ContentCollection,
  ContentEntry,
  ContentFrontmatter,
  ContentListItem,
  Locale,
} from "@/types";

const CONTENT_ROOT = path.join(process.cwd(), "content");

function getCollectionDirectory(collection: ContentCollection, locale: Locale) {
  return path.join(CONTENT_ROOT, collection, locale);
}

function parseFrontmatter(
  rawData: Record<string, unknown>,
): ContentFrontmatter {
  return {
    title: String(rawData.title || ""),
    description: String(rawData.description || ""),
    date: String(rawData.date || ""),
    author: String(rawData.author || ""),
    tags: Array.isArray(rawData.tags)
      ? rawData.tags.map((tag) => String(tag))
      : [],
    coverImage: rawData.coverImage ? String(rawData.coverImage) : undefined,
    draft: rawData.draft ? Boolean(rawData.draft) : false,
  };
}

function assertFrontmatter(frontmatter: ContentFrontmatter, filePath: string) {
  if (
    !frontmatter.title ||
    !frontmatter.description ||
    !frontmatter.date ||
    !frontmatter.author ||
    frontmatter.tags.length === 0
  ) {
    throw new Error(`Invalid frontmatter in ${filePath}`);
  }
}

async function renderMarkdown(source: string) {
  const file = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(source);

  return String(file);
}

export async function getContentList(
  collection: ContentCollection,
  locale: Locale,
): Promise<ContentListItem[]> {
  const directory = getCollectionDirectory(collection, locale);

  try {
    const filenames = await fs.readdir(directory);
    const entries = await Promise.all(
      filenames
        .filter((filename) => filename.endsWith(".md"))
        .map(async (filename) => {
          const filePath = path.join(directory, filename);
          const raw = await fs.readFile(filePath, "utf8");
          const parsed = matter(raw);
          const frontmatter = parseFrontmatter(parsed.data);
          assertFrontmatter(frontmatter, filePath);

          return {
            ...frontmatter,
            slug: filename.replace(/\.md$/, ""),
            locale,
            collection,
          };
        }),
    );

    return entries
      .filter((item) => !(process.env.NODE_ENV === "production" && item.draft))
      .sort(
        (left, right) =>
          new Date(right.date).getTime() - new Date(left.date).getTime(),
      );
  } catch {
    return [];
  }
}

export async function getContentBySlug(
  collection: ContentCollection,
  locale: Locale,
  slug: string,
): Promise<ContentEntry | null> {
  const filePath = path.join(getCollectionDirectory(collection, locale), `${slug}.md`);

  try {
    const raw = await fs.readFile(filePath, "utf8");
    const parsed = matter(raw);
    const frontmatter = parseFrontmatter(parsed.data);
    assertFrontmatter(frontmatter, filePath);

    if (process.env.NODE_ENV === "production" && frontmatter.draft) {
      return null;
    }

    return {
      ...frontmatter,
      slug,
      locale,
      collection,
      contentHtml: await renderMarkdown(parsed.content),
    };
  } catch {
    return null;
  }
}

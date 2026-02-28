import { NextResponse } from "next/server";
import type { ApiResponse } from "@/types";
import { getTemplateById } from "@/lib/content/templates";
import { getSupabaseAdminClient } from "@/lib/supabase/server";
import { buildAbsoluteUrl } from "@/lib/utils/site";
import { templateDownloadSchema } from "@/lib/utils/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = templateDownloadSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json<ApiResponse>(
        { ok: false, message: "Invalid template request." },
        { status: 400 },
      );
    }

    const template = getTemplateById(result.data.templateId);

    if (!template) {
      return NextResponse.json<ApiResponse>(
        { ok: false, message: "Unknown template." },
        { status: 404 },
      );
    }

    const supabase = getSupabaseAdminClient();

    if (!supabase) {
      return NextResponse.json<ApiResponse>(
        { ok: false, message: "Supabase is not configured yet." },
        { status: 503 },
      );
    }

    const { error } = await supabase.from("template_downloads").insert({
      email: result.data.email,
      template_id: template.id,
      locale: result.data.locale,
    });

    if (error) {
      return NextResponse.json<ApiResponse>(
        { ok: false, message: "Could not register the template download." },
        { status: 500 },
      );
    }

    return NextResponse.json<ApiResponse>({
      ok: true,
      message: "Your template is ready.",
      downloadUrl: buildAbsoluteUrl(template.filePath),
    });
  } catch {
    return NextResponse.json<ApiResponse>(
      { ok: false, message: "Unexpected error while preparing the template." },
      { status: 500 },
    );
  }
}

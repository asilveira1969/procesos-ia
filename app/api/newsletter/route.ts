import { NextResponse } from "next/server";
import type { ApiResponse } from "@/types";
import { getSupabaseAdminClient } from "@/lib/supabase/server";
import { newsletterSchema } from "@/lib/utils/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = newsletterSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json<ApiResponse>(
        { ok: false, message: "Invalid newsletter payload." },
        { status: 400 },
      );
    }

    const supabase = getSupabaseAdminClient();

    if (!supabase) {
      return NextResponse.json<ApiResponse>(
        { ok: false, message: "Supabase is not configured yet." },
        { status: 503 },
      );
    }

    const { error } = await supabase.from("leads").insert({
      email: result.data.email,
      name: result.data.name || null,
      locale: result.data.locale,
      source: "newsletter",
    });

    if (error) {
      return NextResponse.json<ApiResponse>(
        { ok: false, message: "Could not save the newsletter request." },
        { status: 500 },
      );
    }

    return NextResponse.json<ApiResponse>({
      ok: true,
      message: "Thanks. Your subscription was registered.",
    });
  } catch {
    return NextResponse.json<ApiResponse>(
      { ok: false, message: "Unexpected error while saving the request." },
      { status: 500 },
    );
  }
}

import { NextResponse } from "next/server";
import type { ApiResponse } from "@/types";
import { getSupabaseAdminClient } from "@/lib/supabase/server";
import { contactSchema } from "@/lib/utils/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json<ApiResponse>(
        { ok: false, message: "Invalid contact payload." },
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

    const leadInsert = await supabase
      .from("leads")
      .insert({
        email: result.data.email,
        name: result.data.name,
        locale: result.data.locale,
        source: "contact",
      })
      .select("id")
      .single();

    if (leadInsert.error || !leadInsert.data) {
      return NextResponse.json<ApiResponse>(
        { ok: false, message: "Could not save the contact lead." },
        { status: 500 },
      );
    }

    const messageInsert = await supabase.from("contact_messages").insert({
      lead_id: leadInsert.data.id,
      message: result.data.message,
    });

    if (messageInsert.error) {
      return NextResponse.json<ApiResponse>(
        { ok: false, message: "Could not save the contact message." },
        { status: 500 },
      );
    }

    return NextResponse.json<ApiResponse>({
      ok: true,
      message: "Thanks. Your message was received.",
    });
  } catch {
    return NextResponse.json<ApiResponse>(
      { ok: false, message: "Unexpected error while saving the message." },
      { status: 500 },
    );
  }
}

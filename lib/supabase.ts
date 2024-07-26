import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// lib/latex-template.ts
export function fillLatexTemplate(template: string, data: any) {
  // TODO: Implement template filling logic
  return template.replace(/{{(\w+)}}/g, (_, key) => data[key] || "");
}

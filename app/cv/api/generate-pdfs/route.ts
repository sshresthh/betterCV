import { fillLatexTemplate } from "@/lib/latex-template";
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  // TODO: Validate input data

  // Generate LaTeX content
  const latexTemplate = ""; // Load your LaTeX template
  const filledLatex = fillLatexTemplate(latexTemplate, data);

  // TODO: Convert LaTeX to PDF (you'll need a service or library for this)

  // Save to Supabase
  const { data: savedData, error } = await supabase
    .from("cvs")
    .insert({ content: filledLatex, user_data: data })
    .select();

  if (error) {
    return NextResponse.json({ error: "Failed to save CV" }, { status: 500 });
  }

  return NextResponse.json({ id: savedData[0].id });
}

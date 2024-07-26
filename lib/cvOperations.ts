import { CV } from "@/types";
import { supabase } from "./supabase";

export async function createCV(cv: CV) {
  const { data, error } = await supabase
    .from("cvs")
    .insert({ content: cv })
    .single();

  if (error) throw error;
  return data;
}

export async function getCV(id: string) {
  const { data, error } = await supabase
    .from("cvs")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
}

export async function updateCV(id: string, cv: CV) {
  const { data, error } = await supabase
    .from("cvs")
    .update({ content: cv })
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
}

export async function deleteCV(id: string) {
  const { data, error } = await supabase.from("cvs").delete().eq("id", id);

  if (error) throw error;
  return data;
}

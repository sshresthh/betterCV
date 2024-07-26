import { supabase } from './supabase'
import { CV } from '@/types'

export async function createCV(cv: CV) {
  const { data, error } = await supabase
    .from('cvs')
    .insert({ content: cv })
    .single()

  if (error) throw error
  return data
}
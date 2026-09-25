// src/utils/getPoliticians.ts
import { supabase } from "./supabase"
import type { Politician } from "../types"

export async function getPoliticians() {
  const { data: politicians, error } = await supabase
    .from("politicians")
    .select(
      `
      id, name, candidate_number, points, photo_url,
      parties ( name, acronym ),
      politician_stances (
        stance,
        humanist_criteria ( slug, label, sort_order )
      )
    `
    )
    .order("points", { ascending: false })

  if (error) {
    console.error(error)
    return []
  }
  console.log(politicians)
  return politicians as unknown as Politician[]
}

import { useState, useEffect } from "react"
import { supabase } from "../../utils/supabase"
import type { Politician } from "../../types"

export default function Ranking() {
  const [politicians, setPoliticians] = useState<Politician[]>([])

  useEffect(() => {
    async function getPoliticians() {
      const { data: politicians } = await supabase
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

      if (politicians) {
        setPoliticians(politicians as unknown as Politician[])
      }
    }

    getPoliticians()
  }, [])

  return (
    <>
      <h2>Resultado</h2>
      <ul>
        {politicians.map((p) => (
          <li key={p.id}>
            {p.name} — {p.parties.acronym} {p.points} pontos
          </li>
        ))}
      </ul>
    </>
  )
}

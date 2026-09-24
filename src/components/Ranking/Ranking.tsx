import { useState, useEffect } from "react"
import { supabase } from "../../utils/supabase"
import type { Politician } from "../../types"

export default function Ranking() {
  const [politicians, setPoliticians] = useState<Politician[]>([])

  useEffect(() => {
    async function getPoliticians() {
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

      console.log({ politicians, error })

      if (politicians) {
        setPoliticians(politicians as unknown as Politician[])
      }
    }

    getPoliticians()
  }, [])

  return (
    <section>
      <table>
        <thead>
          <tr>
            {<th></th>}
            <th>Nome</th>
            <th>Partido</th>
            <th>Pontos</th>
          </tr>
        </thead>
        <tbody>
          {politicians.map((p) => (
            <tr key={p.id}>
              <td>
                <img
                  src={p.photo_url ?? undefined}
                  alt={p.name}
                  width={32}
                  height={32}
                  style={{ objectFit: "cover", borderRadius: "50%" }}
                />
              </td>
              <td>{p.name}</td>
              <td>{p.parties?.acronym}</td>
              <td>{p.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <a>Clique aqui e veja como cada um pensa</a>
    </section>
  )
}

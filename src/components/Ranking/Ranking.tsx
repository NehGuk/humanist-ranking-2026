// src/components/Ranking/Ranking.tsx
import { useState, useEffect } from "react"
import { getPoliticians } from "../../utils/getPoliticians"
import type { Politician } from "../../types"
import CandidateDetails from "../CandidateDetails/CandidateDetails"
import { CircleCheck, CircleAlert, CircleX } from "lucide-react"

export default function Ranking() {
  const [politicians, setPoliticians] = useState<Politician[]>([])

  useEffect(() => {
    async function loadPoliticians() {
      const data = await getPoliticians()
      setPoliticians(data)
    }

    loadPoliticians()
  }, [])

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th></th>
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
      <a>Veja como cada um pensa</a>

      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <CircleCheck />
              </td>
              <td>
                <CircleAlert />
              </td>
              <td>
                <CircleX />
              </td>
            </tr>
            <tr>
              <td>A favor</td>
              <td>Sem posição</td>
              <td>Contra</td>
            </tr>
          </tbody>
        </table>
      </div>

      {politicians.map((p) => (
        <CandidateDetails key={p.id} politician={p} />
      ))}
    </section>
  )
}

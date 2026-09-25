// src/components/Ranking/Ranking.tsx
import { useState, useEffect } from "react"
import { getPoliticians } from "../../utils/getPoliticians"
import type { Politician } from "../../types"

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
      <a>Clique aqui e veja como cada um pensa</a>
    </section>
  )
}

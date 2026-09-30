// src/components/Ranking/Ranking.tsx
import { useState, useEffect } from "react"
import { getPoliticians } from "../../utils/getPoliticians"
import type { Politician } from "../../types"
import CandidateDetails from "../CandidateDetails/CandidateDetails"
import { CircleCheck, CircleQuestionMark, CircleX } from "lucide-react"

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
    <>
      <section className="min-h-screen bg-white">
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
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
        <a>Veja os critérios</a>
      </section>
      <section className="flex min-h-screen flex-col">
        <h3>Critérios</h3>
        <p>
          Selecionamos 12 pautas humanistas contemporâneas. Após verificar manifestações públicas dos candidatos e candidatas, em suas redes
          sociais e principais veículos de mídia do país, estabelecemos uma escala de pontuação. A nota final considera posições públicas a
          favor do tema (+1), contra (-1) ou se não há posicionamento conhecido (0) a respeito do assunto.
        </p>
        <h4>Legenda</h4>
        <table>
          <tbody>
            <tr>
              <td>
                <CircleCheck />
              </td>
              <td>
                <CircleQuestionMark />
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
      </section>
      <section>
        {politicians.map((p) => (
          <CandidateDetails key={p.id} politician={p} />
        ))}
      </section>
    </>
  )
}

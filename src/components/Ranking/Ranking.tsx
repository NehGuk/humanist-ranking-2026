// src/components/Ranking/Ranking.tsx
import { useState, useEffect } from "react"
import { getPoliticians } from "../../utils/getPoliticians"
import type { Politician } from "../../types"
import CandidateDetails from "../CandidateDetails/CandidateDetails"
import colorPoints from "../../utils/colorPoints"
import Criteria from "../Criteria/Criteria"

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
      <section id="ranking" className="flex min-h-screen flex-col justify-center bg-white scroll-mt-8">
        <div className="overflow-hidden p-3">
          <table className="w-full max-w-3xl mx-auto">
            <thead>
              <tr>
                <th className=""></th>
                <th className=""></th>
                <th></th>
                <th className="text-center text-xs font-medium uppercase tracking-wider text-gray-500">Pontos</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {politicians.map((p) => (
                <tr key={p.id} className="border-b border-gray-100 transition hover:bg-gray-50 ">
                  <td className="p-1">
                    <img
                      src={p.photo_url ?? undefined}
                      alt={p.name}
                      className="h-8 w-8 shrink-0 border-1 border-gray-100 rounded-full object-cover grayscale"
                    />
                  </td>
                  <td className="text-left pl-3">{p.name}</td>
                  <td className="text-gray-400 text-right">{p.parties?.acronym}</td>
                  <td className="text-center">
                    <strong className={colorPoints(p.points)}>{p.points}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center pt-9">
            <a href="#criteria" className="text-white text-sm font-bold bg-brand px-4 py-3 rounded-sm uppercase">
              Como calculamos?
            </a>
          </div>
        </div>
      </section>
      <Criteria />
      <section id="candidate-details" className="flex-col p-3 scroll-mt-14">
        {politicians.map((p) => (
          <CandidateDetails key={p.id} politician={p} />
        ))}
      </section>
    </>
  )
}

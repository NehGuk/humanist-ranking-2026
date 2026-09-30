import { CircleCheck, CircleQuestionMark, CircleX } from "lucide-react"
import type { Politician } from "../../types"

const stanceIcons: Record<string, React.ReactNode> = {
  A_FAVOR: <CircleCheck className="h-5 w-5 text-infavor" />,
  CONTRA: <CircleX className="h-5 w-5 text-against" />,
  SEM_POSICIONAMENTO: <CircleQuestionMark className="h-5 w-5 text-neutral" />,
}

const stanceLabels: Record<string, string> = {
  A_FAVOR: "A favor",
  CONTRA: "Contra",
  SEM_POSICIONAMENTO: "Sem posicionamento",
}

interface CandidateStancesProps {
  stances: Politician["politician_stances"]
}

export default function CandidateStances({ stances }: CandidateStancesProps) {
  const ordered = [...stances].reverse()
  const firstNine = ordered.slice(0, 9)
  const lastThree = ordered.slice(9)

  return (
    <>
      <table className="w-full max-w-xl text-sm table-fixed">
        <tbody>
          {firstNine.map((s) => (
            <tr key={s.humanist_criteria.slug} className="border-b border-gray-100 transition hover:bg-gray-100">
              <td className="py-1">{s.humanist_criteria.label}</td>
              <td className="w-8 text-right">
                <span title={stanceLabels[s.stance]}>{stanceIcons[s.stance]}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h5 className="mt-6 mb-1 text-sm">Proteção de grupos historicamente marginalizados</h5>

      <table className="w-full max-w-xl text-sm table-fixed">
        <tbody>
          {lastThree.map((s) => (
            <tr key={s.humanist_criteria.slug} className="border-b border-gray-100 transition hover:bg-gray-100">
              <td className="p-1">
                {(() => {
                  const text = s.humanist_criteria.label.replace("Proteção de minorias historicamente marginalizadas:", "").trim()
                  return text.charAt(0).toUpperCase() + text.slice(1)
                })()}
              </td>
              <td className="w-8 text-right">
                <span title={stanceLabels[s.stance]}>{stanceIcons[s.stance]}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

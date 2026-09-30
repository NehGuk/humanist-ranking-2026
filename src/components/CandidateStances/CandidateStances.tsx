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
      <table>
        <tbody>
          {firstNine.map((s) => (
            <tr key={s.humanist_criteria.slug}>
              <td>{s.humanist_criteria.label}</td>
              <td>
                <span title={stanceLabels[s.stance]}>{stanceIcons[s.stance]}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h5>Proteção de minorias historicamente marginalizadas</h5>

      <table>
        <tbody>
          {lastThree.map((s) => (
            <tr key={s.humanist_criteria.slug}>
              <td>{s.humanist_criteria.label.replace("Proteção de minorias historicamente marginalizadas:", "").trim()}</td>
              <td>
                <span title={stanceLabels[s.stance]}>{stanceIcons[s.stance]}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

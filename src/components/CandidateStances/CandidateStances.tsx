// src/components/CandidateStances/CandidateStances.tsx
import type { Politician } from "../../types"

const stanceColors: Record<string, string> = {
  A_FAVOR: "green",
  CONTRA: "red",
  SEM_POSICIONAMENTO: "grey",
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
              <td>{s.humanist_criteria.label.replace("Proteção de minorias historicamente marginalizadas:", "").trim()}</td>
              <td>
                <span
                  style={{
                    display: "inline-block",
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    backgroundColor: stanceColors[s.stance],
                  }}
                  title={s.stance}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4>Proteção de minorias historicamente marginalizadas</h4>

      <table>
        <tbody>
          {lastThree.map((s) => (
            <tr key={s.humanist_criteria.slug}>
              <td>{s.humanist_criteria.label.replace("Proteção de minorias historicamente marginalizadas:", "").trim()}</td>
              <td>
                <span
                  style={{
                    display: "inline-block",
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    backgroundColor: stanceColors[s.stance],
                  }}
                  title={s.stance}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

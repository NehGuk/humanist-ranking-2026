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
  return (
    <table>
      <tbody>
        {[...stances].reverse().map((s) => (
          <tr key={s.humanist_criteria.slug}>
            <td>{s.humanist_criteria.label}</td>
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
  )
}

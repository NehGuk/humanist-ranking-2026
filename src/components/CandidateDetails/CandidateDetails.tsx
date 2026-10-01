import CandidateStances from "../CandidateStances/CandidateStances"
import type { Politician } from "../../types"
import colorPoints from "../../utils/colorPoints"
import colorFinalScoreArea from "../../utils/colorFinalScoreArea"

interface CandidateDetailsProps {
  politician: Politician
}

export default function CandidateDetails({ politician }: CandidateDetailsProps) {
  return (
    <div id={`candidate-${politician.id}`} className="flex flex-col border border-gray-100 bg-white p-4 shadow-sm max-w-xl mx-auto">
      <div className="mb-3 flex gap-3">
        <img
          src={politician.photo_url ?? undefined}
          alt={politician.name}
          className="h-20 w-20 shrink-0 rounded-full border border-gray-200 object-cover grayscale"
        />
        <div className="my-auto">
          <h4 className="font-bold text-gray-900">{politician.name}</h4>
          <p className="text-sm font-medium uppercase text-gray-500">{politician.parties?.name}</p>
          <p className="text-sm font-medium uppercase text-gray-500">Número: {politician.candidate_number}</p>
        </div>
      </div>

      <CandidateStances stances={politician.politician_stances} />

      <table className={colorFinalScoreArea(politician.points)}>
        <tbody className="font-bold uppercase">
          <tr>
            <td className="pl-2 text-grey-600">Nota final</td>
            <td className="pr-4.5 text-right text-lg">
              <span className={colorPoints(politician.points)}>{politician.points}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

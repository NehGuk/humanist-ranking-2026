import CandidateStances from "../CandidateStances/CandidateStances"
import type { Politician } from "../../types"
import colorPoints from "../../utils/colorPoints"

interface CandidateDetailsProps {
  politician: Politician
}

export default function CandidateDetails({ politician }: CandidateDetailsProps) {
  return (
    <section className="flex min-h-screen flex-col max-w-md">
      <div id={`candidate-${politician.id}`} className=" p-3 bg-white">
        <div className="flex gap-3 mb-6">
          <div className="">
            <img
              src={politician.photo_url ?? undefined}
              alt={politician.name}
              className="h-22 w-22 rounded-full border-1 shrink-0 border-gray-200 object-cover grayscale"
            />
          </div>
          <div className="my-auto">
            <h4>{politician.name}</h4>
            <p className="uppercase text-sm text-gray-500 font-medium">{politician.parties?.name}</p>
            <p className="uppercase text-sm text-gray-500 font-medium">Número: {politician.candidate_number}</p>
          </div>
        </div>
        <CandidateStances stances={politician.politician_stances} />

        <table className="w-full max-w-xl text-sm table-fixed border-1 border-gray-400 mt-2">
          <tbody className="font-bold uppercase">
            <tr className="">
              <td className="pl-2 text-gray-500">Nota final</td>
              <td className="pr-3 text-right text-xl">
                <span className={colorPoints(politician.points)}>{politician.points}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

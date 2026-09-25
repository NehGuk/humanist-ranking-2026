import CandidateStances from "../CandidateStances/CandidateStances"
import type { Politician } from "../../types"

interface CandidateDetailsProps {
  politician: Politician
}

export default function CandidateDetails({ politician }: CandidateDetailsProps) {
  return (
    <section id={`candidate-${politician.id}`}>
      <img src={politician.photo_url ?? undefined} alt={politician.name} width={200} />
      <h3>{politician.name}</h3>
      <p>{politician.parties?.name}</p>
      <CandidateStances stances={politician.politician_stances} />
    </section>
  )
}

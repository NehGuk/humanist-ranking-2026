export type Stance = "A_FAVOR" | "CONTRA" | "SEM_POSICIONAMENTO"

export type Politician = {
  id: number
  name: string
  candidate_number: number
  points: number
  photo_url: string | null
  parties: { name: string; acronym: string } | null
  politician_stances: {
    stance: Stance
    humanist_criteria: { slug: string; label: string; sort_order: number }
  }[]
}

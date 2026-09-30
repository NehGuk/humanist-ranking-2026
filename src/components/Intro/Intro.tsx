import { ChevronsDown } from "lucide-react"
import questions from "../../assets/illustrations/questions.gif"
export default function Intro() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <img src={questions} alt="Illustration of citizen in doubt" className="w-6/7 md:w-max h-auto" />
      <p className="py-3 font-medium text-gray-500">Eleições 2026 | Brasil</p>

      <h2 className="py-2 text-4xl">Presidenciáveis</h2>
      <p className="text-center text-2xl">
        Como os candidatos pontuam em quesitos relacionados a pautas <strong className="text-yellow-600">humanistas</strong>?
      </p>
      <a href="#">
        <ChevronsDown className="mb-8 mt-4 h-12 w-20 text-green-700" />
      </a>
    </section>
  )
}

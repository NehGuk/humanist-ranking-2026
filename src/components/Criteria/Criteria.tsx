import { CircleCheck, CircleQuestionMark, CircleX, ChevronsDown } from "lucide-react"

export default function Criteria() {
  return (
    <section id="criteria" className="flex min-h-screen flex-col scroll-mt-14 bg-green-800 p-5 text-gray-50 md:justify-center">
      <div className="mx-auto w-full max-w-xl">
        <h3 className="mt-12 text-2xl font-bold text-gray-50 md:text-3xl font-slab">Critérios</h3>
        <p className="max-w-prose text-sm md:text-lg">
          Selecionamos 12 pautas humanistas contemporâneas. Após verificar manifestações públicas dos candidatos e candidatas, em suas redes
          sociais e principais veículos de mídia do país, estabelecemos uma escala de pontuação. A nota final considera posições públicas{" "}
          <strong>a favor</strong> do tema (+1), <strong>contra</strong> (-1) ou <strong>sem posicionamento conhecido</strong> (0) a
          respeito do assunto.
        </p>

        <div className="mt-9">
          <h4 className="mb-4 text-lg text-gray-50 md:text-xl">Legenda</h4>
          <table className="w-full table-fixed rounded-md bg-green-900 text-center text-gray-200 text-sm font-slab uppercase md:text-base">
            <thead>
              <tr>
                <th scope="col" className="p-5">
                  <CircleCheck className="mx-auto text-brand" />
                </th>
                <th scope="col" className="p-5">
                  <CircleQuestionMark className="mx-auto text-gray-400" />
                </th>
                <th scope="col" className="p-5">
                  <CircleX className="mx-auto text-red-400" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>A favor</th>
                <th>Sem posição</th>
                <th>Contra</th>
              </tr>
              <tr>
                <th className="p-5 text-xl">+1</th>
                <th className="p-5 text-xl">0</th>
                <th className="p-5 text-xl">-1</th>
              </tr>
            </tbody>
          </table>
        </div>
        <a href="#candidate-details" className="mx-auto block w-fit pt-6 md:pt-20">
          <ChevronsDown className="mb-8 mt-4 h-12 w-20 text-white animate-bounce" />
        </a>
      </div>
    </section>
  )
}

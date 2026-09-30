import { CircleCheck, CircleQuestionMark, CircleX, ChevronsDown } from "lucide-react"

export default function Criteria() {
  return (
    <section id="criteria" className="flex min-h-screen flex-col scroll-mt-14 bg-green-800 p-5 text-gray-50 md:justify-center">
      <div className="mx-auto w-full max-w-xl">
        <h3 className="mt-12 text-2xl font-bold text-gray-50 md:text-3xl">Critérios</h3>
        <p className="max-w-prose text-sm md:text-base">
          Selecionamos 12 pautas humanistas contemporâneas. Após verificar manifestações públicas dos candidatos e candidatas, em suas redes
          sociais e principais veículos de mídia do país, estabelecemos uma escala de pontuação. A nota final considera posições públicas{" "}
          <strong>a favor</strong> do tema (+1), <strong>contra</strong> (-1) ou <strong>sem posicionamento conhecido</strong> (0) a
          respeito do assunto.
        </p>

        <div className="mt-9">
          <h4 className="mb-4 text-lg font-bold text-gray-50 md:text-xl">Legenda</h4>
          <table className="w-full table-fixed rounded-md bg-green-900 text-center">
            <tbody className="text-sm font-medium uppercase md:text-base">
              <tr>
                <td className="p-3">
                  <CircleCheck className="mx-auto text-brand" />
                </td>
                <td>
                  <CircleQuestionMark className="mx-auto text-gray-400" />
                </td>
                <td>
                  <CircleX className="mx-auto text-red-400" />
                </td>
              </tr>
              <tr className="text-gray-300 text-sm font-bold">
                <td className="p-3">A favor</td>
                <td>Sem posição</td>
                <td>Contra</td>
              </tr>
            </tbody>
          </table>
        </div>
        <a href="#candidate-details" className="mx-auto block w-fit pt-14 md:pt-20">
          <ChevronsDown className="mb-8 mt-4 h-12 w-20 text-white" />
        </a>
      </div>
    </section>
  )
}

import some from "../../assets/illustrations/some.gif"
export default function Period() {
  return (
    <section id="periodo" className="flex min-h-screen flex-col scroll-mt-14 bg-gray-600 p-5 text-gray-50 justify-center">
      <div className="mx-auto w-full max-w-xl text-center">
        <h3 className="mt-12 text-gray-50">Período de análise</h3>
        <p className="max-w-prose md:text-lg">
          As informações que embasaram a construção desse <em>ranking</em> foram compiladas pelas equipes da Humanistas Brasil e do Coletivo
          Humanista de São Paulo, entre as datas <strong>05/09/2026</strong> e <strong>13/09/2026</strong>.
        </p>
        <div className="flex flex-col mt-10">
          <img src={some} alt="Illustration of social media" className="max-w-1/2 md:w-max h-auto mx-auto" />
        </div>
      </div>
    </section>
  )
}

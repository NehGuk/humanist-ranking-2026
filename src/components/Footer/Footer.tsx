import logo from "../../assets/logos/logo.png"
export default function Footer() {
  return (
    <section className="p-10 text-sm md:max-w-1/3 mx-auto">
      <img src={logo} className="w-40 h-auto mx-auto" />
      <p className="mt-4">
        A{" "}
        <a href="https://humanistas.ong.br" target="_blank" className="text-green-700 font-bold">
          Humanistas Brasil
        </a>{" "}
        é uma associação que promove o humanismo secular no Brasil. O humanismo secular é uma filosofia de vida que promove valores
        epistêmicos e morais baseados na ciência e na natureza humana, rejeitando dogmas e superstições. Somos parte da{" "}
        <a href="https://humanists.international/" target="_blank" className="text-green-700 font-bold">
          Humanists International
        </a>{" "}
        e seguimos os princípios da{" "}
        <a
          href="https://humanists.international/pt/o-que-%C3%A9-humanismo/a-declara%C3%A7%C3%A3o-de-Amsterd%C3%A3/"
          target="_blank"
          className="text-green-700 font-bold"
        >
          Declaração de Amsterdã
        </a>
        .
      </p>
      <hr className="m-5 text-yellow-600"></hr>

      <div className="text-sm p-5 text-gray-500">
        <p>
          O <em>Ranking Humanista</em> é uma parceria entre a Humanistas Brasil e o Coletivo Humanista de São Paulo.
        </p>
        <div className="pt-5">
          <a href="https://storyset.com/people" target="_blank">
            Crédito das ilustrações: Storyset
          </a>
        </div>
      </div>
    </section>
  )
}

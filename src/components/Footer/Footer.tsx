import logo from "../../assets/logos/logo.png"
export default function Footer() {
  return (
    <>
      <img src={logo} />
      <p>
        A Humanistas Brasil é uma associação que promove o humanismo secular no Brasil. O humanismo secular é uma filosofia de vida que
        promove valores epistêmicos e morais baseados na ciência e na natureza humana, rejeitando dogmas e superstições.
      </p>
      <ul>
        <li>
          <a href="https://humanistas.ong.br" target="_blank">
            Humanistas Brasil
          </a>
        </li>
        <li>
          <a href="https://humanists.international/" target="_blank">
            Humanists International
          </a>
        </li>
      </ul>
      <p>Este projeto é uma parceria entre a Humanistas Brasil e o Coletivo Humanista de São Paulo.</p>
      <a href="https://storyset.com/people">People illustrations by Storyset</a>
    </>
  )
}

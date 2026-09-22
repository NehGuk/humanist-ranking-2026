import logoSimples from "../../assets/logos/logo.png"
export default function Nav() {
  return (
    <>
      <img src={logoSimples} alt="Vite logo" />
      <nav>
        <ul>
          <li>Início</li>
          <li>Ranking</li>
          <li>Metodologia</li>
          <li>Quem somos</li>
        </ul>
      </nav>
    </>
  )
}

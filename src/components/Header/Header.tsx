import logoSimplesTransparente from "../../assets/logos/logo-simples-transparente.png"
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white flex items-center justify-between gap-3 px-2 py-2">
      <a href="#intro">
        <img src={logoSimplesTransparente} alt="Logo Humanistas Brasil" className="h-10 w-10 object-contain" />
      </a>
      <h1 className="text-xl text-emerald-800 pr-3 md:mx-auto">Ranking Humanista</h1>
    </header>
  )
}

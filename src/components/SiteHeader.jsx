const leftNav = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Approach', 'approach'],
  ['Pathways', 'pathways'],
  ['Research', 'research'],
]
const rightNav = [
  ['Community', 'community'],
  ['Support', 'support'],
  ['Contact', 'contact'],
]

function NavLink({ label, route, activeRoute }) {
  return (
    <a href={`#/${route}`} className={activeRoute === route ? 'active' : ''}>
      {label}
    </a>
  )
}

export default function SiteHeader({ route }) {
  return (
    <header className="topbar">
      <nav className="nav nav-left">
        {leftNav.map(([label, key]) => (
          <NavLink key={key} label={label} route={key} activeRoute={route} />
        ))}
      </nav>

      <a href="#/home" className="brand">
        <div className="brand-mark">✿</div>
        <div className="brand-text">
          <div className="brand-title">Liuli Society</div>
          <div className="brand-sub">OF AMERICA</div>
        </div>
      </a>

      <nav className="nav nav-right">
        {rightNav.map(([label, key]) => (
          <NavLink key={key} label={label} route={key} activeRoute={route} />
        ))}
      </nav>
    </header>
  )
}

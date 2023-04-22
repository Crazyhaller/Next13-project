import Link from 'next/link'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">Next-13 Project</Link>
        </div>
        <div className="links">
          <Link href="/about">About</Link>
          <Link href="/about/team">Team</Link>
          <Link href="/code/repos">My GitHub Repos</Link>
        </div>
      </div>
    </header>
  )
}

export default Header

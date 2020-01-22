import Link from 'next/link'

export default function Header() {
  return (
    <div className="header-box">
      <Link href="/">
        <div className="header-item item-1 item-side">
          <a className="header-text">Accueil</a>
        </div>
      </Link>
      <Link href="/associations">
        <div className="header-item item-2 item-mid">
          <a className="header-text">Nos associations</a>
        </div>
      </Link>
      <Link href="/entreprises">
        <div className="header-item item-3 item-mid">
          <a className="header-text">Nos entreprises</a>
        </div>
      </Link>
      <Link href="/#missions">
        <div className="header-item item-4 item-side">
          <a className="header-text">
            REJOIGNEZ <b>N</b>OUS
          </a>
        </div>
      </Link>
    </div>
  )
}

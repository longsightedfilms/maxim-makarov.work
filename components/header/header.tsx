import Link from 'next/link'

export default function AppHeader(): any {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link href="/">
          <a className="brand">
            Maxim Makarov
            <span className="brand__subtitle">Front-end Developer</span>
          </a>
        </Link>
        <Link href="/">
          <a className="nav-link">
            Главная
          </a>
        </Link>
        <Link href="#about-me">
          <a className="nav-link">
            Обо мне
          </a>
        </Link>
        <Link href="#portfolio">
          <a className="nav-link">
            Портфолио
          </a>
        </Link>
        <Link href="#contacts">
          <a className="nav-link">
            Контакты
          </a>
        </Link>
      </nav>
      <div className="header__jumbotron">
        <img
          className="img img--jumbotron"
          src="/images/selfie.jpg"
          alt="Maxim Makarov"
          loading="lazy"
        />
        <p className="description">Привет всем, меня зовут Максим, и я - Junior Frontend-разработчик</p>
        <div className="button-group">
          <a
            className="button button--primary"
            href="https://github.com/longsightedfilms"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            className="button button--primary"
            href="/files/cv.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Скачать резюме
          </a>
        </div>
      </div>
    </header>
  )
}

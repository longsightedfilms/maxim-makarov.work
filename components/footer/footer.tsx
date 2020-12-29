export default function AppFooter(): any {
  return (
    <footer id="contacts" className="footer">
      <div className="footer__container">
        <div className="column">
          <p>Макаров Максим Александрович</p>
          <p>Имею статус самозанятого</p>
          <p>ИНН: 772797669444</p>
        </div>
        <div className="column">
          <div className="footer__contacts">
            <a
              href="https://github.com/longsightedfilms"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://www.fl.ru/users/longsightedfilm"
              target="_blank"
              rel="noreferrer"
            >
              Профиль на fl.ru
            </a>
            <a href="mailto:aks11311@gmail.com">
              Почта
            </a>
            <a href="https://discordapp.com/users/375800142432829442">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

type CardPortfolioProps = {
  title: string;
  slug?: string;
  thumbnail: string;
  description: string;
  tech_stack: string[];
  links: {
    repo?: string;
    demo?: string;
  }
}

const CardPortfolio: React.FunctionComponent<CardPortfolioProps> = ({
  title,
  thumbnail,
  description,
  tech_stack,
  links
}: CardPortfolioProps) => {
  function stringifyTechStack(stack: string[]): string {
    return stack.join(', ')
  }

  function absImageLink(img: string): string {
    return `https://backend.maxim-makarov.work/${img}`
  }

  return (
    <div className="card card--portfolio">
      <img
        className="card__thumbnail"
        src={ absImageLink(thumbnail) }
        alt={ title }
        loading="lazy"
      />
      <div className="card__properties">
        <b className="title">{ title }</b>
        <p className="description">{ description }</p>
        <p className="tags">{ stringifyTechStack(tech_stack) }</p>
        <div className="links">
          {links.demo &&
            <a
              className="button button--primary"
              href={links.demo}
              target="_blank"
              rel="noreferrer"
            >
              Демо
            </a>
          }
          {links.repo &&
            <a
              className="button button--primary"
              href={links.repo}
              target="_blank"
              rel="noreferrer"
            >
              Исходный код
            </a>
          }
        </div>
      </div>
    </div>
  )
}

export default CardPortfolio

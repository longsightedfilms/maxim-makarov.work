import CardPortfolio from '../../card/card-portfolio'

type PortfolioBlockProps = {
  data: any[]
}

const IndexPagePortfolioBlock: React.FunctionComponent<PortfolioBlockProps> = ({
  data
}: PortfolioBlockProps) => {
  return (
    <div className="block block--portfolio">
      <h2 id="portfolio" className="block__title">Портфолио</h2>
      { data.map((item: any) => (
        <CardPortfolio
          key={item._id}
          title={item.title}
          thumbnail={item.thumbnail.path}
          description={item.description}
          tech_stack={item.tech_stack}
          links={item.links}
        />
      )) }
    </div>
  )
}

export default IndexPagePortfolioBlock;

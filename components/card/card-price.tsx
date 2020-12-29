type CardPriceProps = {
  title: string;
  price: number | string;
  type?: 'project' | 'hourly' | 'monthly';
  description: string;
}

const CardPrice: React.FunctionComponent<CardPriceProps> = ({ title, price, type , description }: CardPriceProps) => {
  function paymentType(type?: CardPriceProps["type"]): string {
    switch(type) {
      case 'hourly':
        return 'в час'
      case 'monthly':
        return 'в месяц'
      default:
        return 'за один проект'
    }
  }
  return (
    <div className="card card--price">
      <b className="title">{ title }</b>
      <p className="price">{ price }&#8381; { paymentType(type) }</p>
      <p className="description">{ description }</p>
    </div>
  )
}

export default CardPrice

import CardPrice from '../../card/card-price'

export default function IndexPagePricingBlock(): any {
  return (
    <div className="block block--pricing">
      <h2 id="pricing" className="block__title">Прайс-лист</h2>
      <CardPrice
        title="Верстка"
        price="от 3000"
        description="Верстка лендинга, многостраничных сайтов, интернет-магазинов. Натяжка на движок не включена в услугу."
      />
      <CardPrice
        title="Frontend-разработка"
        price="600"
        type="hourly"
        description="Программирование нужного функционала с использованием фреймворков и сторонних библиотек. Не более 40 часов в неделю."
      />
      <CardPrice
        title="Удаленная работа"
        price="40000"
        type="monthly"
        description="Официальное трудоустройство, либо работа как самозанятый."
      />
    </div>
  )
}

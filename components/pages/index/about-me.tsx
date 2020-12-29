export default function IndexPageAboutMeBlock(): any {
  return (
    <div className="block block--about-me">
      <h2 id="about-me" className="block__title">Обо мне</h2>
      <div className="column">
        <p>Занимаюсь вёрсткой страниц и front-end разработкой сайтов. Мой суммарный опыт - 1,5 года. Верстал как и одностраничники, так и интернет-магазины.</p>
      </div>
      <div className="column">
        <h3>Технический стек:</h3>
        <ul>
          <li>HTML5, CSS3</li>
          <li>Javascript (стандарты ES2015 - ES2019)</li>
          <li>Препроцессоры CSS - Sass, Less</li>
          <li>Typescript</li>
          <li>Сборщики - Webpack, Rollup</li>
          <li>Node.js (иногда)</li>
        </ul>
        <h4>Используемые фреймворки:</h4>
        <ul>
          <li><b>SPA фреймворки</b></li>
          <li>Vue.js 2 - средние знания</li>
          <li>React 16+ - базовые знания</li>
          <li>Svelte 3 - базовые знания</li>
          <li><b>Изоморфные (SSR) фреймворки</b></li>
          <li>Nuxt.js 2 - средние знания</li>
          <li>Next.js 9+ - базовые знания</li>
          <li><b>Фреймворки для настольных приложений</b></li>
          <li>Electron - средние знания</li>
          <li><b>CSS фреймворки</b></li>
          <li>Bootstrap 4 - 4.5</li>
          <li>PrimeVue</li>
        </ul>
      </div>
    </div>
  )
}

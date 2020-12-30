import { axiosInstance } from '../plugins/axios'
import Head from 'next/head'
import AboutMe from '../components/pages/index/about-me'
import Portfolio from '../components/pages/index/portfolio'
import Pricing from '../components/pages/index/pricing'

type IndexPageProps = {
  portfolio: any[];
}

const Home: React.FunctionComponent<IndexPageProps> = ({
  portfolio
}: IndexPageProps) => {
  return (
    <>
      <Head>
        <title>Максим Макаров - Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Junior front-end разработчик, 1.5 года опыта. Vue.js, React, Svelte, Next.js, Nuxt.js" />
        <meta property="og:url" content="https://maxim-makarov.work" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Максим Макаров - Frontend Developer" />
        <meta property="og:image" content="https://maxim-makarov.work/images/selfie.jpg" />
        <meta property="og:image:alt" content="Maxim Makarov" />
        <meta property="og:description" content="Junior front-end разработчик, 1.5 года опыта. Vue.js, React, Svelte, Next.js, Nuxt.js" />
        <meta property="og:site_name" content="Максим Макаров - Frontend Developer" />
        <script src="/js/metrika.js" />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/70900201"
              style={{
                position: 'absolute',
                left: '-9999px'
              }}
              alt=""
            />
          </div>
        </noscript>
      </Head>

      <main className="block__container">
        <AboutMe />
        <Portfolio data={portfolio} />
        <Pricing />
      </main>
    </>
  )
}

export default Home;

export async function getServerSideProps(): Promise<any> {
  const portfolio = (await axiosInstance.get('/portfolio')).data.entries;

  return {
    props: {
      portfolio
    },
  }
}

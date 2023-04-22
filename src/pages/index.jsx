import Head from 'next/head'
import { Roboto } from 'next/font/google'
import LandingPage from '@/components/LandingPage'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto', weight: ["400"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Paul McNamara</title>
        <meta name="description" content="Explore Paul's portfolio and discover his creative and innovative approach to design. With a keen eye for detail and a passion for delivering exceptional results, Paul's portfolio showcases his diverse range of skills in graphic design, web development, and branding. Browse through his work and be inspired by his talent and expertise." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={roboto.variable}>
        <LandingPage />
      </div>
    </>
  )
}

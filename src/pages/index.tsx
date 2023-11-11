import Head from 'next/head'
import { Edu_TAS_Beginner } from 'next/font/google'
import MainPage from '@/components/mainPage'
import styles from '@/styles/Home.module.css'

const edu_tas_beginner = Edu_TAS_Beginner({
  weight: ['400', '500'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <>
      <style jsx global>{`
        * {
          font-family: ${edu_tas_beginner.style.fontFamily};
        }
      `}</style>

      <Head>
        <title>Rick and Morty Characters</title>
        <meta name="description" content="Rick and Morty Characters" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main  >
        <MainPage />
        <p className={styles.builtText}>Built by <a href='https://www.elenadiaz.space' className={styles.link}>Elena Diaz</a></p>
      </main>
    </>
  )
}

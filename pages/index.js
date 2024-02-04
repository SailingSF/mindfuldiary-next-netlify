import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title> My Mindful Diary</title>
        <link rel="icon" href="/favicon.ico" />
        <script src='https://cdn.tailwindcss.com'></script>
      </Head>
      <nav className={styles.navbar}>
        <div className={styles.brand}>Mindful Diary</div>
        <div className={styles.navLinks}>
          <a href='#' className={styles.navLinkItem}>About</a>
          <a href='#' className={styles.navLinkItem}>Features</a>
          <a href='#' className={styles.navLinkItem}>Team</a>
        </div>
      </nav>
      <main>
        <Header title="My Mindful Diary" />
        <p className="description">
          An AI Guided Journaling Experience
        </p>
      <div className='spaceBreak'></div>
      
      <div className='columns-container'>
        <div className='column-box'>Encourage Your Journaling Habit</div>
        <div className='column-box'>Track Your Thoughts and Emotions</div>
        <div className='column-box'>Be Heard!</div>
      </div>
      </main>
      
      <Footer />
    </div>
  )
}

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
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <div className='intro' style={{ flex: 1}}>
          <Header title="My Mindful Diary" />
            <p className="description">
              An AI Guided Journaling Experience
            </p>
        </div>
        <img src='/mockup_01.png' style={{ width: '33%'}} alt='Mockup Interaction' />
      </div>
        
      <div className='spaceBreak'></div>
      
      <div className='columns-container'>
        <div className='column-box'>
          <h3>Encourage Your Journaling Habit</h3>
          <ul>
            <li>Smart AI Generated Reminders</li>
            <li>Prompts based on your history</li>
          </ul>
        </div>
        <div className='column-box'>
          <h3>Track Your Thoughts and Emotions</h3>
          <ul>
            <li>Ask for reflections on journal entries</li>
            <li>Receive analysis and insights</li>
          </ul>
        </div>
        <div className='column-box'>
          <h3>Be Heard!</h3>
          <ul>
            <li>Comforting answers</li>
            <li>Infinite patience of an AI</li>
          </ul>
        </div>
      </div>
      </main>
      
      <Footer />
    </div>
  )
}

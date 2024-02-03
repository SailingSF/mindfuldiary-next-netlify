import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title> My Mindful Diary</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="My Mindful Diary" />
        <p className="description">
          An AI Guided Journaling Experience
        </p>
        <p>A new line of text</p>
      </main>
      <div className='columns-container'>
        <div className='column-box'>Encourage Your Journaling Habit</div>
        <div className='column-box'>Track Your Thoughts and Emotions</div>
        <div className='column-box'>Be Heard!</div>
      </div>
      
      <Footer />
    </div>
  )
}

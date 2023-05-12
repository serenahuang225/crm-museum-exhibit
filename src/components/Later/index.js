import './index.scss'
import { useState } from 'react'

const Later = () => {
  const [scrollAtBottom, setScrollAtBottom] = useState(false)
  const trackScrolling = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

    if (bottom) {
      setScrollAtBottom(true)
    } else {
      setScrollAtBottom(false)
    }
  }

  return (
    <div className='container' onScroll={trackScrolling}>
      {!scrollAtBottom && <div className='arrowDown' />}

      <section className='card'>
        <h1>The Later Civil Rights Movement</h1>
        <h3>1960s</h3>
        
      </section>
    </div>
  )
}

export default Later
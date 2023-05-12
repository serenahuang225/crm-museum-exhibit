import './index.scss'
import { useState } from 'react'

const People = () => {
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
        <h1>Actors in the Civil Rights Movement</h1>
        <p>Showcasing Martin Luther King Jr., Malcom X, and John Lewis</p>
      </section>
    </div>
  )
}

export default People
import { Link } from 'react-router-dom'
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
        <h1 className="mb2">Major Actors in the Civil Rights Movement</h1>
        <h3>Showcasing Martin Luther King Jr. and Malcom X</h3>
      </section>

      <section className='card'>
        <h2 className="mb2">Dr. Martin Luther King Jr.</h2>
        <iframe className="mb2" width="560" height="315" src="https://www.youtube.com/embed/waxW-R_fFSQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>Martin Luther King Jr.’s grandfather and father were pastors, and he followed in their footsteps after graduating 
          from high school at the age of 15 to attend college and later the Crozer Theological Seminary. He joined the 
          National Association for the Advancement of Colored People (NAACP) and became a member of the executive committee, 
          and led the Montgomery Bus boycott, emerging as a new Civil Rights leader. Then, he became leader of the Southern 
          Christian Leadership Conference (SCLC), and drawing on 
          teachings from Christianity and nonviolent protest methods of Gandhi, he traveled across the country to speak 2,500 
          times, including at the March on Washington. Additionally, he led massive protests such as the Birmingham Campaign. 
          After the Civil Rights Acts were passed, King began to focus on other issues such as fair housing and peace in Vietnam.
          However, he was assassinated.</p>
      </section>

      <section className='card'>
        <h2 className="mb2">Malcom X</h2>
        <iframe className="mb2" width="560" height="315" src="https://www.youtube.com/embed/Gj89PEVUM88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>Born 1 of 8 children, Malcolm X grew up surrounded by racism and poverty. White racists tried to burn down his 
          childhood home, his father died when he was young, and mother was placed in a mental hospital. Malcom X then lived a 
          street life in the Black ghetto, becoming familiar with drugs and crime. He was arrested and put in prison for 10 years, 
          and there, he began to read and learn about the Nation of Islam, which he joined. Malcom X became an eloquent speaker 
          and attracted many new members to the movement, but that came into conflict with leaders of the Nation of Islam. 
          Malcom X later made a pilgrimage to Mecca and when he returned, he began to unify African American groups and work 
          with Muslims as well as Marxists. However, he was assassinated a year later.</p>
      </section>

      <section className='card'>
        <Link className='next-button' to="/speeches">To important speeches in the Civil Rights Movement</Link>
      </section>
    </div>
  )
}

export default People
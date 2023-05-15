import { Link } from 'react-router-dom'
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
        <h1 className='mb2'>The Later Civil Rights Movement</h1>
        <h2>1960s</h2>
      </section>

      <section className='card'>
        <h1 className="mb1">Defining characteristics</h1>
        <h2 className="mb2">of the Later Civil Rights Movement</h2>
        <ul>
          <li className='h3'>Goals shift <span className='p'>(focus on ending de facto segregation)</span></li>
          <li className='h3'>Movement fragments</li>
          <li className='h3'>Assassination of early Civil Right Movement leaders</li>
          <li className='h3'>More people are open to using violence when necessary</li>
        </ul>
      </section>

      <section className='card'>
        <h2 className="mb2">The Selma to Montgomery marches and Bloody Sunday, 1965</h2>
        <iframe className="mb2" width="560" height="315" src="https://www.youtube.com/embed/Vd6D64Ai49I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>Even after the passage of the Civil Rights Act of 1964, many states in the South <span className='bold'>continued 
        to oppress African Americans</span>, and in this case, they refused to give African Americans the right to vote. That 
        led <span className='bold'>John Lewis and 600</span> other protestors to attempt to march from Selma to Montgomery, 
        but they were <span className='bold'>violently attacked</span> by the Alabama State Troopers. This was broadcasted 
        on <span className='bold'>live TV</span> for the world to see, and lead to the passing of the <span className='bold'>Voting 
        Rights Act of 1965</span>, which <span className='bold'>banned discriminatory voting practices</span>, including literacy tests.</p>
      </section>

      <section className='card'>
        <h2 className="mb2">The Watts Riots, 1965</h2>
        <img
          alt="The aftermath of the Watts Riots"
          className='exhibit-image'
          src='https://assets.editorial.aetnd.com/uploads/2017/09/gettyimages-514677808.jpg?width=1248&height=624&crop=1248%3A624%2Csmart&quality=75' 
        />
        <p>The Watts Riots was the <span className='bold'>largest and costliest riot</span> of the Civil Rights Era, lasting 
        for <span className='bold'>6 days</span> in the neighborhood of Watts and the Los Angeles, California area. Fighting broke 
        out after two African Americans were arrested, which came from <span className='bold'>resentment of ongoing police 
        brutality</span>, resulting in <span className='bold'>over 1,000</span> deaths and injuries, <span className='bold'>4,000</span> arrests, 
        and the destruction of <span className='bold'>1,000</span> buildings, which totaled <span className='bold'>$40 million</span> in 
        damages. Violence continued in other parts of the country.</p>
      </section>

      <section className='card'>
        <h2 className="mb2">Walk Against Fear, 1966</h2>
        <img
          alt="Bernard Lee, the Rev. Dr. Martin Luther King Jr., Stokely Carmichael, and Willie Ricks walkign together"
          className='exhibit-image'
          src='https://www.blackpast.org/wp-content/uploads/Bernard-Lee-Martin-Luther-King-Stokely-Carmiachel-Willie-Ricks-Enjoy-a-Moment-of-Levity-Stanford-University-768x570.png' 
        />
        <p><span className='bold'>James Meredith</span>, the first African American student at the University of Mississippi, 
        began a march by himself to <span className='bold'>protest racial violence</span>. However, after he was shot on the 
        second day of his march, <span className='bold'>major civil rights leaders</span> such as Dr. Martin Luther King Jr. 
        of the SCLC, Floyd McKissick of CORE, and Stokely Carmichael of the SNCC continued the march and many others joined in as 
        well. However, the <span className='bold'>differences between nonviolent protestors and those who disagreed</span> became 
        apparent when Carmichael gave his <span className='bold'>“Black Power”</span> speech, and led the crowd in a chant of 
        “We want Black Power!”</p>
      </section>

      <section className='card'>
        <h2 className="mb2">The Fair Housing Act of 1968</h2>
        <iframe className="mb2" width="560" height="315" src="https://www.youtube.com/embed/94TVHAJtang" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>Also called the <span className='bold'>Civil Rights Act of 1968</span>, this piece of 
        legislation <span className='bold'>protects against discrimination</span> when renting, buying, selling, 
        or financing <span className='bold'>real estate</span>. Congress considered this bill multiple times, 
        but failed. After <span className='bold'>Martin Luther King, Jr.</span>, one of the largest supporters of the bill, was 
        assassinated, President Johnson pushed Congress to pass this bill in memory of him.</p>
      </section>

      <section className='card'>
        <Link className='next-button' to="/people">To important actors in the Civil Rights Movement</Link>
      </section>
    </div>
  )
}

export default Later
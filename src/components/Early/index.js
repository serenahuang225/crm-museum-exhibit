import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'

const Early = () => {
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
        <h1 className='mb2'>The Early Civil Rights Movement</h1>
        <h2>1950s and early 60s</h2>
      </section>
      
      <section className='card'>
        <h1 className="mb1">Defining characteristics</h1>
        <h2 className="mb2">of the Early Civil Rights Movement</h2>
        <ul>
          <li className='h3'>Legal action <span className='p'>(focus on ending de jure segregation)</span></li>
          <li className='h3'>Civil disobedience</li>
          <li className='h3'>Nonviolent resistance</li>
          <li className='h3'>Mass demonstrations</li>
        </ul>
      </section>

      <section className='card'>
        <h2 className="mb2">Brown v. Board of Education, 1954</h2>
        <img
          alt="Women and child on Supreme Court Steps after Brown v Board"
          className='exhibit-image'
          src='https://media-cldnry.s-nbcnews.com/image/upload/msnbc/Components/Photos/040121/040121_hmed_brown50_7p.jpg' 
        />
        <p>Brown v. Board of Education was a <span className='bold'>landmark decision</span> by the Supreme Court that overruled the 
        previous legal precedent set by Plessy v. Ferguson, which was the <span className="bold">“separate but equal”</span> idea, 
        allowing segregation to exist. <span className="bold">Thurgood Marshall</span> of the NAACP was the main lawyer. Many other 
        civil rights events followed, making Brown v. Board of Education a <span className="bold">catalyst</span> for the civil rights 
        movement.</p>
      </section>

      <section className='card'>
        <h2 className="mb2">The Montgomery Bus Boycott, 1955</h2>
        <iframe className="mb2" width="560" height="315" src="https://www.youtube.com/embed/FE6Yvy--5aw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>The first large anti-segregation movement began on December 1st, 1955, when <span className='bold'>Rosa Parks</span> refused 
          to move out of the “Whites Only” section on a segregated bus. A few days later, the <span className='bold'>Women’s Political Council</span> began to organize a boycott, 
          which lasted until December 20th, 1956. During that time, the Montgomery City bus lines lost <span className='bold'>30,000-40,000</span> bus
          fares every day due to the boycott. The District Court and later the Supreme court ruled that <span className='bold'>segregation on public 
          buses was unconstitutional</span>.</p>
      </section>

      <section className='card'>
        <h2 className="mb2">Greensboro Four, 1960</h2>
        <img
          alt="Greensboro 4"
          className='exhibit-image'
          src='https://th-thumbnailer.cdn-si-edu.com/Co1LG5otC7DzkcFAKwMcRlERKCs=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/ATM-Object-Greensboro-Woolworth-lunch-counter-631.jpg' 
        />
        <p>On February 1, 1960, four African-American college students sat down at <span className='bold'>Woolworth's</span>, 
        a restaurant that previously exclusively served white people. Though they could not order or eat, they <span className='bold'>sat 
        until closing</span>, launching a wave of college student activism and a new form of nonviolent protest: <span className='bold'>sit-ins</span>. 
        6 months later, Woolworth’s began to serve African Americans as well.</p>
      </section>

      <section className='card'>
        <h2 className="mb2">March on Washington, 1963</h2>
        <iframe className="mb2" width="560" height="315" src="https://www.youtube.com/embed/Qfo7rN7Alu4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>The March on Washington brought <span className='bold'>over a quarter of a million</span> people together of different 
        organizations, races, occupations, and backgrounds at the Washington Monument to <span className='bold'>protest 
        the discrimination</span> African Americans faced in many aspects of life. <span className='bold'>Bayard Rustin and A. Phillip Randolph</span> mainly 
        organized the event, while famous leaders of the movement such as <span className='bold'>Dr. Martin Luther King, Jr.</span> made 
        powerful speeches. This peaceful gathering paved the <span className='bold'>Civil Rights Act of 1964</span> and later 
        the <span className='bold'>Voting Rights Act of 1965</span>.</p>
      </section>

      <section className='card'>
        <h2 className="mb2">Civil Rights Act of 1964</h2>
        <iframe className="mb2" width="560" height="315" src="https://www.youtube.com/embed/6x0l_vkjozc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p>On July 2, 1964, <span className='bold'>President Lyndon B. Johnson</span> signed the Civil Rights Act, a landmark piece 
        of legislation that <span className='bold'>ended de jure segregation</span> and <span className='bold'>illegalized 
        discrimination</span> based on your race in various aspects of life such as in public places, at school, in education, 
        or in employment. After all the events in the 1950’s such as nonviolent protests and marches, America finally took 
        this step in gaining equal rights for everyone.</p>
      </section>

      <section className='card'>
        <Link className='next-button' to="/later">To the Later Civil Rights Movement</Link>
      </section>

    </div>
  )
}

export default Early
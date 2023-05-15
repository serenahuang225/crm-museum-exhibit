import { useState } from 'react';
import './index.scss'

const Speeches = () => {
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
        <h1 className='mb2'>Famous Speeches</h1>
        <h2>that fueled the Civil Rights Movement</h2>
      </section>

      <section className='card'>
        <h2 className='mb1'>"I Have a Dream"</h2>
        <h3 className='mb2 italic'>Martin Luther King Jr.</h3>
        <p className='mb2'>During the March on Washington, on the steps of the Lincoln Memorial, MLK gave his 
        famous, "I Have A Dream" speech. He talked about the problems in America and proclaimed his vision for a racially 
        equal and united one, influencing the government to take more direct action.</p>
        <iframe width="400" height="225" src="https://www.youtube.com/embed/vP4iY1TtS3s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
      </section>

      <section className='card'>
        <h2 className='mb1'>Testimony at the 1964 Democratic National Convention</h2>
        <h3 className='mb2 italic'>Fannie Lou Hamer</h3>
        <p className='mb2'>During Mississippi’s Freedom Summer, Fannie Lou Hamer learned of her right to vote from the 
        Student Nonviolent Coordinating Committee (SNCC). When she attempted to vote, she failed the literacy test and 
        simply from the action of trying to vote, she lost her job, was arrested, threatened, and tortured. In this speech 
        she shares her experience.</p>
        <iframe width="400" height="225" src="https://www.youtube.com/embed/ML3WaEsCB98" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </section>

      <section className='card'>
        <h2 className='mb1'>"Black Power"</h2>
        <h3 className='mb2 italic'>Stokely Carmichael (later known as Kwame Ture)</h3>
        <p className='mb2'>During the time of this speech, Stokely Carmichael was the leader of the Student Nonviolent 
        Coordinating Committee (SNCC). He talks about the term, “Black Power,” and that African Americans should recognize 
        their worth and stop depending on white people. He also calls the war in Vietnam “illegal and immoral,” saying that 
        the US government is killing innocent citizens and that people should resist the draft.</p>
        <iframe width="400" height="225" src="https://www.youtube.com/embed/ifH5X9dYzG8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </section>

      <section className='card'>
        <h2>Thanks for visiting this museum!</h2>
      </section>
    </div>
  )
}

export default Speeches
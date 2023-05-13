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
        <h2 className="mb2">Rooms:</h2>
        
      </section>

      <section className='card'>
        <h2 className="mb2">Brown v. Board of Education, 1954</h2>
        <img
          alt="Women and child on Supreme Court Steps after Brown v Board"
          className='exhibit-image'
          src='https://media-cldnry.s-nbcnews.com/image/upload/msnbc/Components/Photos/040121/040121_hmed_brown50_7p.jpg' 
        />
        <p>Brown v. Board of Education was a <span className='bold'>landmark decision</span> by the Supreme Court that overruled the previous legal 
        precedent set by Plessy v. Ferguson, which was the “separate but equal” idea. This justified Jim Crow segregation laws for the 60 years. However, 
        a group of black parents in <span className='bold'>Topeka, Kansas</span>, went to court against the local school board because their kids 
        weren’t getting equal education opportunities because of segregation. The NAACP combined this with other similar cases across the country (5 cases), 
        with <span className="bold">Thurgood Marshall</span> being the lead NAACP lawyer (later became 1st African American Supreme Court justice). 
        After the unanimous ruling in 1954 that said that <span className="bold">segregation in schools was illegal</span>, many other civil rights events 
        followed, making Brown v. Board of Education a <span className="bold">catalyst</span> for the civil rights movement.</p>        
      </section>

      <section className='card'>
        <h2 className="mb2">The Montgomery Bus Boycott, 1955</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/FE6Yvy--5aw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
      </section>

    </div>
  )
}

export default Early
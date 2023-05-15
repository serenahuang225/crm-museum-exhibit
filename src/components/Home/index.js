import './index.scss'
import { useState } from 'react'

import sources from './sources'
import ImageLink from '../ImageLink/ImageLink'

const Home = () => {
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

      <section className='card' id="title">
        <h1 className="mb2">A FIGHT FOR JUSTICE</h1>
        <h2>This is how the Civil Rights Movement happened.</h2>
      </section>

      <section className='card' id="section02">
        <h2 className="mb2">Rooms:</h2>
        <div className='flexWrap'>
          <ImageLink
            linkTo="/early"
            imgSrc="https://www.blackpast.org/wp-content/uploads/prodimages/files/blackpast_images/Montgomery_Bus_Boycott_1955.jpg"
            imgAlt="Montgomery Bus Boycott"
            description="Early Civil Rights Movement (1950s)"
          />

          <ImageLink
            linkTo="/later"
            imgSrc="https://www.politico.com/dims4/default/b5a01f3/2147483647/strip/true/crop/3898x2590+0+0/resize/630x419!/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F56%2F8f%2F0bd1b7ad4cf5a89fbb007c97d172%2Fjohn-lewis-selma-1965.jpg"
            imgAlt="Bloody Sunday"
            description="Later Civil Rights Movement (1960s)"
          />

          <ImageLink
            linkTo="/people"
            imgSrc="https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2015/02/18/Style/Images/Merlin_252207.jpg?t=20170517"
            imgAlt="Malcom X"
            description="Actors in the Civil Rights Movement"
          />

          <ImageLink
            linkTo="/speeches"
            imgSrc="https://cdn.britannica.com/18/1918-050-0166D6BB/Martin-Luther-King-Jr.jpg"
            imgAlt="Martin Luther King Jr."
            description="Speeches in the Civil Rights Movement"
          />
        </div>
      </section>

      <section className='card'>
        <h3 className="mb1">Works Cited</h3>
        <ul>
        {sources.map(item => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className='card'>
        <p className='mb1'>A digital museum curated by Serena Huang</p>
        <a className='mb1' href='https://github.com/serenahuang225/crm-museum-exhibit'>Code is on GitHub</a>
        <p>Last updated May 14, 2023</p>
      </section>
    </div>
  )
}

export default Home
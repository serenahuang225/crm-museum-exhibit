
import { NavLink } from 'react-router-dom'
import './index.scss'

const Home = () => {

  return (
    <div className='container'>
      <section className='card'>
        <h1>A FIGHT FOR JUSTICE</h1>
        <h2>This is how the Civil Rights Movement happened.</h2>
      </section>

      <section className='card'>
        <h2>Rooms:</h2>
        <div className='flexRow'>
          <NavLink to={"/early"} className="link" style={{marginRight: "2rem"}}>
            <figure>
              <img src="https://www.blackpast.org/wp-content/uploads/prodimages/files/blackpast_images/Montgomery_Bus_Boycott_1955.jpg" alt="Montgomery Bus Boycott"/>
              <figcaption>Early Civil Rights Movement (1950s)</figcaption>
            </figure>
          </NavLink>

          <NavLink to={"/later"} className="link" style={{marginRight: "2rem"}}>
            <figure>
              <img src="https://www.politico.com/dims4/default/b5a01f3/2147483647/strip/true/crop/3898x2590+0+0/resize/630x419!/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F56%2F8f%2F0bd1b7ad4cf5a89fbb007c97d172%2Fjohn-lewis-selma-1965.jpg" alt="Bloody Sunday"/>
              <figcaption>Later Civil Rights Movement (1960s)</figcaption>
            </figure>
          </NavLink>
        </div>

        <div className='flexRow'>
          <NavLink to={"/people"} className="link" style={{marginRight: "2rem"}}>
            <figure>
              <img src="https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2015/02/18/Style/Images/Merlin_252207.jpg?t=20170517" alt="Malcolm X"/>
              <figcaption>Actors in the Civil Rights Movement</figcaption>
            </figure>
          </NavLink>
          <NavLink to={"/speeches"} className="link" style={{marginRight: "2rem"}}>
            <figure>
              <img src="https://cdn.britannica.com/18/1918-050-0166D6BB/Martin-Luther-King-Jr.jpg" alt="Malcolm X"/>
              <figcaption>Speeches in the Civil Rights Movement</figcaption>
            </figure>
          </NavLink>
        </div>
         

      </section>

      <section className='card'>
        <h3>Works Cited</h3>
        <p>https://www.blackpast.org/african-american-history/montgomery-bus-boycott-1955-56/</p>
        <p>politico.com/story/2018/03/07/this-day-in-politics-march-7-1965-437394</p>
        <p>https://www.washingtonpost.com/lifestyle/style/fifty-years-after-his-death-malcolm-x-speaks-to-the-current-moment/2015/02/19/4dba5ca4-091e-4303-b3ee-6a655c583655_story.html</p>
        <p>britannica.com/biography/Martin-Luther-King-Jr</p>
      </section>

      <section className='card'>
        <p>A digital museum curated by Serena Huang</p>
        <p>Last updated May 6, 2023</p>
      </section>
    </div>
  )
}

export default Home
import './index.scss'

const Speeches = () => {
  return (
    <div className='container'>
      <section className='card'>
        <h1>Famous Speeches</h1>
        <h2>that fueled the Civil Rights Movement</h2>
      </section>

      <section className='card'>
        <h2>"I Have a Dream"</h2>
        <h3 style={{fontStyle: "italic"}}>Martin Luther King Jr.</h3>
        <p style={{marginBottom: "2rem", maxWidth: "70rem"}}>On the steps of the Lincoln Memorial, MLK gave his famous, "I Have A Dream" speech. He noted the problems in American and proclaimed his vision for a racially equal and united one, influencing the government to take more direct action.</p>
        <iframe width="400" height="225" src="https://www.youtube.com/embed/vP4iY1TtS3s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
      </section>

      <section className='card'>
        <h2>Testimony at the 1964 Democratic National Convention</h2>
        <h3 style={{fontStyle: "italic"}}>Fannie Lou Hamer</h3>
        <p style={{marginBottom: "2rem"}}>Little description here</p>
        <iframe width="400" height="225" src="https://www.youtube.com/embed/ML3WaEsCB98" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </section>

      <section className='card'>
        <h2>"Black Power"</h2>
        <h3 style={{fontStyle: "italic"}}>Stokely Carmichael (later known as Kwame Ture)</h3>
        <p style={{marginBottom: "2rem"}}>Little description here</p>
        <iframe width="400" height="225" src="https://www.youtube.com/embed/ifH5X9dYzG8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </section>

    </div>
  )
}

export default Speeches
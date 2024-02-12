import Title from 'next/head'

export default function Page() {
  return (
    <>
      <Title>About us - Hology Engine</Title>
      <section className="section-centered">
        <h3>Mission</h3>
        <p className="thick">
          We're enabling the creation of fun and immersive 3D experiences on the web, mobile and VR.
        </p>

      </section>




      <section className="section-columns">
        <div className="container">

          <div className="column column-right-align">
            <img src="adam.jpeg" style={{marginTop: '30px', 'width': '170px', borderRadius: '100%'}} width="170" height="170"></img>
          </div>
          <div className="column">
            <h3>Adam Ringhede</h3>
            <h4>Founder</h4>
            <p>
            Adam is a seasoned developer with a passion for 3D applications and gaming. With startup experience as both a software engineer and product manager, he brings over 13 years of web development expertise to the table. 
            </p>
            <div>
              <a className="social-link" href="https://www.linkedin.com/in/adam-ringhede/" target="_blank"><img src="li.png"></img></a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
export const metadata = {
  title: 'About us - Hology Engine',
}

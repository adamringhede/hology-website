import Title from 'next/head'

export default function Page() {
  return (
    <>
      <Title>Hology Engine Press Kit</Title>
      <section className="section-columns">
        <div className="container">
          <div className="column">
            <h3>Downloads</h3>
            <h2>Logos</h2>
            <p>
              Transparent logo variations in png and svg and different sizes.
            </p>
            <a className="external-link" href="/hology_logos.zip">
              Download
            </a>
          </div>
          <div className="column">
            <img className='big-img' src="logos.avif" alt="Physics engine showing boxes falling" />
          </div>
        </div>
      </section>
    </>
  )
}

export const metadata = {
  title: 'Hology Engine Press Kit',
}

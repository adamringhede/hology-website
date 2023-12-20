export default function Page() {
  return (
    <>
      <section className="section-centered section" id="download">
        <h3>Partner</h3>
        <h2>Let's work together</h2>
        <p style={{ maxWidth: '700px' }}>
          We are looking for game studios that we can work with to develop the
          engine while shaping it to suit your needs. Contact us at{' '}
          <strong>
            <a style={{ cursor: 'pointer' }} href="mailto:hello@hology.app">
              hello@hology.app
            </a>
          </strong>
        </p>
      </section>

      <section className="section-columns">
        <div className="container">
          <div className="column">
            <h3>Influence development</h3>
            <p>
              Your feedback will play a pivotal role in refining features,
              enhancing functionalities, and driving the evolution of our game
              engine. Together, we can co-create a platform that works great for
              your needs.
            </p>
          </div>
          <div className="column">
            <h3>Personalized support</h3>
            <p>
              Whether you're navigating technical challenges or seeking advice
              on optimizing your game development workflow, our support is
              designed to empower you at every step. We provide personalized
              support to ensure your success with Hology Engine.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export const metadata = {
  title: 'Hology Engine - Partner',
}

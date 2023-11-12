import ConvertKitForm from './convertkit-form'

export default function Page() {
  return (
    <div className="app">
      <div className="nav-bar">
        <img className="logo" src="Logo.svg" alt="logo" />
        <div className="links">
          <a href="#features" className="link">
            Features
          </a>
          <a href="#beta" className="link">
            Get started
          </a>
          <a href="https://docs.hology.app/" className="link" target="_blank">
            Docs
          </a>
        </div>
        <a className="twitter-link" href="https://twitter.com/HologyEngine">
          <img src="x.svg" alt="" />
        </a>
      </div>

      <section className="section-centered">
        <h3>A new game engine</h3>
        <p className="thick">
          Hology Engine makes it easier for developers to create 3D games and
          experiences for the Web, Desktop and Mobile.
          <br />
          <br />
          The engine is free to let everyone use it to express their creativity
          in the most fun way possible.
        </p>
      </section>

      <section className="section-columns" id="features">
        <div className="container">
          <div className="column">
            <h3>Feature highlight</h3>
            <h2>Landscape sculpting</h2>
            <p>
              Create vast worlds with landscapes that can be sculpted in the
              editor. Paint areas to assign different materials. Sections are
              automatically loaded or removed based on camera view distance for
              performance.
            </p>
          </div>
          <div className="column">
            <img src="landscape.png" />
          </div>
        </div>
      </section>

      <section className="section-columns">
        <div className="container">
          <div className="column">
            <h3>Feature highlight</h3>
            <h2>Physics</h2>
            <p>
              A high performance built in physics engine enables accurate
              collision detection, ray casting and physics simulations.
            </p>
          </div>
          <div className="column">
            <img src="falling-boxes.png" />
          </div>
        </div>
      </section>

      <section className="section-columns">
        <div className="container">
          <div className="column">
            <h3>Feature highlight</h3>
            <h2>Character movement</h2>
            <p>
              The engine comes with a kinematic character movement component, an
              animation system able to play different animations for upper and
              lower body, seamlessly blending between animations based on
              movement state transitions.
            </p>
            <a
              className="external-link desktop-only"
              href="https://examples.hology.app/third-person-shooter/"
              target="_blank"
            >
              <span className="link-icon">
                <img src="external.svg" alt="" />
              </span>
              Try it out in this demo
            </a>
          </div>
          <div className="column">
            <img src="character.png" />
          </div>
        </div>
      </section>

      <section className="section-columns">
        <div className="container">
          <div className="column">
            <h3>Feature highlight</h3>
            <h2>Custom shaders</h2>
            <p>
              Create graphical effects by writing your own GPU shaders with a
              node based system enabling you to write shaders directly in
              Typescript. The shaders are integrated in the editor so that they
              can be parameterized and reused.
            </p>
          </div>
          <div className="column">
            <img src="editor-water.png" />
          </div>
        </div>
      </section>

      <section className="section-columns">
        <div className="container">
          <div className="column">
            <h3>Feature highlight</h3>
            <h2>Procedural foliage</h2>
            <p>
              Create grass and other foliage automatically across landscapes
              that adapt to the angle of surfaces and vertex painted areas.
            </p>
          </div>
          <div className="column">
            <img src="grass.png" />
          </div>
        </div>
      </section>

      <section className="section-centered" id="beta">
        <h3>Getting started</h3>
        <h2>Sign up for beta testing</h2>
        <p>
          Become an early adopter. Get in contact and get access to the beta.
        </p>
        <div className="waitlist-form">
          <ConvertKitForm></ConvertKitForm>
        </div>
      </section>

      <footer className="footer">
        <p style={{ color: 'hsla(0, 0%, 100%, 0.8' }}>Contact</p>
        <p className="link">hello@hology.app</p>
      </footer>
    </div>
  )
}

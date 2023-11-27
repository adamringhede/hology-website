import ConvertKitForm from './components/convertkit-form'

export const metadata = {
  title: 'Hology Engine - A new game engine for web based games',
}

export default function Page() {

  const video = <iframe width="560" height="315" src="https://www.youtube.com/embed/IpR-0Wm_Zd8?si=Q0dw9rmpVI7rvtv5" title="YouTube video player"  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  return (
    <>
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
        
        {video}
      
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
            <img
              src="landscape.avif"
              alt="Landscape sculpting in Hology Engine"
            />
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
            <img
              src="falling-boxes.avif"
              alt="Physics engine showing boxes falling"
            />
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
                <img src="external.svg" alt="External link icon" />
              </span>
              Try it out in this demo
            </a>
          </div>
          <div className="column">
            <img src="character.avif" alt="3D character showcasing animation" />
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
            <img
              src="editor-water.avif"
              alt="Custom shader to produce a water material"
            />
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
            <img
              src="grass.avif"
              alt="Procedural generation of instanced grass and foliage"
            />
          </div>
        </div>
      </section>


    </>
  )
}

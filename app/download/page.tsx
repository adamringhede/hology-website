import Downloads from './downloads'

export default function Page() {
  return (
    <>
      <section className="section-centered section-download" id="download">
        <h3>Download</h3>
        <h2>Get started now</h2>
        <p>Install the editor to start building.</p>

        <div className="downloads">
          <p>Select your OS</p>
          <Downloads></Downloads>
        </div>
      </section>
    </>
  )
}

export const metadata = {
  title: 'Hology Engine Download',
}

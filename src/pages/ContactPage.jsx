import PageBanner from '../components/PageBanner'
import image from '../assets/about-meeting.jpg'

export default function ContactPage() {
  return (
    <>
      <PageBanner image={image} title="Contact Us" text="We welcome conversations about partnership, education, research, volunteer opportunities, and mission-aligned support." />
      <section className="subpage-content">
        <div className="subpage-grid">
          <article className="subcard">
            <h2>Get in Touch</h2>
            <p>Email: info@liulisociety.org
Phone: (623) 122–4567
Address: Harmony, NH 02834</p>
          </article>
          <article className="subcard">
            <h2>Inquiry Areas</h2>
            <p>Research collaboration, community programming, environmental education, herbal wellness initiatives, volunteer participation, and philanthropic support.</p>
          </article>
        </div>
      </section>
    </>
  )
}

import PageBanner from '../components/PageBanner'
import image from '../assets/forest-path.jpg'

export default function ApproachPage() {
  return (
    <>
      <PageBanner image={image} title="Our Approach" text="We connect holistic wellbeing with sustainable practice by translating ecological values into education, action, and long-term community support." />
      <section className="subpage-content">
        <div className="subpage-grid">
          <article className="subcard">
            <h2>Education First</h2>
            <p>Our work begins with understanding. We believe people are more likely to embrace sustainable ways of life when the knowledge is clear, practical, and grounded in everyday experience.</p>
          </article>
          <article className="subcard">
            <h2>Human and Planetary Wellbeing</h2>
            <p>We treat personal wellbeing and ecological health as interconnected. A healthier environment supports healthier communities, and a more thoughtful society supports both.</p>
          </article>
        </div>
      </section>
    </>
  )
}

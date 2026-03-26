import PageBanner from '../components/PageBanner'
import image from '../assets/research-plant.jpg'

export default function ResearchPage() {
  return (
    <>
      <PageBanner image={image} title="Research" text="We support inquiry and learning around holistic wellbeing, regenerative thinking, herbal traditions, and sustainable health practices." />
      <section className="subpage-content">
        <div className="subpage-grid">
          <article className="subcard">
            <h2>Holistic Inquiry</h2>
            <p>We explore how ecological values, plant knowledge, and integrative wellbeing can contribute to healthier people and healthier communities.</p>
          </article>
          <article className="subcard">
            <h2>Applied Learning</h2>
            <p>Our research-oriented work is not only reflective. It aims to support community education, practical action, and stronger environmental responsibility.</p>
          </article>
        </div>
      </section>
    </>
  )
}

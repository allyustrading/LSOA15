import PageBanner from '../components/PageBanner'
import image from '../assets/research-lab.jpg'

export default function PathwaysPage() {
  return (
    <>
      <PageBanner image={image} title="Our Pathways" text="Our pathways bring together integrative wellness, ecological awareness, herbal traditions, and sustainable practice in ways that support daily life." />
      <section className="subpage-content">
        <div className="subpage-grid">
          <article className="subcard">
            <h2>Herbal Wellness</h2>
            <p>Exploring plant-based traditions and natural support systems that encourage balance, resilience, and mindful care.</p>
          </article>
          <article className="subcard">
            <h2>Eco-Conscious Living</h2>
            <p>Helping people adopt simpler, lower-impact habits that align daily wellbeing with environmental respect.</p>
          </article>
        </div>
      </section>
    </>
  )
}

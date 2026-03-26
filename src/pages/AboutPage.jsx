import PageBanner from '../components/PageBanner'
import image from '../assets/about-meeting.jpg'

export default function AboutPage() {
  return (
    <>
      <PageBanner image={image} title="About Liuli Society of America" text="We are a nonprofit organization dedicated to holistic wellness, environmental stewardship, and sustainable living through education, research, and community engagement." />
      <section className="subpage-content">
        <div className="subpage-grid">
          <article className="subcard">
            <h2>Our Mission</h2>
            <p>Liuli Society of America exists to cultivate a healthier relationship between people, community, and nature. We promote thoughtful living, ecological respect, and long-term public wellbeing.</p>
          </article>
          <article className="subcard">
            <h2>Our Vision</h2>
            <p>We envision communities where holistic wellness and sustainable practice are part of everyday life, supported by education, cultural care, and environmental responsibility.</p>
          </article>
        </div>
      </section>
    </>
  )
}

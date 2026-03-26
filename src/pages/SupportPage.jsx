import PageBanner from '../components/PageBanner'
import image from '../assets/research-plant.jpg'

export default function SupportPage() {
  return (
    <>
      <PageBanner image={image} title="Support Our Work" text="Your support helps expand educational programs, ecological awareness, herbal wellness learning, and community-centered initiatives." />
      <section className="subpage-content">
        <div className="subpage-grid">
          <article className="subcard">
            <h2>Why Support Matters</h2>
            <p>Support enables Liuli Society of America to deepen its educational mission, strengthen community programming, and create a more durable culture of sustainable living and holistic care.</p>
          </article>
          <article className="subcard">
            <h2>Mission-Aligned Giving</h2>
            <p>We welcome support from people and partners who believe ecological stewardship and integrative wellbeing deserve long-term investment and thoughtful public presence.</p>
          </article>
        </div>
      </section>
    </>
  )
}

import heroImage from '../assets/hero-lake.jpg'
import aboutImage from '../assets/about-meeting.jpg'
import approachImage from '../assets/forest-path.jpg'
import pathwaysImage from '../assets/research-lab.jpg'
import communityImage from '../assets/community-group.jpg'
import researchImage from '../assets/research-plant.jpg'
import labImage from '../assets/research-lab.jpg'

function TopCard({ image, title, text, button, buttonClass = 'btn-gold', overlay = true, link = '#/about' }) {
  return (
    <article className="card">
      <img src={image} alt={title} className={overlay ? 'image-tall' : 'image-short'} />
      {overlay ? (
        <div className="overlay-copy">
          <h3>{title}</h3>
          <p>{text}</p>
          <a href={link} className={`btn ${buttonClass}`}>{button}</a>
        </div>
      ) : (
        <div className="bottom-copy">
          <h3>{title}</h3>
          <p>{text}</p>
          <a href={link} className={`btn ${buttonClass}`}>{button}</a>
        </div>
      )}
    </article>
  )
}

export default function HomePage() {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-shade">
          <h1>Cultivating Holistic Wellness &amp; Harmony with Nature</h1>
          <p>
            Empowering minds, bodies, and our planet through integrative education,
            sustainable practices, and environmental stewardship.
          </p>
          <div className="hero-actions">
            <a href="#/about" className="btn btn-gold">Learn More</a>
            <a href="#/community" className="btn btn-green">Get Involved</a>
          </div>
        </div>
      </section>

      <main className="content">
        <section className="grid-two">
          <TopCard
            image={aboutImage}
            title="About Us"
            text="A mission for mindful living, ecological respect, and healthier relationships between people, community, and the natural world."
            button="Our Mission"
            buttonClass="btn-gold"
            overlay
            link="#/about"
          />
          <TopCard
            image={approachImage}
            title="Our Approach"
            text="Insights into how we promote holistic wellness, sustainable living, and a deeper culture of environmental stewardship."
            button="How We Help"
            buttonClass="btn-green"
            overlay
            link="#/approach"
          />
        </section>

        <section className="grid-two second-row">
          <TopCard
            image={pathwaysImage}
            title="Our Pathways"
            text="Explore our integrative wellness and ecological learning pathways designed to nurture mind, body, and spirit."
            button="View Programs"
            buttonClass="btn-green"
            overlay={false}
            link="#/pathways"
          />
          <TopCard
            image={communityImage}
            title="Connect & Grow"
            text="Join our community-centered initiatives dedicated to learning, connection, and sustainable ways of life."
            button="Get Involved"
            buttonClass="btn-gold"
            overlay={false}
            link="#/community"
          />
        </section>

        <section className="science-row">
          <article className="science-banner" style={{ backgroundImage: `url(${researchImage})` }}>
            <div className="science-shade">
              <h2>Advancing the Science of Well-Being</h2>
              <p>
                Supporting research on holistic solutions, eco-conscious health
                practices, and regenerative thinking for a healthier planet.
              </p>
              <a href="#/research" className="btn btn-gold">Learn More</a>
            </div>
          </article>

          <article className="science-side">
            <img src={labImage} alt="Researchers working with plants in a laboratory" />
          </article>
        </section>
      </main>
    </>
  )
}

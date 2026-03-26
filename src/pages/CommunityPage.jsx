import PageBanner from '../components/PageBanner'
import image from '../assets/community-group.jpg'

export default function CommunityPage() {
  return (
    <>
      <PageBanner image={image} title="Community" text="We bring people together through dialogue, education, volunteer participation, and community-centered programs that support connection and sustainable living." />
      <section className="subpage-content">
        <div className="subpage-grid">
          <article className="subcard">
            <h2>Learning Circles</h2>
            <p>Small-group spaces for reflection, discussion, and shared growth around wellness and ecological responsibility.</p>
          </article>
          <article className="subcard">
            <h2>Volunteer Engagement</h2>
            <p>Meaningful opportunities for people who want to support mission-driven education and community care.</p>
          </article>
        </div>
      </section>
    </>
  )
}

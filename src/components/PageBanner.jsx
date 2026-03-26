export default function PageBanner({ image, title, text }) {
  return (
    <section className="subpage-hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="subpage-overlay">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  )
}

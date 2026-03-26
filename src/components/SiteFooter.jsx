export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <a href="#/home" className="brand">
          <div className="brand-mark footer-mark">✿</div>
          <div className="brand-text">
            <div className="brand-title">Liuli Society</div>
            <div className="brand-sub">OF AMERICA</div>
          </div>
        </a>
      </div>

      <div className="footer-grid">
        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="#/home">Home</a>
          <a href="#/about">About</a>
          <a href="#/approach">Approach</a>
          <a href="#/pathways">Pathways</a>
          <a href="#/community">Community</a>
          <a href="#/support">Support</a>
        </div>

        <div className="footer-col">
          <h4>Programs</h4>
          <a href="#/about">Mission</a>
          <a href="#/pathways">Pathways</a>
          <a href="#/research">Research</a>
          <a href="#/community">Community</a>
          <a href="#/contact">Contact</a>
        </div>

        <div className="footer-col">
          <h4>Contact Info</h4>
          <p>info@liulisociety.org</p>
          <p>(623) 122–4567</p>
          <p>Harmony, NH 02834</p>
        </div>

        <div className="footer-col">
          <h4>Contact Info</h4>
          <p>(533) 123–4587</p>
          <p>126 Holistic Way</p>
          <p>Harmony, NH 02834</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Liuli Society</span>
        <span>All rights reserved.</span>
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
      </div>
    </footer>
  )
}

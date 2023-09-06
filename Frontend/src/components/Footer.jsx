import "./style/Footer.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="right__footer">
          <div className="feature">
            <div className="title">FEATURES</div>
            <div className="subtitle">Subtitle Generator</div>
            <div className="voiceover">Voiceover</div>
            <div className="dubber">Video Dubber</div>
          </div>
          <div className="resources">
            <div className="title__resources">RESOURCES</div>
            <div className="program">Affilate Program</div>
            <div className="blog">Blog</div>
            <div className="contact">Contact</div>
            <div className="policy">Privacy policy</div>
            <div className="term">Terms & Condition</div>
          </div>
          <div className="company">
            <div className="title">COMPANY</div>
            <div className="home">Home</div>
            <div className="about">About Us</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

import "./style/HeroPage.css";
import "animate.css";
function HeroPage() {
  return (
    <>
      <main>
        <section>
          <div className="center__header">
            <div className="header animate__animated animate__zoomIn animate__delay-2s">
              Translate your videos with ease
            </div>
            <div className="subheader">
              AI voice-overs, video/ audio dubbing in 70+ languages with 250+
              voices. <br /> Easily add captions, translated subtitles,
              translate voice-overs and more.
            </div>
            <button className="button" id="button">
              Get Started
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default HeroPage;

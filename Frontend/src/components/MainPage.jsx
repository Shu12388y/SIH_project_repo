import img1 from "../assets/CaptionAccessible.png";
import "./style/MainPage.css";

let lastpostion = 0;
function scrollTrigger() {
  window.addEventListener("scroll", () => {
    // eslint-disable-next-line no-global-assign
    lastpostion = window.scrollY;
    console.log(lastpostion);
  });
}
scrollTrigger();

function MainPage() {
  return (
    <>
      <section>
        <div className="flex">
          <h1 className="header">
            Trusted by hundreds of
            <br />
            content creator teams
          </h1>
        </div>
        <div className="img__flex">
          <div className="container">
            <div className="sub__container">
              <img src={img1} className="img1" alt="" />
            </div>
          </div>
          <div className="right__sub_container">
            <div className="sub__right__flex">
              <h2>Rapid, 90% accurate translating</h2>
              <div>
                Rapid, 90% accurate translating Captioning normally takes
                forever, often with multiple errors. Our product processes your
                videos quickly with few errors. When it’s done, you can have
                captions and voice-overs in 70+ languages.
              </div>
              <h2>Realistic AI voice-over</h2>
              <div>
                Are you searching for voice dubbing that doesn’t sound robotic
                and awkward? We have over 250 naturally sounding voices in 70+
                languages to choose from and customize.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainPage;

import img1 from "../assets/Transcript.png";
import "./style/LowerPage.css";
function LowerPage() {
  return (
    <>
      <div className="container__class">
        <img className="lower__img" src={img1} loading="lazy" alt="" />

        <div className="content">
          <div className="sub__head">AUTO CAPTION & SUBTITLES</div>
          <div className="header">
            No more wasting time manually transcribing
          </div>
          <div className="content__body">
            Don't like manually transcribing? You're not alone. Our auto
            captioning saves you time and headaches by automatically generating
            captions and subtitles. Plus, it handles synchronization. No more
            manual timing either!
          </div>
          <button> Get Started</button>
        </div>
      </div>
    </>
  );
}

export default LowerPage;

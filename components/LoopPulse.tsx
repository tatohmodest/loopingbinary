export default function LoopPulse() {
  return (
    <section className="loopx" id="the-loop" aria-labelledby="loop-title">
      <div className="loopx-copy">
        <p className="loopx-kicker">The Loop</p>
        <h2 id="loop-title">
          Company feeds school.
          <br />
          School feeds company.
          <br />
          That is not a slogan.
        </h2>
        <p>
          Every engineer on your job was tested on live work. The people
          teaching them are still shipping. You do not get a freelancer
          lottery. You get the loop.
        </p>
      </div>

      <div className="loopx-stage" aria-hidden="true">
        <svg className="loopx-svg" viewBox="0 0 200 100">
          <path
            className="loopx-path"
            d="M100 50 C100 22 78 5 52 5 C26 5 5 22 5 50 C5 78 26 95 52 95 C78 95 100 78 100 50 C100 22 122 5 148 5 C174 5 195 22 195 50 C195 78 174 95 148 95 C122 95 100 78 100 50Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
          />
          <circle className="loopx-dot" r="7" fill="#00ff7a">
            <animateMotion
              dur="4.5s"
              repeatCount="indefinite"
              path="M100 50 C100 22 78 5 52 5 C26 5 5 22 5 50 C5 78 26 95 52 95 C78 95 100 78 100 50 C100 22 122 5 148 5 C174 5 195 22 195 50 C195 78 174 95 148 95 C122 95 100 78 100 50Z"
            />
          </circle>
        </svg>
        <span className="loopx-lab loopx-lab--a">Company</span>
        <span className="loopx-lab loopx-lab--b">School</span>
      </div>
    </section>
  );
}

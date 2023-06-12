import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="home">
        <div className="nav-bar">
          <div className="logo">
            <img
              className="logo"
              alt="Elite's Logo"
              src={process.env.PUBLIC_URL + "/images/elite-text.png"}
            />
          </div>

          <div className="nav-items">
            <p className="nav-item">HOME</p>
            <p className="nav-item">ABOUT ME</p>
            <p className="nav-item">WORK</p>
            <p className="nav-item">CONTACT</p>
          </div>
        </div>

        <div className="detail-header">
          <h3 className="hey-there">Hey there, I’m Hammadh Arquil</h3>
          <h1>Software Engineer & Graphic Designer based in Sri Lanka.</h1>
          <div className="rows">
            <p>HAMMADH A.</p>
            <p>ENHANCING BRANDS SINCE 2016</p>
          </div>
        </div>
        <div className="fields rows">
          <div className="field design-field">
            <h3 className="field-header">Design</h3>
            <p className="field-desc">
              Graphic & UI/UX design projects & concepts.
            </p>
            <div className="field-btn rows">
              <div className="line"></div>
              <div className="field-btn-title">View Portfolio</div>
            </div>
          </div>
          <div className="field dev-field">
            <h3 className="field-header">Development</h3>
            <p className="field-desc">Software Development Projects & tools.</p>
            <div className="field-btn rows">
              <div className="line"></div>
              <div className="field-btn-title">View Github Profile</div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured">
        <div className="rows-flex spacebtwn">
          <h2>Featured Projects</h2>
          <div className="featured-btn rows-flex">
              <div className="line"></div>
              <div className="featured-btn-title">View Portfolio</div>
            </div>
        </div>
      </div>
      <div className="connect"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;

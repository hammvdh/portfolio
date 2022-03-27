import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="home">
        <div class="nav-bar">
          <div class="logo">
            <img
              class="logo"
              alt="Elite's Logo"
              src={process.env.PUBLIC_URL + "/images/elites-logo.png"}
            />
          </div>
          
          <div class="nav-items">
            <p class="nav-item">HOME</p>
            <p class="nav-item">ABOUT ME</p>
            <p class="nav-item">WORK</p>
            <p class="nav-item">CONTACT</p>
          </div>
      
        </div>

        <div className="detail-header"></div>
        <div className="fields"></div>
      </div>
      <div className="featured"></div>
      <div className="connect"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;

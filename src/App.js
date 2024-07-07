import './App.css';
import FeaturedProject from './components/featured-project';
import Hero from './components/Hero/hero-section';
import Experience from './components/Experience/experience-section';

function App() {
  return (
    <div className="app">
      <Hero />
      <Experience />
      <div className="featured">
        <div className="rows-flex spacebtwn">
          <h2>Featured Projects</h2>
          <div className="featured-btn rows-flex">
            <div className="line"></div>
            <div className="featured-btn-title">View Portfolio</div>
          </div>
        </div>
        <div className="projects grid-container">
          <FeaturedProject />
          <FeaturedProject />
          <FeaturedProject />
          <FeaturedProject />
          <FeaturedProject />
          <FeaturedProject />
          <FeaturedProject />
          <FeaturedProject />
        </div>
      </div>
      <div className="divider-container">
        <div className="divider"></div>
      </div>
      <div className="connect"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;

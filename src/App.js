import './App.css';
import Home from './pages/Home/home.page';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="app">
      <Analytics />
      <Home />
    </div>
  );
}

export default App;

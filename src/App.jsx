import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './styles/global.css';

function App() {
  const [activePage, setActivePage] = useState('about');

  // Add active class to the corresponding article
  useEffect(() => {
    // Update document title based on active page
    const pageTitle = activePage.charAt(0).toUpperCase() + activePage.slice(1);
    document.title = `Wildan - ${pageTitle}`;
  }, [activePage]);

  return (
    <main>
      <Sidebar />
      
      <div className="main-content">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        
        <div className="article-container">
          {activePage === 'about' && <About />}
          {activePage === 'resume' && <Resume />}
          {activePage === 'portfolio' && <Portfolio />}
          {activePage === 'blog' && <Blog />}
          {activePage === 'contact' && <Contact />}
        </div>
      </div>
    </main>
  );
}

export default App;

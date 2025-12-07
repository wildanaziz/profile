import { useState, useEffect } from 'react';

// Import MDX files with metadata
import MovieRecommendationContent, { frontmatter as movieFrontmatter } from '../content/portfolio/movie-recommendation.mdx';
import EnergyEfficiencyContent, { frontmatter as energyFrontmatter } from '../content/portfolio/energy-efficiency.mdx';
import SentimentAnalysisContent, { frontmatter as sentimentFrontmatter } from '../content/portfolio/sentiment-analysis-bca.mdx';
import PastiPintarContent, { frontmatter as pastiPintarFrontmatter } from '../content/portfolio/pasti-pintar.mdx';
import VisioneerPathsContent, { frontmatter as visioneerFrontmatter } from '../content/portfolio/visioneer-paths.mdx';
import KweeksNewsContent, { frontmatter as kweeksFrontmatter } from '../content/portfolio/kweeks-news.mdx';
import WateringAutomationContent, { frontmatter as wateringFrontmatter } from '../content/portfolio/watering-automation.mdx';
import SUMOBOTContent, { frontmatter as sumobotFrontmatter } from '../content/portfolio/sumobot.mdx';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Map MDX content and frontmatter to portfolio items
  const portfolioItems = [
    {
      ...movieFrontmatter,
      content: MovieRecommendationContent
    },
    {
      ...energyFrontmatter,
      content: EnergyEfficiencyContent
    },
    {
      ...sentimentFrontmatter,
      content: SentimentAnalysisContent
    },
    {
      ...pastiPintarFrontmatter,
      content: PastiPintarContent
    },
    {
        ...visioneerFrontmatter,
        content: VisioneerPathsContent
    },
    {
        ...kweeksFrontmatter,
        content: KweeksNewsContent
    },
    {
      ...wateringFrontmatter,
      content: WateringAutomationContent
    },
    {
      ...sumobotFrontmatter,
      content: SUMOBOTContent
    }
  ];

  const filteredItems = filter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category.toLowerCase().includes(filter.toLowerCase()));

  const handleFilterClick = (filterValue) => {
    setFilter(filterValue);
  };

  const handleSelectItem = (value) => {
    setFilter(value);
    setSelectOpen(false);
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button
              className={filter === 'all' ? 'active' : ''}
              data-filter-btn
              onClick={() => handleFilterClick('all')}
            >
              All
            </button>
          </li>

          <li className="filter-item">
            <button
              className={filter === 'machine learning' ? 'active' : ''}
              data-filter-btn
              onClick={() => handleFilterClick('machine learning')}
            >
              Machine Learning
            </button>
          </li>

          <li className="filter-item">
            <button
              className={filter === 'deep learning' ? 'active' : ''}
              data-filter-btn
              onClick={() => handleFilterClick('deep learning')}
            >
              Deep Learning
            </button>
          </li>

          <li className="filter-item">
            <button
              className={filter === 'web development' ? 'active' : ''}
              data-filter-btn
              onClick={() => handleFilterClick('web development')}
            >
              Web development
            </button>
          </li>

          <li className="filter-item">
            <button
              className={filter === 'embedded systems' ? 'active' : ''}
              data-filter-btn
              onClick={() => handleFilterClick('embedded systems')}
            >
              Embedded Systems
            </button>
          </li>
        </ul>

        <div className="filter-select-box">
          <button
            className={`filter-select ${selectOpen ? 'active' : ''}`}
            data-select
            onClick={() => setSelectOpen(!selectOpen)}
          >
            <div className="select-value" data-select-value>
              {filter === 'all' ? 'Select category' : filter}
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list">
            <li className="select-item">
              <button onClick={() => handleSelectItem('all')}>All</button>
            </li>
            <li className="select-item">
              <button onClick={() => handleSelectItem('machine learning')}>Machine Learning</button>
            </li>
            <li className="select-item">
              <button onClick={() => handleSelectItem('deep learning')}>Deep Learning</button>
            </li>
            <li className="select-item">
              <button onClick={() => handleSelectItem('web development')}>Web development</button>
            </li>
            <li className="select-item">
              <button onClick={() => handleSelectItem('embedded systems')}>Embedded Systems</button>
            </li>
          </ul>
        </div>

        <ul className="project-list">
          {filteredItems.map((item, index) => (
            <li
              key={index}
              className="project-item active"
              data-filter-item
              data-category={item.category}
            >
              <a href="#" onClick={(e) => { e.preventDefault(); openModal(item); }}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={item.image} alt={item.title} loading="lazy" />
                </figure>

                <h3 className="project-title">{item.title}</h3>
                <p className="project-category">{item.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Project Modal */}
      {modalOpen && selectedProject && (
        <div className="modal-container active" onClick={closeModal}>
          <div className="overlay active"></div>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="modal-img-wrapper">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>

            <div className="modal-body">
              <h3 className="h3 modal-title">{selectedProject.title}</h3>
              <p className="modal-category">
                <ion-icon name="pricetag-outline"></ion-icon>
                {selectedProject.category}
                {selectedProject.date && (
                  <>
                    <span style={{ margin: '0 8px', color: 'var(--jet)' }}>•</span>
                    <time dateTime={selectedProject.date} style={{ fontSize: 'var(--fs-7)' }}>
                      {new Date(selectedProject.date).toLocaleDateString('en-US', {
                        month: 'short',
                        year: 'numeric'
                      })}
                    </time>
                  </>
                )}
              </p>

              {selectedProject.techStack && selectedProject.techStack.length > 0 && (
                <div className="modal-section">
                  <h4 className="section-title">
                    <ion-icon name="code-slash-outline"></ion-icon>
                    <span>Tech Stack</span>
                  </h4>
                  <div className="tech-stack-list">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span key={idx} className="tech-item">{tech}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Render full MDX content */}
              <div className="mdx-content">
                {selectedProject.content && <selectedProject.content />}
              </div>

              <div className="modal-links">
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="modal-link">
                    <ion-icon name="logo-github"></ion-icon>
                    <span>View Code</span>
                  </a>
                )}
                {selectedProject.demo && selectedProject.demo !== '#' && (
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="modal-link">
                    <ion-icon name="globe-outline"></ion-icon>
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Portfolio;

const Resume = () => {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">University of Brawijaya</h4>
            <span>2023 — Present</span>
            <p className="timeline-text">
              I'm a student at University of Brawijaya majoring in Computer Engineering. Currently taking AI, LLM, Machine Learning, Deep Learning, MLOps, Data Science, Data Analysis, Embedded System, and Robotics courses.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">DBS Foundation Coding Camp</h4>
            <span>2024</span>
            <p className="timeline-text">
              Awardee Scholarship from DBS Foundation Coding Camp 2024 which focused on Machine Learning Engineer on Expert and Intermediate Programs.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">MA Mu'allimin Yogyakarta</h4>
            <span>2020 — 2023</span>
            <p className="timeline-text">
              Mathematics and Earth Science programs in Highschool at MA Mu'allimin Yogyakarta.
            </p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Artificial Intelligence Talent Factory (AITF) Komdigi Government Internship</h4>
            <span>Sep 2025 — Present</span>
            <p className="timeline-text">
              Project Based Internship at Artificial Intelligence Talent Factory (AITF) Komdigi which is focused on Fine Tuning Large Language Models (LLM) on specific domain datasets, create format dataset multi turn and single turn and evaluate the model performance.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">PIC of Amarine Vision Programming (ROBOTIIK)</h4>
            <span>2024 — Present</span>
            <p className="timeline-text">
              Person in Charge of Amarine Vision Programming which is focused on Transfer Learning of Computer Vision, Deep Learning, Collecting Datasets. Make a modul and syllabus of Amarine Vision Programming.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Staff of Amarine Motion Programming (ROBOTIIK)</h4>
            <span>2023 — 2024</span>
            <p className="timeline-text">
              Staff of Amarine Motion Programming which is focused on Motion Thruster Submarine Robots and Testing Components.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">BoD HRD of PTQ</h4>
            <span>2024 — now</span>
            <p className="timeline-text">
              Board of Directors of PTQ which is focused on Human Resources Development and Happy Working.
            </p>
          </li>
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Machine Learning & Deep Learning</h5>
              <data value="72">72%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '72%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Data Mining</h5>
              <data value="70">70%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '70%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Photography</h5>
              <data value="79">79%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '79%' }}></div>
            </div>
          </li>

          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Human Relationship & Adaptable</h5>
              <data value="81">81%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: '81%' }}></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Resume;

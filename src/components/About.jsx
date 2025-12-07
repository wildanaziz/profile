const About = () => {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          Innovative and detail-oriented Machine Learning Engineer with a strong background in predictive modeling, recommendation systems, deep learning, and MLOps. 
          Experienced in developing and deploying scalable machine learning solutions across various domains, including embedded systems and robotics. Passionate about optimizing models for performance and efficiency in real-world applications.
        </p>

        <p>
          With a solid foundation in machine learning, artificial intelligence, and data-driven decision-making, I have successfully developed and deployed various ML models that drive business value. 
          My expertise lies in building end-to-end ML pipelines, from data preprocessing to model deployment, ensuring scalability and performance optimization. 
          I have hands-on experience in training deep learning models for image and speech recognition tasks and implementing real-time recommendation systems. Additionally, I am proficient in MLOps, integrating CI/CD workflows, containerization, and cloud-based model deployment. 
          My interest in embedded systems has led me to work on AI-powered robotics and IoT solutions, where I leverage ML algorithms to enhance automation and efficiency. I am a continuous learner, always exploring new advancements in AI and applying them to innovative projects.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img src="./assets/images/icon-design.svg" alt="design icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">MLOps Services</h4>
              <p className="service-item-text">
                I'm a skilled Machine Learning Operations in many platforms.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="./assets/images/icon-dev.svg" alt="Web development icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">AI Engineer</h4>
              <p className="service-item-text">
                Deep Diving on AI and Machine Learning Engineer with many years and project experiences.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <div className="icon-box2">
                <ion-icon name="prism-outline"></ion-icon>
              </div>
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Data Miners</h4>
              <p className="service-item-text">
                Loving Collecting and Analyzing Data from different sources.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src="./assets/images/icon-photo.svg" alt="camera icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Photography</h4>
              <p className="service-item-text">
                High-quality product shoots which is what you dreamed about.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default About;

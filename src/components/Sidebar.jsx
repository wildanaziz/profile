import { useState } from 'react';

const Sidebar = () => {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <aside className={`sidebar ${showContacts ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="../../public/assets/chloe.png" alt="Wildan" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Wildan">Wildan</h1>
          <p className="title"><strong>Curious Learners about AI</strong></p>
        </div>

        <button 
          className="info_more-btn" 
          data-sidebar-btn
          onClick={() => setShowContacts(!showContacts)}
        >
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:danitatadanwildan@gmail.com" className="contact-link">
                danitatadanwildan@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+6285747130179" className="contact-link">
                +62 85747130179
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2007-05-27">May 27, 2007</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Yogyakarta City, DIY, IDN</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="https://github.com/wildanaziz" target="_blank" rel="noopener noreferrer" className="social-link">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://sptfy.com/pent0lisme" target="_blank" rel="noopener noreferrer" className="social-link">
              <ion-icon name="play"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://instagram.com/wildannaziz" target="_blank" rel="noopener noreferrer" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://www.linkedin.com/in/wildan-aziz-hidayat/" target="_blank" rel="noopener noreferrer" className="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

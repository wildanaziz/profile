import { useState } from 'react';
import { sendEmail, sendWhatsApp } from '../utils/contactService';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const result = await sendEmail(formData);
    
    if (result.success) {
      setSubmitMessage('✓ Message sent successfully!');
      setFormData({ fullname: '', email: '', message: '' });
    } else {
      setSubmitMessage('✗ Failed to send message. Please try WhatsApp or configure EmailJS.');
    }
    
    setIsSubmitting(false);

    // Clear message after 5 seconds
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const handleWhatsAppClick = () => {
    const message = `Hi, I'm ${formData.fullname}. ${formData.message}`;
    sendWhatsApp(message);
  };

  const isFormValid = formData.fullname && formData.email && formData.message;

  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Wanna <br /> Get in Touch?</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4152.176155274169!2d112.60849497526041!3d-7.945781379154087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78830056fda2ab%3A0x36b609aa068583ae!2ssena%20sparepart%20%26%20gunshop!5e1!3m2!1sid!2sid!4v1740899106192!5m2!1sid!2sid"
            width="400"
            height="300"
            loading="lazy"
            title="Google Maps Location"
          />
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Get in Touch Now!</h3>

        <form onSubmit={handleEmailSubmit} className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
              value={formData.fullname}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
            value={formData.message}
            onChange={handleChange}
          />

          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <button
              className="form-btn"
              type="submit"
              disabled={!isFormValid || isSubmitting}
              data-form-btn
            >
              <ion-icon name="paper-plane"></ion-icon>
              <span>{isSubmitting ? 'Sending...' : 'Send Email'}</span>
            </button>

            <button
              className="form-btn"
              type="button"
              onClick={handleWhatsAppClick}
              disabled={!formData.message}
              style={{
                background: isFormValid 
                  ? 'linear-gradient(to bottom right, hsl(142, 76%, 36%) 0%, hsl(142, 70%, 49%) 100%)'
                  : 'hsl(0, 0%, 22%)',
                opacity: !formData.message ? 0.5 : 1
              }}
            >
              <ion-icon name="logo-whatsapp"></ion-icon>
              <span>Send via WhatsApp</span>
            </button>
          </div>

          {submitMessage && (
            <p style={{
              marginTop: '15px',
              padding: '10px',
              borderRadius: '8px',
              color: submitMessage.includes('✓') ? '#4CAF50' : '#f44336',
              background: submitMessage.includes('✓') 
                ? 'rgba(76, 175, 80, 0.1)' 
                : 'rgba(244, 67, 54, 0.1)',
              fontSize: '14px',
              textAlign: 'center'
            }}>
              {submitMessage}
            </p>
          )}
        </form>
      </section>
    </article>
  );
};

export default Contact;

import emailjs from '@emailjs/browser';

const PUBLIC_KEY = import.meta.env.EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
const SERVICE_ID = import.meta.env.EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const TEMPLATE_ID = import.meta.env.EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';

// Initialize EmailJS
if (PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
  emailjs.init(PUBLIC_KEY);
}

export const sendEmail = async (formData) => {
  try {
    // Check if EmailJS is configured
    if (PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      console.warn('EmailJS not configured. Please update your credentials in contactService.js');
      return {
        success: false,
        error: 'EmailJS not configured. Please update credentials.'
      };
    }

    const templateParams = {
      name: formData.fullname,
      email: formData.email,
      message: formData.message,
      title: 'Website Contact Form'
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );

    return { success: true, response };
  } catch (error) {
    console.error('Email send failed:', error);
    return { success: false, error };
  }
};

export const sendWhatsApp = (message) => {
  const phoneNumber = '6285747130179'; 
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

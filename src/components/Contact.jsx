import { useState } from 'react';

export default function Contact() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Message submitted! (No backend configured)');
    setTimeout(() => setMessage(''), 3000);
    e.target.reset();
  };

  return (
    <section id="contact" style={{ background: 'white', padding: '100px 20px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '16px', color: '#1e3a8a' }}>Contact Us</h2>
      <p style={{ textAlign: 'center', fontSize: '18px', color: '#4b5563', marginBottom: '32px' }}>
        Reach out to discuss your project management needs!
      </p>
      <form onSubmit={handleSubmit} className="contact-form" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <label>Name</label>
        <input name="name" required placeholder="Your Name" />
        <label>Email</label>
        <input name="email" type="email" required placeholder="Your Email" />
        <label>Message</label>
        <textarea name="message" required rows="5" placeholder="Your Message"></textarea>
        <button type="submit" className="btn" style={{ marginTop: '20px' }}>Send Message</button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '12px', color: 'green' }}>{message}</p>
    </section>
  );
}
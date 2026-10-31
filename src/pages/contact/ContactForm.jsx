import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    interestType: "Partnership",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        {/* LEFT COLUMN: FORM */}
        <div className="contact-form-left">
          <h2 className="form-main-title">Tell us what you’re thinking.</h2>
          <p className="form-main-subtitle">
            Fields marked * are required. Share only what is needed to begin the conversation.
          </p>

          <form onSubmit={handleSubmit} className="contact-actual-form">
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                Full name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                placeholder="Your full name"
                value={formData.fullName}
                onChange={handleChange}
                className="form-input"
              />
              <span className="field-hint">Use the name you’d like us to call you.</span>
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
              <span className="field-hint">A reply address for this conversation.</span>
            </div>

            <div className="form-group">
              <label htmlFor="organization" className="form-label">
                Organization
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                placeholder="Organization, university or community"
                value={formData.organization}
                onChange={handleChange}
                className="form-input"
              />
              <span className="field-hint">Optional — independent contributors are welcome.</span>
            </div>

            <div className="form-group">
              <label htmlFor="interestType" className="form-label">
                Interest type *
              </label>
              <div className="select-wrapper">
                <select
                  id="interestType"
                  name="interestType"
                  value={formData.interestType}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Opportunity">Opportunity</option>
                  <option value="Services">Services</option>
                  <option value="Partnership">Partnership</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="Tell us what you’re working on and how we could collaborate."
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
              ></textarea>
            </div>

            <p className="privacy-notice">
              By sending a message, you would agree to be contacted about your enquiry. A confirmed privacy notice will be provided before this form goes live.
            </p>

            <div className="form-submit-row">
              <button type="submit" className="submit-message-btn">
                Send message <span>↗</span>
              </button>
              {submitted && (
                <span className="submission-feedback">
                  Mockup submitted successfully!
                </span>
              )}
            </div>
            <p className="design-example-note">
              Design example only · No message will be sent.
            </p>
          </form>
        </div>

        {/* RIGHT COLUMN: CONTACT INFO & INTEREST HELPER */}
        <div className="contact-form-right">
          <div className="contact-dark-card">
            <span className="dark-card-subtag">OTHER WAYS TO CONNECT</span>
            <h3 className="dark-card-title">
              Start with a question. We’ll find the right path.
            </h3>

            <div className="info-block">
              <span className="info-block-label">EMAIL / EXAMPLE ONLY</span>
              <p className="info-block-value highlight-email">hello@afriyouth.example</p>
              <p className="info-block-desc">Reserved example address. Not a working inbox.</p>
            </div>

            <div className="info-block">
              <span className="info-block-label">LOCATION / PROVISIONAL</span>
              <p className="info-block-value">
                Africa-wide collaboration. Office location to be confirmed.
              </p>
              <p className="info-block-desc">
                No visitor address is currently provided in this mockup.
              </p>
            </div>

            <div className="info-block">
              <span className="info-block-label">SOCIAL / PROVISIONAL</span>
              <p className="social-link">
                LinkedIn · profile to be confirmed <span>↗</span>
              </p>
              <p className="social-link">
                Instagram · profile to be confirmed <span>↗</span>
              </p>
            </div>
          </div>

          <div className="interest-info-card">
            <h4 className="interest-card-title">Choose your interest type</h4>
            
            <div className="interest-item">
              <p><strong>Opportunity</strong> — programs, participation or future calls.</p>
            </div>
            <div className="interest-item">
              <p><strong>Services</strong> — research, policy, innovation or learning support.</p>
            </div>
            <div className="interest-item">
              <p><strong>Partnership</strong> — a shared project, expertise or enabling resources.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
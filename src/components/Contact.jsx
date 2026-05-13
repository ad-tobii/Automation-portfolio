import { useState, useEffect, useRef } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('.fade-up');
      elements.forEach((el, index) => {
        el.style.transitionDelay = `${index * 150}ms`;
        observer.observe(el);
      });
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form[0].value;
    const email = form[1].value;
    const message = form[2].value;

    const mailtoLink = `mailto:adekeye.gp.oluwatobi@gmail.com?subject=${encodeURIComponent(
      `Portfolio Message from ${name}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-[1126px] mx-auto w-full flex flex-col items-center"
      ref={containerRef}
    >
      <div className="max-w-2xl w-full text-center">

        <h2 className="font-mono text-2xl text-text-primary mb-12 font-semibold uppercase fade-up">
          CONTACT
        </h2>

        <h3 className="font-mono text-3xl sm:text-4xl text-text-primary mb-4 font-semibold fade-up">
          Ready to Work Together?
        </h3>

        <p className="font-sans text-text-secondary mb-12 fade-up">
          I'm currently available for freelance projects and consulting.
        </p>

        {submitted ? (
          <div className="font-mono text-accent py-4 animate-pulse fade-up">
            MESSAGE READY — OPENING YOUR EMAIL CLIENT
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 fade-up text-left">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="space-y-2">
                <label className="block font-mono text-[10px] uppercase tracking-widest text-text-muted">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-surface border border-white/10 px-4 py-3 text-text-primary font-sans focus:outline-none focus:border-accent transition-colors rounded-[4px]"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="block font-mono text-[10px] uppercase tracking-widest text-text-muted">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-surface border border-white/10 px-4 py-3 text-text-primary font-sans focus:outline-none focus:border-accent transition-colors rounded-[4px]"
                  placeholder="john@example.com"
                />
              </div>

            </div>

            <div className="space-y-2">
              <label className="block font-mono text-[10px] uppercase tracking-widest text-text-muted">
                Message
              </label>
              <textarea
                rows="5"
                required
                className="w-full bg-surface border border-white/10 px-4 py-3 text-text-primary font-sans focus:outline-none focus:border-accent transition-colors resize-none rounded-[4px]"
                placeholder="How can I help you?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-hover text-white font-mono py-4 px-8 transition-colors duration-200 uppercase tracking-widest text-sm font-semibold rounded-[4px]"
            >
              Send Message
            </button>

          </form>
        )}

      </div>
    </section>
  );
}
const contactLinks = [
  {
    label: "Email Me",
    href: "mailto:ttabish9@gmail.com",
    external: false,
  },
  {
    label: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/muhammad-tabish-ali-3864652b8/",
    external: true,
  },
  {
    label: "WhatsApp Me",
    href: "https://wa.me/923213203026",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="page-section">
      <h2 className="section-title mb-4">Contact Me</h2>

      <p className="mb-6 max-w-2xl leading-7 text-ink-muted">
        Interested in working together or discussing an opportunity?
        Feel free to get in touch.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
        {contactLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="btn btn-secondary"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}

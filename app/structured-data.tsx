export function PersonStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Malik Shahzaib",
    jobTitle: "PHP, WordPress & Laravel Developer",
    description:
      "Experienced PHP, WordPress & Laravel Developer with 4+ years of expertise in web development, e-commerce solutions, and custom integrations.",
    url: "https://malikshahzaib.dev",
    sameAs: ["https://linkedin.com/in/msofficial", "https://gitlab.com/msofficial48"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      postalCode: "54600",
      addressCountry: "PK",
    },
    email: "msofficial48@gmail.com",
    telephone: "+923094600297",
    knowsAbout: [
      "PHP",
      "Laravel",
      "WordPress",
      "WooCommerce",
      "MySQL",
      "JavaScript",
      "HTML",
      "CSS",
      "Web Development",
      "E-commerce Development",
      "Payment Gateway Integration",
      "Git Version Management",
      "Google Cloud Services",
      "VPS Management",
      "Linux Server Setup",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Virtual University of Pakistan",
    },
    worksFor: {
      "@type": "Organization",
      name: "Catalyic Technology",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

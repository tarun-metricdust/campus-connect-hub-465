/**
 * Site-wide configuration for the university/college website template.
 * Update the values below to customize this site for your institution.
 */
export const siteConfig = {
  // Branding
  shortName: "UVCE",
  fullName: "University Visvesvaraya College of Engineering",
  tagline: "A legacy of excellence in engineering education for over a century.",
  establishedYear: "1917",
  affiliation: "Bangalore University",
  accreditation: "AICTE Approved | NBA Accredited",

  // Hero section
  hero: {
    headline: "University Visvesvaraya College of Engineering",
    subheadline: "Legacy of excellence in engineering education for over a century. Nurturing innovative minds and building tomorrow's engineers with strong Indian values and global perspective.",
    ctaPrimary: "Explore Programs",
    ctaSecondary: "Virtual Campus Tour",
    stats: {
      departments: { value: "8", label: "Departments" },
      students: { value: "3000+", label: "Students" },
      faculty: { value: "150+", label: "Faculty" },
    },
  },

  // About page
  about: {
    title: "About Us",
    intro: "Established in 1917, our institution stands as a beacon of engineering excellence. Named after the legendary engineer Sir M. Visvesvaraya, we have been shaping the future of engineering education for over a century.",
    mission: "To provide world-class engineering education that combines theoretical knowledge with practical application, fostering innovation, critical thinking, and ethical responsibility among our students to meet the evolving needs of society and industry.",
    vision: "To be a globally recognized center of excellence in engineering education and research, producing competent engineers and leaders who contribute to technological advancement and sustainable development of society.",
    legacy: "For over a century, we have been nurturing engineering talent and contributing to India's technological advancement. Our alumni have made significant contributions in various fields including space research, information technology, infrastructure development, and entrepreneurship.",
    timeline: [
      { year: "1917", title: "Foundation", description: "The college was established as part of Bangalore University.", milestone: true },
      { year: "1963", title: "Autonomous Status", description: "Gained autonomous status and expanded academic programs significantly.", milestone: false },
      { year: "1972", title: "Research Excellence", description: "Established advanced research facilities and began offering postgraduate programs.", milestone: false },
      { year: "1990", title: "Industry Partnerships", description: "Forged strong partnerships with leading industries for better placement opportunities.", milestone: false },
      { year: "2000", title: "Digital Transformation", description: "Modernized infrastructure with state-of-the-art laboratories and digital learning platforms.", milestone: true },
      { year: "2017", title: "Centenary Celebrations", description: "Celebrated 100 years of excellence in engineering education and innovation.", milestone: true },
      { year: "2024", title: "Future Vision", description: "Continuing the legacy with cutting-edge research in AI, IoT, and sustainable technologies.", milestone: false },
    ],
    achievements: [
      { title: "Academic Excellence", description: "Consistently ranked among top engineering colleges in India" },
      { title: "Research Impact", description: "Over 500 research publications in international journals annually" },
      { title: "Alumni Network", description: "50,000+ alumni across the globe in leadership positions" },
      { title: "Infrastructure", description: "Modern laboratories, libraries, and campus facilities" },
    ],
    stats: {
      years: { value: "100+", label: "Years of Excellence" },
      alumni: { value: "50,000+", label: "Alumni Worldwide" },
      departments: { value: "8", label: "Engineering Departments" },
    },
  },

  // Contact information
  contact: {
    phone: "+91 80 2296 1234",
    email: "info@uvce.ac.in",
    website: "www.uvce.ac.in",
    address: "K.R. Circle, Bangalore University Campus, Bengaluru, Karnataka 560001",
  },

  // Footer
  footer: {
    description: "University Visvesvaraya College of Engineering - A legacy of excellence in engineering education for over a century, affiliated to Bangalore University.",
    copyright: "2024 University Visvesvaraya College of Engineering (UVCE). All rights reserved.",
  },

  // Departments
  departments: {
    intro: "Our institution houses multiple prestigious departments, each with a rich legacy of academic excellence and innovation.",
  },

  // Faculty
  faculty: {
    intro: "Meet our distinguished faculty members who are leaders in their respective fields.",
    emailDomain: "uvce.ac.in",
  },
};

export type SiteConfig = typeof siteConfig;

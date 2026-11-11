/**
 * Client configuration for the reusable travel website template.
 * Replace these values for each new client. Keep layout and components in App.jsx.
 */
export const siteConfig = {
  brand: {
    name: "Relax Holidays",
    shortName: "Relax",
    tagline: "Journeys made personal",
    logoText: "rh",
    heroEyebrow: "TRAVEL, THOUGHTFULLY CURATED",
    heroTitle: "Find your own",
    heroLine: "kind of somewhere.",
    heroDescription: "Thoughtfully planned journeys across India and beyond.",
    heroVideo: "https://videos.pexels.com/video-files/5277101/5277101-hd_1920_1080_30fps.mp4",
    heroPoster: "",
    metaDescription: "Thoughtfully curated holidays, pilgrimages and flight assistance from Relax Holidays, Trichy."
  },
  theme: {
    primary: "#153e34",
    primaryDark: "#102e27",
    accent: "#a1844f",
    background: "#fbfaf7",
    surface: "#f0f0e9",
    text: "#24372f",
    headingFont: "Playfair Display",
    bodyFont: "DM Sans"
  },
  contact: {
    phoneDisplay: "+91 86750 05894",
    phoneE164: "918675005894",
    secondaryPhone: "+91 90800 92810",
    email: "sales@relaxholidaypackages.com",
    whatsappNumber: "918675005894",
    addressLines: [
      "#3, Basement Floor, Vignesh Plaza,",
      "Salai Road, Thillai Nagar,",
      "Trichy – 620018, Tamil Nadu"
    ],
    website: "https://www.relaxholidaypackages.com/"
  },
  flight: {
    defaultFrom: "TRZ",
    defaultTo: "DEL",
    provider: "google",
    currency: "INR"
  },
  navigation: [
    { label: "Destinations", href: "#destinations" },
    { label: "Our approach", href: "#approach" },
    { label: "Packages", href: "#packages" },
    { label: "Flights", href: "#flights" },
    { label: "Contact", href: "#contact" }
  ],
  sections: {
    showFlights: true,
    showPackages: true,
    showDestinationCatalogue: true,
    showWhatsAppEnquiry: true
  },
  social: {
    instagram: "",
    facebook: "",
    youtube: ""
  }
};

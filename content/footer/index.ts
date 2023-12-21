import { contactData } from 'content/contact';
export const footerData = [
  {
    title: 'Schlüsseldienst',
    menu: [
      {
        title: 'Notdienst anrufen (00-24h)',
        url: `tel:${contactData.phone}`,
        image: null,
      },
      {
        title: 'Kosten und Preise',
        url: '/preise',
        image: null,
      },
      {
        title: 'Zahlungsoptionen',
        url: '/#payment',
        image: null,
      },
    ],
  },
  {
    title: 'Support & Help Center',
    menu: [
      {
        title: 'Informationen über Abwicklung',
        url: '/abwicklung',
        image: null,
      },
      {
        title: 'Häufig gestellte Fragen',
        url: '/faq',
        image: null,
      },
      {
        title: 'Rechtsverbindliche Erklärung (PDF)',
        url: '/echtsverbindliche-erklaerung.pdf',
        image: null,
      },
    ],
  },
  {
    title: 'Türex',
    menu: [
      {
        title: 'Alle Leistungen von Türex',
        url: '/leistungen',
        image: null,
      },
      {
        title: 'Seriöser Schlüsseldienst',
        url: '/serioeser-schluesseldienst',
        image: null,
      },
      {
        title: 'Kontakt',
        url: '/impressum',
        image: null,
      },
    ],
  },
  {
    title: 'Rechtliches',
    menu: [
      {
        title: 'Datenschutzerklärung',
        url: '/datenschutz',
        image: null,
      },
      {
        title: 'Allgemeine Geschäftsbedingungen',
        url: '/agb',
        image: null,
      },
      {
        title: 'Impressum',
        url: '/impressum',
        image: null,
      },
    ],
  },
];

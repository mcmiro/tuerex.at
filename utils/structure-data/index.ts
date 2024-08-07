const indexStrucutreData = {
  '@context': 'https://schema.org',
  '@type': ['EmergencyService', 'Locksmith'],
  name: 'Schlüsseldienst & Aufsperrdienst in Wien',
  image:
    'https://res.cloudinary.com/dle6thajz/image/upload/fl_preserve_transparency/v1722856115/oeffnung-zugefellener-standardtueren_khjequ.jpg',
  '@id': 'https://tuerex.at',
  url: 'https://tuerex.at',
  telephone: '+436763741204',
  email: 'info@tuerex.at',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Oldenburggasse 6',
    addressLocality: 'Wien',
    addressRegion: 'Vienna',
    postalCode: '1230',
    addressCountry: 'AT',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+436763741204',
    contactType: 'Customer Service',
    availableLanguage: ['German'],
  },
  serviceType: [
    'Schlüsseldienst',
    'Aufsperrdienst',
    'Öffnung zugefallener Standard- und Sicherheitstüren',
    'Öffnung versperrter Standard- und Sicherheitstüren',
  ],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.15127,
    longitude: 16.33139,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.65',
    reviewCount: '132',
  },
  description:
    'Schlüsseldienst Wien rund um die Uhr. Behördlich befähigter Aufsperrdienst mit klarer Preisgestaltung. Türöffnungen ohne Schaden. Jetzt anrufen.',
  sameAs: [
    'https://www.instagram.com/tuerex_schluesseldienst',
    'https://www.linkedin.com/company/tuerex-schluesseldienst',
  ],
  paymentAccepted: 'Cash, Credit Card, Debit Card',
  additionalType: 'https://schema.org/Locksmith',
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wie viel kostet eine Türöffnung?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Die genauen Kosten bzw. der konkrete Fixpreis variieren je nach mehreren Faktoren, wie beispielsweise der Art der Tür (Sicherheits- oder Normale Tür). Keine Sorge, unser Team informiert dich jedoch vorab genau über die Preise, bevor wir uns zu dir begeben.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie reiche ich die Kosten bei meiner Haushaltsversicherung ein?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Die Vorgehensweise hängt von deiner spezifischen Haushaltsversicherung ab. In der Regel meldest du den Vorfall deiner Versicherung, übermittelst ihr unsere Rechnung, und die Kosten werden erstattet. Beachte bitte, dass dies von Versicherungsanbieter zu Versicherungsanbieter variieren kann. Es empfiehlt sich, diesbezüglich bei deiner Versicherung nachzufragen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Ich habe vor Ort kein Geld oder Karten. Wie kann ich sonst bezahlen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kein Problem. Falls du vor Ort nicht bezahlen kannst, erhältst du von uns einfach eine Rechnung, die du im Nachhinein überweisen kannst. Dadurch entstehen keine zusätzlichen Kosten.',
        },
      },
      {
        '@type': 'Question',
        name: 'Warum werden meine Unterlagen verlangt?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Als seriöser Schlüsseldienst sind wir verpflichtet, nach der Türöffnung Dokumente bzw. Unterlagen zu verlangen. Dies dient der Sicherheit aller Beteiligten und verhindert, dass unbekannte Personen Schlüsseldienste für fremde Wohnungen beauftragen. Die Vorlage deiner Unterlagen wird von uns sicher dokumentiert, unter Einhaltung aller Datenschutzbestimmungen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Storno: Kann ich den Schlüsseldienst nach der Beauftragung stornieren?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Behördlich befähigt bedeutet, dass unser Schlüsseldienst von den zuständigen Behörden die notwendigen Genehmigungen und Qualifikationen erhalten hat, um die Dienstleistungen legal und professionell anzubieten. Diese Anerkennung sichert, dass wir die erforderlichen Standards und Anforderungen erfüllen und den gesetzlichen Bestimmungen entsprechen. Es ist ein Zeichen unserer Seriosität und Verantwortlichkeit als Dienstleister in der Sicherheitsbranche.',
        },
      },
    ],
  },
};

export default indexStrucutreData;

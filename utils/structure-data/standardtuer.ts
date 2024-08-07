const standardTuerStrucutreData = {
  '@context': 'http://schema.org',
  '@type': 'Service',
  name: 'Öffnung zugefallener Standardtüren',
  provider: {
    '@type': 'Organization',
    name: 'TÜREX',
    url: 'https://tuerex.at',
    logo: 'https://tuerex.at/logo.png',
    image:
      'https://res.cloudinary.com/dle6thajz/image/upload/fl_preserve_transparency/v1722856115/oeffnung-zugefellener-standardtueren_khjequ.jpg',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+436763741204',
        contactType: 'customer service',
        availableLanguage: 'German',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+436763741204',
        contactType: 'emergency',
        availableLanguage: 'German',
      },
    ],
  },
  offers: [
    {
      '@type': 'Offer',
      price: '89',
      priceCurrency: 'EUR',
      url: 'https://tuerex.at/leistungen/zugefallene-standardtueren',
      description: 'Normaldienst (Werktags von 05:00 - 17:00h)',
      eligibleTransactionVolume: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        price: '89',
      },
    },
    {
      '@type': 'Offer',
      price: '114',
      priceCurrency: 'EUR',
      url: 'https://tuerex.at/leistungen/zugefallene-standardtueren',
      description: 'Spätdienst (Werktags von 17:00 - 21:00h)',
      eligibleTransactionVolume: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        price: '114',
      },
    },
    {
      '@type': 'Offer',
      price: '134',
      priceCurrency: 'EUR',
      url: 'https://tuerex.at/leistungen/zugefallene-standardtueren',
      description: 'Nachtdienst (Werktags von 21:00 - 05:00h)',
      eligibleTransactionVolume: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        price: '134',
      },
    },
    {
      '@type': 'Offer',
      price: '134',
      priceCurrency: 'EUR',
      url: 'https://tuerex.at/leistungen/zugefallene-standardtueren',
      description: 'Sonn- und Feiertage (von 00:00 - 24:00h)',
      eligibleTransactionVolume: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        price: '134',
      },
    },
  ],
  description:
    'Türe zugefallen? Hier findest du alles, was du darüber wissen musst: Informationen über Preise, Dauer und Abwicklung, inklusive Tipps vom Aufsperr-Profi.',
  additionalType: 'http://schema.org/EmergencyService',
  areaServed: {
    '@type': 'Place',
    name: 'Wien',
  },
  hoursAvailable: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'http://schema.org/Monday',
      'http://schema.org/Tuesday',
      'http://schema.org/Wednesday',
      'http://schema.org/Thursday',
      'http://schema.org/Friday',
      'http://schema.org/Saturday',
      'http://schema.org/Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://tuerex.at/leistungen/zugefallene-standardtueren',
    name: 'Öffnung zugefallener Standardtüren | Leistungen | TÜREX',
    description:
      'Türe zugefallen? Hier findest du alles, was du darüber wissen musst: Informationen über Preise, Dauer und Abwicklung, inklusive Tipps vom Aufsperr-Profi.',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://tuerex.at',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Leistungen',
        item: 'https://tuerex.at/leistungen',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Zugefallene Standardtür',
        item: 'https://tuerex.at/leistungen/zugefallene-standardtueren',
      },
    ],
  },
  step: [
    {
      '@type': 'HowToStep',
      name: 'Anruf und Erstberatung (00-24h)',
      text: 'Du rufst uns an und beschreibst uns kurz dein Problem. Wir beraten dich direkt am Telefon über die nächsten Schritte, geben dir sofort eine transparente Kostenschätzung und informieren dich über die voraussichtliche Ankunftszeit.',
    },
    {
      '@type': 'HowToStep',
      name: 'Rasche Ankunft',
      text: 'Einer unserer geschulten Techniker macht sich danach auf den Weg zu dir. Durchschnittlich benötigt unser Schlüsseldienst maximal 30 Minuten um vor Ort zu sein. Abhängig jedoch von der aktuellen Auftrags- und Verkehrslage kann dies entweder etwas kürzer oder länger dauern.',
    },
    {
      '@type': 'HowToStep',
      name: 'Schadlose Türöffnung vor Ort',
      text: 'Vor Ort bewertet unser Techniker die Situation genau und bestimmt die optimale Methode für die Öffnung der Tür. Mithilfe ausgewählter Werkzeuge und bewährten Techniken öffnet der Techniker die Tür schnell, ohne Schaden und effizient.',
    },
    {
      '@type': 'HowToStep',
      name: 'Bestätigung und Bezahlung',
      text: 'Nach der erfolgreichen Türöffnung bleibt nur noch rechtsverbindliche Erklärung zu unterzeichnen. Diese ist gesetzlich vorgeschrieben und dient der beidseitigen Sicherheit. Danach erfolgt die Bezahlung, entweder in Bar oder mit Kartenzahlung, direkt vor Ort.',
    },
  ],
  faqPage: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wie lange dauert es, bis der Techniker bei mir ist?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In der Regel ist unser Techniker innerhalb von 30 Minuten bei dir, abhängig von der aktuellen Auftrags- und Verkehrslage und deinem Standort in Wien.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kann die Türöffnung meine Tür oder das Schloss beschädigen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nein, unsere Techniker sind geschult darin, Türen beschädigungsfrei zu öffnen. Sollte es dennoch zu Problemen kommen, besprechen wir mit dir vorab alle Möglichkeiten.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was passiert, wenn der Schlüssel im Schloss steckt oder abgebrochen ist?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In diesem Fall handelt es sich nicht mehr um eine einfache zugefallene Tür. Bitte informiere uns diesbezüglich unbedingt beim Anruf oder klicke hier, um mehr darüber zu erfahren.',
        },
      },
      {
        '@type': 'Question',
        name: 'Muss ich für die Anfahrt extra bezahlen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nein, die Anfahrtskosten sind bereits im Fixpreis enthalten.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was mache ich, wenn ich meinen Schlüssel verloren habe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wenn du deinen Schlüssel verloren hast, empfehlen wir, zusätzlich den Schließzylinder austauschen zu lassen, um die Sicherheit deines Zuhauses zu gewährleisten. Wir bieten diesen Service ebenfalls an.',
        },
      },
    ],
  },
};
export default standardTuerStrucutreData;

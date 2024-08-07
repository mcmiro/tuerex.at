const sicherheitsTuerStrucutreData = {
  '@context': 'http://schema.org',
  '@type': 'Service',
  name: 'Öffnung zugefallener Sicherheitstüren',
  provider: {
    '@type': 'Organization',
    name: 'TÜREX',
    url: 'https://tuerex.at',
    logo: 'https://tuerex.at/logo.png',
    image:
      'https://res.cloudinary.com/dle6thajz/image/upload/fl_preserve_transparency/v1722856115/oeffnung-zugefellener-sicherheitstueren_dg7ljq.jpg',
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
      price: '114',
      priceCurrency: 'EUR',
      url: 'https://tuerex.at/leistungen/zugefallene-sicherheitstueren',
      description: 'Normaldienst (Werktags von 05:00 - 17:00h)',
      eligibleTransactionVolume: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        price: '114',
      },
    },
    {
      '@type': 'Offer',
      price: '139',
      priceCurrency: 'EUR',
      url: 'https://tuerex.at/leistungen/zugefallene-sicherheitstueren',
      description: 'Spätdienst (Werktags von 17:00 - 21:00h)',
      eligibleTransactionVolume: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        price: '139',
      },
    },
    {
      '@type': 'Offer',
      price: '159',
      priceCurrency: 'EUR',
      url: 'https://tuerex.at/leistungen/zugefallene-sicherheitstueren',
      description: 'Nachtdienst (Werktags von 21:00 - 05:00h)',
      eligibleTransactionVolume: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        price: '159',
      },
    },
    {
      '@type': 'Offer',
      price: '159',
      priceCurrency: 'EUR',
      url: 'https://tuerex.at/leistungen/zugefallene-sicherheitstueren',
      description: 'Sonn- und Feiertage (von 00:00 - 24:00h)',
      eligibleTransactionVolume: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        price: '159',
      },
    },
  ],
  description:
    'Deine Sicherheitstür ist verschlossen? Erfahre hier alles über unsere Dienstleistungen zur sicheren und professionellen Öffnung von Sicherheitstüren.',
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
    '@id': 'https://tuerex.at/leistungen/zugefallene-sicherheitstueren',
    name: 'Öffnung zugefallener Sicherheitstüren | Leistungen | TÜREX',
    description:
      'Deine Sicherheitstür ist verschlossen? Erfahre hier alles über unsere Dienstleistungen zur sicheren und professionellen Öffnung von Sicherheitstüren.',
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
        name: 'Zugefallene Sicherheitstür',
        item: 'https://tuerex.at/leistungen/zugefallene-sicherheitstueren',
      },
    ],
  },
  step: [
    {
      '@type': 'HowToStep',
      name: 'Rufe uns an (00-24h)',
      text: 'Kontaktiere uns und beschreibe dein Problem. Unser fachkundiges Team gibt dir sofort am Telefon eine klare Übersicht der nächsten Schritte, eine transparente Kostenschätzung und die voraussichtliche Ankunftszeit unseres Technikers.',
    },
    {
      '@type': 'HowToStep',
      name: 'Schnelle Reaktion und Ankunft',
      text: 'Sobald du uns anrufst, macht sich einer unserer qualifizierten Techniker sofort auf den Weg zu dir. Im Durchschnitt sind wir innerhalb von 30 Minuten bei unseren Kunden in Wien. Die genaue Ankunftszeit hängt von der aktuellen Auftragslage und der Verkehrssituation ab.',
    },
    {
      '@type': 'HowToStep',
      name: 'Fachgerechte Türöffnung vor Ort',
      text: 'Sobald unser Techniker bei dir ist, analysiert er die Situation und wählt die optimale Methode zur Öffnung deiner Sicherheitstür. Mit spezialisierten Werkzeugen und Techniken sorgen wir eine sichere und beschädigungsfreie Öffnung der Tür.',
    },
    {
      '@type': 'HowToStep',
      name: 'Abschluss und Bezahlung',
      text: 'Nach erfolgreicher Öffnung der Tür bitten wir dich, eine rechtsverbindliche Erklärung zu unterschreiben. Dies dient sowohl deiner als auch unserer Sicherheit. Die Bezahlung erfolgt direkt vor Ort, entweder in Bar oder per Kartenzahlung.',
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
        name: 'Welche Sicherheitsmaßnahmen ergreift Türex bei der Türöffnung?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wir überprüfen vor jeder Öffnung die Berechtigung des Auftraggebers, indem wir einen Ausweis oder andere Nachweise verlangen. Dies stellt sicher, dass nur autorisierte Personen Zugang zu der Sicherheitstür erhalten.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was passiert, wenn der Schlüssel im Schloss steckt oder abgebrochen ist?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dies stellt eine besonders anspruchsvolle Aufgabe dar. Bitte informiere uns beim Anruf, damit wir die notwendigen Vorbereitungen treffen können.',
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
          text: 'Falls du deinen Schlüssel verloren hast, empfehlen wir, den Schließzylinder auszutauschen, um die Sicherheit deines Zuhauses zu gewährleisten. Auch diesen Service bieten wir an.',
        },
      },
    ],
  },
};
export default sicherheitsTuerStrucutreData;

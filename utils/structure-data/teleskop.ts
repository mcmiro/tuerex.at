const teleskopStrucutreData = {
  '@context': 'http://schema.org',
  '@type': 'Service',
  name: 'Türöffnung mittels Teleskop',
  provider: {
    '@type': 'Organization',
    name: 'TÜREX',
    url: 'https://tuerex.at',
    logo: 'https://tuerex.at/logo.png',
    image:
      'https://res.cloudinary.com/dle6thajz/image/upload/fl_preserve_transparency/v1722856114/oeffnung-mit-teleskop_vvyuky.jpg',
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
      price: '79',
      priceCurrency: 'EUR',
      url: 'https://tuerex.at/leistungen/tueroeffnung-mit-teleskop',
      description: 'Normaldienst (Werktags von 05:00 - 17:00h)',
      eligibleTransactionVolume: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        price: '79',
      },
    },
    {
      '@type': 'Offer',
      price: '104',
      priceCurrency: 'EUR',
      url: 'https://tuerex.at/leistungen/tueroeffnung-mit-teleskop',
      description: 'Spätdienst (Werktags von 17:00 - 21:00h)',
      eligibleTransactionVolume: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        price: '104',
      },
    },
    {
      '@type': 'Offer',
      price: '124',
      priceCurrency: 'EUR',
      url: 'https://tuerex.at/leistungen/tueroeffnung-mit-teleskop',
      description: 'Nachtdienst (Werktags von 21:00 - 05:00h)',
      eligibleTransactionVolume: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        price: '124',
      },
    },
    {
      '@type': 'Offer',
      price: '124',
      priceCurrency: 'EUR',
      url: 'https://tuerex.at/leistungen/tueroeffnung-mit-teleskop',
      description: 'Sonn- und Feiertage (von 00:00 - 24:00h)',
      eligibleTransactionVolume: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        price: '124',
      },
    },
  ],
  description:
    'Präzise Türöffnungen mittels Teleskopstange. Die moderne Technik ermöglicht eine beschädigungsfreie Inspektion und Öffnung.',
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
    '@id': 'https://tuerex.at/leistungen/tueroeffnung-mit-teleskop',
    name: 'Türöffnung mittels Teleskopstange | Leistungen | TÜREX',
    description:
      'Präzise Türöffnungen mittels Teleskopstange. Die moderne Technik ermöglicht eine beschädigungsfreie Inspektion und Öffnung.',
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
        name: 'Türöffnung mit Teleskop',
        item: 'https://tuerex.at/leistungen/tueroeffnung-mit-teleskop',
      },
    ],
  },
  step: [
    {
      '@type': 'HowToStep',
      name: 'Vorbereitung',
      text: 'Wir bereiten die notwendigen Schritte für die Türöffnung vor, indem wir das Teleskopwerkzeug einsetzen, um eine Bestandsaufnahme durchzuführen. Dabei überprüfen wir die Tür und das Schloss.',
    },
    {
      '@type': 'HowToStep',
      name: 'Türöffnung',
      text: 'Durch präzises Positionieren der Teleskopstange öffnen wir deine Tür, indem wir das Werkzeug genau in den Türspalt einführen. So haben wir einen besseren Überblick und können deine Tür möglichst schadenfrei öffnen.',
    },
    {
      '@type': 'HowToStep',
      name: 'Funktionstest',
      text: 'Wir führen einen Funktionstest durch. War in deinem Fall ein schadfreies Öffnen nicht möglich, prüfen wir dein Schloss auf Schäden und beraten dich gerne individuell zu den nächsten Schritten.',
    },
  ],
  faqPage: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Ist die Türöffnung mit Teleskopstange sicher für meine Tür und mein Schloss?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, die Türöffnung mit einer Teleskopstange ist besonders schonend. Durch die detaillierte visuelle Inspektion können wir die Tür öffnen, ohne das Schloss oder die Tür zu beschädigen. Diese Methode minimiert das Risiko von Schäden und gewährleistet eine sichere Türöffnung.',
        },
      },
      {
        '@type': 'Question',
        name: 'In welchen Situationen ist der Einsatz einer Teleskopstange besonders vorteilhaft?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Der Einsatz einer Teleskopstange ist besonders vorteilhaft bei komplexen oder beschädigten Schlosssystemen, wo herkömmliche Öffnungsmethoden nicht ausreichen. Sie ermöglicht eine genaue Inspektion und Identifizierung von Problemen, was besonders in schwierigen oder ungewöhnlichen Fällen die Erfolgsrate der Türöffnung erhöht.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kann jede Tür mit einer Teleskopstange geöffnet werden?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Die Teleskopstange ist besonders effektiv bei komplexen und gut gesicherten Schlössern, die schwer zugänglich sind. Sie eignet sich für die meisten Sicherheitstüren, jedoch kann es bei extrem seltenen oder speziell gesicherten Türtypen Einschränkungen geben. Unser Techniker beurteilt vor Ort, ob diese Methode die beste Lösung ist.',
        },
      },
      {
        '@type': 'Question',
        name: 'Besteht die Gefahr, dass die Teleskopstange das Schloss oder die Tür beschädigt?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nein, die Teleskopstange ist speziell dafür entwickelt, das Schloss und den Türmechanismus sicher und schonend zu inspizieren. Durch die visuelle Unterstützung kann der Techniker sehr präzise arbeiten, was das Risiko von Beschädigungen erheblich minimiert. Die Methode ist so konzipiert, dass sie eine möglichst beschädigungsfreie Türöffnung ermöglicht.',
        },
      },
    ],
  },
};
export default teleskopStrucutreData;

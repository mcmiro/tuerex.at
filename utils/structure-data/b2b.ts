const b2bStructureData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'B2B Schlüsseldienstleistungen',
  provider: {
    '@type': 'Organization',
    name: 'TÜREX',
    url: 'https://tuerex.at',
    logo: 'https://tuerex.at/logo.png',
    image:
      'https://res.cloudinary.com/dle6thajz/image/upload/fl_preserve_transparency/v1722856856/b2b-schluesseldienst-leistungen_ojwnit.jpg',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+436763741204',
      contactType: 'Customer Service',
      availableLanguage: ['German'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Oldenburggasse 6',
      addressLocality: 'Wien',
      addressRegion: 'Vienna',
      postalCode: '1230',
      addressCountry: 'AT',
    },
  },
  name: 'B2B Schlüsseldienstleistungen in Wien | TÜREX',
  description:
    'B2B Schlüsseldienste in Wien. Mit Notfall-Prioritätsservice und zuverlässiger laufender Wartung/Reparatur. Zahlung auf Lieferschein, vereinfachte Auftragsvergabe.',
  url: 'https://tuerex.at/leistungen/b2b-leistungen',
  mainEntityOfPage: 'https://tuerex.at/leistungen/b2b-leistungen',
  headline: 'Individuelle Schlüsseldienstlösungen für Ihr Business.',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    price: 'varies',
    description:
      'Transparente Preisgestaltung - Anfahrtskosten inkludiert. Unsere Preise sind fair und transparent, ohne versteckte Kosten. Wir richten uns nach den Preiserhebungen der WKÖ (Wirtschaftskammer Österreich), um Ihnen einen fairen und transparenten Fixpreis zu garantieren.',
  },
  serviceArea: {
    '@type': 'Place',
    name: 'Wien',
  },
  additionalType: 'https://schema.org/Locksmith',
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was bietet TÜREX für B2B Schlüsseldienstleistungen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TÜREX bietet spezialisierte Schlüsseldienst- und Schlosserlösungen, die auf die Bedürfnisse von Unternehmen zugeschnitten sind. Unser Fokus liegt auf schnellen, zuverlässigen und flexiblen Services, um Ihre Anforderungen professionell zu erfüllen. Wir bieten Notfall-Prioritätsservice, maßgeschneiderte Service-Level-Agreements (SLAs), individuelle und effiziente Lösungen sowie bequeme Zahlung auf Lieferschein.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie funktioniert der Notfall-Prioritätsservice?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mit unserem Prioritätsservice behandeln wir Ihre Anliegen mit höchster Dringlichkeit. In Notfällen sind Sie immer die Ersten, die wir betreuen. Rund um die Uhr, jeden Tag, 365 Tage im Jahr. Ohne Auszeit.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was sind maßgeschneiderte SLAs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Unsere Service-Level-Agreements bieten Ihnen maßgeschneiderte Leistungen, die Ihre Erwartungen übertreffen. Wir passen uns Ihren Bedürfnissen an, um Ihnen den bestmöglichen Service zu bieten.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Zahlungsmethoden bietet TÜREX für B2B-Kunden?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Unseren Vertragskunden bieten wir die Zahlung per Lieferschein an. Sie beauftragen uns, wann immer Sie uns brauchen, und bezahlen bequem am Ende des Monats per Rechnung.',
        },
      },
      {
        '@type': 'Question',
        name: 'Bietet TÜREX Preisnachlässe für Vertragskunden?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, wir bieten attraktive Preisnachlässe für langfristige Vertragskunden. Mit unseren Preisnachlässen für Vertragskunden profitieren Sie von erstklassigem Service und wirtschaftlichen Vorteilen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie funktioniert die automatische Administration bei TÜREX?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Unsere IT-Experten sind bereit, Integrationen in Ihre bestehenden Systeme zu entwickeln. Somit entsteht für Sie keine zusätzliche Administration, wenn Sie uns beauftragen. Wir lieben Automatisierung und passen uns flexibel an Ihre Systeme an.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Leistungen bietet TÜREX im Bereich Schlüsseldienst an?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Unsere Leistungen umfassen Notfall Schlüsseldienstleistungen, Installation von Schließanlagen, Wartung, Reparatur und Einbruchschutz & Beratung. Wir sind rund um die Uhr verfügbar, um bei versperrten Türen zu helfen oder Schlösser zu behandeln. Wir installieren moderne Zylinder und Schließanlagen, führen regelmäßige Inspektionen und vorbeugende Wartung durch, beheben schnell und zuverlässig Störungen und Defekte an Ihren Schließsystemen und bieten bewährte Lösungen zum Einbruchschutz.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell können Reparaturen durchgeführt werden?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Unser geschultes Fachpersonal behebt Störungen und Defekte schnell und zuverlässig, um den reibungslosen Betrieb Ihrer Schließsysteme zu gewährleisten.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Maßnahmen bietet TÜREX zum Einbruchschutz?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wir bieten Einbruchschutzlösungen, die speziell auf die Sicherung Ihrer Räume gegen Einbrüche ausgelegt sind. Unsere umfassende Sicherheitsberatung hilft Ihnen, Ihre Immobilie nach neuestem Stand zu schützen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie kann mein Unternehmen Vertragskunde bei TÜREX werden?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch. Wir erklären Ihnen alle Vorteile und Konditionen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Bieten Sie Dienstleistungen auch an Feiertagen an?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja. Wir sind 24 Stunden, 365 Tage im Jahr im Einsatz. Auch an Sonn- und Feiertagen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was umfasst der Wartungsservice von TÜREX?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Unsere Wartungsservices beinhalten regelmäßige Inspektionen und vorbeugende Wartung, um die Funktion Ihrer Schließsysteme sicherzustellen und Ausfälle zu vermeiden.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie kann mein Unternehmen TÜREX beauftragen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sie können uns jederzeit über unser Online-Formular oder telefonisch erreichen. Unsere Experten stehen Ihnen telefonisch rund um die Uhr zur Verfügung. Bei unserem Online-Formular beträgt die durchschnittliche Antwortdauer ca. 24 Stunden.',
        },
      },
    ],
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://tuerex.at/',
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
        name: 'B2B Schlüsseldienstleistungen',
        item: 'https://tuerex.at/leistungen/b2b-leistungen',
      },
    ],
  },
};
export default b2bStructureData;

const versperrteTuerStrucutreData = {
  '@context': 'http://schema.org',
  '@type': 'Service',
  name: 'Öffnung versperrter Türen',
  provider: {
    '@type': 'Organization',
    name: 'TÜREX',
    url: 'https://tuerex.at',
    logo: 'https://tuerex.at/logo.png',
    image:
      'https://res.cloudinary.com/dle6thajz/image/upload/fl_preserve_transparency/v1722856115/oeffnung-versperrter-tueren_mci4mn.jpg',
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
      price: '149',
      priceCurrency: 'EUR',
      url: 'https://tuerex.at/leistungen/versperrte-tueren',
      description: 'Normaldienst (Werktags von 05:00 - 17:00h)',
      eligibleTransactionVolume: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        price: '149',
      },
    },
    {
      '@type': 'Offer',
      price: '174',
      priceCurrency: 'EUR',
      url: 'https://tuerex.at/leistungen/versperrte-tueren',
      description: 'Spätdienst (Werktags von 17:00 - 21:00h)',
      eligibleTransactionVolume: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        price: '174',
      },
    },
    {
      '@type': 'Offer',
      price: '194',
      priceCurrency: 'EUR',
      url: 'https://tuerex.at/leistungen/versperrte-tueren',
      description: 'Nachtdienst (Werktags von 21:00 - 05:00h)',
      eligibleTransactionVolume: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        price: '194',
      },
    },
    {
      '@type': 'Offer',
      price: '194',
      priceCurrency: 'EUR',
      url: 'https://tuerex.at/leistungen/versperrte-tueren',
      description: 'Sonn- und Feiertage (von 00:00 - 24:00h)',
      eligibleTransactionVolume: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        price: '194',
      },
    },
  ],
  description:
    'Wenn du dich ausgesperrt hast, findest du hier alles darüber, wie wir sicher und professionell deine Türe öffnen. Jetzt mehr erfahren.',
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
    '@id': 'https://tuerex.at/leistungen/versperrte-tueren',
    name: 'Öffnung versperrter Türen | Leistungen | TÜREX',
    description:
      'Wenn du dich ausgesperrt hast, findest du hier alles darüber, wie wir sicher und professionell deine Türe öffnen. Jetzt mehr erfahren.',
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
        name: 'Versperrte Tür',
        item: 'https://tuerex.at/leistungen/versperrte-tueren',
      },
    ],
  },
  step: [
    {
      '@type': 'HowToStep',
      name: 'Unsere Hotline anrufen (00-24h)',
      text: 'Beschreibe uns dein Problem am Telefon. Unser erfahrenes Team gibt dir sofort eine klare Übersicht der nächsten Schritte, eine transparente Kostenschätzung und die voraussichtliche Ankunftszeit unseres Technikers.',
    },
    {
      '@type': 'HowToStep',
      name: 'Sofortige Einsatzbereitschaft',
      text: 'Nachdem du uns kontaktiert hast, macht sich einer unserer qualifizierten Techniker sofort auf den Weg zu dir. Durchschnittlich sind wir innerhalb von 30 Minuten bei unseren Kunden in Wien, abhängig von aktuellem Standort.',
    },
    {
      '@type': 'HowToStep',
      name: 'Fachgerechte Türöffnung',
      text: 'Sobald unser Techniker bei dir eintrifft, wird die Situation sorgfältig bewertet und die optimale Methode zur Öffnung deiner Sicherheitstür ausgewählt. Danach sorgen wir für eine beschädigungsfreie und effiziente Türöffnung.',
    },
    {
      '@type': 'HowToStep',
      name: 'Abschließende Formalitäten und Zahlung',
      text: 'Nach erfolgreicher Türöffnung bitten wir dich, eine rechtsverbindliche Erklärung zu unterschreiben, um sowohl deine als auch unsere Sicherheit zu gewährleisten. Die Bezahlung kann direkt vor Ort entweder in Bar oder per Kartenzahlung erfolgen.',
    },
  ],
  faqPage: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was soll ich tun, wenn ich meinen Schlüssel im Schloss abgebrochen habe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wenn Ihr Schlüssel im Schloss abgebrochen ist, versuchen Sie nicht, den Schlüsselrest selbst zu entfernen, da dies das Schloss weiter beschädigen könnte. Kontaktieren Sie uns in diesem Fall am besten sofort.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kann ein Schlüsseldienst meine Tür öffnen, wenn der Schlüssel von innen steckt?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, wir können Ihre Tür auch dann öffnen, wenn der Schlüssel von innen steckt. Unsere Techniker verwenden spezielle Werkzeuge und Techniken, wie Lockpicking oder Manipulation durch den Türspalt, um die Tür schonend und effektiv zu öffnen, ohne das Schloss zu beschädigen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wird mein Schloss beschädigt, wenn Sie die Tür öffnen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Unser Ziel ist es, die Tür und das Schloss unbeschädigt zu öffnen. Wir setzen auf zerstörungsfreie Methoden und spezielle Manipulationstechniken. In den seltenen Fällen, in denen destruktive Methoden notwendig sind (z.B. Bohren), informieren wir dich im Voraus und bieten eine Lösung für den anschließenden Austausch des Schlosses an.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kann Türex alle Arten von Schlössern öffnen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, unsere Techniker sind geschult und erfahren im Umgang mit einer Vielzahl von Schlössern, einschließlich moderner Sicherheitsschlösser. Wir verwenden spezialisierte Werkzeuge und Techniken, um selbst die anspruchsvollsten Schlösser zu öffnen, ohne sie zu beschädigen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kann ich meine Tür selbst öffnen, wenn der Schlüssel abgebrochen ist?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wir raten davon ab, selbst zu versuchen, einen abgebrochenen Schlüssel zu entfernen oder die Tür zu öffnen. Ohne das richtige Werkzeug und die nötige Erfahrung kann dies das Schloss weiter beschädigen. Es ist am besten, einen professionellen Schlüsseldienst zu kontaktieren, der über das notwendige Fachwissen und die Werkzeuge verfügt.',
        },
      },
    ],
  },
};
export default versperrteTuerStrucutreData;

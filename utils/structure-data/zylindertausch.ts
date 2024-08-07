const zylinderStrucutreData = {
  '@context': 'http://schema.org',
  '@type': 'Service',
  name: 'Zylindertausch, Beratung und Verkauf',
  provider: {
    '@type': 'Organization',
    name: 'TÜREX',
    url: 'https://tuerex.at',
    logo: 'https://tuerex.at/logo.png',
    image:
      'https://res.cloudinary.com/dle6thajz/image/upload/fl_preserve_transparency/v1722856115/zylindertausch_neg7ib.jpg',
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
      priceCurrency: 'EUR',
      url: 'https://tuerex.at/leistungen/zylinder-tausch',
      description: 'Zylindertausch (Arbeitszeit)',
      price: 'ab 60',
    },
    {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      url: 'https://tuerex.at/leistungen/zylinder-tausch',
      description: 'Verkauf provisorischer Zylinder',
      price: 'ab 15',
    },
    {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      url: 'https://tuerex.at/leistungen/zylinder-tausch',
      description: 'Verkauf dauerhafter Zylinder',
      price: 'ab 30',
    },
  ],
  description:
    'Finde heraus, wann ein Zylindertausch notwendig oder empfehlenswert ist und wie er sicher durchgeführt wird. Jetzt mehr erfahren.',
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
    '@id': 'https://tuerex.at/leistungen/zylinder-tausch',
    name: 'Zylindertausch, Verkauf und Montage | Leistungen | TÜREX',
    description:
      'Finde heraus, wann ein Zylindertausch notwendig oder empfehlenswert ist und wie er sicher durchgeführt wird. Jetzt mehr erfahren.',
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
        name: 'Zylindertausch',
        item: 'https://tuerex.at/leistungen/zylinder-tausch',
      },
    ],
  },
  step: [
    {
      '@type': 'HowToStep',
      name: 'Beratung und Verkauf',
      text: 'Wir bieten eine Auswahl an Zylindermodellen, die du direkt bei uns kaufen kannst, und verrechnen diese ohne Aufpreis weiter. Mit unserer Expertise beraten wir dich, um die beste Wahl zu treffen, unabhängig davon, ob du den Zylinder letztendlich bei uns oder anderswo kaufst.',
    },
    {
      '@type': 'HowToStep',
      name: 'Provisorischer Zylinder',
      text: "Du hast die Möglichkeit, direkt vor Ort einen provisorischen 'Notfall-Zylinder' zu kaufen und von uns montieren zu lassen. Diese haben wir immer dabei – auch nachts, am Wochenende und an Feiertagen. So hast du eine Zwischenlösung, bis ein dauerhafter Zylinder montiert wird.",
    },
    {
      '@type': 'HowToStep',
      name: 'Neue Zylinder ohne Zusatzkosten',
      text: 'Wenn du einen neuen Zylinder benötigst, bieten wir dir unser sorgfältig ausgewähltes Sortiment an. Die Kosten für den Zylinder werden ohne zusätzliche Kosten direkt an dich weitergegeben. So erhältst du hochwertige Qualität zum besten Preis.',
    },
    {
      '@type': 'HowToStep',
      name: 'Zylindertausch',
      text: 'Du kannst uns auch ausschließlich für die Montage des Zylinders beauftragen, unabhängig davon, wo du den Zylinder kaufst. Wir verrechnen den Tausch nach Aufwand. Der Preis für einen Zylindertausch hängt vom konkreten Aufwand ab und kann erst nach Einsicht vor Ort angeboten werden.',
    },
  ],
  faqPage: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wann ist ein Zylindertausch notwendig?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ein Zylindertausch ist notwendig, wenn der Schlüssel im Schloss abgebrochen ist, der Zylinder beschädigt oder abgenutzt ist, oder wenn du den Verdacht hast, dass unbefugte Personen Zugriff auf dein Zuhause oder Geschäft haben könnten. Ein Zylindertausch erhöht die Sicherheit deines Zuhauses.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kann ich den Türzylinder selbst wechseln, oder sollte ich einen Profi beauftragen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Obwohl es technisch möglich ist, einen Türzylinder selbst zu wechseln, empfehlen wir, einen Profi zu beauftragen. Ein professioneller Techniker stellt sicher, dass der Zylinder korrekt installiert ist, was die Sicherheit und Funktionalität deiner Tür gewährleistet. Unsachgemäße Installationen können zu Sicherheitsrisiken und teuren Reparaturen führen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Arten von Zylindern bietet Türex an?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wir bieten eine breite Palette an Türzylindern an, von Standardmodellen bis hin zu hochwertigen Sicherheitszylindern. Unser Techniker berät dich vor Ort und hilft dir, den für deine Bedürfnisse und dein Budget passenden Zylinder auszuwählen. Alle unsere Zylinder erfüllen hohe Sicherheitsstandards und bieten zuverlässigen Schutz.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kann ich auch einen bestehenden Zylinder montieren lassen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, du kannst einen bereits vorhandenen Zylinder von uns montieren lassen. Unsere Techniker überprüfen vor Ort, ob der vorhandene Zylinder kompatibel und in gutem Zustand ist. Wenn alles passt, installieren wir ihn gerne für dich. Sollte der Zylinder jedoch nicht geeignet sein, beraten wir dich gerne über passende Alternativen, um sicherzustellen, dass deine Tür sicher und funktionsfähig ist.',
        },
      },
    ],
  },
};
export default zylinderStrucutreData;

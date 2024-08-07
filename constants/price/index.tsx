import { SunIcon } from '@heroicons/react/24/outline';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { MoonIcon } from '@heroicons/react/24/outline';
import { CalendarIcon } from '@heroicons/react/24/outline';

export const priceData = [
  {
    title: 'Frühdienst',
    workingHours: 'Werktags von 05:00 bis 17:00 Uhr',
    addonPrice: 0,
    icon: SunIcon,
    services: [
      {
        service: 'Zugefallene Tür (normale Tür)',
        link: '/leistungen/zugefallene-standardtueren',
        description:
          'Öffnung von zugefallenen Türen (keine Sicherheitstüren). Die Tür ist nicht versperrt, und der Schlüssel steckt nicht im Zylinder. Preis inklusive Anfahrtskosten.',
        price: 89,
      },
      {
        service: 'Zugefallene Sicherheitstür',
        link: '/leistungen/zugefallene-sicherheitstueren',
        description:
          'Öffnung von zugefallenen Sicherheitstüren. Die Tür ist nicht versperrt, und der Schlüssel steckt nicht im Zylinder. Preis inklusive Anfahrtskosten.',
        price: 114,
      },
      {
        service: 'Versperrte Tür (Normale- und Sicherheitstür)',
        link: '/leistungen/versperrte-tueren',
        description:
          'Öffnung von Türen, die versperrt sind oder einen steckenden/abgebrochenen Schlüssel haben. Bei abgebrochenem Schlüssel gilt der Preis nur, wenn das Entfernen ohne Zylindertausch möglich ist. Ansonsten siehe Leistung "Zylindertausch" Preis inklusive Anfahrtskosten.',
        price: 149,
      },
      {
        service: 'Zylindertausch',
        link: '/leistungen/zylinder-tausch',
        description:
          'Zylindertausch, falls erforderlich (z.B. bei einem abgebrochenen Schlüssel). Der Preis wird individuell nach Arbeitsumfang und dem gewünschten Zylindermodell gesondert angeboten.',
        price: 'ab 60',
      },
      {
        service: 'Aufpreis für Türöffnung mit Teleskop',
        link: '/leistungen/tueroeffnung-mit-teleskop',
        description:
          'Aufpreis für die jeweilige Leistung, sofern Inspektion und Türöffnung mittels einer Teleskopstange mit angebrachter Kamera erforderlich sind.',
        price: 79,
      },
    ],
  },
  {
    title: 'Spätdienst',
    workingHours: 'Werktags von 17:00 bis 21:00 Uhr',
    addonPrice: 25,
    icon: MoonIcon,
    services: [
      {
        service: 'Zugefallene Tür (normale Tür)',
        link: '/leistungen/zugefallene-standardtueren',
        description:
          'Öffnung von zugefallenen Türen (keine Sicherheitstüren). Die Tür ist nicht versperrt, und der Schlüssel steckt nicht im Zylinder. Preis inklusive Anfahrtskosten.',
        price: 89,
      },
      {
        service: 'Zugefallene Sicherheitstür',
        link: '/leistungen/zugefallene-sicherheitstueren',
        description:
          'Öffnung von zugefallenen Sicherheitstüren. Die Tür ist nicht versperrt, und der Schlüssel steckt nicht im Zylinder. Preis inklusive Anfahrtskosten.',
        price: 114,
      },
      {
        service: 'Versperrte Tür (Normale- und Sicherheitstür)',
        link: '/leistungen/versperrte-tueren',
        description:
          'Öffnung von Türen, die versperrt sind oder einen steckenden/abgebrochenen Schlüssel haben. Bei abgebrochenem Schlüssel gilt der Preis nur, wenn das Entfernen ohne Zylindertausch möglich ist. Ansonsten siehe Leistung "Zylindertausch" Preis inklusive Anfahrtskosten.',
        price: 149,
      },
      {
        service: 'Zylindertausch',
        link: '/leistungen/zylinder-tausch',
        description:
          'Zylindertausch, falls erforderlich (z.B. bei einem abgebrochenen Schlüssel). Der Preis wird individuell nach Arbeitsumfang und dem gewünschten Zylindermodell gesondert angeboten.',
        price: 'ab 60',
      },
      {
        service: 'Aufpreis für Türöffnung mit Teleskop',
        link: '/leistungen/tueroeffnung-mit-teleskop',
        description:
          'Aufpreis für die jeweilige Leistung, sofern Inspektion und Türöffnung mittels einer Teleskopstange mit angebrachter Kamera erforderlich sind.',
        price: 79,
      },
    ],
  },
  {
    title: 'Nachtdienst',
    workingHours: 'Werktags von 21:00 bis 05:00 Uhr',
    addonPrice: 45,
    icon: SparklesIcon,
    services: [
      {
        service: 'Zugefallene Tür (normale Tür)',
        link: '/leistungen/zugefallene-standardtueren',
        description:
          'Öffnung von zugefallenen Türen (keine Sicherheitstüren). Die Tür ist nicht versperrt, und der Schlüssel steckt nicht im Zylinder. Preis inklusive Anfahrtskosten.',
        price: 89,
      },
      {
        service: 'Zugefallene Sicherheitstür',
        link: '/leistungen/zugefallene-sicherheitstueren',
        description:
          'Öffnung von zugefallenen Sicherheitstüren. Die Tür ist nicht versperrt, und der Schlüssel steckt nicht im Zylinder. Preis inklusive Anfahrtskosten.',
        price: 114,
      },
      {
        service: 'Versperrte Tür (Normale- und Sicherheitstür)',
        link: '/leistungen/versperrte-tueren',
        description:
          'Öffnung von Türen, die versperrt sind oder einen steckenden/abgebrochenen Schlüssel haben. Bei abgebrochenem Schlüssel gilt der Preis nur, wenn das Entfernen ohne Zylindertausch möglich ist. Ansonsten siehe Leistung "Zylindertausch" Preis inklusive Anfahrtskosten.',
        price: 149,
      },
      {
        service: 'Zylindertausch',
        link: '/leistungen/zylinder-tausch',
        description:
          'Zylindertausch, falls erforderlich (z.B. bei einem abgebrochenen Schlüssel). Der Preis wird individuell nach Arbeitsumfang und dem gewünschten Zylindermodell gesondert angeboten.',
        price: 'ab 60',
      },
      {
        service: 'Aufpreis für Türöffnung mit Teleskop',
        link: '/leistungen/tueroeffnung-mit-teleskop',
        description:
          'Aufpreis für die jeweilige Leistung, sofern Inspektion und Türöffnung mittels einer Teleskopstange mit angebrachter Kamera erforderlich sind.',
        price: 79,
      },
    ],
  },
  {
    title: 'Sonn- und Feiertage',
    workingHours: 'Sonn- und Feiertags von 00:00 bis 24:00 Uhr',
    addonPrice: 45,
    icon: CalendarIcon,
    services: [
      {
        service: 'Zugefallene Tür (normale Tür)',
        link: '/leistungen/zugefallene-standardtueren',
        description:
          'Öffnung von zugefallenen Türen (keine Sicherheitstüren). Die Tür ist nicht versperrt, und der Schlüssel steckt nicht im Zylinder. Preis inklusive Anfahrtskosten.',
        price: 89,
      },
      {
        service: 'Zugefallene Sicherheitstür',
        link: '/leistungen/zugefallene-sicherheitstueren',
        description:
          'Öffnung von zugefallenen Sicherheitstüren. Die Tür ist nicht versperrt, und der Schlüssel steckt nicht im Zylinder. Preis inklusive Anfahrtskosten.',
        price: 114,
      },
      {
        service: 'Versperrte Tür (Normale- und Sicherheitstür)',
        link: '/leistungen/versperrte-tueren',
        description:
          'Öffnung von Türen, die versperrt sind oder einen steckenden/abgebrochenen Schlüssel haben. Bei abgebrochenem Schlüssel gilt der Preis nur, wenn das Entfernen ohne Zylindertausch möglich ist. Ansonsten siehe Leistung "Zylindertausch" Preis inklusive Anfahrtskosten.',
        price: 149,
      },
      {
        service: 'Zylindertausch',
        link: '/leistungen/zylinder-tausch',
        description:
          'Zylindertausch, falls erforderlich (z.B. bei einem abgebrochenen Schlüssel). Der Preis wird individuell nach Arbeitsumfang und dem gewünschten Zylindermodell gesondert angeboten.',
        price: 'ab 60',
      },
      {
        service: 'Aufpreis für Türöffnung mit Teleskop',
        link: '/leistungen/tueroeffnung-mit-teleskop',
        description:
          'Aufpreis für die jeweilige Leistung, sofern Inspektion und Türöffnung mittels einer Teleskopstange mit angebrachter Kamera erforderlich sind.',
        price: 79,
      },
    ],
  },
];

import { SunIcon } from '@heroicons/react/24/outline';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { MoonIcon } from '@heroicons/react/24/outline';

export const priceData = [
  {
    title: 'Frühdienst',
    workingHours: '05:00 bis 17:00 Uhr',
    addonPrice: 0,
    icon: SunIcon,
    services: [
      {
        service: 'Türöffnung mit Teleskop',
        description:
          'je Sicherheitselement 49€ max. 98€ / 2 Elemente (Dichtung, Beschlag, sonstiges) je Sicherheitselement 49€ max. 98€ / 2 Elemente (Dichtung, Beschlag, sonstiges) je Sicherheitselement 49€ max. 98€ / 2 Elemente (Dichtung, Beschlag, sonstiges)',
        price: 65,
      },
      {
        service: 'Zugeschlagene Tür',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        price: 75,
      },
      {
        service: 'Verschlossene Tür',
        description: '',
        price: 135,
      },
      {
        service: 'Zugeschlagene Sicherheitstür',
        description: '',
        price: 135,
      },
      {
        service: 'Verschlossene Sicherheitstür',
        description: '',
        price: 195,
      },
      {
        service: 'Schlüssel abgebrochen',
        description: '',
        price: 95,
      },
    ],
  },
  {
    title: 'Spätdienst',
    workingHours: '17:00 bis 21:00 Uhr',
    addonPrice: 25,
    icon: MoonIcon,
    services: [
      {
        service: 'Türöffnung mit Teleskop',
        description: '',
        price: 65,
      },
      {
        service: 'Türöffnung (zugeschlagene Tür)',
        description: '',
        price: 75,
      },
      {
        service: 'Türöffnung (verschlossene Tür)',
        description: '',
        price: 135,
      },
      {
        service: 'Schlüssel im Zylinder abgebrochen',
        description: '',
        price: 95,
      },
    ],
  },
  {
    title: 'Nachtdienst',
    workingHours: '21:00 bis 05:00 Uhr',
    addonPrice: 45,
    icon: SparklesIcon,
    services: [
      {
        service: 'Türöffnung mit Teleskop',
        description: '',
        price: 65,
      },
      {
        service: 'Türöffnung (zugeschlagene Tür)',
        description: '',
        price: 75,
      },
      {
        service: 'Türöffnung (verschlossene Tür)',
        description: '',
        price: 135,
      },
      {
        service: 'Schlüssel im Zylinder abgebrochen',
        description: '',
        price: 95,
      },
    ],
  },
];

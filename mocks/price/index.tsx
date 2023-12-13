import { SunIcon } from '@heroicons/react/24/outline';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { MoonIcon } from '@heroicons/react/24/outline';

export const priceData = [
  {
    title: 'Frühdienst',
    workingHours: '05:00 bis 17:00 Uhr',
    addonPrice: 0,
    className: 'rounded-r-none',
    icon: SunIcon,
    services: [
      {
        service: 'Türöffnung (geschlossene Tür)',
        price: 75,
      },
      {
        service: 'Schlüsseldienst',
        price: 95,
      },
    ],
  },
  {
    title: 'Spätdienst',
    workingHours: '17:00 bis 21:00 Uhr',
    addonPrice: 25,
    className: 'rounded-none !border-x-0',
    icon: MoonIcon,
    services: [
      {
        service: 'Türöffnung (geschlossene Tür)',
        price: 75,
      },
    ],
  },
  {
    title: 'Nachtdienst',
    workingHours: '21:00 bis 05:00 Uhr',
    addonPrice: 45,
    className: 'rounded-l-none',
    icon: SparklesIcon,
    services: [
      {
        service: 'Türöffnung (geschlossene Tür)',
        price: 75,
      },
    ],
  },
];

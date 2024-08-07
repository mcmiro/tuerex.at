export const priceDataSecureDoor = {
  headline: 'Zugefallene Sicherheitstür',
  subline:
    'Als zugefallen gilt wenn die Tür ist nicht versperrt ist, und der Schlüssel nicht im Zylinder steckt.',
  description:
    '*Fixpreise gelten nur, sofern die Angaben betreffend der Situation beim Eintreffen korrekt sind und die übliche Arbeitszeit für die jeweilige Leistung nicht überschritten wird. Falls ein Mehraufwand erforderlich ist, informieren wir vorab über mögliche Preisänderungen.',
  shifts: [
    {
      service: 'Frühdienst',
      description: 'Werktags von 05:00 bis 17:00 Uhr.',
      price: 114,
    },
    {
      service: 'Spätdienst',
      description: 'Werktags von 17:00 bis 21:00 Uhr.',
      price: 139,
    },
    {
      service: 'Nachtdienst',
      description: 'Werktags von 21:00 bis 05:00 Uhr.',
      price: 159,
    },
    {
      service: 'Sonn- und Feiertag',
      description: 'Sonn- und Feiertags von 00:00 bis 24:00 Uhr.',
      price: 159,
    },
  ],
};

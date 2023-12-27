const indexStrucutreData = {
  '@context': 'https://schema.org',
  '@type': 'Locksmith',
  name: 'Schlüsseldienst Wien | Auffsperrdienst | TÜREX',
  image:
    'https://tuerex.at/_next/static/media/schluesseldienst-wien-aufsperrdienst.webp',
  '@id': 'https://tuerex.at',
  url: 'https://tuerex.at',
  telephone: '+436763741204',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Oldenburggasse 6',
    addressLocality: 'Vienna',
    addressRegion: 'Vienna',
    postalCode: '1230',
    addressCountry: 'AT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.15127,
    longitude: 16.33139,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.65',
    reviewCount: '132',
  },
};

export default indexStrucutreData;

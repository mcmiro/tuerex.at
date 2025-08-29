import { useEffect, useState } from 'react';

interface GeoLocation {
  latitude: number;
  longitude: number;
}

interface ScreenSize {
  width: number;
  height: number;
}

export interface VisitorProps {
  userAgent: string;
  referrer: string;
  geolocation: GeoLocation | null;
  screenResolution: ScreenSize;
  language: string;
  operatingSystem: string;
  os: string;
  device: string;
}

const useVisitor = () => {
  const [visitorInformation, setVisitorInformation] = useState<VisitorProps>();
  const [geoLocation, setGeoLocation] = useState<GeoLocation | null>(null);

  useEffect(() => {
    const fetchGeoLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setGeoLocation({ latitude, longitude });
      });
    };

    fetchGeoLocation();
  }, []);

  useEffect(() => {
    const visitorInformation: VisitorProps = {
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      geolocation: geoLocation,
      screenResolution: {
        width: window.screen.width,
        height: window.screen.height,
      },
      language: navigator.language,
      operatingSystem: navigator.platform,
      os: navigator.platform,
      device: navigator.userAgent,
    };

    setVisitorInformation(visitorInformation);
  }, [geoLocation]);

  return {
    visitorInformation,
  };
};

export default useVisitor;

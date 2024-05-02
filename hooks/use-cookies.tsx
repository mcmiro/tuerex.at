import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export const useCookies = () => {
  const [functionalCookies, setFunctionalCookies] = useState<string>();

  const saveFunctionalCookies = (payload: any) => {
    Cookies.set('functional-cookies', payload);
  };

  const getFunctionalCookies = () => {
    const cookies = Cookies.get('functional-cookies');
    cookies && setFunctionalCookies(cookies);
  };

  useEffect(() => {
    getFunctionalCookies();
  }, []);

  return {
    saveFunctionalCookies,
    functionalCookies,
  };
};

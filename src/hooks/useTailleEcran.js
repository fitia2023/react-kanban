import { useEffect, useState } from 'react';

export default function useTailleEcran() {
  const [tailleEcran, setTailleEcran] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setTailleEcran(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return tailleEcran;
}
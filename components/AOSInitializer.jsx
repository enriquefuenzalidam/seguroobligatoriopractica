// components/AOSInitializer.jsx
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true
    });
    AOS.refresh();
  }, []);

  return null;
};

export default AOSInitializer;

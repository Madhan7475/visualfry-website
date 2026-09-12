import React, { useEffect } from 'react';

const PageLayout = ({ children }) => {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [children]);

  return <>{children}</>;
};

export default PageLayout;

import React from 'react';
import Header from '../componants/Header';

const Home: React.FC = () => {
  return (
    <>
      <Header />

      {/* Section principale avec contenu centré */}
      <main className="flex items-center justify-center px-4">
        <div className="max-w-4xl w-full flex flex-col items-center  gap-1 lg:flex-row-reverse lg:justify-between  lg:gap-12">
          
          {/* Logo */}
          <img
            className="max-w-3/5 max-h-auto lg:max-w-3/5  mb-4 lg:mb-0"
            src="/computer.webp"
            alt="logo"
          />

          {/* Titre */}
          <h1 className="text-xl lg:text-4xl font-semibold text-indigo-500 text-center lg:text-left">
            Bonjour, je suis Anaïs !
          </h1>
        </div>
      </main>
    </>
  );
};

export default Home;

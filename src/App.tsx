import React from 'react';
import { Header } from './components/Header';
import { CountdownSection } from './components/CountdownSection';
import { HeroInvitation } from './components/HeroInvitation';
import { HighlightsSection } from './components/HighlightsSection';
import { PromotionsSection } from './components/PromotionsSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#231E1B] antialiased selection:bg-[#C8933E]/20 selection:text-[#231E1B]">
      {/* 1. Logotipo y navegación esencial de marca */}
      <Header />

      <main className="flex-1 pb-10">
        {/* 2. Cuenta regresiva al inicio de la página */}
        <CountdownSection />

        {/* 3. Invitación personal y fechas */}
        <HeroInvitation />

        {/* 4. Bebida de cortesía, snack y cupo anunciado */}
        <HighlightsSection />

        {/* 5. Promociones de inauguración y llamada a WhatsApp */}
        <PromotionsSection />

        {/* 6. Dirección y acceso a ubicación */}
        <LocationContactSection />
      </main>

      {/* 7. Cierre de marca, firma e Instagram */}
      <Footer />
    </div>
  );
};

export default App;

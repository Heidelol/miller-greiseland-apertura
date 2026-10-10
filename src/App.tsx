import React from 'react';
import { Header } from './components/Header';
import { HeroInvitation } from './components/HeroInvitation';
import { CountdownSection } from './components/CountdownSection';
import { HighlightsSection } from './components/HighlightsSection';
import { PromotionsSection } from './components/PromotionsSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5EE] text-[#231E1B] antialiased selection:bg-[#C8933E]/20 selection:text-[#231E1B]">
      {/* 1. Logotipo y navegación esencial */}
      <Header />

      <main className="flex-1">
        {/* 2. Invitación y fechas */}
        <HeroInvitation />

        {/* 3. Cuenta regresiva o aviso de apertura */}
        <CountdownSection />

        {/* 4. Bebida de cortesía, snack y cupo anunciado */}
        <HighlightsSection />

        {/* 5. Promociones y 6. Botón de consulta por WhatsApp */}
        <PromotionsSection />

        {/* 7. Dirección y acceso a ubicación */}
        <LocationContactSection />
      </main>

      {/* 8. Cierre de marca e Instagram */}
      <Footer />
    </div>
  );
};

export default App;

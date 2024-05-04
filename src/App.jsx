import Header from "./components/Header/Header";
import DisciplenesSection from "./components/DisciplenesSection";
import UniversityLife from "./components/UniversityLife";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import { useState } from "react";
import FeedbackSection from "./components/FeedbackSection";
import EffectSection from "./components/EffectSection";

export default function App() {
  const [tab, setTab] = useState("effect");

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === "main" && (
          <>
            <DisciplenesSection />
            <UniversityLife />
          </>
        )}

        {tab === "feedback" && <FeedbackSection />}

        {tab === "effect" && <EffectSection />}

        <h3>Contacts</h3>
      </main>
    </>
  );
}

import Header from "./components/Header/Header";
import DisciplenesSection from "./components/DisciplenesSection";
import UniversityLife from "./components/UniversityLife";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import { useState } from "react";
import FeedbackSection from "./components/FeedbackSection";

export default function App() {
  const [tab, setTab] = useState("main");

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

        <h3>Contacts</h3>
      </main>
    </>
  );
}

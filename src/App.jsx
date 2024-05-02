import Header from "./components/Header";
import DisciplenesSection from "./components/DisciplenesSection";
import UniversityLife from "./components/UniversityLife";
import IntroSection from "./components/IntroSection";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <DisciplenesSection />
        <UniversityLife />

        <h3>Contacts</h3>
      </main>
    </>
  );
}

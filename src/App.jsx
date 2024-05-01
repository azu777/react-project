import Header from "./components/Header";
import DisciplenesSection from "./components/DisciplenesSection";
import UniversityLife from "./components/UniversityLife";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <DisciplenesSection />
        <UniversityLife />

        <h3>Contacts</h3>
      </main>
    </div>
  );
}

import Button from "./components/Button";
import DiscipleneDetails from "./components/DiscipleneDetails";
import Header from "./components/Header";
import { disciplenes } from "./data";

export default function App() {
  return (
    <div>
      <Header />

      <main>
        <section>
          <h2>Disciplenes:</h2>

          <ul>
            <DiscipleneDetails {...disciplenes[0]} />
            <DiscipleneDetails {...disciplenes[1]} />
            <DiscipleneDetails {...disciplenes[2]} />
          </ul>
        </section>
        <section>
           <h2>Countries for studies:</h2>

           <Button />
        </section>

        <h3>Contacts</h3>
      </main>
    </div>
  );
}

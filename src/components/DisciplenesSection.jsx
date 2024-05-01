import { disciplenes } from "../data";
import DiscipleneDetails from "./DiscipleneDetails";

export default function DisciplenesSection() {
  return (
    <section>
      <h2>Disciplenes</h2>

      <ul>
        {disciplenes.map((item) => (
          <DiscipleneDetails key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
}

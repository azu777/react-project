export default function DiscipleneDetails({ title, studies }) {
  return (
    <li>
      <p>
        <strong>{title} </strong>
        {studies}
      </p>
    </li>
  );
}

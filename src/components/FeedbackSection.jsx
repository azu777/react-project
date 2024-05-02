import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("support");

  return (
    <section>
      <h3>Feedback</h3>

      <form action="">
        <label htmlFor="name">Your name</label>
        <input type="text" className="control" value={name} />

        <label htmlFor="reason">Feadback reason</label>
        <select id="reason" className="control">
          <option value="support">Need support</option>
          <option value="suggestion">Suggestions</option>
          <option value="error">Errors</option>
        </select>

        <Button>Send</Button>
      </form>
    </section>
  );
}

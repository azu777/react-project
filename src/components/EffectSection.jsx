import { useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export default function EffectSection() {
  const [modal, setModal] = useState();

  function openModal() {
    setModal(true);
  }

  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={openModal}>Open info</Button>

      <Modal open={modal}>
        <h3>Hello from modal</h3>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
          ratione quidem. At, blanditiis eum? Eos sunt natus voluptatibus animi?
          Labore, fuga nulla? Voluptatem, error nihil. Aperiam possimus facilis
          sequi in!
        </p>
        <Button onClick={() =>  setModal(false)}>Close modal</Button>
      </Modal>
    </section>
  );
}

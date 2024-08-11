import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onCancelAddProject, onAdd }) {
  const title = useRef();
  const desc = useRef();
  const dueDate = useRef();
  const dialog = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDesc = desc.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      dialog.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDesc,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={dialog}>
        <h2 className="text-xl font-bold text-stone-700 mt-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Please enter title, description and due date for creating new project
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancelAddProject}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={desc} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}

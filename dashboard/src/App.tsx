import { useState } from "react";
import "./App.css";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Dashboard from "./components/Dashboard/Dashboard";
import { task } from "./assets/data";

function App() {
  const initialFormState = {
    title: "",
    description: "",
    assignee: "",
    state: "",
  };
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(true);
  const [tasks, setTasks] = useState(task);
  const [modal, setModal] = useState(false);
  const [taskForm, setTaskForm] = useState(initialFormState);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const setTaskFormData = (name: any, value: any) => {
    setTaskForm((prevState: any) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = () => {
    setTasks((prevState: any) => {
      return [taskForm, ...prevState];
    });
    setTaskForm(initialFormState);
    closeModal();
  };

  return (
    <>
      <NavbarContainer
        selectedLink={selectedLink}
        setSelectedLink={setSelectedLink}
        isHamburgerOpen={isHamburgerOpen}
        toggleHamburger={toggleHamburger}
      />
      <dialog open={modal}>
        <div className="flex flex-col justify-center ">
          <input
            type="text"
            placeholder="title"
            name="title"
            className="border-2 ml-2"
            onChange={(e) => setTaskFormData(e.target.name, e.target.value)}
            value={taskForm.title}
          />
          <input
            type="text"
            placeholder="state"
            name="state"
            className="border-2 ml-2"
            onChange={(e) => setTaskFormData(e.target.name, e.target.value)}
            value={taskForm.state}
          />
          <input
            type="text"
            placeholder="description"
            name="description"
            className="border-2 ml-2"
            onChange={(e) => setTaskFormData(e.target.name, e.target.value)}
            value={taskForm.description}
          />
          <input
            type="text"
            placeholder="assignee"
            name="assignee"
            className="border-2 ml-2"
            onChange={(e) => setTaskFormData(e.target.name, e.target.value)}
            value={taskForm.assignee}
          />
          <button
            onClick={closeModal}
            className="bg-gray-800 rounded text-white transition-opacity duration-300 hover:opacity-75 m-3"
          >
            Close
          </button>
          <button
            onClick={handleSubmit}
            className="bg-gray-800 rounded text-white transition-opacity duration-300 hover:opacity-75 m-3"
          >
            Submit
          </button>
        </div>
      </dialog>

      <Dashboard tasks={tasks} openModal={openModal} />
    </>
  );
}

export default App;

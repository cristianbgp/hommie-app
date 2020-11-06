import React, { useState } from "react";

const TasksContext = React.createContext();

const initialData = [
  { id: 1, title: "First Title", description: "First description" },
  { id: 2, title: "Another title", description: "Second description" },
  { id: 3, title: "Without description" },
  {
    id: 4,
    title: "Yet, another one",
    description:
      "Really long description with a lot of characters and more words than any other task",
  },
];

const TasksProvider = ({ children }) => {
  const [state, setState] = useState(initialData);
  const [showedTask, setShowedTask] = useState(null);

  const addTask = async (title, description) => {
    const id = Date.now();
    setState((oldState) => [
      ...oldState,
      {
        id,
        title,
        description,
        completed: false,
      },
    ]);
  };

  const editTask = (id, title, description) => {
    setState((oldState) => {
      const index = oldState.findIndex((element) => element.id === id);
      const newState = [...oldState];
      newState[index] = {
        ...newState[index],
        title,
        description,
      };
      return newState;
    });
  };

  const toggleCompleted = (id) => {
    setState((oldState) => {
      const index = oldState.findIndex((element) => element.id === id);
      const newState = [...oldState];
      newState[index] = {
        ...newState[index],
        completed: !newState[index].completed,
      };
      return newState;
    });
  };

  const removeTask = (id) => {
    setState((oldState) => {
      return oldState.filter((element) => element.id !== id);
    });
  };

  return (
    <TasksContext.Provider
      value={{
        tasks: state,
        addTask,
        editTask,
        toggleCompleted,
        removeTask,
        showedTask,
        setShowedTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksProvider };

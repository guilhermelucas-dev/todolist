import { PlusCircle } from "@phosphor-icons/react";
import { useState, ChangeEvent, FormEvent } from "react";
import { TaskType } from "./Task";

import styles from './Form.module.css';


interface FormProps {
  onAddTasks: (newTask: TaskType) => void;
}


export function Form({ onAddTasks }: FormProps) {
  
  const [taskDescription, setTask] = useState('');

  function handleNewTaskCahnge(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
   
  }

  function handleSubmitTask(event: FormEvent) {
    event.preventDefault();

    if (!taskDescription) return;

    const id = crypto.randomUUID();

    const newTask = {
      id: id,
      task: taskDescription,
      taskCompleted: false
    };

    onAddTasks(newTask);
    setTask('');
  }

  return (
    <form className={styles.addForm} onSubmit={handleSubmitTask}>
      <input
        type={"text"}
        name={"task"}  
        placeholder="Addicione uma nova tarefa"
        value={taskDescription} 
        onChange={handleNewTaskCahnge}
        required
      />
      <button type="submit">Criar <span className={styles.plusCircleIcon}><PlusCircle size={20} /></span></button>
    </form>
  );
}
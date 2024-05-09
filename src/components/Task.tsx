import { Trash } from '@phosphor-icons/react';

import styles from './Task.module.css';

export interface TaskType {
  id: string;
  task: string;
  taskCompleted: boolean;
}

interface TaskProps {
  task: TaskType;
  onDeleteTask: (task: TaskType) => void;
  onToggleTask: (id: string) => void;
}


export function Task({task, onDeleteTask, onToggleTask}: TaskProps) {

  function handleDeleteTask() {
    console.log(task);
    onDeleteTask(task);
  }

  return (
    <li className={styles.listItem}>
      <div className={styles.wrapperChecked}>
          {
            /*task.taskCompleted ? <span className={styles.statusIconCheck}></span> : <span className={styles.statusIcon}></span>*/
          }
        <input
          type="checkbox"
          id={task.id}
          onChange={() => onToggleTask(task.id)} 
          checked={task.taskCompleted ? true : false}
        />
        <label htmlFor={task.id}></label>
      </div>
      <p style={task.taskCompleted ? {textDecoration: 'line-through', color:'var(--gray-300)'} : {color:'var(--gray-100)'}}>{task.task}</p>
      <button onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </li>
  );
}
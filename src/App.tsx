import { useState } from 'react';

import { Header } from './components/Header';
import { Form } from './components/Form';
import { Task, TaskType } from './components/Task';

import Clipboard from './assets/clipboard.svg' ;

import styles from './App.module.css';
import './global.css';


const initialTasks: TaskType[] = [
  {
    id: '1',
    task: "Assistir as aulas de React da Rocketseat",
    taskCompleted: false
  },
  {
    id: '2',
    task: "Praticar React com o desafio proposto pela Rocketseat",
    taskCompleted: false
  },
  {
    id: '3',
    task: "Dar banho no cachorro",
    taskCompleted: true
  },
  {
    id:'4',
    task: "Comprar os ingredientes no mercado para o jantar",
    taskCompleted: true 
  }
]

export function App() {

  const [tasks, setTasks] = useState(initialTasks);
  const numTasks = tasks.length;
  const numTaskCompleted = tasks.filter(task => task.taskCompleted).length;
  

  function handleAddTask(task: TaskType) {

    setTasks([...tasks, task]);
  }

  function deleteTask(taskToDelete: object) {
    const taskWithOutDeleteOne = tasks.filter(task => {
      return task != taskToDelete
    });

    setTasks(taskWithOutDeleteOne);
  }

  function handleToggleTask(id: string) {
    setTasks(tasks => tasks.map(task => task.id === id ? {...task, taskCompleted: !task.taskCompleted} : task))
  }

  return (
    <>
      <Header />
      <main>
        <header>
        <Form onAddTasks={handleAddTask} />
          <div className={styles.wrapperInfoWork}>
            <p className={styles.infoCreate}>Tarefas criadas <span className={styles.infoResult}>{numTasks}</span></p>
            <p className={styles.infoConclui}>Cloncuídas <span className={styles.infoResult}>{numTaskCompleted }</span></p>
          </div>
        </header>

        {
          tasks.length > 0 ? 
          <div className={styles.todoList}>
            <ul>
              {
                tasks.map((task) => {
                  return <Task key={task.id} task={task} onDeleteTask={deleteTask} onToggleTask={handleToggleTask} />;
                })
              }
            </ul>
          </div> :
          <div className={styles.todoListEmpyt}>
            <img src={Clipboard} alt="Prancheta de anotações" />
            <div className={styles.wrapperEmpytList}>
              <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
              <p>Crie tarefas e organize seus intens a fazer</p>
            </div>
          </div>
        }
      </main>
    </>
  );
}

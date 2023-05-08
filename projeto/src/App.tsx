import React, { useState } from 'react';
import styles from './App.module.css'

import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';

import TaskList from './components/TaskList'

import { ITask } from "./interfaces/Taks";


function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (title: string): void => {
    setTaskList(
      taskList.filter((task) => {
        return task.title !== title;
      })
    );
  };


  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que voce vai fazer?</h2>
          <TaskForm 
          btnText='adicionar' 
          taskList={taskList} 
          setTaskList={setTaskList}/>
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList 
          taskList={taskList}
          handleDelete={deleteTask}
           />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

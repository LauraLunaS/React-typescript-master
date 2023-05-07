import React from 'react';
import styles from './App.module.css'

import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que voce vai fazer?</h2>
          <TaskForm btnText='adicionar'/>
        </div>
        <div>
          <h2>Suas tarefas:</h2>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import styles from "./App.module.css";

import Header from '../components/Header';
import Footer from '../components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <h1>Conteudo</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;

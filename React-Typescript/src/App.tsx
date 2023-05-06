import React, {createContext} from 'react';

import FirstComponnet  from './components/FirstComponnet';

import SecondComponent from './components/SecondComponent';

import Destructuring, {Category} from './components/Destructuring';

import State from './components/State';

import Context from './components/Context';


type textOrNull = string | null

interface IAppContext {
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)


type fixed = "Isso" | "Ou" | "Aquilo"


function App() {

  const name: string = "Laura";
  const age: number = 30;
  const isWorking: boolean = false;

  const userGreeting = (name: string): string => {
    return `Olá. ${name}`
  }

  const myText:textOrNull = "Tem algum texto aqui!"
  const mySecondText:textOrNull = null

  const opa:fixed = "Ou"

  const contextValue = {
    language: "JavaScript",
    framework: "Express",
    projects: 5
  }

  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>
        Open 
      </h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (
        <div>
          <p>Está trabalhando</p>
        </div>
      )}
      <h3>{userGreeting(name)}</h3>

      <FirstComponnet />
      <SecondComponent name="segundo"/>
      <Destructuring 
          title="Primeiro post" 
          content="Post muiiiito bom, sobre TS" 
          commentsQty={10} tags={["JavaScript", "TypeScript"]} 
          category={Category.TS} 
        />
        <State />
        {myText && 
          <p>Tem texto em myText</p>
        }
        {mySecondText &&
          <p>Tem texto em mySecondText</p>
        }
        {(!myText || !mySecondText) &&
          <p>Alguma das variáveis de texto está vazia!</p>
        }
    </div>
    <Context />
    </AppContext.Provider>
  );
 }

export default App;

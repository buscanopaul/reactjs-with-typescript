import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: 'Lebron',
      url: 'https://hoopshype.com/wp-content/uploads/sites/92/2021/10/i_0d_d7_16_lebron-james.png?w=1000&h=600&crop=1',
      age: 36,
      note: 'test'
    }
  ])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;

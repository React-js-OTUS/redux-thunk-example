import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'src/store';
import { TokenGenerator } from 'src/components/TokenGenerator';
import { TokenView } from 'src/components/TokenView';
import { TokenGeneratorWithSaving } from 'src/components/TokenGeneratorWithSaving';
import { TodosFetch } from 'src/components/TodosFetch';
import { TodosView } from 'src/components/TodosView';
import s from './App.sass';

function App() {
  return (
    <div className={s.root}>
      <h1>Пример redux приложения</h1>
      <Provider store={store}>
        <h3>token</h3>
        <TokenGenerator />
        <TokenGeneratorWithSaving />
        <TokenView />
        <h3>todos</h3>
        <TodosFetch />
        <TodosView />
      </Provider>
    </div>
  );
}

export default App;

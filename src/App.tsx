import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'src/store';
import { CountListenerUseSelector } from 'src/components/CountListenerUseSelector';
import { CountEditorUseDispatch } from 'src/components/CountEditorUseDispatch';
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
        <h3>items</h3>
        <h3>count</h3>
        <CountListenerUseSelector />
        <CountEditorUseDispatch />
        <TokenGenerator />
        <TokenGeneratorWithSaving />
        <TokenView />
        <TodosFetch />
        <TodosView />
      </Provider>
    </div>
  );
}

export default App;

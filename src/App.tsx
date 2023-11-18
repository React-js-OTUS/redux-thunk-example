import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'src/store';
import { ItemsView as ItemsViewRtk } from 'src/components/ItemsView';
import { CountListenerUseSelector } from 'src/components/CountListenerUseSelector';
import { CountListenerConnect } from 'src/components/CountListenerConnect';
import { CountEditorConnect } from 'src/components/CountEditorConnect';
import { CountEditorUseDispatch } from 'src/components/CountEditorUseDispatch';
import { TokenGenerator } from 'src/components/TokenGenerator';
import { TokenView } from 'src/components/TokenView';
import {
  CombineViewConnectVariant1,
  CombineViewConnectVariant2,
} from 'src/components/CombineViewConnect/CombineViewConnect';
import {
  CombineViewUseSelector1,
  CombineViewUseSelector2,
  CombineViewUseSelector3,
} from 'src/components/CombineViewUseSelector';
import s from './App.sass';

function App() {
  return (
    <div className={s.root}>
      <h1>Пример redux приложения</h1>
      <Provider store={store}>
        <h3>items</h3>
        {/* <ItemsViewRtk /> */}
        <h3>count</h3>
        <CountListenerUseSelector />
        {/* <CountListenerConnect /> */}
        {/* <CountEditorConnect /> */}
        <CountEditorUseDispatch />
        {/* <h3>token</h3> */}
        <TokenGenerator />
        <TokenView />
        {/* <h3>combine</h3> */}
        {/* <h4>compose</h4> */}
        {/* <CombineViewConnectVariant1 /> */}
        {/* <CombineViewConnectVariant2 /> */}
        {/* <h4>use selector</h4> */}
        {/* <CombineViewUseSelector1 /> */}
        {/* <CombineViewUseSelector2 /> */}
        {/* <CombineViewUseSelector3 /> */}
      </Provider>
    </div>
  );
}

export default App;

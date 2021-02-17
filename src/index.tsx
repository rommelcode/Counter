import * as React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import MainContextProvider from './AppDataProvider';

import './styles.css';

function App(): JSX.Element {
  return (
    <MainContextProvider className="App">
      <Counter />
    </MainContextProvider>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);

import * as React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';

import './styles.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);

import * as React from 'react';
import { render } from 'react-dom';
import Person from './Person';

import './styles.css';

function App(): JSX.Element {
  return <div className="App">hello</div>;
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
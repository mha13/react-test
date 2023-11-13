import { createElement } from 'react';
import logo from './logo.svg';
import './App.css';


function Heading(props) {
  // return (
  //   <h1>{props.title}</h1>
  // );
  // return React.createElement(
  //   "h1",
  //   { className: 'greeting',name: 'Taylor' },
  //   props.title,
  //   createElement('i', null, props.title2),
  //   '. Welcome!'
  // );

  var owner = props.owner+' ';
  var title= props.title+' ';
  return createElement(
    'h1',
    { className: 'hello', id: 'hello' },
    title,
    createElement('i', null, owner),
    '!'
  );
}


function Greeting({ name }) {
  // return (
  //   <h1 className="greeting">
  //     <i>{name}</i>. Welcome!
  //   </h1>
  // );
  return createElement(
    'h1',
    {className:'test'},
    'welcome ' ,createElement('i',null,name), ' man'
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading title='Hello' owner='Hossein'  />
        <Greeting name="Hossein" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Fuck <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



export default App;

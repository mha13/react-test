import { createElement } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Promo from './components/Promo';


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

  var owner = props.owner + ' ';
  var title = props.title + ' ';
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
    { className: 'test' },
    'welcome ', createElement('i', null, name), ' man'
  )
}

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <Heading title='Hello' owner='Hossein' />
        <Greeting name="Hossein" />
        <Intro1>
          <Intro2 number='5' fruit='apple' />
          <Intro2 number='2' fruit='peer' />
        </Intro1>

        <Intro1 children={<Intro2 number='0' fruit='benana' />}>
        </Intro1>
        <Intro3 children='ssss' />
        <Intro3>TEST</Intro3>
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

      <Promo heading="Heading of component" promoSubHeading="Sub heading locate here and style is mentioned in the component as the oblect which assign for the h1"/>
    </div>
  );
}



export default App;

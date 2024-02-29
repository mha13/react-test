// import { createElement } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Promo from './components/Promo';
import Example from './components/Example';
import Hook1 from './components/Hook';
import Hook2 from './components/Hook2';
import Hook3 from './components/Hook3';
import Propdrilling from './components/Propdirlling';
import MealsProvider from './providers/MealsProvider';
import MealsList from './components/MealsList';
import MealsCount from './components/MealsCount';

import TaskProvider from './providers/TaskProvider';
import TasksCount from './components/TasksCount'
import TasksList from './components/TasksList'

import Reducer from './components/Reducer';

import FilterableProductTable from './components/TableProduct'
import FilterableTodo from './components/FilterableTodo'


const Heading = props => {
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
  // return createElement(
  //   'h1',
  //   { className: 'hello', id: 'hello' },
  //   title,
  //   createElement('i', null, owner),
  //   '!'
  // );

  return (<h1 className='hello' id='hello'>{title} <i>{owner}</i> ?</h1>);
}


const Greeting = ({ name }) => {
  // return (
  //   <h1 className="greeting">
  //     <i>{name}</i>. Welcome!
  //   </h1>
  // );
  // return createElement(
  //   'h1',
  //   { className: 'test' },
  //   'welcome ', createElement('i', null, name), ' man'
  // )
  // var elements;
  // ['Reza', 'JJ', 'Ali'].forEach(item => {
  //   elements=<h1 className='greeting'>{item}</h1>+ elements;
  // });

  var elements = ['Reza', 'JJ', 'Ali'].map((item, index) => (
    <h1 key={index} className='greeting'> WELCOME {item + ' from ' + name} !</h1>
  ));


  return <div>{elements}</div>;
}


const boolType = false;
const str1 = "just";


const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

const TODO = [
  {completed: true, name: "Wake up"},
  {completed: true, name: "Take Breakfast"},
  {completed: false, name: "Exercise"},
  {completed: true, name: "Study"},
  {completed: false, name: "Visiting doctor"},
  {completed: true, name: "Cook dinner"}
];

const App = () => {
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

        <Intro1 children={<Intro2 number='2' fruit='benana' />}>
        </Intro1>


        <Intro1>
          <Intro2 number='3' fruit='benana' />
          <Intro2 number='2' fruit='orange' />
          <Intro2 number='2' fruit='orange' />
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

      <Promo heading="Heading of component" promoSubHeading="Sub heading locate here and style is mentioned in the component as the oblect which assign for the h1" />

      <Example toggleBoolean={!boolType} math={2 * (10 + 2)} str={str1 + ' Enghlish'} />


      <Hook1 title='start' />
      <Hook2 />
      <Hook3 />

      <Propdrilling />


      <MealsProvider >
        <MealsList />
        <MealsCount />
      </MealsProvider>

      <TaskProvider>
        <TasksCount />
        <TasksList />
      </TaskProvider>


      <h1>Reducer practice</h1>
      <Reducer value='500'/>

      <FilterableProductTable products={PRODUCTS} />

      <FilterableTodo todos={TODO}/>
    </div>
  );
}



export default App;

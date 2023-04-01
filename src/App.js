import React from 'react';
import { TodoCouter } from './modules/TodoCounter.js';
import { TodoSearch } from './modules/TodoSearch.js';
import { TodoList } from './modules/TodoList.js';
import { TodoItem } from './modules/TodoItem.js';
import { CreateTodoButton } from './modules/CreateTodoButton.js';

const todos = [
  {text: 'Jugar', completed: false},
  {text: 'Comer', completed: false},
  {text: 'Dormir', completed: false},
]

function App() {
  return (
    //Siempre necesita estar envuelta de un
    //div o etiqueta
    // React Fragment oculta el div principal
    <React.Fragment>
      <TodoCouter />

      <TodoSearch />

      <TodoList>
        {todos.map(todo =>(
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

// class App extends Component {
//   render() {
//     return (
//       //Siempre necesita estar envuelta de un
//       //div o etiqueta
//       // React Fragment oculta el div principal
//       <React.Fragment>
//         <TodoCouter />

//         <TodoSearch />

//         <TodoList>
//           {todos.map(todo =>(
//             <TodoItem key={todo.text} text={todo.text}/>
//           ))}
//         </TodoList>

//         <CreateTodoButton />
//       </React.Fragment>
//     );
//   }
// }

export default App;

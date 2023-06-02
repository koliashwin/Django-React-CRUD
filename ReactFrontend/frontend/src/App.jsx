import React, { Component } from 'react';
import Todo from './components/Todo';
import Products from './components/Products';
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// const todoItems = [
//   {
//     id: 1,
//     title: "setup backend ",
//     description: "backend",
//     completed: true
//   },
//   {
//     id: 2,
//     title: "setup API ",
//     description: "api",
//     completed: true
//   },
//   {
//     id: 3,
//     title: "setup frontend",
//     description: "react",
//     completed: false
//   },
// ];

class App extends Component{
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     viewCompleted: false,
  //     todoList: todoItems,
  //   };
  // }

  // displayCompleted = (status) => {
  //   if(status){
  //     return this.setState({viewCompleted: true});
  //   }
  //   return this.setState({viewCompleted: false});
  // };

  // renderTabList = () => {
  //   return(
  //     <div className='nav nav-tabs'>
  //       <span
  //         className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
  //         onClick={() => this.displayCompleted(true)}
  //       >
  //         Complete
  //       </span>
  //       <span
  //         className={this.state.viewCompleted ? "nav-link" : "nav-link active"}
  //         onClick={() => this.displayCompleted(false)}
  //       >
  //         Incomplete
  //       </span>
  //     </div>
  //   );
  // };

  // renderItems = () => {
  //   const { viewCompleted } = this.state;
  //   const newItems = this.state.todoList.filter(
  //     (item) => item.completed == viewCompleted
  //   );

  //   return newItems.map((item) => (
  //     <li
  //       key={item.id}
  //       className='list-group-item d-flex justify-content-between align-items-center'
  //     >
  //       <span
  //         className={`todo-title m-2 ${
  //           this.state.viewCompleted ? "completed-todo" : ""
  //         }`}
  //         title={item.description}
  //       >
  //         {item.title}
  //       </span>
  //       <span>
  //         <button
  //           className='btn btn-secondary m-3'
  //         >
  //           Edit
  //         </button>
  //         <button
  //           className='btn btn-danger'
  //         >
  //           Delete
  //         </button>
  //       </span>
  //     </li>
  //   ));
  // };

  // render(){
  //   return(
  //     <main className='container'>
  //       <h1 className='text-white text-uppercase text-center my-4'>Todo app</h1>
  //       <div className='row'>
  //         <div className='col-md-6 col-sm-10 mx-auto p-0'>
  //           <div className='card p-3'>
  //             <div className='mb-4'>
  //               <button
  //                 className='btn btn-primary'
  //               >
  //                 Add task
  //               </button>
  //             </div>
  //             {this.renderTabList()}
  //             <ul className='list-group list-group-flush border-top-0'>
  //               {this.renderItems()}
  //             </ul>
  //           </div>
  //         </div>
  //       </div>
  //     </main>
  //   );
  // };
  render(){
    return(
      <>
        {/* <Todo /> */}
        <Products />
      </>
    )
  }
};

export default App;
// <<<<<<< HEAD
// import React, { Component } from "react";
// // import quiz from "./data/data.json";
// export default class Form extends Component {
//   state = {
//     answers: []
//   };
//   onClick = event => {
//     // console.log(this.staanswers);

//     if (event.target.classList.contains("btn-outline-info")) {
//       event.target.classList.remove("btn-outline-info");
//       event.target.classList.add("btn-info");
//     } else {
//       event.target.classList.add("btn-outline-info");
//       event.target.classList.remove("btn-info");
//     }
//     this.state.answers.push(event.target.value);
//     console.log(this.state);
//   };
//   onSubmit = event => {
//     event.preventDefault();
//   };
//   render() {
//     return (
//       <div className='container mt-5'>
//         <form onSubmit={this.onSubmit}>
//           <div class='form-group'>
//             <label className='ques'>Question 1 out of 20</label>
//             <h5 class='label' for='exampleInputEmail1'>
//               Why is React library used for?
//             </h5>
//             <div className='options'>
//               <button
//                 onClick={this.onClick}
//                 className='a'
//                 value='For UI designing'
//                 class='btn btn-outline-info'
//                 style={{ cursor: "pointer" }}>
//                 For UI designing
//               </button>
//               <button
//                 onClick={this.onClick}
//                 className='b'
//                 value='For backend connection'
//                 class='btn btn-outline-info'
//                 style={{ cursor: "pointer" }}>
//                 For backend connection
//               </button>
//               <button
//                 onClick={this.onClick}
//                 className='c'
//                 value='For cleaning toilet'
//                 class='btn btn-outline-info'
//                 style={{ cursor: "pointer" }}>
//                 For cleaning toilet
//               </button>
//               <button
//                 onClick={this.onClick}
//                 className='d'
//                 value='For nothing'
//                 class='btn btn-outline-info'
//                 style={{ cursor: "pointer" }}>
//                 For nothing
//               </button>
//             </div>
//           </div>

//           <div class='form-group'>
//             <label className='ques'>Question 1 out of 20</label>
//             <h5 class='label' for='exampleInputEmail1'>
//               Why is React library used for?
//             </h5>
//             <div className='options'>
//               <input
//                 onClick={this.onClick}
//                 className='a'
//                 value='For UI designing'
//                 class='btn btn-outline-info'
//                 style={{ cursor: "pointer" }}
//               />
//               <input
//                 onClick={this.onClick}
//                 className='b'
//                 value='For backend connection'
//                 class='btn btn-outline-info'
//                 style={{ cursor: "pointer" }}
//               />
//               <input
//                 onClick={this.onClick}
//                 className='c'
//                 value='For cleaning toilet'
//                 class='btn btn-outline-info'
//                 style={{ cursor: "pointer" }}
//               />
//               <input
//                 onClick={this.onClick}
//                 className='d'
//                 value='For nothing'
//                 class='btn btn-outline-info'
//                 style={{ cursor: "pointer" }}
//               />
//             </div>
//           </div>

//           <div class='form-group'>
//             <label className='ques'>Question 1 out of 20</label>
//             <h5 class='label' for='exampleInputEmail1'>
//               Why is React library used for?
//             </h5>
//             <div className='options'>
//               <input
//                 onClick={this.onClick}
//                 className='a'
//                 value='For UI designing'
//                 class='btn btn-outline-info'
//                 style={{ cursor: "pointer" }}
//               />
//               <input
//                 onClick={this.onClick}
//                 className='b'
//                 value='For backend connection'
//                 class='btn btn-outline-info'
//                 style={{ cursor: "pointer" }}
//               />
//               <input
//                 onClick={this.onClick}
//                 className='c'
//                 value='For cleaning toilet'
//                 class='btn btn-outline-info'
//                 style={{ cursor: "pointer" }}
//               />
//               <input
//                 onClick={this.onClick}
//                 className='d'
//                 value='For nothing'
//                 class='btn btn-outline-info'
//                 style={{ cursor: "pointer" }}
//               />
//             </div>
//           </div>
//         </form>
//       </div>
//     );
// =======
// import React, { Component } from 'react'
// import quiz from '../data/data.json'
// export default class Form extends Component {
//     state ={
//         // quiz:quiz,
//         answers:[]
//     }
//     onClick = (event) =>{
//         console.log(this.state.quiz)

//         if(event.target.classList.contains('btn-outline-info')){
//             event.target.classList.remove('btn-outline-info');
//             event.target.classList.add('btn-info');
//         }else{
//             event.target.classList.add('btn-outline-info');
//             event.target.classList.remove('btn-info');
//         }
//     //    this.state.answers.push(event.target.value)
//     const answer={
//         q:this.props.quiz.I,
//         a: event.target.value

//     }
//     this.setState(prevState=>({
//         answers:[...prevState.answers,answer]
//     }))

//     }

//     onSubmit= (event)=>{
//         event.preventDefault();
//         console.log(this.state)


//     }
//   render() {
//     console.log(this.props)
//     return (
//       <div className="container mt-5">
//           <form onSubmit={this.onSubmit}>
//           <div class="form-group">
//             <label className="ques">Question 1 out of 20</label>
//             <h5  class="label" for="exampleInputEmail1">{this.props.quiz.Q}</h5>
//         <div className="options">
//         <button onClick ={this.onClick} className="a" value="For UI designing" class="btn btn-outline-info" style={{cursor:'pointer'}}>For UI designing</button>
//         <button onClick ={this.onClick} className="b"  value="For backend connection" class="btn btn-outline-info" style={{cursor:'pointer'}}>For backend connection</button>
//         <button onClick ={this.onClick} className="c" value="For cleaning toilet" class="btn btn-outline-info" style={{cursor:'pointer'}}>For cleaning toilet</button>
//         <button onClick ={this.onClick} className="d"  value="For nothing" class="btn btn-outline-info" style={{cursor:'pointer'}}>For nothing</button>

//         </div>
//         <input type="submit" ></input>
//         </div>
//           </form>
//       </div>
//     )
// >>>>>>> ba0e302bdf4e0ebfbab4f1c8148ab4203f8454a9
//   }
// }

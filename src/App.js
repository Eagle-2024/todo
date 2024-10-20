

// import React, {
//   useState,
//   useRef,
//   useEffect,
//   createContext,
//   useReducer,
//   useTransition,
// } from "react";
// import axios from "axios";
// import logo from "./logo.svg";
// import "./App.css";
// import { a } from "./test";
// import Comp from "./component/test-comp";
// import Card from "./component/card";
// import { person } from "./test";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
//  import React from "react";
// import React, { useState } from "react";
// import { useState } from "react";



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to refresh.
//         </p>
//         <Jaja />
//         <Card />
//         <Random />
//         <Welcome />
//         {
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         }
//         <Footer />
//       </header>
//     </div>
//   );
// }
// export default App;

 
// // The below component u can add it above inside function also u can make seperate file for component but u have to import it

// const Jaja = () => {
//   return (
//     <div>
//       <p>Insides Component </p>
//       <h2>inside h2 </h2>
//       <button>click me </button>
//     </div>
//   );
// };

// function Card() {
//   return (
//     <div className="content">
//       <img className="img" src="photo.jpg" alt="" />
//       <p className="name">film name</p>
//     </div>
//   );
// }

// function Footer() {
//   // here u can add variable and use it below and add to it javascrip code to ppercase . create vaiable called dynamic component

//   const right = "All Right Reserved";
//   return (
//     <footer>
//       <p>
//         &copy; {new Date().getFullYear()} {right.toLocaleUpperCase()} your
//         website name{" "}
//       </p>
//     </footer>
//   );
// }


// function Random() {
//   const number = Math.random() * 10;
//   return (
//     <div>
//       <h2>
//         Random number is : {number};
//         <br />
//         {/* u can add js to number and make it round.  */}
//         Random number is : {Math.round(number)};
//       </h2>
//       <div>
//         {/* below we add bootstrap style  */}
//         <button type="button" class="btn btn-primary">
//           Primary
//         </button>
//         <button type="button" class="btn btn-secondary">
//           Secondary
//         </button>
//       </div>
//     </div>
//   );
// }

// // we can use function component which is above and class component which is below but most of them use function component . component name is Welcome u have to add (extends React.Component) and render() then return .

// class Welcome extends React.Component {
//   render() {
//     return <h2>This is a Class Component ok </h2>;
//   }
// }
// // -------------------------------------------------------------
// // lesson 3
// // JSX Style
// // https://www.youtube.com/watch?v=Mk_9Kwpko5M&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=12
// // if u want to write below function in above component App in Button use onClick={sayHello} without two paranthesis in camel case

// function sayHello() {
//   alert("Hello");
// }

// // // if u want to put style css in JSX first create object in object write color u want then copy object name and put in curly bracet ... u can add many style but in camel size .. u can copy this style to any place just make copy of object name

// const style = {
//   backgroundColor: "red",
//   fontSize: "30px",
// };

// // how to add classes
// // https://www.youtube.com/watch?v=O6wQgtk4VEk&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=13

// const student = {
//   name: "Ahmad",
//   age: 19,
// };

// function App() {
//   return (
//     <div className="App">
//       <h1 style={Style}>Helloo World </h1>
 
//       {/* below u can add class one name or two. then u have to make css file and there u can use class name and add style in this case will go to App.css and use this clasee there   */}
//       <h3 className={"active red "}>This is React </h3>
//       {/* if u want to add above class below in P u dont need to write curly bacracket for second time just add double quotion and it will affect same style on P  */}
//       <p className="active">This is Paragraph</p>

//       {/* now we want to add condtion in classname below in P if student name math condition active style will affect if not greenbg affect ( but u have to add greenbg class in css and give it class ) you can add component in condition in place ative or greeting but u have to make component and import here then use component name */}

//       <p className={student.name == "ali" ? "active" : "greenbg"}>
//         This is Condition Example
//       </p>
//     </div>
//   );
// }
// export default App;

 // const Style = {
//   backgroundColor: "red",
//   Color: "black",
//   fontSize: "30px",
// };


// // Component project
// // https://www.youtube.com/watch?v=xiku8FD-z_E&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=15
// // first create component in different file of here. if different file u have to export it there and here import it .

// function Header() {
//   return (
//     <div>
//       {/* below add style in double curly bracket  */}
//       <h1
//         style={{
//           width: "100%",
//           backgroundColor: "teal",
//           height: "200px",
//           color: "white",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           font: "30px",
//           boxShadow: "0px 5px 13px black",
//           marginTop: "0px",
//         }}
//       >
//         Tarmeez Academy
//       </h1>
//     </div>
//   );
// }

// // here we create new componend for creating post and then we will copy it multiple time

// function Post() {
//   return (
//     <div style={{ padding: "10px", border: "solid teal 6px", margin: "25px" }}>
//       {/* u can add width below in App Component put (Post componend between div and put style width for it there its better  ) */}
//       <h1>This is Post Title</h1>
//       <hr />
//       <p>This is the post body</p>
//     </div>
//   );
// }

// function Sidemenu() {
//   return (
//     <div style={{ margin: "25px", border: "solid teal 5px" }}>
//       {/* u make style for button especially hover on button go to css file do it there but put id or class name here  */}
//       <button className="btn">click me</button>;
//       <button className="btn">click me</button>;
//       <button className="btn">click me</button>;
 
// {/* u can make copy here as much u can but in App componend if u make copy there will changed style  */}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       {/* if u want sidemenu to be besite post use display flex in main div  */}
//       {/* Post and Side Menu Containers  */}
//       <div style={{ display: "flex" }}>
//         {/* Post Container  */}
//         <div style={{ width: "50%" }}>
//           <Post />
//           <Post />
//           <Post />
//         </div>
//         {/* Post Container  */}
//         {/* Side Menu  */}
//         <div style={{ width: "40%" }}>
//           <Sidemenu />

//         </div>
//         {/* Side Menu  */}
//       </div>
//       {/* Post and Side Menu Containers  */}
//     </div>
//   );
// }
// export default App;
// // // ----------------------------------------------------------

// // Lesson 4
// // add Style from Bro Code Min 0:38... There are three common ways: Inline styling. CSS stylesheets. CSS Modules.
// // https://www.youtube.com/watch?v=CgkZ7MvWUAA
// // Also detail here : https://www.w3schools.com/react/react_css_styling.asp
// // CSS Stylesheet
// // You can write your CSS styling in a separate file, just save the file with the .css file extension, and import it in your application.
// // Inline Styling
// // To style an element with the inline style attribute, the value must be a JavaScript object:
// // Since the inline CSS is written in a JavaScript object, properties with hyphen separators, like background-color, must be written with camel case syntax:

// const Header = () => {
//   return (
//     <>
//       <h1 style={{ color: "red", backgroundColor:"yellow" }}>Hello Style!</h1>
//       <p>Add a little style!</p>
//     </>
//   );
// };

// // You can also create an object with styling information, and refer to it in the style attribute:

// const Cooler = () => {
//   const myStyle = {
//     color: "white",
//     backgroundColor: "DodgerBlue",
//     padding: "10px",
//     fontFamily: "Sans-Serif",
//   };
//   return (
//     <>
//       <h1 style={myStyle}>Hello Style!</h1>
//       <p>Add a little style!</p>
//     </>
//   );
// };

// // ------------------
// // // CSS Modules
// // // Another way of adding styles to your application is to use CSS Modules.
// // // CSS Modules are convenient for components that are placed in separate files.
// // // Create the CSS module with the .module.css extension, example: my-style.module.css. for example u have component there when u write Style.(add name of class which is located in css): below is example u create component and has h1 then add style to it the bigBlue is class name in css u did style there and bring it here it like varaiable.

// const Car = () => {
//   return <h1 className={styles.bigblue}>Hello Car!</h1>;
// }


// function App() {
//   return (
//     <>
//       <Header />
//       <Cooler />
//     </>
//   );
// }
// export default App;
// // //-------------------------------------------------------------------------\
// // // Props - short lessons

// // // anything u add in app will show in Card. but u have to add props in card and below in curly bracket add {props.title}. it shows same pic but name different
// function App() {
//   return (
//     <div className="App">
//       <Card title="Ahmad"  test="for test" />
//       <Card title="Ali" test="for test" />
//       <Card title="hamoud" test="for test" />
//     </div>
//   );
// }
// export default App;

// const Card = (props) => {
//   return (
//     <div>
//       <img src="photo.jpg" alt="" />
//       <p>{props.title} </p>
//    </div>
//   );
// };
// // ------------------------------------------------------
// function Article(props) {
//     return (
//       // below u can add style to div
//       <>
//         <div>
//           <h1>{props.name}</h1>
//           <h2>{props.email}</h2>
//           <h3>{props.age}</h3>
//         </div>
//       </>
//     );
//   }

//   function App() {
//     return (
//       <div className="App">
//         <Article name="Ahmad" email="ahmad@gmail.com" age="33"/>
 
//       </div>
//     );
//   }
//   export default App;
// // -------------------------------------------------------------------
// // Children
// // // how to send JSX as Props to component by using children
// // // first go to father componend App and make Article open and close tag not self close like above then add any JSx tag then go to children comp (Article and add consile.log(props) and creat const children=props.children also go down add between div {children}). or add children between p
// // // now h2 in App is children .. its inside component User
// // first Example
// function User(props) {
//   const children = props.children;
//   return;
//   <p>{children}</p>;
// }

// function App() {
//   return (
//     <div className="App">
//       <User />
//       <h2>Hello this is children </h2>
//       <User />
//     </div>
//   );
// }
// export default App;
 

// // Second Example

// function Article(props) {
//   console.log(props);
//   const children = props.children;
//   return (
//       <div >
//         {children}
//       </div>
//   );
// }
 

// function App() {
//   return (
//     <div className="App">
//       <Article />
//       <h2> Hello Word Children </h2>
//       <Article />
//     </div>
//   );
// }
// export default App;
 

// // now we will create above JSX as children again but in different way we add it to Article with other attributes

// function Article({
//   name,
//   email,
//   age = "none",
//   content = "Not Found",
//   children,
// }) {

// // u have to use children name but other attribute its up to u
//   return (
//       <div >
//         <h1>{name}</h1>
//         <h2>{email}</h2>
//         <h3>{age}</h3>
//         <p>{content}</p>
//         <p> {children}</p>
//       </div>
//   );
// }

// // u will write one variabe and add it to above child componend and to below father component

// function App() {
//   return (
//       <div >
//         {/* if u didnt write age it shows none  */}
//         <Article name="Ahmad" email="ahmad@gmail.com" age="44" />
// // {/* above /> next to 44 should not close vuz below we have <Article/> close but it shows error if u delete / from />  */}
//         <h2> Hello Word Children </h2>
//         <Article />
//       </div>
//   );
// }
// export default App;


// // // --------------------------------------------------
// // PropTypes and default propTypes
// // props from bro code min 0:40
// // https://www.youtube.com/watch?v=CgkZ7MvWUAA
// // in App when u add name but the quotes if its string like in name and put curly if its number or boolean but if its boolean go to child and add tenary operator to display true of false.
// // you add class to div in Student and give some style of css .
// // in App u can add more student we will add one more
// // Now we will add propTypes. it means the method you can use to ensure the correct datatype is passed for each prop. u can add it after Student function if u have student in another file u can add propsType before export line in the bottom. and dont foget to import propsType from react at the top (import  PropTypes  from "prop-types";).
// // propTypes when u go to console it shows u error if in place of string in name u put number in curly it shows erro cux it string should be same in number if u add string it shows in console error but it run the info u put in page . This is good for debuging ..


 

// function Student(props) {
//   return (
//     <div className="stu">
//       <p> Name is:{props.name} </p>
//       <p> Age is {props.age}</p>
//       <p>is he Student? {props.isStudent ? "Yes" : "No"}</p>
//     </div>
//   );
// }

// Student.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
//   isStudent: PropTypes.bool,
// };

// ----------------

// function App() {
//   return (
//     <div className="App">
//       <Student name="Ahmad" age={44} isStudent={false} />
//       <Student name="Khalid" age={14} isStudent={true} />
//     </div>
//   );
// }
// export default App;


// -----------------

// // Also below link is for propTypes
// // https://www.youtube.com/watch?v=jhseQKJjhvI&list=PL-h5aNeRKouETL-CIVsuCz59e5_vZhHk1&index=34

// //  ------------------------------
// // default props like in above video is like if u dont pass props there is default props . so go below and add Component Student default props . then add new Student in App and dont pass any info

// function App() {
//   return (
//     <div className="App">
//       <Student name="Ahmad" age={44} isStudent={false} />
//       <Student name="Khalid" age={14} isStudent={true} />
//       <Student name="Lali" />
//       {/* above it shows name but age and boolean as default */}
//       <Student />
//       {/* above it will put all default value  */}
//     </div>
//   );
// }
// export default App;


// function Student(props) {
//   return (
//     <div className="stu">
//       <p> Name is:{props.name} </p>
//       <p> Age is {props.age}</p>
//       <p>is he Student? {props.isStudent ? "Yes" : "No"}</p>
//     </div>
//   );
// }

// Student.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
//   isStudent: PropTypes.bool,
// };

// Student.defaultProps = {
//   name: "Guest",
//   age: 0,
//   isStudent: false,
// };

// // --------------------------------------------------
// // now we will add in place of props we will add name and email and age
// // also we can not write snake case but can write camel case
// // https://www.youtube.com/watch?v=CyhC7NkTNRk&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=17
 
// function Article({name,email,age="none",content}) {
//   return (
//      <>
//       <div>
//         h1>{name}</h1>
//         <h2>{email}</h2>
//         <h3>{age}</h3>
//         <p>{content}</p>
//       </div>
//     </>
//   );
// }

//  // u will write on variabe and add it to above child componend and to below father component

// const firstArticle = " This is Article";
// function App() {
//       return (
//         <div className="App">
//            {/* if u didnt write age it shows none  */}
//           <Article name="Ahmad" email="ahmad@gmail.com" age="44" content={firstArticle}/>
//         </div>
//       );
//     }
//     export default App;

// //   -------------------------------------------------------


// // if u dont like above its manual but there is another way how to change name of each photo and detail by using Array in App and use map. add curly braket then add map . u can put any name but i put title and add this title to props in Card component .

// function App() {
//   const arrList = ["Ahmad", "Noor", "Ali"];
//   return (
//     <div>
//       {arrList.map((e) => {
//         return (
//           <>
//             <Card title={e} />;
//           </>
//         );
//       })}
//     </div>
//   );
// }
// export default App;

 

// const Card = (props) => {
//   return (
//     <div>
//       <img src="photo.jpg" alt="" />
//       <p>{props.title} </p>
//     </div>
//   );
// };
 

// // Above Map will shows error in console log because it need unique id for each name if variable was array like above or variable was object like below better add keu.so better we add object in map and add id to it. why we give in key {e.title} because title should be unique and e.title means name in arr os its different. but later we learn how id should change when we add number

// function App() {

//   const arr =[{title:"Mohammad"},{title:"Ahmad"},{title:"Ali"}]
//   return (
//     <div className="App">
//       {
//         arr.map((e) => {
//           return(
//             <Card key={e.title} title ={e.title}/>
//           )
//         })
//       }
//     </div>
//   );
// }
// export default App;

// const Card = (props) => {
//   return (
//     <div>
//       <img src="photo.jpg" alt="" />
//       <p>{props.title} </p>
//       {/* u can add props in p like above   */}
//     </div>
//   );
// };

// // // ------------------------------------------------------------------



// // Conditional rendering from bro code min 0:51
// // https://www.youtube.com/watch?v=CgkZ7MvWUAA
// // below in User Component u add conditional if LogIn true will show welcome Ahmad if false will not will show msg and u can add any msg for false result

// function App() {
//   return (
//     <div>
//       <User name="Ahmad" isLogIn={false} />
//     </div>
//   );
// }
// export default App;

 
// function User(props) {
//   if (props.isLogIn) {
//     return <h2>Welcome {props.name}</h2>;
//   } else {
//     return <h2>Please Log in </h2>;
//   }
// }
 

// // shortcut way to write condition is ternary operator first comment above component
// // (props.isLogIn ? ( <h2> Welcome {props.name}</h2> )  : (<h2>Please Log in </h2>);

 // function User(props) {
//   return props.isLogIn ? (
//     <h2> Welcome {props.name}</h2>
//   ) : (
//     <h2>Please Log in </h2>
//   );
// }


// // ----------------------------

// function App() {
//   return (
//     <header>
//       <div className="App">
//         <User name="Ahmad" isLogIn={true} />
//         <Member userName="Ali" isAvailable={false} />
//         <Worker firstName="Adam" isSignIn={true} />
//       </div>
//     </header>
//   );
// }
// export default App;

 
// function User(props) {
//   if (props.isLogIn) {
//     return <h2>Welcome {props.name}</h2>;
//   } else {
//     return <h2>Please Log in </h2>;
//   }
// }

 
// // u can add tenary operator instead of above if condition. it will shows please log in cux in App Component we add false... u can add className to h2 below and give css style external or inline here


// function Member(props) {
//   return props.isAvailable ? (
//     <h2>welcome {props.userName}</h2>
//   ) : (
//     <h2>You Have to be Available </h2>
//   );
// }
 

// // u can add variable and add ternary operator to it . it shows welcome Adam as in app we add true and u can add style to it . also u can add propTypes to it in the below and default props if there is no name it shows Welcome Guest

 

// function Worker(props) {
//   const welcomeMsg = <h2>welcome {props.firstName}</h2>;
//   const logMsg = <h2>Please Sign in</h2>;
//   return props.isSignIn ? welcomeMsg : logMsg;
// }

 

// Worker.propTypes = {
//   firstName: PropTypes.string,
//   isSignIn: PropTypes.bool,
// };

// Worker.defaultProps = {
//   firstName: "Guest",
//   isSignIn: false,
// };


 
// // ---------------------------------------------


// // Lesson  Conditional Rendering Tarmeez u can ignore or take a look
// // https://www.youtube.com/watch?v=Z1L3QonlPNk&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=20
 

// // Below create variable of showCatogaries and value is true then create componend of AppSideMenu and return  <Sidemenu /> and remove it from App Componend and replace it with AppSideMenu. so u add <Sidemenu /> in AppSideMenu componend and then this coponent u add it in place of <Sidemenu /> in App component.
// // the reason we make it so its easy to write condtion in AppSideMenu because is Javascript but can not write condition after return becuase its JSX

 

// function Header() {
//   return (
//     <div>
//       <h1>
//         Tarmeez Academy
//       </h1>
//     </div>
//   );
// }

 

// function Post() {
//   return (
//     <div style={{ padding: "10px", border: "solid teal 6px", margin: "25px" }}>
//       {/* u can add width below in App Component put (Post componend between div and put style width for it there its better  ) */}
//       <h1>This is Post Title</h1>
//       <hr />
//       <p>This is the post body</p>
//     </div>
//   );
// }
 

// function Sidemenu() {
//   return (
//     <div style={{ margin: "25px", border: "solid teal 5px" }}>
//       {/* u make style for button especially hover on button go to css file do it there but put id or class name here  */}
//       <button className="btn">click me</button>;
//       <button className="btn">click me</button>;
//       <button className="btn">click me</button>;
//       <button className="btn">click me</button>;
//       <button className="btn">click me</button>;
//       <button className="btn">click me</button>;
//       {/* u can make copy here as much u can but in App componend if u make copy there will changed style  */}
//     </div>
//   );
// }

 

// const showCatogaries = true;
// function AppSideMenu() {
//   return <Sidemenu />;
// }

// function App() {
//   return (
//     <div className="App">
//       <Header />
//      {/* if u want sidemenu to be besite post use display flex in main div  */}
//       {/* Post and Side Menu Containers  */}
//       <div style={{ display: "flex" }}>
//         {/* Post Container  */}
//         <div style={{ width: "50%" }}>
//           <Post />
//           <Post />
//           <Post />
//         </div>
//         {/* Post Container  */}
//         {/* Side Menu  */}
//         <div style={{ width: "40%" }}>
//           <AppSideMenu />
//         </div>
//         {/* Side Menu  */}
//       </div>
//       {/* Post and Side Menu Containers  */}
//     </div>
//   );
// }
// export default App;
 

// // // -------------------------------

// // // Now everything ok it shows side menu and make above App Component make it comment so we can now create condtion inside
// // // below example is attached to above but we have to make App component above comment so we can play with below and add condition.
// // // if change true to false side menu will not show
// // // you can add contion in in props when u add in parathesis (title, name) u can there add condition (if title== null || title="" -means string- then return null )
// // // However u can add Ternary operator its short cut of condition in curly braket below props in component
 // // all this lesson in link (https://www.youtube.com/watch?v=Z1L3QonlPNk&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=20)

// function Header() {
//   return (
//     <div>
//       {/* below add style in double curly bracket  */}
//       <h1
//         style={{
//           width: "100%",
//           backgroundColor: "teal",
//           height: "200px",
//           color: "white",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           font: "30px",
//           boxShadow: "0px 5px 13px black",
//           marginTop: "0px",
//         }}
//       >
//         Tarmeez Academy
//       </h1>
//     </div>
//   );
// }
 

// function Post() {
//   return (
//     <div style={{ padding: "10px", border: "solid teal 6px", margin: "25px" }}>
//       {/* u can add width below in App Component put (Post componend between div and put style width for it there its better  ) */}
//       <h1>This is Post Title</h1>
//       <hr />
//       <p>This is the post body</p>
//     </div>
//   );
// }
 

// function Sidemenu() {
//   return (
//     <div style={{ margin: "25px", border: "solid teal 5px" }}>
//       {/* u make style for button especially hover on button go to css file do it there but put id or class name here  */}
//       <button className="btn">click me</button>;
//       <button className="btn">click me</button>;
//       <button className="btn">click me</button>;
//       <button className="btn">click me</button>;
//       <button className="btn">click me</button>;
//       <button className="btn">click me</button>;
//       {/* u can make copy here as much u can but in App componend if u make copy there will changed style  */}
//     </div>
//   );
// }

 
// const showCatogaries = false;
// function AppSideMenu() {
//   if (showCatogaries == true) {
//     return <Sidemenu />;
//   }else{
//     // or u can write here return null it means empty
//     <div></div>
//   }
// }

 
// function App() {
//   return (
//     <div className="App">
//       <Header />
//       {/* if u want sidemenu to be besite post use display flex in main div  */}
//       {/* Post and Side Menu Containers  */}
//       <div style={{ display: "flex" }}>
//         {/* Post Container  */}
//         <div style={{ width: "50%" }}>
//           <Post />
//           <Post />
//           <Post />
//         </div>
//         {/* Post Container  */}
//         {/* Side Menu  */}
//         <div style={{ width: "40%" }}>
//           <AppSideMenu />
//         </div>
//         {/* Side Menu  */}
//       </div>
//       {/* Post and Side Menu Containers  */}
//     </div>
//   );
// }
// export default App;
 

// // // ---------------------------------------------------------------



// // Short lessons Continue
// // Lesson Rendering List in React
// //  lesson of map method
// // map method is like for loop

// // https://www.youtube.com/watch?v=pCiFpD5ZBn8&list=PL-h5aNeRKouETL-CIVsuCz59e5_vZhHk1&index=27

 // function App() {
//     const color =["White", "Yellow","Black","Red"]
// const myColor=color.map((currentElement,index,array)=>{
//     console.log(currentElement)
// })
//   return (
//     <div>
//       {myColor}
//     </div>
//   );
// }
// export default App;
 

// // map method is going to return me new array without affect orignal array (color) and orignal array will store in another array (myColor)
// // Below we will give example of array of object

// function App() {
//   const color = [
//     { color: "White", email:"hello1@getDefaultNormalizer.com" },
//     { color: "Yellow" ,email:"hello2@getDefaultNormalizer.com"},
//     { color: "Black",email:"hello3@getDefaultNormalizer.com" },
//     { color: "Red",email:"hello4@getDefaultNormalizer.com" },
//   ];

//   const myColor = color.map((values) => {
//     console.log(values.color);
//     console.log(values.email)
//     // if u write only values it will print objects but add values.name shows only colors. so values in parenthesis in function next to map will run all data one by one and print them all
//   });
//   return <div>{myColor}</div>;
// }
// export default App;
 

// // ----------------
// // Boostrap component in react with map from Step by Step Channel
// // https://www.youtube.com/watch?v=ttfQFtw-8GQ&list=PL-h5aNeRKouETL-CIVsuCz59e5_vZhHk1&index=24
// // we get from boostrap container div and row than in Card component we add info  like img and title and text and button then we go to child component Card and add all from App to Card the props . now as much we make copy of Card in App it shows on website and u can change info for second img in App component and add different info as much card u make ..

// function App() {
//   return (
//     <div className="App">
//       <div className="container my-5 ">
//         <div className="row">
//           <Card
//             imgsrc="./photo.jpg"
//             title="Python"
//             text="Some quick example text to build on the card title and make up
//                 the bulk of the card's content."
//             btn="Click Python"
//           />
//           <Card
//             imgsrc="./photo2.jpg"
//             title="Javasctipy"
//             text="Some quick example text to build on the card title and make up
//                 the bulk of the card's content."
//             btn="Click JS"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;

// function Card(props) {
//   return (
//     <div className="container m-3 ">
//       <div className="row">
//         <div className="col-sm-3">
//           <div className="card border-primary border-3">
//             <img src={props.imgsrc} className="card-img-top " alt="" />
//             <div className="card-body">
//               <h5 class="card-title">{props.title}</h5>
//               <p class="card-text">{props.text}</p>
//               <a href="##" className="btn btn-primary text-lg">
//                 {props.btn}
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// // above we make cards and add detail to it in App component then send it bt props to child component which is Card... now we will create Api file like any js file and add all info of cards then we will use that info and import it in App and Card component to make less code .. u will save data in api file not in child of App component.
 

// // https://www.youtube.com/watch?v=FltDMchfd-o&list=PL-h5aNeRKouETL-CIVsuCz59e5_vZhHk1&index=26
// // u can create file by name data then create variable and make object array and add all info of people but here we will create in this page u can do it in different file .. remove = and add comma between object
// // so first data has zero index and second 1 index we should know this
// const data = [
//     {
//       imgsrc: "./photo.jpg",
//       titleData: "Python",
//       textData:
//         "Some quick example text to build on the card title and make up the bulk of the card's content.",
//       btnData: "Click Python",
//     },

//     {
//       imgsrc: "./photo2.jpg",
//       titleData: "HTML",
//       textData:
//         "Some quick example text to build on the card title and make up the bulk of the card's content.",
//       btnData: "Click HTML",
//     },

//     {
//       imgsrc: "./photo3.jpg",
//       titleData: "Javasctipy",
//       textData:
//         "Some quick example text to build on the card title and make up the bulk of the card's content.",
//       btnData: "Click JS",
//     },
//   ];

//   // above is like api has all data so in img we add data which variabe name then zero which is index number than dot and add img name in data..
//   // in component child Card we take as in App and add there with props .. so from App what is written we take it and add it in child component with props dont get confuse with names when u copy it ... what in data we add it to App what written in App like img we add it in Card with props ..

//   function App() {
//     return (
//       <div className="App">
//         <div className="container my-5 ">
//           <div className="row">
//             <Card
//               img={data[0].imgsrc}
//               title={data[0].titleData}
//               text={data[0].textData}
//               btn={data[0].btnData}
//             />
//             <Card
//               img={data[1].imgsrc}
//               title={data[1].titleData}
//               text={data[1].textData}
//               btn={data[1].btnData}
//             />
//             <Card
//               img={data[2].imgsrc}
//               title={data[2].titleData}
//               text={data[2].textData}
//               btn={data[2].btnData}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
//   export default App;

//   function Card(props) {
//     return (
//       <div className="container m-3 ">
//         <div className="row">
//           <div className="col-sm-3">
//             <div className="card border-primary border-3">
//               <img src={props.img} className="card-img-top " alt="" />
//               <div className="card-body">
//                 <h5 class="card-title">{props.title}</h5>
//                 <p class="card-text">{props.text}</p>
//                 <a href="##" className="btn btn-primary text-lg">
//                   {props.btn}
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }


//  -----------------

// // here how can we reduce many line in above example with less code and use map method
// // https://www.youtube.com/watch?v=gY4rdp4DRgo&list=PL-h5aNeRKouETL-CIVsuCz59e5_vZhHk1&index=28
// //first uncomment the above data variable and then work on below ..  we will create map methed in App and. in return add Card component. in card component we take values and add it in all info in card .if u write map in App open curly braket ..we can create variable outside and add card in it and then this variable  add it in map... also it will shows error in console u have to add key ..

// function Card(props) {
//   return (
//     <div className="container ">
//       <div className="row">
//         <div className="col-md-4">
//           <div className="card">
//             <img src={props.img} className="card-img-top " alt="" />
//             <div className="card-body">
//               <h5 className="card-title">{props.title}</h5>
//               <p className="card-text">{props.text}</p>
//               <a href="##" className="btn btn-primary text-lg">
//                 {props.btn}
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
 

// function App() {
//   return (
//     <div className="App">
//       <div className="container my-5 ">
//         <div className="row">
//           {data.map((values) => {
//             return (
//               <Card
//                 key={values.id}
//                 img={values.imgsrc}
//                 title={values.titleData}
//                 text={values.textData}
//                 btn={values.btnData}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;
 

// // above we can use condition if for example create variable then create function outside and play with condition like in below link videos
// // https://www.youtube.com/watch?v=6q6MvKIAh4c&list=PL-h5aNeRKouETL-CIVsuCz59e5_vZhHk1&index=30
// // https://www.youtube.com/watch?v=BtRgmh75Tn4&list=PL-h5aNeRKouETL-CIVsuCz59e5_vZhHk1&index=29
// // ----------------------------------
// // Props project
// // https://www.youtube.com/watch?v=qHAE-o9JSkk&list=PL-h5aNeRKouETL-CIVsuCz59e5_vZhHk1&index=33

// // --------------

// function App() {
//   return (
//     <div>
//       <List />
//     </div>
//   );
// }
// export default App;

// function List() {
//   const fruits = ["Apple", "Oragne", "Grape", "Banana", "Cucumber", "Papaya"];
//   return fruits;
// }
// // Above the result is : AppleOragneGrapeBananaCucumberPapaya

// // but if u use map it can make it as list but add {e} and (ListItem) which are return in tags any tags p, li, div any tag.

 
// function App() {
//   return (
//     <div>
//       <List />
//     </div>
//   );
// }
// export default App;

// function List() {
//   const fruits = ["Apple", "Oragne", "Grape", "Banana", "Cucumber", "Papaya"];
//   fruits.sort();
// //   above u can sort fruits if u want by writing fruits.sort()
//   const listItems = fruits.map((e) => {
//     return <li>{e}</li>;
//   });

//   return <ul>{listItems} </ul>;
// //   u can add ol or ul
// }
 

// // Example 2 is to put fruits in object and add calories. also add key ro list so in console it not shows any error. we can add key e.name because each name is different but better add unique id to each item .. now if u write e.name will show fruits name if e.calories will show calories or u can write them both next to each other..

// function App() {
//   return (
//     <div>
//       <List />
//     </div>
//   );
// }
// export default App;

// function List() {
//   const fruits = [
//     { id: 1, name: "Apple", Calories: 11 },
//     { id: 2, name: "Oragne", Calories: 22 },
//     { id: 3, name: "Grape", Calories: 33 },
//     { id: 4, name: "Banana", Calories: 44 },
//     { id: 5, name: "Cucumber", Calories: 55 },
//     { id: 6, name: "Papaya", Calories: 66 },
//   ];


//   const listItems = fruits.map((e) => {
//     return <li key={e.id}>{e.name} {e.Calories}</li>;
//   });
//   return <ul>{listItems} </ul>;
//   //   u can add ol or ul
// }

// ------------------------------------


// // how to sort by sort by alphabetical order and by number of Calories
// function App() {
//   return (
//     <div>
//       <List />
//     </div>
//   );
// }
// export default App;

// function List() {
//   const fruits = [
//     { id: 1, name: "Apple", Calories: 11 },
//     { id: 2, name: "Oragne", Calories: 22 },
//     { id: 3, name: "Grape", Calories: 33 },
//     { id: 4, name: "Banana", Calories: 44 },
//     { id: 5, name: "Cucumber", Calories: 55 },
//     { id: 6, name: "Papaya", Calories: 66 },
//   ];

//   // sort by name
//   // Alphabetical order

//   fruits.sort((a,b)=>{
//     return  (a.name.localeCompare(b.name)
//   );
//   })
 

//   // Reverse order

//   fruits.sort((a,b)=>{
//       return  (b.name.localeCompare(a.name)
//     );
//     })


//   // sort by numeric order in Calories numbers high to low

//   fruits.sort((a, b) => {
//     return a.Calories - b.Calories;
//   });

//   // reverse by numeric order in Calories numbers low to high

//   fruits.sort((a, b) => {
//     return b.Calories - a.Calories;
//   });

 //   const listItems = fruits.map((e) => {
//     return (
//       <li key={e.id}>
//         {e.name} {e.Calories}
//       </li>
//     );
//   });
//   return <ul>{listItems} </ul>;
//   //   u can add ol or ul
// }

// // ------------------------------------------------------------------

// // now using filter method first check below link how filter works
// // https://www.youtube.com/watch?v=VvSEKHKFvpQ

 
// function App() {
//   return (
//     <div>
//       <List />
//     </div>
//   );
// }
// export default App;

// function List() {
//   const fruits = [
//     { id: 1, name: "Apple", Calories: 11 },
//     { id: 2, name: "Oragne", Calories: 22 },
//     { id: 3, name: "Grape", Calories: 33 },
//     { id: 4, name: "Banana", Calories: 44 },
//     { id: 5, name: "Cucumber", Calories: 55 },
//     { id: 6, name: "Papaya", Calories: 66 },
//   ];

//   // use filter method
//   // create array that less calories. u create variable and then add it to map

//   const lowCalories = fruits.filter((e) => e.Calories > 50);

//   const listItems = lowCalories.map((ele) => {
//     return (
//       <li key={ele.id}>
//         {ele.name} {ele.Calories}
//       </li>
//     );
//   });
//   return <ul>{listItems} </ul>;
//   //   u can add ol or ul
// }

// // ----------------------------

// // in this section we will add list in App so its rusabble with different component .. above each component has its list of fruits but if u sent to App from there u can use it with any component . we have to set props to send list from app to other component . and now list is resuable component
// function App() {
//   const fruits = [
//               { id: 1, name: "Apple", Calories: 11 },
//               { id: 2, name: "Oragne", Calories: 22 },
//               { id: 3, name: "Grape", Calories: 33 },
//               { id: 4, name: "Banana", Calories: 44 },
//               { id: 5, name: "Cucumber", Calories: 55 },
//               { id: 6, name: "Papaya", Calories: 66 },
//   ];
//   return (
//     <div>
//     {/* below we add two keys items and catagory */}
//       <List items={fruits} catagory="fruits" />
//     </div>
//   );
// }
// export default App;
 

// function List(props) {
//   const group = props.items;
//    const listItems = group.map((ele) => {
//     return (
//       <li key={ele.id}>
//         {ele.name} {ele.Calories}
//       </li>
//     );
//   });
//   return(
//     <ul>{listItems}</ul>
//   );
//   // u can add ol or ul
 

// // you can add another list by making new list in App with different id and in return another list for vegetables and go to List component add variable for vagetables like fruits and go below in List component add in return another list for vegetables
// function App() {
//   const fruits = [
//               { id: 1, name: "Apple", Calories: 11 },
//              { id: 2, name: "Oragne", Calories: 22 },
//               { id: 3, name: "Grape", Calories: 33 },
//               { id: 4, name: "Banana", Calories: 44 },
//               { id: 5, name: "Cucumber", Calories: 55 },
//               { id: 6, name: "Papaya", Calories: 66 },
//   ];
//   const vegetables = [
//              { id: 7, name: "cucumber", Calories: 99 },
//              { id: 8, name: "Potatos", Calories: 82 },
//              { id: 9, name: "Beens", Calories: 100 },
//              { id: 10, name: "Carrot", Calories: 111 },
//              { id: 11, name: "Sweet Potatos", Calories: 122 },
//              { id: 12, name: "Garlic", Calories: 140 },
// ];
//   return (
//     <div>
//     {/* below we add two keys items and catagory */}
//       <List items={fruits} catagory="fruits" />
//       <List items={vegetables} catagory="vegetables" />
//     </div>
//   );
// }
// export default App;

//  function List(props) {
//   const group2=props.catagory;
//   const group = props.items;
//    const listItems = group.map((ele) => {
//     return (
//       <li key={ele.id}>
//         {ele.name} {ele.Calories}
//       </li>
//     );
//   });
//   return (
//     <div>
//       <h3>{group2}</h3> ;
//        <h3>{listItems}</h3> ;
//   {/* //   u can add ol or ul. also if u put group2 below listitems will shows title down so better like this. also u can add style to it   */}
//     </div>
//   )
// }
 

// // ------------------------------------------


// // we can use conditional rending if dont have list we show empty also we can add propsType and default props as well. if u remove catarories in App which is next to items it wont show title but if u remove item it will not show so better we add below default props .add it below list component

 // function App() {
//   const fruits = [
//     { id: 1, name: "Apple", Calories: 11 },
//     { id: 2, name: "Oragne", Calories: 22 },
//     { id: 3, name: "Grape", Calories: 33 },
//     { id: 4, name: "Banana", Calories: 44 },
//     { id: 5, name: "Cucumber", Calories: 55 },
//     { id: 6, name: "Papaya", Calories: 66 },
//   ];
//   const vegetables = [
//     { id: 7, name: "cucumber", Calories: 99 },
//     { id: 8, name: "Potatos", Calories: 82 },
//     { id: 9, name: "Beens", Calories: 100 },
//     { id: 10, name: "Carrot", Calories: 111 },
//     { id: 11, name: "Sweet Potatos", Calories: 122 },
//     { id: 12, name: "Garlic", Calories: 140 },
//   ];
//   const fruitCondition =
//     fruits.length > 0 ? <List items={fruits} catagory="fruits" /> : null;
//   // or u can add && in place of ? and remove anything after : it will works as below its less code
//   const vegetCondition = vegetables.length > 0 && (
//     <List items={vegetables} catagory="vegetables" />
//   );
//   return (
//     <div>
//       {fruitCondition}
    //   {vegetCondition}
//     </div>
//   );
// }
// export default App;

 // function List(props) {
//   const group2 = props.catagory;
//   const group = props.items;
//   const listItems = group.map((ele) => {
//     return (
//       <li key={ele.id}>
//         {ele.name} {ele.Calories}
//       </li>
//     );
//   });
//   return (
//     <div>
//       <h3>{group2}</h3> ;<h3>{listItems}</h3> ;
//       {/* //   u can add ol or ul. also if u put group2 below listitems will shows title down so better like this. also u can add style to it   */}
//     </div>
//   );
// }

// // below add proptypes but in items there is array so we add arrayOf then we add PropTypes.shape then we add detail .. as there are object and many type thats why
// List.propTypes={
//   catagory: PropTypes.string,
//   items:PropsTypes.arrayOf(PropsTypes.shape({id:PropsTypes.number,name:PropsTypes.string,Calories:PropsTypes.number});
// }
// List.defaultProps = {
//   catagory: "Catagory",
//   items: [],
// };

// // it means if there is no Catagory it shows what written in string and in items if u remove it it shows title but no list which means empty array.
// // above map and filter was in lesson bro code from 1:15 to 1:30
// // https://www.youtube.com/watch?v=CgkZ7MvWUAA

// // -----------------------------------------------
// // list rendering
// // https://www.youtube.com/watch?v=tKw2l3ds1qk&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=21
// // if u create ul and inside it add lists and add for them style but this is not perfect way cuz in futute if u want to add new list u have to do a lot of things and adding style of this stuff so the best way is create variable of tasks for example and add all list info inside and create another variable myTasks for example and create inside it a map

// function App() {
//   const task = ["Writing Homework", "Studing books", "Reading reports"];
//   const myTasks = task.map((e) => {
//     console.log(e);
//   });
//   return <div className="App">helloword</div>;
// }
// export default App;

// // u can use return task then console.log(mytask) also u can add anything with return task
// function App() {
//   const task = ["Writing Homework", "Studing books", "Reading reports"];
//   const myTasks = task.map((e) => {
//     return e + " Add Here";
//   });
//   console.log(myTasks);
//   return <div className="App">helloword</div>;
// }
// export default App;
 

// // Now in return we can write JSX and add (<li>{e}</li>) if u go to console it shows like object but u have to do something else go to App component create ul inside ul add {myTasks} then it will appears on page like list then u can ignore console log or u can remove it
// function App() {
//   const task = ["Writing Homework", "Studing books", "Reading reports"];
//   const myTasks = task.map((e) => {
//     return (<li>{e}</li>)
//   });
//   console.log(myTasks);
//   return <div className="App">
//   <ul>
//   {myTasks}
//   </ul>
//   </div>;
// }
// export default App;

// // The important in map when u use map u have to give each element id and key with value means instead make it string convert it to object so it has key and value
// // but below add in return <li>{e.title}</li>; becuase it convert to object . Then go to Li in return add key with value id   return <li key={e.id}>{e.title}</li>; so each li we have key so we can change any list by key cux each key has different id. now when check console it shows each list has key with different id

// function App() {
//   const task = [
//     { id: 1, title: "Writing Homework" },
//     { id: 2, title: "studing book" },
//     { id: 3, title: "reading reports " },
//     { id: 4, title: "cleaning room" },
//   ];
//   const myTasks = task.map((e) => {
//     return <li key={e.id}>{e.title}</li>;
//   });
//   console.log(myTasks);
//   return (
//     <div className="App">
//       <ul>{myTasks}</ul>
//     </div>
//   );
// }
// export default App;

 

// // above after u add id and key to map now u can add style to li it will change all to this style also u can put li in h2 to make it bigger as below . i change li to div and add e.title in h1 and it shows big size
// // now if u want to add new array just add to jask and do not forget to add new different id as well for each array .. Also u can delete any array easily ..

// function App() {
//   const task = [
//     { id: 1, title: "Writing Homework" },
//     { id: 2, title: "studing book" },
//     { id: 3, title: "reading reports " },
//     { id: 4, title: "cleaning room" },
//   ];
//   const myTasks = task.map((e) => {
//     return <div style={{background:"green "}} key={e.id}>
//     <h1>{e.title} </h1>
//     </div>;
//   });
//   console.log(myTasks);
//   return (
//     <div className="App">
//       <ul>{myTasks}</ul>
//     </div>
//   );
// }
// export default App;
// // ------------ 
// // list rendering project
// // https://www.youtube.com/watch?v=Lf24mX7WJu4&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=22
// // u can create side menu and post in map by creating variable then add it below in App component below
// // below project is not completed
 
// function PostComp({ postname = "no post", postbody = "no body" }) {
//   return (
//     <div
//       style={{
//         width: "70%",
//         padding: "10px",
//         border: "solid teal 5px",
//         background: "white",
//         margin: "25px",
//       }}
//     >
//       <h2>postname</h2>
//       <hr />
//       <p>postbody</p>
//     </div>
//   );
// }
 

// function App() {
//   const post = [
//     { id: 1, postname: "Tarmeez Academy", postBody: "This is Paragraph 1" },
//     { id: 2, postname: "Tarmeez Academy", postBody: "This is Paragraph 2" },
//     { id: 3, postname: "Tarmeez Academy", postBody: "This is Paragraph 3" },
//     { id: 4, postname: "Tarmeez Academy", postBody: "This is Paragraph 4" },
//   ];
//   const postlist = post.map((e) => {
//     return <PostComp key={e.id} postname={e.postname} />;
//   });
//   return (
//     <div className="App">
//       <div style={{ display: "flex", width: "70%" }}>
//         <div>{postlist}</div>
//       </div>
//     </div>
//   );
// }
// export default App;


// // ----------------------------------------------------------------------

// // handling events
// // https://www.youtube.com/watch?v=P215H_6Xvgw&list=PLZ45kwWUJ51bVyPFeU-oSOM4YRVCMUPYQ&index=10
// // if u face error in JSX sometimes the solution is to put all JSX tag in father Tag like put all in div or empty tag (<> </>).
// // if u want to add event on click u can ceate it in button tag and when u go to page and click button it will show

// function App() {
//   return (
//     <div className="App">
//         <input type="text"/>
//         <button onClick={()=>console.log("click it will work ")}>click me</button>
//     </div>
//   );
// }
// export default App;

// // how to make onclick work without click when u load page it work immediatly but making function outside App and then add Click in (console.log) as below

// function Click (){
//     console.log("click when load page")
// }

// function App() {
//     return (
//       <div className="App">
//           <input type="text"/>
//           <button onClick={Click()}>click me</button>
//       </div>
//     );
//   }
//   export default App;

// // but if u removed paranthsis from Click it will not work when page load it will work when u press click like below
// // {
// /* <button onClick={Click}>click me</button> */
// // }

// // // React onChange event
// // // React onChange is an event handler that triggers when there is any change in the input field.
// // // This event captures the changes in an Input Field and executes the handler function. It is fired when the input field is modified and loses focus. It is one of the form events that updates when the input field is modified.
// // // https://www.youtube.com/watch?v=P215H_6Xvgw&list=PLZ45kwWUJ51bVyPFeU-oSOM4YRVCMUPYQ&index=10

// function App() {
//     return (
//       <div className="App">
//           <input type="text" onChange={(e)=>console.log(e.target.value)}/>
//           <button>click me</button>
//       </div>
//     );
//   }
//   export default App;

// // // Event (e)
// // // First you have e which is short for event. To understand what it does change onChange={(e) => setName(e.target.value)} to onChange={(e) => console.log(e)}. Inspect the log and you'll find a list of events in which one of them is target. Open target (if not already opened) and within target, you'll find value. In short, this is the target value that's being typed in your input, it's what the user is typing.

// // // useState
// // // Your using state to track the value in your input. So [name] is the getter and [setName] is the setter. If you notice in your alert you have alert(The name you entered was: ${name}). The variable name is the getter which means it holds the current value of the state. On the other hand setName will set that value. It's able to do so because you're setting and tracking the value here on change onChange={(e) => setName(e.target.value)}.

// // // means e is the event that is happening which here is change, target is the element that triggered the event, which here is the input, and value is the value of the input element Onchange is as the name suggests and setState is used to change the state you defined eariler you should read the documentation as well it would clear stuff up maybe an online explanation on youtube anyways all the best for your React journey

// // // There are at least 5 concepts that I can think of being used in this single line that I recommend you to learn about


// // //     Higher-Order Functions
// // //     Anonymous functions
// // //     Arrow Functions
// // //     State
// // //     Synthetic Events

// // To start your journey, just know that this code onChange={(e) => setName(e.target.value)}

// ------------------------------
// // click event
// // https://www.youtube.com/watch?v=CgkZ7MvWUAA
// // bro code min 1:30

// function App() {
//   return (
//     <div className="App">
//       {/* <ButtonClick /> */}
//       <ButtonClick2 />
//       {/* <ButtonClick3 /> */}
//       {/* <ProfilePic /> */}
//       {/* <ProfilePic2 /> */}
//     </div>
//   );
// }
// export default App;

// function ButtonClick() {
//   const click = function (e) {
//     console.log(` ${e} stop clicking me `);
//   };
//   return (
//     <button
//       onClick={() => {
//         click("bro");
//       }}
//     >
//       click me
//     </button>
//   );
// }
// // above in console it will print bro stop clicking me


// function ButtonClick2() {
//   let count = 0;
//   const handleClick = (name) => {
//     if (count < 3) {
//       count++;
//       console.log(`${name} you are clicking me ${count} times `);
//     } else {
//       console.log(` ${name} stop clicking me `);
//     }
//   };
//   return <button onClick={() => handleClick("bro")}>click me</button>;
// }
// // above when u click it shows msg three time then it shows else msg

// function ButtonClick3() {
//   const handleClick = (e) => {
//     e.target.textContent = "Ouch";
//   };
//   return <button onClick={(e) => handleClick(e)}>click me</button>;
// }
// // above when u click on click me it change to Ouch .. u can replace onClick with onDoubleClick so when u click two times it works

// // lets use image on onClick

// function ProfilePic() {
//     const handleClick= ()=>{
//         console.log("OUCH")
//     }
//   const imageUrl = "./photo.jpg";
//   return <img onClick={handleClick} src={imageUrl} alt=""></img>;
// }
// // above when click image it shows ouch in console

// // let utilize the even object thats generated when u click on image it disappears
// function ProfilePic2() {
//     const handleClick= (e)=>{
//         e.target.style.display="none"
//     }
//   const imageUrl = "./photo.jpg";
//   return <img onClick={(e)=>handleClick(e)} src={imageUrl} alt=""></img>;
// }
// //when u click on image it disappears

// // handling events min 5:05
// // https://www.youtube.com/watch?v=eILUmCJhl64

// function App() {
//   const arr = [
//     { id: 1, title: "Apple" },
//     { id: 2, title: "Orange" },
//     { id: 3, title: "Banana" },
//   ];
//   return (
//     <div className="App">
//       <h2>Food </h2>
//       {arr.map((e) => {
//         return <Card key={e.id} title={e.title} />;
//       })}
//     </div>
//   );
// }
// export default App;

// const Card = (props) => {
//     const handleBtn=(title)=>{
//         console.log(`${props.title} has being bought`)
//     }
//   return (
//     <div>
//       <li>
//         {props.title}
//         <button onClick={()=>handleBtn(props.title)}>
//           Add
//         </button>
//       </li>
//     </div>
//   );
// };

// // above creat function below and add it to onclick below or u can go directly to  onClick u can add console and add comment so when u click on any button it show that name if u click on apple show apple has being bought if u click on orange will show orange msg and so on. for short cut u can add after onclick the function name and it will work like (onClick={handleBtn})


 // // ------------------------------------------------

// // React router
// // https://www.youtube.com/watch?v=D6XMreIsYY8&list=PLZ45kwWUJ51bVyPFeU-oSOM4YRVCMUPYQ&index=11
 

// function Header() {
//   return <div> "Header"</div>;
// }
// function Main() {
//   return <div> "Main"</div>;
// }
// function Footer() {
//   return <div> "Footer"</div>;
// }

// function App() {

//   return (
//     <div className="App">
//       <>
//         <Header />
//         <Main />
//         <Footer />
//       </>
//     </div>
//   );
// }
// export default App;

// // comment above App component itjust show u what u will print in ur page and let above three function uncomment so we can work with below component
// // create variable function on any name and add condition and then take variable name add below in Header Place and go to page and write on link /header it will show header. so it will show when u write as pathname with link. also ForHeader put it between curly bracket.
// // we can make same to footer and Main

// function App() {
//   const ForHeader = () => {
//     if (window.location.pathname === "/header") return <Header />;
//   };
//   const ForMain = () => {
//     if (window.location.pathname === "/main") return <Main />;
//   };
//   const ForFooter = () => {
//     if (window.location.pathname === "/footer") return <Footer />;
//   };
 
//   return (
//     <div className="App">
//       <>
//         {ForHeader()}
//         {ForMain()}
//         {ForFooter()}
//       </>
//     </div>
//   );
// }
// export default App;

// // // comment above component
// // // now how can we write above with condition with using below tags browserrouter and we dont need if condition
// // // also add above on the top (import { BrowserRouter,Route,Router } from "react-router-dom";)
// // // {
// // /* <BrowserRouter >
// // <Routes>
// //   <Route path="/..." />
// // </Routes>
// // </BrowserRouter> */
// // // }

// // // now we will work on Main and Footer only below and put them between BrowserRouter then put them in side Routes and put each of them i route seperately and this route is self closing

// function App() {
//   return (
//     <div className="App">
//       <>
//         <Header />
//         <BrowserRouter>
//           <Routes>
//             <Route path="/main" element={<Main />} />
//             <Route path="/footer" element={<Footer />} />
//           </Routes>
//         </BrowserRouter>
//       </>
//     </div>
//   );
// }
// export default App;

// // // How to create error page not found when click any link
// // // https://www.youtube.com/watch?v=R7J3Dm2Im7g&list=PLZ45kwWUJ51bVyPFeU-oSOM4YRVCMUPYQ&index=12
// // // Below if u add anything else it shows page not found

// function Header() {
//   return <div> "Header"</div>;
// }
// function Main() {
//   return <div> "Main"</div>;
// }
// function Footer() {
//   return <div> "Footer"</div>;
// }
// const Error = () => {
//   return <div>Page not found</div>;
// };

// function App() {
//   return (
//     <div className="App">
//       <>
//         <Header />
//  {/* this header we make it out side BrowserRouter so it will show when page load even u add anything to link path but if u add it to BrowserRouter it show when u call it add it to path  */}

//        <BrowserRouter>
//           <Routes>
//            <Route path="/main" element={<Main />} />
//            <Route path="/footer" element={<Footer />} />

//           {/* here we can add star in path if page not found it shows this   */}
//            <Route path="*" element={<Error />} />
//                       </Routes>
//          </BrowserRouter>
//       </>
//     </div>
//   );
// }
// export default App;

// // Example
// // Above if u write main it shows u main if footer shows footer if anything else it shows page not found but if u write nothing it should go to home page how we can go to main page check below create component by Home name a and in path add just slash (/) and in element add home

// function Header() {
//   return <div> "Header"</div>;
// }
// function Main() {
//   return <div> "Main"</div>;
// }
// function Footer() {
//   return <div> "Footer"</div>;
// }
// const Error = () => {
//   return <div>Page not found</div>;
// };
 
// const Home = () => {
//   return <div>Home Page</div>;
// };
// function App() {
//   return (
//     <div className="App">
//       <>
//         <Header />

// {/* this header we make it out side BrowserRouter so it will show when page load even u add anything to link path but if u add it to BrowserRouter it show when u call it add it to path  */}

//  <BrowserRouter>
// <Routes>
// <Route path="/main" element={<Main />} />
// <Route path="/footer" element={<Footer />} />

//  {/* here we can add star in path if page not found it shows this   */}
//         <Route path="*" element={<Error />} />
//          <Route path="/" element={<Home />} />
//        </Routes>
//     </BrowserRouter>
//   </>
// </div>
// );
// }
// export default App;

// // Another Exampe how to click on link and take u to footer or header
// // below example not completed last example of below link
// // https://www.youtube.com/watch?v=R7J3Dm2Im7g&list=PLZ45kwWUJ51bVyPFeU-oSOM4YRVCMUPYQ&index=12
 

// function Header() {
//   return <div> "Header"</div>;
// }
// function Main() {
//   return <div> "Main"</div>;
// }
// function Footer() {
//   return <div> "Footer"</div>;
// }
// const Error = () => {
//   return <div>Page not found</div>;
// };

// const Home = () => {
//   return (
//     <>
//       <div>Home Page</div>
//       <link to="/Footer">footer</link>
//       <link to="/Header">header</link>
//     </>
//   );
// };
 

// function App() {
//   return (
//     <div className="App">
//       <>
//         <Header />

//         {/* this header we make it out side BrowserRouter so it will show when page load even u add anything to link path but if u add it to BrowserRouter it show when u call it add it to path  */}

//         <BrowserRouter>
//           <Routes>
//             <Route path="/main" element={<Main />} />
//             <Route path="/footer" element={<Footer />} />
 
//             {/* here we can add star in path if page not found it shows this   */}
//             <Route path="*" element={<Error />} />
//             <Route path="/Home" element={<Home />} />
//           </Routes>
//         </BrowserRouter>
//       </>
//     </div>
//   );
// }
// export default App;
// -----------------------------
// tarmeez lesson React Router 
// first wrap App in index.js between BrowserRouter then come tp app.js and create Routes and inside it create Route then add to it path and element. You can also in App.js wrap BrowserRouter inside it Routes and inside it Route no need to go to index.js. add to Route the path this path u will write it above and page take u to what u write in element  the element u can create component and add it to element or u add jsx like <h1>hello</h1> .... the component Main and Header u can create it in diffferent file and import it here then add it to App in Route ... you can add any div any button above Routes and it will show u even u move to another path it will not change ... 

// import { BrowserRouter, Route, Router,Link,Switch, BrowserRouter as router, Routes } from "react-router-dom"

// function App(){
    
//     return(
//         <div>
//             <div>
//                 <li><button>Home</button></li>
//                 <li><button>About</button></li>
//                 <li><button>Contact</button></li>
           
//             </div>
// <Routes>
//     <Route path="/main" element={<Main/>}/>
//     <Route path="/" element={<h1>This is home page </h1>}/>
//     <Route path="header" element={<Header/>}/>
//  </Routes>
//         </div>
//     )
// }
// export default App;

// function Main(){
//     return(
//         <div>
//             <h1>This is Main</h1>
//         </div>
//     )
// }
// function Header(){
//     return(
//         <div>
//             <h1>This is Header</h1>
//         </div>
//     )
// }

// Here we when u click on any button will take u to another page how can we do it by importing Link above then use it as example ...create Link and inside it create button and inside link add to="/main" so when u click button it take u to the main page. below we will addd button to Link. any button u create u should create Route for it below .. Also u can create Link and add div no need to be button below in Main Component we create div inside it we create p and we wrap it inside link and when i click it i move to home page . but if  main compoenent in different file there u have to import all element from react-router-dom
// import { BrowserRouter, Route, Router,Link,Switch, BrowserRouter as router, Routes } from "react-router-dom"

// function App(){
    
//     return(
//         <div>
//             <div>
//                 <Link to="/"><button>Home</button></Link>
//                 <Link to="/main"> <button>Main</button> </Link>
//                 <Link to="/header"> <button>Header</button></Link>
//             </div>

// <Routes>
//     <Route path="/main" element={<Main/>}/>
//     <Route path="/" element={<h1>This is home page </h1>}/>
//     <Route path="header" element={<Header/>}/>
//  </Routes>
//         </div>
//     )
// }
// export default App;

// function Main(){
//     return(
//         <div>
//             <h1>This is Main</h1>
//             <div>
//                 <Link to="/">
//                 <p style={{background:"red",color:"white"}}>click this sentense to move to Home </p>
//                 </Link>
//             </div>
//         </div>
//     )
// }
// function Header(){
//     return(
//         <div>
//             <h1>This is Header</h1>
//         </div>
//     )
// }

// -----------------------
// Route from Codevolution 
// you can wrap App in index.js between BrowserRouter then in App.js u can work or u in App>js can wrap Routes in BrowserRouter no need in index.js and delete it from there as below .
//  import { BrowserRouter, Route, Router,Link,Switch, BrowserRouter as router, Routes } from "react-router-dom"
//  function App(){
    
//     return(
//         <div>
//            <BrowserRouter>         
// <Routes>
//      <Route path="home" element={<h1>This is home page </h1>}/>
//     <Route path="header" element={<h1>This is Header</h1>}/>
//  </Routes>
//  </BrowserRouter>
//         </div>
//     )
// }
// export default App;

// or u can create Component and add it to element and if u do it in outside file u have to import it .
// import { BrowserRouter, Route, Router,Link,Switch, BrowserRouter as router, Routes } from "react-router-dom"
// function App(){
   
//    return(
//        <div>
//           <BrowserRouter >         
// <Routes >
//     <Route path="home" element={<Home/>}/>
//    <Route path="header" element={<h1>This is Header</h1>}/>
// </Routes>
// </BrowserRouter>
//        </div>
//    )
// }
// export default App;
// function Home (){
//     return (
//         <div>
//             <h1>This is Home Page </h1>
//         </div>
//     )
// }

// here we use Link (L) is capital letter and we can use it in App or in different component then u have to import it also add Navbar component inside BrowserRouter not outside. and u can add style to nav . also in path="we add name without /" but in Link to="we add slash" we learn in future about it 
//  import { BrowserRouter, Route, Router,Link,Switch, Routes } from "react-router-dom"
// function App(){
//        return(
//    <> 
//     <BrowserRouter > 
//              <NavBar/>
  
//  <Routes>
//      <Route path="/" element={<h1>This is Home</h1>}/>
//      <Route path="about" element={<h1>This is About</h1>}/>
//  </Routes>
//  </BrowserRouter>
 
//  </>
//     )
//  }
//  export default App;

// function NavBar(){
//     return(
//         <>
//           <nav>
//     <Link to="/" >Home</Link>
//     <Link to="/about">About</Link>
//     </nav>
//         </>
//     )
// }

// -----------
// Active Link 
//  first import NavLink. you can add style in css file or here by creating variable . Navbar specific made for navBar 
// import { BrowserRouter, Route, Router,Link,Switch, Routes,NavLink } from "react-router-dom"
// function App(){
//        return(
//    <> 
//     <BrowserRouter> 
//              <NavBar/>
  
//  <Routes>
//      <Route path="/" element={<h1>This is Home</h1>}/>
//      <Route path="about" element={<h1>This is About</h1>}/>
//  </Routes>
//  </BrowserRouter>
 
//  </>
//     )
//  }
//  export default App;

// function NavBar(){
//     return(
//         <>
//           <nav style={{backgroundColor:"aliceblue;", padding:"16px 32px",}}>
//     <NavLink  to="/" style={{margin:"16px"}} >Home</NavLink>
//     <NavLink to="/about" style={{margin:"16px"}}>About</NavLink>
//     </nav>
//         </>
//     )
// }
// ---------------------
// navigating protammatically 
// now here will try when u click in any button will show u msg that ordere confirmed. create Route for Hoem and About also for Msg will show when u click (OrderSummary) then create button in Home so when u click it it show msg. but import useNavigate and use it in Home to invoke it and use it in Button in onclick and add variablee navigate inside add what u add in path="order-summary". and if u want to go from order-summary page to home add button in OrderSummary Component and do same use useNavigate and in onClick write -1 means take u back page

// import { BrowserRouter, Route, Router,Link,Switch, Routes,NavLink, useNavigate } from "react-router-dom"
// function App(){
//        return(
//    <> 
//     <BrowserRouter> 

  
//  <Routes>
//      <Route path="/" element={<Home/>}/>
//      <Route path="about" element={<About/>}/>
//      <Route path="order-summary" element={<OrderSummary/>}/>
//  </Routes>
//  </BrowserRouter>
 
//  </>
//     )
//  }
//  export default App;
// function Home(){
//     const navigate=useNavigate()
//     return (
//         <div>
//             <h1>This is Home Page</h1>
//             <button onClick={()=>{navigate("order-summary")}}>Place Order</button>
//         </div>
//     )
// }


// const About = () => {
//   return (
//     <div>
//       <h1>This is About Page</h1>
//     </div>
//   )
// }


// function OrderSummary() {
//     const navigate=useNavigate()
//   return (
//     <div>
//       <h1>Order Confirmed !</h1>
//       <button onClick={()=>{navigate(-1)}}>Back</button>
//     </div>
//   )
// }

// if you open default page and write local 3000 it will open page if u create replace:true to button in home component and when u click back it will not take u home page it takes u to default page 
// import { BrowserRouter, Route, Router,Link,Switch, Routes,NavLink, useNavigate } from "react-router-dom"
// function App(){
//        return(
//    <> 
//     <BrowserRouter> 

  
//  <Routes>
//      <Route path="/" element={<Home/>}/>
//      <Route path="about" element={<About/>}/>
//      <Route path="order-summary" element={<OrderSummary/>}/>
//  </Routes>
//  </BrowserRouter>
 
//  </>
//     )
//  }
//  export default App;
// function Home(){
//     const navigate=useNavigate()
//     return (
//         <div>
//             <h1>This is Home Page</h1>
//             <button onClick={()=>{navigate("order-summary",{replace:true})}}>Place Order</button>
//         </div>
//     )
// }


// const About = () => {
//   return (
//     <div>
//       <h1>This is About Page</h1>
//     </div>
//   )
// }


// function OrderSummary() {
//     const navigate=useNavigate()
//   return (
//     <div>
//       <h1>Order Confirmed !</h1>
//       <button onClick={()=>{navigate(-1)}}>Back</button>
//     </div>
//   )
// }
//  ----------
// no match Route
// now if u write for example and thing like user after slash/ it shows white page so how to create error msg by creating new component and create new Route add in Path "*" star .. 
// import { BrowserRouter, Route, Router,Link,Switch, Routes,NavLink, useNavigate } from "react-router-dom"
// function App(){
//        return(
//    <> 
//     <BrowserRouter> 

  
//  <Routes>
//      <Route path="/" element={<Home/>}/>
//      <Route path="about" element={<About/>}/>
//      <Route path="order-summary" element={<OrderSummary/>}/>
//      <Route path="*" element={<NoMatch/>}/>
//  </Routes>
//  </BrowserRouter>
 
//  </>
//     )
//  }
//  export default App;
// function Home(){
//     const navigate=useNavigate()
//     return (
//         <div>
//             <h1>This is Home Page</h1>
//             <button onClick={()=>{navigate("order-summary",{replace:true})}}>Place Order</button>
//         </div>
//     )
// }


// const About = () => {
//   return (
//     <div>
//       <h1>This is About Page</h1>
//     </div>
//   )
// }
// function OrderSummary() {
//     const navigate=useNavigate()
//   return (
//     <div>
//       <h1>Order Confirmed !</h1>
//       <button onClick={()=>{navigate(-1)}}>Back</button>
//     </div>
//   )
// }

// const NoMatch = () => {
//   return (
//     <div>
//       <h1>Page not Found</h1>
//     </div>
//   )
// }

// --------------
// Nested Route 
// create Navbar add Home and About to NavLink also create Products conpoenent inside create input search and then create Route for Products and add it to NavBar Componenet as well. 

// import { BrowserRouter, Route, Router,Link,Switch, Routes,NavLink, useNavigate } from "react-router-dom"
// function App(){
//        return(
//    <> 
//     <BrowserRouter> 
// <NavBar/>
  
//  <Routes>
//      <Route path="/" element={<Home/>}/>
//      <Route path="about" element={<About/>}/>
//      <Route path="order-summary" element={<OrderSummary/>}/>
//      <Route path="*" element={<NoMatch/>}/>
//      <Route path="products" element={<Products/>}>
     
// 
//  </Routes>
//  </BrowserRouter>
 
//  </>
//     )
//  }
//  export default App;
// function Home(){
//     const navigate=useNavigate()
//     return (
//         <div>
//             <h1>This is Home Page</h1>
//             <button onClick={()=>{navigate("order-summary",{replace:true})}}>Place Order</button>
//         </div>
//     )
// }


// const About = () => {
//   return (
//     <div>
//       <h1>This is About Page</h1>
//     </div>
//   )
// }
// function OrderSummary() {
//     const navigate=useNavigate()
//   return (
//     <div>
//       <h1>Order Confirmed !</h1>
//       <button onClick={()=>{navigate(-1)}}>Back</button>
//     </div>
//   )
// }

// const NoMatch = () => {
//   return (
//     <div>
//       <h1>Page not Found</h1>
//     </div>
//   )
// }

// function NavBar(){
//         return(
//             <>
//               <nav style={{backgroundColor:"aliceblue;", padding:"16px 32px",}}>
//         <NavLink  to="/" style={{margin:"16px"}} >Home</NavLink>
//         <NavLink to="/about" style={{margin:"16px"}}>About</NavLink>
//         <NavLink to="/products" style={{margin:"16px"}}>Products</NavLink>
//         </nav>
//             </>
//         )
//     }

//     const Products = () => {
//         return (
//       
//            <div>
//            <input type="search" placeholder="Search Products"/>
//           </div>
//        //         
//         )
//       }


// ------------
// continuw Nested Route 
// Then add another set of NavLink within Products Component . Then create to component one for NewProducts and one for FeatureProducts. 
// After that create nested Route for NewProducts and FeatureProducts to put them between Parent Route which is Products Route and make it open tag and close tag and inside create Route for new and Feature. Then go to Products Component and add <Outlet/> and import it now when u click nested route new or Feature it will show u what inside them. 
// import { BrowserRouter, Route, Router,Link,Switch, Routes,NavLink, useNavigate, Outlet } from "react-router-dom"
// function App(){
//        return(
//    <> 
//     <BrowserRouter> 
// <NavBar/>
  
//  <Routes>
//      <Route path="/" element={<Home/>}/>
//      <Route path="about" element={<About/>}/>
//      <Route path="order-summary" element={<OrderSummary/>}/>
//      <Route path="*" element={<NoMatch/>}/>
//      <Route path="products" element={<Products/>}>
//          <Route path="featured" element={<FeatureProducts/>}/>
//          <Route path="new" element={<NewProducts/>}/>
//      </Route>
//  </Routes>
//  </BrowserRouter>

// above in parent Route u can remove path just put element .. brcause in son Route u already have path. 

//  </>
//     )
//  }
//  export default App;
// function Home(){
//     const navigate=useNavigate()
//     return (
//         <div>
//             <h1>This is Home Page</h1>
//             <button onClick={()=>{navigate("order-summary",{replace:true})}}>Place Order</button>
//         </div>
//     )
// }


// const About = () => {
//   return (
//     <div>
//       <h1>This is About Page</h1>
//     </div>
//   )
// }
// function OrderSummary() {
//     const navigate=useNavigate()
//   return (
//     <div>
//       <h1>Order Confirmed !</h1>
//       <button onClick={()=>{navigate(-1)}}>Back</button>
//     </div>
//   )
// }

// const NoMatch = () => {
//   return (
//     <div>
//       <h1>Page not Found</h1>
//     </div>
//   )
// }

// function NavBar(){
//         return(
//             <>
//               <nav style={{backgroundColor:"aliceblue;", padding:"16px 32px",}}>
//         <NavLink  to="/" style={{margin:"16px"}} >Home</NavLink>
//         <NavLink to="/about" style={{margin:"16px"}}>About</NavLink>
//         <NavLink to="/products" style={{margin:"16px"}}>Products</NavLink>
//         </nav>
//             </>
//         )
//     }

//     const Products = () => {
//         return (
//           <div>
//            <div>
//            <input type="search" placeholder="Search Products"/>
//           </div>
//           <nav>
//             {/* Do not add slash in below and u can add style if u want */}
//             <Link to="featured" style={{margin:"20Px"}}>Feature</Link>
//             <Link to="new" style={{margin:"20Px"}}>New</Link>
//           </nav>
//           <Outlet/>
//           </div>
//         )
//       }
//       function NewProducts (){
//         return (
//             <div>
//                <h1>List of new Products</h1> 

//             </div>
//         )
//       }
//       function FeatureProducts (){
//         return (
//             <div>
//                <h1>List of Featured Products</h1> 
//             </div>
//         )
//       }
// ------------------
// Index Route 
// how to show child Route when Parent render for example u click Products and it what inside Feature. so if u show what in feature when u click Product the parent just Add another Route and inside add Index and in element add feature Component it means when u click on Products it show u the Feature stuff 
// import { BrowserRouter, Route, Router,Link,Switch, Routes,NavLink, useNavigate, Outlet } from "react-router-dom"
// function App(){
//        return(
//    <> 
//     <BrowserRouter> 
// <NavBar/>
  
//  <Routes>
//      <Route path="/" element={<Home/>}/>
//      <Route path="about" element={<About/>}/>
//      <Route path="order-summary" element={<OrderSummary/>}/>
//      <Route path="*" element={<NoMatch/>}/>
//      <Route path="products" element={<Products/>}>
//        <Route index element={<FeatureProducts/>}/>
//        <Route path="featured" element={<FeatureProducts/>}/>
//        <Route path="new" element={<NewProducts/>}/>
//      </Route>
//  </Routes>
//  </BrowserRouter>
 
//  </>
//     )
//  }
//  export default App;
// function Home(){
//     const navigate=useNavigate()
//     return (
//         <div>
//             <h1>This is Home Page</h1>
//             <button onClick={()=>{navigate("order-summary",{replace:true})}}>Place Order</button>
//         </div>
//     )
// }


// const About = () => {
//   return (
//     <div>
//       <h1>This is About Page</h1>
//     </div>
//   )
// }
// function OrderSummary() {
//     const navigate=useNavigate()
//   return (
//     <div>
//       <h1>Order Confirmed !</h1>
//       <button onClick={()=>{navigate(-1)}}>Back</button>
//     </div>
//   )
// }

// const NoMatch = () => {
//   return (
//     <div>
//       <h1>Page not Found</h1>
//     </div>
//   )
// }

// function NavBar(){
//         return(
//             <>
//               <nav style={{backgroundColor:"aliceblue;", padding:"16px 32px",}}>
//         <NavLink  to="/" style={{margin:"16px"}} >Home</NavLink>
//         <NavLink to="/about" style={{margin:"16px"}}>About</NavLink>
//         <NavLink to="/products" style={{margin:"16px"}}>Products</NavLink>
//         </nav>
//             </>
//         )
//     }

//     const Products = () => {
//         return (
//           <div>
//            <div>
//            <input type="search" placeholder="Search Products"/>
//           </div>
//           <nav>
//             {/* Do not add slash in below and u can add style if u want */}
//             <Link to="featured" style={{margin:"20Px"}}>Feature</Link>
//             <Link to="new" style={{margin:"20Px"}}>New</Link>
//           </nav>
//           <Outlet/>
//           </div>
//         )
//       }
//       function NewProducts (){
//         return (
//             <div>
//                <h1>List of new Products</h1> 

//             </div>
//         )
//       }
//       function FeatureProducts (){
//         return (
//             <div>
//                <h1>List of Featured Products</h1> 
//             </div>
//         )
//       }
//  -------------------------------
// Dynamic Router 
// first create a component named users inside add the h1 of user 1 ,2,3 then in App component add Route for it .. then create another component named usersDetail and add text and then add it to App component in Route and in path=users/:userId and element usersDetail. so when u add in url 1 or 2 or anything after users it show UsersDetail text. if we write admin it show UsersDetail content but if i create admin component and add it to App component then when i write after users /admin it show me Admin content if there is no Admin component then it show me UsersDetail component .. Also we can nested UsersDEtail and Admin in USers because its Parent then in Path we should remove Users just Write ":usersId" and in Admin we write in path"admin" no need to write users before because now its nested under Parent. But dont forget to go to Users Component and add outlet u have to import it if u r in seperate file if u make nested add outlet to Parent component 
// import { BrowserRouter, Route, Router,Link,Switch, Routes,NavLink, useNavigate, Outlet } from "react-router-dom"
// function App(){
//        return(
//    <> 
//     <BrowserRouter> 
// <NavBar/>

//  <Routes>
//      <Route path="/" element={<Home/>}/>
//      <Route path="about" element={<About/>}/>
//      <Route path="order-summary" element={<OrderSummary/>}/>
//      <Route path="*" element={<NoMatch/>}/>
//      <Route path="products" element={<Products/>}>
//        <Route index element={<FeatureProducts/>}/>
//        <Route path="featured" element={<FeatureProducts/>}/>
//        <Route path="new" element={<NewProducts/>}/>
//      </Route>
//      <Route path="users" element={<Users/>}/>
//      <Route path="users/:userID" element={<UsersDetail/>}/>
//      <Route path="users/admin" element={<Admin/>}/>

//  </Routes>
//  </BrowserRouter>
 
//  </>
//     )
//  }
//  export default App;
// function Home(){
//     const navigate=useNavigate()
//     return (
//         <div>
//             <h1>This is Home Page</h1>
//             <button onClick={()=>{navigate("order-summary",{replace:true})}}>Place Order</button>
//         </div>
//     )
// }


// const About = () => {
//   return (
//     <div>
//       <h1>This is About Page</h1>
//     </div>
//   )
// }
// function OrderSummary() {
//     const navigate=useNavigate()
//   return (
//     <div>
//       <h1>Order Confirmed !</h1>
//       <button onClick={()=>{navigate(-1)}}>Back</button>
//     </div>
//   )
// }

// const NoMatch = () => {
//   return (
//     <div>
//       <h1>Page not Found</h1>
//     </div>
//   )
// }

// function NavBar(){
//         return(
//             <>
//               <nav style={{backgroundColor:"aliceblue;", padding:"16px 32px",}}>
//         <NavLink  to="/" style={{margin:"16px"}} >Home</NavLink>
//         <NavLink to="/about" style={{margin:"16px"}}>About</NavLink>
//         <NavLink to="/products" style={{margin:"16px"}}>Products</NavLink>
//         </nav>
//             </>
//         )
//     }

//     const Products = () => {
//         return (
//           <div>
//            <div>
//            <input type="search" placeholder="Search Products"/>
//           </div>
//           <nav>
//             {/* Do not add slash in below and u can add style if u want */}
//             <Link to="featured" style={{margin:"20Px"}}>Feature</Link>
//             <Link to="new" style={{margin:"20Px"}}>New</Link>
//           </nav>
//           <Outlet/>
//           </div>
//         )
//       }
//       function NewProducts (){
//         return (
//             <div>
//                <h1>List of new Products</h1> 

//             </div>
//         )
//       }
//       function FeatureProducts (){
//         return (
//             <div>
//                <h1>List of Featured Products</h1> 
//             </div>
//         )
//       }


// const Users = () => {
//   return (
//     <div>
//       <h1>User 1</h1>
//       <h1>User 2</h1>
//       <h1>User 3</h1>
//     </div>
//   )
// }



// const UsersDetail = () => {
//   return (
//     <div>
//       <h1>User Detail </h1>
//     </div>
//   )
// }



// const Admin = () => {
//   return (
//     <div>
//       <h1>Admin Here</h1>
//     </div>
//   )
// }
// -----------------------------------
// URL Params 
// how to display userId from url in usersDetail Component .go to UsersDetail component and import useParams and invoke it in Component . and i put admin and userid in parent Route Users. now when u write /1 next to users will show number 1 

// import { BrowserRouter, Route, Router,Link,Switch, Routes,NavLink, useNavigate, Outlet,useParams } from "react-router-dom"
// function App(){
//        return(
//    <> 
//     <BrowserRouter> 
// <NavBar/>

//  <Routes>
//      <Route path="/" element={<Home/>}/>
//      <Route path="about" element={<About/>}/>
//      <Route path="order-summary" element={<OrderSummary/>}/>
//      <Route path="*" element={<NoMatch/>}/>
//      <Route path="products" element={<Products/>}>
//        <Route index element={<FeatureProducts/>}/>
//        <Route path="featured" element={<FeatureProducts/>}/>
//        <Route path="new" element={<NewProducts/>}/>
//      </Route>
//      <Route path="users" element={<Users/>}>
//         <Route path=":userId" element={<UsersDetail/>}/>
//         <Route path="admin" element={<Admin/>}/>
//      </Route>

//  </Routes>
//  </BrowserRouter>
 
//  </>
//     )
//  }
//  export default App;
// function Home(){
//     const navigate=useNavigate()
//     return (
//         <div>
//             <h1>This is Home Page</h1>
//             <button onClick={()=>{navigate("order-summary",{replace:true})}}>Place Order</button>
//         </div>
//     )
// }


// const About = () => {
//   return (
//     <div>
//       <h1>This is About Page</h1>
//     </div>
//   )
// }
// function OrderSummary() {
//     const navigate=useNavigate()
//   return (
//     <div>
//       <h1>Order Confirmed !</h1>
//       <button onClick={()=>{navigate(-1)}}>Back</button>
//     </div>
//   )
// }

// const NoMatch = () => {
//   return (
//     <div>
//       <h1>Page not Found</h1>
//     </div>
//   )
// }

// function NavBar(){
//         return(
//             <>
//               <nav style={{backgroundColor:"aliceblue;", padding:"16px 32px",}}>
//         <NavLink  to="/" style={{margin:"16px"}} >Home</NavLink>
//         <NavLink to="/about" style={{margin:"16px"}}>About</NavLink>
//         <NavLink to="/products" style={{margin:"16px"}}>Products</NavLink>
//         </nav>
//             </>
//         )
//     }

//     const Products = () => {
//         return (
//           <div>
//            <div>
//            <input type="search" placeholder="Search Products"/>
//           </div>
//           <nav>
//             {/* Do not add slash in below and u can add style if u want */}
//             <Link to="featured" style={{margin:"20Px"}}>Feature</Link>
//             <Link to="new" style={{margin:"20Px"}}>New</Link>
//           </nav>
//           <Outlet/>
//           </div>
//         )
//       }
//       function NewProducts (){
//         return (
//             <div>
//                <h1>List of new Products</h1> 

//             </div>
//         )
//       }
//       function FeatureProducts (){
//         return (
//             <div>
//                <h1>List of Featured Products</h1> 
//             </div>
//         )
//       }


// const Users = () => {
//   return (
//     <div>
//       <h1>User 1</h1>
//       <h1>User 2</h1>
//       <h1>User 3</h1>
//       <Outlet/>
//     </div>
//   )
// }



// const UsersDetail = () => {
//   const params=useParams()
//   // or u can write above const {userId}=useParams()
//   const userId=params.userId
//   return (
//     <div>
//       <h1>User Detail about {userId} </h1>
      
//     </div>
    
//   )
// }


// const Admin = () => {
//   return (
//     <div>
//       <h1>Admin Here</h1>
//     </div>
//   )
// }
// ------------------
// use Search Params in React router . (?filter=active) you can add search params in url ... 
// go to users component and add two button and import searchParams and add it in component ..also import useSearchParam hook... it behave similar to useState ... in button addd error button ...add in one filter active and in another button empy object..then go to user and check after u put url users/ at end click active user will show u on url and if u click reset filter will not show u ...
// then will make if its active will display of not acive will not by adding variable with boleen and add get to it . then add jsx with curly bracket below button .now if u click on active button text will show active users if u click filter button will show all users ...
// import { BrowserRouter, Route, Router,Link,Switch, Routes,NavLink, useNavigate, Outlet,useParams,useSearchParams } from "react-router-dom"
// function App(){
//        return(
//    <> 
//     <BrowserRouter> 
// <NavBar/>

//  <Routes>
//      <Route path="/" element={<Home/>}/>
//      <Route path="about" element={<About/>}/>
//      <Route path="order-summary" element={<OrderSummary/>}/>
//      <Route path="*" element={<NoMatch/>}/>
//      <Route path="products" element={<Products/>}>
//        <Route index element={<FeatureProducts/>}/>
//        <Route path="featured" element={<FeatureProducts/>}/>
//        <Route path="new" element={<NewProducts/>}/>
//      </Route>
//      <Route path="users" element={<Users/>}>
//         <Route path=":userId" element={<UsersDetail/>}/>
//         <Route path="admin" element={<Admin/>}/>
//      </Route>

//  </Routes>
//  </BrowserRouter>
 
//  </>
//     )
//  }
//  export default App;
// function Home(){
//     const navigate=useNavigate()
//     return (
//         <div>
//             <h1>This is Home Page</h1>
//             <button onClick={()=>{navigate("order-summary",{replace:true})}}>Place Order</button>
//         </div>
//     )
// }


// const About = () => {
//   return (
//     <div>
//       <h1>This is About Page</h1>
//     </div>
//   )
// }
// function OrderSummary() {
//     const navigate=useNavigate()
//   return (
//     <div>
//       <h1>Order Confirmed !</h1>
//       <button onClick={()=>{navigate(-1)}}>Back</button>
//     </div>
//   )
// }

// const NoMatch = () => {
//   return (
//     <div>
//       <h1>Page not Found</h1>
//     </div>
//   )
// }

// function NavBar(){
//         return(
//             <>
//               <nav style={{backgroundColor:"aliceblue;", padding:"16px 32px",}}>
//         <NavLink  to="/" style={{margin:"16px"}} >Home</NavLink>
//         <NavLink to="/about" style={{margin:"16px"}}>About</NavLink>
//         <NavLink to="/products" style={{margin:"16px"}}>Products</NavLink>
//         </nav>
//             </>
//         )
//     }

//     const Products = () => {
//         return (
//           <div>
//            <div>
//            <input type="search" placeholder="Search Products"/>
//           </div>
//           <nav>
//             {/* Do not add slash in below and u can add style if u want */}
//             <Link to="featured" style={{margin:"20Px"}}>Feature</Link>
//             <Link to="new" style={{margin:"20Px"}}>New</Link>
//           </nav>
//           <Outlet/>
//           </div>
//         )
//       }
//       function NewProducts (){
//         return (
//             <div>
//                <h1>List of new Products</h1> 

//             </div>
//         )
//       }
//       function FeatureProducts (){
//         return (
//             <div>
//                <h1>List of Featured Products</h1> 
//             </div>
//         )
//       }


// const Users = () => {
//   const[searchParams,SetSearchParams]=useSearchParams()
//   const showActiveUsers=searchParams.get("filter")==="active"
//   return (
//     <div>
//       <h1>User 1</h1>
//       <h1>User 2</h1>
//       <h1>User 3</h1>
//       <Outlet/>
//       <div>
//       <button onClick={()=>{SetSearchParams({filter:"active"})}}>Active Users</button>
//       <button onClick={()=>{SetSearchParams({})}}>Reset Filter</button>
//       </div>

//       {(showActiveUsers)?(<h2>Show Active users</h2>):(<h2>Showing all users</h2>)}

//     </div>
//   )
// }



// const UsersDetail = () => {
//   const params=useParams()
//   // or u can write above const {userId}=useParams()
//   const userId=params.userId
//   return (
//     <div>
//       <h1>User Detail about {userId} </h1>
      
//     </div>
    
//   )
// }

// const Admin = () => {
//   return (
//     <div>
//       <h1>Admin Here</h1>
//     </div>
//   )
// }
// ------------------------
// relative links in react router 
// relative link as in Products component there are two link one for new and another for feature and there is no / before new or feature of add slash it will show u breaking url means without slash show u (http://localhost:3000/products/new)if u add slash to new will show (http://localhost:3000/new) so if u add slash u should add /products/new then work otherwise it shows breaking url. but not its without slash it call relative links which is ok. this is just information about relative links ....
// import { BrowserRouter, Route, Router,Link,Switch, Routes,NavLink, useNavigate, Outlet,useParams,useSearchParams } from "react-router-dom"
// function App(){
//        return(
//    <> 
//     <BrowserRouter> 
// <NavBar/>

//  <Routes>
//      <Route path="/" element={<Home/>}/>
//      <Route path="about" element={<About/>}/>
//      <Route path="order-summary" element={<OrderSummary/>}/>
//      <Route path="*" element={<NoMatch/>}/>
//      <Route path="products" element={<Products/>}>
//        <Route index element={<FeatureProducts/>}/>
//        <Route path="featured" element={<FeatureProducts/>}/>
//        <Route path="new" element={<NewProducts/>}/>
//      </Route>
//      <Route path="users" element={<Users/>}>
//         <Route path=":userId" element={<UsersDetail/>}/>
//         <Route path="admin" element={<Admin/>}/>
//      </Route>

//  </Routes>
//  </BrowserRouter>
 
//  </>
//     )
//  }
//  export default App;
// function Home(){
//     const navigate=useNavigate()
//     return (
//         <div>
//             <h1>This is Home Page</h1>
//             <button onClick={()=>{navigate("order-summary",{replace:true})}}>Place Order</button>
//         </div>
//     )
// }


// const About = () => {
//   return (
//     <div>
//       <h1>This is About Page</h1>
//     </div>
//   )
// }
// function OrderSummary() {
//     const navigate=useNavigate()
//   return (
//     <div>
//       <h1>Order Confirmed !</h1>
//       <button onClick={()=>{navigate(-1)}}>Back</button>
//     </div>
//   )
// }

// const NoMatch = () => {
//   return (
//     <div>
//       <h1>Page not Found</h1>
//     </div>
//   )
// }

// function NavBar(){
//         return(
//             <>
//               <nav style={{backgroundColor:"aliceblue;", padding:"16px 32px",}}>
//         <NavLink  to="/" style={{margin:"16px"}} >Home</NavLink>
//         <NavLink to="/about" style={{margin:"16px"}}>About</NavLink>
//         <NavLink to="/products" style={{margin:"16px"}}>Products</NavLink>
//         </nav>
//             </>
//         )
//     }

//     const Products = () => {
//         return (
//           <div>
//            <div>
//            <input type="search" placeholder="Search Products"/>
//           </div>
//           <nav>
//             {/* Do not add slash in below and u can add style if u want */}
//             <Link to="featured" style={{margin:"20Px"}}>Feature</Link>
//             <Link to="new" style={{margin:"20Px"}}>New</Link>
//           </nav>
//           <Outlet/>
//           </div>
//         )
//       }
//       function NewProducts (){
//         return (
//             <div>
//                <h1>List of new Products</h1> 

//             </div>
//         )
//       }
//       function FeatureProducts (){
//         return (
//             <div>
//                <h1>List of Featured Products</h1> 
//             </div>
//         )
//       }


// const Users = () => {
//   const[searchParams,SetSearchParams]=useSearchParams()
//   const showActiveUsers=searchParams.get("filter")==="active"
//   return (
//     <div>
//       <h1>User 1</h1>
//       <h1>User 2</h1>
//       <h1>User 3</h1>
//       <Outlet/>
//       <div>
//       <button onClick={()=>{SetSearchParams({filter:"active"})}}>Active Users</button>
//       <button onClick={()=>{SetSearchParams({})}}>Reset Filter</button>
//       </div>

//       {(showActiveUsers)?(<h2>Show Active users</h2>):(<h2>Showing all users</h2>)}

//     </div>
//   )
// }

// const UsersDetail = () => {
//   const params=useParams()
//   // or u can write above const {userId}=useParams()
//   const userId=params.userId
//   return (
//     <div>
//       <h1>User Detail about {userId} </h1>
      
//     </div>
    
//   )
// }

// const Admin = () => {
//   return (
//     <div>
//       <h1>Admin Here</h1>
//     </div>
//   )
// }
// --------------------------------
// Lazy load in react router 
// hold off on loading any component until a user visits a certain path. it  lets you load react components lazily through code splitting without help from any additional libraries. Lazy loading is the technique of rendering only-needed or critical user interface items first, then quietly unrolling the non-critical items later. its about improving load time ... 
// check Codevolution lazy load video ... 

// -------------------------
// Authentication in react Router 
// authentication is a crucial aspect of any React application that requires user login functionality. It's like the bouncer at the club's entrance, ensuring that only authenticated users get to access certain parts of your app. In this post, we'll be exploring the nitty-gritty of React Router authentication.
// import { BrowserRouter, Route, Router,Link,Switch, Routes,NavLink, useNavigate, Outlet,useParams,useSearchParams } from "react-router-dom"
// function App(){
//        return(
//    <> 
//     <BrowserRouter> 
// <NavBar/>

//  <Routes>
//      <Route path="/" element={<Home/>}/>
//      <Route path="about" element={<About/>}/>
//      <Route path="order-summary" element={<OrderSummary/>}/>
//      <Route path="*" element={<NoMatch/>}/>
//      <Route path="products" element={<Products/>}>
//        <Route index element={<FeatureProducts/>}/>
//        <Route path="featured" element={<FeatureProducts/>}/>
//        <Route path="new" element={<NewProducts/>}/>
//      </Route>
//      <Route path="users" element={<Users/>}>
//         <Route path=":userId" element={<UsersDetail/>}/>
//         <Route path="admin" element={<Admin/>}/>
//      </Route>

//  </Routes>
//  </BrowserRouter>
 
//  </>
//     )
//  }
//  export default App;
// function Home(){
//     const navigate=useNavigate()
//     return (
//         <div>
//             <h1>This is Home Page</h1>
//             <button onClick={()=>{navigate("order-summary",{replace:true})}}>Place Order</button>
//         </div>
//     )
// }


// const About = () => {
//   return (
//     <div>
//       <h1>This is About Page</h1>
//     </div>
//   )
// }
// function OrderSummary() {
//     const navigate=useNavigate()
//   return (
//     <div>
//       <h1>Order Confirmed !</h1>
//       <button onClick={()=>{navigate(-1)}}>Back</button>
//     </div>
//   )
// }

// const NoMatch = () => {
//   return (
//     <div>
//       <h1>Page not Found</h1>
//     </div>
//   )
// }

// function NavBar(){
//         return(
//             <>
//               <nav style={{backgroundColor:"aliceblue;", padding:"16px 32px",}}>
//         <NavLink  to="/" style={{margin:"16px"}} >Home</NavLink>
//         <NavLink to="/about" style={{margin:"16px"}}>About</NavLink>
//         <NavLink to="/products" style={{margin:"16px"}}>Products</NavLink>
//         </nav>
//             </>
//         )
//     }

//     const Products = () => {
//         return (
//           <div>
//            <div>
//            <input type="search" placeholder="Search Products"/>
//           </div>
//           <nav>
//             {/* Do not add slash in below and u can add style if u want */}
//             <Link to="featured" style={{margin:"20Px"}}>Feature</Link>
//             <Link to="new" style={{margin:"20Px"}}>New</Link>
//           </nav>
//           <Outlet/>
//           </div>
//         )
//       }
//       function NewProducts (){
//         return (
//             <div>
//                <h1>List of new Products</h1> 

//             </div>
//         )
//       }
//       function FeatureProducts (){
//         return (
//             <div>
//                <h1>List of Featured Products</h1> 
//             </div>
//         )
//       }


// const Users = () => {
//   const[searchParams,SetSearchParams]=useSearchParams()
//   const showActiveUsers=searchParams.get("filter")==="active"
//   return (
//     <div>
//       <h1>User 1</h1>
//       <h1>User 2</h1>
//       <h1>User 3</h1>
//       <Outlet/>
//       <div>
//       <button onClick={()=>{SetSearchParams({filter:"active"})}}>Active Users</button>
//       <button onClick={()=>{SetSearchParams({})}}>Reset Filter</button>
//       </div>

//       {(showActiveUsers)?(<h2>Show Active users</h2>):(<h2>Showing all users</h2>)}

//     </div>
//   )
// }

// const UsersDetail = () => {
//   const params=useParams()
//   // or u can write above const {userId}=useParams()
//   const userId=params.userId
//   return (
//     <div>
//       <h1>User Detail about {userId} </h1>
      
//     </div>
    
//   )
// }

// const Admin = () => {
//   return (
//     <div>
//       <h1>Admin Here</h1>
//     </div>
//   )
// }





// // ------------------------------------------------------------------
// // Using the State Hook
// // https://www.youtube.com/watch?v=ZuJjZWHt-J8&list=PLZ45kwWUJ51bVyPFeU-oSOM4YRVCMUPYQ&index=13

// function App() {
//   const [Mohammad, SetMohammad] = useState(0);
//   SetMohammad(50);
//   // u can add to useState string or number or anything also u can write here consol.log(Mohammad) and it shows in console.log result is 0
//   console.log(Mohammad)
//   // it will print 50 in console.log but shows error and later we will study how to fix it . So SetMohammad if u put 50 or any number is gives value to Muhammad
//   return (
//     <>
//       <div className="App">
//         {Mohammad}
//         {SetMohammad}
//       </div>
//     </>
//   );
// }
// export default App;


// // Now we will make two buttons one make increase number the other make decrease number then add function to button icrease and decrease

// function App() {
//   const [Mohammad, SetMohammad] = useState(0);
//   return (
//     <>
//       <div className="App">
//       <button onClick={()=> SetMohammad(Mohammad+1)}>+</button>
//       <button onClick={()=> SetMohammad(Mohammad-1)}>-</button>
//       {Mohammad}
//       </div>
//     </>
//   );
// }
// export default App;


// // u can use above example by using fuction for increase and functuin for decrease

// function App() {
//   const [Mohammad, SetMohammad] = useState(0);
//   function plus() {
//     SetMohammad(Mohammad + 1);
//   }
//   function minus() {
//     SetMohammad(Mohammad - 1);
//   }
//   return (
//     <>
//       <div className="App">
//         <button onClick={plus}>+</button>
//         <button onClick={minus}>-</button>
//         {Mohammad}
//       </div>
//     </>
//   );
// }
// export default App;


// // -----------------------

// // useState from bro code min 1:40

// // https://www.youtube.com/watch?v=CgkZ7MvWUAA
// // we create state then add name to return in State component then create p and buttion in button create onClick and take outside function (updateName) amd add it to onClick. we can write it in OnClick as well ..
// // add age like name
// // then we add boolean and condotion to it

// function App() {
//   return (
//     <div className="App">
//       <State />
//     </div>
//   );
// }
// export default App;

// function State() {
//   const [name, SetName] = useState("Guest ");
//   const [age, SetAge] = useState(0);
//   const [isEmployee, SetIsEmployee] = useState(false);
//   function updateName() {
//     SetName("Ahmad");
//   }
//   function increaseAge() {
//     SetAge(age + 1);
//   }
//   function employeeStatus() {
//     SetIsEmployee(!isEmployee);

//     // u add (!) in above in useState if u write false or true when u click show yes another click show No if u remove (!) it will show exactly what u write in state if true show yes if false show No and not change when u click it so better write (!)
//   }
//   return (
//     <div>
//       <p> Name: {name}</p>
//       <button onClick={updateName}>Set Name</button>
//       <p> Name: {age}</p>
//       <button onClick={increaseAge}>Increase Age </button>
//       <p> is Employee: {isEmployee ? "Yes" : "No"}</p>
//       <button onClick={employeeStatus}>Employee Status </button>
//     </div>
//   );
// }



// -------------------------------------------------------------------

// // useState lesson Tarmeez

// // https://www.youtube.com/watch?v=uaCKeDbPagI&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=27

// // setName u can use to change the real name. name = AHamd, but setname u use it in fuction of buttonClick to change it in different name

// function App() {
//   const [name, setName] = useState("Ahmad");
//   function buttonClick() {
//     setName("Yarob");
//   }
//   return (
//     <>
//       <div className="App">
//         <button onClick={buttonClick}>click me </button>
//         <h1>{name}</h1>
//       </div>
//     </>
//   );
// }
// export default App;
// // if u want to click and give Ahmad and another click bring u Yarob as below loop if
 

// ------------------------------------------
// // useState how to change color of text
// // https://www.youtube.com/watch?v=qPkOr4fAxas&list=PL-h5aNeRKouETL-CIVsuCz59e5_vZhHk1&index=37
// // you can create useState and add red then create div in div add inline style u can change background color any color or put bgColor in style it shows state color. any color u put in state it will change the div background.

// function App() {
// const[bgColor,SetbgColor]=useState("red")
//   return (
//    <div>
//     <h2 style={{backgroundColor:bgColor}}>Project Name </h2>
//     <button className="btn btn-dark">click me</button>
//    </div>
//   );
// }
// export default App;

// // you can create variable and add it to state and can use it as change color

// let color="green";
// function App() {
//     const[bgColor,SetbgColor]=useState(color)
//       return (
//        <div>
//         <h2 style={{backgroundColor:bgColor}}>Project Name </h2>
//         <button className="btn btn-dark">click me</button>
//        </div>
//       );
//     }
//     export default App;
// // you can change color by adding onclick to button

// function App() {
//     const[bgColor,SetbgColor]=useState("red");
//     const onClick=()=>{
//         SetbgColor("cyan")
//     }
//       return (
//        <div>
//         <h2 className="text-center" style={{backgroundColor:bgColor}}>Project Name </h2>
//         <button className="btn btn-dark" onClick={onClick}>click me</button>
//        </div>
//       );
//     }
//     export default App;

// // also u can change Text. use text in useState as default text and create new useState for changing text and create function and add it to text. also add {text} in h2 so u can see text in usestate in h2..

// // also create third usestate and add pink color. go to h2 style and add color:colors it means this is text color and (colors) is usestate name of pink color. then add it as setColors and change it to yellow when u click it will change to yellow..

// function App() {
//   const [bgColor, SetbgColor] = useState("red");
//   const [text, SetText] = useState("The Project is still not Finished");
//   const [colors, SetColors] = useState("pink");
//   const onClick = () => {
//     SetbgColor("cyan");
//     SetText("The project is Finished now");
//     SetColors("yellow");
//   };
//   return (
//     <div>
//       <h2
//         className="text-center"
//         style={{ backgroundColor: bgColor, color: colors }}
//       >
//         {text}{" "}
//       </h2>
//       <button className="btn btn-dark" onClick={onClick}>
//         click me
//       </button>
//     </div>
//   );
// }
// export default App;

 

// // you can add doubleClick on button so when u click one time it will change and double time it will come back to default. create variable and them to state then create onClick function and add set Color. it means when u click first time it will use onClick style and create doubleClick function and add all above variable name it means with double color it will come back to default style..


// let backColor = "red";
// let textInfo = "The Project is still not Finished";
// let textColor = "pink";
// function App() {
//   const [bgColor, SetbgColor] = useState(backColor);
//   const [text, SetText] = useState(textInfo);
//   const [colors, SetColors] = useState(textColor);

//   const onClick = () => {
//     SetbgColor("cyan");
//     SetText("The project is Finished now");
//     SetColors("yellow");
//   };

//   const doubleClick = () => {
//     SetbgColor(backColor);
//     SetText(textInfo);
//     SetColors(textColor);
//   };
//   return (
//     <div>
//       <h2
//         className="text-center"
//         style={{ backgroundColor: bgColor, color: colors }}
//       >
//         {text}
//       </h2>
//       <button
//         className="btn btn-dark"
//         onClick={onClick}
//         onDoubleClick={doubleClick}
//       >
//         click me
//       </button>
//     </div>
//   );
// }
// export default App;

// ----------------------------


// // second project to use text area min 11
// // https://www.youtube.com/watch?v=qPkOr4fAxas&list=PL-h5aNeRKouETL-CIVsuCz59e5_vZhHk1&index=37
// // create Text area and two button. also create useState .. add onClick on clear data button. and add in text area {textArea} so anything in useState will show in text area. but u can not clear data when u click clear data btn until u add onChange to text area and create function handleonChange and there u add e.target.value. also in text area add value{textArea}. now when u clear button to clear data it will work .. Also in useState u can keep empty data no need to add (enter the data)..
 

// function App() {
//   const [textArea, SetTextArea] = useState("enter the data");
//   const clearData = () => {
//     SetTextArea("");
//   };

//   const handleTextArea = (e) => {
//     SetTextArea(e.target.value);
//   };
//   return (
//     <div className="container  my-5">
//       <textarea
//         cols="30"
//         rows="10"
//         className="w-100"
//         value={textArea}
//         onChange={handleTextArea}
//       >
//         {textArea}
//       </textarea>
//       <button className="btn btn-dark my-4" onClick={clearData}>
//         Clear Data
//       </button>{" "}
//       <br />
//       <button className="btn btn-success my-3">Preview Data</button>
//     </div>
//   );
// }
// export default App;


// // here below we will show what ever u write in text area it will show below text area and we will create new usestate and create function in previous data and in function we will add textArea in SetPrev it means what u write in text area will show below when u click preview Data btn .. also add <p>prevData</p> between buttons here what u write in text area will show here as well when u click preview Data btn.
// // Then add new <p> amd add it {textArea.legnth} so what u write in text area will show the letter count also with space .
// // Then add new <p> to count word by adding {textArea.split(" ").legnth}.. make sure to make space between to quotes (" ")

// function App() {
//     const [textArea, SetTextArea] = useState("");
//     const [prevData, SetPrevData] = useState("");

//     const clearData = () => {
//       SetTextArea("");
//     };

//     const preDataHandle=()=>{
//         SetPrevData(textArea)
//     }

//     const handleTextArea = (e) => {
//       SetTextArea(e.target.value);
//     };
//     return (
//       <div className="container  my-3">
//         <textarea
//           cols="30"
//           rows="10"
//           className="w-100"
//           value={textArea}
//           onChange={handleTextArea}
//         >
//           {textArea}
//         </textarea>
//         <button className="btn btn-dark my-1" onClick={clearData}>
//           Clear Data
//         </button>{" "}
//         <br />
//         <p>{prevData}</p>
//         <button className="btn btn-success my-2" onClick={preDataHandle}>Preview Data</button>
//         <p className="text-danger">{textArea.length} Charactor are added in text area </p>
//         {/* here will count letters  */}
//         <p className="text-success">{textArea.split(" ").length} Word are added in Text Area </p>
//         {/* here will count words */}
//       </div>
//     );
//   }
//   export default App;


// project number
// how to put condition when u decrease number to zero and should not go below zero so u have to put condition

// function App() {
//   const [numbers, SetNumbers] = useState(0);
//   const incrementHandle = () => {
//     SetNumbers(numbers + 1);
//   };

//   const decrementHandle = () => {
//     if(numbers>0){
//       SetNumbers(numbers - 1);
//     }else{
//       SetNumbers(0);
//       alert("You have reached your limit ")
// // now when it reach zero will not go more below and u can add alert as well when u reach zero will show alert
//     }
//      };
//   return (
//     <>
//       <div className="container my-3">
//         <div className="text-center">
//           <h2 className="text-dark">{numbers}</h2>
//           <button className="btn btn-warning" onClick={incrementHandle}>
//             Increment
//           </button>
//           <button className="btn btn-primary" onClick={decrementHandle}>
//             Decrement
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
// export default App;


// --------------------------
// // // now digital clock project min 38
// // // https://www.youtube.com/watch?v=qPkOr4fAxas&list=PL-h5aNeRKouETL-CIVsuCz59e5_vZhHk1&index=37
// // create useState  [time,SetTime] and create h2 add {time}. create variable and add new Date().tolocaleTimesString(). it will show u the current time and add this variable in useState. create button add onclick. in onclick create function changeTime in change time create variable of newDate like above then add this variable to SetTime. now whenever u click btn it will show u current time. if u dont click time is not moving with click btn time is moving

// function App() {
//   let currentTime = new Date().toLocaleTimeString();
//   const [time, SetTime] = useState(currentTime);
//   function changeTime() {
//     let newTime = new Date().toLocaleTimeString();
//     SetTime(newTime);
//   }
//   return (
//     <>
//       <div className="container my-4">
//         <h2 className="text-dark text-center">{time}</h2>
//         <button className="btn btn-warning" onClick={changeTime}>
//           Click Here
//         </button>
//       </div>
//     </>
//   );
// }
// export default App;

// // // how to make time working without click btn is to add setInterval and remove button no need its working


// function App() {
//   let currentTime = new Date().toLocaleTimeString();
//   const [time, SetTime] = useState(currentTime);
//   function changeTime() {
//     let newTime = new Date().toLocaleTimeString();
//     SetTime(newTime);
//   }
//   setInterval(changeTime, 1000);
//   // with this time is working without click it there is not btn
//   return (
//     <>
//       <div className="container my-4">
//         <h2 className="text-dark text-center">{time}</h2>
//       </div>
//     </>
//   );
// }
// export default App;


// // // This project is when u click on btn it change the color of page make it dark mode. frist go to boostrap take first example code of jumbotron and past it and change class to className amd delete button below then create useState variable inside useState add default style in objace in array add color and background and take darkMode add it in div by adding style there

 
// function App() {
//   const [darkMode, SetDarkMode] = useState({
//     color: "white",
//     backgroundColor: "blue",
//   });

//   function ChangeColor() {
//     SetDarkMode({
//       color: "white",
//       backgroundColor: "black",
//     });
//   }
//   return (
//     <div className="container-fluid text-center">
//       <button className="btn btn-danger my-3" onClick={ChangeColor}>
//         Dark Mode
//       </button>
//       <div className="jumbotron" style={darkMode}>
//         <h1 className="display-4">Project 5</h1>
//         <p className="lead">
//           This is a simple hero unit, a simple jumbotron-style component for
//           calling extra attention to featured content or information.
//         </p>
//         <hr className="my-4" />
//         <p>
//           It uses utility classNamees for typography and spacing to space
//           content out within the larger container.
//         </p>
//       </div>
//     </div>
//   );
// }
// export default App;
 

// // Above when u click it change dark mode but u have to refresh page again to come to first mode so how can i use btn to come to first mode like first click change mode and second click return to same mode again by adding condition to onClick function .. u can create variable outside and add style then add it to useState or u can write style like above in useState ..

// let style11 = {color: "white",backgroundColor: "blue",}
// function App() {
//   const [darkMode, SetDarkMode] = useState(style11);

//   function ChangeColor() {
//     if (darkMode===style11){
//       SetDarkMode({
//         color: "white",
//         backgroundColor: "black",
//       });
//     } else{
//       SetDarkMode(style11)
//     }
//   }
//   return (
//     <div className="container-fluid text-center">
//       <button className="btn btn-danger my-3" onClick={ChangeColor}>
//         Dark Mode
//       </button>
//       <div className="jumbotron" style={darkMode}>
//         <h1 className="display-4">Project 5</h1>
//         <p className="lead">
//           This is a simple hero unit, a simple jumbotron-style component for
//           calling extra attention to featured content or information.
//         </p>
//         <hr className="my-4" />
//         <p>
//           It uses utility classNamees for typography and spacing to space
//           content out within the larger container.
//         </p>
//       </div>
//     </div>
//   );
// }
// export default App;


// / --------------------------
// // https://www.youtube.com/watch?v=9EcYLQcm6KA&list=PL-h5aNeRKouETL-CIVsuCz59e5_vZhHk1&index=38
// // https://www.youtube.com/watch?v=ccsOoKgzg34&list=PL-h5aNeRKouETL-CIVsuCz59e5_vZhHk1&index=39
// //  we will create api and add data to state and create map add state to map mean document in state add it to map then it will work

 

// function App() {
//   const data = [
//     {
//       id: 1,
//       name: "Ahmad",
//       titleData: "Python",
//     },
//     {
//       id: 2,
//       name: "Abdul",
//       titleData: "HTML",
//     },
//     {
//       id: 3,
//       name: "Ali",
//       titleData: "Javasctipy",
//     },
//   ];

//   const [document, SetDocument] = useState(data);
//   const clickHandle = () => {
//     SetDocument([
//       {
//         id: 4,
//         name: "Kaka",
//         titleData: "ACDL",
//       },
//     ]);
//   };
 

//   return (
//     <div>
//       {document.map((values) => {
//         return (
//           <div>
//             <h2>{values.name}</h2>
//             <h2>{values.titleData}</h2>
//           </div>
//         );
//       })}
//       <button onClick={clickHandle}>click me</button> <br/>

//     </div>
//   );
// }
// export default App;

 

// // for example if u want to add data and change data manually u will add to set up same array and change it in SetDocmebt

// function App() {
//   const [document, SetDocument] = useState(
//     {
//       name: "Ahmad",
//       titleData: "Python",
//     },
//     {
//       name: "Abdul",
//       titleData: "HTML",
//     }
//   );

//   const clickHandle = () => {
//     SetDocument(
//       {
//         name: "Khaled",
//         titleData: "PPPP",
//       },
//       {
//         name: "Jasim",
//         titleData: "HHHH",
//       }
//     );
//   };

//   return (
//     <div>
//       <h2>{document.name}</h2>
//       <h2>{document.titleData}</h2>
//       <button onClick={clickHandle}>Click me</button>
//     </div>
//   );
// }
// export default App;

 

// // The above we change the data by manual in setDocument but u can use spread operator . what is spread operator mean is to link to variable together

// // const data1=["Apple","Orange"];
// // const data2=["Yellow","Pink"];
// // const data3=[...data1,...data2]
// // console.log(data3)
// u can add anything in data3 but use coma like u can add [...data1,"banana",...data2]
// // result is Array(4) [ "Apple", "Orange", "Yellow", "Pink" ].
// // so above combine mean spread operator  so we will do it with useState



// function App() {

//   const [document, SetDocument] = useState(
//     {
//       name: "Ahmad",
//       titleData: "Python",
//       location:"Ca",
//     }
//   );

//   const clickHandle = () => {
//     SetDocument({...document,name:"Khalid"});
//   };

//   // now when u click btn it will change only name to Khalid if u put location will change location    SetDocument({...document,name:"Khalid", location:"NY"});

//   return (
//     <div>
//       <h2>{document.name}</h2>
//       <h2>{document.titleData}</h2>
//       <h2>{document.location}</h2>
//       <button onClick={clickHandle}>Click me</button>
//     </div>
//   );
// }
// export default App;

 
 // ---------------------


// // hindi ladi project with map video 48
// // https://www.youtube.com/watch?v=WgNhtTpvwgc&list=PL-h5aNeRKouETL-CIVsuCz59e5_vZhHk1&index=48
// // form Using useState in detail then after few videos show u the short cut in useState better we follow Tarmeez lesson its name but if u want how it works watch these videos
// // 1- https://www.youtube.com/watch?v=iAar7vpPMCo&list=PL-h5aNeRKouETL-CIVsuCz59e5_vZhHk1&index=40
// // 2-https://www.youtube.com/watch?v=s4mg4s10lJ8&list=PL-h5aNeRKouETL-CIVsuCz59e5_vZhHk1&index=41
// // 3-https://www.youtube.com/watch?v=fHyNkCzM3F0&list=PL-h5aNeRKouETL-CIVsuCz59e5_vZhHk1&index=42
// // 4-https://www.youtube.com/watch?v=FqdkqP9l3Fg&list=PL-h5aNeRKouETL-CIVsuCz59e5_vZhHk1&index=43

// // ----------------------------

// // https://www.youtube.com/watch?v=E8XtEW9VtAQ&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=28

// // Managing State with Input in React
// // How we will involve unput with react by using useState and will use onChange in component Myinput . React onChange is an event handler that triggers when there is any change in the input field.
// // after adding onChange in input u have to create function for example handChange function and there add alert and put this function in onChange curly braket so now when u write anything in input alet pops up.

 
// function Myinput() {
//   function handChange() {
//     alert("Hello");
//   }
//   return (
//     <div>
//       <label>Your Name</label>
//       <input onChange={handChange} />
//     </div>
//   );
// }


// function App() {
//   return (
//     <>
//       <div className="App">
//         <Myinput />
//       </div>
//     </>
//   );
// }
// export default App;
 

// // in input u can not write handChange() if u want to add this u have to make anynomos function as below then add two perenthesis

// function Myinput() {
//   function handChange() {
//     alert("Hello");
//   }
//   return (
//     <div>
//       <label>Your Name</label>
//       <input
//         onChange={() => {
//           handChange();
//         }}
//       />
//     </div>
//   );
// }
 

// function App() {
//   return (
//     <>
//       <div className="App">
//         <Myinput />
//       </div>
//     </>
//   );
// }
// export default App;

 
// // now we will add this component to useState and involve with react
// // import useState from react and add useState in component Myinput and add blank string and add in imput below (value=InputValue)


// function Myinput() {
//   const [inputValue,SetInputValue]=useState ("")
//   function handChange() {
//     // alert("Hello");
//   }
//   return (
//     <div>
//       <label>Your Name</label>
//       <input
//       value={inputValue}
//         onChange={() => {
//           handChange();
//         }}
//       />
//     </div>
//   );
// }
 

// function App() {
//   return (
//     <>
//       <div className="App">
//         <Myinput />
//       </div>
//     </>
//   );
// }
// export default App;
 

// // now here will add in parentheisi of handChange (event) and inside add  SetInputValue(event.target.value); go down in label onChange add handChamge also below it in curly braket add inputvalue .
// // now when go to console and click component and click myInput on write side u will see hooks anything now u will add to input in page it will show here. now u connect label with react by useState

// function Myinput() {
//   const [inputValue, SetInputValue] = useState("");
//   function handChange(event) {
//     SetInputValue(event.target.value);
//   }
//   return (
//     <div>
//       <label>Your Name</label>
//       <input onChange={handChange}/>
//       {inputValue}
//     </div>
//   );
// }

 
// function App() {
//   return (
//     <>
//       <div className="App">
//         <Myinput />
//       </div>
//     </>
//   );
// }
// export default App;


// // -------------------------------
// // bro code onChange min 2:00
// // https://www.youtube.com/watch?v=CgkZ7MvWUAA

// function App() {
//       return (
//         <>
//           <div className="App">
//             <MyComponent />
//           </div>
//         </>
//       );
//     }
//     export default App;
 

//     function MyComponent() {
//           const [name, SetName ] = useState("");
//           const [count, SetCount ] = useState(0);
//           const [comment, SetComment ] = useState("");
//           const [payment, SetPayment ] = useState("");
//           const [shipping, SetShipping  ] = useState("");
 

//           function handChange(event) {
//             SetName(event.target.value);
//           }

//           function countChange(event) {
//             SetCount(event.target.value);
//           }

//           function commentChange(event) {
//             SetComment(event.target.value);
//           }

//           function paymentChange(event) {
//             SetPayment(event.target.value);
//           }

//          function shippingChange(event) {
//             SetShipping(event.target.value);
//           }

 
//           return (
//             <div>
//               <input value={name} onChange={handChange}/>
//           <p>Name: {name}</p>
//               {/* when u write in input it shows infront of {name} */}

//               <input value={count} onChange={countChange} type="number"/>
//               <p>Count: {count}</p>

//               <textarea value={comment} onChange={commentChange} placeholder="Enter Delivery Instruction"/>

//               <p> Comment: {comment}</p>

//               <select value={payment} onChange={paymentChange}>
//                 <option value="">Selec an option</option>
//                 <option value="visa">Visa</option>
//                 <option value="debit card">debit card</option>
//                 <option value="apple pay">apple pay</option>
//               </select>
//               <p>Payment: {payment}</p>
//               {/* when u choose any option it show in above p next to Payment  */}

//               <label>
//                 <input type="radio" value="Pick Up" checked={shipping ==="Pick Up"} onChange={shippingChange}/> Pick Up
//               </label> <br/>
//               <label>
//                 <input type="radio" value="Delivery" checked={shipping ==="Delivery"} onChange={shippingChange}/> Delivery
//               </label>
//               <p>Shipping: {shipping}</p>
//             </div>
//           );
//         }
//         // above is short onchange lesson but in detail is with Tarmeez below
 


// -----------------------------
// // // Bro Code min 2:13
// // // color picker App
// // // create component add useState with with color then create div in return and inside div create title and create nested div and add style. if u using useState style u will add curly bracket to style. then create label and input. in input add in type color so it show u all colors and value is {color} which is useState first name default then add onchange so u can change color .

// import React ,{useState} from "react";
 
// function ColorPicker() {
//   const [color, SetColor] = useState("blue");
//   function changeColor(event) {
//     SetColor(event.target.value);
//   }
//   return (
//     <div className="colorPickerContainer">
//       <h1>Color Picker</h1>
//       <div className="colorDisplay" style={{ background: color }}>
//         <p>color: {color}</p>
//       </div>
//       <label>Select a color </label>
//       <input type="color" value={color} onChange={changeColor}></input>
//     </div>
//   );
// }

 
// function App() {
//   return (
//     <>
//       <div className="App">
//         <ColorPicker />
//       </div>
//     </>
//   );
// }
// export default App;

// ------------------------


// // Bro Code min 2:33 update object
// // we create useState add object then create div in return and add sentence also below we add input with type number and test and value is object of each one then add onChange and create SetCar. the best way is to create setCar with arrow function.

 // function App() {
//   return (
//     <>
//       <div className="App">
//         <MyComponent />
//       </div>
//     </>
//   );
// }
// export default App;

 
// function MyComponent() {
//   const [car, SetCar] = useState({
//     Year: 2024,
//     Make: "Ford",
//     Model: "Mustang",
//   });
//   function yearChange(event) {
//     // SetCar({ ...car, Year: event.target.value });
//     // but better use arrow function in SetCar as below
//     SetCar ((car)=>({ ...car, Year: event.target.value }));
//   }
//   function makeChange(event) {
//     // SetCar({ ...car, Make: event.target.value });
//     // but better use arrow function in SetCar as below
//     SetCar ((car)=>({ ...car, Make: event.target.value }));
//   }
//   function modelChange(event) {
//     // SetCar({ ...car, Model: event.target.value });
//     // but better use arrow function in SetCar as below
//     SetCar ((car)=>({ ...car, Model: event.target.value }));
//   } 

//   return (
//     <div>
//       <p>
//         My favourite car is {car.Make} and model is {car.Model} and year is{" "}
//         {car.Year}
//       </p>
//       <input type="number" value={car.Year} onChange={yearChange} />
//       <input type="test" value={car.Make} onChange={makeChange} />
//       <input type="test" value={car.Model} onChange={modelChange} />
//     </div>
//   );
// }
// // // --------------------------------

// // // bro code 3:01 Todo list App project

// // create useState and add array also create another useState blank. go to return and add title in h1 and create div to add input and button of add with input and add delete button with each list . and u have to create map inside add list with delete button.The delete button u will add onClick function with Index in paranthsis but in onClick create arrow function wath min 3:10.
// // when u add condtion to addTask it means when u click add even it blank it will add list but to create condition it will not add anything to list unless u add somwthing in input
// // moveTaskup and movetaskdown function we will use destruction

 
// function App() {
//   return (
//     <>
//       <div className="App">
//         <TodoList />
//       </div>
//     </>
//   );
// }
// export default App;

 
// function TodoList() {
//   const [task, SetTask] = useState([
//     "Eat breakfast",
//     "Take Shower",
//     "Walk a dog",
//   ]);
//   const [newTask, SetNewTask] = useState("");

//   function handleInputChange(event) {
//     SetNewTask(event.target.value);
//   }

//   function addTask() {
//     if (newTask.trim() !== "") {
//       SetTask((task) => [...task, newTask]);
//       SetNewTask("");
//     }
//   }

//   function deletaTask(index) {
//     const updateTask = task.filter((element, ind) => ind !== index);
//     SetTask(updateTask);
//   }

 
//   function moveTaskUp(index) {
//     if (index > 0) {
//       const updateTask = [...task];
//       [updateTask[index], updateTask[index - 1]] =
//       [updateTask[index - 1], updateTask[index]];
//       SetTask(updateTask);
//     }
//   }

//   function moveTaskDown(index) {
//     if (index< task.length-1){
//         const updateTask = [...task];
//       [updateTask[index], updateTask[index + 1]] =
//       [updateTask[index +1], updateTask[index]];
//       SetTask(updateTask);  
//     }
//   }
 

//   return (
//     <div className="todoList">
//       <h1>To-Do-List</h1>
//       <div>
//        <input
//           type="test"
//           placeholder="Enter Data"
//           value={newTask}
//           onChange={handleInputChange}
//         />
//         <button onClick={addTask}>Add</button>
//       </div>
//       <ol>
//         {task.map((ele, index) => {
//           return (
//             <li key={index}>
//               <span>{ele}</span>
//               <button onClick={() => deletaTask(index)}>Delete</button>
//               <button onClick={() => moveTaskUp(index)}>MoveTaskUp</button>
//               <button onClick={() => moveTaskDown(index)}>MoveTaskDown</button>
//             </li>
//           );
//         })}
//       </ol>
//     </div>
//   );
// }

// // ------------------------------------------------

// // State with Forms in React
// // https://www.youtube.com/watch?v=O5XukD0QleM&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=29
// // create new component and create inside form
// // then inside component create state for each input and add onchange
// // to click on submit it make like refresh rendering same page and not going to another page to make it work properly . add to form (onSubmit=(event)=>{event.preventDefault(); console.log(inputName,inputEmail)})

 
// function MyForm() {
//   // This is for name input
//   const [nameInput, SetNameInput] = useState("");
//   function inputName(event) {
//     SetNameInput(event.target.value);
//   }
//   // This is for email input
//   const [emailInput, setEmailInput] = useState("");
//   function inputEmail(event) {
//     setEmailInput(event.target.value);
//   }
 
//   return (
//     <form
//       onSubmit={(event)=>{
//         event.preventDefault();
//         console.log(nameInput,emailInput)
//       } } >
//       <label>Name</label>
//       <input onChange={inputName} />
//       <hr></hr>
//       <label>Email</label>
//       <input onChange={inputEmail} />
//       <hr></hr>
//       {/* u can use input self closing with adding type submit or button  */}
//       <button>Submit </button>
//     </form>
//   );
// }

// function App() {
//   return (
//     <>
//       <div className="App" style={{ padding: "200px" }}>
//         <MyForm />
//       </div>
//     </>
//   );
// }
// export default App;


// // The best way u will make above is to make all input in one state not make for each input different state. so u will create useState and add  {} curly braket which is means object then add name and email but value empty
// // also the continue of object is in link below same topic

// function MyForm() {
//   const [formInput, SetFormInput] = useState({ Name: "", Email: "" });
 
//   function formName(event) {
//     SetFormInput({ Name: event.target.value });
//   }

//   function formEmail(event) {
//     SetFormInput({ Email: event.target.value });
//   }

//   return (
//     <form
//       onSubmit={(event) => {
//         event.preventDefault();
//         console.log(formInput);
//       }}
//     >
//       <label>Name</label>
//       <input onChange={formName} />
//       <hr></hr>
//       <label>Email</label>
//       <input onChange={formEmail} />
//       <hr></hr>
//       {/* u can use input self closing with adding type submit or button  */}
//       <button>Submit </button>
//     </form>
//   );
// }

// function App() {
//   return (
//     <>
//       <div className="App" style={{ padding: "200px" }}>
//         <MyForm />
//       </div>
//     </>
//   );
// }
// export default App;

// // above when u go to inspect page to component when write in Name it shows name but not Email and vice Vira to show both u have to add to Email event add Name and vice versa . when u submit it shows in console as object
// // https://www.youtube.com/watch?v=xQVe6UdQ0Mo&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=30


// function MyForm() {
//   const [formInput, SetFormInput] = useState({ Name: "", Email: "" });
 
//   function formName(event) {
//     SetFormInput({ Name: event.target.value, Email:formInput.Email });
//   }

//   function formEmail(event) {
//     SetFormInput({ Email: event.target.value, Name:formInput.Name });
//   }

//   return (
//     <form
//       onSubmit={(event) => {
//         event.preventDefault();
//         console.log(formInput);
//       }}
//     >
//       <label>Name</label>
//       <input onChange={formName} />
//       <hr></hr>
//       <label>Email</label>
//        <input onChange={formEmail} />
//        <hr></hr>
//       <hr></hr>
//       {/* u can use input self closing with adding type submit or button  */}
//       <button>Submit </button>
//     </form>
//   );
// }

// function App() {
//   return (
//     <>
//       <div className="App" style={{ padding: "200px" }}>
//         <MyForm />
//       </div>
//     </>
//   );
// }
// export default App;

 
// // if u want to add new input u have to make copy of forminput by add three dots ... in email then take it to age and add age info because u can not make direct copy or use equal in state u have to take shallow copy from state and use it when u add Age input which is new input. u can do shallow copy in all function by adding ... forminput. and make as muxh function and add as much input below and it will works. no need to add in the Myform component to add age here .
// // so now u add all input in one state by using object, but add Age in useState as blank

// function MyForm() {
//   const [formInput, SetFormInput] = useState({ Name: "", Email: "",Age:"" });

//   function formName(event) {
//     SetFormInput({ ...formInput, Name: event.target.value });
//   }

//   function formEmail(event) {
//     SetFormInput({ ...formInput, Email: event.target.value });
//   }

//   function formAge(event) {
//     SetFormInput({ ...formInput, Age: event.target.value });
//   }

 //   return (
//     <form
//       onSubmit={(event) => {
//         event.preventDefault();
//         console.log(formInput);
//       }}
//     >
//       <label>Name</label>
//       <input onChange={formName} />
//       <hr></hr>
//       <label>Email</label>
//       <input onChange={formEmail} />
//       <hr></hr>
//       <hr></hr>
//       <label>Age</label>
//       <input onChange={formAge} />
//       <hr></hr>
//       {/* u can use input self closing with adding type submit or button  */}
//       <button>Submit </button>
//     </form>
//   );
// }
 

// function App() {
//   return (
//     <>
//       <div className="App" style={{ padding: "200px" }}>
//         <MyForm />
//       </div>
//     </>
//   );
// }
// export default App;

//  ---------------

 
// // how to connect text area with state and add it to above form and add textarea to form
// // https://www.youtube.com/watch?v=e9jC-ksQNZs&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=31
// // first add GeneralInfo in useState
// // also how to add check box input. first add chekc input self close .. the better thing to link checkbox is with boolen . go to useState and add isStudent and value is false and take it and work with it . the best attribute to show u is this box check or not is (checked ) attribute and add to it {formInput.isStudent}  between curly bracket cuc paranthsis not working also make function for it like other and add it to onChange.
// // in function formCheck add if loop so if its true show on if false show off
// // in checkbox use checked not value
// // or u can not write if loop and write ( SetFormInput ({...formInput,isStudent: event.target.checked})) it will work without loop if
 

// function MyForm() {
//   const [formInput, SetFormInput] = useState({
//     Name: "",
//     Email: "",
//     Age: "",
//     GeneralInfo: "",
//     isStudent: false,
//   });

//   function formName(event) {
//     SetFormInput({ ...formInput, Name: event.target.value });
//   }

//   function formEmail(event) {
//     SetFormInput({ ...formInput, Email: event.target.value });
//   }

//   function formAge(event) {
//     SetFormInput({ ...formInput, Age: event.target.value });
//   }

//   function formTextArea(event) {
//     SetFormInput({ ...formInput, GeneralInfo: event.target.value });
//   }

//   function formChecked(event) {
//     SetFormInput ({...formInput,isStudent: event.target.checked})
//     // or u can write as below but it shows error with me
//     // if (event.target.checked === "on") {
//     //   SetFormInput({ ...formInput, isStudent: true });
//     // } else {
//     //   SetFormInput({ ...formInput, isStudent: false });
//     // }
//   }

//   return (
//     <form
//       onSubmit={(event) => {
//         event.preventDefault();
//         console.log(formInput);
//       }}
//     >
//       <label>Name</label>
//       <input onChange={formName} />
//       <hr></hr>
//       <label>Email</label>
//       <input onChange={formEmail} />
//       <hr></hr>
//       <hr></hr>
//       <label>Age</label>
//       <input onChange={formAge} />
//       <hr></hr>
//       <label>Are you Student</label>
//       <input
//         type="checkbox"
//         checked={formInput.isStudent}
//         onChange={formChecked}
//       />
//       <hr></hr>
//       <label>General Info</label>
//       <textarea onChange={formTextArea}></textarea>
//       <hr></hr>
//       {/* u can use input self closing with adding type submit or button  */}
//       <button>Submit </button>
//     </form>
//   );
// }

// function App() {
//   return (
//     <>
//       <div className="App" style={{ padding: "200px" }}>
//         <MyForm />
//       </div>
//     </>
//   );
// }
// export default App;
 

// // Select & Radio Inputs with State
// // https://www.youtube.com/watch?v=Fzybs7igHJI&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=32
// // create select inside option and then add it to state and create fucntion for it and add function name in Select tag.
// // create radio by creating input type : radio, and create another radio but u have to select on of them so to connect them together we wwill put them in one div, now how can we use one of them by using checked. Add Status to state and create fucntion. Then in radio input add value this value will show when u select on page for ex value Student or Teacher also add name Status and add checked ={formInput.Status ==="add radio name here"} and add onChange


// function MyForm() {
//   const [formInput, SetFormInput] = useState({
//     Name: "",
//     Email: "",
//     Age: "",
//     GeneralInfo: "",
//     isStudent: false,
//     Country: "",
//     Status: "",
//   });

//   function formName(event) {
//     SetFormInput({ ...formInput, Name: event.target.value });
//   }
//   function formEmail(event) {
//     SetFormInput({ ...formInput, Email: event.target.value });
//   }
//   function formAge(event) {
//     SetFormInput({ ...formInput, Age: event.target.value });
//   }
//   function formTextArea(event) {
//     SetFormInput({ ...formInput, GeneralInfo: event.target.value });
//   }
//   function formChecked(event) {
//     SetFormInput({ ...formInput, isStudent: event.target.checked });
//     // or u can write as below but it shows error with me
//     // if (event.target.checked === "on") {
//     //   SetFormInput({ ...formInput, isStudent: true });
//     // } else {
//     //   SetFormInput({ ...formInput, isStudent: false });
//     // }
//   }
//   function formSelect(event) {
//     SetFormInput({ ...formInput, Country: event.target.value });
//   }
//   function formStatus(event) {
//     SetFormInput({ ...formInput, Status: event.target.value });
//   }
 
//   return (
//     <form
//       onSubmit={(event) => {
//         event.preventDefault();
//         console.log(formInput);
//       }}
//     >
//       <label>Name</label>
//       <input onChange={formName} />
//       <hr></hr>
//       <label>Email</label>
//       <input onChange={formEmail} />
//       <hr></hr>
//       <hr></hr>
//       <label>Age</label>
//       <input onChange={formAge} />
//       <hr></hr>
//       <label>Are you Student</label>
//       <input
//         type="checkbox"
//         checked={formInput.isStudent}
//         onChange={formChecked}
//       />
//       <hr></hr>
//       <select onChange={formSelect}>
//         <option></option>
//         <option>Qatar</option>
//         <option>USA</option>
//         <option>UK</option>
//       </select>
//       <hr></hr>
//       <div>
//         <input
//           type="radio"
//           value="Student"
//           name="Status"
//           checked={formInput.Status === "Student"}
//           onChange={formStatus}
//         />
//         Student
//         <input
//           type="radio"
//           value="Teacher"
//           name="Status"
//           checked={formInput.Status === "Teacher"}
//           onChange={formStatus}
//         />
//         Teacher
//       </div>
//       <hr></hr>
//       <hr></hr>
//       <label>General Info</label>
//       <textarea onChange={formTextArea}></textarea>
//       <hr></hr>
//       {/* u can use input self closing with adding type submit or button  */}
//       <button>Submit </button>
//     </form>
//   );
// }

// function App() {
//   return (
//     <>
//       <div className="App" style={{ padding: "200px" }}>
//         <MyForm />
//       </div>
//     </>
//   );
// }
// export default App;
// ----------------------------


// // Challange Project .. on the react website
// // https://react.dev/learn/updating-objects-in-state
// // https://www.youtube.com/watch?v=tQAQ22DaHEw&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=34
// // Using Arrays as State in the Component in React JS
// // https://www.youtube.com/watch?v=HS9ntQK1L9U&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=35
// // first create array then create another variable to use it element to show it on page by using map.
// // create input and button below so u can use it to add anything new to list so u have to use usestate creatw useState . Then create function for it and add it in input. add value to input and go to addInput function just add event.target.value ....
// // go to button and add onClick and create new function named addClick and then make new state add all devices in it why so we can use it to add new input u can not make mutation in usestate so u have to make copy of list and play with copy list. Now when u go to component in inspect page u will see two state there ... one state for text field and another for devices list ..
// // add to function addClick variable that make copy of state then add push then add SetDevices and add new Devices in it. like this we make copy of devices and then we add push to copy state ... u can mutation but mutation on state is not allowed ..
 

// function App() {
//   const [deviceInput, SetdeviceInput] = useState("");
//   const [devices, SetDevices] = useState(["iphone", "Mac", "Samsung", "Nokia"]);
 
//   const devicesList = devices.map((e) => {
//     return <li>{e}</li>;
//   });

//   function addInput(event) {
//     SetdeviceInput(event.target.value);
//   }

//   function addClick() {
//     // const newDevices = [...devices];
//     // newDevices.push(deviceInput);
//     // SetDevices(newDevices);
//     // the shortcut of above is below with bracket
//     SetDevices([...devices, deviceInput]);
//   }

//   return (
//     <>
//       <div className="App" style={{ padding: "200px" }}>
//         {devicesList}
//         <div>
//           <input value={deviceInput} type="text" onChange={addInput} />
//           <button onClick={addClick}>Add</button>
//         </div>
//       </div>
//     </>
//   );
// }
// export default App;


// -----------------------------

// // Edit and delete array from state
// // https://www.youtube.com/watch?v=2JnqwotmWlA&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=36
// // do delete any item add id to it and add button next to item.
// // adding id to item u have to convert list to object so add id and number and add name with item.
// // change {e}to {e.name}
// // add key to list so it make all list has key key{e.id}
// // now if u add new item it will add but shows error because id is not changing so u have to do something created new id key to each new item.
// // so u have to add object name and id to deviceInput in function AddClick. will add name but id u have to make new variable so u can use this variable for id and it will increase everytime u add new item. vaiable is nextId. add to it 5 so any item add to list will add one to it and id will change immediately


// let nextID = 5;
// function App() {
//   const [deviceInput, SetdeviceInput] = useState("");
//   const [devices, SetDevices] = useState([
//     {
//       id: 1,
//       name: "iphone",
//     },
//     { id: 2, name: "Mac" },
//     { id: 3, name: "Samsung" },
//     { id: 4, name: "Nokia" },
//   ]);

//   const devicesList = devices.map((e) => {
//     return (
//       <li key={e.id}>
//         {e.name} <button>delete</button>
//       </li>
//     );
//   });
 
//   function addInput(event) {
//     SetdeviceInput(event.target.value);
//   }
//   function addClick() {
//     // const newDevices = [...devices];
//     // newDevices.push(deviceInput);
//     // SetDevices(newDevices);
//     // the shortcut of above is below with bracket
//     SetDevices([...devices, { id: nextID, name: deviceInput }]);
//     nextID = nextID + 1;
//   }

//   return (
//     <>
//       <div className="App" style={{ padding: "200px" }}>
//         {devicesList}
//         <div>
//           <input value={deviceInput} type="text" onChange={addInput} />
//           <button onClick={addClick}>Add</button>
//         </div>
//       </div>
//     </>
//   );
// }
// export default App;


// // now how we can delete any item after we add id to each item
// // first add onclick to button in Map .. then create function deleteCick and add to paranthesis id. when u add to onClick this function write anynomous function.
// // in deleteClick  use filter

// let nextID = 5;
// function App() {
//   const [deviceInput, SetdeviceInput] = useState("");
//   const [devices, SetDevices] = useState([
//     {
//       id: 1,
//       name: "iphone",
//     },
//     { id: 2, name: "Mac" },
//     { id: 3, name: "Samsung" },
//     { id: 4, name: "Nokia" },
//   ]);
 
//   const devicesList = devices.map((e) => {
//     return (
//       <li key={e.id}>
//         {e.name}{" "}
//         <button
//           onClick={() => {
//             deleteClick(e.id);
//           }}
//         >
//           delete
//         </button>
//       </li>
//     );
//   });
 
//   function addInput(event) {
//     SetdeviceInput(event.target.value);
//   }
//   function addClick() {
//     const newDevices = [...devices];
//     newDevices.push(deviceInput);
//     SetDevices(newDevices);
//     // the shortcut of above is below with bracket
//     SetDevices([...devices, { id: nextID, name: deviceInput }]);
//     nextID = nextID + 1;
//   }

//   function deleteClick(id) {
//     const newDevices = devices.filter((e) => {
//       if (e.id === id) return false;
//       return true;
//       // or u can write shortcut as below
//       // return e.id !== id
//     });
//     SetDevices(newDevices);
//   }

//   return (
//     <>
//       <div className="App" style={{ padding: "200px" }}>
//         {devicesList}
//         <div>
//           <input value={deviceInput} type="text" onChange={addInput} />
//           <button onClick={addClick}>Add Here</button>
//         </div>
//       </div>
//     </>
//   );
// }
// export default App;



// // // --------------------------------
// // bro code update the state of array of object in object min 2:40
// // create myComponent and add 4 useState then create function of all then create three input and buttton. in input add type number and text and onChange add function. also add value as useState . in button add oncClick and add function of handleAddCar. in this function creat new variable and add object of year,make,model. then SetCars add arrow function new variable name which is newCar. below it u can reset the input .

 

// function App(){
//     return(
//         <div>
// <MyComponent/>
//         </div>
//     )
// }
// export default App;
 

// function MyComponent (){
//     const [cars,SetCars]=useState([]);
//     const [carsYears,SetCarsYears]=useState(new Date().getFullYear());
//     const [carsMake,SetCarsMake]=useState('');
//     const [carsModel,SetCarsModel]=useState('');

//     function handleAddCar(){
//         const newCar={year:carsYears, make:carsMake,model:carsModel}
//         SetCars((cars)=>[...cars,newCar])
//         // after u add info the input should be blank to reset so u have to add below
//         SetCarsYears(new Date().getFullYear())
//         SetCarsMake('')
//         SetCarsModel('')
//     }

//     function handleYearChange(event){
//         SetCarsYears(event.target.value)
//     }
 

//     function handleMakeChange (event){
//         SetCarsMake(event.target.value)
//     }

//     function handleModelChange(event){
//         SetCarsModel(event.target.value)
//     }

//     return (
//         <div>
//             <h2>List of Cars Objects</h2>
//             <ul>
// {cars.map((ele,index)=>{
//     return(
//         <li key={index}>
// {ele.make}{ele.model}{ele.year}
//         </li>
//     )
// })}
//             </ul>

//             <input type="number" value={carsYears} onChange={handleYearChange}/><br/>
//             <input type="text" value={carsMake} onChange={handleMakeChange} placeholder="Enter Car Make "/> <br/>
//             <input type="text" value={carsModel} onChange={handleModelChange} placeholder="Enter Car Model "/><br/>
//             <button onClick={handleAddCar}>Add Car</button>
//         </div>
//     )
// }

// // how to delete items by using filter i didnt mentioned it in this example but it showed in video min 2.55 bro code

// // ------------------------------
// // lesson video 38 Tarmeez
// // https://www.youtube.com/watch?v=IwUhL2k5lBo&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=38
// // add edit button next to delete button
// // go to deviceList map and there next to delete add button Edit. Then create function editClick. then add map in it also inside map create variable to make copy and in this variable we will be add 0 because when u click Edit but it will add 0 to each item .
// // make sure to make mutation to make copy of state and in map make sure to make copy of variable then work on it
// // at the end of this lesson there are tips what to avoid and when to use map and filter and how to make copy of state then work on it check last tips in this video

 

// let nextID = 5;
// function App() {
//   const [deviceInput, SetdeviceInput] = useState("");
//   const [devices, SetDevices] = useState([
//     {
//       id: 1,
//       name: "iphone",
//     },
//     { id: 2, name: "Mac" },
//     { id: 3, name: "Samsung" },
//     { id: 4, name: "Nokia" },
//   ]);

//   const devicesList = devices.map((e) => {
//     return (
//       <li key={e.id}>
//         {e.name}{" "}
//         <button
//           onClick={() => {
//             deleteClick(e.id);
//           }}
//         >
//           delete
//         </button>
//         <button
//           onClick={() => {
//             editClick(e.id);
//           }}
//         >
//           Edit
//         </button>
//       </li>
//     );
//   });

//   function addInput(event) {
//     SetdeviceInput(event.target.value);
//   }

//   function addClick() {
//     const newDevices = [...devices];
//     newDevices.push(deviceInput);
//     SetDevices(newDevices);
//     // the shortcut of above is below with bracket
//     SetDevices([...devices, { id: nextID, name: deviceInput }]);
//     nextID = nextID + 1;
//   }

//   function deleteClick(id) {
//     const newDevices = devices.filter((e) => {
//       if (e.id === id) return false;
//       return true;
//       // or u can write shortcut as below
//       // return e.id !== id
//     });
//     SetDevices(newDevices);
//   }

//   function editClick(id) {
//     const newDevices = devices.map((e) => {
//       if (e.id === id) {
//         let newBody = { ...e, name: e.name + "0" };
//         return newBody;
//       } else return e;
//     });
//     SetDevices(newDevices);
//   }

//   return (
//     <>
//       <div className="App" style={{ padding: "200px" }}>
//         {devicesList}
//         <div>
//           <input value={deviceInput} type="text" onChange={addInput} />
//           <button onClick={addClick}>Add</button>
//         </div>
//       </div>
//     </>
//   );
// }
// export default App;

 
// // This challange video 37 and 42 below
// // Edit Array challange
// // https://react.dev/learn/updating-arrays-in-state
// // https://www.youtube.com/watch?v=Be-EcE1HGMQ&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=37
// // solve the challange
// // https://www.youtube.com/watch?v=u3QUWQ9SR7s&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=42
 


// -------------------------------
// // tarmeez video 40
// // https://www.youtube.com/watch?v=YBcpuSw2puE&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=40
// // update State

// // create use state and add it in App. when u check page is shows zero. now how can we control count and when we press it increase number by adding button and then add to button onclick inside add function. how to update the count by adding another SetCound but inside it function and return c + 1. so first SetCount should be count + 1 the second one should be SetCound but add function to it . add c in paranthesis and use it in return + 1.

// // now u will press button and it will count 2 4 6 8 ect .. as it count one tume with fitst setcount and second one is update one so it will count two.

 

// function App() {
//   const [count, SetCount] = useState(0);

//   function plusBtn() {
//     SetCount(count + 1);
//     SetCount((c) => {
//       return c + 1;
//     });
//   }

//   return (
//     <>
//       <h1>The count is: {count}</h1>
//       <button onClick={plusBtn}>+</button>
//     </>
//   );
// }
// export default App;
// --------------------------------
// this is test project 

// import React,{useState,createContext} from "react";
// import {Model} from "./component/test";
// import {Noor,Label,Phone,Age} from "./component/test"

// export let contextLabel=createContext({value:"",change:"",label:""})
// export let contextPhone=createContext({v:"",c:"",label:""})
// function App (){
//     let title="AAAbdul";
//     const[error,SetError]=useState(null)
//     const [showModel,SetShowModel]=useState(false)
//     const[loanInputs,SetLoanInputs]=useState({
//         name:"",
//         phone:"",
//         age:"",
//         isEmployee:"",
//         salaryRange:"",

//     })
// // function nameChange(event){
// //     SetLoanInputs({...loanInputs,name:event.target.value})
// // }
// // function phoneChange(event){
// //     SetLoanInputs({...loanInputs,phone:event.target.value})
// // }
// // function ageChange(event){
// //     SetLoanInputs({...loanInputs,age:event.target.value})
// // }
// function employeeChange(event){
//     SetLoanInputs({...loanInputs,isEmployee:event.target.checked})
// }
// function salaryChange(event){
//     SetLoanInputs({...loanInputs,salaryRange:event.target.value})
// }

// const btnDisable=loanInputs.name ==="" || loanInputs.age==="" || loanInputs.phone==="";

// const btnStyle1={marginTop:"20px",border:"none",fontSize:"20px",padding:"10px",
// borderRadius:"5px",backgroundColor:"red",color:"white"};

// const btnStyle2={backgroundColor:"yellow important",color:"red "};

// function btnClass(){
//     if (btnDisable){
//         return btnStyle2
//     }else{
//         return btnStyle1
//     }
// }


// function handleFormSubmit(e){
//     e.preventDefault()
//     SetError(null)
//     const {age,phone}=loanInputs
//     if (age<18 || age>50){
//         SetError("the age is not correct")
//     } else if 
//      (phone.length<10 || phone.length >12){
//         SetError("the phone is not correct")
     
//     }
//     SetShowModel(true)
//     }
    
//     function changeInputChildName(e){
//         SetLoanInputs({...loanInputs,name:e})
//     }
//     function ChangeInputChildPhone(e){
//         SetLoanInputs({...loanInputs,phone:e})
//     }
//     function ChangeInputChildAge(value){
//         SetLoanInputs({...loanInputs,age:value})
//     }

// function removeClick(){
//     if (showModel){
//          SetShowModel(false) 
//     }
// } 

//   return (
//     <div onClick={removeClick} >
//     <form>
//         <h1>Loan form</h1>

// <contextLabel.Provider value={{value:loanInputs.name,
//      change:changeInputChildName,
//      labelTitle:"Name"}}>
//     <Label />
// </contextLabel.Provider>
//                 {/* <label>Name:</label>
//         <input value={loanInputs.name} onChange={nameChange}/>
//         <br/> */}

// <contextPhone.Provider value={{v:loanInputs.phone, c:ChangeInputChildPhone,label:"Phone"}}>
//     <Phone/>
// </contextPhone.Provider>
// {/* 
//         <Phone value={loanInputs.phone} changePhone={ChangeInputChildPhone} inputName="Phone " /> */}
//         {/* <label>phone:</label>
//         <input value={loanInputs.phone} onChange={phoneChange}/> */}
//         {/* <br/> */}


//         <Age value={loanInputs.age} changeAge={ChangeInputChildAge} inputName="Age"/>
//         {/* <label>Age:</label>
//         <input value={loanInputs.age} onChange={ageChange}/>
//         <br/> */}
//         <label>isEmployee:</label>
//         <input type="checkbox" checked={loanInputs.isEmployee} onChange={employeeChange}/>
//         <br/>
//         <label>salary</label>
//         <select value={loanInputs.salaryRange} onChange={salaryChange}>
//             <option></option>
//             <option>500</option>
//             <option>600</option>
//             <option>1000</option>
//         </select>
//         <br/>
//         <button style={btnClass()} disabled={btnDisable} onClick={handleFormSubmit}>Submit</button>

//     </form>
//             <Model errorMsg={error} isVisible={showModel}/>
// <Noor title={title}/>
// </div>
// )
// } 
  
      

// export default App;


// // -------------------------------------------------------------
// // Lesson useEffect
// // https://www.youtube.com/watch?v=NmoAyeDAZzQ&list=PLZ45kwWUJ51bVyPFeU-oSOM4YRVCMUPYQ&index=14
// // // first add (useEffect in omport above with useState)
// // // below const add useEffect ( useEffect(() => {}, [])) and it works one time even u rend more time it works one time means if u press plus or minus it wont print many time it works one time example below it print test one time only in console
// // // However if want to print many time test by clicking + 0r - u have to remove bracker in useEffect such us ( useEffect(() => {console.log("test"); }, );). means remove array and it will work many time when u click plus or minus

 

// function App() {

//   const [Mohammad, SetMohammad] = useState(0);

//   useEffect(() => {

//     console.log("test");

//   });

 

//   function plus() {

//     SetMohammad(Mohammad + 1);

//   }

//   function minus() {

//     SetMohammad(Mohammad - 1);

//   }

 

//   return (

//     <>

//       <div className="App">

//         <button onClick={plus}>+</button>

//         <button onClick={minus}>-</button>

//         {Mohammad}

//       </div>

//     </>

//   );

// }

// export default App;

 

// // in useEffect if u add Mohammad in bracket it means when u press plus it will increase number and useEfect in console will increase as well

 

// function App() {

//   const [Mohammad, SetMohammad] = useState(0);

//   useEffect(() => {

//     console.log("test");

//   },[Mohammad]);

 

//   function plus() {

//     SetMohammad(Mohammad + 1);

//   }

//   function minus() {

//     SetMohammad(Mohammad - 1);

//   }

 

//   return (

//     <>

//       <div className="App">

//         <button onClick={plus}>+</button>

//         <button onClick={minus}>-</button>

//         {Mohammad}

//       </div>

//     </>

//   );

// }

// export default App;

 

// // lets create new useState with two button below and see how it works when we render page and click plus and minus

// // below if u add Bracker empty it shows one time test in console log but if u remove bracket i useEffect when u click any button it shows test printing

// // However if u add x in bracket of useEffect it print in console when press only button that use for x only

 

// function App() {

//   const [Mohammad, SetMohammad] = useState(0);

//   const [x, Setx] = useState(0);

 

//   useEffect(() => {

//     console.log("test");

//   },[x] );

 

//   function plus() {

//     SetMohammad(Mohammad + 1);

//   }

//   function minus() {

//     SetMohammad(Mohammad - 1);

//   }

 

//   return (

//     <>

//       <div className="App">

//         <button onClick={plus}>+</button>

//         <button onClick={minus}>-</button>

//         <button onClick={() => Setx(x + 3)}>+</button>

//         <button onClick={() => Setx(x - 3)}>-</button>

//         {Mohammad}

//         {x}

//       </div>

//     </>

//   );

// }

// export default App;

 

// // -------------------------------------------------------------

// // // useEffect bro Code min 3:24
// // // if u using useEffect u have to import it from library
// // // create useState add zero and go down add useState to p tag and create button and add onclick to button and add function to onClick. Then use useEffect and add document.title=count. it means when u click add button the number will change also title name page name will change it will shows count number on title as well. if u put bracket in useEffect it will show on title zero but once when it render but when u click add button number will change in count but in title it wont change it will still written zero because u add empty bracket in useEffect.

// // // watch bro code video what he wrote on the top. when u dont add braket it runs every every re-render. when u add braket it runs only on mount, when u add value to braket it run only on mount and when values change .

 

// function MyComponent(){

//     const [count,SetCount]=useState(0);

 

// useEffect(()=>{

//     document.title=count;

//     // if u write anything in above in place of count it will show in title once and will not change when u press add button everytime because u add braket or braket with value

// },[count])

 

//     function addCount(){

//         SetCount(count=> count+1)

//     }

//     function substratCount(){

//         SetCount(count=> count-1)

//     }

 

//     return (

//         <div>

//         <p>Count : {count}</p>

//         <button onClick={addCount}>Add</button>

//         <button onClick={substratCount}>Substract</button>

 

//         </div>

//     )

// }

 

// function App() {

//   return (

//     <>

//     <MyComponent/>

//     </>

//   );

// }

// export default App;

// // -----------------------
// // above example we have one value which is count we can add another value for example a color. below we add another value to document.title is color also in braket we add colors. we created button as change color and add onCluck function. in changecolor function we add condition so when click one time show red on title and another click show green written on title. but when u click count add or subtract only change count without anthing in title.

// function MyComponent() {

//   const [count, SetCount] = useState(0);

//   const [colors, SetColor] = useState("green");

 

//   useEffect(() => {

//     document.title = (count,colors);

//   }, [count,colors]);

 

//   function addCount() {

//     SetCount((count) => count + 1);

//   }

//   function substratCount() {

//     SetCount((count) => count - 1);

//   }

//   function ChangeColor() {

//     SetColor((colors) => (colors === "green" ? "red" : "green"));

//   }

 

//   return (

//     <div>

//       <p style={{color:colors}}>Count : {count}</p>

//       <button onClick={addCount}>Add</button>

//       <button onClick={substratCount}>Substract</button> <br />

//       <button onClick={ChangeColor}>Change Color</button>

//     </div>

//   );

// }

 

// function App() {

//   return (

//     <>

//       <MyComponent />

//     </>

//   );

// }

// export default App;

// ---------------------------

// // there is another example with bro code for use effect i didnt mentioed here

 

// // // // -------------------------------------------------------------
// // useEffect with hindi laddy
// // https://www.youtube.com/watch?v=WgNhtTpvwgc&list=PL-h5aNeRKouETL-CIVsuCz59e5_vZhHk1&index=48
// // below create useState and create p add count and add button also add onclick to button.. add useEffect and when u click it shows on title msg and below in page if u add braket it wont show on title page any msg when u re render it shouw only on page when u click .

 

// function MyComponent(){

//     const [count,SetCount]=useState(0);

//     useEffect(()=>{

//         document.title=`You have ${count} messages`

//     })

 

//     function CheckCount(){

//         SetCount(count=>count+1)

//     }

// return(

//     <div>

//         <p>Number of Messeges {count}  </p>

//         <button onClick={CheckCount}>Click Here</button>

//     </div>

// )

// }

 

// function App() {

//   return (

//     <>

//       <MyComponent />

//     </>

//   );

// }

// export default App;

 

// // ----------------------------------------
// // digital project using useState and useEffect from bro Code min 3:44
// // create  use state and add new Date(). then create useEffect and add variable and create interval method. and return it with clearinterval. Then create timeFormat function and add variable of hours, minutes and seconds and meridiem means pm or am . and return it hours, minutes, seconds and meridiem. it will work but the number will show single mean if it is 7 it shows one single digit not 07. if u want to digit number u have to create another function like padZero and in parenthsisi add number and create condition and then add padZero to formatTime function in return to hours and minutes and seconds . now it will show two digit numbers .

 

// function App() {

//   return (

//     <>

//       <DigitalClock />

//     </>

//   );

// }

// export default App;

 

// function DigitalClock(){

//     const [time,SetTime]=useState(new Date());

//     useEffect(()=>{

//         const interval =setInterval(()=>{

//             SetTime(new Date())

//         },1000)

//         return (()=>{

//             clearInterval(interval)

//         })

 

//     },[])

 

//     function formatTime(){

//         let hours = time.getHours();

//         const minutes= time.getMinutes();

//         const seconds=time.getSeconds();

//         const meridiem= hours >=12? "PM":"AM";

//         hours=hours %12 || 12;

 

//         return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}${meridiem}`

 

//     }

 

//     function padZero(number){

//         return (number < 10? "0" : "") + number

//     }

 

//     return (

//         <div className="container">

//         <div className="clock">

//             <span>{formatTime()}</span>

//         </div>

 

//         </div>

//     )

// }

 

 

 

// // // -------------------------------------------------------------
// // Lesson React useRef Hook
// // https://www.youtube.com/watch?v=7se0s-ChJcU&list=PLZ45kwWUJ51bVyPFeU-oSOM4YRVCMUPYQ&index=15
// // useRef is a React Hook that lets you reference a value that’s not needed for rendering.
// // Call useRef at the top level of your component to declare a ref.(import { useRef } from 'react':)
// // initialValue: The value you want the ref object’s current property to be initially. It can be a value of any type. This argument is ignored after the initial render.
// // Returns
// // useRef returns an object with a single property:
// // current: Initially, it’s set to the initialValue you have passed. You can later set it to something else. If you pass the ref object to React as a ref attribute to a JSX node, React will set its current property.

 

// // Below how can we focus on input when page reload first we will add input self closing then create (const r= useRef(null);) then take r u can put it any where lets put it in input by (ref={r}) then add r.current.focus() to useEffect so now when u reload page it focus on input

// function App() {

//   const [Mohammad, SetMohammad] = useState(0);

//   const [x, Setx] = useState(0);

//   const r = useRef(null);

 

//   useEffect(() => {

//     r.current.focus();

//   }, []);

 

//   function plus() {

//     SetMohammad(Mohammad + 1);

//   }

//   function minus() {

//     SetMohammad(Mohammad - 1);

//   }

 

//   return (

//     <>

//       <div className="App">

//         <button onClick={plus}>+</button>

//         <button onClick={minus}>-</button>

//         <button onClick={() => Setx(x + 3)}>+</button>

//         <button onClick={() => Setx(x - 3)}>-</button>

//         {Mohammad}

//         {x}

//         <br />

//         <br />

//         <input ref={r} />

//       </div>

//     </>

//   );

// }

// export default App;

 

// // You can use ref in button in any place lets use it in button below. take reg from input put it in button then go to useEffect and instead of focus put click AND with each rendering mean loading it will click

 

// function App() {

//   const [Mohammad, SetMohammad] = useState(0);

//   const [x, Setx] = useState(0);

//   const r = useRef(null);

 

//   useEffect(() => {

//     r.current.click();

//   }, []);

 

//   function plus() {

//     SetMohammad(Mohammad + 1);

//   }

//   function minus() {

//     SetMohammad(Mohammad - 1);

//   }

 

//   return (

//     <>

//       <div className="App">

//         <button ref={r} onClick={plus}>+</button>

//         <button onClick={minus}>-</button>

//         <button onClick={() => Setx(x + 3)}>+</button>

//         <button onClick={() => Setx(x - 3)}>-</button>

//         {Mohammad}

//         {x}

//         <br />

//         <br />

//         <input  />

//       </div>

//     </>

//   );

// }

// export default App;

 

// // if u want to add x in useEffect it will work for x only

// function App() {

//   const [Mohammad, SetMohammad] = useState(0);

//   const [x, Setx] = useState(0);

//   const r = useRef(null);

 

//   useEffect(() => {

//     r.current.click();

//   }, [x]);

 

//   function plus() {

//     SetMohammad(Mohammad + 1);

//   }

//   function minus() {

//     SetMohammad(Mohammad - 1);

//   }

 

//   return (

//     <>

//       <div className="App">

//         <button ref={r} onClick={plus}>+</button>

//         <button onClick={minus}>-</button>

//         <button onClick={() => Setx(x + 3)}>+</button>

//         <button onClick={() => Setx(x - 3)}>-</button>

//         {Mohammad}

//         {x}

//         <br />

//         <br />

//         <input  />

//       </div>

//     </>

//   );

// }

// export default App;

 

// // ------------------------------------------------------------

// // lesson useContext
// // https://www.youtube.com/watch?v=d923SmVS3L8&list=PLZ45kwWUJ51bVyPFeU-oSOM4YRVCMUPYQ&index=16
// // useContext is a React Hook that lets you read and subscribe to context from your component.
// // Contexts provide the way to pass data through componenct tree without having to pass props down manually at every level
// // 1- https://www.youtube.com/watch?v=CI7EYWmRDJE
// // 2- https://www.youtube.com/watch?v=tEqNSOhCHLU
 

// // first : Call useContext at the top level of your component to read and subscribe to context. (import { useContext } from 'react';)
// // Below you will create variable and create context and then this Middle add it to App componend and add provider and value. now if u want to send this to any varaible like send to One go there and add Middle

// const Middle = createContext();
// function App() {
//   return (
//     <>
//       <div className="App">
//         <Middle.Provider value="Makarona">
//           <Main />
//         </Middle.Provider>
//       </div>
//     </>
//   );
// }
// export default App;

// const Main = () => {
//   return <One />;
// };

// const One = () => {
//   return <Two />;
// };

// const Two = () => {
//   return (
//     <Middle.Consumer>
//       {(e) => {
//         return <h1>{e}</h1>;
//       }}
//     </Middle.Consumer>
//   );
// };

// ---------------------
// // https://www.youtube.com/watch?v=Mzp5B6Xkkgk&list=PL-h5aNeRKouETL-CIVsuCz59e5_vZhHk1&index=45
// // this is same above from parent to anysone by context api .. if i want to add more contect we have to create another context and add it inside provider in App and go to son component and add it inside first context consumer the one we did before and same create function ..
// // below we create in App component A then A is different file there we will import react and import B. then create component B. we will import c in B . in A we will import B. then we will go to C there we will import Middle and create consumer. make sure of Capital Middle and Consumer.
// // below i will attached outside file here just to show what i did in other files i created A,B,C files
// // ----------------
// import React from "react";
// // import B from "../Components/B";

// --------------------------
// const A = () => {
//   return (
//     <div>
//       <h2> I am component A</h2>
//       <B/>
//     </div>
//   );
// };
// export default A;
// // -------------
// import React from "react";
// import C from "../Components/C";
 
// const B = () => {
//   return (
//     <div>
//       <h2> This is Component B</h2>
//       <C/>
//     </div>
//   );
// };
// export default B;
// // ----------------
// import React from "react";
// import { Middle } from "../App";

// const C = () => {
//   return (
//     <div>
//       <Middle.Consumer>
//         {(user) => {
//           <h2>user context value {user}</h2>;
//         }}
//       </Middle.Consumer>
//     </div>
//   );
// };
// export default C;
// // -------------------
// import A from "./Components/A";
// export const Middle = React.createContext();
 
// function App() {
//   return (
//     <>
//       <div className="App">
//         <Middle.Provider value="Makarona">
//           <A />
//         </Middle.Provider>
//       </div>
//     </>
//   );
// }
// export default App;

// // if you want to add data layer inside C u have to create another context variable and create provider inside first provider and go to c and add consumer inside consumer. i will attached A B C files here what i did in ouside file
// // ------------------

// import React from "react";
// import B from "../Components/B";
// // --------------------------
// const A = () => {
//   return (
//     <div>
//       <h2> I am component A</h2>
//       <B/>
//     </div>
//   );
// };
// export default A;
// // -------------
// import React from "react";
// import C from "../Components/C";
 
// const B = () => {
//   return (
//     <div>
//       <h2> This is Component B</h2>
//       <C/>
//     </div>
//   );
// };
// export default B;
// // -------------
// // another example how to create context inside Provider by creating inside Proficer same with Consumer

// import React from "react";
// import { Middle, Inside } from "../App";
// const C = () => {
//   return (
//     <div>
//       <Middle.Consumer>
//         {(user) => {
//           return (
//             <Inside.Consumer>
//               {(inside) => {
//                 return (
//                   <>
//                     <h2>{inside}</h2> <h2>{user}</h2>;
//                   </>
//                 );
//               }}
//             </Inside.Consumer>
//           );
//         }}
//       </Middle.Consumer>
//     </div>
//   );
// };
// export default C;
// // --------------
// import A from "./Components/A";
// export const Middle = React.createContext();
// export const Inside = React.createContext();
// function App() {
//   return (
//     <>
//       <div className="App">
//         <Middle.Provider value="Makarona">
//         <Inside.Provider value="Inside Data">
//           <A />
//           </Inside.Provider>
//         </Middle.Provider>
//       </div>
//     </>
//   );
// }
// export default App;
// // ----------------

// // Example 3 of useContext
// // another way to make it shorter is create context in parent and go to son which is C there import useContext and create inside c function useContext hook

// import A from "./Components/A";
// export const Middle = React.createContext();
// export const Inside = React.createContext();
// function App() {
//     return (
//     <>
//       <div className="App">
//         <Middle.Provider value="Makarona">
//         <Inside.Provider value="Inside Data">
//           <A />
//           </Inside.Provider>
//         </Middle.Provider>
//       </div>
//     </>
//   );
// }
// export default App;
// // ----------

// // in file C this is Example 3 of useContext. below import {useContext} and add useContext hook inside C

// import React from "react";
// import { Middle, Inside } from "../App";
// const C = () => {
//   const Mid = useContext(Middle);
//   const Ins = useContext(Inside);
//   return (
//     <div>
//       <h2> This is Middle :{Mid}</h2>
//       <h2>This is Inside : {Ins}</h2>
//     </div>
//   );
// };
// export default C;

// // -------------------------------------------------------------
// // Lesson useReducer
// // https://www.youtube.com/watch?v=4eU4PUgC73U&list=PLZ45kwWUJ51bVyPFeU-oSOM4YRVCMUPYQ&index=17
// // The useReducer Hook is similar to the useState Hook.
// // It allows for custom state logic.
// // If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.
// // First add useReducer above in import
// // The useReducer Hook accepts two arguments.
// // useReducer(<reducer>, <initialState>)
// // The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.
// // The useReducer Hook returns the current stateand a dispatchmethod.
// // first make variable add state and dispatch to it then = useReducer then reducer which is function and initialvalue which is variable equal 0
 

// function App() {

//   const initialValue = 0;

//   const reducer = (state, action) => {

//     switch (action) {

//       case "plus":

//         return state + 1;

//       case "minus":

//         return state - 1;

//       case "reset":

//         return 0;

//       default:

//         return state;

//     }

//   };

 

//   const [state, dispatch] = useReducer(reducer, initialValue);

 

//   return (

//     <>

//       <div className="App"></div>

// <button onClick={()=>dispatch("plus")}>+</button>

// <button onClick={()=>dispatch("minus")}>-</button>

// <button onClick={()=>dispatch("reset")}>reset</button>

// {state}

// {/* if u dont write state above it wont show any numbers  */}

 

//     </>

//   );

// }

// export default App;

 

// // -----------------------------------------------------
// // Custom Hooks
// // https://www.youtube.com/watch?v=ZxaWumlj2xI&list=PLZ45kwWUJ51bVyPFeU-oSOM4YRVCMUPYQ&index=19
// // how can we appear data on page just one time by using fetch from different page and use it in app component by using useEffect inside App component. go to search on google (placeholder api ) and copy code from this link (https://jsonplaceholder.typicode.com/) and paste in useEffect and remove Number 1.. then go to console u will see array

 

// function App() {

//   useEffect(() => {

//     fetch('https://jsonplaceholder.typicode.com/todos/')

//     .then(response => response.json())

//     .then(json => console.log(json))

//   }, []);

 

//   return <div className="App"></div>;

// }

// export default App;

 

// // if u have alot of api u have to do a lot of useEffect and its not good . so we will do seperate component and add api there so u will use components and hooks to make Father App light and not full of coding .
// // create component and add api there and remove return
// // Then put useEffect inside state
// // then replace setX on console.log
// // then return x in braket  so u can use it in App component
// // then remove link and add url in fetch also in add it to Usecustom paranthsis
// // then go to App component and add useCustom and add url
// // then how to use data by using destruction by adding const before useCustom in App (cosnt [t]= and make console log
// // so in console it shows data in array same above but we didnt add many code in App we did all works in component and then add link in App

 

// const UseCustom =(url)=>{

//   // add braact in useState cuz api in console return array so add empty array

//   const [x,setX]=useState([])

//   useEffect(() => {

//     fetch(url)

//     .then(response => response.json())

//     .then(json => setX(json))

//   }, []);

//   return [x]

 

// }

 

// function App() {

//   const [t]= UseCustom('https://jsonplaceholder.typicode.com/todos/');

// console.log(t);

//   return (

//     <>

//   <div className="App">

//     </div>;

//   </>

//   )

// }

// export default App;

 

// // ---------------------------------------------------------------
// // Axios
// // https://www.youtube.com/watch?v=jNzmzrvfOJE&list=PLZ45kwWUJ51bVyPFeU-oSOM4YRVCMUPYQ&index=20
// // First u have to do import axios from React on the top
// // create arrow function with any name lets say b. then inside by create variable with any name lets say c.
// // add in variable b async and before axios add await
 

// const UseCustom = (url) => {

//   // add braact in useState cuz api in console return array so add empty array

//   const [x, setX] = useState([]);

//   useEffect(() => {

//     fetch(url)

//       .then((response) => response.json())

//       .then((json) => setX(json));

//   }, []);

//   return [x];

// };

 

// function App() {

//   const [t] = UseCustom("https://jsonplaceholder.typicode.com/todos/");

//   const b = async () => {

//     const c = await axios.get("https://jsonplaceholder.typicode.com/todos/");

//     console.log(c.data);

//   };

//   return (

//     <>

//       <div className="App"></div>;

//     </>

//   );

// }

// export default App;

// // axios make it easy it convert to jason file then u can use it better then above first example which required more code

// -------------------------------------------------
// React UI Materials 
// Stack is a container component for arranging elements vertically or horizontally. The Stack component manages the layout of its immediate children along the vertical or horizontal axis, with optional spacing and dividers between each child. 
//variant is a built-in property used in MUI components. Its primary usage is to provide different look and feel options to fulfill the products' branding and design. For example, a Button can have an “outlined” or “contained” variant. Or a Text Field can have an “outlined” or “filled” variant.
// aria-label can be used in cases where text that could label the element is not visible. If there is visible text that labels an element, use aria-labelledby instead. The purpose of aria-label is the same as aria-labelledby . Both provide an accessible name for an element.
// you can add size, color, disabled, u can add startIcon before send word but have to import it from mui also u can add IconButton instead of letter like delete icon but import it . 

// import React from "react";
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { Typography } from "@mui/material"; 

// function App(){
//     return(
//         <div>
//   <ButtonApp/>
//   <TypographyApp/>
//          </div>
//     )
// }
//  export default App; 


// const ButtonApp = () =>{
//     return (
//         <>
//     <Stack spacing={2} direction="row">
//       <Button size="small" variant="text" onClick={()=>{alert("Clicked")}}>Text</Button>
//       <Button size="medium" color="success" variant="contained">Contained</Button>
//       <Button size="large" variant="outlined">Outlined</Button>
//       <Button variant="contained" disabled>Contained</Button>
//       <Button variant="contained" startIcon={<SendIcon/>} >Send</Button>
//       <IconButton color="primary" aria-label="delete" >{<DeleteIcon/>}</IconButton>
//     </Stack>
//         </>
//     )
//  }

//  // to use Typography u have to import it .. in Typography variant: use styles of normal html tag
// // component: make final result tag as this tag .... For example, variant="h5" component="h1" applied style: h5 tag and  final result tag: h1 tag. means if u put component in typography in page it shows variant size but in inspect page it shows what u put in component size 
// // u can add gutterbottom it means when u point by mouse and open inspect page it shows margin below .. 

// const TypographyApp = () => {
//   return (
//     <>
//     <Typography variant="h1" >H1 Heading</Typography>  
//     <Typography variant="h3" component="h1">H3 Heading</Typography>  
//     <Typography variant="h4" gutterBottom >H4 Heading</Typography>  
//     </>
//   )
// }










// // -------------------------------------------------
// // Projects
// // Tarmeez video 41
// // https://www.youtube.com/watch?v=_OKFG5QRKRk&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=41
// // video 44 result of 41
// // https://www.youtube.com/watch?v=hFrOluMFZxA&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=44
// // create Component and add div inside div add form and in div add style and display flex but it will not make form as coloumn u have also go to form and add flex and direction column.
// // go to App there add margin so u can make form in the middle of page
// // u add style to label and input and to forms.
// // better u put style different in css file and import it also add className and do ur style in style file would be better.
// // Also add style to hr which is line when u choose flex it become like dot so add width to it .
// // you do flex in div so form is child of it. but it will not flex what inside form. so u have to add flex to form to style what inside form.
// // also if u want to color body u can go to App.css and write there body and add background color .

 

// function LoanForm() {

//   return (

//     <div

//       style={{

//         display: "flex",

//         justifyContent: "center",

//         alignItems: "center",

//         flexDirection: "column",

//         background: "orange",

//         color:"white "

//       }}

//     >

//       <form

//         style={{

//           display: "flex",

//           justifyContent: "center",

//           alignItems: "center",

//           flexDirection: "column",

//           background: "blue",

//           padding: "20px",

//           borderRadius: "20px",

//           boxShadow: "0px 10px 10px rgba(0,0,0,0,4)",

//           width: "50%",

//         }}

//       >

//         <h1>Requesting a Loan</h1>

//         <hr style={{width:"100%", color:"white"}} />

 

//         <label style={{ marginTop: "10px" }}>Name</label>

//         <input style={{ width: "100%",height:"30px", border:"none" }} />

//         <label style={{ marginTop: "10px" }}>Phone Number</label>

//         <input style={{ width: "100%", height:"30px",  border:"none" }} />

//         <label style={{ marginTop: "10px" }}>Age</label>

//         <input style={{ width: "100%", height:"30px",  border:"none" }} />

//         <label style={{ marginTop: "10px" }}>Are you Employee</label>

//         <input type="checkbox" />

//         <label style={{ marginTop: "10px" }}>Salary</label>

//         <select>

//           <option></option>

//           <option>Less Than 500</option>

//           <option>Between 1000 to 2000</option>

//           <option>Above 2000</option>

//         </select>

//         <button style={{ marginTop: "10px", border:"none", borderRadius:"5px",padding:"5px", fontSize:"20px", background:"black", color:"white" }}>Submit</button>

//       </form>

//     </div>

//   );

// }

 

// function App() {

//   return (

//     <div style={{ margin: "40px" }}>

//       <LoanForm />

//     </div>

//   );

// }

// export default App;

 

// // After u add all style above now we will make pop up msg that when u click submit it shows msg that (Your msg has been submitted) on the page and make back ground dark. you can make seperate component to this msg also add style in different style file then import it .

 

// function LoanForm() {

//   return (

//     <div

//       style={{

//         display: "flex",

//         justifyContent: "center",

//         alignItems: "center",

//         flexDirection: "column",

//         background: "orange",

//         color: "white ",

//       }}

//     >

//       <form

//         style={{

//           display: "flex",

//           justifyContent: "center",

//           alignItems: "center",

//           flexDirection: "column",

//           background: "blue",

//           padding: "20px",

//           borderRadius: "20px",

//           boxShadow: "0px 10px 10px rgba(0,0,0,0,4)",

//           width: "50%",

//         }}

//       >

//         <h1>Requesting a Loan</h1>

//         <hr style={{ width: "100%", color: "white" }} />

 

//         <label style={{ marginTop: "10px" }}>Name</label>

//         <input style={{ width: "100%", height: "30px", border: "none" }} />

//         <label style={{ marginTop: "10px" }}>Phone Number</label>

//         <input style={{ width: "100%", height: "30px", border: "none" }} />

//         <label style={{ marginTop: "10px" }}>Age</label>

//         <input style={{ width: "100%", height: "30px", border: "none" }} />

//         <label style={{ marginTop: "10px" }}>Are you Employee</label>

//         <input type="checkbox" />

//         <label style={{ marginTop: "10px" }}>Salary</label>

//         <select>

//           <option></option>

//           <option>Less Than 500</option>

//           <option>Between 1000 to 2000</option>

//           <option>Above 2000</option>

//         </select>

//         <button

//           style={{

//             marginTop: "10px",

//             border: "none",

//             borderRadius: "5px",

//             padding: "5px",

//             fontSize: "20px",

//             background: "black",

//             color: "white",

//           }}

//         >

//           Submit

//         </button>

//       </form>

//       <SubmitMsg />

//     </div>

//   );

// }

 

// // This component for pop up msg when u click submit . Then u will take this component and add it in Form component below Submit not in App . becuase this SubmitMsg component is son of LoanForm and Loanform component already in App.
// // it will shows below submit but u have to add to father div in SubmitMsg a style to it like position abosolute so it pop up on form above form. the father div can move msg on the top of form but son div can change color of background.
// // if u do style in seperate file will show better ... now if u comment SubmitMsg above it will show u orignal LoanForm . now we add component and style ...

 

// function SubmitMsg() {

//   return (

//     <div

//       style={{

//         position: "absolute",

 

//         display: "flex",

//         justifyContent: "center",

//         alignItems: "center",

//         background: "rgba(0,0,0,0.60)",

//         width: "100vh",

//         height: "100vh",

//       }}

//     >

//       <div style={{ background: "white", color: "green",}}>

//         <h2 >This Form Has Been Submitted Successfully </h2>

//       </div>

//     </div>

//   );

// }

 

// function App() {

//   return (

//     <div style={{ margin: "40px" }}>

//       <LoanForm />

//     </div>

//   );

// }

// export default App;

 

// // Tarmeez video 45 continue above project
// // https://www.youtube.com/watch?v=XMV0efl8PcE&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=45
// // First we will comment the SubmitMsg in Loanform and also comment SubmitMSg so we can work on form to add state.
// // Better way is to create state and put all form as object in state in loanForm .
// // Then connect these objects in State with input. it should be two ways. connect by reading which is using value in input and by writing which using onChange . go to input of Name and add value={loanInputs.name} same with other input. then make function for onChange or do it inside input . add onChange in input - onChange={(event)=>{SetLoanInputs({...loanInputs, name: event.target.value})}} -
// // Then add object for checkbox as isEmplyee and value is false in state . Then go to checkbox input add checked in place of value. above we were adding value but in checkbox we will replace it with checked={loanInputs.isEmployee}. also after even,target.checked... then add onChange as well.
// // Then add object in state for select. add any name salaryRange and make it blank. select is like input in everything
// // Now how to make submit button disabled when form is blank also it shows to us as a disable color when its blank . so first add to submit button disabled{} and create onClick function outside or inside submit button and add event between paranthsis and add  event.preventDefault(); . then in Disabled add variable btnIsDisabled the one i created outside and add loop inside
 

// function LoanForm() {
//   const [loanInputs, SetLoanInputs] = useState({
//     name: "",
//     PhoneNumber: "",
//     age: "",
//     isEmployee: false,
//     salaryRange: "",
//   });
 

//   function submitForm(event) {
//     event.preventDefault();
//   }

//   const btnIsDisabled =
//     loanInputs.name === "" ||
//     loanInputs.PhoneNumber === "" ||
//     loanInputs.age === "";

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//         background: "orange",
//         color: "white ",
//       }}
//     >
//       <form
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           flexDirection: "column",
//           background: "blue",
//           padding: "20px",
//           borderRadius: "20px",
//           boxShadow: "0px 10px 10px rgba(0,0,0,0,4)",
//           width: "50%",
//         }}
//       >
//         <h1>Requesting a Loan</h1>
//         <hr style={{ width: "100%", color: "white" }} />
 
//         <label style={{ marginTop: "10px" }}>Name</label>
//         <input
//           value={loanInputs.name}
//           onChange={(event) => {
//             SetLoanInputs({ ...loanInputs, name: event.target.value });
//           }}
//           style={{ width: "100%", height: "30px", border: "none" }}
//         />

//         <label style={{ marginTop: "10px" }}>Phone Number</label>
//         <input
//           value={loanInputs.PhoneNumber}
//           onChange={(event) => {
//             SetLoanInputs({ ...loanInputs, PhoneNumber: event.target.value });
//           }}
//           style={{ width: "100%", height: "30px", border: "none" }}
//         />

//         <label style={{ marginTop: "10px" }}>Age</label>
//         <input
//           value={loanInputs.age}
//           onChange={(event) => {
//             SetLoanInputs({ ...loanInputs, age: event.target.value });
//           }}
//           style={{ width: "100%", height: "30px", border: "none" }}
//         />

//         <label style={{ marginTop: "10px" }}>Are you Employee</label>
//         <input
//           checked={loanInputs.isEmployee}
//           onChange={(event) => {
//             SetLoanInputs({ ...loanInputs, isEmployee: event.target.checked });
//           }}
//           type="checkbox"
//         />

//         <label style={{ marginTop: "10px" }}>Salary</label>
//         <select
//           value={loanInputs.salaryRange}
//           onChange={(event) => {
//             SetLoanInputs({ ...loanInputs, salaryRange: event.target.value });
//           }}
//         >
//           <option></option>
//           <option>Less Than 500</option>
//           <option>Between 1000 to 2000</option>
//           <option>Above 2000</option>
//         </select>
//         <button
//           onClick={submitForm}
//           disabled={btnIsDisabled}
//           style={{
//             marginTop: "10px",
//             border: "none",
//             borderRadius: "5px",
//             padding: "5px",
//             fontSize: "20px",
//             background: "black",
//             color: "white",
//           }}
//         >
//           Submit
//         </button>
//       </form>
//       {/* <SubmitMsg /> */}
//     </div>
//   );
// }

// function SubmitMsg() {
//   return (
//     <div
//       style={{
//         position: "absolute",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "rgba(0,0,0,0.60)",
//         width: "100vh",
//         height: "100vh",
//       }}
//     >
//       <div style={{ background: "white", color: "green",}}>
//         <h2 >This Form Has Been Submitted Successfully </h2>
//       </div>
//     </div>
//   );
// }
 

// function App() {
//   return (
//     <div style={{ margin: "40px" }}>
//       <LoanForm />
//     </div>
//   );
// }
// export default App;

// // now how can we make submit button shows different color when form is blank and other color when u fill form . so u will show as UI that this button is grey when it is blank and when u fill it shows different color ? by adding class name and then create variable add loop inside it as it shows last 5 min in video. add classname to button  (disabled) then go to app.css and there add background grey with !important .. it mean it will take over another color u added when u make button before by id name (loanformBtn). then create variable and add if in it and add it to classname. it means before in submit button u add to class name disabled and u use it in app.css but when u create variable take this variable and put it in classname replace it with disabled in submit button .  now when it blank it show u grey when u fill form show different color .
 

// function LoanForm() {
//   const [loanInputs, SetLoanInputs] = useState({
//     name: "",
//     PhoneNumber: "",
//     age: "",
//     isEmployee: false,
//     salaryRange: "",
//   });
 
//   function submitForm(event) {
//     event.preventDefault();
//   }
//   const btnIsDisabled =
//     loanInputs.name === "" ||
//     loanInputs.PhoneNumber === "" ||
//     loanInputs.age === "";
 
//   let btnClasses = "";
//   if (btnIsDisabled) {
//     btnClasses = "disabled";
//   } else {
//     btnClasses = "";
//   }


//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//         background: "orange",
//         color: "white ",
//       }}
//     >
//       <form
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           flexDirection: "column",
//           background: "blue",
//           padding: "20px",
//           borderRadius: "20px",
//           boxShadow: "0px 10px 10px rgba(0,0,0,0,4)",
//           width: "50%",
//         }}
//       >
//         <h1>Requesting a Loan</h1>
//         <hr style={{ width: "100%", color: "white" }} />

//         <label style={{ marginTop: "10px" }}>Name</label>
//         <input
//           value={loanInputs.name}
//           onChange={(event) => {
//             SetLoanInputs({ ...loanInputs, name: event.target.value });
//           }}
//           style={{ width: "100%", height: "30px", border: "none" }}
//         />
//         <label style={{ marginTop: "10px" }}>Phone Number</label>
//         <input
//           value={loanInputs.PhoneNumber}
//           onChange={(event) => {
//             SetLoanInputs({ ...loanInputs, PhoneNumber: event.target.value });
//           }}
//           style={{ width: "100%", height: "30px", border: "none" }}
//         />
//         <label style={{ marginTop: "10px" }}>Age</label>
//         <input
//           value={loanInputs.age}
//           onChange={(event) => {
//             SetLoanInputs({ ...loanInputs, age: event.target.value });
//           }}
//           style={{ width: "100%", height: "30px", border: "none" }}
//         />
//         <label style={{ marginTop: "10px" }}>Are you Employee</label>
//         <input
//           checked={loanInputs.isEmployee}
//           onChange={(event) => {
//             SetLoanInputs({ ...loanInputs, isEmployee: event.target.checked });
//           }}
//           type="checkbox"
//         />
//         <label style={{ marginTop: "10px" }}>Salary</label>
//         <select
//           value={loanInputs.salaryRange}
//           onChange={(event) => {
//             SetLoanInputs({ ...loanInputs, salaryRange: event.target.value });
//           }}
//         >
//           <option></option>
//           <option>Less Than 500</option>
//           <option>Between 1000 to 2000</option>
//           <option>Above 2000</option>
//         </select>
//         <button
//           className={btnClasses}
//           id="loanFormBtn"
//           onClick={submitForm}
//           disabled={btnIsDisabled}
//         >
//           Submit
//         </button>
//       </form>
//       {/* <SubmitMsg /> */}
//     </div>
//   );
// }
 

// // function SubmitMsg() {
// //   return (
// //     <div
// //       style={{
// //         position: "absolute",
 
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         background: "rgba(0,0,0,0.60)",
// //         width: "100vh",
// //         height: "100vh",
// //       }}
// //     >
// //       <div style={{ background: "white", color: "green",}}>
// //         <h2 >This Form Has Been Submitted Successfully </h2>
// //       </div>
// //     </div>
// //   );
// // }


// function App() {
//   return (
//     <div style={{ margin: "40px" }}>
//       <LoanForm />
//     </div>
//   );
// }
// export default App;

// // tarmeez video 46
// // https://www.youtube.com/watch?v=soylbvulfL0&list=PLYyqC4bNbCIdSZ-JayMLl4WO2Cr995vyS&index=46
// // now how can we link submit with msg when it is submitted ..
// // first go to to submitMsg component and add props isvisible in curly bracket for example then add condition and in condition add all style in condition then come to loanForm in the bottom u add SubmitMsg component name add isVisivle {true} it shows msg if add false it not shows msg.... but we want to make form when u submit it shows this msg other why not. so we will not add true of false it was just checking if it shows or page or not but here we will link it to State. on this case wr have to create new state and we will use submitingForm function with it . so we will create state and add false to it .. then we will take showModel and add it to inVisible and remove true or false in inVisible curly bracket. .. now if u add true in new it state it shows msg if u add false it not shows msg. now go to submitForm function and add setShowModel and add True (SetShowModel(true)) now when u fill form and click submit it shows msg ... but how u can disappear this msg by clicking any where. u have to create function with condition and add this function to div in loanForm in onClick

 

// function LoanForm() {
//   const [showModel, SetShowModel] = useState(false);
//   const [loanInputs, SetLoanInputs] = useState({
//     name: "",
//     PhoneNumber: "",
//     age: "",
//     isEmployee: false,
//     salaryRange: "",
//   });

//   function submitForm(event) {
//     event.preventDefault();
//     SetShowModel(true);
//   }

//   const btnIsDisabled =
//     loanInputs.name === "" ||
//     loanInputs.PhoneNumber === "" ||
//     loanInputs.age === "";

//   let btnClasses = "";
//   if (btnIsDisabled) {
//     btnClasses = "disabled";
//   } else {
//     btnClasses = "";
//   }

//   function removeMsg() {
//     if (showModel){
//           SetShowModel(false);
//     }
//   }
//   return (
//     <div
//       onClick={removeMsg}
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//         background: "orange",
//         color: "white ",
//       }}
//     >
//       <form
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           flexDirection: "column",
//           background: "blue",
//           padding: "20px",
//           borderRadius: "20px",
//           boxShadow: "0px 10px 10px rgba(0,0,0,0,4)",
//           width: "50%",
//         }}
//       >
//         <h1>Requesting a Loan</h1>
//         <hr style={{ width: "100%", color: "white" }} />

//         <label style={{ marginTop: "10px" }}>Name</label>
//         <input
//           value={loanInputs.name}
//           onChange={(event) => {
//             SetLoanInputs({ ...loanInputs, name: event.target.value });
//           }}
//           style={{ width: "100%", height: "30px", border: "none" }}
//         />

//         <label style={{ marginTop: "10px" }}>Phone Number</label>
//         <input
//           value={loanInputs.PhoneNumber}
//           onChange={(event) => {
//             SetLoanInputs({ ...loanInputs, PhoneNumber: event.target.value });
//           }}
//           style={{ width: "100%", height: "30px", border: "none" }}
//         />

//         <label style={{ marginTop: "10px" }}>Age</label>
//         <input
//           value={loanInputs.age}
//           onChange={(event) => {
//             SetLoanInputs({ ...loanInputs, age: event.target.value });
//           }}
//           style={{ width: "100%", height: "30px", border: "none" }}
//         />

//         <label style={{ marginTop: "10px" }}>Are you Employee</label>
//         <input
//           checked={loanInputs.isEmployee}
//           onChange={(event) => {
//             SetLoanInputs({ ...loanInputs, isEmployee: event.target.checked });
//           }}
//           type="checkbox"
//         />

//         <label style={{ marginTop: "10px" }}>Salary</label>
//         <select
//           value={loanInputs.salaryRange}
//           onChange={(event) => {
//             SetLoanInputs({ ...loanInputs, salaryRange: event.target.value });
//           }}
//         >

//           <option></option>
//           <option>Less Than 500</option>
//           <option>Between 1000 to 2000</option>
//           <option>Above 2000</option>
//         </select>

//         <button
//           className={btnClasses}
//           id="loanFormBtn"
//           onClick={submitForm}
//           disabled={btnIsDisabled}
//         >

//           Submit
//         </button>

//       </form>
//       <SubmitMsg isVisible={showModel} />
//     </div>
//   );
// }

// function SubmitMsg({ isVisible }) {
//   if (isVisible) {
//     return (
//       <div
//         style={{
//           position: "absolute",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           background: "rgba(0,0,0,0.60)",
//           width: "100vh",
//           height: "100vh",
//         }}
//       >
//         <div style={{ background: "white", color: "green" }}>
//           <h2>This Form Has Been Submitted Successfully </h2>
//         </div>
//       </div>
//     );
//   } else {
//     return <></>;
//   }
// }

// function App() {
//   return (
//     <div style={{ margin: "40px" }}>
//       <LoanForm />
//     </div>
//   );
// }
// export default App;


// // now it will make error msg with SugmitMsg if there is error show error msg. so we will add nother props next to isVisible then create error msg below and add style to it for example red color. add errorMsg next to isVisible in submitMsg component remove the msg of submiting and add another one with condition :
// // (<h2>{errorMsg !=null ? errorMsg:"This Form Has Been Submitted Successfully" }</h2>)
// // but remove color from div just leave background the second div in submitMSg. now when we click submit it shows error ... but how we can connect the error if age is big or number phone is longer we have to create another state and create fucntion adding condition to it ...u wull create errorMessage state and add null to it. then go to submitForm function and add age condition and add destruction copy age :const { age } = loanInputs; .. then add SetShowModel(true); and SetErrorMessage(null);... Then add elseif why because u will add codition for number if same error u dont need else if just put or || and add it to age condition but here we need seperate error msg so will add else if . first add phone number destruction to Age :     const { age, PhoneNumber} = loanInputs; ... ... now if u put perfect number it works if not shows error of number like age ..


// function LoanForm() {
//   const [errorMessage, SetErrorMessage] = useState(null);
//   const [showModel, SetShowModel] = useState(false);
//   const [loanInputs, SetLoanInputs] = useState({
//     name: "",
//     PhoneNumber: "",
//     age: "",
//     isEmployee: false,
//     salaryRange: "",
//   });

//   function submitForm(event) {
//     event.preventDefault();
//     SetShowModel(true);
//     SetErrorMessage(null);
//     const { age, PhoneNumber } = loanInputs;
//     if (age < 18 || age > 100) {
//       SetErrorMessage("this is not correct age");
//     } else if (PhoneNumber.length < 10 || PhoneNumber.length > 12) {
//       SetErrorMessage(" The phone number format is not correct ");
//     }

//     SetShowModel(true);
//   }
//   const btnIsDisabled =
//     loanInputs.name === "" ||
//     loanInputs.PhoneNumber === "" ||
//     loanInputs.age === "";

//   let btnClasses = "";
//   if (btnIsDisabled) {
//     btnClasses = "disabled";
//   } else {
//     btnClasses = "";
//   }
//   function removeMsg() {
//     if (showModel) {
//       SetShowModel(false);
//     }
//   }
//   return (
//     <div
//       onClick={removeMsg}
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//         background: "orange",
//         color: "white ",
//       }}
//     >
//       <form
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           flexDirection: "column",
//           background: "blue",
//           padding: "20px",
//           borderRadius: "20px",
//           boxShadow: "0px 10px 10px rgba(0,0,0,0,4)",
//           width: "50%",
//         }}
//       >
//         <h1>Requesting a Loan</h1>
//         <hr style={{ width: "100%", color: "white" }} />

//         <label style={{ marginTop: "10px" }}>Name</label>
//         <input
//           value={loanInputs.name}
//           onChange={(event) => {
//             SetLoanInputs({ ...loanInputs, name: event.target.value });
//           }}
//           style={{ width: "100%", height: "30px", border: "none" }}
//         />

//         <label style={{ marginTop: "10px" }}>Phone Number</label>
//         <input
//           value={loanInputs.PhoneNumber}
//           onChange={(event) => {
//             SetLoanInputs({ ...loanInputs, PhoneNumber: event.target.value });
//           }}
//           style={{ width: "100%", height: "30px", border: "none" }}
//         />

//         <label style={{ marginTop: "10px" }}>Age</label>
//         <input
//           value={loanInputs.age}
//           onChange={(event) => {
//             SetLoanInputs({ ...loanInputs, age: event.target.value });
//           }}
//           style={{ width: "100%", height: "30px", border: "none" }}
//         />

//         <label style={{ marginTop: "10px" }}>Are you Employee</label>
//         <input
//           checked={loanInputs.isEmployee}
//           onChange={(event) => {
//             SetLoanInputs({ ...loanInputs, isEmployee: event.target.checked });
//           }}
//           type="checkbox"
//         />

//         <label style={{ marginTop: "10px" }}>Salary</label>
//         <select
//           value={loanInputs.salaryRange}
//           onChange={(event) => {
//             SetLoanInputs({ ...loanInputs, salaryRange: event.target.value });
//           }}
//         >

//           <option></option>
//           <option>Less Than 500</option>
//           <option>Between 1000 to 2000</option>
//           <option>Above 2000</option>

//         </select>

//         <button
//           className={btnClasses}
//           id="loanFormBtn"
//           onClick={submitForm}
//           disabled={btnIsDisabled}
//         >
//           Submit
//         </button>
//       </form>
//       <SubmitMsg errorMsg={errorMessage} isVisible={showModel} />
//     </div>
//   );
// }

// function SubmitMsg({ isVisible, errorMsg = null }) {
//   if (isVisible) {
//     return (
//       <div
//         style={{
//           position: "absolute",
 
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           background: "rgba(0,0,0,0.60)",
//           width: "100vh",
//           height: "100vh",
//         }}
//       >
//         <div style={{ background: "white" }}>
//           <h2 style={{ color: errorMsg ? "red" : "green" }}>
//             {errorMsg != null
//               ? errorMsg
//               : "This Form Has Been Submitted Successfully"}
//           </h2>
//         </div>
//       </div>
//     );
//   } else {
//     return <></>;
//   }
// }


// function App() {
//   return (
//     <div style={{ margin: "40px" }}>
//       <LoanForm />
//     </div>
//   );
// }
// export default App;

// // ------------------------------------------------

// // project ToDo App KG Coding Min 2:10 link below

// // https://www.youtube.com/watch?v=eILUmCJhl64

 

// function App() {

//   return (

//     <center className="app-container">

//       <AppName />

//       <TodoItem />

//       <div class="text-start">

//         <TodoItem2></TodoItem2>

//         <TodoItems3 />

//       </div>

//     </center>

//   );

// }

// export default App;

 

// function AppName() {

//   return <h1>Todo App </h1>;

// }

 

// function TodoItem() {

//   return (

//     <div class="container text-center">

//       <div class="row">

//         <div class="col-5">

//           <input type="text" placeholder="Enter Todo Here" />

//         </div>

//         <div class="col-4">

//           <input type="date" />

//         </div>

//         <div class="col-2">

//           <button type="button" class="btn btn-success">

//             Add

//           </button>

//         </div>

//       </div>

//     </div>

//   );

// }

 

// function TodoItem2() {

//   // u can create variable and add below in curly bracket

//   const name = "But Milk";

//   const date = "6 / 4 / 2024";

//   return (

//     <div class="container text-center">

//       <div class="row">

//         <div class="col-5">{name}</div>

//         <div class="col-4">{date}</div>

//         <div class="col-2">

//           <button type="button" class="btn btn-danger">

//             Delete

//           </button>

//         </div>

//       </div>

//     </div>

//   );

// }

 

// function TodoItems3() {

//   return (

//     <div class="container text-center">

//       <div class="row">

//         <div class="col-5">But Car</div>

//         <div class="col-4">6 / 5 / 2024</div>

//         <div class="col-2">

//           <button type="button" class="btn btn-info">

//             Delete

//           </button>

//         </div>

//       </div>

//     </div>

//   );
// 
// }
// 
//  

// ---------------------------------
// // Tarmeez Project video 67
// // Todo List Project 

// // import React from "react";
// // import Stack from '@mui/material/Stack';
// // import Box from '@mui/material/Box';
// // import Container from '@mui/material/Container';
// // import Card from '@mui/material/Card';
// // import CardActions from '@mui/material/CardActions';
// // import CardContent from '@mui/material/CardContent';
// // import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';
// // import Divider from "@mui/material/Divider";
// // import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// // import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
// // import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
// // import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
// // import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
// // import ToggleButton from '@mui/material/ToggleButton';

// // first go to mui website and search container and take code of it and add it to TodoList . also import container and Box. so u make box first .. u can create different way but we will go to mui website and search card and first basic card will show code and not take all code just card code and come back to page in place of box and remove box tag.. and import all thing above . also there would be variable shows error remove it in card and put any words ....if u remove container and leave it free fragement the card will show u wide in page so we leave container also we can change container width from small to md or lg.. 
// // go to App component and add style to div which is inside TodoList Component . like flex and other styles to make page green color ,, now its in the middle of page also add height vh not px to make it only background ... 
// // now change the data in TodoList like title and other data in Typography. Typography is the replacement of h1 or h2 until h5. i will remove all Typography and leave one which is Title is (مهامي)
// // to put line below مهامي use divider and import it and paste it below مهامي typography ..
// // below  مهامي  and add toggle button group or u can add any button ... import it toggle button .. inside CardContent below divider add ToggleButton Group .. import all button from mui above also button change it to text data .. it shows 4 toggle i delete one .. also i delete classes from  but it which is area-label .. but i left the value because i need it later .. it shows from left to right and its arabic so i have to make it from right to left  by add rtl to App Component . or u can add rtl to ToggleButton..
// // u can add margin to ToggleButtonGroup


// const App = () => {
//   return (
//     <div style={{display:"flex", justifyContent:"center",alignItems:"center",background:"green",height:"100vh", direction:"rtl"}}>
//       <TodoList/>
//     </div>
//   )
// }
// export default App;


// const TodoList = () => {
//   return (
//     <div  >
//         <Container maxWidth="sm"   >
//     <Card  sx={{minWidth:375}}>
 
//     <CardContent >
//       <Typography variant="h2" gutterBottom sx={{}} color= 'text.secondary'>
//         مهامي
//       </Typography>
//      <Divider/>

//      {/* Filter Button  */}
//      <ToggleButtonGroup
//      style={{marginTop:"20px"}}
//       exclusive
     
//       aria-label="text alignment"
//     >
//       <ToggleButton value="left" >
//         الكل
//       </ToggleButton>
//       <ToggleButton value="center" >
//         المنجز
//       </ToggleButton>
//       <ToggleButton value="right" >
//        غير المنجز
//       </ToggleButton>
      
//     </ToggleButtonGroup>
//      {/* Filter Button  */}
//     </CardContent>
//     <CardActions>
//       <Button size="small">Learn More</Button>
//     </CardActions>
//     </Card>

//       </Container>
//     </div>
//   )
// }

// // -------------------
// // Continue the above project by createing more Component and continue the project 
// // import React from "react";
// // import Stack from '@mui/material/Stack';
// // import Box from '@mui/material/Box';
// // import Container from '@mui/material/Container';
// // import Card from '@mui/material/Card';
// // import CardActions from '@mui/material/CardActions';
// // import CardContent from '@mui/material/CardContent';
// // import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';
// // import Divider from "@mui/material/Divider";
// // import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// // import ToggleButton from '@mui/material/ToggleButton';
// // import Grid from '@mui/material/Grid';
// // import  IconButton  from "@mui/material/IconButton";
// // import CheckIcon from '@mui/icons-material/Check';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

// const App = () => {
//   return (
//     <div style={{display:"flex", justifyContent:"center",alignItems:"center",background:"green",height:"100vh", direction:"rtl"}}>
//       <TodoList/>
//     </div>
//   )
// }
// export default App;


// const TodoList = () => {
//   return (
//     <div  >
//         <Container maxWidth="md"   >
//     <Card  sx={{minWidth:475}}>
 
//     <CardContent >
//       <Typography variant="h2" gutterBottom sx={{}} color= 'text.secondary'>
//         مهامي
//       </Typography>
//      <Divider/>

//      {/* Filter Button  */}
//      <ToggleButtonGroup
//      style={{marginTop:"20px"}}
//       exclusive
     
//       aria-label="text alignment"
//     >
//       <ToggleButton value="left" >
//         الكل
//       </ToggleButton>
//       <ToggleButton value="center" >
//         المنجز
//       </ToggleButton>
//       <ToggleButton value="right" >
//        غير المنجز
//       </ToggleButton>
      
//     </ToggleButtonGroup>
//      {/* Filter Button  */}

//      {/* Todo Component  */}
//      <Todo/>
//      {/* Todo Component  */}
//     </CardContent>
   
//     </Card>

//       </Container>
//     </div>
//   )
// }

// // Creating component now and u can make it different file . import card inside typography also add background to it. in card there is sx which same style so inside sx add backroung and not need add style{} as sx is same Style. u can remove card action because in above it was mentioned and no need iremoved above and below .. now u can add grid from mui. we will make size md and add typography in grind 8 . give color yellow to 8 it show u typography background in yellow and it take 8 grid .. typography in Todo make h5 and textAlign right .and remove background later in grid ..
// // go to mui and take icons like check icon but this one add it as a icon button so add button which show u icon button .. also add flex to grid to make it space between each one.. make copy of icon button three so now u have three button ..now it shows three button of check below we will change it to edit and third icon button change it to delete ...

// function Todo(){
//   return(
//     <>
//       <Card  sx={{minWidth:475, background:"blue",color:"white", marginTop:"5px"}}>
 
//  <CardContent >

//  <Grid container spacing={2}>
//         <Grid   xs={8}  >
//         <Typography variant="h5"  sx={{textAlign:"right"}} color= 'text.secondary'>
//      المهمة الأولى
//    </Typography>
//    {/* This is action button  */}
//         </Grid>
//         <Grid   xs={4} display="flex" justifyContent="space-around" alignItems="center">
//         <IconButton aria-label="Check" style={{color:"green",background:"white",border:"solid 3px"}}>
//           <CheckIcon/>
//         </IconButton>

//         <IconButton aria-label="Check" style={{color:"green",background:"white",border:"solid 3px"}}>
//           <CheckIcon/>
//         </IconButton>

//         <IconButton aria-label="Check" style={{color:"green",background:"white",border:"solid 3px"}}>
//           <CheckIcon/>
//         </IconButton>
//         </Grid>
//       </Grid>

   
//   </CardContent>

//  </Card>
//     </>
//   )
// }

// -------------------------------
// // continue the above TodoList Project .
// // will add hover affect and add edit button and delete button from mui after u import add it to IconButton as close Tag at the end .. to add hover add same class named (iconButton) to three button and go to css file and add style there  .. and import css file here and i will add style here and comment it . also add paragraph below typography title u can make another typography and smaller the letter by add h5 .also when u make style in css add !important because if u add color here inline and color in css file it will use inline color but if u add !important in css it will take css style.. also u can add hover padding in card. for example if u hover on card it show it little bigger to make it just add padding top and bottom in hover in css style and we will add that style here and comment it ....give card in Todo classname (cardTodo) and give it style in css  ...


// // import React from "react";
// // import "./App.css";
// // import Stack from '@mui/material/Stack';
// // import Box from '@mui/material/Box';
// // import Container from '@mui/material/Container';
// // import Card from '@mui/material/Card';
// // import CardActions from '@mui/material/CardActions';
// // import CardContent from '@mui/material/CardContent';
// // import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';
// // import Divider from "@mui/material/Divider";
// // import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// // import ToggleButton from '@mui/material/ToggleButton';
// // import Grid from '@mui/material/Grid';
// // import  IconButton  from "@mui/material/IconButton";
// // import CheckIcon from '@mui/icons-material/Check';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
// // import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
// // import { hover } from "@testing-library/user-event/dist/hover";

// const App = () => {
//   return (
//     <div style={{display:"flex", justifyContent:"center",alignItems:"center",background:"green",height:"100vh", direction:"rtl"}}>
//       <TodoList/>
//     </div>
//   )
// }
// export default App;


// const TodoList = () => {
//   return (
//     <div  >
//         <Container maxWidth="md"   >
//     <Card  sx={{minWidth:475}}>
 
//     <CardContent >
//       <Typography variant="h2" gutterBottom sx={{}} color= 'text.secondary'>
//         مهامي
//       </Typography>
//      <Divider/>

//      {/* Filter Button  */}
//      <ToggleButtonGroup
//      style={{marginTop:"20px"}}
//       exclusive
     
//       aria-label="text alignment"
//     >
//       <ToggleButton value="left" >
//         الكل
//       </ToggleButton>
//       <ToggleButton value="center" >
//         المنجز
//       </ToggleButton>
//       <ToggleButton value="right" >
//        غير المنجز
//       </ToggleButton>
      
//     </ToggleButtonGroup>
//      {/* Filter Button  */}

//      {/* Todo Component  */}
//      <Todo/>
//      {/* Todo Component  */}
//     </CardContent>
   
//     </Card>

//       </Container>
//     </div>
//   )
// }

// // Below is style we made in css file but comment here 
// // .iconButton{
// //   transition: all 0.2s !important;
// //  }
// //  .iconButton:hover{
// //  background-color: rgb(24, 32, 13) !important ; 
// //  box-shadow: 0px 7px 7px rgba(0,0,0,0,4);
// //  }

// // below is style we made in css file but comment here 
// // .cardTodo:hover{
// //   padding-top: 20px;
// //   padding-bottom: 20px;
// // }
// // .cardTod{
// //   transition: all 0.2s !important;
// // box-shadow: 0px 7px 7px rgba(0,0,0,0,4);
// // }


// function Todo(){
//   return(
//     <>
//       <Card className="cardTodo"  sx={{minWidth:475, background:"blue",color:"white", marginTop:"5px"}}>
 
//  <CardContent >

//  <Grid container spacing={2}>
//         <Grid   xs={8}  >
//         <Typography variant="h4"  sx={{textAlign:"right"}} color= 'text.secondary'>
//      المهمة الأولى
//    </Typography>
//    <Typography variant="h6"  sx={{textAlign:"right"}} color= 'text.secondary'>
// التفاصيل الخاصة بالمهمة الأولى   </Typography>
//    {/* This is action button  */}
//         </Grid>
//         <Grid   xs={4} display="flex" justifyContent="space-around" alignItems="center">
//         <IconButton className="iconButton" aria-label="Check" style={{color:"green",background:"white",border:"solid 3px"}}>
//           <CheckIcon/>
//         </IconButton>

//         <IconButton className="iconButton" aria-label="Check" style={{color:"blue",background:"white",border:"solid 3px"}}>
//           <EditOutlinedIcon/>
//         </IconButton>

//         <IconButton className="iconButton" aria-label="Check" style={{color:"red",background:"white",border:"solid 3px"}}>
//           <DeleteForeverOutlinedIcon/>
//         </IconButton>
//         </Grid>
//       </Grid>
   
//   </CardContent>

//  </Card>
//     </>
//   )
// }
// // -------------------------
// // import React from "react";
// // import "./App.css";
// // import Stack from '@mui/material/Stack';
// // import Box from '@mui/material/Box';
// // import Container from '@mui/material/Container';
// // import Card from '@mui/material/Card';
// // import CardActions from '@mui/material/CardActions';
// // import CardContent from '@mui/material/CardContent';
// // import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';
// // import Divider from "@mui/material/Divider";
// // import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// // import ToggleButton from '@mui/material/ToggleButton';
// // import Grid from '@mui/material/Grid';
// // import  IconButton  from "@mui/material/IconButton";
// // import CheckIcon from '@mui/icons-material/Check';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
// // import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
// // import { hover } from "@testing-library/user-event/dist/hover";
// // import { createTheme,ThemeProvider } from "@mui/material/styles";
// // import TextField from '@mui/material/TextField';
// // import { v4 as uuidv4 } from 'uuid';
// // import { Article } from "@mui/icons-material";

// // now how can we import font in arabic from google and use it here .. lesson (71) go to google write arabic font then choose any font make it download and then go to that download file and take static file what inside and paste it in public so u can use it later when u change font ...then go to css file and add font by @font-face then add A then the weight for each font if its number or u can write light bold instead of number in font-weight ...
// // how to put in all ur project the same font .. u can not add it to App Component or in Body in css so better way is to import createTheme,ThemeProvider from mui .. go to mui copy theme and add it here above App component and inside u can add any style but we will add Typography means font . 


// const theme = createTheme({
//   Typography:{
//     fontFamily:["Alexandria"],
//   },
// });


// const App = () => {
 
//   return (
//     <ThemeProvider theme={theme}>
//     <div style={{display:"flex", justifyContent:"center",alignItems:"center",background:"green",height:"100vh", direction:"rtl"}}>
//       <TodoList/>
//     </div>
//     </ThemeProvider>
//   )
// }
// export default App;


// const TodoList = () => {
//   return (
//     <div  >
//         <Container maxWidth="md"   >
//     <Card  sx={{minWidth:475}}>
 
//     <CardContent >
//       <Typography variant="h2" gutterBottom sx={{}} color= 'text.secondary'>
//         مهامي
//       </Typography>
//      <Divider/>

//      {/* Filter Button  */}
//      <ToggleButtonGroup
//      style={{marginTop:"20px"}}
//       exclusive
     
//       aria-label="text alignment"
//     >
//       <ToggleButton value="left" >
//         الكل
//       </ToggleButton>
//       <ToggleButton value="center" >
//         المنجز
//       </ToggleButton>
//       <ToggleButton value="right" >
//        غير المنجز
//       </ToggleButton>
      
//     </ToggleButtonGroup>
//      {/* Filter Button  */}

//      {/* Todo Component  */}
//      <Todo/>
//      {/* Todo Component  */}


//     </CardContent>
   
//     </Card>

//       </Container>
//     </div>
//   )
// }

// // Below is style we made in css file but comment here 
// // .iconButton{
// //   transition: all 0.2s !important;
// //  }
// //  .iconButton:hover{
// //  background-color: rgb(24, 32, 13) !important ; 
// //  box-shadow: 0px 7px 7px rgba(0,0,0,0,4);
// //  }

// // below is style we made in css file but comment here 
// // .cardTodo:hover{
// //   padding-top: 20px;
// //   padding-bottom: 20px;
// // }
// // .cardTod{
// //   transition: all 0.2s !important;
// // box-shadow: 0px 7px 7px rgba(0,0,0,0,4);
// // }

// // create font in css style 
// // @font-face{
// //   font-family: A;
// //   src:url("/public/font/Alexandria-Black.ttf");
// //   font-weight: 900;
  
// // }

// // @font-face{
// //   font-family: A;
// //   src:url("/public/font/Alexandria-Thin.ttf");
// //   font-weight: 100;
  
// // }
// // @font-face{
// //   font-family: A;
// //   src:url("/public/font/Alexandria-Regular.ttf");
// //   font-weight: 200;
  
// // }

// function Todo(){
//   return(
//     <>
//       <Card className="cardTodo"  sx={{minWidth:475, background:"blue",color:"white", marginTop:"5px"}}>
 
//  <CardContent >

//  <Grid container spacing={2}>
//         <Grid   xs={8}  >
//         <Typography variant="h4"  sx={{textAlign:"right"}} color= 'text.secondary'>
//      المهمة الأولى
//    </Typography>
//    <Typography variant="h6"  sx={{textAlign:"right"}} color= 'text.secondary' fontFamily="A" fontWeight="200">
// التفاصيل الخاصة بالمهمة الأولى   </Typography>
//    {/* This is action button  */}
//         </Grid>
//         <Grid   xs={4} display="flex" justifyContent="space-around" alignItems="center">
//         <IconButton className="iconButton" aria-label="Check" style={{color:"green",background:"white",border:"solid 3px"}}>
//           <CheckIcon/>
//         </IconButton>

//         <IconButton className="iconButton" aria-label="Check" style={{color:"blue",background:"white",border:"solid 3px"}}>
//           <EditOutlinedIcon/>
//         </IconButton>

//         <IconButton className="iconButton" aria-label="Check" style={{color:"red",background:"white",border:"solid 3px"}}>
//           <DeleteForeverOutlinedIcon/>
//         </IconButton>
//         </Grid>
//       </Grid>
   
//   </CardContent>

//  </Card>
//     </>
//   )
// }

// // ------------------------
// // Now we will add input and next to it add button . u will use grid inout will take 8 and button 4 grid and to add input import from mui. go to todo list and add grid with container element .. search input in mui called TextField import it and take code of it and paste it in grid 8... textField add style width 100% and change label to arabic letter and add marging top and add spacing to Grid Container so it make children make space among each other .also u can add to testfield outlet direction ltr so outline arabic letter show in perfect direction .. also import outline button and add it to grid 4 and add style width and height 100% ... 
// // now create array object and create variable and add api . and install uuid package  in npm and now instead of writing each object id u will add uuid so its give autotmatic different id for each object ..also inport uuid above . (import { v4 as uuidv4 } from 'uuid';). and u will use uuidv4 in id . and go to TodoList and add map . in map return <Todo/> and go below remove <Todo/> and replace it with {todoMap} now u will see in ur card three id . then go to Todo component add prop {title,detail} and go below instead of المهمة u can add {title } and samedetail . then come to TodoList and in MAp add key also title={t.title} detail={t.detail} and it will show in page what u add in todoApi . 

// const theme = createTheme({
//   Typography:{
//     fontFamily:["Alexandria"],
//   },
// });


// const App = () => {
 
//   return (
//     <ThemeProvider theme={theme}>
//     <div style={{display:"flex", justifyContent:"center",alignItems:"center",background:"green",height:"100vh", direction:"rtl"}}>
//       <TodoList/>
//     </div>
//     </ThemeProvider>
//   )
// }
// export default App;

// const todoApi=[
//   {
//     id:uuidv4,
//     title:"قراءة الكتاب",
//     detail:"1111لببلبلبيلل",
//     isComplited:false
//   },
//   {
//     id:uuidv4,
//     title:"2قراءة الكتاب",
//     detail:"222لببلبلبيلل",
//     isComplited:false
//   },
//   {
//     id:uuidv4,
//     title:"3قراءة الكتاب",
//     detail:"333لببلبلبيلل",
//     isComplited:false
//   },
// ]


// const TodoList = () => {
// const todoMap=todos.map((t)=>{
//    return(
//     <>
//     <Todo key={t.id} title={t.title} detail={t.detail}/>
//     </>
//    )
// })
//   return (
//     <div  >
//         <Container maxWidth="md"   >
//     <Card  sx={{minWidth:475}}>
 
//     <CardContent >
//       <Typography variant="h2" gutterBottom sx={{}} color= 'text.secondary'>
//       مهامي
//       </Typography>
//      <Divider/>

//      {/* Filter Button  */}
//      <ToggleButtonGroup
//      style={{marginTop:"20px"}}
//       exclusive
     
//       aria-label="text alignment"
//     >
//       <ToggleButton value="left" >
//         الكل
//       </ToggleButton>
//       <ToggleButton value="center" >
//         المنجز
//       </ToggleButton>
//       <ToggleButton value="right" >
//        غير المنجز
//       </ToggleButton>
      
//     </ToggleButtonGroup>
//      {/* Filter Button  */}

//      {/* Todo Component  */}
//      {todoMap}
//      {/* Todo Component  */}


// {/* below create grid inside add input search with add button  */}
//       <Grid container spacing={2} style={{marginTop:"20px"}}>
//       <Grid   xs={8}  >
//         <Typography  variant="h4"  sx={{textAlign:"right"}} color= 'text.secondary'>
//         <TextField style={{width:"100%", direction:"ltr"}} id="outlined-basic" label="عنوان المهمة" variant="outlined" />
//    </Typography>
   
//    {/* This is action button  */}
//         </Grid>
//         <Grid   xs={4}  >
        
//         <Button style={{width:"100%",height:"100%"}} variant="contained" href="#contained-buttons">
//        Add
//       </Button> 
  
//    </Grid>
//    </Grid>
//    {/* This is action button  */}
       

//     </CardContent>
   
//     </Card>

//       </Container>
//     </div>
//   )
// }


// function Todo({title,detail}){
//   return(
//     <>
//       <Card className="cardTodo"  sx={{minWidth:475, background:"blue",color:"white", marginTop:"5px"}}>
 
//  <CardContent >

//  <Grid container spacing={2}>
//         <Grid   xs={8}  >
//         <Typography variant="h4"  sx={{textAlign:"right"}} color= 'text.secondary'>
// {title}
//    </Typography>
//    <Typography variant="h6"  sx={{textAlign:"right"}} color= 'text.secondary' fontFamily="A" fontWeight="200">
// {detail}
//  </Typography>
//    {/* This is action button  */}
//         </Grid>
//         <Grid   xs={4} display="flex" justifyContent="space-around" alignItems="center">
//         <IconButton className="iconButton" aria-label="Check" style={{color:"green",background:"white",border:"solid 3px"}}>
//           <CheckIcon/>
//         </IconButton>

//         <IconButton className="iconButton" aria-label="Check" style={{color:"blue",background:"white",border:"solid 3px"}}>
//           <EditOutlinedIcon/>
//         </IconButton>

//         <IconButton className="iconButton" aria-label="Check" style={{color:"red",background:"white",border:"solid 3px"}}>
//           <DeleteForeverOutlinedIcon/>
//         </IconButton>
//         </Grid>
//       </Grid>
   
//   </CardContent>

//  </Card>
//     </>
//   )
// }

// // --------------------------------------
// // how to use usestate in above project also how add button will work import usestate and add state in component of TodoList . then go to button in Todolist and add onClick and create varaiable handleAtClick. also create another use state so we can use it for adding new typography and go to TextField which is input search .. and add value={titleInput} also add onChange to it . then go to handleAtClick and create new variable inside it because u have to make copy of todos then work on copy can not to mutation in useState then add data like api and then call it with SetTodos. below it u add    SetTitleInput('') means when u write anything and click add it should dispeaper from search place. 

// // import React, { useState } from "react";
// // import "./App.css";
// // import Stack from '@mui/material/Stack';
// // import Box from '@mui/material/Box';
// // import Container from '@mui/material/Container';
// // import Card from '@mui/material/Card';
// // import CardActions from '@mui/material/CardActions';
// // import CardContent from '@mui/material/CardContent';
// // import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';
// // import Divider from "@mui/material/Divider";
// // import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// // import ToggleButton from '@mui/material/ToggleButton';
// // import Grid from '@mui/material/Grid';
// // import  IconButton  from "@mui/material/IconButton";
// // import CheckIcon from '@mui/icons-material/Check';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
// // import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
// // import { hover } from "@testing-library/user-event/dist/hover";
// // import { createTheme,ThemeProvider } from "@mui/material/styles";
// // import TextField from '@mui/material/TextField';
// // import { v4 as uuidv4 } from 'uuid';
// // import { Article } from "@mui/icons-material";


// const theme = createTheme({
//   Typography:{
//     fontFamily:["Alexandria"],
//   },
// });


// const App = () => {
 
//   return (
//     <ThemeProvider theme={theme}>
//     <div style={{display:"flex", justifyContent:"center",alignItems:"center",background:"green",height:"100vh", direction:"rtl"}}>
//       <TodoList/>
//     </div>
//     </ThemeProvider>
//   )
// }
// export default App;

// const todoApi=[
//   {
//     id:uuidv4(),
//     title:"قراءة الكتاب",
//     detail:"1111لببلبلبيلل",
//     isComplited:false
//   },
//   {
//     id:uuidv4(),
//     title:"2قراءة الكتاب",
//     detail:"222لببلبلبيلل",
//     isComplited:false
//   },
  
// ]


// const TodoList = () => {
//   const [todos,SetTodos]=useState(todoApi)
//   const [titleInput,SetTitleInput]=useState("")


// const todoMap=todos.map((t)=>{
//    return(<Todo key={t.id} title={t.title} detail={t.detail}/> )
// })

// function handleAtClick(){
//   const newTodo={
//  id:uuidv4(),
//  title:titleInput,
//  detail:"",
//  isComplited:false
// }
// SetTodos([...todos,newTodo])
// SetTitleInput("")
//  }

//  function onChangeField(e){
//   SetTitleInput(e.target.value)
//  }


//   return (
//     <>
  
//     <div  >
 



//         <Container maxWidth="md"   >
//     <Card  sx={{minWidth:475}}>
 
//     <CardContent >
//       <Typography variant="h2" gutterBottom sx={{}} color= 'text.secondary'>
//       مهامي
//       </Typography>
//      <Divider/>

//      {/* Filter Button  */}
//      <ToggleButtonGroup
//      style={{marginTop:"20px"}}
//       exclusive
     
//       aria-label="text alignment"
//     >
//       <ToggleButton value="left" >
//         الكل
//       </ToggleButton>
//       <ToggleButton value="center" >
//         المنجز
//       </ToggleButton>
//       <ToggleButton value="right" >
//        غير المنجز
//       </ToggleButton>
      
//     </ToggleButtonGroup>
//      {/* Filter Button  */}

//      {/* Todo Component  */}
//      {todoMap}
//      {/* Todo Component  */}


// {/* below create grid inside add input search with add button  */}
//       <Grid container spacing={2} style={{marginTop:"20px"}}>
//       <Grid   xs={8}  >
//         <Typography  variant="h4"  sx={{textAlign:"right"}} color= 'text.secondary'>
//         <TextField style={{width:"100%", direction:"ltr"}} id="outlined-basic" label="عنوان المهمة" variant="outlined" value={titleInput} onChange={onChangeField} />
//    </Typography>
   
//    {/* This is action button  */}
//         </Grid>
//         <Grid   xs={4}  >
        
//         <Button style={{width:"100%",height:"100%"}} variant="contained" href="#contained-buttons" onClick={handleAtClick}>
//        Add
//       </Button> 
  
//    </Grid>
//    </Grid>
//    {/* This is action button  */}
       

//     </CardContent>
   
//     </Card>

//       </Container>
//     </div>
//     </>
//   )
// }


// function Todo({title,detail}){
//   return(
//     <>
//       <Card className="cardTodo"  sx={{minWidth:475, background:"blue",color:"white", marginTop:"5px"}}>
 
//  <CardContent >

//  <Grid container spacing={2}>
//         <Grid   xs={8}  >
//         <Typography variant="h4"  sx={{textAlign:"right"}} color= 'text.secondary'>
// {title}
//    </Typography>
//    <Typography variant="h6"  sx={{textAlign:"right"}} color= 'text.secondary' fontFamily="A" fontWeight="200">
// {detail}
//  </Typography>
//    {/* This is action button  */}
//         </Grid>
//         <Grid   xs={4} display="flex" justifyContent="space-around" alignItems="center">
//         <IconButton className="iconButton" aria-label="Check" style={{color:"green",background:"white",border:"solid 3px"}}>
//           <CheckIcon/>
//         </IconButton>

//         <IconButton className="iconButton" aria-label="Check" style={{color:"blue",background:"white",border:"solid 3px"}}>
//           <EditOutlinedIcon/>
//         </IconButton>

//         <IconButton className="iconButton" aria-label="Check" style={{color:"red",background:"white",border:"solid 3px"}}>
//           <DeleteForeverOutlinedIcon/>
//         </IconButton>
//         </Grid>
//       </Grid>
   
//   </CardContent>

//  </Card>
//     </>
//   )
// }

// // --------------------------
// // now we will work on tick button when u click tick button todo should added to المنجو should be true on inComplited... now all todos are false in inComplited ... and all todos are located in Todo Component because this Component include Tick Button .. which is IconButton ... and in TodoList u have Api in useState so now u will press iconButton in Todo Component and change false to True in TodoList component .. so now we will use props if its hard will use useContext ... in TodoList in map instead of  to send item, detail, isCompilited replacethem with todo={t} and go to Todo Component and replace in Parenthsisi todo and go below add {todo.title} and {todo.detail}..
// // now we will work on iconbutton and in Todo Component u can not make copy of pros . u have to create function variable in TodoList which is Parent and add it to map as handle={hancleCheckClickMain} then u go to Todo Component and there add to parenthsisi handle and below create same variable handlecheckclick and write handle () so now what u write anything in Todo List in this variable it will show in child which is Todo so we write a msg in TodoList in Parent and when u click on Tick it will show u that msg .. below we will work on how when u click tick will make it isComplet is true .. but now it show ehen u click on any tick it show same msg how can i make it seperate lick specific tick should show this msg not all . so now u will send props from child to parant now its opposiste .. u will add in handlecheckclickmain variable in paranthesis add todoId. now u will add parameer in TodoList in handleCheckClickmain u can add anything its like id and  add + todoId and go to TodoList in function handleCheckClickmain add inside todo.id .. it means when u click tick it show u msg with id of this tick and if u click on another tick it show u same msg but with unique id ... 


// // import React, { useState } from "react";
// // import "./App.css";
// // import Stack from '@mui/material/Stack';
// // import Box from '@mui/material/Box';
// // import Container from '@mui/material/Container';
// // import Card from '@mui/material/Card';
// // import CardActions from '@mui/material/CardActions';
// // import CardContent from '@mui/material/CardContent';
// // import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';
// // import Divider from "@mui/material/Divider";
// // import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// // import ToggleButton from '@mui/material/ToggleButton';
// // import Grid from '@mui/material/Grid';
// // import  IconButton  from "@mui/material/IconButton";
// // import CheckIcon from '@mui/icons-material/Check';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
// // import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
// // import { hover } from "@testing-library/user-event/dist/hover";
// // import { createTheme,ThemeProvider } from "@mui/material/styles";
// // import TextField from '@mui/material/TextField';
// // import { v4 as uuidv4 } from 'uuid';
// // import { Article } from "@mui/icons-material";


// const theme = createTheme({
//   Typography:{
//     fontFamily:["Alexandria"],
//   },
// });


// const App = () => {
 
//   return (
//     <ThemeProvider theme={theme}>
//     <div style={{display:"flex", justifyContent:"center",alignItems:"center",background:"green",height:"100vh", direction:"rtl"}}>
//       <TodoList/>
//     </div>
//     </ThemeProvider>
//   )
// }
// export default App;

// const todoApi=[
//   {
//     id:uuidv4(),
//     title:"قراءة الكتاب",
//     detail:"1111لببلبلبيلل",
//     isComplited:false
//   },
//   {
//     id:uuidv4(),
//     title:"2قراءة الكتاب",
//     detail:"222لببلبلبيلل",
//     isComplited:false
//   },
  
// ]


// const TodoList = () => {
//   const [todos,SetTodos]=useState(todoApi)
//   const [titleInput,SetTitleInput]=useState("")

//   function handleCheckclickMain(todoId){
//   alert("Hello this is from parant "+(todoId))
//   }

// const todoMap=todos.map((t)=>{
//    return(<Todo key={t.id} todo={t} handle={handleCheckclickMain}/> )
// })




// function handleAtClick(){
//   const newTodo={
//  id:uuidv4(),
//  title:titleInput,
//  detail:"",
//  isComplited:false
// }
// SetTodos([...todos,newTodo])
// SetTitleInput("")
//  }

//  function onChangeField(e){
//   SetTitleInput(e.target.value)
//  }


//   return (
//     <>
  
//     <div  >
 



//         <Container maxWidth="md"   >
//     <Card  sx={{minWidth:475}}>
 
//     <CardContent >
//       <Typography variant="h2" gutterBottom sx={{}} color= 'text.secondary'>
//       مهامي
//       </Typography>
//      <Divider/>

//      {/* Filter Button  */}
//      <ToggleButtonGroup
//      style={{marginTop:"20px"}}
//       exclusive
     
//       aria-label="text alignment"
//     >
//       <ToggleButton value="left" >
//         الكل
//       </ToggleButton>
//       <ToggleButton value="center" >
//         المنجز
//       </ToggleButton>
//       <ToggleButton value="right" >
//        غير المنجز
//       </ToggleButton>
      
//     </ToggleButtonGroup>
//      {/* Filter Button  */}

//      {/* Todo Component  */}
//      {todoMap}
//      {/* Todo Component  */}


// {/* below create grid inside add input search with add button  */}
//       <Grid container spacing={2} style={{marginTop:"20px"}}>
//       <Grid   xs={8}  >
//         <Typography  variant="h4"  sx={{textAlign:"right"}} color= 'text.secondary'>
//         <TextField style={{width:"100%", direction:"ltr"}} id="outlined-basic" label="عنوان المهمة" variant="outlined" value={titleInput} onChange={onChangeField} />
//    </Typography>
   
//    {/* This is action button  */}
//         </Grid>
//         <Grid   xs={4}  >
        
//         <Button style={{width:"100%",height:"100%"}} variant="contained" href="#contained-buttons" onClick={handleAtClick}>
//        Add
//       </Button> 
  
//    </Grid>
//    </Grid>
//    {/* This is action button  */}
       

//     </CardContent>
   
//     </Card>

//       </Container>
//     </div>
//     </>
//   )
// }



// function Todo({todo,handle}){
//   function handleCheckClick(){
//  handle(todo.id)
//   }

//   return(
//     <>
//       <Card className="cardTodo"  sx={{minWidth:475, background:"blue",color:"white", marginTop:"5px"}}>
 
//  <CardContent >

//  <Grid container spacing={2}>
//         <Grid   xs={8}  >
//         <Typography variant="h4"  sx={{textAlign:"right"}} color= 'text.secondary'>
// {todo.title}
//    </Typography>
//    <Typography variant="h6"  sx={{textAlign:"right"}} color= 'text.secondary' fontFamily="A" fontWeight="200">
// {todo.detail}
//  </Typography>
//    {/* This is action button  */}
//         </Grid>
//         <Grid   xs={4} display="flex" justifyContent="space-around" alignItems="center">
//         <IconButton onClick={handleCheckClick} className="iconButton" aria-label="Check" style={{color:"green",background:"white",border:"solid 3px"}}>
//           <CheckIcon/>
//         </IconButton>

//         <IconButton className="iconButton" aria-label="Check" style={{color:"blue",background:"white",border:"solid 3px"}}>
//           <EditOutlinedIcon/>
//         </IconButton>

//         <IconButton className="iconButton" aria-label="Check" style={{color:"red",background:"white",border:"solid 3px"}}>
//           <DeleteForeverOutlinedIcon/>
//         </IconButton>
//         </Grid>
//       </Grid>
   
//   </CardContent>

//  </Card>
//     </>
//   )
// }
// // ---------------------------------
// // now we will work when u click tick it should show u isComplited true. but all ticks only one u click it. now in TodoList compoenent go to handleCheckclickMain and remove alert and add map .. and SetTodos it will make it isComplited only one u click on it .. if u want to tick show truc and tick again show false u have to create if inside but the shortcut one is t.isComplited= !t.isComplited..
// // if u want to show to the user that u tick it and its true add style to it. go to IconButton in style in Background add ternary operator ... 

// // import React, { useState } from "react";
// // import "./App.css";
// // import Stack from '@mui/material/Stack';
// // import Box from '@mui/material/Box';
// // import Container from '@mui/material/Container';
// // import Card from '@mui/material/Card';
// // import CardActions from '@mui/material/CardActions';
// // import CardContent from '@mui/material/CardContent';
// // import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';
// // import Divider from "@mui/material/Divider";
// // import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// // import ToggleButton from '@mui/material/ToggleButton';
// // import Grid from '@mui/material/Grid';
// // import  IconButton  from "@mui/material/IconButton";
// // import CheckIcon from '@mui/icons-material/Check';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
// // import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
// // import { hover } from "@testing-library/user-event/dist/hover";
// // import { createTheme,ThemeProvider } from "@mui/material/styles";
// // import TextField from '@mui/material/TextField';
// // import { v4 as uuidv4 } from 'uuid';
// // import { Article } from "@mui/icons-material";


// const theme = createTheme({
//   Typography:{
//     fontFamily:["Alexandria"],
//   },
// });


// const App = () => {
 
//   return (
//     <ThemeProvider theme={theme}>
//     <div style={{display:"flex", justifyContent:"center",alignItems:"center",background:"green",height:"100vh", direction:"rtl"}}>
//       <TodoList/>
//     </div>
//     </ThemeProvider>
//   )
// }
// export default App;

// const todoApi=[
//   {
//     id:uuidv4(),
//     title:"قراءة الكتاب",
//     detail:"1111لببلبلبيلل",
//     isComplited:false
//   },
//   {
//     id:uuidv4(),
//     title:"2قراءة الكتاب",
//     detail:"222لببلبلبيلل",
//     isComplited:false
//   },
  
// ]


// const TodoList = () => {
//   const [todos,SetTodos]=useState(todoApi)
//   const [titleInput,SetTitleInput]=useState("")

//   function handleCheckclickMain(todoId){
//   const updateTodos=todos.map((t)=>{
//     if (t.id===todoId){
//       // t.isComplited=true;
//       // or u can add shortcut if statement if u click show true and click again show false is below uncomment below and comment above  
//       // t.isComplited=!t.isComplited
//       // the long if statement of above is below and comment above  
//       if (t.isComplited===true){
//         t.isComplited=false
//       }else{
//         t.isComplited=true
//       }
//     }
//     return t
//   })
//   SetTodos(updateTodos)
//   }

// const todoMap=todos.map((t)=>{
//    return(<Todo key={t.id} todo={t} handle={handleCheckclickMain}/> )
// })




// function handleAtClick(){
//   const newTodo={
//  id:uuidv4(),
//  title:titleInput,
//  detail:"",
//  isComplited:false
// }
// SetTodos([...todos,newTodo])
// SetTitleInput("")
//  }

//  function onChangeField(e){
//   SetTitleInput(e.target.value)
//  }


//   return (
//     <>
  
//     <div  >
 



//         <Container maxWidth="md"   >
//     <Card  sx={{minWidth:475}}>
 
//     <CardContent >
//       <Typography variant="h2" gutterBottom sx={{}} color= 'text.secondary'>
//       مهامي
//       </Typography>
//      <Divider/>

//      {/* Filter Button  */}
//      <ToggleButtonGroup
//      style={{marginTop:"20px"}}
//       exclusive
     
//       aria-label="text alignment"
//     >
//       <ToggleButton value="left" >
//         الكل
//       </ToggleButton>
//       <ToggleButton value="center" >
//         المنجز
//       </ToggleButton>
//       <ToggleButton value="right" >
//        غير المنجز
//       </ToggleButton>
      
//     </ToggleButtonGroup>
//      {/* Filter Button  */}

//      {/* Todo Component  */}
//      {todoMap}
//      {/* Todo Component  */}


// {/* below create grid inside add input search with add button  */}
//       <Grid container spacing={2} style={{marginTop:"20px"}}>
//       <Grid   xs={8}  >
//         <Typography  variant="h4"  sx={{textAlign:"right"}} color= 'text.secondary'>
//         <TextField style={{width:"100%", direction:"ltr"}} id="outlined-basic" label="عنوان المهمة" variant="outlined" value={titleInput} onChange={onChangeField} />
//    </Typography>
   
//    {/* This is action button  */}
//         </Grid>
//         <Grid   xs={4}  >
        
//         <Button style={{width:"100%",height:"100%"}} variant="contained" href="#contained-buttons" onClick={handleAtClick}>
//        Add
//       </Button> 
  
//    </Grid>
//    </Grid>
//    {/* This is action button  */}
       

//     </CardContent>
   
//     </Card>

//       </Container>
//     </div>
//     </>
//   )
// }



// function Todo({todo,handle}){
//   function handleCheckClick(){
//  handle(todo.id)
//   }

//   return(
//     <>
//       <Card className="cardTodo"  sx={{minWidth:475, background:"blue",color:"white", marginTop:"5px"}}>
 
//  <CardContent >

//  <Grid container spacing={2}>
//         <Grid   xs={8}  >
//         <Typography variant="h4"  sx={{textAlign:"right"}} color= 'text.secondary'>
// {todo.title}
//    </Typography>
//    <Typography variant="h6"  sx={{textAlign:"right"}} color= 'text.secondary' fontFamily="A" fontWeight="200">
// {todo.detail}
//  </Typography>
//    {/* This is action button  */}
//         </Grid>
//         <Grid   xs={4} display="flex" justifyContent="space-around" alignItems="center">
//         <IconButton onClick={handleCheckClick} className="iconButton" aria-label="Check" style={{color:"green",background:todo.isComplited?"yellow":"white" ,border:"solid 3px"}}>
//           <CheckIcon/>
//         </IconButton>

//         <IconButton className="iconButton" aria-label="Check" style={{color:"blue",background:"white",border:"solid 3px"}}>
//           <EditOutlinedIcon/>
//         </IconButton>

//         <IconButton className="iconButton" aria-label="Check" style={{color:"red",background:"white",border:"solid 3px"}}>
//           <DeleteForeverOutlinedIcon/>
//         </IconButton>
//         </Grid>
//       </Grid>
   
//   </CardContent>

//  </Card>
//     </>
//   )
// }

// // -----------------------------
// // now we will use useContext on above code instead of props . u will create file for function to write CreateContext and add array bracket in paranthesis ..  then import it in App component to be the main page so from ther we can send any data. then take useState and Api variables from TodoList to App Component .. u will be import uuidv4 in App Component page. but here all in page one .. now u will see more errir like todo and SeetTodo .. so in App Component u will wrap the TodoList by TodoContext and add Provider and give value to it .. then u will go to TodoList page and import useContext but here we do all project in one page  also u will impor the variable of import {TodoContext} from "./App" in page TodoList and create write const {todos,SetTodos}=useContext(TodosContext) u here use {todos,SetTodos} destruction . and remove function (handleCheckClick )in todoList and add it to Todo Component and in paranthsis remove it and in updataTodos check to todo.id .. also remove handle in TodoList ... 

// // import React, { useState } from "react";
// // import "./App.css";
// // import Stack from '@mui/material/Stack';
// // import Box from '@mui/material/Box';
// // import Container from '@mui/material/Container';
// // import Card from '@mui/material/Card';
// // import CardActions from '@mui/material/CardActions';
// // import CardContent from '@mui/material/CardContent';
// // import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';
// // import Divider from "@mui/material/Divider";
// // import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// // import ToggleButton from '@mui/material/ToggleButton';
// // import Grid from '@mui/material/Grid';
// // import  IconButton  from "@mui/material/IconButton";
// // import CheckIcon from '@mui/icons-material/Check';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
// // import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
// // import { hover } from "@testing-library/user-event/dist/hover";
// // import { createTheme,ThemeProvider } from "@mui/material/styles";
// // import TextField from '@mui/material/TextField';
// // import { v4 as uuidv4 } from 'uuid';
// // import { Article } from "@mui/icons-material";
// // import { createContext } from "react";
// // import { useContext } from "react";


// // this is createContext variable 
// const TodoContext = createContext([]);
// // this is createContext variable 

// const theme = createTheme({
//   Typography:{
//     fontFamily:["Alexandria"],
//   },
// });

// // we will add todoApi in App Component page also useState send them to App Component .. 
// const todoApi=[
//   {
//     id:uuidv4(),
//     title:"قراءة الكتاب",
//     detail:"1111لببلبلبيلل",
//     isComplited:false
//   },
//   {
//     id:uuidv4(),
//     title:"2قراءة الكتاب",
//     detail:"222لببلبلبيلل",
//     isComplited:false
//   },
  
// ]

// const App = () => {
//   const [todos,SetTodos]=useState(todoApi)
//   return (

//     <ThemeProvider theme={theme}>

//     <div style={{display:"flex", justifyContent:"center",alignItems:"center",background:"green",height:"100vh", direction:"rtl"}}>
      
//       <TodoContext.Provider value={{todos,SetTodos}}>
//         <TodoList/>
//       </TodoContext.Provider>
      
//     </div>

//     </ThemeProvider>
//   )
// }
// export default App;



// const TodoList = () => {
//   const [titleInput,SetTitleInput]=useState("")
//   const {todos,SetTodos}=useContext(TodoContext);

  
// const todoMap=todos.map((t)=>{
//    return(<Todo key={t.id} todo={t} /> )
// })


// function handleCheckClick(){
//   const newTodo={
//  id:uuidv4(),
//  title:titleInput,
//  detail:"",
//  isComplited:false
// }
// SetTodos([...todos,newTodo])
// SetTitleInput("")
//  }

//  function onChangeField(e){
//   SetTitleInput(e.target.value)
//  }

//   return (
//     <>
  
//     <div  >
 
//         <Container maxWidth="md"   >
//     <Card  sx={{minWidth:475}}>
 
//     <CardContent >
//       <Typography variant="h2" gutterBottom sx={{}} color= 'text.secondary'>
//       مهامي
//       </Typography>
//      <Divider/>

//      {/* Filter Button  */}
//      <ToggleButtonGroup
//      style={{marginTop:"20px"}}
//       exclusive
     
//       aria-label="text alignment"
//     >
//       <ToggleButton value="left" >
//         الكل
//       </ToggleButton>
//       <ToggleButton value="center" >
//         المنجز
//       </ToggleButton>
//       <ToggleButton value="right" >
//        غير المنجز
//       </ToggleButton>
      
//     </ToggleButtonGroup>
//      {/* Filter Button  */}

//      {/* Todo Component  */}
//      {todoMap}
//      {/* Todo Component  */}


// {/* below create grid inside add input search with add button  */}
//       <Grid container spacing={2} style={{marginTop:"20px"}}>
//       <Grid   xs={8}  >
//         <Typography  variant="h4"  sx={{textAlign:"right"}} color= 'text.secondary'>
//         <TextField style={{width:"100%", direction:"ltr"}} id="outlined-basic" label="عنوان المهمة" variant="outlined" value={titleInput} onChange={onChangeField} />
//    </Typography>
   
//    {/* This is action button  */}
//         </Grid>
//         <Grid   xs={4}  >
        
//         <Button style={{width:"100%",height:"100%"}} variant="contained" href="#contained-buttons" onClick={handleCheckClick}>
//        Add
//       </Button> 
  
//    </Grid>
//    </Grid>
//    {/* This is action button  */}
       

//     </CardContent>
   
//     </Card>

//       </Container>
//     </div>
//     </>
//   )
// }



// function Todo({todo,handle}){
//   const {todos,SetTodos}=useContext(TodoContext)



//   function handleCheckClick(){
//     const updateTodos=todos.map((t)=>{
//       if (t.id===todo.id){
//         // t.isComplited=true;
//         // or u can add shortcut if statement if u click show true and click again show false is below uncomment below and comment above  
//         // t.isComplited=!t.isComplited
//         // the long if statement of above is below and comment above  
//         if (t.isComplited===true){
//           t.isComplited=false
//         }else{
//           t.isComplited=true
//         }
//       }
//       return t
//     })
//     SetTodos(updateTodos)


//   }

//   return(
//     <>
//       <Card className="cardTodo"  sx={{minWidth:475, background:"blue",color:"white", marginTop:"5px"}}>
 
//  <CardContent >

//  <Grid container spacing={2}>
//         <Grid   xs={8}  >
//         <Typography variant="h4"  sx={{textAlign:"right"}} color= 'text.secondary'>
// {todo.title}
//    </Typography>
//    <Typography variant="h6"  sx={{textAlign:"right"}} color= 'text.secondary' fontFamily="A" fontWeight="200">
// {todo.detail}
//  </Typography>
//    {/* This is action button  */}
//         </Grid>
//         <Grid   xs={4} display="flex" justifyContent="space-around" alignItems="center">
//         <IconButton onClick={handleCheckClick} className="iconButton" aria-label="Check" style={{color:"green",background:todo.isComplited?"yellow":"white" ,border:"solid 3px"}}>
//           <CheckIcon/>
//         </IconButton>

//         <IconButton className="iconButton" aria-label="Check" style={{color:"blue",background:"white",border:"solid 3px"}}>
//           <EditOutlinedIcon/>
//         </IconButton>

//         <IconButton className="iconButton" aria-label="Check" style={{color:"red",background:"white",border:"solid 3px"}}>
//           <DeleteForeverOutlinedIcon/>
//         </IconButton>
//         </Grid>
//       </Grid>
   
//   </CardContent>

//  </Card>
//     </>
//   )
// }

// // ------------------------
// // here we will work on delete todo. before it deleted it should show u pop msg to confirm of deletetion so we will take from mui the pop up msg and we write (modal) in mui. and there we will pick dialog Modal and we will import all Dialog ... then in Todo Component we will see error when we import Modal then we will create useState and in Dialiag in open we will add usestate (showDeleteDialog).. then go to IconButton of delete and add onClick and add variable handleDeleteClick then create it and add SetShowDeleteDialog and make it true then go to dialog add onClose and add variable and create variable outside and create handleClose and add SetShowDeleteDialog and make it false. now when u click delete button it pop up msg and when u click any place it disappear.. u can change the pop up msg and add arabic msg ... if u see wrabic letter on left u can add style to Dialog and add direction: rtl. also when msg pop up i have to click close and it should close then add to اغلاق button onclick .. but now when i click on نعم it should delete the todo by adding onclick to احذف button  


// // import React, { useState } from "react";
// // import "./App.css";
// // import Stack from '@mui/material/Stack';
// // import Box from '@mui/material/Box';
// // import Container from '@mui/material/Container';
// // import Card from '@mui/material/Card';
// // import CardActions from '@mui/material/CardActions';
// // import CardContent from '@mui/material/CardContent';
// // import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';
// // import Divider from "@mui/material/Divider";
// // import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// // import ToggleButton from '@mui/material/ToggleButton';
// // import Grid from '@mui/material/Grid';
// // import  IconButton  from "@mui/material/IconButton";
// // import CheckIcon from '@mui/icons-material/Check';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
// // import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
// // import { hover } from "@testing-library/user-event/dist/hover";
// // import { createTheme,ThemeProvider } from "@mui/material/styles";
// // import TextField from '@mui/material/TextField';
// // import { v4 as uuidv4 } from 'uuid';
// // import { Article } from "@mui/icons-material";
// // import { createContext } from "react";
// // import { useContext } from "react";
// // import Dialog from '@mui/material/Dialog';
// // import DialogActions from '@mui/material/DialogActions';
// // import DialogContent from '@mui/material/DialogContent';
// // import DialogContentText from '@mui/material/DialogContentText';
// // import DialogTitle from '@mui/material/DialogTitle';

// // this is createContext variable 
// const TodoContext = createContext([]);
// // this is createContext variable 

// const theme = createTheme({
//   Typography:{
//     fontFamily:["Alexandria"],
//   },
// });

// // we will add todoApi in App Component page also useState send them to App Component .. 
// const todoApi=[
//   {
//     id:uuidv4(),
//     title:"قراءة الكتاب",
//     detail:"1111لببلبلبيلل",
//     isComplited:false
//   },
//   {
//     id:uuidv4(),
//     title:"2قراءة الكتاب",
//     detail:"222لببلبلبيلل",
//     isComplited:false
//   },
  
// ]

// const App = () => {
//   const [todos,SetTodos]=useState(todoApi)
//   return (

//     <ThemeProvider theme={theme}>

//     <div style={{display:"flex", justifyContent:"center",alignItems:"center",background:"green",height:"100vh", direction:"rtl"}}>
      
//       <TodoContext.Provider value={{todos,SetTodos}}>
//         <TodoList/>
//       </TodoContext.Provider>
      
//     </div>

//     </ThemeProvider>
//   )
// }
// export default App;



// const TodoList = () => {
//   const [titleInput,SetTitleInput]=useState("")
//   const {todos,SetTodos}=useContext(TodoContext);

  
// const todoMap=todos.map((t)=>{
//    return(<Todo key={t.id} todo={t} /> )
// })


// function handleCheckClick(){
//   const newTodo={
//  id:uuidv4(),
//  title:titleInput,
//  detail:"",
//  isComplited:false
// }
// SetTodos([...todos,newTodo])
// SetTitleInput("")
//  }

//  function onChangeField(e){
//   SetTitleInput(e.target.value)
//  }

//   return (
//     <>
  
//     <div  >
 
//         <Container maxWidth="md"   >
//     <Card  sx={{minWidth:475}}>
 
//     <CardContent >
//       <Typography variant="h2" gutterBottom sx={{}} color= 'text.secondary'>
//       مهامي
//       </Typography>
//      <Divider/>

//      {/* Filter Button  */}
//      <ToggleButtonGroup
//      style={{marginTop:"20px"}}
//       exclusive
     
//       aria-label="text alignment"
//     >
//       <ToggleButton value="left" >
//         الكل
//       </ToggleButton>
//       <ToggleButton value="center" >
//         المنجز
//       </ToggleButton>
//       <ToggleButton value="right" >
//        غير المنجز
//       </ToggleButton>
      
//     </ToggleButtonGroup>
//      {/* Filter Button  */}

//      {/* Todo Component  */}
//      {todoMap}
//      {/* Todo Component  */}


// {/* below create grid inside add input search with add button  */}
//       <Grid container spacing={2} style={{marginTop:"20px"}}>
//       <Grid   xs={8}  >
//         <Typography  variant="h4"  sx={{textAlign:"right"}} color= 'text.secondary'>
//         <TextField style={{width:"100%", direction:"ltr"}} id="outlined-basic" label="عنوان المهمة" variant="outlined" value={titleInput} onChange={onChangeField} />
//    </Typography>
   
//    {/* This is action button  */}
//         </Grid>
//         <Grid   xs={4}  >
        
//         <Button style={{width:"100%",height:"100%"}} variant="contained" href="#contained-buttons" onClick={handleCheckClick}>
//        Add
//       </Button> 
  
//    </Grid>
//    </Grid>
//    {/* This is action button  */}
       

//     </CardContent>
   
//     </Card>

//       </Container>
//     </div>
//     </>
//   )
// }



// function Todo({todo,handle}){
//   const {todos,SetTodos}=useContext(TodoContext)
//   const [showDeleteDialog,SetShowDeleteDialog]=useState(false);

// // Event Handlers 
// function handleDeleteClick(){
// SetShowDeleteDialog(true)
// }

// function handleClose(){
//     SetShowDeleteDialog(false)
// }

// function handleDeleteConfirm(){
//     const updateTodos=todos.filter((t)=>{
//         if(t.id===todo.id){
//             return false
//         }else{
//             return true
//         }
//         // u can make above if statement shortcut as below use one of them and comment another 
//         // return t.id != todo.id
//     })
//     SetTodos(updateTodos)

// }
//   function handleCheckClick(){
//     const updateTodos=todos.map((t)=>{
//       if (t.id===todo.id){
//         // t.isComplited=true;
//         // or u can add shortcut if statement if u click show true and click again show false is below uncomment below and comment above  
//         // t.isComplited=!t.isComplited
//         // the long if statement of above is below and comment above  
//         if (t.isComplited===true){
//           t.isComplited=false
//         }else{
//           t.isComplited=true
//         }
//       }
//       return t
//     })
//     SetTodos(updateTodos)
//   }
// //Event Handlers 
//   return(
//     <>
//     {/* here we will add Modal (the pop up msg when u press delete) */}
//     <Dialog
//     style={{direction:"rtl"}}
//         open={showDeleteDialog}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">
//           {"Use Google's location service?"}
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             هل انت متأكد من  رغبتك من حذف المهمة؟
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>إغلاق</Button>
//           <Button onClick={handleDeleteConfirm} autoFocus>
//             نعم 
//           </Button>
//         </DialogActions>
//       </Dialog>
//     {/* here we will add Modal (the pop up msg when u press delete) */}



//       <Card className="cardTodo"  sx={{minWidth:475, background:"blue",color:"white", marginTop:"5px"}}>
 
//  <CardContent >

//  <Grid container spacing={2}>
//         <Grid   xs={8}  >
//         <Typography variant="h4"  sx={{textAlign:"right"}} color= 'text.secondary'>
// {todo.title}
//    </Typography>
//    <Typography variant="h6"  sx={{textAlign:"right"}} color= 'text.secondary' fontFamily="A" fontWeight="200">
// {todo.detail}
//  </Typography>
//    {/* This is action button  */}
//         </Grid>
//         <Grid   xs={4} display="flex" justifyContent="space-around" alignItems="center">
//         <IconButton onClick={handleCheckClick} className="iconButton" aria-label="Check" style={{color:"green",background:todo.isComplited?"yellow":"white" ,border:"solid 3px"}}>
//           <CheckIcon/>
//         </IconButton>

//         <IconButton className="iconButton" aria-label="Check" style={{color:"blue",background:"white",border:"solid 3px"}}>
//           <EditOutlinedIcon/>
//         </IconButton>

//         <IconButton onClick={handleDeleteClick} className="iconButton" aria-label="Check" style={{color:"red",background:"white",border:"solid 3px"}}>
//           <DeleteForeverOutlinedIcon/>
//         </IconButton>
//         </Grid>
//       </Grid>
   
//   </CardContent>

//  </Card>
//     </>
//   )
// }

// // -----------------------------------
// // here how to edit todo or update todo. now if u click edit button should pop up a message u can change title. go to mui and pick up Dialog. or u can make copy of delete dialog and paste it and go to mui copy testfield and add it in Dialog content and replace it with DialogContentText and add TextField u copy it from mui ... u get theis from mui Dialog - form Dialog ... then go add function to close and open also in button change the onClick and onChange and create function as u did for delete Dialog.. and change title or description ... also in label change it to عنوان المهمة .. make copy of it to use it for details .. go to IconButton of Edit and add onClick and add variable handleUpdateClick .. now when u click edit it pops up msg and click on close it closes. now on edit it should edit when i update the title or detail..  to do that .. u have to create new useState for title and detail ..and use todo,title and todo.detail in useState so when edit pop up it show u the title and detail... now connet it with textfield add value updateTodo and onChange in title also add value and onChange to Detail in Textfield .. now go to handleUpdateConfirm function add logic to it ... 


// // this is createContext variable 
// const TodoContext = createContext([]);
// // this is createContext variable 

// const theme = createTheme({
//   Typography:{
//     fontFamily:["Alexandria"],
//   },
// });

// // we will add todoApi in App Component page also useState send them to App Component .. 
// const todoApi=[
//   {
//     id:uuidv4(),
//     title:"قراءة الكتاب",
//     detail:"1111لببلبلبيلل",
//     isComplited:false
//   },
//   {
//     id:uuidv4(),
//     title:"2قراءة الكتاب",
//     detail:"222لببلبلبيلل",
//     isComplited:false
//   },
  
// ]

// const App = () => {
//   const [todos,SetTodos]=useState(todoApi)
//   return (

//     <ThemeProvider theme={theme}>

//     <div style={{display:"flex", justifyContent:"center",alignItems:"center",background:"green",height:"100vh", direction:"rtl"}}>
      
//       <TodoContext.Provider value={{todos,SetTodos}}>
//         <TodoList/>
//       </TodoContext.Provider>
      
//     </div>

//     </ThemeProvider>
//   )
// }
// export default App;



// const TodoList = () => {
//   const [titleInput,SetTitleInput]=useState("")
//   const {todos,SetTodos}=useContext(TodoContext);

  
// const todoMap=todos.map((t)=>{
//    return(<Todo key={t.id} todo={t} /> )
// })


// function handleCheckClick(){
//   const newTodo={
//  id:uuidv4(),
//  title:titleInput,
//  detail:"",
//  isComplited:false
// }
// SetTodos([...todos,newTodo])
// SetTitleInput("")
//  }

//  function onChangeField(e){
//   SetTitleInput(e.target.value)
//  }

//   return (
//     <>
  
//     <div  >
 
//         <Container maxWidth="md"   >
//     <Card  sx={{minWidth:475}}>
 
//     <CardContent >
//       <Typography variant="h2" gutterBottom sx={{}} color= 'text.secondary'>
//       مهامي
//       </Typography>
//      <Divider/>

//      {/* Filter Button  */}
//      <ToggleButtonGroup
//      style={{marginTop:"20px"}}
//       exclusive
     
//       aria-label="text alignment"
//     >
//       <ToggleButton value="left" >
//         الكل
//       </ToggleButton>
//       <ToggleButton value="center" >
//         المنجز
//       </ToggleButton>
//       <ToggleButton value="right" >
//        غير المنجز
//       </ToggleButton>
      
//     </ToggleButtonGroup>
//      {/* Filter Button  */}

//      {/* Todo Component  */}
//      {todoMap}
//      {/* Todo Component  */}


// {/* below create grid inside add input search with add button  */}
//       <Grid container spacing={2} style={{marginTop:"20px"}}>
//       <Grid   xs={8}  >
//         <Typography  variant="h4"  sx={{textAlign:"right"}} color= 'text.secondary'>
//         <TextField style={{width:"100%", direction:"ltr"}} id="outlined-basic" label="عنوان المهمة" variant="outlined" value={titleInput} onChange={onChangeField} />
//    </Typography>
   
//    {/* This is action button  */}
//         </Grid>
//         <Grid   xs={4}  >
        
//         <Button style={{width:"100%",height:"100%"}} variant="contained" href="#contained-buttons" onClick={handleCheckClick}>
//        Add
//       </Button> 
  
//    </Grid>
//    </Grid>
//    {/* This is action button  */}
       

//     </CardContent>
   
//     </Card>

//       </Container>
//     </div>
//     </>
//   )
// }



// function Todo({todo,handle}){
//   const {todos,SetTodos}=useContext(TodoContext)
//   const [showDeleteDialog,SetShowDeleteDialog]=useState(false);
//   const [showUpdateDialog,SetShowUpdateDialog]=useState(false);
//   const [updatedTodo,SetUpdatedTodo]=useState({title:todo.title,detail:todo.detail})

// // Event Handlers 
// function handleDeleteClick(){
// SetShowDeleteDialog(true)
// }

// function handleClose(){
//     SetShowDeleteDialog(false)
// }

// function handleDeleteConfirm(){
//     const updateTodos=todos.filter((t)=>{
//         if(t.id===todo.id){
//             return false
//         }else{
//             return true
//         }
//         // u can make above if statement shortcut as below use one of them and comment another 
//         // return t.id != todo.id
//     })
//     SetTodos(updateTodos)

// }
//   function handleCheckClick(){
//     const updateTodos=todoApi.map((t)=>{
//       if (t.id===todo.id){
//         // t.isComplited=true;
//         // or u can add shortcut if statement if u click show true and click again show false is below uncomment below and comment above  
//         // t.isComplited=!t.isComplited
//         // the long if statement of above is below and comment above  
//         if (t.isComplited===true){
//           t.isComplited=false
//         }else{
//           t.isComplited=true
//         }
//       }
//       return t
//     })
//     SetTodos(updateTodos)
//   }
// // below is Edit event handlers 
//   function handleUpdateClose(){
//     SetShowUpdateDialog(false)
// }
// function handleUpdateConfirm(){
//   const updatedTodos=todos.map((t)=>{
//     if(t.id===todo.id){
//       return {...t,title:updatedTodo.title,detail:updatedTodo.detail}
//     }else{
//       return t
//     }
//   })
//   SetTodos(updatedTodos);
//   SetShowUpdateDialog(false)
// }
// function handleUpdateClick(){
//   SetShowUpdateDialog(true)
//   }

// //Event Handlers 
//   return(
//     <>
// {/* here we will add Edit Modal Dialog  */}
// <Dialog
//     style={{direction:"rtl"}}
//         open={showUpdateDialog}
//         onClose={handleUpdateClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">
//          تعديل المهمة
//         </DialogTitle>
//         <DialogContent>
//         <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="name"
//             name="email"
//             label="عنوان المهمة"
//             type="email"
//             fullWidth
//             variant="standard"
//             value={updatedTodo.title}
//             onChange={((e)=>{SetUpdatedTodo({...updatedTodo,title:e.target.value})})}
//           />
//           <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="name"
//             name="email"
//             label="التفاصيل"
//             type="email"
//             fullWidth
//             variant="standard"
//             value={updatedTodo.detail}
//             onChange={((e)=>{SetUpdatedTodo({...updatedTodo,detail:e.target.value})})}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleUpdateClose}>إغلاق</Button>
//           <Button onClick={handleUpdateConfirm} autoFocus>
//             تأكيد 
//           </Button>
//         </DialogActions>
//       </Dialog>
// {/* here we will add Edit Modal Dialog  */}


//     {/* here we will add Modal (the pop up msg when u press delete) */}
//     <Dialog
//     style={{direction:"rtl"}}
//         open={showDeleteDialog}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">
//           {"Use Google's location service?"}
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             هل انت متأكد من  رغبتك من حذف المهمة؟
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>إغلاق</Button>
//           <Button onClick={handleDeleteConfirm} autoFocus>
//             نعم 
//           </Button>
//         </DialogActions>
//       </Dialog>
//     {/* here we will add Modal (the pop up msg when u press delete) */}



//       <Card className="cardTodo"  sx={{minWidth:475, background:"blue",color:"white", marginTop:"5px"}}>
 
//  <CardContent >

//  <Grid container spacing={2}>
//         <Grid   xs={8}  >
//         <Typography variant="h4"  sx={{textAlign:"right"}} color= 'text.secondary'>
// {todo.title}
//    </Typography>
//    <Typography variant="h6"  sx={{textAlign:"right"}} color= 'text.secondary' fontFamily="A" fontWeight="200">
// {todo.detail}
//  </Typography>
//    {/* This is action button  */}
//         </Grid>
//         <Grid   xs={4} display="flex" justifyContent="space-around" alignItems="center">
//         <IconButton onClick={handleCheckClick} className="iconButton" aria-label="Check" style={{color:"green",background:todo.isComplited?"yellow":"white" ,border:"solid 3px"}}>
//           <CheckIcon/>
//         </IconButton>

//         <IconButton onClick={handleUpdateClick} className="iconButton" aria-label="Check" style={{color:"blue",background:"white",border:"solid 3px"}}>
//           <EditOutlinedIcon/>
//         </IconButton>

//         <IconButton onClick={handleDeleteClick} className="iconButton" aria-label="Check" style={{color:"red",background:"white",border:"solid 3px"}}>
//           <DeleteForeverOutlinedIcon/>
//         </IconButton>
//         </Grid>
//       </Grid>
   
//   </CardContent>

//  </Card>
//     </>
//   )
// }

// // ------------------------------
// // tarmeez video 86,87,88
// // now  how to save all data in localStorage when it render should not change now when u refresh it changes like when u add anything and refresh it delete all changes . so how to save it in localStorage ... how to save data u have to go to SetTodos and below it add localStorage .. and when u save any data in localStorage convert it to string by doing that use Json setItem in handleCheckClick where we put SetTodo and go to useEfffect and create getItem and add variable of localStorage with using parse to convert the data .. then go to Todo component and add localStorage variable to handleDeleteConfirm and handleUpdateConfirm so when u delete or update it will not lose data when it render. useEffect means when it load page the delete and update will not lose data .. 


// // import React, { useState,useEffect } from "react";
// // import "./App.css";
// // import Stack from '@mui/material/Stack';
// // import Box from '@mui/material/Box';
// // import Container from '@mui/material/Container';
// // import Card from '@mui/material/Card';
// // import CardActions from '@mui/material/CardActions';
// // import CardContent from '@mui/material/CardContent';
// // import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';
// // import Divider from "@mui/material/Divider";
// // import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// // import ToggleButton from '@mui/material/ToggleButton';
// // import Grid from '@mui/material/Grid';
// // import  IconButton  from "@mui/material/IconButton";
// // import CheckIcon from '@mui/icons-material/Check';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
// // import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
// // import { hover } from "@testing-library/user-event/dist/hover";
// // import { createTheme,ThemeProvider } from "@mui/material/styles";
// // import TextField from '@mui/material/TextField';
// // import { v4 as uuidv4 } from 'uuid';
// // import { Article } from "@mui/icons-material";
// // import { createContext } from "react";
// // import { useContext } from "react";
// // import Dialog from '@mui/material/Dialog';
// // import DialogActions from '@mui/material/DialogActions';
// // import DialogContent from '@mui/material/DialogContent';
// // import DialogContentText from '@mui/material/DialogContentText';
// // import DialogTitle from '@mui/material/DialogTitle';


// // this is createContext variable 
// const TodoContext = createContext([]);
// // this is createContext variable 

// const theme = createTheme({
//   Typography:{
//     fontFamily:["Alexandria"],
//   },
// });

// // we will add todoApi in App Component page also useState send them to App Component .. 
// const todoApi=[
//   {
//     id:uuidv4(),
//     title:"قراءة الكتاب",
//     detail:"1111لببلبلبيلل",
//     isComplited:false
//   },
//   {
//     id:uuidv4(),
//     title:"2قراءة الكتاب",
//     detail:"222لببلبلبيلل",
//     isComplited:false
//   },
  
// ]

// const App = () => {
//   const [todos,SetTodos]=useState(todoApi)
//   return (

//     <ThemeProvider theme={theme}>

//     <div style={{display:"flex", justifyContent:"center",alignItems:"center",background:"green",height:"100vh", direction:"rtl"}}>
      
//       <TodoContext.Provider value={{todos,SetTodos}}>
//         <TodoList/>
//       </TodoContext.Provider>
      
//     </div>

//     </ThemeProvider>
//   )
// }
// export default App;



// const TodoList = () => {
//   const [titleInput,SetTitleInput]=useState("")
//   const {todos,SetTodos}=useContext(TodoContext);

  
// const todoMap=todod.map((t)=>{
//    return(<Todo key={t.id} todo={t} /> )
// })

// // here we put local storage in useEffect so when page load we dont lose data
// useEffect(()=>{
//   const storageTodos=JSON.parse(localStorage.getItem("todos"))
//   SetTodos(storageTodos)
// },[]);


// function handleCheckClick(){
//   const newTodo={
//  id:uuidv4(),
//  title:titleInput,
//  detail:"",
//  isComplited:false
// }
// const updatedTodos =[...todos,newTodo]
// SetTodos(updatedTodos)
// localStorage.setItem("todos",JSON.stringify(todos))
// SetTitleInput("")
//  }

//  function onChangeField(e){
//   SetTitleInput(e.target.value)
//  }

//   return (
//     <>
  
//     <div  >
 
//         <Container maxWidth="md"   >
//     <Card  sx={{minWidth:475}}>
 
//     <CardContent >
//       <Typography variant="h2" gutterBottom sx={{}} color= 'text.secondary'>
//       مهامي
//       </Typography>
//      <Divider/>

//      {/* Filter Button  */}
//      <ToggleButtonGroup
//      style={{marginTop:"20px"}}
//       exclusive
     
//       aria-label="text alignment"
//     >
//       <ToggleButton value="left" >
//         الكل
//       </ToggleButton>
//       <ToggleButton value="center" >
//         المنجز
//       </ToggleButton>
//       <ToggleButton value="right" >
//        غير المنجز
//       </ToggleButton>
      
//     </ToggleButtonGroup>
//      {/* Filter Button  */}

//      {/* Todo Component  */}
//      {todoMap}
//      {/* Todo Component  */}


// {/* below create grid inside add input search with add button  */}
//       <Grid container spacing={2} style={{marginTop:"20px"}}>
//       <Grid   xs={8}  >
//         <Typography  variant="h4"  sx={{textAlign:"right"}} color= 'text.secondary'>
//         <TextField style={{width:"100%", direction:"ltr"}} id="outlined-basic" label="عنوان المهمة" variant="outlined" value={titleInput} onChange={onChangeField} />
//    </Typography>
   
//    {/* This is action button  */}
//         </Grid>
//         <Grid   xs={4}  >
        
//         <Button style={{width:"100%",height:"100%"}} variant="contained" href="#contained-buttons" onClick={handleCheckClick}>
//        Add
//       </Button> 
  
//    </Grid>
//    </Grid>
//    {/* This is action button  */}
       

//     </CardContent>
   
//     </Card>

//       </Container>
//     </div>
//     </>
//   )
// }



// function Todo({todo,handle}){
//   const {todos,SetTodos}=useContext(TodoContext)
//   const [showDeleteDialog,SetShowDeleteDialog]=useState(false);
//   const [showUpdateDialog,SetShowUpdateDialog]=useState(false);
//   const [updatedTodo,SetUpdatedTodo]=useState({title:todo.title,detail:todo.detail})

// // Event Handlers 
// function handleDeleteClick(){
// SetShowDeleteDialog(true)
// }

// function handleClose(){
//     SetShowDeleteDialog(false)
// }

// function handleDeleteConfirm(){
//     const updateTodos=todos.filter((t)=>{
//         if(t.id===todo.id){
//             return false
//         }else{
//             return true
//         }
//         // u can make above if statement shortcut as below use one of them and comment another 
//         // return t.id != todo.id
//     })
//     SetTodos(updateTodos)
//     localStorage.setItem("todos",JSON.stringify(updateTodos))
// }
//   function handleCheckClick(){
//     const updateTodos=todoApi.map((t)=>{
//       if (t.id===todo.id){
//         // t.isComplited=true;
//         // or u can add shortcut if statement if u click show true and click again show false is below uncomment below and comment above  
//         // t.isComplited=!t.isComplited
//         // the long if statement of above is below and comment above  
//         if (t.isComplited===true){
//           t.isComplited=false
//         }else{
//           t.isComplited=true
//         }
//       }
//       return t
//     })
//     SetTodos(updateTodos)
//     localStorage.setItem("todos",JSON.stringify(updateTodos))
//   }
// // below is Edit event handlers 
//   function handleUpdateClose(){
//     SetShowUpdateDialog(false)
// }
// function handleUpdateConfirm(){
//   const updatedTodos=todos.map((t)=>{
//     if(t.id===todo.id){
//       return {...t,title:updatedTodo.title,detail:updatedTodo.detail}
//     }else{
//       return t
//     }
//   })
//   SetTodos(updatedTodos);
//   localStorage.setItem("todos",JSON.stringify(updatedTodo))
//   SetShowUpdateDialog(false)
// }
// function handleUpdateClick(){
//   SetShowUpdateDialog(true)
//   }

// //Event Handlers 
//   return(
//     <>
// {/* here we will add Edit Modal Dialog  */}
// <Dialog
//     style={{direction:"rtl"}}
//         open={showUpdateDialog}
//         onClose={handleUpdateClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">
//          تعديل المهمة
//         </DialogTitle>
//         <DialogContent>
//         <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="name"
//             name="email"
//             label="عنوان المهمة"
//             type="email"
//             fullWidth
//             variant="standard"
//             value={updatedTodo.title}
//             onChange={((e)=>{SetUpdatedTodo({...updatedTodo,title:e.target.value})})}
//           />
//           <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="name"
//             name="email"
//             label="التفاصيل"
//             type="email"
//             fullWidth
//             variant="standard"
//             value={updatedTodo.detail}
//             onChange={((e)=>{SetUpdatedTodo({...updatedTodo,detail:e.target.value})})}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleUpdateClose}>إغلاق</Button>
//           <Button onClick={handleUpdateConfirm} autoFocus>
//             تأكيد 
//           </Button>
//         </DialogActions>
//       </Dialog>
// {/* here we will add Edit Modal Dialog  */}


//     {/* here we will add Modal (the pop up msg when u press delete) */}
//     <Dialog
//     style={{direction:"rtl"}}
//         open={showDeleteDialog}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">
//           {"Use Google's location service?"}
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             هل انت متأكد من  رغبتك من حذف المهمة؟
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>إغلاق</Button>
//           <Button onClick={handleDeleteConfirm} autoFocus>
//             نعم 
//           </Button>
//         </DialogActions>
//       </Dialog>
//     {/* here we will add Modal (the pop up msg when u press delete) */}



//       <Card className="cardTodo"  sx={{minWidth:475, background:"blue",color:"white", marginTop:"5px"}}>
 
//  <CardContent >

//  <Grid container spacing={2}>
//         <Grid   xs={8}  >
//         <Typography variant="h4"  sx={{textAlign:"right"}} color= 'text.secondary'>
// {todo.title}
//    </Typography>
//    <Typography variant="h6"  sx={{textAlign:"right"}} color= 'text.secondary' fontFamily="A" fontWeight="200">
// {todo.detail}
//  </Typography>
//    {/* This is action button  */}
//         </Grid>
//         <Grid   xs={4} display="flex" justifyContent="space-around" alignItems="center">
//         <IconButton onClick={handleCheckClick} className="iconButton" aria-label="Check" style={{color:"green",background:todo.isComplited?"yellow":"white" ,border:"solid 3px"}}>
//           <CheckIcon/>
//         </IconButton>

//         <IconButton onClick={handleUpdateClick} className="iconButton" aria-label="Check" style={{color:"blue",background:"white",border:"solid 3px"}}>
//           <EditOutlinedIcon/>
//         </IconButton>

//         <IconButton onClick={handleDeleteClick} className="iconButton" aria-label="Check" style={{color:"red",background:"white",border:"solid 3px"}}>
//           <DeleteForeverOutlinedIcon/>
//         </IconButton>
//         </Grid>
//       </Grid>
   
//   </CardContent>

//  </Card>
//     </>
//   )
// }

// // ----------------------------------
// // now how to add isCompleted in منجزه and not Completed in غير منجزه .. and all in الكل .. we will add variables in TodoList as completedTodos and add filter function then create new useState named displayedTodosType and add "all" then go to togglebuttonGroup and in value add displayedTodoType and go to togglebutton add completed non completed and all .. add to togglebutton Group onChange named changedisplayedType .. now we will show if u click check it shows منجز if not checked it will go to non completed ... then create amother filter function one for completed and nother for non completed .. and create let variable and add if statement and take this variable named todosBeRendered added to map below it and changed with todos .. 




// // import React, { useState,useEffect } from "react";
// // import "./App.css";
// // import Stack from '@mui/material/Stack';
// // import Box from '@mui/material/Box';
// // import Container from '@mui/material/Container';
// // import Card from '@mui/material/Card';
// // import CardActions from '@mui/material/CardActions';
// // import CardContent from '@mui/material/CardContent';
// // import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';
// // import Divider from "@mui/material/Divider";
// // import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// // import ToggleButton from '@mui/material/ToggleButton';
// // import Grid from '@mui/material/Grid';
// // import  IconButton  from "@mui/material/IconButton";
// // import CheckIcon from '@mui/icons-material/Check';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
// // import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
// // import { hover } from "@testing-library/user-event/dist/hover";
// // import { createTheme,ThemeProvider } from "@mui/material/styles";
// // import TextField from '@mui/material/TextField';
// // import { v4 as uuidv4 } from 'uuid';
// // import { Article } from "@mui/icons-material";
// // import { createContext } from "react";
// // import { useContext } from "react";
// // import Dialog from '@mui/material/Dialog';
// // import DialogActions from '@mui/material/DialogActions';
// // import DialogContent from '@mui/material/DialogContent';
// // import DialogContentText from '@mui/material/DialogContentText';
// // import DialogTitle from '@mui/material/DialogTitle';


// // this is createContext variable 
// const TodoContext = createContext([]);
// // this is createContext variable 

// const theme = createTheme({
//   Typography:{
//     fontFamily:["Alexandria"],
//   },
// });

// // we will add todoApi in App Component page also useState send them to App Component .. 
// const todoApi=[
//   {
//     id:uuidv4(),
//     title:"قراءة الكتاب",
//     detail:"1111لببلبلبيلل",
//     isComplited:false
//   },
//   {
//     id:uuidv4(),
//     title:"2قراءة الكتاب",
//     detail:"222لببلبلبيلل",
//     isComplited:false
//   },
  
// ]

// const App = () => {
//   const [todos,SetTodos]=useState(todoApi)
//   return (

//     <ThemeProvider theme={theme}>

//     <div style={{display:"flex", justifyContent:"center",alignItems:"center",background:"green",height:"100vh", direction:"rtl"}}>
      
//       <TodoContext.Provider value={{todos,SetTodos}}>
//         <TodoList/>
//       </TodoContext.Provider>
      
//     </div>

//     </ThemeProvider>
//   )
// }
// export default App;



// const TodoList = () => {
//   const [titleInput,SetTitleInput]=useState("")
//   const {todos,SetTodos}=useContext(TodoContext);
// const [displayedTodoTypes,SetDisplayedTodoTypes]=useState("all")
  




// // filteration array
// const completedTodos=todos.filter((t)=>{
//   return t.isComplited
// })

// const NotCompletedTodos=todos.filter((t)=>{
//   return !t.isComplited
// })

// let todosBeRendered = todos
// if (displayedTodoTypes==="completed"){
//   todosBeRendered=completedTodos
// }else if (displayedTodoTypes==="non-completed"){
//  todosBeRendered=NotCompletedTodos
// } else{
//   todosBeRendered=todos
// }

// const todoMap=todosBeRendered.map((t)=>{
//   return(<Todo key={t.id} todo={t} /> )
// })

// // here we put local storage in useEffect so when page load we dont lose data
// useEffect(()=>{
//   const storageTodos=JSON.parse(localStorage.getItem("todos"))
//   SetTodos(storageTodos)
// },[]);

// function changeDisplayedType(e){
//   SetDisplayedTodoTypes(e.target.value)

// }

// function handleCheckClick(){
//   const newTodo={
//  id:uuidv4(),
//  title:titleInput,
//  detail:"",
//  isComplited:false
// }
// const updatedTodos =[...todos,newTodo]
// SetTodos(updatedTodos)
// localStorage.setItem("todos",JSON.stringify(todos))
// SetTitleInput("")
//  }

//  function onChangeField(e){
//   SetTitleInput(e.target.value)
//  }

//   return (
//     <>
  
//     <div  >
 
//         <Container maxWidth="md"   >
//     <Card  sx={{minWidth:475}}>
 
//     <CardContent >
//       <Typography variant="h2" gutterBottom sx={{}} color= 'text.secondary'>
//       مهامي
//       </Typography>
//      <Divider/>

//      {/* Filter Button  */}
//      <ToggleButtonGroup
//      value={displayedTodoTypes}
//      onChange={changeDisplayedType}
//      style={{marginTop:"20px"}}
//       exclusive
     
//       aria-label="text alignment"
//     >
//       <ToggleButton value="all" >
//         الكل
//       </ToggleButton>
//       <ToggleButton value="completed" >
//         المنجز
//       </ToggleButton>
//       <ToggleButton value="non-completed" >
//        غير المنجز
//       </ToggleButton>
      
//     </ToggleButtonGroup>
//      {/* Filter Button  */}

//      {/* Todo Component  */}
//      {todoMap}
//      {/* Todo Component  */}


// {/* below create grid inside add input search with add button  */}
//       <Grid container spacing={2} style={{marginTop:"20px"}}>
//       <Grid   xs={8}  >
//         <Typography  variant="h4"  sx={{textAlign:"right"}} color= 'text.secondary'>
//         <TextField style={{width:"100%", direction:"ltr"}} id="outlined-basic" label="عنوان المهمة" variant="outlined" value={titleInput} onChange={onChangeField} />
//    </Typography>
   
//    {/* This is action button  */}
//         </Grid>
//         <Grid   xs={4}  >
        
//         <Button style={{width:"100%",height:"100%"}} variant="contained" href="#contained-buttons" onClick={handleCheckClick}>
//        Add
//       </Button> 
  
//    </Grid>
//    </Grid>
//    {/* This is action button  */}
       

//     </CardContent>
   
//     </Card>

//       </Container>
//     </div>
//     </>
//   )
// }



// function Todo({todo,handle}){
//   const {todos,SetTodos}=useContext(TodoContext)
//   const [showDeleteDialog,SetShowDeleteDialog]=useState(false);
//   const [showUpdateDialog,SetShowUpdateDialog]=useState(false);
//   const [updatedTodo,SetUpdatedTodo]=useState({title:todo.title,detail:todo.detail})

// // Event Handlers 
// function handleDeleteClick(){
// SetShowDeleteDialog(true)
// }

// function handleClose(){
//     SetShowDeleteDialog(false)
// }

// function handleDeleteConfirm(){
//     const updateTodo=todos.filter((t)=>{
//         if(t.id===todo.id){
//             return false
//         }else{
//             return true
//         }
//         // u can make above if statement shortcut as below use one of them and comment another 
//         // return t.id != todo.id
//     })
//     SetTodos(updateTodo)
//     localStorage.setItem("todos",JSON.stringify(updateTodo))
// }
//   function handleCheckClick(){
//     const updateTodos=todos.map((t)=>{
//       if (t.id===todo.id){
//         // t.isComplited=true;
//         // or u can add shortcut if statement if u click show true and click again show false is below uncomment below and comment above  
//         // t.isComplited=!t.isComplited
//         // the long if statement of above is below and comment above  
//         if (t.isComplited===true){
//           t.isComplited=false
//         }else{
//           t.isComplited=true
//         }
//       }
//       return t
//     })
//     SetTodos(updateTodos)
//     localStorage.setItem("todos",JSON.stringify(updateTodos))
//   }
// // below is Edit event handlers 
//   function handleUpdateClose(){
//     SetShowUpdateDialog(false)
// }
// function handleUpdateConfirm(){
//   const updatedTodos=todos.map((t)=>{
//     if(t.id===todo.id){
//       return {...t,title:updatedTodo.title,detail:updatedTodo.detail}
//     }else{
//       return t
//     }
//   })
//   SetTodos(updatedTodos);
//   localStorage.setItem("todos",JSON.stringify(updatedTodo))
//   SetShowUpdateDialog(false)
// }
// function handleUpdateClick(){
//   SetShowUpdateDialog(true)
//   }

// //Event Handlers 
//   return(
//     <>
// {/* here we will add Edit Modal Dialog  */}
// <Dialog
//     style={{direction:"rtl"}}
//         open={showUpdateDialog}
//         onClose={handleUpdateClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">
//          تعديل المهمة
//         </DialogTitle>
//         <DialogContent>
//         <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="name"
//             name="email"
//             label="عنوان المهمة"
//             type="email"
//             fullWidth
//             variant="standard"
//             value={updatedTodo.title}
//             onChange={((e)=>{SetUpdatedTodo({...updatedTodo,title:e.target.value})})}
//           />
//           <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="name"
//             name="email"
//             label="التفاصيل"
//             type="email"
//             fullWidth
//             variant="standard"
//             value={updatedTodo.detail}
//             onChange={((e)=>{SetUpdatedTodo({...updatedTodo,detail:e.target.value})})}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleUpdateClose}>إغلاق</Button>
//           <Button onClick={handleUpdateConfirm} autoFocus>
//             تأكيد 
//           </Button>
//         </DialogActions>
//       </Dialog>
// {/* here we will add Edit Modal Dialog  */}


//     {/* here we will add Modal (the pop up msg when u press delete) */}
//     <Dialog
//     style={{direction:"rtl"}}
//         open={showDeleteDialog}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">
//           {"Use Google's location service?"}
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             هل انت متأكد من  رغبتك من حذف المهمة؟
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>إغلاق</Button>
//           <Button onClick={handleDeleteConfirm} autoFocus>
//             نعم 
//           </Button>
//         </DialogActions>
//       </Dialog>
//     {/* here we will add Modal (the pop up msg when u press delete) */}



//       <Card className="cardTodo"  sx={{minWidth:475, background:"blue",color:"white", marginTop:"5px"}}>
 
//  <CardContent >

//  <Grid container spacing={2}>
//         <Grid   xs={8}  >
//         <Typography variant="h4"  sx={{textAlign:"right"}} color= 'text.secondary'>
// {todo.title}
//    </Typography>
//    <Typography variant="h6"  sx={{textAlign:"right"}} color= 'text.secondary' fontFamily="A" fontWeight="200">
// {todo.detail}
//  </Typography>
//    {/* This is action button  */}
//         </Grid>
//         <Grid   xs={4} display="flex" justifyContent="space-around" alignItems="center">
//         <IconButton onClick={handleCheckClick} className="iconButton" aria-label="Check" style={{color:"green",background:todo.isComplited?"yellow":"white" ,border:"solid 3px"}}>
//           <CheckIcon/>
//         </IconButton>

//         <IconButton onClick={handleUpdateClick} className="iconButton" aria-label="Check" style={{color:"blue",background:"white",border:"solid 3px"}}>
//           <EditOutlinedIcon/>
//         </IconButton>

//         <IconButton onClick={handleDeleteClick} className="iconButton" aria-label="Check" style={{color:"red",background:"white",border:"solid 3px"}}>
//           <DeleteForeverOutlinedIcon/>
//         </IconButton>
//         </Grid>
//       </Grid>
   
//   </CardContent>

//  </Card>
//     </>
//   )
// }
// // ---------------------------------
// // how to add scroll to todo .. go to TodoList add style : maxHeight:"80vh", overflow:"scroll" ... and how to change color of add button if u not add any text if u add text it should show different color .. by adding Theme go to theme and add palette .. go to mui and import color .. and go to togglebuttongroup and add color:"priamry" and if u want to change color go to mui and take color code and add in main in theme in primary .... now we add if statement to button if there is no text show different color of button and if u add text showed show different colorr ..go to button and add disable with statmemt of less then legnth should show disable if u add text should not show disable .. disabled={titleInput.length===0}.... u can add lineThrough if its completed and ticked showed show linethrough .. go to Typography where u add {todo.title} and add style with textAlign is textDecoration: todo.isComplited?"line-through":"none"}} and u can do same on description.... 


// import React, { useState,useEffect } from "react";
// import "./App.css";
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Divider from "@mui/material/Divider";
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import ToggleButton from '@mui/material/ToggleButton';
// import Grid from '@mui/material/Grid';
// import  IconButton  from "@mui/material/IconButton";
// import CheckIcon from '@mui/icons-material/Check';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
// import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
// import { hover } from "@testing-library/user-event/dist/hover";
// import { createTheme,ThemeProvider } from "@mui/material/styles";
// import TextField from '@mui/material/TextField';
// import { v4 as uuidv4 } from 'uuid';
// import { Article } from "@mui/icons-material";
// import { createContext } from "react";
// import { useContext } from "react";
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';


// // this is createContext variable 
// const TodoContext = createContext([]);
// // this is createContext variable 

// const theme = createTheme({
//   Typography:{
//     fontFamily:["Alexandria"],
//   },
//   palette:{
//     primary:{
//         main:"#004d40"
//     }
//   }
// });

// // we will add todoApi in App Component page also useState send them to App Component .. 
// const todoApi=[
//   {
//     id:uuidv4(),
//     title:"قراءة الكتاب",
//     detail:"1111لببلبلبيلل",
//     isComplited:false
//   },
//   {
//     id:uuidv4(),
//     title:"2قراءة الكتاب",
//     detail:"222لببلبلبيلل",
//     isComplited:false
//   },
  
// ]

// const App = () => {
//   const [todos,SetTodos]=useState(todoApi)
//   return (

//     <ThemeProvider theme={theme}>

//     <div style={{display:"flex", justifyContent:"center",alignItems:"center",background:"green",height:"100vh", direction:"rtl"}}>
      
//       <TodoContext.Provider value={{todos,SetTodos}}>
//         <TodoList/>
//       </TodoContext.Provider>
      
//     </div>

//     </ThemeProvider>
//   )
// }
// export default App;


//  const TodoList = () => {
//   const [titleInput,SetTitleInput]=useState("")
//   const {todos,SetTodos}=useContext(TodoContext);
// const [displayedTodoTypes,SetDisplayedTodoTypes]=useState("all")


// // filteration array
// const completedTodos=todos && Array.isArray(todos)?
// todos.filter((todo)=>
//    todo.isComplited):[];


// const NotCompletedTodos= todos && Array.isArray(todos)?
// todos.filter((todo)=>
//    !todo.isComplited):[]


// let todosBeRendered = todos
// console.log(todosBeRendered)
// if (displayedTodoTypes==="completed"){
//   todosBeRendered=completedTodos
// }else if (displayedTodoTypes==="non-completed"){
//  todosBeRendered=NotCompletedTodos
// } else{
//   todosBeRendered=todos
// }

// const todoMap=todosBeRendered && Array.isArray(todosBeRendered)?todosBeRendered.map((t)=>{
//   return(<Todo key={t.id} todo={t} /> )
// }):[];

// // here we put local storage in useEffect so when page load we dont lose data
// useEffect(()=>{
//   const storageTodos=JSON.parse(localStorage.getItem("todos"))
//   SetTodos(storageTodos)
// },[]);

// function changeDisplayedType(e){
//   SetDisplayedTodoTypes(e.target.value)

// }

// function handleCheckClick(){
//   const newTodo={
//  id:uuidv4(),
//  title:titleInput,
//  detail:"",
//  isComplited:false
// }
// const updatedTodos =[...todos,newTodo]
// SetTodos(updatedTodos)
// localStorage.setItem("todos",JSON.stringify(todos))
// SetTitleInput("")
//  }

//  function onChangeField(e){
//   SetTitleInput(e.target.value)
//  }

//   return (
//     <>
  
//     <div  >
 
//         <Container maxWidth="md"   >
//     <Card  sx={{minWidth:475}} style={{maxHeight:"80vh", overflow:"scroll"}}>
 
//     <CardContent >
//       <Typography variant="h2" gutterBottom sx={{}} color= 'text.secondary'>
//       مهامي
//       </Typography>
//      <Divider/>

//      {/* Filter Button  */}
//      <ToggleButtonGroup
//      value={displayedTodoTypes}
//      onChange={changeDisplayedType}
//      style={{marginTop:"20px"}}
//       exclusive
//       color="primary"
     
//       aria-label="text alignment"
//     >
//       <ToggleButton value="all" >
//         الكل
//       </ToggleButton>
//       <ToggleButton value="completed" >
//         المنجز
//       </ToggleButton>
//       <ToggleButton value="non-completed" >
//        غير المنجز
//       </ToggleButton>
      
//     </ToggleButtonGroup>
//      {/* Filter Button  */}

//      {/* Todo Component  */}
//      {todoMap}
//      {/* Todo Component  */}


// {/* below create grid inside add input search with add button  */}
//       <Grid container spacing={2} style={{marginTop:"20px"}}>
//       <Grid   xs={8}  >
//         <Typography  variant="h4"  sx={{textAlign:"right"}} color= 'text.secondary'>
//         <TextField style={{width:"100%", direction:"ltr"}} id="outlined-basic" label="عنوان المهمة" variant="outlined" value={titleInput} onChange={onChangeField} />
//    </Typography>
   
//    {/* This is action button  */}
//         </Grid>
//         <Grid   xs={4}  >
        
//         <Button style={{width:"100%",height:"100%"}} variant="contained" href="#contained-buttons" onClick={handleCheckClick} disabled={titleInput.length===0}>
//        Add
//       </Button> 
  
//    </Grid>
//    </Grid>
//    {/* This is action button  */}
       

//     </CardContent>
   
//     </Card>

//       </Container>
//     </div>
//     </>
//   )
// }


// function Todo({ todo, handle }) {
//     const { todos, SetTodos } = useContext(TodoContext)
//     const [showDeleteDialog, SetShowDeleteDialog] = useState(false);
//     const [showUpdateDialog, SetShowUpdateDialog] = useState(false);
//     const [updatedTodo, SetUpdatedTodo] = useState({ title: todo.title, detail: todo.detail })
  
//     // Event Handlers 
//       function handleDeleteClick() {
//         SetShowDeleteDialog(true)
//       }
  
//       function handleClose() {
//         SetShowDeleteDialog(false)
//       }
  
//       function handleDeleteConfirm() {
//         const updateTodo = todos.filter((t) => {
//           if (t.id === todo.id) {
//             return false
//           } else {
//             return true
//           }
//           // u can make above if statement shortcut as below use one of them and comment another 
//           // return t.id != todo.id
//         })
//         SetTodos(updateTodo)
//         localStorage.setItem("todos", JSON.stringify(updateTodo))
//       }
  
//     function handleCheckClick() {
//         const updateTodos = todos.map((t) => {
//           if (t.id === todo.id) {
//           if (t.isComplited === true) {
//           t.isComplited = false
//           } else {
//           t.isComplited = true
//             }
//           }
//           return t
//         })
//         SetTodos(updateTodos)
//         localStorage.setItem("todos", JSON.stringify(updateTodos))
//       }
  
//     // below is Edit event handlers 
  
//    function handleUpdateClose() {
//    SetShowUpdateDialog(false)
//       }
//       function handleUpdateConfirm() {
//         const updatedTodos = todos.map((t) => {
//           if (t.id === todo.id) {
//             return { ...t, title: updatedTodo.title, detail: updatedTodo.detail }
//           } else {
//             return t
//           }
//         })
//         SetTodos(updatedTodos);
//         localStorage.setItem("todos", JSON.stringify(updatedTodo))
//         SetShowUpdateDialog(false)
//       }
  
//     function handleUpdateClick() {
//         SetShowUpdateDialog(true)
//       }
    
//     //Event Handlers 
  
//     return (
//         <>
//           {/* here we will add Edit Modal Dialog  */}
//           <Dialog
//             style={{ direction: "rtl" }}
//             open={showUpdateDialog}
//             onClose={handleUpdateClose}
//             aria-labelledby="alert-dialog-title"
//             aria-describedby="alert-dialog-description"
//           >
//             <DialogTitle id="alert-dialog-title">
//               تعديل المهمة
//             </DialogTitle>
//             <DialogContent>
//               <TextField
//                 autoFocus
//                 required
//                 margin="dense"
//                 id="name"
//                 name="email"
//                 label="عنوان المهمة"
//                 type="email"
//                 fullWidth
//                 variant="standard"
//                 value={updatedTodo.title}
//                 onChange={((e) => { SetUpdatedTodo({ ...updatedTodo, title: e.target.value }) })}
//               />
  
//             <TextField
//                 autoFocus
//                 required
//                 margin="dense"
//                 id="name"
//                 name="email"
//                 label="التفاصيل"
//                 type="email"
//                 fullWidth
//                 variant="standard"
//                 value={updatedTodo.detail}
//                 onChange={((e) => { SetUpdatedTodo({ ...updatedTodo, detail: e.target.value }) })}
//               />
  
//           </DialogContent>
//             <DialogActions>
  
//             <Button onClick={handleUpdateClose}>إغلاق</Button>
//               <Button onClick={handleUpdateConfirm} autoFocus>
//                 تأكيد
//               </Button>
//             </DialogActions>
//           </Dialog>
//           {/* here we will add Edit Modal Dialog  */}
    
//         {/* here we will add Modal (the pop up msg when u press delete) */}
//           <Dialog
//             style={{ direction: "rtl" }}
//             open={showDeleteDialog}
//             onClose={handleClose}
//             aria-labelledby="alert-dialog-title"
//             aria-describedby="alert-dialog-description"
//           >
//             <DialogTitle id="alert-dialog-title">
//               {"Use Google's location service?"}
//             </DialogTitle>
//             <DialogContent>
//               <DialogContentText id="alert-dialog-description">
//                 هل انت متأكد من  رغبتك من حذف المهمة؟
//               </DialogContentText>
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={handleClose}>إغلاق</Button>
//               <Button onClick={handleDeleteConfirm} autoFocus>
//                 نعم
//               </Button>
//             </DialogActions>
//           </Dialog>
//           {/* here we will add Modal (the pop up msg when u press delete) */}
    
//        <Card className="cardTodo" sx={{ minWidth: 475, background: "blue", color: "white", marginTop: "5px" }}>
    
//          <CardContent >
//               <Grid container spacing={2}>
//                 <Grid xs={8}  >
//                  <Typography variant="h4" sx={{ textAlign: "right", textDecoration: todo.isComplited ? "line-through" : "none" }} >
//                     {todo.title}
//                   </Typography>
//                   <Typography variant="h6" sx={{ textAlign: "right" }} >
//                     {todo.detail}
//                   </Typography>
//                   {/* This is action button  */}
//                 </Grid>
//                 <Grid xs={4} display="flex" justifyContent="space-around" alignItems="center">
//                   <IconButton onClick={handleCheckClick} className="iconButton" aria-label="Check" style={{ color: "green", background: todo.isComplited ? "yellow" : "white", border: "solid 3px" }}>
//                     <CheckIcon />
//                   </IconButton>
    
//                 <IconButton onClick={handleUpdateClick} className="iconButton" aria-label="Check" style={{ color: "blue", background: "white", border: "solid 3px" }}>
//                     <EditOutlinedIcon />
//                   </IconButton>
//     <IconButton onClick={handleDeleteClick} className="iconButton" aria-label="Check" style={{ color: "red", background: "white", border: "solid 3px" }}>
//                     <DeleteForeverOutlinedIcon />
//                   </IconButton>
//                 </Grid>
//               </Grid>
//            </CardContent>
//           </Card>
//         </>
//       )
//     }



 // ----------------------------------
// after that you can send above code to use it in build by using npm run build check the video ... you can do it manually or by drag and drop ..... 

// ----------------------------
// now we will use useMemo ... useMemo is a React Hook that lets you cache the result of a calculation between re-renders... to optimize performance by memoizing expensive computations. With useMemo , React can store the result of a function call and reuse it when the dependencies of that function haven't changed, rather than recalculating the value on every render.


// ------------------------
// useMemo is like when u add console to completedTodos variable in TodoList and u do anything in project by adding and letter in search bar or check or delete it will print this console it means it will render from TodoList to botton when u do anything and it will make project heavy because if u do anything click to write will render from beginning to last ....also in notCompleted variable ... if u have 1000 todo it will render all these 1000 and it make it slow ... to stop re-render for all component is to use useMemo.. by call useMemo insidle useMEmo add parameter and add filter to it and use return inside it or it will give u error ... useMemo is same useEffect by add todo in array. also add useMemo to notCompletedTodos variable ..  


//  import React, { useState,useEffect, useMemo } from "react";
// import "./App.css";
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Divider from "@mui/material/Divider";
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import ToggleButton from '@mui/material/ToggleButton';
// import Grid from '@mui/material/Grid';
// import  IconButton  from "@mui/material/IconButton";
// import CheckIcon from '@mui/icons-material/Check';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
// import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
// import { hover } from "@testing-library/user-event/dist/hover";
// import { createTheme,ThemeProvider } from "@mui/material/styles";
// import TextField from '@mui/material/TextField';
// import { v4 as uuidv4 } from 'uuid';
// import { Article } from "@mui/icons-material";
// import { createContext } from "react";
// import { useContext } from "react";
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';


// // this is createContext variable 
// const TodoContext = createContext([]);
// // this is createContext variable 

// const theme = createTheme({
//   Typography:{
//     fontFamily:["Alexandria"],
//   },
//   palette:{
//     primary:{
//         main:"#004d40"
//     }
//   }
// });

// // we will add todoApi in App Component page also useState send them to App Component .. 
// const todoApi=[
//   {
//     id:uuidv4(),
//     title:"قراءة الكتاب",
//     detail:"1111لببلبلبيلل",
//     isComplited:false
//   },
//   {
//     id:uuidv4(),
//     title:"2قراءة الكتاب",
//     detail:"222لببلبلبيلل",
//     isComplited:false
//   },
  
// ]

// const App = () => {
//   const [todos,SetTodos]=useState(todoApi)
//   return (

//     <ThemeProvider theme={theme}>

//     <div style={{display:"flex", justifyContent:"center",alignItems:"center",background:"green",height:"100vh", direction:"rtl"}}>
      
//       <TodoContext.Provider value={{todos,SetTodos}}>
//         <TodoList/>
//       </TodoContext.Provider>
      
//     </div>

//     </ThemeProvider>
//   )
// }
// export default App;



// const TodoList = () => {
//     const [titleInput, SetTitleInput] = useState("")
//     const { todos, SetTodos } = useContext(TodoContext);
//     const [displayedTodoTypes, SetDisplayedTodoTypes] = useState("all")
 
//     // filteration array

//     const completedTodos = useMemo(() => {
//        return Array.isArray(todos) ? todos.filter((todo) =>
//          todo.isComplited) : [];
//        }, [todos]);
//     const NotCompletedTodos = useMemo(() => {
//         return Array.isArray(todos) ? todos.filter((todo) => 
//             !todo.isComplited) : [];
//         }, [todos]);

// // // or u can write above useMemo in one function but i will comment it 
// // // const { completedTodos, NotCompletedTodos } = useMemo(() => {
// // //     if (!Array.isArray(todos)) return { completedTodos: [], NotCompletedTodos: [] };
// // //     return {
// // //         completedTodos: todos.filter((todo) => todo.isComplited),
// // //         NotCompletedTodos: todos.filter((todo) => !todo.isComplited)
// // //         };
// // //         }, [todos]);
  
//     let todosBeRendered = todos
//     console.log(todosBeRendered)
//     if (displayedTodoTypes === "completed") {
//       todosBeRendered = completedTodos
//     } else if (displayedTodoTypes === "non-completed") {
//       todosBeRendered = NotCompletedTodos
//     } else {
//       todosBeRendered = todos
//     }
  
  
//     const todoMap = todosBeRendered && Array.isArray(todosBeRendered) ? todosBeRendered.map((t) => {
//       return (<Todo key={t.id} todo={t} />)
//     }) : [];
  
//     useEffect(() => {
//       const storageTodos = JSON.parse(localStorage.getItem("todos"));
//       if (Array.isArray(storageTodos)) {
//         SetTodos(storageTodos);
//       }
//     }, []);
  
 
//     function changeDisplayedType(e) {
//       SetDisplayedTodoTypes(e.target.value)
//     }
 
//    function handleCheckClick() {
//       const newTodo = {
//         id: uuidv4(),
//         title: titleInput,
//         detail: "",
//         isComplited: false
//       };
  
//      let updatedTodos;
//   if (!Array.isArray(todos)) {
//         updatedTodos = [newTodo];
//       } else {
//         updatedTodos = [...todos, newTodo];
//       }
//       SetTodos(updatedTodos);
//       localStorage.setItem("todos", JSON.stringify(updatedTodos));
//       SetTitleInput("");
//     }
  
//     function onChangeField(e) {
//       SetTitleInput(e.target.value)
//     }
//     return (
//      <>
//        <div  >
//           <Container maxWidth="md"   >
//             <Card sx={{ minWidth: 475 }} style={{ maxHeight: "80vh", overflow: "scroll" }}>
//               <CardContent >
//                 <Typography variant="h2" gutterBottom sx={{}} color='text.secondary'>
//                   مهامي
//                 </Typography>
//                 <Divider />
//                 {/* Filter Button  */}
//                 <ToggleButtonGroup
//                   value={displayedTodoTypes}
//                   onChange={changeDisplayedType}
//                   style={{ marginTop: "20px" }}
//                   exclusive
//                   color="primary"
//                   aria-label="text alignment"
//                 >
//                   <ToggleButton value="all" >
//                     الكل
//                   </ToggleButton>
//                   <ToggleButton value="completed" >
//                     المنجز
//                   </ToggleButton>
//                   <ToggleButton value="non-completed" >
//                     غير المنجز
//                   </ToggleButton>
//               </ToggleButtonGroup>
//                 {/* Filter Button  */}
//                 {/* Todo Component  */}
//                {todoMap}
//                 {/* Todo Component  */}
//                 {/* below create grid inside add input search with add button  */}
//                 <Grid container spacing={2} style={{ marginTop: "20px" }}>
//                   <Grid xs={8}  >
//                     <Typography variant="h4" sx={{ textAlign: "right" }} color='text.secondary'>
//                       <TextField style={{ width: "100%", direction: "ltr" }} id="outlined-basic" label="عنوان المهمة" variant="outlined" value={titleInput} onChange={onChangeField} />
//                       </Typography>
   
//                     {/* This is action button  */}
//                     </Grid>
//                     <Grid xs={4}  >
//                       <Button style={{ width: "100%", height: "100%" }} variant="contained" href="#contained-buttons" onClick={handleCheckClick} disabled={titleInput.length === 0}>
//                         Add
//                       </Button>
//                     </Grid>
//                  </Grid>
//                   {/* This is action button  */}
//                 </CardContent>
//               </Card>
//          </Container>
//          </div>
//        </>
//       )
//     }
   
//   function Todo({ todo, handle }) {
//       const { todos, SetTodos } = useContext(
//         TodoContext
//       )
//       const [showDeleteDialog, SetShowDeleteDialog] = useState(false);
//       const [showUpdateDialog, SetShowUpdateDialog] = useState(false);
//       const [updatedTodo, SetUpdatedTodo] = useState({ title: todo.title, detail: todo.detail })
//       // Event Handlers 
//       function handleDeleteClick() {
//         SetShowDeleteDialog(true)
//       }
  
//       function handleClose() {
//         SetShowDeleteDialog(false)
//       }
    
//     function handleDeleteConfirm() {
//         const updateTodo = todos.filter((t) => {
//           if (t.id === todo.id) {
//             return false
//           } else {
//             return true
//           }
  
//         // u can make above if statement shortcut as below use one of them and comment another 
//           // return t.id != todo.id
//         })
//         SetTodos(updateTodo)
//         localStorage.setItem("todos", JSON.stringify(updateTodo))
//       }
  
//     function handleCheckClick() {
//         const updateTodos = todos.map((t) => {
//           if (t.id === todo.id) {
//            if (t.isComplited === true) {
//               t.isComplited = false
//             } else {
//               t.isComplited = true
//             }
//           }
//           return t
//         })
//         SetTodos(updateTodos)
//         localStorage.setItem("todos", JSON.stringify(updateTodos))
//       }
//       // below is Edit event handlers 
//       function handleUpdateClose() {
//     SetShowUpdateDialog(false)
//       }
//       function handleUpdateConfirm() {
//         const updatedTodos = todos.map((t) => {
//           if (t.id === todo.id) {
//             return { ...t, title: updatedTodo.title, detail: updatedTodo.detail }
//           } else {
//             return t
//           }
//         })
//         SetTodos(updatedTodos);
//         localStorage.setItem("todos", JSON.stringify(updatedTodo))
//         SetShowUpdateDialog(false)
//       }
//       function handleUpdateClick() {
//         SetShowUpdateDialog(true)
//       }
    
//    //Event Handlers 
//       return (
//         <>
//          {/* here we will add Edit Modal Dialog  */}
//           <Dialog
//             style={{ direction: "rtl" }}
//             open={showUpdateDialog}
//             onClose={handleUpdateClose}
//             aria-labelledby="alert-dialog-title"
//             aria-describedby="alert-dialog-description"
//           >
//             <DialogTitle id="alert-dialog-title">
//               تعديل المهمة
//             </DialogTitle>
//             <DialogContent>
//               <TextField
//                 autoFocus
//                 required
//                 margin="dense"
//                 id="name"
//                 name="email"
//                 label="عنوان المهمة"
//                 type="email"
//                 fullWidth
//                 variant="standard"
//                 value={updatedTodo.title}
//                 onChange={((e) => { SetUpdatedTodo({ ...updatedTodo, title: e.target.value }) })}
//               />
//               <TextField
//                 autoFocus
//                 required
//                 margin="dense"
//                 id="name"
//                 name="email"
//                 label="التفاصيل"
//                 type="email"
//                 fullWidth
//                 variant="standard"
//                 value={updatedTodo.detail}
//                 onChange={((e) => { SetUpdatedTodo({ ...updatedTodo, detail: e.target.value }) })}
//               />
  
//          </DialogContent>
//             <DialogActions>
//               <Button onClick={handleUpdateClose}>إغلاق</Button>
//               <Button onClick={handleUpdateConfirm} autoFocus>
//                 تأكيد
//               </Button>
//             </DialogActions>
//           </Dialog>
//           {/* here we will add Edit Modal Dialog  */}
//          {/* here we will add Modal (the pop up msg when u press delete) */}
//           <Dialog
//             style={{ direction: "rtl" }}
//             open={showDeleteDialog}
//             onClose={handleClose}
//             aria-labelledby="alert-dialog-title"
//             aria-describedby="alert-dialog-description"
//           >
//             <DialogTitle id="alert-dialog-title">
//               {"Use Google's location service?"}
//             </DialogTitle>
//             <DialogContent>
//               <DialogContentText id="alert-dialog-description">
//                 هل انت متأكد من  رغبتك من حذف المهمة؟
//               </DialogContentText>
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={handleClose}>إغلاق</Button>
//               <Button onClick={handleDeleteConfirm} autoFocus>
//                 نعم
//               </Button>
//             </DialogActions>
//           </Dialog>
//           {/* here we will add Modal (the pop up msg when u press delete) */}
    
//         <Card className="cardTodo" sx={{ minWidth: 475, background: "blue", color: "white", marginTop: "5px" }}>
    
//          <CardContent >
//             <Grid container spacing={2}>
//                 <Grid xs={8}  >
//                   <Typography variant="h4" sx={{ textAlign: "right", textDecoration: todo.isComplited ? "line-through" : "none" }} >
//                     {todo.title}
//                   </Typography>
//                   <Typography variant="h6" sx={{ textAlign: "right" }} >
//                     {todo.detail}
//                   </Typography>
//                   {/* This is action button  */}
//                 </Grid>
//                 <Grid xs={4} display="flex" justifyContent="space-around" alignItems="center">
//                   <IconButton onClick={handleCheckClick} className="iconButton" aria-label="Check" style={{ color: "green", background: todo.isComplited ? "yellow" : "white", border: "solid 3px" }}>
//                     <CheckIcon />
//                   </IconButton>
    
//                <IconButton onClick={handleUpdateClick} className="iconButton" aria-label="Check" style={{ color: "blue", background: "white", border: "solid 3px" }}>
//                    <EditOutlinedIcon />
//                   </IconButton>
//     <IconButton onClick={handleDeleteClick} className="iconButton" aria-label="Check" style={{ color: "red", background: "white", border: "solid 3px" }}>
//                     <DeleteForeverOutlinedIcon />
//                   </IconButton>
//                 </Grid>
//               </Grid>
//            </CardContent>
//         </Card>
//         </>
//       )
//     }
// ---------------------------------------------
// how to move the Dialog to TodoList .we do it because we want to make one button and that button we use it as much we need but above each todo component has dialog which are check , delete, edit button and if u have more todo component will make it heavy .. so we will move it to Todolist . and we moved delete dialog from Todo to TodoList ... and u will move many variables and functions .. so now we will move dialog from todo to todoList next to Container .. it will show u errors when u move Dialog so u have to move functions as well. move shoeDeleteDialog state and paste it in TodoList.. also handleclose function and handleDeleteConfirmve it from Todo to Todolist and u have to move many function and create function in Todo so u can use it in TodoList . now it shows error that 'todo' is not defined .. it shows error because i dont have todo in TodoList .. u have to define todo.id ... also now when u click delete button in Todo show make  handleDeleteConfirmve work in TodoList ... first u will delete showDeleteDialog in Todo because u not using it and move it to TodoList also in the function handle close in Todo u will delete the SetShowDeleteDiang also now u will create u function in TodoList and pass it as props to Todo .this function name ShowDeletePass inside it add  SetShowDeleteDialog(true) .. then go to todoMap and add showDeletePass={openwDeletePass} then go to Todo add prop and remove handle next to it we dont use it ... then go to function handleDeleteClick and add that props (openDeletePass ()).. now it shows 'todo' is not defined .. u then in TodoList create useState of dialogTodo  and add it to function openDeletepass .. and go to function handleDeleteConfim and add dialogTodo the useState name in place of Todo.id and add dialogTodo.id then go to at the end of handleDeleteconform add SetShowDeleteDialog(false) so when u delete any todo the msg pop up and disappear.. all this we did if u go to inspect page in Component it will not show u dialog a lot ... 
// and we will do same with edit dialog above was delete dialog now we will do same with edit dialog .. go to Todo and cut Dialog and paste it in TodoList below delete dialog ..take showUpdatedialog and paste it in TodoList.. also take function from Todo and paste it in TodoList .. and now u will create function openUpdatePass in TodoList and add parameter (todo) and u can take  SetDialogTodo(todo) from openDeletePass and paste it in openUpdatePass then add SetShowUpdateDialog.. then go to const todoMap and add there showUpdate and this u will pass it to Todo Component add showUpdatePass as parameter and go to handleUpdateClick add showUpdatePass(todo) but will show u error that todo not defines .. u will go to handleUpdateConfirm and replace todo.id withdialogTodo.id. also change the title and detail with dialogtodo


import React, { useState,useEffect, useMemo } from "react";
import "./App.css";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Grid from '@mui/material/Grid';
import  IconButton  from "@mui/material/IconButton";
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { hover } from "@testing-library/user-event/dist/hover";
import { createTheme,ThemeProvider } from "@mui/material/styles";
import TextField from '@mui/material/TextField';
import { v4 as uuidv4 } from 'uuid';
import { Article } from "@mui/icons-material";
import { createContext } from "react";
import { useContext } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


// this is createContext variable 
const TodoContext = createContext([]);
// this is createContext variable 

const theme = createTheme({
  Typography:{
    fontFamily:["Alexandria"],
  },
  palette:{
    primary:{
        main:"#004d40"
    }
  }
});

// we will add todoApi in App Component page also useState send them to App Component .. 
const todoApi=[
  {
    id:uuidv4(),
    title:"قراءة الكتاب",
    detail:"1111لببلبلبيلل",
    isComplited:false
  },
  {
    id:uuidv4(),
    title:"2قراءة الكتاب",
    detail:"222لببلبلبيلل",
    isComplited:false
  },
  
]

const App = () => {
  const [todos,SetTodos]=useState(todoApi)
  return (

    <ThemeProvider theme={theme}>

    <div style={{display:"flex", justifyContent:"center",alignItems:"center",background:"green",height:"100vh", direction:"rtl"}}>
      
      <TodoContext.Provider value={{todos,SetTodos}}>
        <TodoList/>
      </TodoContext.Provider>
      
    </div>

    </ThemeProvider>
  )
}
export default App;


const TodoList = () => {
    const [dialogTodo,SetDialogTodo]=useState(null)
    const [titleInput, SetTitleInput] = useState("")
    const [showDeleteDialog, SetShowDeleteDialog] = useState(false);
    const [showUpdateDialog, SetShowUpdateDialog] = useState(false);
    const { todos, SetTodos } = useContext(TodoContext);
    const [displayedTodoTypes, SetDisplayedTodoTypes] = useState("all")
 
  
    function openDeletePass(todo){
        SetDialogTodo(todo)
      
        SetShowDeleteDialog(true)
    }
    function openUpdatePass(todo){
        SetDialogTodo(todo)
        SetShowUpdateDialog(true)
    }
    // filteration array

    const completedTodos = useMemo(() => {
       return Array.isArray(todos) ? todos.filter((todo) =>
         todo.isComplited) : [];
       }, [todos]);
    const NotCompletedTodos = useMemo(() => {
        return Array.isArray(todos) ? todos.filter((todo) => 
            !todo.isComplited) : [];
        }, [todos]);

// // or u can write above useMemo in one function but i will comment it 
// // const { completedTodos, NotCompletedTodos } = useMemo(() => {
// //     if (!Array.isArray(todos)) return { completedTodos: [], NotCompletedTodos: [] };
// //     return {
// //         completedTodos: todos.filter((todo) => todo.isComplited),
// //         NotCompletedTodos: todos.filter((todo) => !todo.isComplited)
// //         };
// //         }, [todos]);
  
    let todosBeRendered = todos
    console.log(todosBeRendered)
    if (displayedTodoTypes === "completed") {
      todosBeRendered = completedTodos
    } else if (displayedTodoTypes === "non-completed") {
      todosBeRendered = NotCompletedTodos
    } else {
      todosBeRendered = todos
    }
  
  
    const todoMap = todosBeRendered && Array.isArray(todosBeRendered) ? todosBeRendered.map((t) => {
      return (<Todo key={t.id} todo={t} openDeletePass={openDeletePass} openUpdatePass={openUpdatePass}/>)
    }) : [];
  
    useEffect(() => {
      const storageTodos = JSON.parse(localStorage.getItem("todos"));
      if (Array.isArray(storageTodos)) {
        SetTodos(storageTodos);
      }
    }, []);
  
 
    function changeDisplayedType(e) {
      SetDisplayedTodoTypes(e.target.value)
    }
 
   function handleCheckClick() {
      const newTodo = {
        id: uuidv4(),
        title: titleInput,
        detail: "",
        isComplited: false
      };
  
     let updatedTodos;
  if (!Array.isArray(todos)) {
        updatedTodos = [newTodo];
      } else {
        updatedTodos = [...todos, newTodo];
      }
      SetTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      SetTitleInput("");
    }
  
    function onChangeField(e) {
      SetTitleInput(e.target.value)
    }

    function handleClose() {
        SetShowDeleteDialog(false)

      }
      function handleDeleteConfirm() {
      
        const updateTodo = todos.filter((t) => {
          if (t.id === dialogTodo.id) {
            return false
          } else {
            return true
          }
  
        // u can make above if statement shortcut as below use one of them and comment another 
          // return t.id != todo.id
        })
        SetTodos(updateTodo)
        localStorage.setItem("todos", JSON.stringify(updateTodo))
        SetShowDeleteDialog(false)
      }

      // update function we moved from Todo to here 
      function handleUpdateClose() {
        SetShowUpdateDialog(false)
          }
          function handleUpdateConfirm() {
            const updatedTodos = todos.map((t) => {
              if (t.id === dialogTodo.id) {
                return { ...t, title: dialogTodo.title, detail: dialogTodo.detail }
              } else {
                return t
              }
            })
            SetTodos(updatedTodos);
            localStorage.setItem("todos", JSON.stringify(updatedTodos))
            SetShowUpdateDialog(false)
          }
    return (
     <>
       <div  >
           {/* here we will add Modal (the pop up msg when u press delete) */}
           <Dialog
            style={{ direction: "rtl" }}
            open={showDeleteDialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                هل انت متأكد من  رغبتك من حذف المهمة؟
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>إغلاق</Button>
              <Button onClick={handleDeleteConfirm} autoFocus>
                نعم
              </Button>
            </DialogActions>
          </Dialog>
          {/* here we will add Modal (the pop up msg when u press delete) */}
            {/* here we will add Edit Modal Dialog  */}
            <Dialog
            style={{ direction: "rtl" }}
            open={showUpdateDialog}
            onClose={handleUpdateClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >

    
            <DialogTitle id="alert-dialog-title">
              تعديل المهمة
            </DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="email"
                label="عنوان المهمة"
                type="email"
                fullWidth
                variant="standard"
                value={dialogTodo.title}
                onChange={((e) => { SetUpdatedTodo({ ...dialogTodo, title: e.target.value }) })}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="email"
                label="التفاصيل"
                type="email"
                fullWidth
                variant="standard"
                value={dialogTodo.detail}
                onChange={((e) => { SetUpdatedTodo({ ...dialogTodo, detail: e.target.value }) })}
              />
  
         </DialogContent>
            <DialogActions>
              <Button onClick={handleUpdateClose}>إغلاق</Button>
              <Button onClick={handleUpdateConfirm} autoFocus>
                تأكيد
              </Button>
            </DialogActions>
          </Dialog>
          {/* here we will add Edit Modal Dialog  */}
          <Container maxWidth="md"   >
            <Card sx={{ minWidth: 475 }} style={{ maxHeight: "80vh", overflow: "scroll" }}>
              <CardContent >
                <Typography variant="h2" gutterBottom sx={{}} color='text.secondary'>
                  مهامي
                </Typography>
                <Divider />
                {/* Filter Button  */}
                <ToggleButtonGroup
                  value={displayedTodoTypes}
                  onChange={changeDisplayedType}
                  style={{ marginTop: "20px" }}
                  exclusive
                  color="primary"
                  aria-label="text alignment"
                >
                  <ToggleButton value="all" >
                    الكل
                  </ToggleButton>
                  <ToggleButton value="completed" >
                    المنجز
                  </ToggleButton>
                  <ToggleButton value="non-completed" >
                    غير المنجز
                  </ToggleButton>
              </ToggleButtonGroup>
                {/* Filter Button  */}
                {/* Todo Component  */}
               {todoMap}
                {/* Todo Component  */}
                {/* below create grid inside add input search with add button  */}
                <Grid container spacing={2} style={{ marginTop: "20px" }}>
                  <Grid xs={8}  >
                    <Typography variant="h4" sx={{ textAlign: "right" }} color='text.secondary'>
                      <TextField style={{ width: "100%", direction: "ltr" }} id="outlined-basic" label="عنوان المهمة" variant="outlined" value={titleInput} onChange={onChangeField} />
                      </Typography>
   
                    {/* This is action button  */}
                    </Grid>
                    <Grid xs={4}  >
                      <Button style={{ width: "100%", height: "100%" }} variant="contained" href="#contained-buttons" onClick={handleCheckClick} disabled={titleInput.length === 0}>
                        Add
                      </Button>
                    </Grid>
                 </Grid>
                  {/* This is action button  */}
                </CardContent>
              </Card>
         </Container>
         </div>
       </>
      )
    }
//    -------------------------------------------------------
  function Todo({ todo, openDeletePass,openUpdatePass }) {
      const { todos, SetTodos } = useContext(TodoContext)
      const [updatedTodo, SetUpdatedTodo] = useState({ title: todo.title, detail: todo.detail })
      // Event Handlers 
      function handleDeleteClick() {
        openDeletePass(todo)
      }
  
    function handleCheckClick() {
        const updateTodos = todos.map((t) => {
          if (t.id === todo.id) {
           if (t.isComplited === true) {
              t.isComplited = false
            } else {
              t.isComplited = true
            }
          }
          return t
        })
        SetTodos(updateTodos)
        localStorage.setItem("todos", JSON.stringify(updateTodos))
      }
      // below is Edit event handlers 
 
      function handleUpdateClick() {
        openUpdatePass(todo)
      }
 
    
   //Event Handlers 
      return (
        <>
          
        <Card className="cardTodo" sx={{ minWidth: 475, background: "blue", color: "white", marginTop: "5px" }}>
    
         <CardContent >
            <Grid container spacing={2}>
                <Grid xs={8}  >
                  <Typography variant="h4" sx={{ textAlign: "right", textDecoration: todo.isComplited ? "line-through" : "none" }} >
                    {todo.title}
                  </Typography>
                  <Typography variant="h6" sx={{ textAlign: "right" }} >
                    {todo.detail}
                  </Typography>
                  {/* This is action button  */}
                </Grid>
                <Grid xs={4} display="flex" justifyContent="space-around" alignItems="center">
                  <IconButton onClick={handleCheckClick} className="iconButton" aria-label="Check" style={{ color: "green", background: todo.isComplited ? "yellow" : "white", border: "solid 3px" }}>
                    <CheckIcon />
                  </IconButton>
    
               <IconButton onClick={handleUpdateClick} className="iconButton" aria-label="Check" style={{ color: "blue", background: "white", border: "solid 3px" }}>
                   <EditOutlinedIcon />
                  </IconButton>
    <IconButton onClick={handleDeleteClick} className="iconButton" aria-label="Check" style={{ color: "red", background: "white", border: "solid 3px" }}>
                    <DeleteForeverOutlinedIcon />
                  </IconButton>
                </Grid>
              </Grid>
           </CardContent>
        </Card>
        </>
      )
    }

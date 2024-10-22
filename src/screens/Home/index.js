// // import React from "react";
// // import "./styles.css";
// // import { useNavigate } from "react-router-dom"; // For navigation

// // function Home() {
// //   const navigate = useNavigate(); // Hook to navigate programmatically

// //   const goToThrottlePage = () => {
// //     navigate("/about"); // Navigate to the "About" page
// //   };

// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <h1 className="textStyle">Hello World</h1>
// //         <h4>Franklin Samuvel</h4>
// //         <h4>Software Developer</h4>
// //         <button className="button" onClick={goToThrottlePage}>
// //           Go to About
// //         </button>
// //       </header>
// //     </div>
// //   );
// // }

// // export default Home;
// // //

// // src/pages/Homepage.js
// import React from "react";

// const Homepage = () => {
//   return (
//     <div>
//       <h1>Welcome to Our Website</h1>
//       <p>This is the homepage of our React app.</p>
//     </div>
//   );
// };

// export default Homepage;

import React from "react";
import "./styles.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <p>This is the home screen of our React app.</p>
    </div>
  );
}

export default Home;

// // src/components/Navbar.js

// import React from 'react';
// import { Link } from 'react-scroll';
// import '../css/Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">LOGO</div>
//       <ul className="nav-links">
//         <li>
//           <Link to="events" smooth={true} duration={500}>EVENTS</Link>
//         </li>
//         <li>
//           <Link to="gallery" smooth={true} duration={500}>GALLERY</Link>
//         </li>
//         <li>
//           <Link to="team" smooth={true} duration={500}>TEAM</Link>
//         </li>
//         <li>
//           <Link to="contact" smooth={true} duration={500}>CONTACT</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <div className="nav-links">
        <Link to="/events" className="nav-link">EVENTS</Link>
        <Link to="/gallery" className="nav-link">GALLERY</Link>
        <Link to="/team" className="nav-link">TEAM</Link>
        <Link to="/contact" className="nav-link">CONTACT</Link>
      </div>
    </nav>
  );
};

export default Navbar;

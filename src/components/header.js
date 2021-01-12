import React from 'react';

function Header() {
    return (
      <nav className="nav_bar">
        <div className="logo">TaanS🎧</div>
           <ul>
              <li>Home</li>
              <li>Our Products</li>
              <li>About Us</li>
              <li>Contact</li>
           </ul>
        
         <div className="search">
         
            <input
            type="text"
             placeholder="Search..."
             />
          
           <i className="fa fa-search"></i>
           <i className="fa fa-shopping-basket"></i>
         </div>
     </nav>
    );
}

export default Header;

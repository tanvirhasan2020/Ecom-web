import React from 'react';


function Footer() {
  
    const CurrentYear= new Date().getFullYear();

    return (
        <div className="footer">
          <h4>Copyright @{CurrentYear}</h4>
          <div className="social-icon">
              <i className="fa icon fa-facebook-square"></i>
              <i className="fa icon fa-instagram"></i>
              <i className="fa icon fa-twitter"></i>
          </div>
        </div>
    );
}


export default Footer;
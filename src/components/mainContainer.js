import React from 'react';
import product_card from "../data/product_data";


const MainContent = () =>  {
 
     const listItems = product_card.map((item)=>
       <div className="card" key={item.id}>
           <div className="card_img">
               <img height='250px' width="200px" src={item.thumb} alt="img" />
           </div>
           <div className="card_header">
             <h2>{item.product_name}</h2>
              <p>{item.description}</p>
              <p className="price">{item.price}<span>{item.currency}</span></p>
              <div className="btn">Add to card</div>
           
           </div>
         </div>
     );

    return (
        <div className="main_content">
          <h2 className="head">Headphones</h2>
            {listItems}
        </div>
    );
}


export default MainContent;
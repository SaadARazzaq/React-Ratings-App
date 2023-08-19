import React from 'react';
import './App.css';

const App = () => {
  
  /*

  ** INTUITION **

  As we used 5 filled and 5 empty stars and used slice method here. Suppose I entered '1', 
  then in slice method, 5 - stars meaning (5 - 1) becomes 4 so it will start from 4th star 
  that is filled and 10 - stars meaning (10 - 1) becomes 9 so iterates from 4,5,6,7,8,9 
  where 5 to 9 are empty stars displaying 4 empty stars and one filled star.
  
  */

  const rating = (stars) => '★★★★★☆☆☆☆☆'.slice(5 - stars, 10 - stars);

  return (
    <div className="container">
      <h1>Star Ratings</h1>
      <div className="star-container">
        <p className="star">Rating: {rating(1)}</p>
      </div>
      <div className="star-container">
        <p className="star">Rating: {rating(2)}</p>
      </div>
      <div className="star-container">
        <p className="star">Rating: {rating(3)}</p>
      </div>
      <div className="star-container">
        <p className="star">Rating: {rating(4)}</p>
      </div>
      <div className="star-container">
        <p className="star">Rating: {rating(5)}</p>
      </div>
    </div>
  );
};

export default App;
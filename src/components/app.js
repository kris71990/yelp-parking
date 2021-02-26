import React, { useState } from 'react';
import superagent from 'superagent';

import LotList from './lot-list';

const App = () => {
  const [location, setLocation] = useState('');
  const [parkingLots, setParkingLots] = useState([]);
  const [total, setTotal] = useState(undefined);

  const handleSubmit = (e) => {
    e.preventDefault();
    return superagent(`${API_URL}/yelp/parking`)
      .query({ location })
      .then((response) => {
        const sortByRating = response.body.businesses.sort((a, b) => {
          return a.rating - b.rating;
        });
        setParkingLots(sortByRating);
        return setTotal(response.body.total);
      });
  };

  const handleChange = (e) => {
    setTotal(undefined);
    setParkingLots([]);
    setLocation(e.target.value);
  };

  return (
    <div className="app">
      <h1>Find Parking</h1>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          onChange={ handleChange }
        />
        <button type="submit">Find</button>
      </form>
      {
        total ?
          <LotList parkingLots={ parkingLots }/>
          : null
      }
    </div>
  );
};

export default App;

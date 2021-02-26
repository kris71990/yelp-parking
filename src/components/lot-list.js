import React from 'react';
import PropTypes from 'prop-types';

const LotList = (props) => {
  const { parkingLots } = props;
  return (
    <ul>
      {
        parkingLots.map((lot) => {
          return (
            <li key={ lot.id }>
              <img src={ lot.image_url }/>
              <p>Name: { lot.name }</p>
              <p>Address: { lot.location.display_address.join() }</p>
              <p>Review Count: { lot.review_count }</p>
              <p>Rating: { lot.rating }</p>
              <p>Score: { (lot.review_count * lot.rating) / (lot.review_count + 1) }</p>
              <a href={ lot.url }>See on Yelp</a>
            </li>
          );
        })
      }
    </ul>
  );
};

LotList.propTypes = {
  parkingLots: PropTypes.array,
};

export default LotList;

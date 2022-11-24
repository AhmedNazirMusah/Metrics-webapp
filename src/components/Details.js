import React from 'react';
import { useSelector } from 'react-redux';

const Details = () => {
  const { details } = useSelector((state) => state.details);
  const [coins] = details;
  return (
    <div className="detail-div">
      <h1>
        Name :
        {' '}
        {coins.name}
        {' '}
        <br />
        {' '}
        Market Cap Rank :
        {' '}
        {coins.market_cap_rank}
      </h1>
      <img src={coins.image} alt={coins.name} className="c-images" />
      <h2>
        Current Price :
        {' '}
        {coins.current_price}
        $
      </h2>
      <h2>
        Circulating Supply :
        {' '}
        {coins.circulating_supply}
      </h2>
      <p>
        Last Updated :
        {' '}
        {coins.last_updated}
      </p>

    </div>
  );
};

export default Details;

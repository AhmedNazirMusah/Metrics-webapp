import { useDispatch, useSelector } from 'react-redux';
import { useEffect, React, useState } from 'react';
import { BsForward } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { fetchCryptos } from '../redux/cryptoSlice';
import { viewDetails } from '../redux/detailSlice';

const Home = () => {
  const [Allcurrencies, setCurrency] = useState('');
  const { cryptos, status } = useSelector((state) => state.cryptos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCryptos());
  }, [dispatch]);

  const handleViewDetails = (crypto) => {
    dispatch(viewDetails(crypto));
  };

  return (
    <div>
      {status === 'pending' ? (
        <p>Loading...</p>
      ) : (
        <>
          <section>
            <input
              className="input-field"
              value={Allcurrencies}
              onChange={(e) => setCurrency(e.target.value)}
              type="text"
              placeholder="Search Coin"
            />
          </section>

          <section className="coin-holder">
            {cryptos
              .filter((cryptoSearch) => cryptoSearch.name
                .toLowerCase()
                .includes(Allcurrencies.toLowerCase()))
              .map((crypto) => (
                <div key={crypto.id}>
                  <div className="arrow">
                    <Link to="/details" className="LL">
                      <BsForward
                        onClick={() => handleViewDetails(crypto)}
                        className="detail-link"
                      />
                    </Link>
                  </div>
                  <div className="coin-card">
                    <img
                      src={crypto.image}
                      alt={crypto.name}
                      className="c-images"
                    />
                    <p>{crypto.name}</p>
                  </div>
                </div>
              ))}
          </section>
        </>
      )}
    </div>
  );
};

export default Home;

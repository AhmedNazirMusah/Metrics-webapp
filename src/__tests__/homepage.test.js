import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from '../components/Home';
import store from '../redux/store';

describe('Test for Home Page', () => {
  test('testing homepage to macth snapshot', () => {
    const homePage = render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>,
    );
    expect(homePage).toMatchSnapshot();
  });
});

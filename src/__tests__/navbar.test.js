import React from 'react';
import { render } from '@testing-library/react';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import { TiHomeOutline } from 'react-icons/ti';

describe('Test NAv component', () => {
  it('renders correctly', () => {
    const tree = render(
      <Router>
        <NavLink className="home-link" to="/">
          <TiHomeOutline className="home-svg" />
        </NavLink>
      </Router>,
    );
    expect(tree).toMatchSnapshot();
  });
});

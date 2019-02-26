import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Landing = () => (
  <div>
    <h1>Landing</h1>
    <Link to={ROUTES.SIGN_IN}>Sign In</Link>
  </div>
);

export default Landing;

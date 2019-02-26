import React from 'react';
import SignOutButton from '../SignOut';

import styled from 'styled-components';

const RadioButton = styled('input')`
  transform: scale(2);
  margin: 20px;
`



const StatusPage = () => (
  <div>
      <div><RadioButton type="radio" />Staying home</div>
      <div><RadioButton type="radio" checked />On my way</div>
      <div><RadioButton type="radio" />Arrived</div>

<SignOutButton >Inactivate / Log out</SignOutButton>
  </div>
);

export default StatusPage;

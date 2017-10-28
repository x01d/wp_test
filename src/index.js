import React from 'react';
import { render } from 'react-dom';

import { cube } from './math';

import './style.css';

const Cuber = () => (
  <div className='cuber'>3 cubed is equal {cube(3)}</div>
);

render(<Cuber />, document.getElementById('root'));

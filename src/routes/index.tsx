import * as React from 'react';
import { About, Explorer } from '../pages';

const routes = [
  { path: '/about', label: 'About', component: () => <About /> },
  { path: '/explorer', label: 'Explorer', component: () => <Explorer /> },
];

export default routes;
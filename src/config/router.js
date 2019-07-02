import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Libai from '../components/Libai';
import Dufu from '../components/Dufu';
import Lishangyin from '../components/Lishangyin';
const routeCofig = [
  {
    path: '/',
    component: Libai
  },
  {
    path: '/libai',
    component: Libai
  },
  {
    path: '/dufu',
    component: Dufu
  },
  {
    path: '/lishangyin',
    component: Lishangyin
  }
];
export default routeCofig;

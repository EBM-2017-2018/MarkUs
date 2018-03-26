import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import {setUserFromApi} from "./components/UserManager";
import App from './components/App';

import 'typeface-roboto';
import './index.css';

setUserFromApi()
  .then(
    ReactDOM.render(
      <Router>
        <App />
      </Router>,
      document.getElementById('root')
    )
  )

registerServiceWorker()

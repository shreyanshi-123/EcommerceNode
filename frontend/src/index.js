import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "yet-another-react-lightbox/styles.css";
// import "yet-another-react-lightbox/plugins/counter.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

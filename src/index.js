import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
require('./favicon.ico'); // Tell webpack to load favicon.ico
import ImageApp from './containers/ImageApp'

const store = configureStore();

render(
  <Provider store={store}>
    <ImageApp />
  </Provider>,

  document.getElementById('root')
);

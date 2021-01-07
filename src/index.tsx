import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, } from 'react-redux';
import BrowserTitle from './components/BrowserTitle';
import './index.css';
import App from './App';
import store from './store';
import reportWebVitals from './reportWebVitals';
import './public-path';

function render(props?: any) {
  let container = document.getElementById('root');
  if (props && props.container) {
    container = props.container.querySelector('#root');
  }
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <React.Fragment>
          <BrowserTitle />
          <App />
        </React.Fragment>
      </React.StrictMode>,
    </Provider>,
    container,
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('ReactMicroApp bootstrapped');
}

export async function mount(props?: any) {
  console.log('ReactMicroApp mount', props);
  render(props);
}

export async function unmount(props?: any) {
  console.log('ReactMicroApp unmount', props);
  ReactDOM.unmountComponentAtNode(props.container ? props.container.querySelector('#root') : document.getElementById('root'));
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

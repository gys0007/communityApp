import React from 'react';
import ReactDOM from 'react-dom/client';
import WelcomePage from './component/WelcomePage';
import { RecoilRoot } from 'recoil';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
export default App;

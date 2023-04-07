import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './pages/Landing';
import PageLayout from './layouts/PageLayout';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './main.scss'

ReactDOM.render(
  // <React.StrictMode>
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Landing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>,
  // </React.StrictMode>,
  document.getElementById('root')
);

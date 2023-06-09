import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './pages/Landing';
import AboutMe from './pages/AboutMe';
import KellerTest from './pages/KellerTest';
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
            <Route path="sobreMim" element={<AboutMe />} />
            <Route path="comoFunciona" element={<KellerTest />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>,
  // </React.StrictMode>,
  document.getElementById('root')
);

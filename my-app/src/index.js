import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './navbar/navbar';
import Modal from './examples/routerExample/modal';
import Invoices from './examples/routerExample/invoices';
import ErrorPage from './examples/errorPage/ErrorPage';
import Invoice from './examples/routerExample/invoice';
// import Pokedex from './examples/routerExample/pokedex';
import Pokemon from './examples/routerExample/pokemon';
import MyForm from './examples/form/MyForm'
import ControllerFromScratch from './examples/form/ControllerFromScratch';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import MyController from './examples/form/MyController';
import ReusableController from './examples/form/ReusableController';
import Pokedex from './pokedex/pokedex'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>

        {/* <Route path="/" element={<Navbar />}> */}
        {/* making a Route a sibling requires parent route and inherit parent component to render */}
        {/* <Route path="modal" element={<Modal/>} /> */}
        <Route path="camera" element={<Pokedex />}></Route>
        <Route path="invoices" element={<Invoices />} >
          <Route
            index
            /*
            Index routes:
              the default child route for a parent route. 
              match when a parent route matches but none of the other children match.
              render in the parent routes outlet at the parent route's path.
              render when the user hasn't clicked one of the items in a navigation list yet.

            Notice it has the index prop instead of a path. That's because the index route shares the path of the parent. 
            That's the whole point--it doesn't have a path.
            */
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="pokedex" element={<Pokedex />} >
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an Pokemon</p>
              </main>
            }
          />
          <Route path=":pokemonId" element={<Pokemon />} />
          <Route path=":example" element={<App />} />
        </Route>
        <Route path="app" element={<App />} />
        {/* <Route path="pokemonId" element={<Pokemon />} /> */}
        {/* <Route path="form" element={<MyForm/>}/> */}
        {/* <Route path="form" element={<ControllerFromScratch/>}/> */}
        {/* <Route path="form" element={<MyController/>}/> */}
        <Route path="form" element={<ReusableController />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from './components/MainContent';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );







function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);
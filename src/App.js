import React from 'react'
import './App.css';
import Content from './Component/Content/Content';
import Header from './Component/Header/Header';
import NewContent from './Component/NewContent/NewContent';
import Services from './Component/Services/Services';
// import Gallery from './Component/Gallery/Gallery';
import Things from './Component/Things/Things';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div>
     <Header/>
     <Content/>
     <NewContent/>
     <Services/>
     {/* <Gallery/> */}
     <Things/>
     <Footer/>
    </div>
  );
}

export default App;

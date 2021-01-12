import React from 'react'
import Header from "./components/header";
import MainContent from "./components/mainContainer";
import Footer from "./components/footer";
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <MainContent />
        <Footer />
    </div>
  );
}

export default App;

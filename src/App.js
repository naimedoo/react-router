import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Component/Home';
import Produits from './Component/Produits';
import { useParams } from 'react-router-dom';

function withRouter(Component) {
  return (props) => { return <Component params={useParams()} {...props} />}
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <> 
      <header>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/Produits" >Produits</Link>
          <Link to="/Produits/produitsId">En savoir plus</Link>
        </nav>
      </header>
      <Routes>
       <Route path="/" element={<Home />} />
       {/* <Route path="/Produits" element={<Produits />} /> */}
       <Route path="/Produits/ProduitsId" element={<Produits/>} />
       </Routes>
      </>
    )
  }
}
export default App
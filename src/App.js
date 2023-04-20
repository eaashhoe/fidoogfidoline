import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Forside from './pages/Forside';
import Vitilbyder from './pages/Vitilbyder';
import Voresimpact from './pages/Voresimpact';
import Kontaktos from './pages/Kontaktos';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ChatPopup from './components/ChatPopup';
import Error from './pages/Error';

import "./fonts/LeagueSpartan-Black.ttf";
import "./fonts/LeagueSpartan-Bold.ttf";
import "./fonts/LeagueSpartan-Light.ttf";


//import:styling her, så det ændres globalt. 
//import: browserrouter, route og route = route mellem undersiderne 
//import: komponenter og sider, såsom Forside, Vitilbyder, Voresimpact, Kontaktos, Nav, Footer, ChatPopup og Error, 
//som bruges til at sammensætte de forskellige komponenter, som til sammen bliver vores hjemmeside.
//import: 3 fonts i de 3 font størrelser vi bruger, downloadet fra google fonts. 
//nav, chatpopup, og footer vises på alle sider, derfor er de sat ind her. 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <ChatPopup></ChatPopup>
        <Routes>
          <Route path="/" element={<Forside />} />
          <Route path="/kontaktos" element={<Kontaktos />} />
          <Route path="/vitilbyder" element={<Vitilbyder />} />
          <Route path="/voresimpact" element={<Voresimpact />} />
          <Route path='/error' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;

//Routes-komponenten indeholder forskellige Route-komponenter,
//definerer de forskellige stier ("/kontaktos") og bruger de konponenter, der ligger på den sti.

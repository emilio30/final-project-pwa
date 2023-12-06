import React from 'react';
import './App.css';
import { requestForToken } from './push-notification';
import Notification from './components/Notification';
import { BrowserRouter as Router, Route, Link, Routes,Outlet } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import CustomNavbar from './components/Navbar';

function App() {
  return (
    <>
      {/* <Notification></Notification>
      <div>
        <h1>Ejemplo Básico</h1>
        <button onClick={requestForToken} >
        Haga clic para recibir notificaciones
      </button>
        <p>
        Este ejemplo demuestra algunas de las características principales de React Router, 
        incluidas <code>&lt;Route&gt;</code>, <code>&lt;Outlet&gt;</code>, y <code>&lt;Link&gt;</code>, anidadas y el uso de una ruta "*" (también conocida como "ruta splat") para representar una página "no encontrada". cuando alguien visita una URL no reconocida.
        </p>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div> */}
      <Routes>
          <Route path="/" element={<CustomNavbar />}>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Route>
      </Routes>
    </>
  );
}


export default App;

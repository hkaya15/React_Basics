import React, { useState } from 'react'
import Panel from '../../components/FooterPanel/Panel';
import Todo from '../../components/Todo/Todo';
import logo from '../../logo.svg';
import Footer from '../../components/Footer/Footer'
import SecondFooter from '../../components/Footer2/SecondFooter';
import { SecondFooterProvider } from '../../contexts/SecondFooterContext';
import { Outlet } from 'react-router-dom';


function Blogs() {
  const [isOpen, setOpen] = useState(false)
  return (
    // First Part

    <div className="App">
      {/* <p>{process.env.NODE_ENV}</p> */ /* Enviroment READ*/}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/*  <p style={{color: "red"}}>{process.env.REACT_APP_NOT_SECRET_CODE}</p>*/}
        <Footer name="NAME Props" />
        <Todo />
        <SecondFooterProvider>

          <SecondFooter>
            <button onClick={() => setOpen(isOpen => !isOpen)}>{isOpen ? "Gizle" : "Göster"}</button>
            {isOpen && <div style={{ display: "flex" }}>

              <Panel abc="0">A</Panel>
              <Panel abc="1">B</Panel>
              <Panel abc="2">C</Panel>
              <Panel abc="3">D</Panel>

            </div>}

          </SecondFooter>
        </SecondFooterProvider>
      </header>
      <Outlet />
    </div>
  )
}

export default Blogs
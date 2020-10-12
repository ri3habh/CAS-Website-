import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';



function App() {
  return (    
<div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<Link className="heading-words" to="/">Rishabh Sharma</Link>} scroll>
            <Navigation className="heading-words">
                <Link to="/resume" style={{textDecoration: 'none', color: 'black'}}>Resume</Link>
                <Link to="/Calculator"style={{textDecoration: 'none', color: 'black'}}>Calculator</Link>
                <Link to="/projects"style={{textDecoration: 'none', color: 'black'}}>Projects</Link>
                <Link to="/contact"style={{textDecoration: 'none', color: 'black'}}>AHHHHH</Link>
            </Navigation>
        </Header>
        <Drawer className="drawer-color" title={<Link style={{textDecoration : 'none', color: 'black'}} to="/">Website Name</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/Calculator">Calculator</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main/>
          </Content>
    </Layout>
</div>
  );
}




export default App;

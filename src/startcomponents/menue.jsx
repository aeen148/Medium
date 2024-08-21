import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundImage from '../images/Arrt.webp';


const Menu = (props) => {
    
    
      
  useEffect(()=>{
    
    
    document.querySelector('body').style.overflow='hidden';
  },[])
  return (
    <>
    <div style={{overflow:'hidden'}}>
    <header style={{ backgroundColor: '#f5ede4', borderBottom: '1px solid black', height: '100px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <div>
      <h1 className="m-0 every" style={{color:'black'}}>Medium</h1>
    </div>
    <div id="stractures" className="d-flex align-items-center" style={{ gap: '30px' }}>
      <a target="" rel="noopener noreferrer" href="/OurStory" className="nav-link" style={{ borderRadius: '10px', color: 'black', fontSize: '20px', fontWeight: 'bold', textDecoration: 'none' }}>Our Story</a>
      <a href="/Memberships" className="nav-link" style={{ borderRadius: '10px', color: 'black', fontSize: '20px', fontWeight: 'bold', textDecoration: 'none' }}>Memberships</a>
      <a href="/Write" className="nav-link" style={{ borderRadius: '10px', color: 'black', fontSize: '20px', fontWeight: 'bold', textDecoration: 'none' }}>Write</a>
      
       
      <a href="/Signin" className="nav-link" style={{ borderRadius: '10px', color: 'black', fontSize: '20px', fontWeight: 'bold', textDecoration: 'none',            }}>Sign in</a>
      <a href="/GetStarted" className="btn btn-dark" style={{ borderRadius: '30px', fontSize: '20px', fontWeight: 'bold',         }}>Get Started</a>
      
      </div>
  </header>

      <div overflow='hidden'>

      
    <main
     className="d-flex justify-content-center align-items-center" style={{ height: '570px', backgroundImage: `url(${BackgroundImage})`, backgroundSize: '30% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: '100% 0%', backgroundColor: '#f5ede4' }}>
      <div id="information" className="justify-content-center" style={{position:'absolute',top:'40%',left:'7%',}}>
        <h1 style={{}}>Human</h1>
        <h1 style={{}}>Stories & Ideas</h1>
        <p style={{color:'black'}}>A place to read, write, and deepen your understanding</p>
      </div>
    </main>
      </div>


    <footer style={{ backgroundColor: '#f5ede4', borderTop: '1px solid black', height: '2.5cm', textAlign: 'center', padding: '20px' }}>
    
    </footer>
    </div>
    </>
  );

  
}

export default Menu;



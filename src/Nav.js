import React, { useState ,useEffect} from 'react'
import './nav.css'
export default function Nav() {
    const [show, setShow] = useState(false);
    useEffect(() => {
      window.addEventListener('scroll',()=>{
        if(window.scrollY>100){
            setShow(true);
        }else{
            setShow(false);
        }
      })
    
      return () => {
        window.removeEventListener('scroll',()=>{});
      }
    }, [])
    
  return (
    <div className={`nav ${show && "nav__black"}`}>
        
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/440px-Netflix_2015_logo.svg.png" alt="netflix logo" className="nav__logo" />
    </div>
  )
}

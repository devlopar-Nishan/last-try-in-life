import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavLink from 'react-bootstrap/esm/NavLink';
import signinlogo from '../../others/profile.png';
import logo from '../../images/logo.png'
import './header.css';
import { FaCartPlus, FaHeart } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addTocart, SigninData, SingIn, Wishlistadd } from '../Redux-componants/action/Actionl';
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
 






const Header = (props) => {
  const [getauthdatas,setauthdata]=useState(null);


const firebaseConfig = {

        apiKey: "AIzaSyBXsB2O_7zeH9MeBNXEfv5Gj7GyMebCyrE",
        authDomain: "any-time-b6e36.firebaseapp.com",
        projectId: "any-time-b6e36",
        storageBucket: "any-time-b6e36.firebasestorage.app",
        messagingSenderId: "960159336212",
        appId: "1:960159336212:web:1e709cf2f9f61d02026401",
        measurementId: "G-0WHBS97ZG6"
      };
      
       
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
     

    
    
  // const getauthdata=async ()=>{
     
  //   auth.onAuthStateChanged(async(user)=>{
  //     const docRef = doc(db, "users",'mail' );
  //     const docSnap= await getDoc(docRef);
  //     if (docSnap.exists()) {
  //       console.log("Document data:", docSnap.data());
  //       setauthdata(docSnap.data())
  //     } else {
  //       // docSnap.data() will be undefined in this case
  //       console.log("No such document!");
  //     }
  //   })
    
  // }
  
  // useEffect(()=>{
  //     getauthdata();
  // },[]);

  

   const  navigate=useNavigate()
  const signdata='signin';
  const[pathstat,setstarta]=useState(1);
   const handlemenuPath2=()=>{
     setstarta(0)
     
     

   }
   const handlemenuPath3=()=>{
    setstarta(2)
     
    
    

  }
   useEffect(()=>{
    if( pathstat === 0){
      document.querySelector('.cartid').style.color='red';
      document.querySelectorAll('.menu-path').forEach((eachitm)=>{
        eachitm.classList.remove('reactive');
        eachitm.style.color='black';
      })
      
      

     }else{
      document.querySelector('.cartid').style.color='black';
     }

     if(pathstat===2){
      document.querySelector('.heart').style.color='red';
      document.querySelectorAll('.menu-path').forEach((eachitm)=>{
        eachitm.classList.remove('reactive');
        eachitm.style.color='black';
      })
    }else{
       
      document.querySelector('.heart').style.color='black';
  
     }
      

    
     
      
    
   },[pathstat])
    
    
   
       const handlemenuPath=(e)=>{
       setstarta(1)
       console.log(pathstat+'=')
        document.querySelectorAll('.menu-path').forEach((itm)=>{
             if(itm.pathname===e.target.pathname){
              e.target.classList.add('reactive');
              e.target.style.color='red';
               
            }else{
              itm.classList.remove('reactive')
              itm.style.color='black';
             }
        })
    
       }
   
      useEffect(() => {
        if (props.Wishlist.length > 0) {
          document.querySelector('.heart').classList.add('iswishlist');
        } else {
          document.querySelector('.heart').classList.remove('iswishlist');
        }
      }, [props.Wishlist]);
       


      const  handlesignout=()=>{
        const auth = getAuth();
        signOut(auth).then(() => {
         
         const signoutdatas={
          email:'',
          password:'',
          name:''
         }
          props.SigninData(signoutdatas);

          console.log('sign out successfuly')
          navigate('/authontcation');
        }).catch((error) => {
          // An error happened.
        });  
      }
      
      useEffect(() => {
        const handleScroll = () => {
          const navbar = document.querySelector('.nav-bod');
          if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(240, 248, 255,1)';
          } else {
            navbar.style.backgroundColor = 'rgba(240, 248, 255,.4)';
          }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      
        
  
    return (

      <div className='fixed-top'>
        <header> 
         <Navbar collapseOnSelect expand="md" className='nav-bod'  >
        <Container>
          <Navbar.Brand href="home"><img src={logo} alt="" className="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" >
          
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto ml-3">
              
              <NavLink className='front-size'><Link onClick={(e)=>handlemenuPath(e)}  className=' reactive menu-path' style={{color:'black',textDecoration:'none'}} to='/home'>Home</Link></NavLink>
              <NavLink className='front-size'><Link onClick={(e)=>handlemenuPath(e)} className='itm-menu  menu-path'    style={{color:'black',textDecoration:'none'}} to='/menu'> Menu</Link></NavLink>
              <NavLink className='front-size'><Link onClick={(e)=>handlemenuPath(e)} className='  menu-path'   style={{color:'black',textDecoration:'none'}} to='/about'>About</Link></NavLink>
              <NavLink className='front-size'><Link onClick={(e)=>handlemenuPath(e)}  className='  menu-path' style={{color:'black',textDecoration:'none'}}  to='/gallery'>Gallery</Link></NavLink>
              <NavLink className='front-size'><Link onClick={(e)=>handlemenuPath(e)}  className='  menu-path'  style={{color:'black',textDecoration:'none'}} to='/booktable'>Book <samp>a</samp> table</Link></NavLink>
              
            
              
            </Nav>
            <Nav>
               <NavLink>
                <Link  to='/wishlist' onClick={()=>handlemenuPath3()} >
                <FontAwesomeIcon  icon={faHeart} className='heart'/>
                </Link  >
                 </NavLink>
              <NavLink    to='/cart'>
                <Link to='/cart' onClick={()=>handlemenuPath2()} className=' cartid' id='cartid'><FaCartPlus  className='cart ms-1 '  /><span>{props.cart.length>0?props.cart.length:''} </span></Link>
                </NavLink>
             
                 
                
               <div style={{border:'none',textDecoration:'none'}}> 
               <Link id='signin' style={{border:'none',textDecoration:'none',background:'none'} }  to='/authontcation/menu'> 
               {props.singindata && props.singindata.email ?<button
               onClick={handlesignout}   className='profil-div  ' style={{border:'none',textDecoration:'none',color:'black'}}>sign up <img className='profil ' src={signinlogo} alt="" />
               </button>

               :<button  className='profil-div  signinbutton' style={{border:'none',textDecoration:'none',color:'black'}}>sign in<img className='profil ' src={signinlogo} alt="" /> </button> }

               </Link>
               </div>
         
              
              
            </Nav>
             
          </Navbar.Collapse>
          
          
        </Container>
      </Navbar>
      </header>
      </div>
    );
};

const mapstateToProps=(state)=>{
  return {
    cart:state.cart,
    product:state.product,
    Wishlist:state.wishlist,
    signinPath:state.signinPath,
    singindata:state.singindata
    
  }
}
 const mapDispatchToProps={
     addTocart:addTocart,
     Wishlistadd:Wishlistadd,
     SingIn:SingIn,
     SigninData:SigninData

 }
export default  connect(mapstateToProps,mapDispatchToProps)(Header);

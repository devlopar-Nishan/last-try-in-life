import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";

import { getAuth, signOut ,signInWithPopup,signInWithEmailAndPassword, GoogleAuthProvider ,createUserWithEmailAndPassword} from "firebase/auth";
import Login from '../login/Login';
import { useNavigate } from 'react-router-dom';
import authentication from '../../others/authentication.gif'
import './Authontcation.css';
import { SigninData, SingIn } from '../Redux-componants/action/Actionl';
import { connect } from 'react-redux';
import Footer from '../footer/Footer';
 
 
 


const Authontation = (props) => {
     const [getauthdatas,setauthdata]=useState({});
    
     
   const navigate = useNavigate();
    const [isNewUser, setIsNewUser] = useState(true);

    const toggleForm = () => {
        setIsNewUser(!isNewUser);
    };

    const [user,Setuser]=useState(
        {
            email:'',
            name:'',
            password:'',
            isvalidemail:false,
            error:''
        }
    )
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
 
   

  

    const provider = new GoogleAuthProvider();

    
        //  const getauthdata=async ()=>{
              
        //      auth.onAuthStateChanged(async(user)=>{
        //         setauthdata(user);
        //         const uid=user.uid;
        //         console.log(uid);
        //     //    const docRef = doc(db,'collectionName', 'documentId');
        //     //    const docSnap= await getDoc(docRef);
        //     //    if (docSnap.exists()) {
        //     //      console.log("Document data:", docSnap.data());
        //     //      setauthdata(docSnap.data())
        //     //    } else {
        //     //      // docSnap.data() will be undefined in this case
        //     //      console.log("No such document!");
        //     //    }
                  
        //      })
              
        //    }
           
           
         
        
        
        
 
  

    const handleGoogleSignIn = () => {
        

         signInWithPopup(auth, provider)
            .then((result) => {
                const newuman=result.user;
                const {displayName,email} = result.user;
                const newuser={
                    email:email,
                    name:displayName
                }

                // if(newuman){
                //     setDoc(doc(db,'Users',newuman.uid),{
                //         email:newuman.email

                //     });
                // }
                 
                Setuser(newuser)
                props.SigninData(newuser);
                
            //    if(result.user){
                 
            //       setDoc(doc(db, "cities", "LA"), {
            //         email: email,
            //         name: displayName,
                     
            //       });
                   
            //     }
               
                
                
                
                
                
            });
             
         

      

      
    }

    const  validateForm = (e) => {
        var isformvalid=true;
         
        if (e.target.name==='email') {
            isformvalid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)
           
            
        }
        if ( e.target.name==='password') {
            
            const passordvalid=e.target.value.length>6;
            const isvalidpasord= /^\d+$/.test(e.target.value);
            isformvalid=passordvalid && isvalidpasord;
            
        }
        if(isformvalid){
            const userinfo={...user}
            userinfo[e.target.name]=e.target.value;
            Setuser(userinfo);
        }
        
    };
   

   
    

    const handleEmailPasswordSignUp = (email, password  ) => {
        if(isNewUser&&user.email&&user.password){

       
          createUserWithEmailAndPassword(auth, email, password)
            .then(res=> {
                const {email,password,error,displayName}= res.user;
                const newuserinfo={
                    email:email,
                    password:password,
                    error:error
                    
                }

                // if(res.user){
                 
                //     setDoc(doc(db, "cities", "LA"), {
                //       email: email,
                //       name: displayName,
                       
                //     });
                     
                //   }
                 Setuser(newuserinfo);
                

                props.SigninData(newuserinfo)
                

              
                  
                
            })
            .catch((error) => {
                 
                const errorMessage = error.message;
                if(errorMessage){
                    const errormessages=' this account already used';
                    const userinfo={...user, error:errormessages}
                Setuser(userinfo);
                }
            }); 
        }
    };

    // logn logic for authontcation system for any-time/ /
    const HandleLogin=(email ,password)=>{
                    const auth = getAuth();
                     
            signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                // Signed in 
                const {email,password,error,displayName}= res.user;
                const newuserinfo={
                    email:email,
                    password:password,
                    error:error
                    
                }
                // if(res.user){
                 
                //     setDoc(doc(db, "cities", "LA"), {
                //       email: email,
                //       name: displayName,
                       
                //     });
                     
                //   }
                 Setuser(newuserinfo);
                
                
                props.SigninData(newuserinfo)
                 
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if(errorMessage){
                    const errormessages='invvalid password';
                    const userinfo={...user, error:errormessages}
                Setuser(userinfo);
                console.log(error)
                }
                
            });
    }

   

      
  
    return (
        <div>
        <div style={{
            display:"flex",
            justifyContent:'center',
            marginTop:'140px',
                    backgroundImage:{authentication}
        }}>
    
            
       

       

       
            <div  >
                {isNewUser ? (
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        const email = e.target.email.value;
                        const password = e.target.password.value;
                        handleEmailPasswordSignUp(email, password);
                    }}>
                       <h2 className='text-center'>Create Account</h2>
                       <div className="creat-account-div ">
                       
                        <div className="form-banner  w-60" >
                            <img src={authentication} alt="" />
                        </div>
                        <div className="form-elements w-40">
                                
                            
                            <input onBlur={(e)=>validateForm(e)}   type="text" name="name" id="name" className="name" placeholder=' User name' required  />  

                            <input  onBlur={(e)=>validateForm(e)}  type="email" name="email" placeholder="Email" required   /> 
                            <input onBlur={(e)=>validateForm(e)}   type="password" name="password" placeholder="Password" required   />  
                            <div className='signinbutton'><button type="submit" >{props.singindata.email?'sign out':'sign up'}</button></div>
                            <div className="outher-sign-in  ">
                                <div   onClick={()=>handleGoogleSignIn()}>Google</div>
                                < div className=''>facebook</div> 
                            </div>
                        <p>Already have an account? <a href="#" onClick={()=>toggleForm()} style={{color:'blue'}}>{props.singindata.email?'logout':'login'}</a></p>
                            <p style={{color:'red'}}>{user.error}</p>
                        </div>
                        
                       </div>

                        
                    
                    </form>
                ) : (
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        const email = e.target.email.value;
                        const password = e.target.password.value;

                        // Add login function here
                        HandleLogin(email,password);
                    }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
                <div className="login-div creat-account-div">
                <div className="form-banner">
                    <img src={authentication} alt="" />
                </div>

                <div className="login-form form-elements">
                
                    <input onBlur={(e)=>validateForm(e)}  placeholder='email' type="email" name="email" id="email"   required />
                
                     
                    <input  onBlur={(e)=>validateForm(e)} placeholder='password' type="password" name="password" id="password"   required />
                    <div>
                    <button type="submit"  >Login</button>
                    </div>
                     
                     <p style={{}}>  New user?  < a type="button" onClick={toggleForm} style={{ color: ' blue', background: 'none', border: 'none', cursor: 'pointer',marginTop:'10px' }}>Create an account</a>
                     </p>
                     <p style={{color:'red'}}>{user.error}</p>
                         
                     
                </div>
            

                     
                       
                         
                         
                   </div>
                    </form>
                )}
                
            </div>
             







        
         
        
        </div> 
        <Footer></Footer> 
        </div>
    );







       }
       

const mapstateToProps=(state)=>{
    return{
        signinPath:state.signinPath,
        singindata:state. singindatax,
        singindata:state.singindata
    }
     



}
const mapDispatchToProps={
    SigninData:SigninData,
    signIn:SingIn
}


 
  




   


export default connect(mapstateToProps,mapDispatchToProps)(Authontation);
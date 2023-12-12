import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./SignUpForm.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const SignUpForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

//   const history = useHistory();

  const [isLoggedInMode, setIsLoggedInMode] = useState(true);

  const changeModeHandler = () => {
    setIsLoggedInMode((prev) => !prev);

    
    // if (isLoggedInMode) {
    //   history.push("/login"); // Change the URL to '/login' on login mode
    // } else {
    //   history.push("/signup"); // Change the URL to '/signup' on signup mode
    // }
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

      const enteredEmail =  emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;

    if(isLoggedInMode){

    }
    else{
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCmTY8ac-zTqK5VYV24wPcGY4bXVjOwWDU',{
            method:'POST',
            body: JSON.stringify({
                email:enteredEmail,
                password:enteredPassword,
                returnSecureToken:true
            }),
            headers:{
                'content-type': 'application/json'
            }
        }).then((res)=>{
            if(res.ok){
                console.log(res);
            }
            else{
                return res.json().then(data => console.log(data));
            }
        })
    }
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
    //   }
  };


  return (
    <>
      <Navbar />
      <div className="sign-up-body">
        <div className="sign-up-form-container">
          <div>
            <form
              onSubmit={formSubmitHandler}
              className="sign-up-form-container-box"
            >
              <label>Email</label>
              <input type="email" name="email" ref={emailInputRef} />
              <label>Password</label>
              <input type="tel" name="phone" ref={passwordInputRef} />
              <button type="submit">
                {isLoggedInMode ? "LOG-IN" : "Sign Up"}
              </button>
              <Link onClick={changeModeHandler}>
                {isLoggedInMode ? "New user? Sign Up" : "Existing user? Login"}
              </Link>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUpForm;

import React from "react";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {loginGoogle} = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()
    const form = location.state?.from?.pathname || "/";


    const handelGoogleLogin = () =>{
        loginGoogle()
        .then(res => {
            const loginUser = res.user 
            const savedUser = { name: loginUser.displayName, email: loginUser.email };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(savedUser),
            })
              .then((res) => res.json())
              .then(() => {
                navigate(form, { replace: true });
              });
            
        })
        .catch(error =>{
            console.log(error?.message)
        })
    }

  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center">
        <button onClick={handelGoogleLogin} className="btn btn-circle mb-6 mt-2">
            <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

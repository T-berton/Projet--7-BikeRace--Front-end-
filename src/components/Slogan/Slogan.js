import React, { useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Nav from "../Shared/Nav/Nav";
import './slogan.css';
import { ToastContainer, toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';
import SocialBar from "../Shared/SocialBar/SocialBar";



function Slogan(){

    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [emailaddress,setEmailaddress] = useState('');
    const [slogan,setSlogan] = useState('');
    const [error,setError] = useState((null));

    async function sendSubmission() {
      try {
        const response = await fetch('http://localhost:4000/submissions',{
          method: 'POST',
          body: JSON.stringify({
            "firstname": firstname,
            "lastname": lastname,
            "email_address": emailaddress,
            "slogan_idea": slogan,
          }),
          headers:{
            'Content-type': 'application/json',
          },
        });
        if (!response.ok){
          throw new Error(
            `This is an HTTP ERROR: ${response.status}`
          )
        }
        let currentResponse = await response.json();
        setFirstname('');
        setLastname('');
        setEmailaddress('');
        setSlogan('');
        toast.success('Your submission has been recorded.');
        
      } catch (error) {
          setError(error)
          toast.alert(`Error Submitting data : ${error}`);
        }

    }

    const handlefirstname = (event) => {
        setFirstname(event.target.value);
      }
      const handlelastname = (event) => {
        setLastname(event.target.value);
    }
      const handleemailaddress = (event) => {
        setEmailaddress(event.target.value);
      }
      const handleslogan = (event) => {
        setSlogan(event.target.value);
      }


      const handleSubmit = (event) =>{
        event.preventDefault();
        sendSubmission();
      } 

    return(
            <>
                <Nav/>
                <ToastContainer />
                    <div className="form__background">
                    <h1 className="form__title">CONTEST - SLOGAN IDEA</h1>
                        <form className="form__container" onSubmit={handleSubmit}>
                          <div className="form__name">
                            <div className="form__firstname">
                                  <label>First Name </label>
                                  <input type="text" value={firstname} onChange={handlefirstname} required/>
                            </div>
                            <div className="form__lastname">
                                  <label>Last Name </label>
                                  <input type="text" value={lastname} onChange={handlelastname} required/>
                            </div> 
                          </div>
                            <div className="form__emailaddress">
                                  <label>Email Address </label>
                                  <input type="email" value={emailaddress} onChange={handleemailaddress} required/>
                            </div>
                            <div className="form__slogan">
                                  <label>Slogan Idea(50 characters)</label>
                                  <textarea type="text" value={slogan} maxLength={50} onChange={handleslogan} required />
                            </div>
                            <input type="submit" className="form__submit"/>
                        </form>
                    </div>
                <SocialBar/>
                <Footer/>
            </>
    )
}

export default Slogan
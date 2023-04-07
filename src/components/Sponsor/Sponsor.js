import React, { useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Nav from "../Shared/Nav/Nav";
import './sponsor.css';


function Sponsor(){

    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [emailaddress,setEmailaddress] = useState('');
    const [slogan,setSlogan] = useState('');

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

      }

    return(
            <>
                <Nav/>
                    <div className="form__background">
                    <h1 className="form__title"> REQUEST SPONSORSHIP</h1>
                        <form className="form__container" onSubmit={handleSubmit}>
                           <div className="form__firstname">
                                <label>First Name :</label>
                                <input type="texte" value={firstname} onChange={handlefirstname}/>
                           </div>
                           <div className="form__lastname">
                                <label>Last Name :</label>
                                <input type="texte" value={lastname} onChange={handlelastname}/>
                           </div>
                           <div className="form__emailaddress">
                                <label>Email Address :</label>
                                <input type="texte" value={emailaddress} onChange={handleemailaddress}/>
                           </div>

                           <div className="form__slogan">
                                <label>Slogan Idea :</label>
                                <textarea type="texte" value={slogan} maxLength={50} onChange={handleslogan}/>
                           </div>

                        </form>
                    </div>
                <Footer/>
            </>
    )
}

export default Sponsor
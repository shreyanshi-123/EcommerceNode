import './EnquireForm.css';
import 'react-phone-number-input/style.css';
import PhoneInput, { isPossiblePhoneNumber, isValidPhoneNumber } from "react-phone-number-input";
import { useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const EnquireForm = ({ title, setOpen, button }) => {
    const [formVisible, setFormVisible] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [termsValue, setTermsValue] = useState(false);
    const [termsCheck, setTermsCheck] = useState(false);
    const [mobileNumber, setMobileNumber] = useState();
    const [phoneError, setPhoneError] = useState("");
    const [formSuccess, setFormSuccess] = useState("");
    const [formError, setFormError] = useState("");
    const [loading, setLoading] = useState(false);
    // const [disableSubmit, setDisableSubmit] = useState(true);
    // const [number, setNumber] = useState();


    //const validateForm = () => name.length >= 1 && mobileNumber.length === 10 && termsValue;
    // const checkInput = (e) =>{
    //     if(!(e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode === 8)){
    //         e.preventDefault()
    //     }
    //     else{
    //         setNumber(e.target.value)
    //     }

    // }

    const handleSubmit = (event) => {
        if (event) event.preventDefault();

        if (mobileNumber) {
            if (isValidPhoneNumber(mobileNumber) === false || isPossiblePhoneNumber(mobileNumber) === false) {
                setPhoneError("Please Enter Valid Mobile Number.");

                setTimeout(() => {
                    setPhoneError('');
                }, 5000);

                return false;
            }
        }

        // setDisableSubmit(true);
        setLoading(true);

        axios({
            method: "post",
            url: "https://anantaaspirezirakpur.co/api/enquire-us-api.php",
            data: JSON.stringify({
                name: name,
                mobileNumber: mobileNumber,
                email: email,
            }),
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
            .then(function (response) {
                //handle success
                if (response.data.status === 0) {
                    setLoading(false);
                    setFormSuccess(
                        <>
                            <span className='thanku-txt'>THANK YOU </span>
                            <div className='flex flex-col'>
                                <span> For Trusting Us with Your Home Search!!</span> 
                                <span>We’ll Reach Out Soon With All the Details.</span> 
                            </div>
                        </>
                    );
                    // if( setOpen){

                    //     setFormVisible(false);
                    //   }
                    resetForm();
                    setTimeout(() => {
                        setFormSuccess('');
                        if(setOpen){
                            setOpen(false);
                            setFormVisible(true);
                        }
                    }, 10000);

                } else {
                    setLoading(false);
                    setFormError("Some error occured");
                    resetForm();
                    setTimeout(() => {
                        setFormError('');
                    }, 10000);
                }
            })
            .catch(function (response) {
                //handle error
                setLoading(false);
                console.log(response);
                setFormError("Some error occured");
                resetForm();
                setTimeout(() => {
                    setFormError('');
                }, 10000);
            });

    }

    const EmailChange = (e) => {

        setEmail(e.target.value);

        // if(name.length >= 1 && mobileNumber !== undefined && termsValue === true){
        //     setDisableSubmit(false);
        // } else {
        //     setDisableSubmit(true);
        // }
    }

    const NameChange = (e) => {

        const value = e.target.value;

        const filteredValue = value.replace(/[^a-zA-Z\s]/g, '');
        setName(filteredValue);

        // if(e.target.value.length >= 1 && mobileNumber !== undefined && termsValue === true){
        //     setDisableSubmit(false);
        // } else {
        //     setDisableSubmit(true);
        // }
    }
    // const NumberChange = (e) => {

    //     setNumber(e.target.value);

    //     if(name.length >= 1 && mobileNumber !== undefined && termsValue === true){
    //         setDisableSubmit(false);
    //     } else {
    //         setDisableSubmit(true);
    //     }
    // }
    const CheckboxChange = (e) => {

        setTermsValue(!termsValue);
        setTermsCheck(!termsValue);
        // if(name.length >= 1 && mobileNumber !== undefined &&  !termsValue === true){
        //     setDisableSubmit(false);
        // } else {
        //     setDisableSubmit(true);
        // }
    }

    const resetForm = () => {
        setName("")
        setMobileNumber('');
        setEmail('');
        setTermsValue(false);
        setTermsCheck(false);
    }

    return (
        <form className="enquire-form py-6" id='enquiry-form' onSubmit={handleSubmit}>
             <div className={`form-section text-left ${formSuccess ? 'form-success' : ''}`}>
                {formError && (
                    <p className="text-red-400 py-2  text-[12px] text-center">{formError}</p>
                )}

                {formSuccess && (
                    <p className="success-wrapper text-green-700 py-2 text-[15px] gap-2 text-center flex flex-col items-center justify-center">
                        <div className="text-white bg-primary-brown check"> <FontAwesomeIcon icon={faCheck} /></div>
                        <span className='flex flex-col gap-2 flex flex-col success-text'>{formSuccess}</span>
                    </p>
                )}
                {formVisible && (<div className='gap-2' id='enquiry-form'>
                    <p className="text-2xl font-extrabold capitalize mb-2.5">{title}</p>
                    <div className="py-2">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name*"
                            className="text-md form-input border border-gray-300 w-full px-3.5 py-2 bg-white"
                            required
                            value={name}
                            onChange={(e) => NameChange(e)}
                        />
                    </div>
                    <div className="py-2">
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email (Optional)"
                            className="text-md form-input border border-gray-300 w-full px-3.5 py-2 bg-white"

                            value={email}
                            onChange={(e) => EmailChange(e)}
                        />
                    </div>
                    <div className="py-2">
                        <PhoneInput
                            required
                            type="tel"
                            id="mobile-number"
                            // maxlength="11"
                            name="mobile-number"
                            placeholder="Mobile Number*"
                            className="text-md form-input border border-gray-300 w-full px-3.5 py-2 bg-white"
                            country="IN"
                            defaultCountry="IN"
                            value={mobileNumber}
                            onChange={setMobileNumber}
                            limitMaxLength={true}
                            national="true"
                            international={false}
                        />
                        {phoneError && (
                            <p className="text-red-400 text-sm">{phoneError}</p>
                        )}
                    </div>

                    <p className={`flex items-center text-[10px] mt-5 ${termsCheck ? 'font-semibold' : 'font-extralight  text-gray-400'}`}><input type='checkbox' required className='align-middle size-4' name="termsCheck" checked={termsCheck} value={termsValue} onChange={(e) => CheckboxChange(e)} /> <span>I agree to be contacted by 'The Clotya' and agents via WhatsApp, SMS, phone, email etc.</span></p>

                    <div className="mt-2.5 text-center flex items-center gap-5 justify-center">
                        <input type="submit" value={button ? button : 'Download Now'} className={`font-bold uppercase text-xs  py-2.5 sm:py-3.5 px-3.5 sm:px-[22px] 1xl:px-8 rounded-md text-primary-brown  bg-white border-2 border-primary-brown hover:bg-primary-brown hover:text-white cursor-pointer`} />


                        {loading && (
                            <CircularProgress
                                sx={{
                                    color: (theme) =>
                                        theme.palette.grey[theme.palette.mode === 'dark' ? 400 : 800],
                                }}
                                size={35}
                                thickness={4}
                                value={100}
                            />
                        )}
                    </div>
                </div>
                )}
            </div>
        </form>
    )
}

export default EnquireForm



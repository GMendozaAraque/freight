// import React, { useState } from 'react';
// import NavBar from '../components/Navbar/NavBar';
// import Footer from '../components/Footer';
// import {useDocTitle} from '../components/CustomHook';
// import axios from 'axios';
// import emailjs from 'emailjs-com';
// import Notiflix from 'notiflix';

// const DemoProduct = (props) => {

//     useDocTitle('MLD | Molad e Konsult - Demo our products')

//     const [firstName, setFirstName] = useState('')
//     const [lastName, setLastName] = useState('')
//     const [email, setEmail] = useState('')
//     const [phone, setPhone] = useState('')
//     const [message, setMessage] = useState('')
//     const [demoProducts, setDemoProducts ] = useState([])
//     const [errors, setErrors] = useState([])


//     const handleChange = (e) => {
//         const value = e.target.value
//         const checked = e.target.checked
//         errors.products = []
//         if(checked) {
//             setDemoProducts([
//                 ...demoProducts, value
//             ])
//         } else {
//             setDemoProducts(demoProducts.filter( (e) => (e !== value )))
//         }
       
//     }
//     const clearErrors = () => {
//         setErrors([])
//     }

//     const clearInput = () => {
//         setFirstName('')
//         setLastName('')
//         setEmail('')
//         setPhone('')
//         setMessage('')
//     }
    
//     function sendEmail(e) {
//         e.preventDefault();
//         document.getElementById('submitBtn').disabled = true;
//         document.getElementById('submitBtn').innerHTML = 'Loading...';
//         let fData = new FormData();
//         fData.append('first_name', firstName)
//         fData.append('last_name', lastName)
//         fData.append('email', email)
//         fData.append('phone_number', phone)
//         fData.append('message', message)
//         fData.append('products', demoProducts)

//         emailjs.sendForm('service_7uy4ojg', 'template_et9wvdg', e.target, 'user_uE0bSPGbhRTmAF3I2fd3s')
//           .then((result) => {
//               console.log(result.text);
//               Notiflix.Report.success(
//                 'Success',
//                 '"Thanks for sending a message, we\'ll be in touch soon."',
//                 'Okay',
//                 );
//           }, (error) => {
//               console.log(error.text);
//               Notiflix.Report.failure(
//                 'An error occured',
//                 'Please try sending the message again.',
//                 'Okay',
//                 );
//           });

//         axios({
//             method: "post",
//             url: process.env.REACT_APP_DEMO_REQUEST_API,
//             data: fData,
//             headers: {
//                 'Content-Type':  'multipart/form-data'
//             }
//         })
//         .then(function (response) {
//             document.getElementById('submitBtn').disabled = false;
//             document.getElementById('submitBtn').innerHTML = 'send message';
//             clearInput()
//             handle success
//             Notiflix.Report.success(
//                 'Success',
//                 response.data.message,
//                 'Okay',
//             );
//         })
//         .catch(function (error) {
//             document.getElementById('submitBtn').disabled = false;
//             document.getElementById('submitBtn').innerHTML = 'send message';
//             handle error
//             const { response } = error;
//             if(response.status === 500) {
//                 Notiflix.Report.failure(
//                     'An error occurred',
//                     response.data.message,
//                     'Okay',
//                 );
//             }
//             if(response.data.errors !== null) {
//                 setErrors(response.data.errors)
//             }
            
//         });
//     }
//     return (
//         <>
//             <div>
//                 <NavBar />
//             </div>
//             <div id='demo' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
//                 <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
//                     <form onSubmit={sendEmail} id="demoProductForm">
//                         <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
//                             <div className="flex">
//                                 <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Demo our products</h1>
//                             </div>
//                             <div className="flex items-center my-4">
//                                 <input 
//                                     id="checkbox-1" 
//                                     aria-describedby="checkbox-1" 
//                                     type="checkbox" 
//                                     className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" 
//                                     value="business_management_system" onChange={handleChange}
//                                  />
//                                 <label htmlFor="checkbox-1" className="ml-3 text-lg font-medium text-gray-900">Business Management System</label>
//                             </div>
//                             <div className="flex items-center my-4">
//                                 <input 
//                                     id="checkbox-1" 
//                                     aria-describedby="checkbox-1" 
//                                     type="checkbox" 
//                                     className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
//                                     value="school_management_portal" onChange={handleChange}
//                                     />
//                                 <label htmlFor="checkbox-1" className="ml-3 text-lg font-medium text-gray-900">School Management Portal</label>
//                             </div>
//                             <div className="flex items-center my-4">
//                                 <input 
//                                     id="checkbox-1" 
//                                     aria-describedby="checkbox-1" 
//                                     type="checkbox" 
//                                     className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" 
//                                     value="payroll_management_system" onChange={handleChange}
//                                 />
//                                 <label htmlFor="checkbox-1" className="ml-3 text-lg font-medium text-gray-900">Payroll Management System</label>
//                             </div>
//                             <div className="flex items-center my-4">
//                                 <input 
//                                     id="checkbox-1" 
//                                     aria-describedby="checkbox-1" 
//                                     type="checkbox" 
//                                     className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
//                                     value="event_management_system" onChange={handleChange}
//                                 />
//                                 <label htmlFor="checkbox-1" className="ml-3 text-lg font-medium text-gray-900">Event Management System</label>
//                             </div>
//                             {errors && 
//                                 <p className="text-red-500 text-sm">{errors.products}</p>
//                             }

//                         <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
//                                 <div>
//                                     <input 
//                                         name="first_name" 
//                                         className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                                         type="text" 
//                                         placeholder="First Name*" 
//                                         value={firstName}
//                                         onChange={(e)=> setFirstName(e.target.value)}
//                                         onKeyUp={clearErrors}
//                                     />
//                                     {errors && 
//                                         <p className="text-red-500 text-sm">{errors.first_name}</p>
//                                     }
//                                 </div>
                                
//                                 <div>
//                                     <input 
//                                         name="last_name" 
//                                         className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                                         type="text" 
//                                         placeholder="Last Name*"
//                                         value={lastName}
//                                         onChange={(e)=> setLastName(e.target.value)}
//                                         onKeyUp={clearErrors}
//                                     />
//                                     {errors && 
//                                         <p className="text-red-500 text-sm">{errors.last_name}</p>
//                                     }
//                                 </div>

//                                 <div>
//                                     <input 
//                                         name="email"
//                                         className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                                         type="email" 
//                                         placeholder="Email*"
//                                         value={email}
//                                         onChange={(e)=> setEmail(e.target.value)}
//                                         onKeyUp={clearErrors}   
//                                     />
//                                     {errors && 
//                                         <p className="text-red-500 text-sm">{errors.email}</p>
//                                     }
//                                 </div>

//                                 <div>
//                                     <input
//                                         name="phone_number" 
//                                         className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                                         type="number" 
//                                         placeholder="Phone*"
//                                         value={phone}
//                                         onChange={(e)=> setPhone(e.target.value)}
//                                         onKeyUp={clearErrors}
//                                     />
//                                     {errors && 
//                                         <p className="text-red-500 text-sm">{errors.phone_number}</p>
//                                     }
//                                 </div>
//                         </div>
//                         <div className="my-4">
//                             <textarea 
//                                 name="message" 
//                                 placeholder="Message*" 
//                                 className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//                                 value={message}
//                                 onChange={(e)=> setMessage(e.target.value)}
//                                 onKeyUp={clearErrors}
//                             ></textarea>
//                             {errors && 
//                                 <p className="text-red-500 text-sm">{errors.message}</p>
//                             }
//                         </div>
//                         <div className="my-2 w-1/2 lg:w-2/4">
//                             <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
//                                     focus:outline-none focus:shadow-outline">
//                                 Send Message
//                             </button>
//                         </div>
//                     </div>
//                     </form>
//                     <div className="w-full  lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-900 rounded-2xl">
//                         <div className="flex flex-col text-white">     
//                             <div className="flex my-4 w-2/3 lg:w-3/4">
//                                 <div className="flex flex-col">
//                                     <i className="fas fa-map-marker-alt pt-2 pr-2" />
//                                 </div>
//                                 <div className="flex flex-col">
//                                     <h2 className="text-2xl">Office Address</h2>
//                                     <p className="text-gray-400">Ilo Awela, Ota, Ogun State</p>
//                                 </div>
//                             </div>
                            
//                             <div className="flex my-4 w-2/3 lg:w-1/2">
//                                 <div className="flex flex-col">
//                                 <i className="fas fa-phone-alt pt-2 pr-2" />
//                                 </div>

//                                 <div className="flex flex-col">
//                                     <h2 className="text-2xl">Call Us</h2>
//                                     <p className="text-gray-400">Tel: 08055384406</p>
                                
//                                     <div className='mt-5'>
//                                         <h2 className="text-2xl">Send an E-mail</h2>
//                                         <p className="text-gray-400">info@mld.ng</p>
//                                     </div>
                            
//                                 </div>
//                             </div>
                            
//                             <div className="flex my-4 w-2/3 lg:w-1/2">
//                                 <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8 mx-1 text-center pt-1">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
//                                 </a>
//                                 <a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8 mx-1 text-center pt-1">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>


//     )
// }

// export default DemoProduct;


import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import Notiflix from 'notiflix';
import emailjs from 'emailjs-com';

const Contact = () => {
    useDocTitle('Request Demo | CommunityTech');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState([]);

    const clearErrors = () => {
        setErrors([]);
    };

    const clearInput = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    const sendEmail = (e) => {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';

        // Asegúrate de que los parámetros aquí coincidan con los de tu plantilla en EmailJS
        const templateParams = {
            to_name: 'Sales Team',       // Cambia esto a quien debe recibir el email
            from_name: `${firstName} ${lastName}`,  // Combina el nombre y el apellido
            message: message,
            reply_to: email,
            phone_number: phone, // Añadido aquí
        };

        emailjs.send('service_cfzg1nm', 'template_xg34kym', templateParams, 'tPU2rqzX0BAoolq9A')
            .then((response) => {
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'Send Message';
                clearInput();
                Notiflix.Report.success(
                    'Success',
                    'Your message has been sent successfully.',
                    'Okay'
                );
            })
            .catch((error) => {
                document.getElementById('submitBtn').disabled = false;
                document.getElementById('submitBtn').innerHTML = 'Send Message';
                Notiflix.Report.failure(
                    'An error occurred',
                    'There was an error sending your message.',
                    'Okay'
                );
            });
    };

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id='contact' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <form onSubmit={sendEmail}>
                        <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Request a Demo</h1>
                            </div>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <div>
                                    <input
                                        name="first_name"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="First Name*"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                                </div>

                                <div>
                                    <input
                                        name="last_name"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Last Name*"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                                </div>

                                <div>
                                    <input
                                        name="email"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email"
                                        placeholder="Email*"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </div>

                                <div>
                                    <input
                                        name="phone_number"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="number"
                                        placeholder="Phone*"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                                </div>
                            </div>
                            <div className="my-4">
                                <textarea
                                    name="message"
                                    placeholder="Message*"
                                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyUp={clearErrors}
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                            </div>
                            <div className="my-2 w-1/2 lg:w-2/4">
                                <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-blue-900 hover:bg-blue-800 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-900 rounded-2xl">
                        <div className="flex flex-col text-white">
                            <div className="flex my-4 w-2/3 lg:w-3/4">
                                <div className="flex flex-col">
                                    <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Address</h2>
                                    <p className="text-gray-400">
                                    7901 4th St N #4877 St. Petersburg, FL, 33702</p>
                                </div>
                            </div>

                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <div className="flex flex-col">
                                    <i className="fas fa-phone-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Sales Number</h2>
                                    <p className="text-gray-400">‪(727) 210-5764‬</p>
                                    <div className='mt-5'>
                                        <h2 className="text-2xl">Sales E-mail</h2>
                                        <p className="text-gray-400">sales@communitytech.info</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <a href="https://www.facebook.com/communitytech1" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900 w-8 mx-1 text-center pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'>
                                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                    </svg>
                                </a>
                                {/* <a href="https://www.linkedin.com/company/communitytech1" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-purple-900 w-8 mx-1 text-center pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'>
                                        <circle cx="4.983" cy="5.009" r="2.188"></circle>
                                        <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                                    </svg>
                                </a> */}
                                {/* <a href="https://www.instagram.com/enlighteneering/" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-purple-900 w-8 mx-1 text-center pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'>
                                        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm6.5 16.5c0 .93-.75 1.68-1.68 1.68H6.18c-.93 0-1.68-.75-1.68-1.68V7.18c0-.93.75-1.68 1.68-1.68h10.64c.93 0 1.68.75 1.68 1.68v9.32zm-1.83-5.46c.1.1.17.22.17.36v3.46c0 .14-.07.26-.17.36-.09.1-.21.17-.35.17h-2.48a.5.5 0 0 1-.5-.5V12c0-.28.22-.5.5-.5h2.48c.14 0 .26.07.35.17zm-3.22.08v3.57h-1.51v-3.57h1.51zm-1.03-3.57h1.57c.93 0 1.68.75 1.68 1.68v4.09h-2.43v-2.73c0-1.54-.64-2.67-2.02-2.67-1.16 0-1.97.79-1.97 1.77v3.63H6.18V8.92c0-.93.75-1.68 1.68-1.68h3.65c.93 0 1.68.75 1.68 1.68v.1z"></path>
                                    </svg>
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;

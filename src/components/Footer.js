import React from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

                    {/* 1st block */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                            <h3 className="font-bold text-4xl mb-4">CommunityTech</h3>
                            <div className='text-md font-medium text-gray-600'>
                                <h5>CommunityTech LLC</h5>
                                <p>Sheridan,</p>
                                <p>WY</p>
                                <p>‪(727) 210-5764‬</p>
                            </div>
                        </div>
                    </div>

                    {/* 2nd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <HashLink to="/#about" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="/#services" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Keypoints</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="/#portfolio" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Pricing</HashLink>
                        </li>                            
                        </ul>
                    </div>

                    {/* 3rd block
                    <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">OUR SERVICES</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Web Development</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Mobile App Development</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Domain and Hosting</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">General IT Consultations</Link>
                        </li>
                        </ul>
                    </div> */}

                    <br></br>
                    <br></br>

                                        {/* 4th block */}
                    <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
                        <div className="text-xl mb-6">
                            Follow Us
                        </div>

                        <div className="text-md font-medium mb-6">
                            Follow us on Facebook
                        </div>

                        <div className="mx-auto text-center mt-2">
                            <ul className="flex justify-center mb-2 md:mb-1 pl-10">

                                 <div className="flex my-4 w-2/3 lg:w-1/2">
                                    <a href="https://www.facebook.com/communitytech1" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8 mx-1 text-center pt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
                                    </a>
                                    {/* <a href="https://www.linkedin.com/company/communitytech1" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-purple-900  w-8 mx-1 text-center pt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
                                    </a> */}
                                </div>

                                    {/* <li>
                                    <Link to="#" className="flex justify-center items-center text-purple-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="LinkedIn">
                                    
                                     <svg className="w-8 h-8 fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                         <path transform="translate(-3, -3)" d="M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z" />
                                        <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                                    </svg>
                                    </Link>
                                    </li>
                                    <li className="ml-4">
                                        <Link to="#" className="flex justify-center items-center text-purple-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                        </svg>
                                        </Link>
                                    </li> */}
                            </ul>
                        </div>
                    </div>    

                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                    <div className="text-sm text-gray-200 font-semibold py-1">
                    Copyright &copy; {new Date().getFullYear()}{"  "}
                    <HashLink
                        to="#"
                        className=" hover:text-gray-900"
                    >
                        CommunityTech
                    </HashLink>. All rights reserved.
                    </div>
                </div>
                </div>

                </div>
                
            </footer>
        </>
    )
}
export default Footer;

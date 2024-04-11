// Import necessary modules and components from React and Next.js
import React from 'react';// Import the React module to use React functionalities
import Link from 'next/link';//Import Link from Next.js for client side navigation

//Header function component
export default function Header({ heading }) {

    //=======JSX RENDERING============

    return (
        <header className='header'>
            <div className='row'>
                {/* Header */}
                <div className='col'>
                    <h1 className='h1'>
                        {heading}
                    </h1>
                </div>
                <div className='navigation'>
                    {/* Navigation bar */}
                    <ul className='navBar'>
                        <li className='linkItem'>
                            <Link href="/" className='link'>
                                <p className='linkText'>ABOUT</p>
                            </Link>
                        </li>
                        <li className='linkItem'>
                            <Link href='/projects' className='link'>
                                <p className='linkText'>
                                    PROJECTS
                                </p>
                            </Link>
                        </li>
                        <li className='linkItem'>
                            <Link href="/contact" className='link'>
                                <p className='linkText'>
                                    CONTACT
                                </p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* JSX syling */}
            <style jsx>
                {`
            .header{
                    margin-top:10px;
                    margin-bottom: 10px;
                    margin-right: 10px;
                    margin-left: 10px;
                    padding: 10px;                    
                    background-color: #009494;
                    border:2px solid #004d4d;
                }
                .h1{
                   text-align: center;
                   font-weight: bold;
                   font-family: cursive; 
                }
                // NavigationBar
                .navigation{
                 border:2px solid #004d4d;
                    margin-top: 0px;
                    margin-bottom: 5px;
                    margin-right: 10px;
                    margin-left: 10px;
                    padding: 5px;                 
                }
                .navBar{
                    display:flex;
                    justify-content: center;
                    list-style-type: none;
                     color: white;
                     background-color:#007575;
                     text-decoration:none;
                     margin:0px;
                     padding:0px;
                     gap:10px;
                     border:2px solid #004d4d;
                }
                .linkItem{
                    margin-left:10px;
                    margin-right:5px;
                    margin-top: 5px;
                    margin-bottom: 5px                
                    font-weight: bold;
                    font-weight: bold;
                    text-decoration: none;
                }
                .link{
                    display: flex;
                    margin-left: 5px
                    color: white;
                    font-weight: bold;
                    
                }
                .linkText{
                    color:white;
                    font-weight: bold;
                    font-family: sans-serif;
                    text-decoration: none;
                }
            `}
            </style>
        </header>
    )
}
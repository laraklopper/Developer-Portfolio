import React from 'react';// Import the React module to use React functionalities

//Github function component
const Github =() =>{

    //========JSX RENDERING===========

    return(
        <div id='githubList'>
            <ul className='githubRepoList'>
                <li className='linkItem'>
                    <div className='linkRow'>
                        <div className='linkCol'>
                            <h3 className='h3'>DATABASE INTERACTION:</h3>
                            <h3 className='h3'>                                              
                                <a href='https://github.com/laraklopper/LT8-Data-Interaction.git'
                                    className='link'>
                                    https://github.com/laraklopper/LT8-Data-Interaction.git
                                </a>
                            </h3>
                         </div>  
                    </div>
                </li>
                <li className='linkItem'>
                    <div className='linkRow'>
                        <div className='linkCol'>
                            <h3 className='h3'>
                                HANGMAN-APP:
                            </h3>
                            <h3 className='h3'>
                                <a href='https://github.com/laraklopper/Hangman-App.git'
                                    className='link'>
                                    https://github.com/laraklopper/Hangman-App.git
                                </a>  
                            </h3>
                        </div>                                            
                    </div>
                </li>
            </ul>
            {/* JSX STYLING */}
            <style jsx>
                {`
                  .githubRepoList{
                    list-style-type:none;
                   margin:5px;
                   padding:5px;
                    border:2px solid #004d4d;
                     background-color: #008585;
                  }
                  .h3{
                        font-family: sans-serif;
                        font-weight: bold;
                        margin-top: 2px;
                        margin-bottom: 2px;
                        margin-right: 1px;
                        padding: 5px;
                    }
                    .linkItem{
                    display:flex;
                    align-items: center
                    display:flex;
                    align-items: center; 
                }
                .linkRow{
                    display:flex;
                    align-items: center;
                    background-color: #00ADAD;
                    margin:5px;
                    padding:10px;
                    border: 3px solid #003333;                   
                }
                .linkCol{
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                    padding: 0px;
                    margin-top: 0px;
                    margin-bottom:0px;
                }
                  .link{
                    margin-left: 8px;
                    padding: 0px;
                    margin:0px;
                }
                `}
            </style>
        </div>
    )
}

//Export default Github component
export default Github;

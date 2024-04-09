import React from 'react';// Import the React module to use React functionalities

//Qualifications function component
const Qualifications = () => {

    //=======JSX RENDERING============

  return (
    <div id='qualifications'> 
            <div className="qualifyheading">
                                <h3 className="h3">QUALIFICATIONS:</h3>
                            </div>
                            {/* Qualifications List */}
                            <ul className="qualifyList">
                                <div className="row">
                                    <div className="col">
                                        <li className="qualifyItem">
                                            <div className='qualificationHeading'>
                                                 <h3 className='qualifyHead'>
                                                    BACHELOR OF LAWS
                                                </h3>
                                            </div>
                                            <div className='qualification'>
                                                <h4 className="h4">
                                                    UNIVERSITY:
                                                </h4>
                                                <h4 className="labelText">
                                                    University of South Africa
                                                </h4>
                                            </div>
                                            <div className='qualification'>
                                                 <h4 className="h4">
                                                    YEAR:
                                                </h4>
                                                 <h4 className="labelText">
                                                    2016-2021
                                            </h4>
                                            </div>
                                        </li>
                                    </div>
                                    <div className="col">
                                        <li className="qualifyItem">
                                            <div className='qualificationHeading'>
                                                <h3 className='qualifyHead'>
                                                    WEB DESIGN SHORT COURSE
                                                </h3>
                                            </div>
                                            <div className='qualification'>
                                                 <h4 className="h4">
                                                    UNIVERSITY:
                                                </h4>
                                                 <h4 className='labelText'>
                                                    University of Cape Town
                                                </h4>
                                            </div>
                                            <div className='qualification'>
                                                <h4 className="h4">
                                                    YEAR:
                                                </h4>
                                                <h4 className="labelText">
                                                    May 2022 - August 2022
                                                </h4>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <li className="qualifyItem">
                                            <div className='qualificationHeading'>
                                                <h3 className='qualifyHead'>
                                                    SOCIAL MEDIA MARKETING SHORT COURSE
                                                </h3>
                                            </div>
                                            <div className="qualification">
                                                <h4 className="h4">
                                                    UNIVERSITY:
                                                </h4>
                                                <h4 className="labelText">
                                                    University of Cape Town
                                                </h4>
                                            </div>
                                            <div className="qualification">
                                                <h4 className="h4">
                                                    YEAR:
                                                </h4>
                                                <h4 className="labelText">
                                                    September 2022-November 2022
                                                </h4>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                            </ul>
                            {/* JSX STYLING */}
                            <style jsx>
                                {`
                                     // Qualifications
                                    #qualifications{
                                    background-color: #008585;
                                    padding:5px;
                                    margin:5px;
                                    border:2px solid #004d4d;
                                    }
                                    .qualifyList{
                                        list-style-type:none;
                                        float: center;
                                        margin:0px;
                                        padding:0px;
                                    }                                  
                                    .qualifyItem{
                                        background-color:#00A3A3 ;
                                        margin-right: 5px;
                                        margin-left: 5px;
                                        padding: 10px;
                                        margin-top:10px;
                                        margin-bottom: 5px;
                                        border: 3px solid #003333;
                                    }
                                    .qualificationHeading{
                                        margin: 0px;
                                        padding: 0px;
                                        display: block;
                                    }
                                    .qualification{
                                        display: flex;
                                        align-items: center;
                                        margin: 0px;
                                        padding:10px;
                                    }
                                    .qualifyHead{
                                        font-family: sans-serif;
                                        text-align: center;
                                        font-weight: bold;
                                        margin:0px;
                                        padding:0px;
                                    }
                                    .labelText{
                                        margin-left: 3px;
                                        font-weight: bold;
                                        font-family: sans-serif;
                                        margin-top:0px;
                                        margin-bottom:0px;
                                        margin-right:0px
                                    }
                                    .h4{
                                        font-family: sans-serif;
                                        margin:0px;
                                        padding:0px
                                    }
                                       .h3{
                                        text-align: center;
                                        font-family: sans-serif;
                                        margin-top: 2px;
                                        margin-bottom: 2px;
                                        margin-right: 1px;
                                        padding: 5px;
                                    }
                                        .row{
                                        display:flex;
                                        width: 100%;
                                        margin:0px
                                    }
                                    .col{
                                        width: 50%;
                                        margin:0px;
                                    }
                                 
                                `}
                            </style>
                              </div>
                              )
                            }

export default Qualifications//Export defaualt qualifications function component
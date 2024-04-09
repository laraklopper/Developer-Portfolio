import React from 'react';// Import the React module to use React functionalities

//Certificates function component
const Certificates = () => {

//=========JSX RENDERING========== 

    return (
        <div id="certificates">
            <h3 className="h3">
                CERTIFICATES
            </h3>
            <ul className="certList">
                <div className="row">
                    <div className="col">
                        <li className="certItem">
                            <div className='certificateHeading'>
                                <h3 className="certHead">
                                    MATRIC
                                </h3>
                            </div>
                            <div className='cert'>
                                <h4 className="h4">
                                    SCHOOL:
                                </h4>
                                <h4 className='labelText'>
                                    Somerset College
                                </h4>
                            </div>
                            <div className="cert">
                                <h4 className="h4">
                                    YEAR:
                                    </h4>
                                <h4 className="labelText">
                                    2013
                                </h4>
                            </div>
                        </li>
                    </div>
                    <div className="col">
                        <li className="certItem">
                            <div className='certificateHeading'>
                                <h3 className="certHead">
                                    LIFE SCIENCES POST MATRIC CERTIFCATE
                                </h3>
                            </div>                       
                            <div className="cert">
                                <h4 className="h4">
                                    SCHOOL:
                                </h4>
                                <h4 className='labelText'>
                                    Somerset West Private School
                                </h4>
                            </div>
                            <div className="cert">
                                <h4 className="h4">
                                    YEAR:
                                </h4>
                                <h4 className='labelText'>
                                    2014
                                </h4>
                            </div>
                        </li>
                    </div>
                </div>
                <div className="col">
                    <li className="certItem">
                        <div className='certificateHeading'>
                            <h3 className="certHead">
                                COLOURS FOR SOCIAL RESPONSIBILTY
                            </h3>
                        </div> 
                        <div className='cert'>
                            <h4 className="certHead">
                                SCHOOL:
                            </h4>         
                            <h4 className="labelText">
                                Somerset College
                            </h4>
                        </div>                       
                        <div className='cert'>
                            <h4 className="h4">
                                YEAR:
                            </h4>
                            <h4 className="labelText">
                                December 2012
                            </h4>
                        </div>
                    </li>
                </div>
            </ul>
            {/* JSX Styling */}
            <style jsx>{`
            //CERTIFICATES
                #certificates{
                   background-color: #008585;
                    padding:5px;
                    margin: 5px;
                    border:2px solid #004d4d;
                }
                .certList{
                    list-style-type:none;
                    display: block;
                    margin: 0px;
                    padding: 5px;
                }
                .cert{
                    display: flex;
                    align-items: baseline;
                    margin: 0px;
                    padding:10px;
                }
                 .labelText{
                    margin-left: 3px;
                    margin-top:0px;
                    margin-bottom:0px;
                    padding:2px;
                    font-weight: bold;
                    font-family: sans-serif;
                }
                  .h3{
                    text-align: center;
                    font-family: sans-serif;
                     margin-top: 2px;
                    margin-bottom: 2px;
                    margin-right: 1px;
                    padding: 5px;
                }
                .h4{
                    font-family: sans-serif;
                    font-weight: bold;
                    margin: 0px;
                    padding:0px;
                }
                .certificateHeading{
                        margin: 0px;
                        padding: 0px;
                        display: block;
                }
                .certHead{
                    text-align: center;
                    font-weight: bold;
                    font-family: sans-serif;
                    margin:0px;
                    font-size:18px;
                }
                .certItem{
                     background-color:#00A3A3 ;
                    margin-right: 15px;
                    margin-left: 0px;
                    margin-top: 10px;
                    margin-bottom: 10px;
                    padding: 10px;   
                    border: 3px solid #003333;       
                }
                .row{
                    display:flex;
                    width: 100%;
                    margin:0px
                }
                .col{
                    width: 50%;
                }             
            `}
            </style>
        </div>
    )
}

//Export defaualt Certificate function component
export default Certificates
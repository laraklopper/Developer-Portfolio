import React from 'react';// Import the React module to use React functionalities


//Work function component
 function Work() {

  //=========JSX RENDERING==========

  return (
    <div className="work">
      <div className="workCol">
        <div className="workText">
          <p className="paragraph">
            My work exprerience, includes adminstration, and conducting legal research 
            in a range of legal domains, including dispute resolution and civil procedure 
            and other areas such as company law, insolvency law and contractual 
            law.
          </p>
        </div>
      </div>

      {/* JSX STYLING */}
      <style jsx>
        {`
                .workCol{
                  display:block;
                    background-color: #008585;
                    padding: 10px;
                    border:2px solid #004d4d;
                }
                 .workText{
                     background-color:#00A3A3;
                    padding: 25px;
                    margin-top:5px;
                    margin-bottom:10px
                    margin-left:10px;
                    margin-right:10px;
                    border: 3px solid #003333;
                }
                .paragraph{
                    text-align:justify;
                    font-family: sans-serif;
                    padding:0px;
                    margin:10px;
                    font-weight: bold;
                }
        `}
      </style>
    </div>
  )
}

export default Work;//Export default Work funtion component
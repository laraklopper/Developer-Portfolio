import React from 'react';

//Background function component
const Background = () => {

    //===============JSX RENDERING==============

  return (
      <div id="background">
          <div className="backgroundText">
              <p className="paragraph">     
                  My name is Lara Klopper. I am 29 years old and currently live in 
                  Somerset West, Western Cape, South Africa. I am fluent in Afrikaans and English.
                  The core values I believe in are self-discipline and honesty.
           </p>
              <p className='paragraph'>
                I currently work in administration and provide assistance conducting legal research 
                and managing correspondence related to road traffic offences. Outside work I enjoy 
                hiking and martial arts, where I have Black belt in karate and a 
              blue belt in Jiu-Jitsu and enjoy dedicating time to coding. 
                  </p>
          </div>
          {/* JSX STYLING */}
          <style jsx>
              {`
              #background{
                padding:10px;
                border:2px solid #004d4d;
                padding:5px;
                display:flex;
                justify-content:center;
                margin:5px;
                width:60%
              }
                .paragraph{
                text-align:justify;
                font-family: sans-serif;
                padding:0px;
                margin:10px;
                font-weight: bold;
              }
              .backgroundText{
                background-color: #008585;
                padding: 10px;
                border:2px solid #004d4d;                
                }
            `}

          </style>
    </div>
  )
}

//Export default Background function component
export default Background;
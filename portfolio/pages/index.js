import Background from "../components/Background";//Import Background function component
import Certificates from "../components/Certificates"//Import Certificates function component
import Header from "../components/Header"//Import Header function component
import Qualifications from "../components/Qualifications";//Import Qualifications component
import Work from "../components/Work";//Import Work function component

//About page
function About() {

    //===============JSX RENDERING===================

    return (
        <div className='container'>
            {/* Header */}
            <Header heading='ABOUT' />
            {/* section1 */}            
            <section className="section">
                {/* Background article */}
                <article id="backgroundArticle">
                    <div className="backgroundHeading">
                        <h2 className="h2">
                            BACKGROUND
                        </h2>
                    </div>
                    {/* Background */}
                    <Background/>                                 
                </article>  
            </section>
            {/* section2 */}
            <section className="section">
                {/* Work Article */}
                <article id="workArticle">
                    <div id="workHeading">
                        <h2 className="h2">
                            WORK HISTORY
                        </h2>
                    </div>
                    {/* Work History */}
                    <Work/>
                </article> 
                {/* Education */}
                <article id="eduArticle">
                    <div id="educationHeading">
                        <h2 className="h2">
                            EDUCATIONAL HISTORY
                        </h2>
                    </div>
                    {/* qualifications */}
                    <Qualifications />
                    {/* Certificates */}
                    <Certificates />
                </article>
                {/* Image */}
                <article id="imgArticle">
                        <figure className="image">
                            <img src={'../static/profilePic.jpg'} 
                            id="profilePic" alt="Profile picture"/>
                        </figure>
                </article>    
            </section>            
            {/* JSX Styling */}
            <style jsx>{`
                 body{
                    margin: 0px;
                    padding: 0px;
                    background-color: #4D4D4D;
                 }
                 .container{
                    margin: 0px;
                    padding: 0px;
                    display:grid;
                    background-color: #005C5C;
                }
                //Section
                .section{
                    margin-bottom: 10px;
                    margin-right: 10px;
                    margin-top:10px;         
                    padding: 10px;            
                    background-color: #008A8A;
                    margin-left: 10px;
                }  
                .h2{
                    text-align: center;
                    font-family: cursive;
                    font-weight: bold;
                    margin-top: 5px;
                    margin-bottom: 5px;
                    margin-left: 0px;
                    margin-right: 0px;
                }
                .h3{
                    text-align: center;
                    font-family: sans-serif;
                     display:block;
                    margin:0px;
                    padding: 0px;
                }
                .h4{
                    font-family: sans-serif;
                    font-weigt:bold;
                    display: block;
                    margin: 
                }
                // Background
                    #backgroundArticle{
                    background-color: #00ADAD;
                    border: 3px solid #003333;                   
                    margin:10px;
                    padding:5px;
                    flex-direction: column;
                    display:flex;
                align-items:center;
                }
                .backgroundHeading{
                    margin: 0px;
                    padding: 0px;
                    display: block;
                }                
                
                .row{//global jsx
                    display:flex;
                    width: 100%;
                    margin:0px
                }
                .col{
                    width: 50%;
                    margin:0px;
                    padding: 0px;
                }
                   //WORK            
                #workArticle{
                    float: left;
                    width:40%;
                    margin: 0px;
                    padding: 0px;
                     border: 3px solid #003333;
                    margin-right: 5px;
                    margin-left: 5px;
                    margin-bottom:10px;
                    margin-top:10px;
                    padding: 10px;
                    display: inline-block;
                    background-color: #00ADAD;
                }                                   
                #workHeading{
                    margin: 0px;
                    padding:2px;   
                    display:block;
                }
                //Education
                #eduArticle{
                    float: right;
                    width: 55%;
                    padding: 5px;
                    background-color: #00ADAD;
                     margin-right: 5px;
                    margin-left: 5px;
                    margin-bottom:10px;
                    margin-top:10px;
                    border: 3px solid #003333;
                }
                #educationHeading{
                    padding:2px;
                    margin: 0px;
                    display: block;
                }       
                //Image
                #imgArticle{
                    display:flex;
                    float:left;
                    margin:10px;
                     background-color: #008585;
                    width:20%;
                    padding:0px;
                    border:3px solid #004d4d;
                }   
                .image{
                    margin: 0px;
                    background-color: #009E9E;
                    width: 100%;
                    display: flex;
                    padding: 5px;
                    justify-content: center;
                    // border:3px solid #004d4d;
                }
                #profilePic{
                    margin: 10px;
                    display:block;
                    width:100%;
                    float: center;
                }
                `
            }</style>
        </div>
    )
}

//Export default Index (About) page
export default About;
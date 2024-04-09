//Import Header component
import Header from '../components/Header';

//Contact Page
function Contact() {

    //========JSX RENDERING============

    return(
        // Container
        <div className='container'>
            {/* Header */}
           <Header heading='CONTACT'/>
           {/* Section 1 */}
            <section className='section1'>
                    <div className='contactHeading'> 
                        <h2 className='h2'>
                            CONTACT DETAILS
                        </h2>                   
                    </div>
                    <div className='row'>
                        <div className='col'>
                            {/* Contact details */}
                            <div className='contactDetails'>                      
                            <h4 className='h4'>
                                EMAIL:
                            </h4>
                            <address className='contactAddress'>
                                <h4 className='h4'>
                                    larak@corprecover.co.za
                                </h4>
                            </address>                           
                            </div>
                         </div>
                         <div className='col'>
                            <div className='contactDetails'>
                            <h4 className='h4'>PHONE:</h4>
                            <address className='contactAddress'>
                                <h4 className='h4'>
                                    079 223 2142
                                </h4>
                            </address>
                            </div>
                         </div>
                         </div>
                         <div className='row'>
                         <div className='col'>
                            <div className='contactDetails'>
                            <h4 className='h4'>
                                ADDRESS:
                            </h4>
                                <address className='address'>
                                    <h4 className='h4'>
                                        3 Two Oceans View,<br />
                                        5B Helderspruit Rd,<br />
                                        Helderberg Estate, <br />
                                        Somertset West,<br />
                                        South Africa
                                    </h4>
                                </address>                                 
                            </div>
                         </div>                        
                            <div className='col'>                          
                                <div className='contactDetails'>
                           <h4 className='h4'>
                                POSTAL ADDRESS:
                            </h4>
                                <address className='address'>
                                    <h4 className='h4'>
                                        PO BOX,<br />
                                        693,<br />
                                        Stellenbosch
                                    </h4>
                                </address>                                                         
                                </div>
                            </div>
                    </div>                
            </section>
            {/* JSX Styling */}
            <style jsx>{`
             .container{
                    margin: 0px;
                    padding: 0px;
                    display:grid;
                    background-color: #005C5C;
                }
                .section1{
                  margin-top:10px;
                    margin-bottom: 10px;
                    margin-right: 10px;
                    margin-left: 10px;
                    padding: 10px;  
                    background-color: #008A8A;
                }
                .h2{
                    text-align:center;
                    font-family: sans-serif;
                    font-weight: bold;
                    margin-top: 5px;
                    margin-bottom: 5px;
                    margin-left: 0px;
                    margin-right: 0px;
                }
                .h3{
                    font-family: sans-serif;
                    font-weight: bold;
                    display:block;
                    margin:0px;
                    padding: 0px;
                }
                .h4{
                    font-weight: bold;
                    font-family: sans-serif;
                    display: block;
                    margin: 0px;
                    padding:0px;
                    font-size: 18px;
                }
                .contactDetails{
                    background-color: #00A3A3;
                    padding:15px;
                    width: 100%;
                    margin-top: 5px;
                    display:flex;
                    border: 3px solid #003333;
                    
                    align-items: baseline;
                }
                .row{
                    display:flex;
                    width 100%;
                    margin: 0px;
                }
               .col{
                display:flex;
                align-items: baseline;
                margin-right: 12px;
                width:30%;
               }   
                .addressHead{
                    font-family: sans-serif;
                    font-weight: bold;
                }
                .contactAddress{
                    margin-left:5px;
                    padding:0px;                
                    margin-top: 0px;
                    margin-bottom: 0px;
                    margin-right: 0px;
                    display: flex;
                    align-items: center;
                  }
                .address{
                    text-align: left;
                    display: flex;
                    padding: 0px;
                    align-items: baseline;
                    margin-left:0px;   
                }
            `
            }</style>
        </div>
    )
}

export default Contact//Export Contact Page
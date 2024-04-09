import Github from '../components/Github';//import Github component
import Header from '../components/Header';//Import Header component

//Projects page
function Projects () {

    //==============JSX RENDERING==============

    return (
        // Container
        <div className='container'>
            {/* Header */}
            <Header heading='PROJECTS'/>
              {/* section1 */}
            <section className='section1'>
                {/* github */}
                <article id='githubArt'>
                    <h2 className='h2'>GITHUB</h2>
                    {/* Github Repository List */}
                 <Github/>
                </article>
                <article id='deployedProjectsArt'>
                    <h2 className='h2'>
                        DEPLOYED PROJECTS
                    </h2>
                   {/* Deployed Projects */}
                    <div id='deployedProjects'>
                        <ul className='deployedItems'>
                            <li className='linkItem'>
                                <div className='linkRow'>
                                    <div className='linkCol'>
                                        <h3 className='h3'>
                                            {/* Task deployed to netlify */}
                                            <a href='https://main--hangmanapptask.netlify.app/' 
                                            className='link'>
                                                https://main--hangmanapptask.netlify.app/
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </article>
            </section>           
            {/* JSX STYLING */}
            <style jsx>{`
                .container{
                    margin: 0px;
                    padding: 0px;
                    display:grid;
                    background-color: #005C5C;
                }
                 //Section1
                section1{
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
                #githubArt{
                    padding: 0px;
                    width:45%;
                    background-color: #00ADAD;;
                   border:2px solid #004d4d;
                    margin-right: 5px;
                    margin-left: 10px;
                    margin-bottom:10px;
                    margin-top:10px;
                    padding: 10px;
                    float: left;   
                }
                .githubRepoList{
                    list-style-type:none;                
                }
                .linkItem{
                    display:flex;
                    align-items: center;
                    margin:0px;
                    padding:5px;
                }
                .github{
                    margin: 0px;
                    padding: 0px;
                }
                .h3{
                    font-family: sans-serif;
                    font-weight:bold;
                    display:block;
                    margin-top: 2px;
                        margin-bottom: 2px;
                        margin-right: 1px;
                        padding: 5px;
                }
                
                #deployedProjectsArt{
                    float: right;
                    background-color: #00ADAD;;
                    border:2px solid #004d4d;
                    margin-right: 10px;
                    margin-left: 0px;
                    margin-bottom:10px;
                    margin-top:10px;
                    padding:10px;
                    width:45%;
                }
                .deployedItems{
                    list-style-type:none;
                    margin:5px;
                    padding:5px;
                    border:2px solid #004d4d;
                     background-color: #008585;
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
            `
            }</style>
        </div>
    )
}

//Export Projects Page
export default Projects;
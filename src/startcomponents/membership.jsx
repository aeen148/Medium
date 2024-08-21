import React, { Component } from 'react';
import { createRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import '../styles/membership_style.css';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';

class Memberships extends Component {
    state = {
        imageindex: 0,
        images: [image1, image2, image3, image4]
    };
    subject1=createRef();
    subject2=createRef();
    subject3=createRef();

    componentDidMount() {
     
        this.intervalId = setInterval(this.changeImages, 5000);
        
        this.handleScroll=()=>{
            if(window.scrollY>=701&&window.scrollY<=1900){
                    this.subject1.current.style.top=`${window.scrollY-701}px`;
                    console.log(this.subject1.current.style.top);
            }
            if(window.scrollY>=2249&&window.scrollY<=2692){
                this.subject2.current.style.top=`${window.scrollY-2249}px`;
                console.log(this.subject2.current.style.top);
            }
            if(window.scrollY>=3130&&window.scrollY<=3327){
                this.subject3.current.style.top=`${window.scrollY-3130}px`;
            }
            
        }
        console.log(window.scrollY);
        window.addEventListener('scroll',this.handleScroll);
    }
   

    componentWillUnmount() {
       
        clearInterval(this.intervalId);
        window.removeEventListener('scroll',this.handleScroll)
    }

   

    render() {
        const { imageindex, images } = this.state;

        return (
            <><div className='all'>
           
                
           
                
                        {/* <div style={{height:'10vh',width:'100%',zIndex:'0',position:'absolute', top:'0'}}>fuck</div> */}
                <div className='white-header'>
                <div id='mediumicondiv' className='every'>
                    <FontAwesomeIcon id='medium-icon-white' icon={faMedium} />
                    <h4 id='medium-white' className='every'>Medium </h4>
                    </div>
                    <div className='buttons-white'>
                        <button className='sign-up every'>Sign in</button>
                        <button className='sign-in every'>Sign up</button>
                    </div>
                </div>
               
                <div id='main-membership-container'>
                    <div id='top-container'>
                        <div id='left-part' style={{transition:'background-color 0.5s ease',backgroundColor:this.leftSideBackgroundSelector()}}>
                            <h1 id='support-human-stories' className='every'>Support human stories</h1>



                            <div className='advertisement'>
                                <span style={{fontWeight:'520',color:'#555555',width:'100%',fontSize:'20px',width:'50%'}}>Become a member to read without limits or ads, fund great writers, and join a global community of people who care about high-quality storytelling.
                                </span>
                            </div>
                            <div style={{height:'20%',display:'flex',flexDirection:'row',alignItems:'center',width:'30%',justifyContent:'space-around'}}>
                                        <button className='Get-Started' >Get Started</button>
                                        <button className='view-plans'>view plans</button>
                                    </div>
                        </div>




                        <div id='right-part'style={{borderLeft:'solid 1px black',borderRight:'solid 1px black',transition:'background-color 0.5s ease-in',backgroundColor:this.rightSideBackgroundSelector()}}>
                            <div >

                              <div style={{transition:'background 0.5s ease-in',opacity:'1',backgroundSize:'100% 100%',alignItems:'end',justifyContent:'flex-start',display:'flex',
                                                 backgroundRepeat:'no-repeat',width: '100%',height:'55vh',
                                                          backgroundImage:`url(${this.state.images[this.state.imageindex]})`}}>
                                
                              <button id='members-only'>
                                <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'row',width:'100%',height:'100%'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{marginRight:'1vh',left:'1.3vh',top:'16%',position:'absolute'}} width="18" height="18" fill="none" viewBox="0 0 64 64" class="lp"><path fill="#222222" d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"></path></svg>
                                 <p style={{marginLeft:'1vh',position:'relative',fontSize:'10px',top:'20%',position:'absolute',fontWeight:'bold'}}>Members-only Story</p>
                                 </div>
                                </button>
                                
                              </div>

                              <div id='comments' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'self-start',}}>

                                  <div style={{position:'relative',display:'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',margin:'2vh 2vh',}}><h2 style={{fontWeight:'400',color:'black'}} className='every '>{this.variableWord()}</h2></div>


                                  <div  style={{top:'70vh',height:'50px',display:'flex',flexDirection:'row',marginTop:' 5vh',marginLeft:'2vh',position:'absolute'}}>
                                    <img loading='lazy' src={this.imageSelector()} alt="sss" style={{borderRadius:'50%',width:'48px',height:'48px',marginRight:'1vh'}} />
                                    <div style={{display:'flex',flexDirection:'column',}}>
                                    <h5>{this.usernameSelector()}</h5>
                                    <h4 style={{fontSize:'12px'}}>{this.jobSelector()}</h4>
                                    </div>
                                    </div>
                              </div>
                              
                                
                            </div>
                            <div></div>
                        </div>
                    </div>

                </div>






                <div id='bottom-container'>
                        <div className='one-container'>
                                    <div className='topics'><h1 ref={this.subject1} className='subjects'>Why membership?</h1></div>

                                    <div className='why-memberships'>
                                        <div className='text-handler'> <h1>Reward writers</h1> <span className='text'>Your membership directly supports the writers, editors, curators, and teams who make Medium a vibrant, inclusive home for human stories. A portion of your membership is allocated to the writers of the stories you read and interact with.</span></div>
                                        <div className='text-handler'><h1>Unlock every story</h1><span className='text'>Get access to millions of original stories that spark bright ideas, answer big questions, and fuel bold ambitions.</span></div>
                                        <div className='text-handler'><h1>Enhance your reading experience</h1><span className='text'>Immerse yourself in audio stories, read offline wherever you go, and connect with the Medium community on Mastodon.</span></div>
                                        <div className='text-handler'><h1>Elevate your writing</h1><span className='text'>Create and contribute to publications to collaborate with other writers, create a custom domain for your profile, and level up your writing with our simple but powerful publishing tools.</span></div>
                                        <div className='text-handler'><h1>Support a mission that matters</h1><span className='text'>Members are creating a world where original, human-crafted stories thrive. As a member-supported platform, quality comes first, not ads or clickbait.</span></div>
                                    </div>
                        </div>


                        <div className='two-container'>
                                <div className='topics'><h1 ref={this.subject2} className='subjects'>what members are saying</h1></div>
                                <div className='members-opinion'>
                                    <div className='text-handlerr'><img src="https://miro.medium.com/v2/resize:fill:100:100/1*djKJlXxmezn6fBPzHnipnw.jpeg" alt="f" style={{borderRadius:'50%',width:'10vh',height:'10vh',marginRight:'1vh'}}/>    <span className='text'>The easy path in social media is promoting the worst content, the cheapest, tackiest, lowest-effort stuff. That’s not what you get on Medium. You can actually find content you can build your brain with. I appreciate that, both as a reader and a writer.</span>    </div>
                                    <div className='text-handlerr'><img src="https://miro.medium.com/v2/resize:fill:100:100/1*ZYP58jl-6KcKocr1P7r5Hw.jpeg" alt="f" style={{borderRadius:'50%',width:'10vh',height:'10vh',marginRight:'1vh'}}/>    <span className='text'>Medium has proved a game-changer for me, and quickly became the subscription I value the most, and I have quite a few. The cost is nothing compared to the value Medium generates for me month after month.</span>    </div>
                                    <div className='text-handlerr'><img src="https://miro.medium.com/v2/resize:fill:100:100/1*Ce4jOl6gjeebSiHsknN2-A.jpeg" alt="f" style={{borderRadius:'50%',width:'10vh',height:'10vh',marginRight:'1vh'}}/>    <span className='text'>For us tech folks, Medium membership unlocks a whole treasure trove of high-quality articles. One good technology book could sell for over the Medium membership fee amount. It’s your choice whether to buy one book, or buy hundreds and thousands of books by unlocking member-only reading on Medium. Investing in a Medium membership is one of the best investments I have ever made for my career.</span>    </div>
                                </div>
                        </div>


                        <div className='three-container'>
                                <div className='topics'><h1 ref={this.subject3} className='subjects'>Membership plans</h1></div>
                                <div className='membership-plans'>
                                    <h3 style={{margin:'12vh ',}}><pre style={{display:'inline'}}>         </pre><h4 style={{display:'inline',marginBottom:'0px'}}>Be part of a better internet.</h4><br/> <mark className='mark'> Get 20% off membership</mark> for a limited time.</h3>
                                    <div className='buy-container'>
                                        <div className='buy'>
                                        <div style={{height:'9vh',position:'relative',top:'0px',display:'flex',justifyContent:'center',alignItems:'flex-end',width:'100%'}}><svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 64 64" role="presentation" aria-hidden="true" focusable="false" class="pn po"><path fill="#FFC017" d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"></path></svg></div>
                                        <div className='A'>
                                            <h3>Medium Member</h3>
                                            <span style={{display:'flex',justifyContent:'center',alignItems:'center',color:'#757575'}}><mark className='mark'>$5/month</mark>or<mark className='mark'>$40/year</mark></span>
                                            </div>
                                        <button style={{backgroundColor:'#1A8917',width:'80%',borderRadius:'99em',border:'none',color:'white',height:'5vh'}}>Get Started</button>




                                        <div className='list'> <div style={{marginLeft:'1vh',marginBottom:'1vh',justifyContent:'center',alignItems:'center',display:'flex',position:'relative',top:'0.8vh',left:'3vh'}}><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false"><path stroke="#1A8917" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3"></path></svg></div ><div className='B'><span className='listpart-small'>Read member-only stories</span></div></div>
                                        <div className='list'> <div style={{marginLeft:'1vh',marginBottom:'1vh',justifyContent:'center',alignItems:'center',display:'flex',position:'relative',top:'0.8vh',left:'3vh'}}><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false"><path stroke="#1A8917" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3"></path></svg></div ><div className='B'><span className='listpart-small'>Support writers you read most</span></div></div>
                                        <div className='list'> <div style={{marginLeft:'1vh',marginBottom:'1vh',justifyContent:'center',alignItems:'center',display:'flex',position:'relative',top:'0.8vh',left:'3vh'}}><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false"><path stroke="#1A8917" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3"></path></svg></div ><div className='B'><span className='listpart-small'>Earn money for your writing</span></div></div>
                                        <div className='list'> <div style={{marginLeft:'1vh',marginBottom:'1vh',justifyContent:'center',alignItems:'center',display:'flex',position:'relative',top:'0.8vh',left:'3vh'}}><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false"><path stroke="#1A8917" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3"></path></svg></div ><div className='B'><span className='listpart-small'>Listen to audio narrations</span></div></div>
                                        <div className='list'> <div style={{marginLeft:'1vh',marginBottom:'1vh',justifyContent:'center',alignItems:'center',display:'flex',position:'relative',top:'0.8vh',left:'3vh'}}><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false"><path stroke="#1A8917" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3"></path></svg></div ><div className='B'><span className='listpart-small'>Read offline with the Medium app</span></div></div>
                                        <div className='list'> <div style={{marginLeft:'1vh',marginBottom:'1vh',justifyContent:'center',alignItems:'center',display:'flex',position:'relative',top:'0.8vh',left:'3vh'}}><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false"><path stroke="#1A8917" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3"></path></svg></div ><div className='B'><span className='listpart-small'>Access our Mastodon community</span></div></div>
                                        <div className='list'> <div style={{marginLeft:'1vh',marginBottom:'1vh',justifyContent:'center',alignItems:'center',display:'flex',position:'relative',top:'0.8vh',left:'3vh'}}><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false"><path stroke="#1A8917" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3"></path></svg></div ><div className='B'><span className='listpart-small'>Connect your custom domain</span></div></div>
                                        <div className='list'> <div style={{marginLeft:'1vh',marginBottom:'1vh',justifyContent:'center',alignItems:'center',display:'flex',position:'relative',top:'0.8vh',left:'3vh'}}><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false"><path stroke="#1A8917" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3"></path></svg></div ><div className='B'><span className='listpart-small'>Create your own publications</span></div></div>

                                        </div>
                                        <div className='buy'>
                                        <div style={{height:'9vh',position:'relative',top:'0px',display:'flex',justifyContent:'center',alignItems:'flex-end',width:'100%'}}><svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 64 64" role="presentation" aria-hidden="true" focusable="false" class="pn po"><path fill="#FFC017" fill-rule="evenodd" d="M56.475 38.3C58.125 36.575 60 34.6 60 32s-1.875-4.575-3.525-6.3c-.95-.975-1.975-2.05-2.3-2.875-.325-.824-.35-2.17-.375-3.494v-.006c-.025-2.425-.075-5.2-2-7.125s-4.7-1.975-7.125-2l-.431-.007c-1.172-.017-2.29-.034-3.069-.368-.875-.375-1.9-1.35-2.875-2.3C36.575 5.875 34.6 4 32 4s-4.575 1.875-6.3 3.525c-.975.95-2.05 1.975-2.875 2.3-.824.325-2.17.35-3.494.375h-.006c-2.425.025-5.2.075-7.125 2s-1.975 4.7-2 7.125l-.007.431c-.017 1.172-.034 2.29-.368 3.069-.375.875-1.35 1.9-2.3 2.875C5.875 27.425 4 29.4 4 32s1.875 4.575 3.525 6.3c.95.975 1.975 2.05 2.3 2.875.325.824.35 2.17.375 3.494v.006c.025 2.425.075 5.2 2 7.125s4.7 1.975 7.125 2l.431.007c1.172.017 2.29.034 3.069.368.875.375 1.9 1.35 2.875 2.3C27.425 58.125 29.4 60 32 60s4.575-1.875 6.3-3.525c.975-.95 2.05-1.975 2.875-2.3.824-.325 2.17-.35 3.494-.375h.006c2.425-.025 5.2-.075 7.125-2s1.975-4.7 2-7.125l.007-.431c.017-1.172.034-2.29.368-3.069.375-.875 1.35-1.9 2.3-2.875m-23.36 6.846a1.92 1.92 0 0 1-2.226 0h-.003C27.574 42.8 18.006 35.762 18 28.909s6.503-10.252 13.259-4.45c.43.37 1.052.37 1.482 0 6.755-5.805 13.265-2.403 13.259 4.45-.006 6.56-9.574 13.892-12.886 16.237" clip-rule="evenodd"></path></svg></div>
                                        <div className='A'>
                                            <h3>Friend of Medium</h3>
                                            <span style={{display:'flex',justifyContent:'center',alignItems:'center',color:'#757575'}}><mark className='mark'>$15/month</mark>or<mark className='mark'>$120/year</mark></span>
                                            </div>
                                        <button style={{marginBottom:'2vh',backgroundColor:'#1A8917',width:'80%',borderRadius:'99em',border:'none',color:'white',height:'5vh'}}>Get Started</button>
                                        
                                        
                                        <div className='list'> <div style={{marginLeft:'1vh',marginBottom:'1vh',justifyContent:'center',alignItems:'center',display:'flex',position:'relative',top:'-0.7vh',left:'3vh'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 64 64" role="presentation" aria-hidden="true" focusable="false" class="pv pu"><path fill="#FFC017" d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"></path></svg></div ><div className='B'><span className='listpart'>Give 4x more to the writers you read</span></div></div>
                                           
                                      
                                            
                                            <div className='list'> <div style={{marginLeft:'1vh',marginBottom:'1vh',justifyContent:'center',alignItems:'center',display:'flex',position:'relative',top:'-0.7vh',left:'3vh'}}><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false"><path stroke="#1A8917" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3"></path></svg></div ><div className='B'><span className='listpart'>Give 4x more to the writers you read</span></div></div>
                                            <div className='list'> <div style={{marginLeft:'1vh',marginBottom:'1vh',justifyContent:'center',alignItems:'center',display:'flex',position:'relative',top:'-2.3vh',left:'3vh'}}><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false"><path stroke="#1A8917" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3"></path></svg></div ><div className='B'><span className='listpart'>Share member-only stories with anyone and drive more earnings for writers</span></div></div>
                                            <div className='list'> <div style={{marginLeft:'1vh',marginBottom:'1vh',justifyContent:'center',alignItems:'center',display:'flex',position:'relative',top:'0.8vh',left:'3vh'}}><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false"><path stroke="#1A8917" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3"></path></svg></div ><div className='B'><span className='listpart'>Customize app icon</span></div></div>

                                            
                                        
                                            </div>
                                     
                                        
                                    </div>
                                </div>
                        </div>
                </div>
                
           
            
                </div> </>
        );
    }
    changeImages = () => {
        
     if(this.state.imageindex<=2){
      this.setState({imageindex:(this.state.imageindex+1)});
     }else{this.setState({imageindex:0})}
  }
  variableWord=()=>{
    switch(this.state.imageindex){
        case 0: return 'How Can i Stop Focusing On The Bad Things In Life';
        break;
        case 1: return 'Ai And The Future Of The Work: What Says 100%. Human';
        break;
        case 2: return 'How To Sleep Well In hotsummer Nights: Sientict Vs.Myth';
        break;
        case 3:return 'The Case For Reforesting Our Cities';

    }
  }
  imageSelector=()=>{
    switch(this.state.imageindex){
        case 0:return 'https://miro.medium.com/v2/resize:fill:96:96/1*AhsX8fHLFenRR_1GSnAOAA.png';
        break;
        case 1:return 'https://miro.medium.com/v2/resize:fill:96:96/1*pIJYAvf37_hLJXUpZs7z6w.png';
        break;
        case 2:return 'https://miro.medium.com/v2/resize:fill:96:96/1*ey2yJDAYcWUlx6ZiLRiB7A.png';
        break;
        case 3:return 'https://miro.medium.com/v2/resize:fill:96:96/1*U9Cqjqu1M4aRLy9M9gzauA.png'

    }
  }
  usernameSelector=()=>{
    switch(this.state.imageindex){
        case 0: return 'Kaki Okumura';
        break;
        case 1:return 'Cassie Kozyrkov';
        break;
        case 2:return 'Robert Roy Britt';
        break;
        case 3:return 'Kurtis Pykes'
    }
  }
  jobSelector=()=>{
    switch(this.state.imageindex){
        case 0: return 'Author of Wa: The Art of Balance';
        break;
        case 1:  return 'Chief Decision Scientist at Google';
        break;
        case 2:return 'Author of Make Sleep Your Superpower';
        break;
        case 3:return 'Author of Don’t Just Set Goals. Build Systems'
        
    }
  }
  rightSideBackgroundSelector=()=>{
    switch(this.state.imageindex){
        case 0: return ' rgb(182, 201, 217)';
        break;
        case 1:return 'rgb(253, 210, 119)';
        break;
        case 2:return 'rgb(238, 148, 229)';
        break;
        case 3:return 'rgb(178, 214, 141)';
    }
  }
  leftSideBackgroundSelector=()=>{
    switch(this.state.imageindex){
        case 0:return 'rgba(182, 201, 217, 0.4)';
        break;
        case 1:return 'rgba(253, 210, 119, 0.4)';
        break;
        case 2:return 'rgba(238, 148, 229, 0.4)';
        break;
        case 3:return 'rgba(178, 214, 141, 0.4)';
  }
}
}

export default Memberships;





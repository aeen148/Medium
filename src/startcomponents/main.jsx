import { faHourglass1 } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import img1 from '../images/image1.png';
import { createRef } from "react";
import '../styles/main.css';

class Main  extends Component {
    state = { 
        user:{
            name:'',
            lastname:'',
            gmail:'',
            gender:'',
            job:'',
            profileurl:'',
            followers:'',
            membership:'',
            bio:'',
        }
     } 
     selection1=createRef();
     selection2=createRef();
     selection3=createRef();

    componentDidMount(){
        this.activeSelection(2);
        console.log('currentcolor');
    }
    activeSelection = (input,event) => {
            
           
                switch(input){
                    case 2: this.selection3.current.classList.remove('active'); this.selection2.current.classList.add('active');                break;
                    case 3:this.selection2.current.classList.remove('active'); this.selection3.current.classList.add('active'); 
                 
                }
            
        }
        staffPickChange=()=>{
            
        }
    
    
    
    
    render() { 
        return (
        <>
            <body>
                <header className="white-header">
                <div id='mediumicondiv' className='every'>
                    <FontAwesomeIcon id='medium-icon-white' icon={faMedium} />
                    <h4 id='medium-white' className='every'>Medium </h4>
                    
                    <div id="search" >
                        <div ><svg id="search-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path id="icon-path" fill-rule="evenodd" d="M4.092 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0m6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73A8.05 8.05 0 0 0 11.042 3z" clip-rule="evenodd"></path></svg></div>
                        <input id='search-input' type="text" placeholder="Search" />
                        </div>
                        
                        </div>
                        <div id="options">
                            <button id="write"><div id="write-icon"><svg dis xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-label="Write"><path fill="currentColor" d="M14 4a.5.5 0 0 0 0-1zm7 6a.5.5 0 0 0-1 0zm-7-7H4v1h10zM3 4v16h1V4zm1 17h16v-1H4zm17-1V10h-1v10zm-1 1a1 1 0 0 0 1-1h-1zM3 20a1 1 0 0 0 1 1v-1zM4 3a1 1 0 0 0-1 1h1z"></path><path stroke="currentColor" d="m17.5 4.5-8.458 8.458a.25.25 0 0 0-.06.098l-.824 2.47a.25.25 0 0 0 .316.316l2.47-.823a.25.25 0 0 0 .098-.06L19.5 6.5m-2-2 2.323-2.323a.25.25 0 0 1 .354 0l1.646 1.646a.25.25 0 0 1 0 .354L19.5 6.5m-2-2 2 2"></path></svg></div> <span id="write-text">Write</span></button>
                            <button id='zangoole'><div id="zangoole-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-label="Notifications"><path stroke="currentColor" stroke-linecap="round" d="M15 18.5a3 3 0 1 1-6 0"></path><path stroke="currentColor" stroke-linejoin="round" d="M5.5 10.532V9a6.5 6.5 0 0 1 13 0v1.532c0 1.42.564 2.782 1.568 3.786l.032.032c.256.256.4.604.4.966v2.934a.25.25 0 0 1-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.934c0-.363.144-.71.4-.966l.032-.032A5.35 5.35 0 0 0 5.5 10.532Z"></path></svg></div></button>
                            <img id="profile" src={img1} alt="there is something wrong please contact our support " />
                            </div>
                    
                    
                </header>

        <div id="main-container">
            <div id="left-div-main">
                <div id="left-inner-container">
                        <div id="suggestion"><div ref={this.selection1}  className="buttons"><svg id="plus-fill" xmlns="http://www.w3.org/2000/svg" width="19" height="19"><path fillRule="evenodd" d="M9 9H3v1h6v6h1v-6h6V9h-6V3H9z"></path></svg></div><button ref={this.selection2} onClick={(event) => this.activeSelection(2, event)} className="buttons">For you</button><button ref={this.selection3} onClick={(event) => this.activeSelection(3, event)} className="buttons">Following</button></div>
                        <div></div>
                </div>
    
                </div>
                    
                <div id="right-div-main">
                    <div id="right-inner-container">
                        <div className="staff-picks right-container-part">
                        <h4 style={{margin:'1vh'}}>Staff picks</h4>
                            <div className="k"> <div style={{display:'flex',flexDirection:'row',}}><a className="a" href=""><img className="inner-profile" alt="Scott Lamb"  src="https://miro.medium.com/v2/resize:fill:25:25/1*0Ye7S84nA3tdGyVSxc_Q-g.png" width="20" height="20" loading="lazy"/></a> <div className="who"> <a className="traits" href="">theirname</a><span className="no-care"> in </span><a className="traits" href="">somewhere-they-work</a></div></div> <h6 ><a className="staff-main-speak" href="">Join us for Medium Day on (Aug.17)</a></h6> </div>
                            <div className="k"> <div style={{display:'flex',flexDirection:'row',}}><a className="a" href=""><img className="inner-profile" alt="Scott Lamb"  src="https://miro.medium.com/v2/resize:fill:40:40/2*Hq6sltcg17Gn_H6ldzOYow.jpeg" width="20" height="20" loading="lazy"/></a> <div className="who"> <a className="traits" href="">theirname</a><span className="no-care"> in </span><a className="traits" href="">somewhere-they-work</a></div></div> <h6 ><a className="staff-main-speak" href="">Join us for Medium Day on (Aug.17)</a></h6> </div>
                            <div className="k"> <div style={{display:'flex',flexDirection:'row',}}><a className="a" href=""><img className="inner-profile" alt="Scott Lamb"  src="https://miro.medium.com/v2/resize:fill:40:40/1*AwBz4NW9_M45J-sBlmH-lA.png" width="20" height="20" loading="lazy"/></a> <div className="who"> <a className="traits" href="">theirname</a><span className="no-care"> in </span><a className="traits" href="">somewhere-they-work</a></div></div> <h6 ><a className="staff-main-speak" href="">Join us for Medium Day on (Aug.17)</a></h6> </div>
                                <h6><a href="">See the full list </a></h6>

                        </div>
                        <div className="recommanded-topics">
                        </div>
                        <div className="who-to-follow"></div>
                        <div className="reading-list"></div>
                    </div>
                </div>

        </div>



               
            </body>


        </>);
    }
}
 
export default Main ;



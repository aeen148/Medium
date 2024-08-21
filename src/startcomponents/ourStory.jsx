import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/ourStory_style.css';

class OurStory extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <div className='every ourStory'>
                <div className='every'>
                    <div className='header every'>
                        <div id='mediumicondiv' className='every'>
                            <FontAwesomeIcon id='medium-icon' icon={faMedium} className='every' />
                            <h4 id='medium' className='every'>Medium</h4>
                        </div>
                        <div id='buttons' className='every'>
                            <button  className='every sign-in'>Sign In</button>
                            <button  className='every sign-up'>Sign Up</button>
                        </div>
                    </div>
                    <main className='every'>
                        <div className='main every'>
                      
                            <h1 className='h1 every'>
                                Everyone has a story to tell.
                            </h1>
                            <div className='container every'>
                            
                                <span className='text-information every'>
                                    Medium is a home for human stories and ideas. Here, anyone can share insightful perspectives,
                                    useful knowledge, and life wisdom with the world—without building a mailing list or a following first.
                                    The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful,
                                    collaborative, and helps you find the right audience for whatever you have to say.
                                    <br />
                                    <br />
                                    We believe that what you read and write matters. Words can divide or empower us,
                                    inspire or discourage us. In a world where the most sensational and surface-level stories often win,
                                    we’re building a system that rewards depth, nuance, and time well spent.
                                    A space for thoughtful conversation more than drive-by takes, and substance over packaging.
                                    <br />
                                    <br />
                                    <br />
                                    <h2 className='h2 every'>
                                        Ultimately, our goal is to deepen our collective
                                        understanding the world through
                                        the power of writing.
                                    </h2>
                                    <br />
                                    Over 100 million people connect and share their
                                    wisdom on Medium every month. Many are professional
                                    writers, but just as many aren’t — they’re CEOs, computer
                                    scientists, U.S. presidents, amateur novelists, and anyone
                                    burning with a story they need to get out into the world.
                                    They write about what they’re working on, what’s keeping
                                    them up at night, what they’ve lived through, and what they’ve
                                    learned that the rest of us might want to know too
                                    <br />
                                    <br />
                                    Instead of selling ads or selling your data,
                                    we’re supported by a growing community <a href='' className='every'>of Medium
                                    members</a> who align with our mission. If you’re new here,
                                    <a href='' className='every'>start exploring.</a> Dive deeper into whatever matters to
                                    you. Find a post that helps you learn something new,
                                    or reconsider something familiar—and then <a href='' className='every'>share your
                                    own story</a>.
                                </span>
                            </div>
                        </div>
                        <div className='down-buttons every'>
                            <a href='' className='downer every'><pre className='every'>Start reading <FontAwesomeIcon icon={faArrowRight} className='every' /></pre></a>
                            <a href='' className='downer every'><pre className='every'>Start writing <FontAwesomeIcon icon={faArrowRight} className='every' /></pre></a>
                            <a href='' className='downer every'><pre className='every'>Become a member <FontAwesomeIcon icon={faArrowRight} className='every' /></pre></a>
                        </div>
                    </main>
                    <footer className='every'>
                    </footer>
                </div>
            </div>
            </>
        );
    }
}

export default OurStory;

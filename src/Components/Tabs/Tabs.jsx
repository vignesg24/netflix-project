import React from 'react';
import { Link } from 'react-router-dom';
import './Tabs.css';
import { useState } from 'react';

export default function Tabs() {

    const CANCEL_AT_ANY_TIME ="Cancel at any time";
    const WATCH_ANYWHERE="Watch anywhere";
    const PICK_YOUR_PRICE="Pick your price";
    const [activeTab,setActiveTab]=useState(CANCEL_AT_ANY_TIME);
    const onClickTab =(tab) =>{
                setActiveTab(tab)
            }

     
    const renderTabTitle = (tabTitle,icon,id)=>(
        <div onClick={()=>onClickTab(tabTitle)} id={id} >
            <i className={icon}></i>
            <p>{tabTitle}</p>
        </div>
    )


  return (
    <div>
        <section className='tabs'>
            <div className="container">
                {renderTabTitle(
                    CANCEL_AT_ANY_TIME,
                    "fas fa-door-open fa-3x",
                    "tab-1"
                )}
                {renderTabTitle(
                    WATCH_ANYWHERE,
                    "fas fa-tablet-alt fa-3x",
                    "tab-2"
                )}
                {renderTabTitle(
                    PICK_YOUR_PRICE,
                    "fas fa-tags fa-3x",
                    "tab-3"
                )}
            </div>
        </section>
        {activeTab === CANCEL_AT_ANY_TIME && (
            <section className='tab-content'>
                <div className="container">
                <div id='tab-1-content'>
                    <div className="tab-1-content-inner">
                        <div>
                            <p className="text-lg">
                                If you decide NetFlix isn't for you - no problem. No
                                Commitment. Cancel online anytime
                            </p>
                            <Link to="/netflix-show" className='btn btn-lg'>
                                Watch Free For 30 Days
                            </Link>
                        </div>
                        <img src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt="" />
                    </div>
                </div>
                </div>
            </section>
        )}
        {activeTab === WATCH_ANYWHERE &&(
            <section className='tab-content'>
                <div className="container">
                <div id='tab-2-content'>
                    <div className="tab-2-content-top">
                        <p className='text-lg'>
                            Watch TV shows and movies anything, anywhere - personalized for
                            you.
                        </p>
                        <Link to="/netflix-show" className='btn btn-lg'>Wacth Free for 30 Days</Link>
                    </div>
                    <div className="tab-2-content-bottom">
                        <div>
                            <img src="http://i.ibb.co/DpdN7Gn/tab-content-2-1.png" alt="" />
                            <p className='text-md'>Watch on your TV</p>
                            <p className='text-dark'>
                                smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
                                Players and more
                            </p>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png" alt="" />
                            <p className='text-md'>Watch or download for later</p>
                            <p className='text-dark'>Available on phone and tablet, wherever you go.</p>
                        </div>
                        <div>
                            <img src="http://i.ibb.co/gDhnwWn/tab-content-2-3.png" alt="" />
                            <p className='text-md'>Use any Computer</p>
                            <p className='text-dark'>Watch right on Netflix.com</p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        )}
        {activeTab === PICK_YOUR_PRICE &&(
            <section className='tab-content'>
                <div className="container">
                    <div id='tab-3-content'>
                        <div className="text-center">
                            <p className='text-lg'>Choose one plan and watch everything on Netflix</p>
                            <Link to="/netflix-show" className='btn btn-lg'>
                                Watch Free For 30 Days  
                            </Link>
                        </div>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th style={{color:"white"}}>Basic</th>
                                    <th style={{color:"white"}}>Standard</th>
                                    <th style={{color:"white"}}>Premium</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Monthly price after free month ends on 19/6/2024</td>
                                    <td>$6.99</td>
                                    <td>$11.99</td>
                                    <td>$15.99</td>
                                </tr>
                                <tr>
                                    <td>HD Available</td>
                                    <td><i className='fas fa-times'></i></td>
                                    <td><i className='fas fa-check'></i></td>
                                    <td><i className='fas fa-check'></i></td>
                                </tr>
                                <tr>
                                    <td>Ultra HD Available</td>
                                    <td><i className='fas fa-times'></i></td>
                                    <td><i className='fas fa-times'></i></td>
                                    <td><i className='fas fa-check'></i></td>
                                </tr>
                                <tr>
                                    <td>Screen you can watch on at the same time</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>Watch on your laptop, TV, phone and tablet</td>
                                    <td><i className='fas fa-check'></i></td>
                                    <td><i className='fas fa-check'></i></td>
                                    <td><i className='fas fa-check'></i></td>
                                </tr>
                                <tr>
                                    <td>Unlimited movies and TV showa</td>
                                    <td><i className='fas fa-times'></i></td>
                                    <td><i className='fas fa-check'></i></td>
                                    <td><i className='fas fa-check'></i></td>
                                </tr>
                                <tr>
                                    <td>Cancel anytime</td>
                                    <td><i className='fas fa-check'></i></td>
                                    <td><i className='fas fa-check'></i></td>
                                    <td><i className='fas fa-check'></i></td>
                                </tr>
                                <tr>
                                    <td>Frist month free</td>
                                    <td><i className='fas fa-check'></i></td>
                                    <td><i className='fas fa-check'></i></td>
                                    <td><i className='fas fa-check'></i></td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </section>
        )}
      
    </div>
  )
}

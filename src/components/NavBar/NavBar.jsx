import React from 'react';
import navImg from "../../assets/logo.png"
import curImg from "../../assets/Currency.png"

const NavBar = ({coins}) => {
    return (
        <div className='container mx-auto'>
            <div className="navbar ">
                <div className="flex-1">
                   <a href="/"><img src={navImg}alt="" /></a>
                </div>
                <div className="flex gap-6 justify-center items-center">
                     <ul className='hidden md:flex gap-6 items-center list-none '>
                            <li className='style'><a href="">Home</a></li>
                            <li><a href="">Fixture</a></li>
                            <li><a href="">Teams</a></li>
                            <li><a href="">Schedules</a></li>
                        </ul>
                    <button className="btn">
                       <p>{coins} Coins</p>
                       <img src={curImg} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
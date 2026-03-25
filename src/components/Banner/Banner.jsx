import React from 'react';
import bgImg from "../../assets/bg-shadow.png"
import bgCricImg from "../../assets/banner-main.png"

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div
                className="hero min-h-[40vh] md:min-h-[60vh] "
                style={{
                    backgroundImage:`
                    url(${bgImg})`,
                    
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className='flex flex-col items-center'>
                        <img className='w-[20%] mb-2' src={bgCricImg} alt="" />

                    <div className="max-w-5xl">
                        <h1 className="mb-5 text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="mb-5 text-2xl">Beyond Boundaries Beyond Limits </p>
                        <button className="btn bg-[#E7FE29] border border-[#E7FE29]">Claim Free Credit</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
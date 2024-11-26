"use client";
import React from 'react'
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(() => {return import ("react-animated-numbers")}, {ssr: false});
const achievementList = [
    {
        metric: "Projects",
        value: "100",
        postfix: "+",
    },
    {
        prefix: "~",
        metric: "Users",
        value: "123,000",
        
    },
    {
        metric: "Awards",
        value: "8",
    },
    {
        metric: "Years",
        value: "5",
    },

];

const AchievementSection = () => {
    return (
        <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 mt-14">
            <div className="border-[#33353F] border rounded-md py-8 px-1 flex flex-row items-center justify-evenly">
                {achievementList.map((achieve, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center justify-center ">
                            <h2 className="text-white text-4xl sm:text-md lg:text-4xl font-bold flex flex-row">
                            {achieve.prefix}
                            <AnimatedNumbers
                            includeComma
                            animateToNumber={parseInt(achieve.value)}
                            locale="en-US"
                            className="text-white text-4xl font-bold"
                            configs={((_,index) =>{
                                return{
                                    mass: 1,
                                    friction: 100,
                                    tensions: 140 * (index + 1),
                                };
                            })}/>
                             {achieve.postfix}
                            </h2>
                            <p className="text-[#ADB7BE] text-base">{achieve.metric}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AchievementSection

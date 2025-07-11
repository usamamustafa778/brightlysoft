import React, { useState } from 'react';

const chartData = {
    age: [
        { label: '18 - 24', value: 12 },
        { label: '25 - 34', value: 18 },
        { label: '35 - 44', value: 15 },
        { label: '45 - 54', value: 22 },
        { label: '55 - 64', value: 19 },
        { label: '65+', value: 14 },
    ],
    gender: [
        { label: 'Male', value: 48 },
        { label: 'Female', value: 50 },
        { label: 'Other', value: 2 },
    ],
    education: [
        { label: 'No college', value: 30 },
        { label: 'College', value: 49 },
        { label: 'Graduate or professional school', value: 21 },
    ],
    income: [
        { label: '$0 - $50k', value: 31 },
        { label: '$50k - $100k', value: 35 },
        { label: '$100k - $150k', value: 18 },
        { label: '$150k +', value: 16 },
    ],
};

const chartDescriptions = {
    age: 'Our understanding of our existing audience allows us to cater to them, while also informing where there might be opportunities for expansion.',
    gender: 'Our understanding of our existing audience allows us to cater to them, while also informing where there might be opportunities for expansion.',
    education: 'Our understanding of our existing audience allows us to cater to them, while also informing where there might be opportunities for expansion.',
    income: 'Our understanding of our existing audience allows us to cater to them, while also informing where there might be opportunities for expansion.',
};

const tabs = ['age', 'gender', 'education', 'income'];

const yellow = '#ffe100';
const gray = '#bdbdbd';

function DonutChart({ data, selectedIdx, onSelect, isMobile }) {
    const svgSize = isMobile ? 250 : 300;
    const radius = svgSize / 2 - 30;
    const center = svgSize / 2;
    const strokeWidth = isMobile ? 14 : 18;
    const gapAngle = 3; // degrees between segments
    const circumference = 2 * Math.PI * radius;
    const gapLength = (gapAngle / 360) * circumference;
    const total = data.reduce((sum, d) => sum + d.value, 0);

    let currentAngle = 0;
    const arcs = data.map((d, i) => {
        const valueAngle = (d.value / total) * 360;
        const arcLength = (valueAngle / 360) * circumference - gapLength;
        const dashArray = `${arcLength} ${circumference - arcLength}`;
        const dashOffset = -(currentAngle / 360) * circumference;
        currentAngle += valueAngle;
        return {
            dashArray,
            dashOffset,
            color: i === selectedIdx ? yellow : gray,
            idx: i,
            label: d.label,
        };
    });

    return (
        <svg width={svgSize} height={svgSize} className="mx-auto">
            <g>
                {arcs.map((arc, i) => (
                    <circle
                        key={arc.label}
                        cx={center}
                        cy={center}
                        r={radius}
                        fill="none"
                        stroke={arc.color}
                        strokeWidth={strokeWidth}
                        strokeDasharray={arc.dashArray}
                        strokeDashoffset={arc.dashOffset}
                        strokeLinecap="butt"
                        className="cursor-pointer transition-colors duration-200"
                        onClick={() => onSelect(arc.idx)}
                        style={{ filter: arc.idx === selectedIdx ? 'drop-shadow(0 0 8px #ffe10088)' : 'none' }}
                    />
                ))}
            </g>
            {/* Center text */}
            <text x={center} y={center - 25} textAnchor="middle" fontSize={isMobile ? svgSize / 16 : svgSize / 14} fill="#fff" fontWeight="bold">
                {data[selectedIdx].label}
            </text>
            <text x={center} y={center + (isMobile ? svgSize / 16 : svgSize / 14)} textAnchor="middle" fontSize={isMobile ? svgSize / 7 : svgSize / 6} fill="#fff" fontWeight="bold">
                {data[selectedIdx].value}%
            </text>
        </svg>
    );
}

const AudienceChart = () => {
    const [selectedTab, setSelectedTab] = useState('age');
    const [selectedIdx, setSelectedIdx] = useState({
        age: 0,
        gender: 0,
        education: 0,
        income: 0,
    });

    const data = chartData[selectedTab];
    const idx = selectedIdx[selectedTab];

    return (
        <>
            <div className="bg-[#181818]  rounded-[20px] sm:rounded-[30px] md:rounded-[40px] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col max-w-5xl mx-auto my-6 sm:my-8 md:my-10">
                {/* Tabs */}
                <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 mb-4 sm:mb-6 md:mb-8 overflow-x-auto">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setSelectedTab(tab)}
                            className={`uppercase font-semibold text-sm sm:text-base md:text-lg tracking-wider pb-1 border-b-2 transition-colors duration-200 whitespace-nowrap ${selectedTab === tab ? 'text-[#ffe100] border-[#ffe100]' : 'text-white border-transparent'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-4 sm:gap-6 md:gap-8">
                    {/* Description */}
                    <div className="flex-1 text-white text-lg sm:text-xl md:text-2xl lg:text-[28px] font-normal leading-tight order-2 lg:order-1">
                        <div className="mb-4">{chartDescriptions[selectedTab]}</div>
                        <div className="text-xs text-[#bdbdbd] mt-4 sm:mt-6">Source: Quan tCast October 2023</div>
                    </div>
                    {/* Donut Chart and Legend */}
                    <div className='flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 order-1 lg:order-2'>
                        <div className="flex-1 flex flex-col items-center">
                            <DonutChart
                                data={data}
                                selectedIdx={idx}
                                onSelect={i => setSelectedIdx(prev => ({ ...prev, [selectedTab]: i }))}
                                isMobile={true}
                            />
                        </div>
                        {/* Legend */}
                        <div className="flex-1 flex flex-wrap justify-center gap-2 sm:gap-3 items-start w-full mt-4 sm:mt-6 lg:mt-0">
                            {data.map((d, i) => (
                                <button
                                    key={d.label}
                                    className={`font-semibold text-sm sm:text-base md:text-lg transition-colors duration-200 text-center px-2 py-1 rounded ${i === idx ? 'text-[#ffe100] drop-shadow-[0_0_8px_rgba(255,225,0,0.53)]' : 'text-white'}`}
                                    onClick={() => setSelectedIdx(prev => ({ ...prev, [selectedTab]: i }))}
                                >
                                    {d.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AudienceChart; 
import React, { useState } from 'react';

const TimelineNode = ({ year, details }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex items-center relative mb-12">
      <div className="h-10 w-1 bg-gradient-to-b from-blue-500 to-blue-700 absolute left-1/2"></div>
      <div 
        className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full text-white text-xl font-bold flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:scale-110"
        onClick={() => setExpanded(!expanded)}
      >
        {year}
      </div>
      <div className="ml-12 p-6 bg-white rounded-xl shadow-2xl flex-grow transition-all duration-300 transform hover:scale-105">
        {expanded ? details : year}
      </div>
    </div>
  );
}

const Timeline = ({ data }) => {
  return (
    <div className="p-12 flex flex-col items-center bg-gray-100">
      {data.map((node, index) => (
        <TimelineNode key={index} year={node.year} details={node.details} />
      ))}
      <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-blue-700 mt-6"></div>
    </div>
  );
}

export default Timeline;

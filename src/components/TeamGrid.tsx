"use client"

import React, { useState } from 'react';

interface TeamMember {
  name: string;
  imageUrl: string;
}

interface TeamGridProps {
  title: string;
  members: TeamMember[];
  descriptions: string[][]; // Array of arrays (one array of paragraphs per member)
}

const TeamGrid: React.FC<TeamGridProps> = ({ title, members, descriptions }) => {
  // State for toggling between Grid and Bios view
  const [showBios, setShowBios] = useState(false);
  
  // State for the Arrangement logic in Bios view
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Logic for Grid View splitting
  const isEven = members.length % 2 === 0;
  const firstRowCount = isEven ? members.length / 2 : Math.ceil(members.length / 2);
  const firstRow = members.slice(0, firstRowCount);
  const secondRow = members.slice(firstRowCount);

  // Logic for Bios View toggling
  const toggleBio = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className="w-full py-10 px-8 transition-all duration-500"
      style={{
        background: "linear-gradient(90deg, #F7B923 0%, #B7732B  100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl md:text-5xl text-center mb-12" style={{ fontFamily: 'var(--font-the-seasons), serif' }}>
          {title}
        </h2>
        
        {/* Toggle Button */}
        <div className="flex justify-center mb-16">
          <button
            onClick={() => setShowBios(!showBios)}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-3 px-8 rounded-full transition-colors text-lg cursor-pointer shadow-lg"
          >
            {showBios ? "Go Back" : "Read Bios"}
          </button>
        </div>

        {/* ============================================== */}
        {/* VIEW 1: GRID*/}
        {/* ============================================== */}
        {!showBios && (
          <div className="animate-fade-in">
            {/* First Row */}
            <div className={`flex justify-center gap-16 mb-16 flex-wrap ${isEven ? 'max-w-5xl mx-auto' : ''}`}>
              {firstRow.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg"
                    style={{ backgroundColor: '#FFF8E7' }}
                  >
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-white text-xl" style={{ fontFamily: 'var(--font-the-seasons), serif' }}>{member.name}</p>
                </div>
              ))}
            </div>

            {/* Second Row */}
            {secondRow.length > 0 && (
              <div className={`flex justify-center gap-16 flex-wrap ${isEven ? 'max-w-5xl mx-auto' : ''}`}>
                {secondRow.map((member, index) => (
                  <div key={index + firstRowCount} className="flex flex-col items-center">
                    <div
                      className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg"
                      style={{ backgroundColor: '#FFF8E7' }}
                    >
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-white text-xl" style={{ fontFamily: 'var(--font-the-seasons), serif' }}>{member.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ============================================== */}
        {/* VIEW 2: BIOS */}
        {/* ============================================== */}
        {showBios && (
          <div className="w-full max-w-5xl mx-auto px-4 py-8 bg-[#FFF4EB] rounded-xl shadow-2xl animate-fade-in">
            <div className="space-y-2">
              {members.map((member, index) => {
                const isExpanded = expandedIndex === index;
                const bioParagraphs = descriptions[index] || [];

                return (
                  <div 
                    key={index} 
                    className="border-b border-[#B7732B]/20 last:border-0"
                  >
                    {/* Trigger */}
                    <button
                      onClick={() => toggleBio(index)}
                      className="w-full flex justify-between items-center py-5 px-4 text-left hover:bg-[#B7732B]/5 transition-colors rounded-lg group"
                    >
                      <span className="text-2xl text-[#4A3B32] group-hover:text-[#B7732B] transition-colors" style={{ fontFamily: 'var(--font-the-seasons), serif' }}>
                        {member.name}
                      </span>
                      
                      {/* SVG Chevron */}
                      <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                        <svg 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </button>

                    {/* Expanded Content */}
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isExpanded ? 'max-h-[4000px] opacity-100 pb-8' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pt-2">
                        <div className="flex flex-col-reverse md:flex-row gap-8 items-start justify-between">
                          
                          {/* Left: Text Content */}
                          <div className="flex-1 space-y-4 text-[#4A3B32] pt-2">
                            {bioParagraphs.map((paragraph, pIndex) => (
                              <p key={pIndex} className="font-sans text-m md:text-lg leading-relaxed">
                                {paragraph}
                              </p>
                            ))}
                          </div>

                          {/* Right: Image */}
                          <div className="flex-shrink-0 mx-auto md:mx-0">
                            <div 
                              className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-white bg-[#FFF8E7]"
                              style={{ 
                                boxShadow: '0 10px 25px -5px rgba(183, 115, 43, 0.3)' 
                              }}
                            >
                              <img 
                                src={member.imageUrl} 
                                alt={member.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default TeamGrid;

import React from 'react';

interface TeamMember {
  name: string;
  imageUrl: string;
}

interface TeamGridProps {
  title: string;
  readBiosLink: string;
  members: TeamMember[];
}

const TeamGrid: React.FC<TeamGridProps> = ({ title, readBiosLink, members }) => {
  const isEven = members.length % 2 === 0;
  const firstRowCount = isEven ? members.length / 2 : Math.ceil(members.length / 2);
  const firstRow = members.slice(0, firstRowCount);
  const secondRow = members.slice(firstRowCount);

  return (
    <div
      className="w-full py-16 px-8"
      style={{
        background: "linear-gradient(90deg, #B7732B 0%, #F7B923 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-4xl font-serif text-center mb-8">
          {title}
        </h2>
        
        <div className="flex justify-center mb-8">
          <a
            href={readBiosLink}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-6 rounded transition-colors"
          >
            Read Bios
          </a>
        </div>

        {/* First Row */}
        <div className={`flex justify-center gap-8 mb-8 flex-wrap ${isEven ? 'max-w-4xl mx-auto' : ''}`}>
          {firstRow.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="w-32 h-32 rounded-2xl overflow-hidden mb-3"
                style={{ backgroundColor: '#FFF8E7' }}
              >
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white text-lg font-serif">{member.name}</p>
            </div>
          ))}
        </div>

        {/* Second Row */}
        {secondRow.length > 0 && (
          <div className={`flex justify-center gap-8 flex-wrap ${isEven ? 'max-w-4xl mx-auto' : ''}`}>
            {secondRow.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="w-32 h-32 rounded-2xl overflow-hidden mb-3"
                  style={{ backgroundColor: '#FFF8E7' }}
                >
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-white text-lg font-serif">{member.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamGrid;

// Example usage:
// const administrativeTeam = [
//   { name: 'Jane Doe', imageUrl: '/path/to/image1.jpg' },
//   { name: 'Jane Doe', imageUrl: '/path/to/image2.jpg' },
//   { name: 'Jane Doe', imageUrl: '/path/to/image3.jpg' },
//   { name: 'Jane Doe', imageUrl: '/path/to/image4.jpg' },
//   { name: 'Jane Doe', imageUrl: '/path/to/image5.jpg' },
//   { name: 'Jane Doe', imageUrl: '/path/to/image6.jpg' },
// ];
//
// <TeamGrid
//   title="Copper to Gold Administrative Team"
//   readBiosLink="/admin-bios"
//   members={administrativeTeam}
// />
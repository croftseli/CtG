import TeamGrid from '@/components/TeamGrid';

export default function AboutPage() {
      const adminTeam = [
    { name: 'Jane Doe', imageUrl: '/images/admin1.jpg' },
    { name: 'Jane Doe', imageUrl: '/images/admin2.jpg' },
    { name: 'Jane Doe', imageUrl: '/images/admin3.jpg' },
    { name: 'Jane Doe', imageUrl: '/images/admin4.jpg' },
    { name: 'Jane Doe', imageUrl: '/images/admin5.jpg' },
    { name: 'Jane Doe', imageUrl: '/images/admin6.jpg' },
  ];

  const boardMembers = [
    { name: 'Jane Doe', imageUrl: '/images/board1.jpg' },
    { name: 'Jane Doe', imageUrl: '/images/board2.jpg' },
    { name: 'Jane Doe', imageUrl: '/images/board3.jpg' },
    { name: 'Jane Doe', imageUrl: '/images/board4.jpg' },
    { name: 'Jane Doe', imageUrl: '/images/board5.jpg' },
    { name: 'Jane Doe', imageUrl: '/images/board6.jpg' },
    { name: 'Jane Doe', imageUrl: '/images/board7.jpg' },
  ];

  return (
    <div className="min-h-screen w-full">
      {/* TOP WHITE SECTION */}
      <div className="bg-[#F5F0E8] py-20 px-8">
        <div className="max-w-4xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-[48px] text-[#4A3B32] mb-8">
              About Us
            </h1>


            <div className="space-y-6 text-left text-[#4A3B32] font-sans text-[16px] leading-relaxed">

                
              <p>
                Copper to Gold believes that individuals possess the power to transform their internal lives and impact the world around them. Recognizing and addressing behaviors associated with racial prejudice and superiority promotes a healthy community life.
              </p>
              <p>
                Our mission is to empower individuals to influence communities and institutions by promoting racial justice and unity in diversity.
              </p>
              <p>
                Copper to Gold is a Baha'i inspired, non-profit organization dedicated to achieving race amity through personal transformation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MIDDLE ORANGE SECTION - ADMINISTRATIVE TEAM */}
          <div>
      <TeamGrid
        title="Copper to Gold Administrative Team"
        readBiosLink="/admin-bios"
        members={adminTeam}
      /></div>

      {/* BOTTOM BEIGE SECTION */}
      <div className="bg-[#F5F0E8] py-36">
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-[16px] text-[#4A3B32] leading-relaxed text-center">
            Copper to Gold is led by a team who are passionate about advancing healthy and just interracial relationships. Our goal is to promote sustainable change through personal behavioral transformation. With diverse experience in training and developing programs and materials, their backgrounds include: working with educational institutions, parent groups, social service organizations, and law enforcement, on issues such as cultural and ethnic diversity and desegregation compliance. Having developed resources on anti-racism by working with individuals, communities, and institutions, this team is dedicated to building a greater understanding of the impact of unconscious behaviors in their interactions with racialized communities.
          </p>
        </div>

 {/* MIDDLE ORANGE SECTION - Gold members TEAM */}
      <TeamGrid
        title="Copper to Gold Board Members"
        readBiosLink="/board-bios"
        members={boardMembers}
      />

      </div>
    </div>
  );
}
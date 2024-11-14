import Link from "next/link";
import Image from "next/image";
import InvestInYouth from "@/components/InvestInYouth";

// Team member card component
interface TeamMemberProps {
  name: string;
  position: string;
  imageUrl?: string;
}

function TeamMemberCard({ name, position, imageUrl }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="aspect-[4/3] bg-gray-200 relative">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold mb-1">{name}</h3>
        <p className="text-gray-600 text-sm">{position}</p>
      </div>
    </div>
  );
}

export default function OurPeople() {
  // Sample data - replace with actual data
  const boardMembers = Array(8).fill({
    name: "Name and Last Name",
    position: "Position",
  });

  const mindtrustLeaders = Array(8).fill({
    name: "Name and Last Name",
    position: "Position",
  });

  const mentors = Array(8).fill({
    name: "Name and Last Name",
    position: "Position",
  });

  return (
    <>
      {/* Header Section */}
      <div className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>›</span>
            <Link href="/who-we-are" className="hover:text-blue-600">
              Who we are
            </Link>
            <span>›</span>
            <span>Our people</span>
          </div>
          <h1 className="text-4xl font-bold">Our strength lies<br />in our people</h1>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600">
              At Mindtrust, our greatest asset is our people. Our team of dedicated mentors, leadership 
              experts, and community leaders bring a wealth of experience, knowledge, and passion to 
              everything they do. Their commitment to nurturing the next generation of leaders ensures 
              that our programs not only make a difference but also drive meaningful, lasting change in 
              communities.
            </p>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Board members</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <TeamMemberCard
                key={`board-${index}`}
                name={member.name}
                position={member.position}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mindtrust Leaders Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Mindtrust leaders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {mindtrustLeaders.map((leader, index) => (
              <TeamMemberCard
                key={`leader-${index}`}
                name={leader.name}
                position={leader.position}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Mentors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {mentors.map((mentor, index) => (
              <TeamMemberCard
                key={`mentor-${index}`}
                name={mentor.name}
                position={mentor.position}
              />
            ))}
          </div>
        </div>
      </section>
      <InvestInYouth />
    </>
  );
} 
import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';

interface EventCardProps {
  month: string;
  day: string;
  year: string;
  type: string;
  title: string;
  description: string;
  location: string;
}

const eventsData: EventCardProps[] = [
  {
    month: 'APR',
    day: '27',
    year: '2025',
    type: 'In-Person',
    title: 'Alumni Grand Reunion 2025',
    description:
      'An unforgettable homecoming — reconnect with batchmates, celebrate milestones, and build lifelong bonds on campus.',
    location: 'BFCET Campus, Bathinda',
  },
  {
    month: 'MAY',
    day: '15',
    year: '2025',
    type: 'Hybrid',
    title: 'Vibgyor Techno Fest 2025',
    description:
      "BFGI's biggest international annual festival featuring workshops, tech showcases, and alumni panel discussions.",
    location: 'Main Auditorium, BFCET',
  },
  {
    month: 'JUN',
    day: '09',
    year: '2025',
    type: 'Online',
    title: 'Smart Tech Summer Training',
    description:
      'Industry-relevant training program for alumni looking to upskill in AI, IoT, and emerging technologies.',
    location: 'Online + On Campus',
  },
];

const EventCard: React.FC<EventCardProps> = ({
  month,
  day,
  year,
  type,
  title,
  description,
  location,
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col transition-all hover:-translate-y-2 hover:shadow-2xl duration-300 h-full group">
      {/* Date Header */}
      <div className="bg-gradient-to-br from-[#161f36] to-[#253252] text-white flex justify-between items-center py-5 px-6 shrink-0 relative overflow-hidden">
        {/* Decorative circle for depth */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-32 h-32 pointer-events-none " />
        
        <div className="flex items-baseline space-x-2 relative z-10">
          <span className="text-[#eab308] text-base font-bold tracking-wider uppercase">
            {month}
          </span>
          <span className="text-4xl font-extrabold tracking-tight">
            {day}
          </span>
          <span className="text-gray-300 text-sm font-medium">{year}</span>
        </div>
        
        <span className="bg-white/10 border border-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full relative z-10 shadow-sm">
          {type}
        </span>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-white">
        <div className="flex-grow mb-6">
          <h3 className="font-bold text-[#111827] text-2xl mb-3 leading-tight group-hover:text-[#d60000] transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="mt-auto">
          <hr className="border-gray-100 mb-5" />
          <div className="flex flex-row justify-between items-center w-full gap-4">
            <div className="flex items-center text-gray-600 text-sm font-medium space-x-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100 flex-1 min-w-0">
              <MapPin size={18} className="text-[#d60000] shrink-0" />
              <span className="truncate">{location}</span>
            </div>

            <Link
              href="#"
              className="flex items-center justify-center bg-[#fee2e2] hover:bg-[#d60000] text-[#d60000] hover:text-white shrink-0 w-10 h-10 rounded-full transition-colors shadow-sm"
              title="Register Now"
            >
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const UpcomingEvents = () => {
  return (
    <div className="w-full bg-black/5">
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-32 xl:px-58 w-full">
        <div className="flex flex-col mb-14">

          <h2 className="text-4xl md:text-[2.75rem] font-bold text-[#111827] leading-[1.1] tracking-tight mb-4">
            Upcoming Events
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed">
            Stay connected with the BFCET community through reunions, workshops
            and alumni meets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {eventsData.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        <div className="flex justify-center w-full">
          <Link
            href="/events"
            className="inline-flex items-center justify-center space-x-2 bg-transparent border border-[#d60000] text-[#d60000] hover:bg-[#fee2e2] hover:border-[#fee2e2] px-6 py-3.5 rounded-md font-semibold transition-all w-fit group"
          >
            <span>View All Events</span>
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UpcomingEvents;

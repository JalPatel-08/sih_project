import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import FAQSection from "../components/FAQSection";

// Icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupsIcon from '@mui/icons-material/Groups';
import BusinessIcon from '@mui/icons-material/Business';
import PublicIcon from '@mui/icons-material/Public';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StarIcon from '@mui/icons-material/Star';
import TargetIcon from '@mui/icons-material/GpsFixed';

export default function Home() {
  // Dummy data for alumni profiles
  const featuredAlumni = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      degree: "PhD Computer Science, 2018",
      role: "Senior AI Research Scientist",
      company: "Google",
      location: "California, USA",
      skills: ["Machine Learning", "AI Research", "Python", "TensorFlow"],
      image: "/default-avatar.png"
    },
    {
      id: 2,
      name: "Raj Patel",
      degree: "MBA Finance, 2020",
      role: "Investment Banking VP",
      company: "Goldman Sachs",
      location: "Mumbai, India",
      skills: ["Investment Banking", "Financial Analysis", "Risk Management"],
      image: "/default-avatar.png"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      degree: "MS Data Science, 2019",
      role: "Lead Data Scientist",
      company: "Microsoft",
      location: "Seattle, USA",
      skills: ["Data Science", "Analytics", "Cloud Computing", "Azure"],
      image: "/default-avatar.png"
    }
  ];

  // Dummy job opportunities
  const jobOpportunities = [
    {
      id: 1,
      role: "Software Engineer",
      company: "Tech Innovations Ltd",
      location: "Bangalore, India",
      experience: "2-4 years",
      skills: ["React", "Node.js", "MongoDB", "AWS"],
      type: "Full-time"
    },
    {
      id: 2,
      role: "Product Manager",
      company: "Startup Hub",
      location: "Pune, India",
      experience: "3-5 years",
      skills: ["Product Strategy", "Agile", "Analytics", "Leadership"],
      type: "Full-time"
    },
    {
      id: 3,
      role: "Data Analyst",
      company: "Finance Corp",
      location: "Delhi, India",
      experience: "1-3 years",
      skills: ["SQL", "Python", "Tableau", "Statistics"],
      type: "Full-time"
    }
  ];

  // Dummy events
  const upcomingEvents = [
    {
      id: 1,
      title: "Alumni Networking Meetup",
      location: "Charusat Campus, Anand",
      date: "October 15, 2025",
      type: "Networking"
    },
    {
      id: 2,
      title: "Tech Talk: Future of AI",
      location: "Virtual Event",
      date: "October 22, 2025",
      type: "Educational"
    },
    {
      id: 3,
      title: "Career Guidance Workshop",
      location: "Mumbai Convention Center",
      date: "November 5, 2025",
      type: "Workshop"
    }
  ];

  // Dummy campaigns
  const activeCampaigns = [
    {
      id: 1,
      title: "Student Scholarship Fund",
      goal: "₹10,00,000",
      raised: "₹7,50,000",
      progress: 75,
      supporters: 250
    },
    {
      id: 2,
      title: "New Library Construction",
      goal: "₹50,00,000",
      raised: "₹32,00,000",
      progress: 64,
      supporters: 180
    },
    {
      id: 3,
      title: "Research Equipment Fund",
      goal: "₹25,00,000",
      raised: "₹18,75,000",
      progress: 75,
      supporters: 120
    }
  ];

  // Dummy updates
  const latestUpdates = [
    {
      id: 1,
      title: "Charusat University Achieves NAAC A+ Grade",
      summary: "Our university has been awarded the prestigious NAAC A+ accreditation for excellence in education.",
      date: "September 20, 2025",
      category: "Achievement"
    },
    {
      id: 2,
      title: "Alumni Success Stories: Tech Innovation Awards",
      summary: "Three of our alumni have won national awards for their contributions to technology innovation.",
      date: "September 15, 2025",
      category: "Success Story"
    },
    {
      id: 3,
      title: "New Research Center Inaugurated",
      summary: "The state-of-the-art AI Research Center has been inaugurated with cutting-edge facilities.",
      date: "September 10, 2025",
      category: "News"
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Charusat University Alumni Network - AlumniSetu</title>
        <meta name="description" content="Connect with Charusat University alumni network. Explore opportunities, events, and build valuable connections." />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] bg-repeat opacity-10"></div>
        
        {/* University Image Placeholder */}
        <div className="absolute inset-0 bg-black/20">
          <div className="w-full h-full bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-2xl md:text-3xl text-white/90 mb-4 font-medium">
              Welcome to Your Alumni Network
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Charusat University
              <span className="block text-blue-300">Alumni</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl leading-relaxed">
              Join our thriving community of alumni from Anand, where connections become opportunities and achievements strengthen our global presence.
            </p>

            {/* Highlight Badges */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <TargetIcon className="text-green-400 mr-2" />
                  <span className="text-white font-semibold">🎯 100% Placement</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <StarIcon className="text-yellow-400 mr-2" />
                  <span className="text-white font-semibold">🏅 NAAC A+ Accredited</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUpIcon className="text-blue-400 mr-2" />
                  <span className="text-white font-semibold">📊 Top 200 NIRF Ranking</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <span className="text-white font-semibold">🏆 Top 3 Universities Gujarat</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <span className="text-white font-semibold">🌍 UN Academic Impact Member</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <span className="text-white font-semibold">🚀 Q2 Innovation Rank SCIMAGO</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg">
                🔵 Explore Network
              </Link>
              <Link href="/signup" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg">
                ➕ Join Now
              </Link>
            </div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl"
          >
            <div className="text-center">
              <GroupsIcon className="text-blue-300 text-4xl mb-2 mx-auto" />
              <div className="text-3xl font-bold text-white">1000+</div>
              <div className="text-white/80">Alumni</div>
            </div>
            <div className="text-center">
              <BusinessIcon className="text-green-300 text-4xl mb-2 mx-auto" />
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-white/80">Companies</div>
            </div>
            <div className="text-center">
              <PublicIcon className="text-purple-300 text-4xl mb-2 mx-auto" />
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-white/80">Countries</div>
            </div>
            <div className="text-center">
              <WorkIcon className="text-yellow-300 text-4xl mb-2 mx-auto" />
              <div className="text-3xl font-bold text-white">200+</div>
              <div className="text-white/80">Active Jobs</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Explore Our Network */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Explore Our Network
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Connect with successful alumni from various industries and locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredAlumni.map((alumni) => (
              <motion.div
                key={alumni.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={alumni.image}
                      alt={alumni.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {alumni.name}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400">{alumni.degree}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="font-semibold text-gray-900 dark:text-white">{alumni.role}</p>
                    <p className="text-gray-600 dark:text-gray-300">{alumni.company}</p>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mt-1">
                      <LocationOnIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">{alumni.location}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {alumni.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                    View Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/connect" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold inline-block transition-colors">
              Explore All Alumni
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Opportunities */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Opportunities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover exciting career opportunities shared by our alumni network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {jobOpportunities.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 dark:bg-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {job.role}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{job.company}</p>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mt-1">
                    <LocationOnIcon className="w-4 h-4 mr-1" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    <span className="font-medium">Experience:</span> {job.experience}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    <span className="font-medium">Type:</span> {job.type}
                  </p>
                </div>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {job.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/jobs" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold inline-block transition-colors">
              View All Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join our community events and networking opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {upcomingEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium mb-3">
                    {event.type}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {event.title}
                  </h3>
                </div>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <LocationOnIcon className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <CalendarTodayIcon className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  Register Now
                </button>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/events" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold inline-block transition-colors">
              Explore All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Active Campaigns */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Active Campaigns
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Support causes that matter to our university community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {activeCampaigns.map((campaign) => (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 dark:bg-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {campaign.title}
                  </h3>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                      <span>Raised: {campaign.raised}</span>
                      <span>Goal: {campaign.goal}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className="bg-orange-600 h-2 rounded-full" 
                        style={{ width: `${campaign.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-2xl font-bold text-orange-600">{campaign.progress}%</span>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {campaign.supporters} supporters
                  </p>
                </div>
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  Support Campaign
                </button>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Campaigns
            </button>
          </div>
        </div>
      </section>

      {/* Latest Updates & Insights */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Updates & Insights
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay informed with the latest news and achievements from our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {latestUpdates.map((update) => (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium mb-3">
                    {update.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {update.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {update.summary}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {update.date}
                  </p>
                </div>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  Read More
                </button>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/news" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold inline-block transition-colors">
              Explore More Updates
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ & Guide Section */}
      <FAQSection />
    </Layout>
  );
}
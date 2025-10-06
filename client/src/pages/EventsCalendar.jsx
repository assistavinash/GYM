import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  MapPin,
  Users,
  ArrowRight,
  Star,
  Filter,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Heart,
  Zap,
  Target,
  Gift,
  Music,
  Award,
  Coffee,
  Camera,
  Dumbbell
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function EventsCalendar() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(9); // October (0-indexed)
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'calendar'

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const categories = [
    { key: 'all', label: 'All Events', count: 24 },
    { key: 'competitions', label: 'Competitions', count: 6 },
    { key: 'workshops', label: 'Workshops', count: 8 },
    { key: 'social', label: 'Social Events', count: 5 },
    { key: 'wellness', label: 'Wellness', count: 5 }
  ];

  const events = [
    {
      id: 1,
      title: 'October Fitness Challenge',
      date: '2025-10-07',
      time: '6:00 AM - 8:00 PM',
      location: 'Main Gym Floor',
      category: 'competitions',
      type: 'Competition',
      description: 'Month-long fitness challenge with weekly milestones and exciting prizes',
      image: '/images/events/fitness-challenge.jpg',
      price: 'Free for Members',
      participants: 156,
      maxParticipants: 200,
      instructor: 'Team PowerPoint',
      difficulty: 'All Levels',
      features: ['Weekly Challenges', 'Progress Tracking', 'Prizes', 'Community Support'],
      color: 'from-orange-400 to-red-500',
      icon: Trophy,
      status: 'Ongoing'
    },
    {
      id: 2,
      title: 'Nutrition Workshop Series',
      date: '2025-10-10',
      time: '7:00 PM - 9:00 PM',
      location: 'Conference Room A',
      category: 'workshops',
      type: 'Educational',
      description: 'Learn about meal planning, macro counting, and sustainable nutrition habits',
      image: '/images/events/nutrition-workshop.jpg',
      price: '₹500',
      participants: 28,
      maxParticipants: 35,
      instructor: 'Dr. Priya Sharma',
      difficulty: 'Beginner Friendly',
      features: ['Meal Plans', 'Recipe Book', 'Q&A Session', 'Take-home Materials'],
      color: 'from-green-400 to-emerald-500',
      icon: Heart,
      status: 'Open Registration'
    },
    {
      id: 3,
      title: 'CrossFit Competition',
      date: '2025-10-14',
      time: '9:00 AM - 5:00 PM',
      location: 'CrossFit Arena',
      category: 'competitions',
      type: 'Competition',
      description: 'Regional CrossFit competition with multiple categories and skill levels',
      image: '/images/events/crossfit-comp.jpg',
      price: '₹1500',
      participants: 42,
      maxParticipants: 50,
      instructor: 'Mike Chen & Team',
      difficulty: 'Intermediate-Advanced',
      features: ['Multiple Categories', 'Professional Judging', 'Live Commentary', 'Awards Ceremony'],
      color: 'from-red-400 to-rose-500',
      icon: Target,
      status: 'Limited Spots'
    },
    {
      id: 4,
      title: 'Member Appreciation Night',
      date: '2025-10-18',
      time: '6:00 PM - 10:00 PM',
      location: 'Entire Facility',
      category: 'social',
      type: 'Social Event',
      description: 'Exclusive member event with food, music, games, and special announcements',
      image: '/images/events/member-night.jpg',
      price: 'Free for Members',
      participants: 234,
      maxParticipants: 300,
      instructor: 'PowerPoint Team',
      difficulty: 'All Welcome',
      features: ['Live DJ', 'Catered Food', 'Prize Draws', 'Facility Tours'],
      color: 'from-purple-400 to-pink-500',
      icon: Music,
      status: 'RSVP Required'
    },
    {
      id: 5,
      title: 'Yoga & Meditation Retreat',
      date: '2025-10-21',
      time: '8:00 AM - 6:00 PM',
      location: 'Rooftop Studio',
      category: 'wellness',
      type: 'Wellness Retreat',
      description: 'Full-day retreat focusing on mindfulness, meditation, and restorative yoga',
      image: '/images/events/yoga-retreat.jpg',
      price: '₹2500',
      participants: 18,
      maxParticipants: 25,
      instructor: 'Kavya Reddy',
      difficulty: 'All Levels',
      features: ['Multiple Sessions', 'Healthy Meals', 'Meditation Guide', 'Take-home Kit'],
      color: 'from-indigo-400 to-purple-500',
      icon: Heart,
      status: 'Early Bird Pricing'
    },
    {
      id: 6,
      title: 'Halloween Workout Party',
      date: '2025-10-31',
      time: '7:00 PM - 9:00 PM',
      location: 'Main Studio',
      category: 'social',
      type: 'Themed Event',
      description: 'Costume workout party with spooky music and themed exercises',
      image: '/images/events/halloween-workout.jpg',
      price: '₹300',
      participants: 67,
      maxParticipants: 80,
      instructor: 'Sarah Johnson',
      difficulty: 'All Levels',
      features: ['Costume Contest', 'Themed Music', 'Special Lighting', 'Prizes'],
      color: 'from-orange-400 to-red-600',
      icon: Gift,
      status: 'Open Registration'
    },
    {
      id: 7,
      title: 'Powerlifting Workshop',
      date: '2025-10-25',
      time: '10:00 AM - 2:00 PM',
      location: 'Weight Training Area',
      category: 'workshops',
      type: 'Technical Workshop',
      description: 'Master the big three: squat, bench press, and deadlift with proper form',
      image: '/images/events/powerlifting.jpg',
      price: '₹800',
      participants: 15,
      maxParticipants: 20,
      instructor: 'Raj Sharma',
      difficulty: 'Intermediate',
      features: ['Form Analysis', '1-on-1 Guidance', 'Program Design', 'Safety Focus'],
      color: 'from-blue-400 to-cyan-500',
      icon: Dumbbell,
      status: 'Open Registration'
    },
    {
      id: 8,
      title: 'Healthy Cooking Class',
      date: '2025-10-12',
      time: '6:00 PM - 8:30 PM',
      location: 'Nutrition Kitchen',
      category: 'wellness',
      type: 'Practical Workshop',
      description: 'Learn to prepare delicious, healthy meals that support your fitness goals',
      image: '/images/events/cooking-class.jpg',
      price: '₹600',
      participants: 20,
      maxParticipants: 25,
      instructor: 'Chef Ravi Kumar',
      difficulty: 'Beginner',
      features: ['Hands-on Cooking', 'Recipe Cards', 'Meal Planning Tips', 'Taste Testing'],
      color: 'from-green-400 to-teal-500',
      icon: Coffee,
      status: 'Open Registration'
    },
    {
      id: 9,
      title: 'HIIT Championship',
      date: '2025-10-28',
      time: '8:00 AM - 12:00 PM',
      location: 'Functional Training Area',
      category: 'competitions',
      type: 'Competition',
      description: 'High-intensity interval training competition with team and individual categories',
      image: '/images/events/hiit-championship.jpg',
      price: '₹1000',
      participants: 35,
      maxParticipants: 40,
      instructor: 'Fitness Team',
      difficulty: 'Intermediate-Advanced',
      features: ['Team & Individual', 'Live Scoring', 'Professional Timing', 'Winner Certificates'],
      color: 'from-yellow-400 to-orange-500',
      icon: Zap,
      status: 'Registration Closing Soon'
    },
    {
      id: 10,
      title: 'Photography Workshop',
      date: '2025-10-15',
      time: '2:00 PM - 5:00 PM',
      location: 'Various Locations',
      category: 'workshops',
      type: 'Creative Workshop',
      description: 'Learn fitness photography techniques and capture your transformation journey',
      image: '/images/events/photography.jpg',
      price: '₹700',
      participants: 12,
      maxParticipants: 15,
      instructor: 'Alex Thompson',
      difficulty: 'All Levels',
      features: ['Camera Techniques', 'Lighting Setup', 'Editing Basics', 'Portfolio Review'],
      color: 'from-cyan-400 to-blue-500',
      icon: Camera,
      status: 'Limited Spots'
    },
    {
      id: 11,
      title: 'Charity Fitness Marathon',
      date: '2025-10-20',
      time: '6:00 AM - 6:00 PM',
      location: 'Multiple Stations',
      category: 'social',
      type: 'Charity Event',
      description: '12-hour fitness marathon to raise funds for local community health programs',
      image: '/images/events/charity-marathon.jpg',
      price: 'Donation Based',
      participants: 89,
      maxParticipants: 150,
      instructor: 'All Trainers',
      difficulty: 'All Levels',
      features: ['Fundraising Goal', 'Community Impact', 'Team Participation', 'Recognition'],
      color: 'from-emerald-400 to-green-600',
      icon: Heart,
      status: 'Open Registration'
    },
    {
      id: 12,
      title: 'Strength Training Seminar',
      date: '2025-10-08',
      time: '11:00 AM - 3:00 PM',
      location: 'Seminar Hall',
      category: 'workshops',
      type: 'Educational Seminar',
      description: 'Comprehensive seminar on strength training principles and program design',
      image: '/images/events/strength-seminar.jpg',
      price: '₹900',
      participants: 25,
      maxParticipants: 35,
      instructor: 'Dr. Amit Singh',
      difficulty: 'Intermediate',
      features: ['Science-based Content', 'Program Templates', 'Q&A Session', 'Certification'],
      color: 'from-blue-400 to-indigo-500',
      icon: Award,
      status: 'Open Registration'
    }
  ];

  const stats = [
    {
      icon: Calendar,
      number: '24+',
      label: 'Monthly Events',
      description: 'Exciting activities'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Event Participants',
      description: 'Active community'
    },
    {
      icon: Trophy,
      number: '12',
      label: 'Competitions',
      description: 'Challenge yourself'
    },
    {
      icon: Star,
      number: '4.8',
      label: 'Event Rating',
      description: 'Member satisfaction'
    }
  ];

  const getFilteredEvents = () => {
    if (selectedCategory === 'all') return events;
    return events.filter(event => event.category === selectedCategory);
  };

  const getUpcomingEvents = () => {
    const today = new Date();
    return events.filter(event => new Date(event.date) >= today).slice(0, 3);
  };

  const getEventsByDate = () => {
    const eventsMap = {};
    events.forEach(event => {
      const date = event.date;
      if (!eventsMap[date]) eventsMap[date] = [];
      eventsMap[date].push(event);
    });
    return eventsMap;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open Registration': return 'text-green-400';
      case 'Limited Spots': return 'text-yellow-400';
      case 'Registration Closing Soon': return 'text-orange-400';
      case 'Full': return 'text-red-400';
      case 'Ongoing': return 'text-blue-400';
      default: return 'text-white';
    }
  };

  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Particles Background */}
      <div className="fixed inset-0 z-[1] w-full h-full min-h-screen pointer-events-none">
        <Particles
          particleCount={600}
          particleSpread={25}
          speed={0.1}
          particleColors={["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"]}
          moveParticlesOnHover={true}
          particleHoverFactor={1.3}
          alphaParticles={true}
          particleBaseSize={130}
          sizeRandomness={1.8}
          cameraDistance={35}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full border border-purple-400/30 backdrop-blur-sm mb-6">
                <Calendar className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-sm text-white/80">Events & Activities</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Events
                <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Calendar
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-8">
                Join our vibrant community events, competitions, workshops, and social gatherings. 
                From fitness challenges to wellness retreats, there's something exciting for everyone.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="group relative px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-purple-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Join Events
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <button 
                  onClick={() => setSelectedCategory('competitions')}
                  className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <Trophy className="w-5 h-5 mr-2" />
                  View Competitions
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-white/60 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events Highlight */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Upcoming Events</h2>
              <p className="text-white/80">Don't miss these exciting upcoming activities</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {getUpcomingEvents().map((event, index) => (
                <div key={event.id} className="group cursor-pointer" onClick={() => setSelectedEvent(event)}>
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${event.color} rounded-xl flex items-center justify-center`}>
                        <event.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-white font-semibold text-sm">{formatDate(event.date)}</div>
                        <div className="text-white/60 text-xs">{event.time}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-white/80 text-sm mb-4">{event.description}</p>
                    
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-white/60">Location:</span>
                      <span className="text-blue-400">{event.location}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${getStatusColor(event.status)}`}>{event.status}</span>
                      <span className="text-white/60 text-sm">{event.participants}/{event.maxParticipants} joined</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.key
                      ? 'bg-gradient-to-r from-purple-400 to-pink-500 text-white'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>

            <div className="flex justify-center mb-8">
              <div className="bg-white/5 rounded-xl p-1 flex">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-white/80'
                  }`}
                >
                  Grid View
                </button>
                <button
                  onClick={() => setViewMode('calendar')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    viewMode === 'calendar' ? 'bg-purple-500 text-white' : 'text-white/80'
                  }`}
                >
                  Calendar View
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">All Events</h2>
              <p className="text-white/80">
                {getFilteredEvents().length} events in {categories.find(c => c.key === selectedCategory)?.label.toLowerCase()}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredEvents().map((event, index) => (
                <div key={event.id} className="group cursor-pointer" onClick={() => setSelectedEvent(event)}>
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${event.color} rounded-xl flex items-center justify-center`}>
                        <event.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-white font-semibold text-sm">{formatDate(event.date)}</div>
                        <div className="text-white/60 text-xs">{event.time}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-white/80 text-sm mb-4">{event.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/60">Instructor:</span>
                        <span className="text-blue-400">{event.instructor}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/60">Price:</span>
                        <span className="text-green-400">{event.price}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/60">Level:</span>
                        <span className="text-white">{event.difficulty}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className={getStatusColor(event.status)}>{event.status}</span>
                        <span className="text-white/80">{event.participants}/{event.maxParticipants}</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${event.color}`}
                          style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <button className={`w-full py-3 bg-gradient-to-r ${event.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {getFilteredEvents().length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📅</div>
                <h3 className="text-2xl font-bold text-white mb-4">No Events Found</h3>
                <p className="text-white/80 mb-6">
                  No events match your current filter selection.
                </p>
                <button 
                  onClick={() => setSelectedCategory('all')}
                  className="px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300"
                >
                  Show All Events
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-purple-400/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Never Miss an Event!
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Subscribe to our event calendar and get notified about upcoming competitions, workshops, and social events.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-purple-400/25 transition-all duration-300 hover:scale-105">
                  Subscribe to Events
                </Link>
                <Link to="/contact" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Plan Private Event
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedEvent(null)}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-2xl w-full border border-white/20 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">{selectedEvent.title}</h3>
              <button onClick={() => setSelectedEvent(null)} className="text-white/60 hover:text-white text-2xl">×</button>
            </div>
            
            <div className="text-center mb-6">
              <div className={`mb-4 mx-auto w-20 h-20 bg-gradient-to-r ${selectedEvent.color} rounded-2xl flex items-center justify-center`}>
                <selectedEvent.icon className="w-10 h-10 text-white" />
              </div>
              <p className="text-white/80 text-lg leading-relaxed mb-4">{selectedEvent.description}</p>
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(selectedEvent.status)} bg-white/10`}>
                {selectedEvent.status}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-white/60 text-sm">Date & Time</div>
                <div className="text-white font-semibold">{formatDate(selectedEvent.date)}</div>
                <div className="text-white/80 text-sm">{selectedEvent.time}</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-white/60 text-sm">Location</div>
                <div className="text-white font-semibold">{selectedEvent.location}</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-white/60 text-sm">Instructor</div>
                <div className="text-white font-semibold">{selectedEvent.instructor}</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-white/60 text-sm">Price</div>
                <div className="text-green-400 font-semibold">{selectedEvent.price}</div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Event Features</h4>
              <div className="grid grid-cols-2 gap-2">
                {selectedEvent.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-white/80 text-sm">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-semibold">Registration Status</span>
                <span className="text-white/80">{selectedEvent.participants}/{selectedEvent.maxParticipants} registered</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full bg-gradient-to-r ${selectedEvent.color}`}
                  style={{ width: `${(selectedEvent.participants / selectedEvent.maxParticipants) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className={`flex-1 py-3 bg-gradient-to-r ${selectedEvent.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                Register for Event
              </button>
              <button onClick={() => setSelectedEvent(null)} className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}

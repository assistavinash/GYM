import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Users,
  ArrowRight,
  Star,
  MapPin,
  User,
  Filter,
  ChevronLeft,
  ChevronRight,
  Activity,
  Heart,
  Zap,
  Target,
  Flame,
  Dumbbell
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Schedule() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState('monday');
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [currentWeek, setCurrentWeek] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const daysOfWeek = [
    { key: 'monday', label: 'Monday', date: '6' },
    { key: 'tuesday', label: 'Tuesday', date: '7' },
    { key: 'wednesday', label: 'Wednesday', date: '8' },
    { key: 'thursday', label: 'Thursday', date: '9' },
    { key: 'friday', label: 'Friday', date: '10' },
    { key: 'saturday', label: 'Saturday', date: '11' },
    { key: 'sunday', label: 'Sunday', date: '12' }
  ];

  const classTypes = [
    { key: 'all', label: 'All Classes', count: 45 },
    { key: 'cardio', label: 'Cardio', count: 12 },
    { key: 'strength', label: 'Strength', count: 8 },
    { key: 'yoga', label: 'Yoga', count: 10 },
    { key: 'dance', label: 'Dance', count: 7 },
    { key: 'martial-arts', label: 'Martial Arts', count: 8 }
  ];

  const weeklySchedule = {
    monday: [
      {
        id: 1,
        name: 'Morning Yoga Flow',
        instructor: 'Kavya Reddy',
        time: '6:00 AM - 7:00 AM',
        duration: '60 min',
        capacity: 20,
        enrolled: 15,
        level: 'Beginner',
        type: 'yoga',
        room: 'Studio A',
        description: 'Start your week with a gentle yoga flow to energize your body and mind',
        color: 'from-purple-400 to-pink-500',
        icon: Heart
      },
      {
        id: 2,
        name: 'HIIT Cardio Blast',
        instructor: 'Mike Chen',
        time: '7:30 AM - 8:30 AM',
        duration: '60 min',
        capacity: 25,
        enrolled: 22,
        level: 'Intermediate',
        type: 'cardio',
        room: 'Main Floor',
        description: 'High-intensity interval training to boost your metabolism',
        color: 'from-red-400 to-orange-500',
        icon: Flame
      },
      {
        id: 3,
        name: 'Strength Training 101',
        instructor: 'Raj Sharma',
        time: '9:00 AM - 10:00 AM',
        duration: '60 min',
        capacity: 15,
        enrolled: 12,
        level: 'Beginner',
        type: 'strength',
        room: 'Weight Room',
        description: 'Learn proper form and technique for strength training',
        color: 'from-blue-400 to-cyan-500',
        icon: Dumbbell
      },
      {
        id: 4,
        name: 'Lunchtime Express',
        instructor: 'Priya Singh',
        time: '12:00 PM - 12:45 PM',
        duration: '45 min',
        capacity: 30,
        enrolled: 18,
        level: 'All Levels',
        type: 'cardio',
        room: 'Studio B',
        description: 'Quick and effective workout perfect for lunch break',
        color: 'from-green-400 to-emerald-500',
        icon: Zap
      },
      {
        id: 5,
        name: 'Evening Power Yoga',
        instructor: 'Kavya Reddy',
        time: '6:00 PM - 7:00 PM',
        duration: '60 min',
        capacity: 20,
        enrolled: 16,
        level: 'Intermediate',
        type: 'yoga',
        room: 'Studio A',
        description: 'Build strength and flexibility with dynamic yoga poses',
        color: 'from-purple-400 to-pink-500',
        icon: Heart
      },
      {
        id: 6,
        name: 'Dance Fitness Party',
        instructor: 'Sarah Johnson',
        time: '7:30 PM - 8:30 PM',
        duration: '60 min',
        capacity: 35,
        enrolled: 28,
        level: 'All Levels',
        type: 'dance',
        room: 'Studio B',
        description: 'Fun dance workout with popular music and choreography',
        color: 'from-pink-400 to-purple-500',
        icon: Activity
      }
    ],
    tuesday: [
      {
        id: 7,
        name: 'CrossFit Fundamentals',
        instructor: 'Mike Chen',
        time: '6:00 AM - 7:00 AM',
        duration: '60 min',
        capacity: 12,
        enrolled: 10,
        level: 'Beginner',
        type: 'strength',
        room: 'CrossFit Box',
        description: 'Learn the basics of CrossFit movements and techniques',
        color: 'from-orange-400 to-red-500',
        icon: Target
      },
      {
        id: 8,
        name: 'Cardio Kickboxing',
        instructor: 'David Chen',
        time: '7:30 AM - 8:30 AM',
        duration: '60 min',
        capacity: 20,
        enrolled: 17,
        level: 'Intermediate',
        type: 'martial-arts',
        room: 'Studio A',
        description: 'High-energy kickboxing workout for cardio and strength',
        color: 'from-red-400 to-rose-500',
        icon: Flame
      },
      {
        id: 9,
        name: 'Pilates Core',
        instructor: 'Sarah Johnson',
        time: '9:00 AM - 10:00 AM',
        duration: '60 min',
        capacity: 18,
        enrolled: 15,
        level: 'All Levels',
        type: 'yoga',
        room: 'Studio B',
        description: 'Focus on core strength and stability through Pilates',
        color: 'from-indigo-400 to-purple-500',
        icon: Heart
      },
      {
        id: 10,
        name: 'Strength Circuit',
        instructor: 'Raj Sharma',
        time: '6:00 PM - 7:00 PM',
        duration: '60 min',
        capacity: 16,
        enrolled: 14,
        level: 'Intermediate',
        type: 'strength',
        room: 'Weight Room',
        description: 'Circuit training for full-body strength development',
        color: 'from-blue-400 to-cyan-500',
        icon: Dumbbell
      },
      {
        id: 11,
        name: 'Zumba Fitness',
        instructor: 'Maria Garcia',
        time: '7:30 PM - 8:30 PM',
        duration: '60 min',
        capacity: 40,
        enrolled: 35,
        level: 'All Levels',
        type: 'dance',
        room: 'Main Floor',
        description: 'Latin-inspired dance fitness with infectious energy',
        color: 'from-yellow-400 to-orange-500',
        icon: Activity
      }
    ],
    wednesday: [
      {
        id: 12,
        name: 'Hatha Yoga',
        instructor: 'Kavya Reddy',
        time: '6:00 AM - 7:15 AM',
        duration: '75 min',
        capacity: 20,
        enrolled: 13,
        level: 'All Levels',
        type: 'yoga',
        room: 'Studio A',
        description: 'Traditional yoga practice focusing on alignment and breath',
        color: 'from-purple-400 to-pink-500',
        icon: Heart
      },
      {
        id: 13,
        name: 'Bootcamp Challenge',
        instructor: 'Mike Chen',
        time: '7:30 AM - 8:30 AM',
        duration: '60 min',
        capacity: 20,
        enrolled: 18,
        level: 'Advanced',
        type: 'cardio',
        room: 'Outdoor Area',
        description: 'Military-style training for ultimate fitness challenge',
        color: 'from-green-400 to-teal-500',
        icon: Target
      },
      {
        id: 14,
        name: 'Functional Training',
        instructor: 'Amit Patel',
        time: '9:00 AM - 10:00 AM',
        duration: '60 min',
        capacity: 15,
        enrolled: 11,
        level: 'Intermediate',
        type: 'strength',
        room: 'Functional Area',
        description: 'Real-world movement patterns for everyday strength',
        color: 'from-blue-400 to-purple-500',
        icon: Dumbbell
      },
      {
        id: 15,
        name: 'Aqua Fitness',
        instructor: 'Priya Singh',
        time: '6:00 PM - 7:00 PM',
        duration: '60 min',
        capacity: 25,
        enrolled: 20,
        level: 'All Levels',
        type: 'cardio',
        room: 'Swimming Pool',
        description: 'Low-impact water workout for all fitness levels',
        color: 'from-cyan-400 to-blue-500',
        icon: Activity
      }
    ],
    thursday: [
      {
        id: 16,
        name: 'TRX Suspension Training',
        instructor: 'Raj Sharma',
        time: '6:00 AM - 7:00 AM',
        duration: '60 min',
        capacity: 12,
        enrolled: 9,
        level: 'Intermediate',
        type: 'strength',
        room: 'Studio B',
        description: 'Full-body workout using suspension trainer equipment',
        color: 'from-orange-400 to-red-500',
        icon: Target
      },
      {
        id: 17,
        name: 'Spinning Class',
        instructor: 'David Chen',
        time: '7:30 AM - 8:30 AM',
        duration: '60 min',
        capacity: 30,
        enrolled: 25,
        level: 'All Levels',
        type: 'cardio',
        room: 'Spin Studio',
        description: 'High-energy indoor cycling with motivating music',
        color: 'from-yellow-400 to-orange-500',
        icon: Flame
      },
      {
        id: 18,
        name: 'Meditation & Mindfulness',
        instructor: 'Kavya Reddy',
        time: '12:00 PM - 12:30 PM',
        duration: '30 min',
        capacity: 25,
        enrolled: 12,
        level: 'All Levels',
        type: 'yoga',
        room: 'Quiet Room',
        description: 'Guided meditation for stress relief and mental clarity',
        color: 'from-indigo-400 to-purple-500',
        icon: Heart
      },
      {
        id: 19,
        name: 'Mixed Martial Arts',
        instructor: 'Tom Wilson',
        time: '7:00 PM - 8:00 PM',
        duration: '60 min',
        capacity: 16,
        enrolled: 13,
        level: 'Intermediate',
        type: 'martial-arts',
        room: 'MMA Room',
        description: 'Learn MMA techniques while getting an intense workout',
        color: 'from-red-400 to-rose-500',
        icon: Flame
      }
    ],
    friday: [
      {
        id: 20,
        name: 'Friday Flow Yoga',
        instructor: 'Kavya Reddy',
        time: '6:00 AM - 7:00 AM',
        duration: '60 min',
        capacity: 20,
        enrolled: 16,
        level: 'All Levels',
        type: 'yoga',
        room: 'Studio A',
        description: 'End your week with a flowing yoga sequence',
        color: 'from-purple-400 to-pink-500',
        icon: Heart
      },
      {
        id: 21,
        name: 'HIIT & Core',
        instructor: 'Mike Chen',
        time: '7:30 AM - 8:30 AM',
        duration: '60 min',
        capacity: 20,
        enrolled: 17,
        level: 'Intermediate',
        type: 'cardio',
        room: 'Studio B',
        description: 'Combine HIIT cardio with targeted core strengthening',
        color: 'from-green-400 to-emerald-500',
        icon: Zap
      },
      {
        id: 22,
        name: 'Olympic Lifting',
        instructor: 'Raj Sharma',
        time: '6:00 PM - 7:00 PM',
        duration: '60 min',
        capacity: 8,
        enrolled: 6,
        level: 'Advanced',
        type: 'strength',
        room: 'Olympic Platform',
        description: 'Learn Olympic weightlifting techniques safely',
        color: 'from-blue-400 to-cyan-500',
        icon: Dumbbell
      },
      {
        id: 23,
        name: 'Friday Night Dance',
        instructor: 'Sarah Johnson',
        time: '7:30 PM - 8:30 PM',
        duration: '60 min',
        capacity: 35,
        enrolled: 30,
        level: 'All Levels',
        type: 'dance',
        room: 'Main Floor',
        description: 'End your week with fun dance moves and great music',
        color: 'from-pink-400 to-purple-500',
        icon: Activity
      }
    ],
    saturday: [
      {
        id: 24,
        name: 'Weekend Warrior Bootcamp',
        instructor: 'Mike Chen',
        time: '8:00 AM - 9:30 AM',
        duration: '90 min',
        capacity: 25,
        enrolled: 22,
        level: 'All Levels',
        type: 'cardio',
        room: 'Outdoor Area',
        description: 'Intense weekend workout to start your Saturday strong',
        color: 'from-orange-400 to-red-500',
        icon: Target
      },
      {
        id: 25,
        name: 'Power Lifting Workshop',
        instructor: 'Raj Sharma',
        time: '10:00 AM - 11:30 AM',
        duration: '90 min',
        capacity: 12,
        enrolled: 8,
        level: 'Intermediate',
        type: 'strength',
        room: 'Weight Room',
        description: 'Learn powerlifting techniques: squat, bench, deadlift',
        color: 'from-blue-400 to-purple-500',
        icon: Dumbbell
      },
      {
        id: 26,
        name: 'Family Yoga',
        instructor: 'Kavya Reddy',
        time: '4:00 PM - 5:00 PM',
        duration: '60 min',
        capacity: 30,
        enrolled: 18,
        level: 'All Levels',
        type: 'yoga',
        room: 'Studio A',
        description: 'Yoga class designed for families to practice together',
        color: 'from-green-400 to-teal-500',
        icon: Heart
      }
    ],
    sunday: [
      {
        id: 27,
        name: 'Sunday Stretch & Restore',
        instructor: 'Kavya Reddy',
        time: '9:00 AM - 10:00 AM',
        duration: '60 min',
        capacity: 25,
        enrolled: 15,
        level: 'All Levels',
        type: 'yoga',
        room: 'Studio A',
        description: 'Gentle stretching and restorative poses for recovery',
        color: 'from-purple-400 to-pink-500',
        icon: Heart
      },
      {
        id: 28,
        name: 'Active Recovery',
        instructor: 'Priya Singh',
        time: '10:30 AM - 11:30 AM',
        duration: '60 min',
        capacity: 20,
        enrolled: 12,
        level: 'All Levels',
        type: 'cardio',
        room: 'Pool Area',
        description: 'Low-intensity movement for active recovery',
        color: 'from-cyan-400 to-blue-500',
        icon: Activity
      },
      {
        id: 29,
        name: 'Sunday Strength',
        instructor: 'Amit Patel',
        time: '5:00 PM - 6:00 PM',
        duration: '60 min',
        capacity: 15,
        enrolled: 11,
        level: 'Intermediate',
        type: 'strength',
        room: 'Weight Room',
        description: 'Moderate strength training to end your week',
        color: 'from-indigo-400 to-purple-500',
        icon: Dumbbell
      }
    ]
  };

  const stats = [
    {
      icon: Calendar,
      number: '45+',
      label: 'Weekly Classes',
      description: 'Diverse options'
    },
    {
      icon: Users,
      number: '15+',
      label: 'Expert Instructors',
      description: 'Certified professionals'
    },
    {
      icon: Clock,
      number: '15hrs',
      label: 'Daily Schedule',
      description: 'Flexible timings'
    },
    {
      icon: Star,
      number: '4.9',
      label: 'Class Rating',
      description: 'Member satisfaction'
    }
  ];

  const getFilteredClasses = (dayClasses) => {
    if (selectedFilter === 'all') return dayClasses;
    return dayClasses.filter(cls => cls.type === selectedFilter);
  };

  const getAvailabilityStatus = (enrolled, capacity) => {
    const percentage = (enrolled / capacity) * 100;
    if (percentage >= 90) return { status: 'Almost Full', color: 'text-red-400' };
    if (percentage >= 70) return { status: 'Filling Fast', color: 'text-yellow-400' };
    return { status: 'Available', color: 'text-green-400' };
  };

  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Particles Background */}
      <div className="fixed inset-0 z-[1] w-full h-full min-h-screen pointer-events-none">
        <Particles
          particleCount={600}
          particleSpread={22}
          speed={0.12}
          particleColors={["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"]}
          moveParticlesOnHover={true}
          particleHoverFactor={1.2}
          alphaParticles={true}
          particleBaseSize={120}
          sizeRandomness={1.5}
          cameraDistance={30}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400/20 to-green-500/20 rounded-full border border-blue-400/30 backdrop-blur-sm mb-6">
                <Calendar className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-sm text-white/80">Weekly Schedule</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Class
                <span className="block bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                  Schedule
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-8">
                Discover our comprehensive weekly schedule of group fitness classes. From energizing morning sessions 
                to relaxing evening flows, find the perfect class to fit your routine.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="group relative px-8 py-4 bg-gradient-to-r from-blue-400 to-green-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Book a Class
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <button 
                  onClick={() => setSelectedFilter('cardio')}
                  className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <Flame className="w-5 h-5 mr-2" />
                  Popular Classes
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
                  <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-blue-400 to-green-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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

        {/* Filter Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {classTypes.map((type) => (
                <button
                  key={type.key}
                  onClick={() => setSelectedFilter(type.key)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedFilter === type.key
                      ? 'bg-gradient-to-r from-blue-400 to-green-500 text-white'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  {type.label} ({type.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Days Navigation */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap justify-center mb-8 bg-white/5 rounded-2xl p-2 gap-1">
              {daysOfWeek.map((day) => (
                <button
                  key={day.key}
                  onClick={() => setSelectedDay(day.key)}
                  className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex-1 min-w-0 ${
                    selectedDay === day.key
                      ? 'bg-gradient-to-r from-blue-400 to-green-500 text-white shadow-lg'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  <div className="text-sm">{day.label}</div>
                  <div className="text-xs opacity-75">Oct {day.date}</div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Content */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {daysOfWeek.find(day => day.key === selectedDay)?.label} Classes
              </h2>
              <p className="text-white/80">
                {getFilteredClasses(weeklySchedule[selectedDay] || []).length} classes available
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredClasses(weeklySchedule[selectedDay] || []).map((classItem, index) => {
                const availability = getAvailabilityStatus(classItem.enrolled, classItem.capacity);
                return (
                  <div key={classItem.id} className="group cursor-pointer" onClick={() => setSelectedClass(classItem)}>
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${classItem.color} rounded-xl flex items-center justify-center`}>
                          <classItem.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-white font-semibold text-sm">{classItem.time}</div>
                          <div className="text-white/60 text-xs">{classItem.duration}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">{classItem.name}</h3>
                      <p className="text-white/80 text-sm mb-4">{classItem.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/60">Instructor:</span>
                          <span className="text-blue-400 font-semibold">{classItem.instructor}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/60">Level:</span>
                          <span className="text-white">{classItem.level}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/60">Room:</span>
                          <span className="text-white">{classItem.room}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-white/60">Availability:</span>
                          <span className={availability.color}>{availability.status}</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r ${classItem.color}`}
                            style={{ width: `${(classItem.enrolled / classItem.capacity) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-white/60 mt-1">
                          {classItem.enrolled}/{classItem.capacity} spots filled
                        </div>
                      </div>
                      
                      <button className={`w-full py-3 bg-gradient-to-r ${classItem.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                        Book Class
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {getFilteredClasses(weeklySchedule[selectedDay] || []).length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📅</div>
                <h3 className="text-2xl font-bold text-white mb-4">No Classes Found</h3>
                <p className="text-white/80 mb-6">
                  No classes match your current filter for {daysOfWeek.find(day => day.key === selectedDay)?.label}.
                </p>
                <button 
                  onClick={() => setSelectedFilter('all')}
                  className="px-6 py-3 bg-gradient-to-r from-blue-400 to-green-500 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300"
                >
                  Show All Classes
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-blue-400/20 to-green-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Join a Class?
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Book your spot in any of our exciting group fitness classes. New members get their first class free!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-blue-400 to-green-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  Book Your First Class
                </Link>
                <Link to="/classes" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Learn About Classes
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Class Detail Modal */}
      {selectedClass && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedClass(null)}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-2xl w-full border border-white/20 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">{selectedClass.name}</h3>
              <button onClick={() => setSelectedClass(null)} className="text-white/60 hover:text-white text-2xl">×</button>
            </div>
            
            <div className="text-center mb-6">
              <div className={`mb-4 mx-auto w-20 h-20 bg-gradient-to-r ${selectedClass.color} rounded-2xl flex items-center justify-center`}>
                <selectedClass.icon className="w-10 h-10 text-white" />
              </div>
              <p className="text-white/80 text-lg leading-relaxed">{selectedClass.description}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-white/60 text-sm">Time</div>
                <div className="text-white font-semibold">{selectedClass.time}</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-white/60 text-sm">Duration</div>
                <div className="text-white font-semibold">{selectedClass.duration}</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-white/60 text-sm">Instructor</div>
                <div className="text-white font-semibold">{selectedClass.instructor}</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-white/60 text-sm">Level</div>
                <div className="text-white font-semibold">{selectedClass.level}</div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-semibold">Availability</span>
                <span className="text-white/80">{selectedClass.enrolled}/{selectedClass.capacity} spots</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full bg-gradient-to-r ${selectedClass.color}`}
                  style={{ width: `${(selectedClass.enrolled / selectedClass.capacity) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className={`flex-1 py-3 bg-gradient-to-r ${selectedClass.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                Book This Class
              </button>
              <button onClick={() => setSelectedClass(null)} className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
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

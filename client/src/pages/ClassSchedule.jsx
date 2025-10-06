import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Users,
  ArrowRight,
  Filter,
  Download,
  Bell,
  Star,
  MapPin,
  User,
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

export default function ClassSchedule() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedClass, setSelectedClass] = useState(null);
  const [viewMode, setViewMode] = useState('weekly');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filters = [
    { key: 'all', label: 'All Classes', count: 42 },
    { key: 'beginner', label: 'Beginner', count: 15 },
    { key: 'intermediate', label: 'Intermediate', count: 18 },
    { key: 'advanced', label: 'Advanced', count: 9 }
  ];

  const weeklySchedule = {
    monday: [
      {
        id: 1,
        name: 'Morning Yoga Flow',
        time: '6:00 - 7:00 AM',
        instructor: 'Kavya Reddy',
        level: 'beginner',
        capacity: 20,
        enrolled: 15,
        room: 'Studio A',
        type: 'Yoga',
        color: 'from-purple-400 to-pink-500',
        icon: Heart
      },
      {
        id: 2,
        name: 'HIIT Cardio Blast',
        time: '7:30 - 8:30 AM',
        instructor: 'Mike Chen',
        level: 'intermediate',
        capacity: 25,
        enrolled: 22,
        room: 'Main Floor',
        type: 'Cardio',
        color: 'from-red-400 to-orange-500',
        icon: Flame
      },
      {
        id: 3,
        name: 'Strength Training 101',
        time: '9:00 - 10:00 AM',
        instructor: 'Raj Sharma',
        level: 'beginner',
        capacity: 15,
        enrolled: 12,
        room: 'Weight Room',
        type: 'Strength',
        color: 'from-blue-400 to-cyan-500',
        icon: Dumbbell
      }
    ],
    tuesday: [
      {
        id: 4,
        name: 'CrossFit Fundamentals',
        time: '6:00 - 7:00 AM',
        instructor: 'Mike Chen',
        level: 'intermediate',
        capacity: 12,
        enrolled: 10,
        room: 'CrossFit Box',
        type: 'CrossFit',
        color: 'from-orange-400 to-red-500',
        icon: Target
      },
      {
        id: 5,
        name: 'Pilates Core',
        time: '9:00 - 10:00 AM',
        instructor: 'Sarah Johnson',
        level: 'beginner',
        capacity: 18,
        enrolled: 15,
        room: 'Studio B',
        type: 'Pilates',
        color: 'from-indigo-400 to-purple-500',
        icon: Heart
      }
    ],
    wednesday: [
      {
        id: 6,
        name: 'Hatha Yoga',
        time: '6:00 - 7:15 AM',
        instructor: 'Kavya Reddy',
        level: 'beginner',
        capacity: 20,
        enrolled: 13,
        room: 'Studio A',
        type: 'Yoga',
        color: 'from-purple-400 to-pink-500',
        icon: Heart
      },
      {
        id: 7,
        name: 'Bootcamp Challenge',
        time: '7:30 - 8:30 AM',
        instructor: 'Mike Chen',
        level: 'advanced',
        capacity: 20,
        enrolled: 18,
        room: 'Outdoor Area',
        type: 'Bootcamp',
        color: 'from-green-400 to-teal-500',
        icon: Target
      }
    ],
    thursday: [
      {
        id: 8,
        name: 'TRX Suspension Training',
        time: '6:00 - 7:00 AM',
        instructor: 'Raj Sharma',
        level: 'intermediate',
        capacity: 12,
        enrolled: 9,
        room: 'Studio B',
        type: 'Functional',
        color: 'from-orange-400 to-red-500',
        icon: Target
      },
      {
        id: 9,
        name: 'Spinning Class',
        time: '7:30 - 8:30 AM',
        instructor: 'David Chen',
        level: 'intermediate',
        capacity: 30,
        enrolled: 25,
        room: 'Spin Studio',
        type: 'Cardio',
        color: 'from-yellow-400 to-orange-500',
        icon: Flame
      }
    ],
    friday: [
      {
        id: 10,
        name: 'Friday Flow Yoga',
        time: '6:00 - 7:00 AM',
        instructor: 'Kavya Reddy',
        level: 'beginner',
        capacity: 20,
        enrolled: 16,
        room: 'Studio A',
        type: 'Yoga',
        color: 'from-purple-400 to-pink-500',
        icon: Heart
      },
      {
        id: 11,
        name: 'Olympic Lifting',
        time: '6:00 - 7:00 PM',
        instructor: 'Raj Sharma',
        level: 'advanced',
        capacity: 8,
        enrolled: 6,
        room: 'Olympic Platform',
        type: 'Strength',
        color: 'from-blue-400 to-cyan-500',
        icon: Dumbbell
      }
    ],
    saturday: [
      {
        id: 12,
        name: 'Weekend Warrior Bootcamp',
        time: '8:00 - 9:30 AM',
        instructor: 'Mike Chen',
        level: 'intermediate',
        capacity: 25,
        enrolled: 22,
        room: 'Main Floor',
        type: 'Bootcamp',
        color: 'from-orange-400 to-red-500',
        icon: Target
      },
      {
        id: 13,
        name: 'Family Yoga',
        time: '4:00 - 5:00 PM',
        instructor: 'Kavya Reddy',
        level: 'beginner',
        capacity: 30,
        enrolled: 18,
        room: 'Studio A',
        type: 'Yoga',
        color: 'from-green-400 to-teal-500',
        icon: Heart
      }
    ],
    sunday: [
      {
        id: 14,
        name: 'Sunday Stretch & Restore',
        time: '9:00 - 10:00 AM',
        instructor: 'Kavya Reddy',
        level: 'beginner',
        capacity: 25,
        enrolled: 15,
        room: 'Studio A',
        type: 'Recovery',
        color: 'from-purple-400 to-pink-500',
        icon: Heart
      },
      {
        id: 15,
        name: 'Active Recovery',
        time: '10:30 - 11:30 AM',
        instructor: 'Priya Singh',
        level: 'beginner',
        capacity: 20,
        enrolled: 12,
        room: 'Pool Area',
        type: 'Recovery',
        color: 'from-cyan-400 to-blue-500',
        icon: Activity
      }
    ]
  };

  const stats = [
    {
      icon: Calendar,
      number: '42+',
      label: 'Weekly Classes',
      description: 'Different sessions'
    },
    {
      icon: Users,
      number: '300+',
      label: 'Class Members',
      description: 'Active participants'
    },
    {
      icon: Clock,
      number: '15hrs',
      label: 'Daily Classes',
      description: 'Morning to evening'
    },
    {
      icon: Star,
      number: '4.9',
      label: 'Class Rating',
      description: 'Member satisfaction'
    }
  ];

  const daysOfWeek = [
    { key: 'monday', label: 'Mon', date: '6' },
    { key: 'tuesday', label: 'Tue', date: '7' },
    { key: 'wednesday', label: 'Wed', date: '8' },
    { key: 'thursday', label: 'Thu', date: '9' },
    { key: 'friday', label: 'Fri', date: '10' },
    { key: 'saturday', label: 'Sat', date: '11' },
    { key: 'sunday', label: 'Sun', date: '12' }
  ];

  const getFilteredClasses = () => {
    let allClasses = [];
    Object.values(weeklySchedule).forEach(dayClasses => {
      allClasses = [...allClasses, ...dayClasses];
    });
    
    if (selectedFilter === 'all') return allClasses;
    return allClasses.filter(cls => cls.level === selectedFilter);
  };

  const getClassesByDay = (day) => {
    const dayClasses = weeklySchedule[day] || [];
    if (selectedFilter === 'all') return dayClasses;
    return dayClasses.filter(cls => cls.level === selectedFilter);
  };

  const getAvailabilityStatus = (enrolled, capacity) => {
    const percentage = (enrolled / capacity) * 100;
    if (percentage >= 90) return { status: 'Almost Full', color: 'text-red-400' };
    if (percentage >= 70) return { status: 'Filling Fast', color: 'text-yellow-400' };
    return { status: 'Available', color: 'text-green-400' };
  };

  const exportSchedule = () => {
    // In a real app, this would generate and download a PDF or iCal file
    alert('Schedule export feature coming soon! You can bookmark this page for now.');
  };

  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Particles Background */}
      <div className="fixed inset-0 z-[1] w-full h-full min-h-screen pointer-events-none">
        <Particles
          particleCount={600}
          particleSpread={20}
          speed={0.1}
          particleColors={["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"]}
          moveParticlesOnHover={true}
          particleHoverFactor={1.1}
          alphaParticles={true}
          particleBaseSize={125}
          sizeRandomness={1.4}
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
                <span className="text-sm text-white/80">Weekly Timetable</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Class
                <span className="block bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                  Schedule
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-8">
                Your complete weekly guide to all group fitness classes. From energizing morning sessions 
                to relaxing evening flows, plan your perfect workout week with our detailed schedule.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="group relative px-8 py-4 bg-gradient-to-r from-blue-400 to-green-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Join Classes
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <button 
                  onClick={exportSchedule}
                  className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Export Schedule
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

        {/* Filter and View Controls */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-8">
              {/* Level Filter */}
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setSelectedFilter(filter.key)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedFilter === filter.key
                        ? 'bg-gradient-to-r from-blue-400 to-green-500 text-white'
                        : 'bg-white/10 text-white/80 hover:bg-white/20'
                    }`}
                  >
                    {filter.label} ({filter.count})
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="bg-white/5 rounded-xl p-1 flex">
                <button
                  onClick={() => setViewMode('weekly')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    viewMode === 'weekly' ? 'bg-blue-500 text-white' : 'text-white/80'
                  }`}
                >
                  Weekly View
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-white/80'
                  }`}
                >
                  List View
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Weekly Schedule View */}
        {viewMode === 'weekly' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Weekly Schedule</h2>
                <p className="text-white/80">October 6-12, 2025</p>
              </div>

              <div className="grid lg:grid-cols-7 gap-4">
                {daysOfWeek.map((day) => (
                  <div key={day.key} className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10">
                    <div className="text-center mb-4">
                      <div className="text-white font-bold text-lg">{day.label}</div>
                      <div className="text-blue-400 text-sm">Oct {day.date}</div>
                    </div>
                    
                    <div className="space-y-3">
                      {getClassesByDay(day.key).map((classItem) => (
                        <div 
                          key={classItem.id} 
                          className="cursor-pointer group"
                          onClick={() => setSelectedClass(classItem)}
                        >
                          <div className="bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                            <div className={`w-8 h-8 bg-gradient-to-r ${classItem.color} rounded-lg flex items-center justify-center mb-2`}>
                              <classItem.icon className="w-4 h-4 text-white" />
                            </div>
                            
                            <div className="text-white font-semibold text-sm mb-1">{classItem.name}</div>
                            <div className="text-blue-400 text-xs mb-1">{classItem.time}</div>
                            <div className="text-white/60 text-xs mb-2">{classItem.instructor}</div>
                            
                            <div className="flex items-center justify-between text-xs">
                              <span className={`px-2 py-1 rounded-full ${
                                classItem.level === 'beginner' ? 'bg-green-400/20 text-green-400' :
                                classItem.level === 'intermediate' ? 'bg-yellow-400/20 text-yellow-400' :
                                'bg-red-400/20 text-red-400'
                              }`}>
                                {classItem.level}
                              </span>
                              <span className="text-white/60">{classItem.enrolled}/{classItem.capacity}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {getClassesByDay(day.key).length === 0 && (
                        <div className="text-center py-8 text-white/60 text-sm">
                          No classes this day
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">All Classes</h2>
                <p className="text-white/80">
                  {getFilteredClasses().length} classes available this week
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getFilteredClasses().map((classItem) => {
                  const availability = getAvailabilityStatus(classItem.enrolled, classItem.capacity);
                  return (
                    <div 
                      key={classItem.id} 
                      className="group cursor-pointer"
                      onClick={() => setSelectedClass(classItem)}
                    >
                      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${classItem.color} rounded-xl flex items-center justify-center`}>
                            <classItem.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-right">
                            <div className="text-white font-semibold text-sm">{classItem.time}</div>
                            <div className="text-white/60 text-xs">{classItem.type}</div>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-2">{classItem.name}</h3>
                        <p className="text-blue-400 text-sm mb-3">{classItem.instructor}</p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-white/60">Level:</span>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              classItem.level === 'beginner' ? 'bg-green-400/20 text-green-400' :
                              classItem.level === 'intermediate' ? 'bg-yellow-400/20 text-yellow-400' :
                              'bg-red-400/20 text-red-400'
                            }`}>
                              {classItem.level}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-white/60">Room:</span>
                            <span className="text-white">{classItem.room}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-white/60">Availability:</span>
                            <span className={availability.color}>{availability.status}</span>
                          </div>
                        </div>
                        
                        <div className="mb-4">
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
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-blue-400/20 to-green-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Join Our Classes?
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Choose from over 40 weekly group fitness classes designed for all fitness levels. 
                Your first class is always free!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-blue-400 to-green-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  Start Free Trial
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
              <div className="text-blue-400 text-lg font-semibold mb-2">{selectedClass.type} Class</div>
              <div className="text-white/80">{selectedClass.time}</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-white/60 text-sm">Instructor</div>
                <div className="text-white font-semibold">{selectedClass.instructor}</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-white/60 text-sm">Level</div>
                <div className={`font-semibold ${
                  selectedClass.level === 'beginner' ? 'text-green-400' :
                  selectedClass.level === 'intermediate' ? 'text-yellow-400' :
                  'text-red-400'
                }`}>
                  {selectedClass.level}
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-white/60 text-sm">Room</div>
                <div className="text-white font-semibold">{selectedClass.room}</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-white/60 text-sm">Capacity</div>
                <div className="text-white font-semibold">{selectedClass.enrolled}/{selectedClass.capacity}</div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-semibold">Class Availability</span>
                <span className="text-white/80">{selectedClass.capacity - selectedClass.enrolled} spots left</span>
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

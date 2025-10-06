import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Users, 
  Star,
  MapPin,
  Filter,
  Search,
  ArrowRight,
  User,
  Award,
  Heart,
  Dumbbell,
  Activity
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Classes() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Classes', icon: Activity },
    { id: 'strength', name: 'Strength', icon: Dumbbell },
    { id: 'cardio', name: 'Cardio', icon: Heart },
    { id: 'yoga', name: 'Yoga', icon: User },
    { id: 'hiit', name: 'HIIT', icon: Activity },
    { id: 'dance', name: 'Dance', icon: Star }
  ];

  const classes = [
    {
      id: 1,
      name: 'Power Yoga Flow',
      category: 'yoga',
      instructor: 'Sarah Chen',
      duration: '60 min',
      difficulty: 'Intermediate',
      capacity: 20,
      enrolled: 15,
      time: '7:00 AM',
      days: ['Mon', 'Wed', 'Fri'],
      description: 'Dynamic yoga flow combining strength, flexibility, and mindfulness',
      benefits: ['Improves flexibility', 'Builds core strength', 'Reduces stress'],
      image: '🧘‍♀️',
      color: 'from-purple-400 to-pink-500',
      rating: 4.9
    },
    {
      id: 2,
      name: 'HIIT Blast',
      category: 'hiit',
      instructor: 'Mike Johnson',
      duration: '45 min',
      difficulty: 'Advanced',
      capacity: 15,
      enrolled: 12,
      time: '6:00 PM',
      days: ['Tue', 'Thu'],
      description: 'High-intensity interval training for maximum calorie burn',
      benefits: ['Burns fat fast', 'Builds endurance', 'Time efficient'],
      image: '🔥',
      color: 'from-red-400 to-orange-500',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Strength & Conditioning',
      category: 'strength',
      instructor: 'David Martinez',
      duration: '50 min',
      difficulty: 'Intermediate',
      capacity: 12,
      enrolled: 10,
      time: '8:00 AM',
      days: ['Mon', 'Wed', 'Fri'],
      description: 'Build muscle strength and improve overall conditioning',
      benefits: ['Increases muscle mass', 'Improves bone density', 'Boosts metabolism'],
      image: '💪',
      color: 'from-blue-400 to-cyan-500',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Zumba Fitness',
      category: 'dance',
      instructor: 'Maria Rodriguez',
      duration: '55 min',
      difficulty: 'Beginner',
      capacity: 25,
      enrolled: 20,
      time: '7:30 PM',
      days: ['Mon', 'Wed', 'Sat'],
      description: 'Fun dance workout that feels more like a party than exercise',
      benefits: ['Improves coordination', 'Burns calories', 'Boosts mood'],
      image: '💃',
      color: 'from-green-400 to-emerald-500',
      rating: 4.9
    },
    {
      id: 5,
      name: 'Spin Cycle',
      category: 'cardio',
      instructor: 'Alex Thompson',
      duration: '45 min',
      difficulty: 'Intermediate',
      capacity: 20,
      enrolled: 18,
      time: '6:30 AM',
      days: ['Tue', 'Thu', 'Sat'],
      description: 'High-energy cycling workout with motivating music',
      benefits: ['Cardiovascular health', 'Leg strength', 'Low impact'],
      image: '🚴‍♂️',
      color: 'from-yellow-400 to-amber-500',
      rating: 4.8
    },
    {
      id: 6,
      name: 'Pilates Core',
      category: 'yoga',
      instructor: 'Emma Wilson',
      duration: '50 min',
      difficulty: 'Beginner',
      capacity: 15,
      enrolled: 12,
      time: '9:00 AM',
      days: ['Mon', 'Wed', 'Fri'],
      description: 'Focus on core strength, stability, and flexibility',
      benefits: ['Core stability', 'Better posture', 'Injury prevention'],
      image: '🤸‍♀️',
      color: 'from-teal-400 to-blue-500',
      rating: 4.6
    },
    {
      id: 7,
      name: 'Boxing Bootcamp',
      category: 'hiit',
      instructor: 'Ryan Foster',
      duration: '60 min',
      difficulty: 'Advanced',
      capacity: 12,
      enrolled: 10,
      time: '7:00 PM',
      days: ['Tue', 'Thu'],
      description: 'Boxing-inspired workout combining cardio and strength',
      benefits: ['Full body workout', 'Stress relief', 'Builds confidence'],
      image: '🥊',
      color: 'from-red-500 to-pink-500',
      rating: 4.9
    },
    {
      id: 8,
      name: 'Aqua Fitness',
      category: 'cardio',
      instructor: 'Lisa Park',
      duration: '45 min',
      difficulty: 'Beginner',
      capacity: 15,
      enrolled: 8,
      time: '10:00 AM',
      days: ['Mon', 'Wed', 'Fri'],
      description: 'Low-impact water-based exercise for all fitness levels',
      benefits: ['Joint friendly', 'Full body workout', 'Therapeutic'],
      image: '🏊‍♀️',
      color: 'from-cyan-400 to-blue-500',
      rating: 4.5
    }
  ];

  const filteredClasses = classes.filter(cls => {
    const matchesCategory = selectedCategory === 'all' || cls.category === selectedCategory;
    const matchesSearch = cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cls.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Advanced': return 'text-red-400 bg-red-400/20';
      default: return 'text-white bg-white/20';
    }
  };

  const stats = [
    {
      icon: Users,
      number: '50+',
      label: 'Classes Weekly',
      description: 'Diverse options'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Expert Trainers',
      description: 'Certified professionals'
    },
    {
      icon: Clock,
      number: '6AM-10PM',
      label: 'Class Hours',
      description: 'Flexible timing'
    },
    {
      icon: Star,
      number: '4.8',
      label: 'Average Rating',
      description: 'Member satisfaction'
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Particles Background */}
      <div className="fixed inset-0 z-[1] w-full h-full min-h-screen pointer-events-none">
        <Particles
          particleCount={800}
          particleSpread={15}
          speed={0.1}
          particleColors={["#FACC15", "#8B5CF6", "#3B82F6", "#10B981", "#F59E0B"]}
          moveParticlesOnHover={true}
          particleHoverFactor={1.5}
          alphaParticles={true}
          particleBaseSize={150}
          sizeRandomness={1.2}
          cameraDistance={25}
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
                <span className="text-sm text-white/80">Group Fitness Classes</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Fitness
                <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Classes
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
                Join our diverse range of group fitness classes led by certified instructors. 
                From high-energy workouts to mindful yoga sessions, find your perfect class.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="group relative px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-purple-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Book a Class
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link to="/schedule" className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <Calendar className="w-5 h-5 mr-2" />
                  View Schedule
                </Link>
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

        {/* Filter and Search Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 mb-8">
              <div className="flex flex-wrap gap-4 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 min-w-[300px]">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search classes or instructors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-purple-400 transition-colors"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-purple-400 to-pink-500 text-white'
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      <category.icon className="w-4 h-4 mr-2" />
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Classes Grid */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredClasses.map((cls, index) => (
                <div key={cls.id} className="group cursor-pointer" onClick={() => setSelectedClass(cls)}>
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{cls.image}</div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-white text-sm">{cls.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{cls.name}</h3>
                    <p className="text-white/80 mb-4 text-sm">{cls.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(cls.difficulty)}`}>
                        {cls.difficulty}
                      </div>
                      <div className="text-white/60 text-sm">
                        {cls.enrolled}/{cls.capacity} enrolled
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-white/80 text-sm">
                        <User className="w-4 h-4 mr-2" />
                        Instructor: {cls.instructor}
                      </div>
                      <div className="flex items-center text-white/80 text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        {cls.duration} • {cls.time}
                      </div>
                      <div className="flex items-center text-white/80 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {cls.days.join(', ')}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Link to="/register" className="flex-1 py-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg font-semibold text-white text-sm hover:shadow-lg transition-all duration-300 text-center">
                        Book Now
                      </Link>
                      <button className="px-4 py-2 border border-white/20 rounded-lg text-white text-sm hover:bg-white/10 transition-all duration-300">
                        Info
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredClasses.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No Classes Found</h3>
                <p className="text-white/80">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-purple-400/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Join Our Community?
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Experience the energy and motivation of group fitness. Book your first class today and discover your new favorite workout.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-purple-400/25 transition-all duration-300 hover:scale-105">
                  Get Started
                </Link>
                <Link to="/contact" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Ask Questions
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
              <h3 className="text-3xl font-bold text-white">{selectedClass.name}</h3>
              <button onClick={() => setSelectedClass(null)} className="text-white/60 hover:text-white text-2xl">×</button>
            </div>
            
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{selectedClass.image}</div>
              <p className="text-white/80 text-lg">{selectedClass.description}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-xl font-bold text-white">{selectedClass.instructor}</div>
                <div className="text-white/60">Instructor</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-xl font-bold text-white">{selectedClass.duration}</div>
                <div className="text-white/60">Duration</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-xl font-bold text-white">{selectedClass.time}</div>
                <div className="text-white/60">Time</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-xl font-bold text-white">{selectedClass.days.join(', ')}</div>
                <div className="text-white/60">Days</div>
              </div>
            </div>
            
            <div className="space-y-3 mb-8">
              <h4 className="text-xl font-semibold text-white">Benefits:</h4>
              {selectedClass.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center text-white/80">
                  <div className={`w-3 h-3 bg-gradient-to-r ${selectedClass.color} rounded-full mr-3`}></div>
                  {benefit}
                </div>
              ))}
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white">Class Availability</span>
                <span className="text-white">{selectedClass.enrolled}/{selectedClass.capacity}</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className={`h-2 bg-gradient-to-r ${selectedClass.color} rounded-full`}
                  style={{ width: `${(selectedClass.enrolled / selectedClass.capacity) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="flex-1 py-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300">
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

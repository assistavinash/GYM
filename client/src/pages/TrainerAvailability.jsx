import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User,
  Users,
  ArrowRight,
  Star,
  MapPin,
  Phone,
  CheckCircle,
  XCircle,
  Filter,
  Search,
  ChevronLeft,
  ChevronRight,
  Award,
  Heart,
  Zap,
  Target,
  Dumbbell,
  Activity
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function TrainerAvailability() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [currentWeek, setCurrentWeek] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const specialties = [
    { key: 'all', label: 'All Trainers', count: 15 },
    { key: 'strength', label: 'Strength Training', count: 5 },
    { key: 'cardio', label: 'Cardio & HIIT', count: 4 },
    { key: 'yoga', label: 'Yoga & Flexibility', count: 3 },
    { key: 'nutrition', label: 'Nutrition', count: 2 },
    { key: 'rehabilitation', label: 'Rehabilitation', count: 1 }
  ];

  const trainers = [
    {
      id: 1,
      name: 'Raj Sharma',
      specialty: 'strength',
      specialties: ['Strength Training', 'Powerlifting', 'Bodybuilding'],
      experience: '8 years',
      rating: 4.9,
      reviews: 156,
      image: '/images/trainers/raj-sharma.jpg',
      bio: 'Certified strength and conditioning coach with expertise in powerlifting and bodybuilding',
      certifications: ['ACSM-CPT', 'NSCA-CSCS', 'Powerlifting Coach'],
      hourlyRate: '₹1500',
      availability: {
        '2025-10-05': [
          { time: '6:00 AM', available: true, booked: false },
          { time: '7:00 AM', available: true, booked: false },
          { time: '8:00 AM', available: false, booked: true },
          { time: '5:00 PM', available: true, booked: false },
          { time: '6:00 PM', available: true, booked: false },
          { time: '7:00 PM', available: false, booked: true }
        ],
        '2025-10-06': [
          { time: '6:00 AM', available: true, booked: false },
          { time: '7:00 AM', available: false, booked: true },
          { time: '8:00 AM', available: true, booked: false },
          { time: '5:00 PM', available: true, booked: false },
          { time: '6:00 PM', available: true, booked: false }
        ]
      },
      color: 'from-blue-400 to-cyan-500',
      icon: Dumbbell
    },
    {
      id: 2,
      name: 'Kavya Reddy',
      specialty: 'yoga',
      specialties: ['Hatha Yoga', 'Vinyasa Flow', 'Meditation'],
      experience: '6 years',
      rating: 4.8,
      reviews: 203,
      image: '/images/trainers/kavya-reddy.jpg',
      bio: 'Certified yoga instructor specializing in traditional and modern yoga practices',
      certifications: ['RYT-500', 'Meditation Teacher', 'Pranayama Specialist'],
      hourlyRate: '₹1200',
      availability: {
        '2025-10-05': [
          { time: '6:00 AM', available: true, booked: false },
          { time: '7:00 AM', available: true, booked: false },
          { time: '8:00 AM', available: true, booked: false },
          { time: '5:00 PM', available: false, booked: true },
          { time: '6:00 PM', available: true, booked: false },
          { time: '7:00 PM', available: true, booked: false }
        ],
        '2025-10-06': [
          { time: '6:00 AM', available: true, booked: false },
          { time: '7:00 AM', available: true, booked: false },
          { time: '8:00 AM', available: false, booked: true },
          { time: '5:00 PM', available: true, booked: false }
        ]
      },
      color: 'from-purple-400 to-pink-500',
      icon: Heart
    },
    {
      id: 3,
      name: 'Mike Chen',
      specialty: 'cardio',
      specialties: ['HIIT Training', 'CrossFit', 'Functional Fitness'],
      experience: '10 years',
      rating: 4.9,
      reviews: 189,
      image: '/images/trainers/mike-chen.jpg',
      bio: 'High-intensity training specialist with CrossFit Level 2 certification',
      certifications: ['CrossFit L-2', 'HIIT Specialist', 'Functional Movement'],
      hourlyRate: '₹1600',
      availability: {
        '2025-10-05': [
          { time: '6:00 AM', available: true, booked: false },
          { time: '7:00 AM', available: false, booked: true },
          { time: '8:00 AM', available: true, booked: false },
          { time: '9:00 AM', available: true, booked: false },
          { time: '5:00 PM', available: true, booked: false },
          { time: '6:00 PM', available: false, booked: true }
        ],
        '2025-10-06': [
          { time: '6:00 AM', available: false, booked: true },
          { time: '7:00 AM', available: true, booked: false },
          { time: '8:00 AM', available: true, booked: false },
          { time: '5:00 PM', available: true, booked: false },
          { time: '6:00 PM', available: true, booked: false }
        ]
      },
      color: 'from-orange-400 to-red-500',
      icon: Zap
    },
    {
      id: 4,
      name: 'Dr. Priya Singh',
      specialty: 'nutrition',
      specialties: ['Nutrition Counseling', 'Weight Management', 'Sports Nutrition'],
      experience: '12 years',
      rating: 4.7,
      reviews: 134,
      image: '/images/trainers/priya-singh.jpg',
      bio: 'Registered dietitian and sports nutrition specialist',
      certifications: ['RD', 'Sports Nutritionist', 'Weight Management Specialist'],
      hourlyRate: '₹2000',
      availability: {
        '2025-10-05': [
          { time: '9:00 AM', available: true, booked: false },
          { time: '10:00 AM', available: true, booked: false },
          { time: '11:00 AM', available: false, booked: true },
          { time: '2:00 PM', available: true, booked: false },
          { time: '3:00 PM', available: true, booked: false },
          { time: '4:00 PM', available: false, booked: true }
        ],
        '2025-10-06': [
          { time: '9:00 AM', available: true, booked: false },
          { time: '10:00 AM', available: false, booked: true },
          { time: '11:00 AM', available: true, booked: false },
          { time: '2:00 PM', available: true, booked: false }
        ]
      },
      color: 'from-green-400 to-emerald-500',
      icon: Activity
    },
    {
      id: 5,
      name: 'Sarah Johnson',
      specialty: 'cardio',
      specialties: ['Dance Fitness', 'Zumba', 'Aerobics'],
      experience: '5 years',
      rating: 4.8,
      reviews: 167,
      image: '/images/trainers/sarah-johnson.jpg',
      bio: 'Dance fitness instructor bringing fun and energy to every workout',
      certifications: ['Zumba Instructor', 'Dance Fitness', 'Group Exercise'],
      hourlyRate: '₹1300',
      availability: {
        '2025-10-05': [
          { time: '6:00 AM', available: true, booked: false },
          { time: '7:00 AM', available: true, booked: false },
          { time: '6:00 PM', available: false, booked: true },
          { time: '7:00 PM', available: true, booked: false },
          { time: '8:00 PM', available: true, booked: false }
        ],
        '2025-10-06': [
          { time: '6:00 AM', available: true, booked: false },
          { time: '7:00 AM', available: false, booked: true },
          { time: '6:00 PM', available: true, booked: false },
          { time: '7:00 PM', available: true, booked: false }
        ]
      },
      color: 'from-pink-400 to-purple-500',
      icon: Activity
    },
    {
      id: 6,
      name: 'Dr. Amit Patel',
      specialty: 'rehabilitation',
      specialties: ['Physical Therapy', 'Injury Recovery', 'Corrective Exercise'],
      experience: '15 years',
      rating: 4.9,
      reviews: 98,
      image: '/images/trainers/amit-patel.jpg',
      bio: 'Licensed physical therapist specializing in sports injury rehabilitation',
      certifications: ['DPT', 'Sports Physical Therapy', 'Corrective Exercise Specialist'],
      hourlyRate: '₹2500',
      availability: {
        '2025-10-05': [
          { time: '9:00 AM', available: true, booked: false },
          { time: '10:00 AM', available: false, booked: true },
          { time: '11:00 AM', available: true, booked: false },
          { time: '2:00 PM', available: true, booked: false },
          { time: '3:00 PM', available: false, booked: true }
        ],
        '2025-10-06': [
          { time: '9:00 AM', available: true, booked: false },
          { time: '10:00 AM', available: true, booked: false },
          { time: '11:00 AM', available: false, booked: true },
          { time: '2:00 PM', available: true, booked: false }
        ]
      },
      color: 'from-teal-400 to-green-500',
      icon: Target
    }
  ];

  const stats = [
    {
      icon: Users,
      number: '15+',
      label: 'Expert Trainers',
      description: 'Certified professionals'
    },
    {
      icon: Calendar,
      number: '200+',
      label: 'Weekly Slots',
      description: 'Available sessions'
    },
    {
      icon: Star,
      number: '4.8',
      label: 'Average Rating',
      description: 'Client satisfaction'
    },
    {
      icon: Award,
      number: '100%',
      label: 'Certified',
      description: 'All trainers'
    }
  ];

  const getFilteredTrainers = () => {
    let filtered = trainers;
    
    if (selectedSpecialty !== 'all') {
      filtered = filtered.filter(trainer => trainer.specialty === selectedSpecialty);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(trainer => 
        trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trainer.specialties.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    return filtered;
  };

  const getAvailableSlots = (trainer, date) => {
    const availability = trainer.availability[date] || [];
    return availability.filter(slot => slot.available && !slot.booked);
  };

  const getBookedSlots = (trainer, date) => {
    const availability = trainer.availability[date] || [];
    return availability.filter(slot => slot.booked);
  };

  const getTotalSlots = (trainer, date) => {
    return trainer.availability[date]?.length || 0;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric'
    });
  };

  const getNextWeekDates = () => {
    const dates = [];
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() + (currentWeek * 7));
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    
    return dates;
  };

  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Particles Background */}
      <div className="fixed inset-0 z-[1] w-full h-full min-h-screen pointer-events-none">
        <Particles
          particleCount={600}
          particleSpread={28}
          speed={0.15}
          particleColors={["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"]}
          moveParticlesOnHover={true}
          particleHoverFactor={1.1}
          alphaParticles={true}
          particleBaseSize={110}
          sizeRandomness={1.3}
          cameraDistance={40}
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
                <span className="text-sm text-white/80">Trainer Booking</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Trainer
                <span className="block bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                  Availability
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-8">
                Book sessions with our certified personal trainers. Choose from strength training, cardio, 
                yoga, nutrition counseling, and rehabilitation specialists.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="group relative px-8 py-4 bg-gradient-to-r from-blue-400 to-green-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Book Session
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <button 
                  onClick={() => setSelectedSpecialty('strength')}
                  className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <Dumbbell className="w-5 h-5 mr-2" />
                  Strength Trainers
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

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              {/* Search Bar */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search trainers by name or specialty..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-blue-400 focus:outline-none backdrop-blur-sm"
                  />
                </div>
              </div>
              
              {/* Date Selector */}
              <div className="lg:w-64">
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-blue-400 focus:outline-none backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Specialty Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {specialties.map((specialty) => (
                <button
                  key={specialty.key}
                  onClick={() => setSelectedSpecialty(specialty.key)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedSpecialty === specialty.key
                      ? 'bg-gradient-to-r from-blue-400 to-green-500 text-white'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  {specialty.label} ({specialty.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Trainers Grid */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Available Trainers</h2>
              <p className="text-white/80">
                {getFilteredTrainers().length} trainers available for {formatDate(selectedDate)}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredTrainers().map((trainer, index) => {
                const availableSlots = getAvailableSlots(trainer, selectedDate);
                const totalSlots = getTotalSlots(trainer, selectedDate);
                
                return (
                  <div key={trainer.id} className="group cursor-pointer" onClick={() => setSelectedTrainer(trainer)}>
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${trainer.color} rounded-xl flex items-center justify-center`}>
                          <trainer.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-yellow-400">
                            <Star className="w-4 h-4 mr-1 fill-current" />
                            <span className="font-semibold">{trainer.rating}</span>
                          </div>
                          <div className="text-white/60 text-xs">{trainer.reviews} reviews</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">{trainer.name}</h3>
                      <p className="text-blue-400 font-semibold mb-2">{trainer.specialties.join(', ')}</p>
                      <p className="text-white/80 text-sm mb-4">{trainer.bio}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/60">Experience:</span>
                          <span className="text-white font-semibold">{trainer.experience}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/60">Rate:</span>
                          <span className="text-green-400 font-semibold">{trainer.hourlyRate}/hour</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/60">Available Slots:</span>
                          <span className="text-white">{availableSlots.length}/{totalSlots}</span>
                        </div>
                      </div>
                      
                      {/* Available Time Slots */}
                      <div className="mb-4">
                        <div className="text-white/60 text-sm mb-2">Today's Availability:</div>
                        <div className="flex flex-wrap gap-1">
                          {availableSlots.slice(0, 4).map((slot, slotIndex) => (
                            <span key={slotIndex} className="px-2 py-1 bg-green-400/20 text-green-400 rounded-md text-xs">
                              {slot.time}
                            </span>
                          ))}
                          {availableSlots.length > 4 && (
                            <span className="px-2 py-1 bg-white/10 text-white/60 rounded-md text-xs">
                              +{availableSlots.length - 4} more
                            </span>
                          )}
                          {availableSlots.length === 0 && (
                            <span className="px-2 py-1 bg-red-400/20 text-red-400 rounded-md text-xs">
                              No slots available
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {availableSlots.length > 0 ? (
                        <Link to="/register" className={`block w-full py-3 bg-gradient-to-r ${trainer.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300 text-center`}>
                          Book Session
                        </Link>
                      ) : (
                        <button className={`w-full py-3 bg-gradient-to-r ${trainer.color} rounded-xl font-semibold text-white opacity-50 cursor-not-allowed`}>
                          Fully Booked
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {getFilteredTrainers().length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">👨‍💼</div>
                <h3 className="text-2xl font-bold text-white mb-4">No Trainers Found</h3>
                <p className="text-white/80 mb-6">
                  No trainers match your current search and filter criteria.
                </p>
                <button 
                  onClick={() => {
                    setSelectedSpecialty('all');
                    setSearchTerm('');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-400 to-green-500 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300"
                >
                  Show All Trainers
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
                Ready to Start Training?
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Book a session with one of our certified trainers and take your fitness journey to the next level. 
                First session includes a complimentary fitness assessment.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-blue-400 to-green-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  Book First Session
                </Link>
                <Link to="/trainers" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Meet Our Trainers
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Trainer Detail Modal */}
      {selectedTrainer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedTrainer(null)}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-2xl w-full border border-white/20 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">{selectedTrainer.name}</h3>
              <button onClick={() => setSelectedTrainer(null)} className="text-white/60 hover:text-white text-2xl">×</button>
            </div>
            
            <div className="text-center mb-6">
              <div className={`mb-4 mx-auto w-20 h-20 bg-gradient-to-r ${selectedTrainer.color} rounded-2xl flex items-center justify-center`}>
                <selectedTrainer.icon className="w-10 h-10 text-white" />
              </div>
              <p className="text-white/80 text-lg leading-relaxed mb-4">{selectedTrainer.bio}</p>
              <div className="flex items-center justify-center text-yellow-400 mb-2">
                <Star className="w-5 h-5 mr-1 fill-current" />
                <span className="font-semibold text-lg">{selectedTrainer.rating}</span>
                <span className="text-white/60 ml-2">({selectedTrainer.reviews} reviews)</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-white/60 text-sm">Experience</div>
                <div className="text-white font-semibold">{selectedTrainer.experience}</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-white/60 text-sm">Hourly Rate</div>
                <div className="text-green-400 font-semibold">{selectedTrainer.hourlyRate}</div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Specialties</h4>
              <div className="flex flex-wrap gap-2">
                {selectedTrainer.specialties.map((specialty, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Certifications</h4>
              <div className="space-y-2">
                {selectedTrainer.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center text-white/80 text-sm">
                    <Award className="w-4 h-4 text-yellow-400 mr-2" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Available Times for {formatDate(selectedDate)}</h4>
              <div className="grid grid-cols-3 gap-2 max-h-32 overflow-y-auto">
                {getAvailableSlots(selectedTrainer, selectedDate).map((slot, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTimeSlot(slot)}
                    className={`p-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedTimeSlot?.time === slot.time
                        ? 'bg-green-400 text-white'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
              
              {getAvailableSlots(selectedTrainer, selectedDate).length === 0 && (
                <div className="text-center py-8 text-white/60">
                  No available slots for this date
                </div>
              )}
            </div>
            
            <div className="flex gap-4">
              <button 
                className={`flex-1 py-3 bg-gradient-to-r ${selectedTrainer.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300 ${
                  !selectedTimeSlot ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={!selectedTimeSlot}
              >
                Book {selectedTimeSlot?.time || 'Session'}
              </button>
              <button onClick={() => setSelectedTrainer(null)} className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
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

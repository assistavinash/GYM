import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Award, 
  Star, 
  MessageCircle, 
  Calendar,
  Clock,
  Target,
  Heart,
  ArrowRight,
  Dumbbell,
  Users,
  Trophy,
  CheckCircle,
  Filter,
  Search
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Trainers() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [filterSpecialty, setFilterSpecialty] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const specialties = [
    { id: 'all', name: 'All Specialties', icon: Users },
    { id: 'strength', name: 'Strength Training', icon: Dumbbell },
    { id: 'cardio', name: 'Cardio Fitness', icon: Heart },
    { id: 'yoga', name: 'Yoga & Flexibility', icon: User },
    { id: 'crossfit', name: 'CrossFit', icon: Target },
    { id: 'nutrition', name: 'Nutrition', icon: Award }
  ];

  const trainers = [
    {
      id: 1,
      name: 'Arjun Sharma',
      specialty: 'strength',
      experience: '8 years',
      rating: 4.9,
      reviews: 127,
      image: '💪',
      certifications: ['NASM-CPT', 'CSCS', 'Olympic Lifting'],
      specialties: ['Strength Training', 'Powerlifting', 'Body Building'],
      description: 'Expert strength coach with 8+ years helping clients build muscle and achieve their physique goals.',
      achievements: ['National Powerlifting Champion', '500+ Transformations', 'Certified Nutrition Coach'],
      availability: ['Mon-Fri: 6AM-8PM', 'Sat: 7AM-5PM'],
      price: '₹2,500/session',
      bio: 'Arjun specializes in strength training and has helped over 500 clients achieve their dream physiques. His approach combines scientific training methods with personalized nutrition guidance.',
      color: 'from-blue-400 to-cyan-500',
      languages: ['Hindi', 'English', 'Punjabi']
    },
    {
      id: 2,
      name: 'Priya Patel',
      specialty: 'yoga',
      experience: '6 years',
      rating: 4.8,
      reviews: 89,
      image: '🧘‍♀️',
      certifications: ['RYT-500', 'Yin Yoga', 'Meditation Teacher'],
      specialties: ['Hatha Yoga', 'Vinyasa Flow', 'Meditation'],
      description: 'Certified yoga instructor bringing peace and flexibility to your fitness journey.',
      achievements: ['500+ Students Trained', 'Yoga Alliance Certified', 'Mindfulness Expert'],
      availability: ['Mon-Sat: 7AM-9PM', 'Sun: 8AM-6PM'],
      price: '₹1,800/session',
      bio: 'Priya combines traditional yoga wisdom with modern teaching methods. She has guided hundreds of students on their journey to physical and mental well-being.',
      color: 'from-purple-400 to-pink-500',
      languages: ['Hindi', 'English', 'Gujarati']
    },
    {
      id: 3,
      name: 'Rohit Singh',
      specialty: 'cardio',
      experience: '5 years',
      rating: 4.7,
      reviews: 94,
      image: '🏃‍♂️',
      certifications: ['ACE-CPT', 'HIIT Specialist', 'Marathon Coach'],
      specialties: ['HIIT Training', 'Endurance Coaching', 'Weight Loss'],
      description: 'High-energy cardio specialist focused on fat loss and cardiovascular health.',
      achievements: ['Marathon Finisher', '300+ Weight Loss Transformations', 'HIIT Expert'],
      availability: ['Tue-Sat: 5AM-7PM', 'Mon: 6AM-4PM'],
      price: '₹2,000/session',
      bio: 'Rohit is passionate about helping clients achieve their cardio fitness goals. His high-energy sessions are designed to maximize calorie burn and improve endurance.',
      color: 'from-red-400 to-orange-500',
      languages: ['Hindi', 'English']
    },
    {
      id: 4,
      name: 'Dr. Meera Gupta',
      specialty: 'nutrition',
      experience: '10 years',
      rating: 5.0,
      reviews: 156,
      image: '👩‍⚕️',
      certifications: ['PhD Nutrition', 'Sports Nutritionist', 'Diabetes Educator'],
      specialties: ['Sports Nutrition', 'Weight Management', 'Medical Nutrition'],
      description: 'Registered dietitian and sports nutrition expert with a decade of experience.',
      achievements: ['PhD in Nutrition Science', '1000+ Nutrition Plans', 'Published Researcher'],
      availability: ['Mon-Fri: 9AM-6PM', 'Sat: 10AM-3PM'],
      price: '₹3,000/consultation',
      bio: 'Dr. Meera brings scientific expertise to nutrition counseling. She has helped over 1000 clients achieve their health goals through evidence-based nutrition strategies.',
      color: 'from-green-400 to-emerald-500',
      languages: ['Hindi', 'English', 'Tamil']
    },
    {
      id: 5,
      name: 'Vikram Reddy',
      specialty: 'crossfit',
      experience: '7 years',
      rating: 4.9,
      reviews: 78,
      image: '🔥',
      certifications: ['CrossFit L2', 'Olympic Lifting', 'Gymnastics Coach'],
      specialties: ['CrossFit Training', 'Functional Fitness', 'Competition Prep'],
      description: 'CrossFit Level 2 trainer specializing in functional fitness and competition preparation.',
      achievements: ['CrossFit Games Athlete', 'Regional Competitor', '200+ Athletes Coached'],
      availability: ['Mon-Sat: 6AM-8PM', 'Sun: Rest Day'],
      price: '₹2,800/session',
      bio: 'Vikram is a competitive CrossFit athlete who brings elite-level training to everyday fitness enthusiasts. His programs focus on building functional strength and conditioning.',
      color: 'from-orange-400 to-red-600',
      languages: ['Hindi', 'English', 'Telugu']
    },
    {
      id: 6,
      name: 'Aisha Khan',
      specialty: 'strength',
      experience: '4 years',
      rating: 4.8,
      reviews: 65,
      image: '💃',
      certifications: ['NASM-CPT', 'Women\'s Fitness', 'Prenatal Exercise'],
      specialties: ['Women\'s Strength', 'Prenatal Fitness', 'Body Composition'],
      description: 'Specialized in women\'s fitness, prenatal exercise, and strength training for all levels.',
      achievements: ['Women\'s Fitness Expert', 'Prenatal Specialist', '100+ Mom Transformations'],
      availability: ['Mon-Fri: 7AM-7PM', 'Sat: 8AM-4PM'],
      price: '₹2,200/session',
      bio: 'Aisha focuses on empowering women through strength training. She specializes in prenatal and postnatal fitness, helping mothers stay healthy throughout their journey.',
      color: 'from-pink-400 to-rose-500',
      languages: ['Hindi', 'English', 'Urdu']
    },
    {
      id: 7,
      name: 'Sanjay Kumar',
      specialty: 'cardio',
      experience: '9 years',
      rating: 4.6,
      reviews: 112,
      image: '🚴‍♂️',
      certifications: ['Spinning Instructor', 'Cycling Coach', 'Endurance Specialist'],
      specialties: ['Indoor Cycling', 'Endurance Training', 'Group Fitness'],
      description: 'Master cycling instructor and endurance coach with nearly a decade of experience.',
      achievements: ['Master Spinning Instructor', 'Cycling Team Coach', '500+ Group Classes'],
      availability: ['Mon-Sat: 6AM-9PM', 'Sun: 7AM-5PM'],
      price: '₹1,900/session',
      bio: 'Sanjay is renowned for his high-energy cycling classes and endurance training programs. He has led over 500 group fitness sessions and coached competitive cycling teams.',
      color: 'from-yellow-400 to-amber-500',
      languages: ['Hindi', 'English', 'Bengali']
    },
    {
      id: 8,
      name: 'Kavita Nair',
      specialty: 'yoga',
      experience: '12 years',
      rating: 4.9,
      reviews: 143,
      image: '🕉️',
      certifications: ['E-RYT 500', 'Ayurveda Practitioner', 'Breathwork Specialist'],
      specialties: ['Traditional Yoga', 'Ayurveda', 'Pranayama'],
      description: 'Senior yoga teacher with deep knowledge of traditional practices and Ayurvedic principles.',
      achievements: ['12 Years Teaching', 'Ayurveda Certified', '1000+ Students Guided'],
      availability: ['Daily: 6AM-8AM, 6PM-8PM'],
      price: '₹2,400/session',
      bio: 'Kavita brings authentic yoga traditions to modern practice. With over 12 years of experience, she integrates classical yoga with Ayurvedic wisdom for holistic wellness.',
      color: 'from-indigo-400 to-purple-500',
      languages: ['Hindi', 'English', 'Malayalam', 'Sanskrit']
    }
  ];

  const filteredTrainers = trainers.filter(trainer => {
    const matchesSpecialty = filterSpecialty === 'all' || trainer.specialty === filterSpecialty;
    const matchesSearch = trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trainer.specialties.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesSpecialty && matchesSearch;
  });

  const stats = [
    {
      icon: Users,
      number: '25+',
      label: 'Expert Trainers',
      description: 'Certified professionals'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Specializations',
      description: 'Diverse expertise'
    },
    {
      icon: Trophy,
      number: '5000+',
      label: 'Success Stories',
      description: 'Client transformations'
    },
    {
      icon: Star,
      number: '4.8',
      label: 'Average Rating',
      description: 'Client satisfaction'
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
          particleColors={["#FACC15", "#3B82F6", "#EF4444", "#8B5CF6", "#10B981"]}
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
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-full border border-blue-400/30 backdrop-blur-sm mb-6">
                <Award className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-sm text-white/80">Expert Fitness Trainers</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Meet Our
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  Expert Trainers
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
                Work with certified fitness professionals who are passionate about helping you achieve your goals. 
                Our trainers bring years of experience and specialized expertise to guide your fitness journey.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="group relative px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Book a Session
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link to="/contact" className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Us
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
                  <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                    placeholder="Search trainers or specialties..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>

                {/* Specialty Filter */}
                <div className="flex flex-wrap gap-2">
                  {specialties.map((specialty) => (
                    <button
                      key={specialty.id}
                      onClick={() => setFilterSpecialty(specialty.id)}
                      className={`flex items-center px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                        filterSpecialty === specialty.id
                          ? 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white'
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      <specialty.icon className="w-4 h-4 mr-2" />
                      {specialty.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trainers Grid */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredTrainers.map((trainer, index) => (
                <div key={trainer.id} className="group cursor-pointer" onClick={() => setSelectedTrainer(trainer)}>
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                    <div className="text-center mb-6">
                      <div className="text-5xl mb-4">{trainer.image}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{trainer.name}</h3>
                      <p className="text-white/80 text-sm mb-3">{trainer.description}</p>
                      
                      <div className="flex items-center justify-center mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${
                                i < Math.floor(trainer.rating) 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-400'
                              }`} 
                            />
                          ))}
                          <span className="text-white ml-2 text-sm">
                            {trainer.rating} ({trainer.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-white/80 text-sm">
                        <span>Experience:</span>
                        <span className="text-white font-semibold">{trainer.experience}</span>
                      </div>
                      <div className="flex justify-between text-white/80 text-sm">
                        <span>Session Price:</span>
                        <span className="text-blue-400 font-semibold">{trainer.price}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2 text-sm">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {trainer.specialties.slice(0, 2).map((specialty, i) => (
                          <span 
                            key={i} 
                            className={`px-2 py-1 bg-gradient-to-r ${trainer.color} rounded-full text-white text-xs font-medium`}
                          >
                            {specialty}
                          </span>
                        ))}
                        {trainer.specialties.length > 2 && (
                          <span className="px-2 py-1 bg-white/20 rounded-full text-white text-xs">
                            +{trainer.specialties.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Link to="/register" className={`flex-1 py-2 bg-gradient-to-r ${trainer.color} rounded-lg font-semibold text-white text-sm hover:shadow-lg transition-all duration-300 text-center`}>
                        Book Session
                      </Link>
                      <button className="px-4 py-2 border border-white/20 rounded-lg text-white text-sm hover:bg-white/10 transition-all duration-300">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredTrainers.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No Trainers Found</h3>
                <p className="text-white/80">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-blue-400/20 to-cyan-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Start Training?
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Connect with our expert trainers and take your fitness journey to the next level. 
                Book your first session today and experience personalized training.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  Get Started
                </Link>
                <Link to="/contact" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Trainer Detail Modal */}
      {selectedTrainer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedTrainer(null)}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-4xl w-full border border-white/20 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-white">{selectedTrainer.name}</h3>
              <button onClick={() => setSelectedTrainer(null)} className="text-white/60 hover:text-white text-2xl">×</button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-center mb-6">
                  <div className="text-8xl mb-4">{selectedTrainer.image}</div>
                  <div className="flex items-center justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${
                          i < Math.floor(selectedTrainer.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-400'
                        }`} 
                      />
                    ))}
                    <span className="text-white ml-2">
                      {selectedTrainer.rating} ({selectedTrainer.reviews} reviews)
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2">About</h4>
                    <p className="text-white/80 text-sm leading-relaxed">{selectedTrainer.bio}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTrainer.languages.map((lang, i) => (
                        <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-xl font-bold text-white">{selectedTrainer.experience}</div>
                    <div className="text-white/60 text-sm">Experience</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-xl font-bold text-blue-400">{selectedTrainer.price}</div>
                    <div className="text-white/60 text-sm">Per Session</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTrainer.specialties.map((specialty, i) => (
                        <span 
                          key={i} 
                          className={`px-3 py-1 bg-gradient-to-r ${selectedTrainer.color} rounded-full text-white text-sm`}
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Certifications</h4>
                    <div className="space-y-1">
                      {selectedTrainer.certifications.map((cert, i) => (
                        <div key={i} className="flex items-center text-white/80 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {cert}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Achievements</h4>
                    <div className="space-y-1">
                      {selectedTrainer.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center text-white/80 text-sm">
                          <Trophy className="w-4 h-4 text-yellow-400 mr-2" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Availability</h4>
                    <div className="space-y-1">
                      {selectedTrainer.availability.map((time, i) => (
                        <div key={i} className="flex items-center text-white/80 text-sm">
                          <Clock className="w-4 h-4 text-blue-400 mr-2" />
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <Link to="/register" className={`flex-1 py-3 bg-gradient-to-r ${selectedTrainer.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300 text-center`}>
                Book Session with {selectedTrainer.name}
              </Link>
              <button className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300 flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                Message
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

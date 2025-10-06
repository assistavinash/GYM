import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Dumbbell, 
  Target, 
  Trophy,
  ArrowRight,
  Star,
  Clock,
  CheckCircle,
  Award,
  Users,
  Calendar,
  Heart,
  Zap,
  TrendingUp,
  User,
  MessageCircle,
  Phone,
  Flame,
  Activity
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function PersonalTrainers() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [activeTab, setActiveTab] = useState('trainers');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const personalTrainers = [
    {
      id: 1,
      name: 'Raj Sharma',
      specialization: 'Strength & Powerlifting',
      experience: '8 years',
      certification: 'NASM-CPT, CSCS',
      availability: 'Mon-Sat: 6AM-10PM',
      rating: 4.9,
      clients: 120,
      achievements: [
        'National Powerlifting Champion 2019',
        'Trained 50+ competitive athletes',
        'Specialized in strength building',
        'Expert in Olympic lifting'
      ],
      specialties: ['Powerlifting', 'Strength Training', 'Olympic Lifting', 'Athletic Performance'],
      philosophy: 'Building strength is building character. Every rep counts towards your transformation.',
      programs: [
        { name: 'Strength Fundamentals', duration: '8 weeks', price: '₹12,000' },
        { name: 'Powerlifting Mastery', duration: '12 weeks', price: '₹18,000' },
        { name: 'Athletic Performance', duration: '16 weeks', price: '₹24,000' }
      ],
      image: '👨‍💪',
      color: 'from-red-400 to-orange-500',
      hourlyRate: '₹1,500'
    },
    {
      id: 2,
      name: 'Priya Singh',
      specialization: 'Weight Loss & Cardio',
      experience: '6 years',
      certification: 'ACE-CPT, Nutrition Specialist',
      availability: 'Mon-Fri: 7AM-9PM',
      rating: 4.8,
      clients: 95,
      achievements: [
        'Helped 200+ clients lose weight',
        'Certified Nutrition Specialist',
        'Expert in HIIT training',
        'Wellness coach certification'
      ],
      specialties: ['Weight Loss', 'HIIT Training', 'Nutrition Guidance', 'Cardio Conditioning'],
      philosophy: 'Sustainable weight loss comes from lifestyle changes, not crash diets.',
      programs: [
        { name: 'Fat Burn Bootcamp', duration: '6 weeks', price: '₹9,000' },
        { name: 'Complete Transformation', duration: '12 weeks', price: '₹16,000' },
        { name: 'Lifestyle Change Program', duration: '20 weeks', price: '₹28,000' }
      ],
      image: '👩‍🏃',
      color: 'from-pink-400 to-rose-500',
      hourlyRate: '₹1,200'
    },
    {
      id: 3,
      name: 'Mike Chen',
      specialization: 'CrossFit & Functional Training',
      experience: '10 years',
      certification: 'CrossFit Level 3, FMS',
      availability: 'Tue-Sun: 5AM-8PM',
      rating: 4.9,
      clients: 85,
      achievements: [
        'CrossFit Games competitor',
        'Level 3 CrossFit Trainer',
        'Functional Movement Specialist',
        'Elite athlete coach'
      ],
      specialties: ['CrossFit', 'Functional Training', 'Mobility', 'Competition Prep'],
      philosophy: 'Functional fitness for real-world strength and endless possibilities.',
      programs: [
        { name: 'CrossFit Foundations', duration: '4 weeks', price: '₹8,000' },
        { name: 'Elite Performance', duration: '12 weeks', price: '₹20,000' },
        { name: 'Competition Prep', duration: '16 weeks', price: '₹28,000' }
      ],
      image: '👨‍🏋️',
      color: 'from-blue-400 to-cyan-500',
      hourlyRate: '₹1,800'
    },
    {
      id: 4,
      name: 'Kavya Reddy',
      specialization: 'Yoga & Mindfulness',
      experience: '7 years',
      certification: 'RYT-500, Meditation Teacher',
      availability: 'Daily: 6AM-8PM',
      rating: 4.9,
      clients: 110,
      achievements: [
        'Registered Yoga Teacher 500hr',
        'Mindfulness meditation expert',
        'Holistic wellness specialist',
        'International retreat leader'
      ],
      specialties: ['Hatha Yoga', 'Vinyasa Flow', 'Meditation', 'Stress Management'],
      philosophy: 'True strength comes from the harmony of mind, body, and spirit.',
      programs: [
        { name: 'Yoga Foundations', duration: '6 weeks', price: '₹7,000' },
        { name: 'Advanced Practice', duration: '10 weeks', price: '₹12,000' },
        { name: 'Mindfulness Journey', duration: '8 weeks', price: '₹10,000' }
      ],
      image: '👩‍🧘',
      color: 'from-purple-400 to-pink-500',
      hourlyRate: '₹1,000'
    },
    {
      id: 5,
      name: 'Dr. Amit Patel',
      specialization: 'Rehabilitation & Senior Fitness',
      experience: '12 years',
      certification: 'DPT, CSCS, Geriatric Specialist',
      availability: 'Mon-Fri: 9AM-6PM',
      rating: 4.8,
      clients: 75,
      achievements: [
        'Doctor of Physical Therapy',
        'Geriatric fitness specialist',
        'Injury rehabilitation expert',
        'Medical fitness consultant'
      ],
      specialties: ['Rehabilitation', 'Senior Fitness', 'Injury Prevention', 'Medical Fitness'],
      philosophy: 'Age is just a number. Everyone deserves to move with confidence and strength.',
      programs: [
        { name: 'Injury Recovery', duration: '8 weeks', price: '₹15,000' },
        { name: 'Senior Strength', duration: '12 weeks', price: '₹14,000' },
        { name: 'Medical Fitness', duration: '16 weeks', price: '₹20,000' }
      ],
      image: '👨‍⚕️',
      color: 'from-green-400 to-emerald-500',
      hourlyRate: '₹2,000'
    },
    {
      id: 6,
      name: 'Sarah Johnson',
      specialization: 'Pilates & Core Conditioning',
      experience: '5 years',
      certification: 'PMA-CPT, Barre Instructor',
      availability: 'Mon-Sat: 8AM-7PM',
      rating: 4.7,
      clients: 90,
      achievements: [
        'PMA Certified Pilates Teacher',
        'Barre fitness specialist',
        'Posture correction expert',
        'Core conditioning specialist'
      ],
      specialties: ['Pilates', 'Barre Fitness', 'Core Training', 'Posture Correction'],
      philosophy: 'Core strength is the foundation of all movement and life confidence.',
      programs: [
        { name: 'Pilates Basics', duration: '6 weeks', price: '₹8,000' },
        { name: 'Core Power', duration: '10 weeks', price: '₹13,000' },
        { name: 'Posture Perfect', duration: '8 weeks', price: '₹11,000' }
      ],
      image: '👩‍🤸',
      color: 'from-indigo-400 to-purple-500',
      hourlyRate: '₹1,300'
    }
  ];

  const stats = [
    {
      icon: Users,
      number: '50+',
      label: 'Expert Trainers',
      description: 'Certified professionals'
    },
    {
      icon: Trophy,
      number: '1000+',
      label: 'Success Stories',
      description: 'Transformed lives'
    },
    {
      icon: Star,
      number: '4.8',
      label: 'Average Rating',
      description: 'Client satisfaction'
    },
    {
      icon: Award,
      number: '25+',
      label: 'Specializations',
      description: 'Areas of expertise'
    }
  ];

  const specialties = [
    { name: 'All Trainers', value: 'all', count: personalTrainers.length },
    { name: 'Strength Training', value: 'strength', count: 2 },
    { name: 'Weight Loss', value: 'weight-loss', count: 2 },
    { name: 'Functional Fitness', value: 'functional', count: 2 },
    { name: 'Yoga & Wellness', value: 'yoga', count: 1 },
    { name: 'Rehabilitation', value: 'rehab', count: 1 }
  ];

  const getFilteredTrainers = () => {
    if (selectedSpecialty === 'all') return personalTrainers;
    
    const specialtyMap = {
      'strength': [1, 3],
      'weight-loss': [2, 4],
      'functional': [3, 6],
      'yoga': [4],
      'rehab': [5]
    };
    
    return personalTrainers.filter(trainer => 
      specialtyMap[selectedSpecialty]?.includes(trainer.id)
    );
  };

  const services = [
    {
      icon: User,
      title: '1-on-1 Personal Training',
      description: 'Dedicated one-on-one sessions tailored to your specific goals',
      features: ['Customized workout plans', 'Real-time form correction', 'Flexible scheduling', 'Progress tracking'],
      price: 'From ₹1,000/session'
    },
    {
      icon: Users,
      title: 'Small Group Training',
      description: 'Train with 2-4 people for motivation and cost-effective fitness',
      features: ['Shared motivation', 'Cost-effective', 'Social interaction', 'Group challenges'],
      price: 'From ₹600/session'
    },
    {
      icon: Calendar,
      title: 'Program Packages',
      description: 'Comprehensive transformation programs with guaranteed results',
      features: ['Structured progression', 'Nutrition guidance', 'Lifestyle coaching', 'Result guarantee'],
      price: 'From ₹7,000/program'
    },
    {
      icon: Phone,
      title: 'Online Coaching',
      description: 'Remote personal training and coaching sessions',
      features: ['Virtual sessions', 'Workout videos', 'Progress monitoring', 'Chat support'],
      price: 'From ₹500/session'
    }
  ];

  const whyChoosePersonalTraining = [
    {
      icon: Target,
      title: 'Personalized Approach',
      description: 'Every workout is designed specifically for your goals, fitness level, and preferences'
    },
    {
      icon: CheckCircle,
      title: 'Proper Form & Safety',
      description: 'Learn correct techniques to maximize results while preventing injuries'
    },
    {
      icon: TrendingUp,
      title: 'Faster Results',
      description: 'Achieve your goals more efficiently with expert guidance and accountability'
    },
    {
      icon: Heart,
      title: 'Motivation & Support',
      description: 'Stay motivated with encouragement, support, and professional guidance'
    },
    {
      icon: Zap,
      title: 'Variety & Fun',
      description: 'Keep workouts interesting with diverse exercises and training methods'
    },
    {
      icon: Award,
      title: 'Expert Knowledge',
      description: 'Benefit from years of experience and professional certifications'
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Particles Background */}
      <div className="fixed inset-0 z-[1] w-full h-full min-h-screen pointer-events-none">
        <Particles
          particleCount={700}
          particleSpread={18}
          speed={0.12}
          particleColors={["#F59E0B", "#EF4444", "#3B82F6", "#10B981", "#8B5CF6"]}
          moveParticlesOnHover={true}
          particleHoverFactor={1.3}
          alphaParticles={true}
          particleBaseSize={140}
          sizeRandomness={1.4}
          cameraDistance={28}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-400/20 to-red-500/20 rounded-full border border-orange-400/30 backdrop-blur-sm mb-6">
                <Dumbbell className="w-4 h-4 text-orange-400 mr-2" />
                <span className="text-sm text-white/80">Expert Guidance</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Personal
                <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Trainers
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-8">
                Transform your fitness journey with expert personal trainers. Get customized workouts, 
                professional guidance, and the motivation you need to achieve your goals faster.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="group relative px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-orange-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Book a Trainer
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <button 
                  onClick={() => setActiveTab('services')}
                  className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <Activity className="w-5 h-5 mr-2" />
                  View Services
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
                  <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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

        {/* Navigation Tabs */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center mb-8 bg-white/5 rounded-2xl p-2">
              {['trainers', 'services', 'why-choose'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-lg'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Trainers Tab */}
        {activeTab === 'trainers' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Meet Our
                  <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    Expert Trainers
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                  Our certified personal trainers bring years of experience and proven results to help you achieve your fitness goals.
                </p>

                {/* Specialty Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {specialties.map((specialty) => (
                    <button
                      key={specialty.value}
                      onClick={() => setSelectedSpecialty(specialty.value)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedSpecialty === specialty.value
                          ? 'bg-gradient-to-r from-orange-400 to-red-500 text-white'
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      {specialty.name} ({specialty.count})
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getFilteredTrainers().map((trainer, index) => (
                  <div key={trainer.id} className="group cursor-pointer" onClick={() => setSelectedTrainer(trainer)}>
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                      <div className="text-center mb-6">
                        <div className="text-6xl mb-4">{trainer.image}</div>
                        <h3 className="text-2xl font-bold text-white mb-2">{trainer.name}</h3>
                        <p className="text-orange-400 font-semibold mb-2">{trainer.specialization}</p>
                        <p className="text-white/80 text-sm mb-4">{trainer.certification}</p>
                        
                        <div className="flex items-center justify-center gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(trainer.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                          ))}
                          <span className="text-white/80 ml-2">{trainer.rating}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4 mb-6">
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div className="bg-white/5 rounded-lg p-2">
                            <div className="text-xs text-white/60">Experience</div>
                            <div className="text-white font-semibold text-sm">{trainer.experience}</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-2">
                            <div className="text-xs text-white/60">Clients</div>
                            <div className="text-white font-semibold text-sm">{trainer.clients}+</div>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-sm text-white/60 mb-1">Hourly Rate</div>
                          <div className="text-orange-400 font-bold text-lg">{trainer.hourlyRate}</div>
                        </div>
                        
                        <div>
                          <h4 className="text-white font-semibold mb-2 text-sm">Specialties:</h4>
                          <div className="flex flex-wrap gap-1">
                            {trainer.specialties.slice(0, 2).map((specialty, i) => (
                              <span key={i} className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs">
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <button className={`w-full py-3 bg-gradient-to-r ${trainer.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                        View Profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Training
                  <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    Services
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Choose from various personal training options designed to fit your schedule, budget, and fitness goals.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                      <div className="mb-6">
                        <div className="mb-4 w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-white/80 mb-4">{service.description}</p>
                        <div className="text-orange-400 font-bold text-xl mb-4">{service.price}</div>
                      </div>
                      
                      <div className="space-y-3">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-white/80">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <button className="w-full mt-6 py-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300">
                        Get Started
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-orange-400/20 to-red-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">Not Sure Which Service is Right for You?</h3>
                  <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                    Our fitness consultants can help you choose the perfect training option based on your goals, experience, and preferences.
                  </p>
                  <Link to="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300">
                    Get Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Why Choose Tab */}
        {activeTab === 'why-choose' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Why Choose
                  <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    Personal Training
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Personal training offers unmatched benefits that help you achieve results faster and more safely.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyChoosePersonalTraining.map((benefit, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 text-center h-full">
                      <div className="mb-6 mx-auto w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                      <p className="text-white/80 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-orange-400/20 to-red-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Transformation?</h3>
                  <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                    Invest in yourself with professional personal training. Your future self will thank you for taking this step today.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300">
                      Find Your Trainer
                    </Link>
                    <button className="px-8 py-4 border border-white/20 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300">
                      Free Trial Session
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-orange-400/20 to-red-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Your Fitness Goals Await
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Don't wait another day to start your transformation. Our expert personal trainers are ready 
                to guide you every step of the way to success.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-orange-400/25 transition-all duration-300 hover:scale-105">
                  Book Your Trainer
                </Link>
                <Link to="/contact" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Ask Questions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Trainer Detail Modal */}
      {selectedTrainer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedTrainer(null)}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-6xl w-full border border-white/20 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-white">{selectedTrainer.name}</h3>
              <button onClick={() => setSelectedTrainer(null)} className="text-white/60 hover:text-white text-2xl">×</button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-center mb-6">
                  <div className="text-8xl mb-4">{selectedTrainer.image}</div>
                  <div className="text-orange-400 font-semibold text-lg mb-2">{selectedTrainer.specialization}</div>
                  <div className="text-white/80 mb-4">{selectedTrainer.certification}</div>
                  
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.floor(selectedTrainer.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                    ))}
                    <span className="text-white/80 ml-2">{selectedTrainer.rating}</span>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-xl p-4 mb-6">
                  <h4 className="text-white font-semibold mb-2">Philosophy</h4>
                  <p className="text-white/80 italic">"{selectedTrainer.philosophy}"</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <Clock className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <div className="text-sm text-white/60">Experience</div>
                    <div className="text-white font-bold">{selectedTrainer.experience}</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <Users className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <div className="text-sm text-white/60">Clients Trained</div>
                    <div className="text-white font-bold">{selectedTrainer.clients}+</div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                      <Target className="w-5 h-5 text-orange-400 mr-2" />
                      Specialties
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTrainer.specialties.map((specialty, i) => (
                        <span key={i} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                      <Trophy className="w-5 h-5 text-yellow-400 mr-2" />
                      Achievements
                    </h4>
                    <div className="space-y-2">
                      {selectedTrainer.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center text-white/80">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                      <Calendar className="w-5 h-5 text-blue-400 mr-2" />
                      Training Programs
                    </h4>
                    <div className="space-y-3">
                      {selectedTrainer.programs.map((program, i) => (
                        <div key={i} className="bg-white/5 rounded-lg p-3">
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="text-white font-semibold">{program.name}</h5>
                            <span className="text-orange-400 font-bold">{program.price}</span>
                          </div>
                          <div className="text-white/60 text-sm">{program.duration}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-white font-semibold">Hourly Rate</div>
                        <div className="text-orange-400 font-bold text-2xl">{selectedTrainer.hourlyRate}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-white/60 text-sm">Availability</div>
                        <div className="text-white font-semibold text-sm">{selectedTrainer.availability}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <Link to="/register" className={`flex-1 py-3 bg-gradient-to-r ${selectedTrainer.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300 text-center`}>
                Book Session
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

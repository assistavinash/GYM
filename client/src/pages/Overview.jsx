import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Dumbbell, 
  Users, 
  Trophy,
  ArrowRight,
  Star,
  Clock,
  CheckCircle,
  Heart,
  Zap,
  Target,
  Award,
  MapPin,
  Phone,
  Calendar,
  Activity,
  Flame,
  Shield,
  TrendingUp
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Overview() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('facilities');
  const [selectedFeature, setSelectedFeature] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const gymStats = [
    {
      icon: Users,
      number: '5000+',
      label: 'Active Members',
      description: 'Growing community'
    },
    {
      icon: Trophy,
      number: '10+',
      label: 'Years Experience',
      description: 'Industry expertise'
    },
    {
      icon: Star,
      number: '4.9',
      label: 'Rating',
      description: 'Member satisfaction'
    },
    {
      icon: Award,
      number: '50+',
      label: 'Certified Trainers',
      description: 'Professional guidance'
    }
  ];

  const facilities = [
    {
      id: 1,
      name: 'State-of-the-Art Equipment',
      description: 'Latest fitness equipment from top brands worldwide',
      icon: Dumbbell,
      features: ['Cardio machines with entertainment systems', 'Free weights up to 100kg', 'Functional training equipment', 'Olympic lifting platforms'],
      image: '🏋️‍♂️',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 2,
      name: 'Group Fitness Studios',
      description: 'Spacious studios for various group fitness classes',
      icon: Users,
      features: ['Yoga and pilates studio', 'Dance fitness room', 'CrossFit box', 'Spin cycling studio'],
      image: '🧘‍♀️',
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 3,
      name: 'Recovery & Wellness',
      description: 'Complete recovery facilities for optimal performance',
      icon: Heart,
      features: ['Steam and sauna rooms', 'Massage therapy rooms', 'Physiotherapy clinic', 'Ice bath facility'],
      image: '💆‍♂️',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 4,
      name: 'Premium Amenities',
      description: 'Luxury amenities for your comfort and convenience',
      icon: Star,
      features: ['Spacious changing rooms', 'Secure lockers', 'Towel service', 'Nutrition bar'],
      image: '✨',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 5,
      name: 'Swimming Pool',
      description: 'Olympic-size swimming pool for all skill levels',
      icon: Activity,
      features: ['25-meter lap pool', 'Separate kids pool', 'Swimming lessons', 'Aqua fitness classes'],
      image: '🏊‍♂️',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      id: 6,
      name: 'Sports Courts',
      description: 'Multi-purpose courts for various sports activities',
      icon: Trophy,
      features: ['Basketball court', 'Badminton courts', 'Squash courts', 'Indoor football'],
      image: '⚽',
      color: 'from-red-400 to-rose-500'
    }
  ];

  const services = [
    {
      name: 'Personal Training',
      description: 'One-on-one coaching with certified trainers',
      icon: Target,
      benefits: ['Customized workout plans', 'Faster results', 'Proper form guidance', 'Motivation and accountability'],
      color: 'from-orange-400 to-red-500'
    },
    {
      name: 'Group Classes',
      description: 'Fun and energetic group fitness sessions',
      icon: Users,
      benefits: ['Social motivation', 'Variety of classes', 'Expert instruction', 'Affordable pricing'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Nutrition Counseling',
      description: 'Professional dietary guidance and meal planning',
      icon: Heart,
      benefits: ['Personalized meal plans', 'Nutritional education', 'Progress monitoring', 'Lifestyle coaching'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      name: 'Physiotherapy',
      description: 'Injury prevention and rehabilitation services',
      icon: Shield,
      benefits: ['Injury assessment', 'Recovery programs', 'Pain management', 'Movement optimization'],
      color: 'from-blue-400 to-cyan-500'
    }
  ];

  const membershipBenefits = [
    {
      title: 'Flexible Timings',
      description: 'Access the gym from 5 AM to 11 PM, 7 days a week',
      icon: Clock
    },
    {
      title: 'Expert Guidance',
      description: 'Professional trainers and nutritionists available',
      icon: Award
    },
    {
      title: 'Community Support',
      description: 'Join a motivated community of fitness enthusiasts',
      icon: Users
    },
    {
      title: 'Progress Tracking',
      description: 'Advanced tools to monitor your fitness journey',
      icon: TrendingUp
    },
    {
      title: 'Clean & Safe',
      description: 'Maintained hygiene standards and safety protocols',
      icon: Shield
    },
    {
      title: 'Location Convenience',
      description: 'Prime location with easy parking and accessibility',
      icon: MapPin
    }
  ];

  const workoutPrograms = [
    {
      name: 'Weight Loss Transformation',
      duration: '12 weeks',
      description: 'Comprehensive program combining cardio, strength training, and nutrition',
      results: 'Average 8-15 kg weight loss',
      color: 'from-pink-400 to-rose-500'
    },
    {
      name: 'Muscle Building',
      duration: '16 weeks',
      description: 'Structured strength training with progressive overload principles',
      results: 'Significant muscle mass gain',
      color: 'from-blue-400 to-purple-500'
    },
    {
      name: 'Athletic Performance',
      duration: '10 weeks',
      description: 'Sports-specific training for improved performance and agility',
      results: 'Enhanced athletic capabilities',
      color: 'from-orange-400 to-red-500'
    },
    {
      name: 'General Fitness',
      duration: '8 weeks',
      description: 'Balanced approach to overall health and fitness improvement',
      results: 'Improved strength & endurance',
      color: 'from-green-400 to-emerald-500'
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
          speed={0.11}
          particleColors={["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"]}
          moveParticlesOnHover={true}
          particleHoverFactor={1.4}
          alphaParticles={true}
          particleBaseSize={145}
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
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full border border-blue-400/30 backdrop-blur-sm mb-6">
                <Dumbbell className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-sm text-white/80">Complete Fitness Solution</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                PowerPoint Gym
                <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Overview
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-8">
                Discover everything PowerPoint Gym has to offer. From state-of-the-art facilities to expert guidance, 
                we provide a complete fitness ecosystem designed to help you achieve your goals.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="group relative px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Join Our Community
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <button 
                  onClick={() => setActiveSection('services')}
                  className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Explore Services
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {gymStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-wrap justify-center mb-8 bg-white/5 rounded-2xl p-2">
              {['facilities', 'services', 'programs', 'benefits'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSection(tab)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeSection === tab
                      ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-lg'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities Tab */}
        {activeSection === 'facilities' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  World-Class
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Facilities
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Experience premium fitness facilities designed with your comfort and success in mind.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {facilities.map((facility, index) => (
                  <div key={facility.id} className="group cursor-pointer" onClick={() => setSelectedFeature(facility)}>
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                      <div className="text-center mb-6">
                        <div className="text-6xl mb-4">{facility.image}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{facility.name}</h3>
                        <p className="text-white/80 mb-4">{facility.description}</p>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        {facility.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-white/80 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <button className={`w-full py-3 bg-gradient-to-r ${facility.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                        Explore Facility
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Services Tab */}
        {activeSection === 'services' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Professional
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Services
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Expert services designed to accelerate your fitness journey and ensure lasting results.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                      <div className="mb-6">
                        <div className={`mb-4 w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                        <p className="text-white/80 mb-6">{service.description}</p>
                      </div>
                      
                      <div className="space-y-3">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center text-white/80">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                      
                      <button className={`w-full mt-6 py-3 bg-gradient-to-r ${service.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Programs Tab */}
        {activeSection === 'programs' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Specialized
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Programs
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Structured programs designed to help you achieve specific fitness goals with proven methodologies.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {workoutPrograms.map((program, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-white mb-3">{program.name}</h3>
                        <p className="text-white/80 mb-4">{program.description}</p>
                        
                        <div className="flex justify-between items-center mb-4">
                          <div className="text-blue-400 font-semibold">
                            Duration: {program.duration}
                          </div>
                          <div className="text-green-400 font-semibold">
                            {program.results}
                          </div>
                        </div>
                      </div>
                      
                      <button className={`w-full py-3 bg-gradient-to-r ${program.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                        Start Program
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Benefits Tab */}
        {activeSection === 'benefits' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Membership
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Benefits
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Join PowerPoint Gym and enjoy exclusive benefits designed to enhance your fitness experience.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {membershipBenefits.map((benefit, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 text-center h-full">
                      <div className="mb-6 mx-auto w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                      <p className="text-white/80 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-blue-400/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience These Benefits?</h3>
                  <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                    Join our community today and start enjoying all the exclusive benefits of PowerPoint Gym membership.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link to="/membership" className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300">
                      View Membership Plans
                    </Link>
                    <Link to="/register" className="px-8 py-4 border border-white/20 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300">
                      Join Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-blue-400/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <div className="text-center mb-8">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Visit PowerPoint Gym Today
                </h3>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Experience our facilities firsthand. Schedule a tour or start your fitness journey with us today.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Location</h4>
                  <p className="text-white/80 text-sm">123 Fitness Street, Gym City, GC 12345</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Contact</h4>
                  <p className="text-white/80 text-sm">+91 98765 43210</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Hours</h4>
                  <p className="text-white/80 text-sm">5 AM - 11 PM, 7 Days</p>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  Schedule Tour
                </Link>
                <Link to="/register" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Start Membership
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Feature Detail Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedFeature(null)}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-2xl w-full border border-white/20" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">{selectedFeature.name}</h3>
              <button onClick={() => setSelectedFeature(null)} className="text-white/60 hover:text-white text-2xl">×</button>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-8xl mb-4">{selectedFeature.image}</div>
              <p className="text-white/80 text-lg leading-relaxed">{selectedFeature.description}</p>
            </div>
            
            <div className="space-y-3 mb-8">
              <h4 className="text-white font-semibold">Features & Amenities:</h4>
              {selectedFeature.features.map((feature, i) => (
                <div key={i} className="flex items-center text-white/80">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
            
            <div className="flex gap-4">
              <Link to="/register" className={`flex-1 py-3 bg-gradient-to-r ${selectedFeature.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300 text-center`}>
                Join Now
              </Link>
              <button onClick={() => setSelectedFeature(null)} className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
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

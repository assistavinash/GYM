import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Dumbbell, 
  Heart, 
  Waves, 
  Zap,
  Shield,
  Wifi,
  Car,
  Coffee,
  Users,
  Star,
  ArrowRight,
  Play,
  MapPin,
  Clock,
  Award,
  CheckCircle,
  Camera,
  Thermometer,
  Music
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function OurFacilities() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mainFacilities = [
    {
      id: 1,
      name: 'State-of-the-Art Gym Floor',
      category: 'Strength & Cardio',
      description: 'Premium equipment spanning 5000+ sq ft with latest cardio machines and free weights',
      image: '🏋️‍♂️',
      features: ['50+ Cardio Machines', 'Complete Free Weight Section', 'Resistance Training Area', 'Functional Training Zone'],
      details: 'Our main gym floor features the latest equipment from leading brands including Technogym, Life Fitness, and Hammer Strength. The space is designed for optimal flow and safety.',
      capacity: '200+ members',
      hours: '5:00 AM - 11:00 PM',
      color: 'from-blue-400 to-cyan-500',
      amenities: ['Air Conditioning', 'Sound System', 'Towel Service', 'Water Stations']
    },
    {
      id: 2,
      name: 'Swimming Pool Complex',
      category: 'Aquatics',
      description: '25-meter Olympic-standard swimming pool with dedicated lanes for all skill levels',
      image: '🏊‍♂️',
      features: ['Olympic Size Pool', 'Kids Pool', 'Aqua Fitness Area', 'Pool Deck Lounge'],
      details: 'Our temperature-controlled swimming pool maintains perfect conditions year-round. Professional lifeguards ensure safety while certified instructors offer swimming lessons.',
      capacity: '50+ swimmers',
      hours: '6:00 AM - 10:00 PM',
      color: 'from-cyan-400 to-blue-500',
      amenities: ['Lifeguard on Duty', 'Swimming Lessons', 'Pool Equipment', 'Changing Rooms']
    },
    {
      id: 3,
      name: 'Group Fitness Studios',
      category: 'Classes',
      description: 'Multiple dedicated studios for yoga, dance, HIIT, and specialized group classes',
      image: '🧘‍♀️',
      features: ['3 Studio Rooms', 'Yoga Props Available', 'Sound & Light Systems', 'Mirrored Walls'],
      details: 'Our spacious studios are designed for various group activities with professional flooring, mirrors, and audio-visual equipment for the best class experience.',
      capacity: '25+ per studio',
      hours: '6:00 AM - 10:00 PM',
      color: 'from-purple-400 to-pink-500',
      amenities: ['Props & Equipment', 'Climate Control', 'Premium Sound', 'Professional Lighting']
    },
    {
      id: 4,
      name: 'Wellness & Spa Zone',
      category: 'Recovery',
      description: 'Complete wellness facility with sauna, steam room, and massage therapy',
      image: '🧖‍♀️',
      features: ['Finnish Sauna', 'Steam Room', 'Massage Rooms', 'Relaxation Lounge'],
      details: 'Unwind and recover in our luxury wellness zone. Features include therapeutic treatments, relaxation areas, and recovery facilities.',
      capacity: '30+ members',
      hours: '7:00 AM - 9:00 PM',
      color: 'from-green-400 to-emerald-500',
      amenities: ['Towel Service', 'Essential Oils', 'Relaxation Music', 'Therapy Services']
    },
    {
      id: 5,
      name: 'Sports Courts',
      category: 'Sports',
      description: 'Multi-purpose courts for basketball, badminton, and indoor sports activities',
      image: '🏀',
      features: ['Basketball Court', 'Badminton Courts', 'Multi-Sport Area', 'Equipment Rental'],
      details: 'Professional-grade courts with proper flooring and lighting. Available for recreational play, training sessions, and tournaments.',
      capacity: '20+ players',
      hours: '6:00 AM - 10:00 PM',
      color: 'from-orange-400 to-red-500',
      amenities: ['Equipment Provided', 'Court Booking', 'Coaching Available', 'Tournament Ready']
    },
    {
      id: 6,
      name: 'Nutrition & Juice Bar',
      category: 'Nutrition',
      description: 'Healthy refreshments, protein shakes, and nutritional supplements',
      image: '🥤',
      features: ['Fresh Juices', 'Protein Shakes', 'Healthy Snacks', 'Supplement Store'],
      details: 'Fuel your workouts with our range of healthy beverages and snacks. All products are carefully selected for quality and nutritional value.',
      capacity: '40+ seats',
      hours: '6:00 AM - 10:00 PM',
      color: 'from-yellow-400 to-orange-500',
      amenities: ['Fresh Ingredients', 'Custom Blends', 'Nutritional Info', 'Seating Area']
    }
  ];

  const supportFacilities = [
    {
      icon: Shield,
      name: 'Advanced Security',
      description: '24/7 CCTV monitoring and secure access control systems'
    },
    {
      icon: Car,
      name: 'Free Parking',
      description: 'Ample parking space for cars and two-wheelers'
    },
    {
      icon: Wifi,
      name: 'High-Speed WiFi',
      description: 'Complimentary high-speed internet throughout the facility'
    },
    {
      icon: Coffee,
      name: 'Café & Lounge',
      description: 'Comfortable seating area with healthy refreshments'
    },
    {
      icon: Thermometer,
      name: 'Climate Control',
      description: 'Optimal temperature and air quality maintained throughout'
    },
    {
      icon: Music,
      name: 'Premium Audio',
      description: 'High-quality sound systems in all workout areas'
    }
  ];

  const amenities = [
    'Modern Locker Rooms with Digital Locks',
    'Complimentary Towel Service',
    'Premium Changing Rooms with Amenities',
    'Water Purification Systems',
    'Professional Cleaning & Sanitization',
    'Emergency Medical Support',
    'Lost & Found Service',
    'Member Mobile App Access',
    'Equipment Maintenance Team',
    'Personal Training Rooms',
    'Kids Play Area (Supervised)',
    'Senior-Friendly Equipment'
  ];

  const stats = [
    {
      icon: Dumbbell,
      number: '10,000+',
      label: 'Sq Ft Space',
      description: 'Premium facility'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Daily Capacity',
      description: 'Never overcrowded'
    },
    {
      icon: Award,
      number: '50+',
      label: 'Equipment Types',
      description: 'Latest technology'
    },
    {
      icon: Star,
      number: '4.9',
      label: 'Facility Rating',
      description: 'Member satisfaction'
    }
  ];

  const facilityTours = [
    {
      id: 1,
      name: 'Virtual 360° Tour',
      description: 'Experience our facilities from the comfort of your home',
      duration: 'Self-paced',
      icon: Camera,
      available: true
    },
    {
      id: 2,
      name: 'Guided Facility Tour',
      description: 'Personal tour with our staff members',
      duration: '30 minutes',
      icon: Users,
      available: true
    },
    {
      id: 3,
      name: 'Trial Workout Session',
      description: 'Try our facilities with a complimentary workout',
      duration: '60 minutes',
      icon: Play,
      available: true
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
          particleColors={["#FACC15", "#3B82F6", "#10B981", "#8B5CF6", "#F59E0B"]}
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
                <Dumbbell className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-sm text-white/80">World-Class Facilities</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Our Premium
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  Facilities
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
                Experience fitness like never before in our state-of-the-art facility. From cutting-edge equipment 
                to luxury amenities, everything is designed for your comfort and success.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="group relative px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Book a Tour
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <button 
                  onClick={() => setActiveTab('virtual-tour')}
                  className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Virtual Tour
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

        {/* Navigation Tabs */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center mb-8 bg-white/5 rounded-2xl p-2">
              {['overview', 'amenities', 'virtual-tour'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white shadow-lg'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Facilities */}
        {activeTab === 'overview' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Main
                  <span className="block bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                    Facilities
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Discover our comprehensive range of facilities designed to support every aspect of your fitness journey.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mainFacilities.map((facility, index) => (
                  <div key={facility.id} className="group cursor-pointer" onClick={() => setSelectedFacility(facility)}>
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                      <div className="text-center mb-6">
                        <div className="text-5xl mb-4">{facility.image}</div>
                        <h3 className="text-2xl font-bold text-white mb-2">{facility.name}</h3>
                        <p className="text-white/80 mb-4">{facility.description}</p>
                        <div className={`inline-block px-3 py-1 bg-gradient-to-r ${facility.color} rounded-full text-white text-sm font-medium`}>
                          {facility.category}
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-white/80 text-sm">
                          <span>Capacity:</span>
                          <span className="text-white font-semibold">{facility.capacity}</span>
                        </div>
                        <div className="flex justify-between text-white/80 text-sm">
                          <span>Hours:</span>
                          <span className="text-white font-semibold">{facility.hours}</span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                        {facility.features.slice(0, 3).map((feature, i) => (
                          <div key={i} className="flex items-center text-white/80 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                        {facility.features.length > 3 && (
                          <div className="text-white/60 text-sm">
                            +{facility.features.length - 3} more features
                          </div>
                        )}
                      </div>
                      
                      <button className={`w-full py-3 bg-gradient-to-r ${facility.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                        Explore Facility
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Support Facilities */}
              <div className="mt-20">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    Additional
                    <span className="block bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                      Amenities
                    </span>
                  </h2>
                  <p className="text-xl text-white/80 max-w-3xl mx-auto">
                    Comprehensive support facilities to enhance your gym experience.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {supportFacilities.map((facility, index) => (
                    <div key={index} className="group">
                      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                          <facility.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">{facility.name}</h3>
                        <p className="text-white/80 leading-relaxed">{facility.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Amenities Tab */}
        {activeTab === 'amenities' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Complete
                  <span className="block bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                    Amenities List
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Every detail designed for your comfort and convenience.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-white">{amenity}</span>
                  </div>
                ))}
              </div>

              <div className="mt-16 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Operating Hours</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Regular Hours</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-white/80">
                        <span>Monday - Friday:</span>
                        <span className="text-white font-semibold">5:00 AM - 11:00 PM</span>
                      </div>
                      <div className="flex justify-between text-white/80">
                        <span>Saturday:</span>
                        <span className="text-white font-semibold">6:00 AM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between text-white/80">
                        <span>Sunday:</span>
                        <span className="text-white font-semibold">7:00 AM - 9:00 PM</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">24/7 Access</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        <span>Premium Members</span>
                      </div>
                      <div className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        <span>Corporate Members</span>
                      </div>
                      <div className="text-white/60 text-sm">
                        *After completing orientation program
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Virtual Tour Tab */}
        {activeTab === 'virtual-tour' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Facility
                  <span className="block bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                    Tours
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Explore our facilities before you visit. Choose from our tour options.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {facilityTours.map((tour, index) => (
                  <div key={tour.id} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                        <tour.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{tour.name}</h3>
                      <p className="text-white/80 mb-6">{tour.description}</p>
                      <div className="text-blue-400 font-semibold mb-6">Duration: {tour.duration}</div>
                      <button className="w-full py-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300">
                        {tour.available ? 'Start Tour' : 'Coming Soon'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Visit?</h3>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Schedule a personalized tour with our team to see everything we have to offer 
                  and get answers to all your questions.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300">
                    Schedule Tour
                  </Link>
                  <a href="tel:+91-1234567890" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-blue-400/20 to-cyan-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Experience Premium Fitness
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join thousands of members who have made our facility their second home. 
                Start your fitness journey in India's most advanced gym.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  Join Now
                </Link>
                <Link to="/contact" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Facility Detail Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedFacility(null)}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-4xl w-full border border-white/20 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-white">{selectedFacility.name}</h3>
              <button onClick={() => setSelectedFacility(null)} className="text-white/60 hover:text-white text-2xl">×</button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-center mb-6">
                  <div className="text-8xl mb-4">{selectedFacility.image}</div>
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${selectedFacility.color} rounded-full text-white font-semibold`}>
                    {selectedFacility.category}
                  </div>
                </div>
                
                <p className="text-white/80 text-lg leading-relaxed mb-6">{selectedFacility.details}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-xl font-bold text-white">{selectedFacility.capacity}</div>
                    <div className="text-white/60 text-sm">Capacity</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-xl font-bold text-white">{selectedFacility.hours}</div>
                    <div className="text-white/60 text-sm">Operating Hours</div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Features</h4>
                    <div className="space-y-2">
                      {selectedFacility.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-white/80">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Amenities</h4>
                    <div className="space-y-2">
                      {selectedFacility.amenities.map((amenity, i) => (
                        <div key={i} className="flex items-center text-white/80">
                          <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                          {amenity}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <button className={`flex-1 py-3 bg-gradient-to-r ${selectedFacility.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                Book a Tour
              </button>
              <Link to="/register" className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
                Join Now
              </Link>
              <button onClick={() => setSelectedFacility(null)} className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
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

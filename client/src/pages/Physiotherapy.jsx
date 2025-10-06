import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Shield, 
  Activity,
  ArrowRight,
  Clock,
  CheckCircle,
  Stethoscope,
  Target,
  Award,
  Users,
  Phone,
  Calendar,
  MapPin,
  Star,
  Zap,
  TrendingUp,
  Lightbulb,
  User
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Physiotherapy() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [activeTab, setActiveTab] = useState('services');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const physiotherapyServices = [
    {
      id: 1,
      name: 'Sports Injury Rehabilitation',
      category: 'sports',
      description: 'Comprehensive recovery programs for sports-related injuries',
      duration: '45-60 minutes',
      price: '₹1,500',
      icon: Activity,
      benefits: [
        'Faster injury recovery',
        'Pain management',
        'Movement restoration',
        'Strength rebuilding',
        'Prevention strategies'
      ],
      conditions: [
        'ACL/MCL injuries',
        'Tennis elbow',
        'Rotator cuff injuries',
        'Ankle sprains',
        'Muscle strains',
        'Joint dislocations'
      ],
      techniques: [
        'Manual therapy',
        'Exercise therapy',
        'Electrotherapy',
        'Ultrasound therapy',
        'Dry needling'
      ],
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 2,
      name: 'Orthopedic Physiotherapy',
      category: 'orthopedic',
      description: 'Treatment for musculoskeletal disorders and bone injuries',
      duration: '45-60 minutes',
      price: '₹1,200',
      icon: Shield,
      benefits: [
        'Joint mobility improvement',
        'Pain reduction',
        'Posture correction',
        'Functional restoration',
        'Muscle strengthening'
      ],
      conditions: [
        'Arthritis',
        'Fracture recovery',
        'Joint replacement rehab',
        'Spinal disorders',
        'Osteoporosis',
        'Chronic back pain'
      ],
      techniques: [
        'Joint mobilization',
        'Soft tissue massage',
        'Therapeutic exercises',
        'Heat/cold therapy',
        'Postural training'
      ],
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 3,
      name: 'Neurological Rehabilitation',
      category: 'neurological',
      description: 'Specialized care for neurological conditions and recovery',
      duration: '60-75 minutes',
      price: '₹2,000',
      icon: Zap,
      benefits: [
        'Motor function improvement',
        'Balance enhancement',
        'Coordination training',
        'Cognitive rehabilitation',
        'Independence restoration'
      ],
      conditions: [
        'Stroke recovery',
        "Parkinson's disease",
        'Multiple sclerosis',
        'Spinal cord injuries',
        'Head injuries',
        'Peripheral neuropathy'
      ],
      techniques: [
        'Bobath technique',
        'PNF patterns',
        'Balance training',
        'Gait training',
        'Functional training'
      ],
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 4,
      name: 'Cardiopulmonary Therapy',
      category: 'cardio',
      description: 'Rehabilitation for heart and lung conditions',
      duration: '45-60 minutes',
      price: '₹1,800',
      icon: Heart,
      benefits: [
        'Cardiovascular endurance',
        'Breathing improvement',
        'Exercise tolerance',
        'Quality of life',
        'Risk reduction'
      ],
      conditions: [
        'Heart attack recovery',
        'COPD',
        'Asthma',
        'Post-surgery rehab',
        'Chronic heart failure',
        'Pulmonary fibrosis'
      ],
      techniques: [
        'Breathing exercises',
        'Graded exercise',
        'Chest physiotherapy',
        'Airway clearance',
        'Endurance training'
      ],
      color: 'from-red-400 to-rose-500'
    },
    {
      id: 5,
      name: 'Pediatric Physiotherapy',
      category: 'pediatric',
      description: 'Specialized care for children with developmental needs',
      duration: '45 minutes',
      price: '₹1,000',
      icon: User,
      benefits: [
        'Motor development',
        'Coordination skills',
        'Strength building',
        'Balance improvement',
        'Confidence building'
      ],
      conditions: [
        'Cerebral palsy',
        'Developmental delays',
        'Muscular dystrophy',
        'Down syndrome',
        'Autism spectrum',
        'Birth injuries'
      ],
      techniques: [
        'Play-based therapy',
        'Sensory integration',
        'Motor learning',
        'Family education',
        'Adaptive equipment'
      ],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 6,
      name: 'Women\'s Health Physiotherapy',
      category: 'womens',
      description: 'Specialized care for women\'s unique health needs',
      duration: '45-60 minutes',
      price: '₹1,300',
      icon: Heart,
      benefits: [
        'Pelvic floor strengthening',
        'Postnatal recovery',
        'Pain management',
        'Core rehabilitation',
        'Functional improvement'
      ],
      conditions: [
        'Pregnancy-related pain',
        'Postnatal recovery',
        'Pelvic floor dysfunction',
        'Diastasis recti',
        'Incontinence',
        'Prolapse conditions'
      ],
      techniques: [
        'Pelvic floor exercises',
        'Core strengthening',
        'Manual therapy',
        'Education & advice',
        'Breathing techniques'
      ],
      color: 'from-pink-400 to-purple-500'
    }
  ];

  const physiotherapists = [
    {
      id: 1,
      name: 'Dr. Neha Sharma',
      specialization: 'Sports Injury & Orthopedic',
      qualification: 'MPT Sports Medicine, 8 years experience',
      expertise: ['Sports injuries', 'Joint mobilization', 'Manual therapy'],
      achievements: ['Sports physiotherapist for state teams', 'Published researcher'],
      rating: 4.9,
      experience: '8 years',
      image: '👩‍⚕️'
    },
    {
      id: 2,
      name: 'Dr. Rajesh Patel',
      specialization: 'Neurological Rehabilitation',
      qualification: 'MPT Neurology, 12 years experience',
      expertise: ['Stroke recovery', 'Parkinson\'s care', 'Balance training'],
      achievements: ['Certified Bobath therapist', 'Neurological expert'],
      rating: 4.8,
      experience: '12 years',
      image: '👨‍⚕️'
    },
    {
      id: 3,
      name: 'Dr. Priya Singh',
      specialization: 'Cardiopulmonary & Women\'s Health',
      qualification: 'MPT Cardiorespiratory, 10 years experience',
      expertise: ['Cardiac rehab', 'Pulmonary care', 'Women\'s health'],
      achievements: ['Cardiac rehabilitation specialist', 'Women\'s health expert'],
      rating: 4.9,
      experience: '10 years',
      image: '👩‍⚕️'
    },
    {
      id: 4,
      name: 'Dr. Amit Kumar',
      specialization: 'Pediatric & Developmental',
      qualification: 'MPT Pediatrics, 6 years experience',
      expertise: ['Child development', 'Special needs', 'Family guidance'],
      achievements: ['Pediatric specialist', 'Early intervention expert'],
      rating: 4.7,
      experience: '6 years',
      image: '👨‍⚕️'
    }
  ];

  const stats = [
    {
      icon: Users,
      number: '5000+',
      label: 'Patients Treated',
      description: 'Successful recoveries'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Years Experience',
      description: 'Combined expertise'
    },
    {
      icon: Target,
      number: '95%',
      label: 'Recovery Rate',
      description: 'Patient satisfaction'
    },
    {
      icon: Star,
      number: '4.8',
      label: 'Average Rating',
      description: 'Patient reviews'
    }
  ];

  const specialties = [
    { name: 'All Services', value: 'all', count: physiotherapyServices.length },
    { name: 'Sports Medicine', value: 'sports', count: physiotherapyServices.filter(s => s.category === 'sports').length },
    { name: 'Orthopedic', value: 'orthopedic', count: physiotherapyServices.filter(s => s.category === 'orthopedic').length },
    { name: 'Neurological', value: 'neurological', count: physiotherapyServices.filter(s => s.category === 'neurological').length },
    { name: 'Cardiopulmonary', value: 'cardio', count: physiotherapyServices.filter(s => s.category === 'cardio').length },
    { name: 'Pediatric', value: 'pediatric', count: physiotherapyServices.filter(s => s.category === 'pediatric').length },
    { name: 'Women\'s Health', value: 'womens', count: physiotherapyServices.filter(s => s.category === 'womens').length }
  ];

  const filteredServices = selectedSpecialty === 'all' 
    ? physiotherapyServices 
    : physiotherapyServices.filter(s => s.category === selectedSpecialty);

  const whyChooseUs = [
    {
      icon: Stethoscope,
      title: 'Expert Physiotherapists',
      description: 'Qualified and experienced professionals with specialized training'
    },
    {
      icon: Target,
      title: 'Personalized Treatment',
      description: 'Customized therapy plans based on individual needs and conditions'
    },
    {
      icon: Award,
      title: 'Advanced Techniques',
      description: 'Latest physiotherapy methods and evidence-based practices'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Convenient appointment times to fit your busy schedule'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'High success rates and positive patient outcomes'
    },
    {
      icon: Shield,
      title: 'Comprehensive Care',
      description: 'Complete rehabilitation from assessment to full recovery'
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Particles Background */}
      <div className="fixed inset-0 z-[1] w-full h-full min-h-screen pointer-events-none">
        <Particles
          particleCount={600}
          particleSpread={20}
          speed={0.15}
          particleColors={["#3B82F6", "#10B981", "#8B5CF6", "#F59E0B", "#EF4444"]}
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
                <Stethoscope className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-sm text-white/80">Expert Healthcare</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Physiotherapy
                <span className="block bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                  & Rehabilitation
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-8">
                Professional physiotherapy services for recovery, rehabilitation, and performance enhancement. 
                Our expert physiotherapists use evidence-based treatments to help you achieve optimal health.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="group relative px-8 py-4 bg-gradient-to-r from-blue-400 to-green-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Book Consultation
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <button 
                  onClick={() => setActiveTab('physiotherapists')}
                  className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <User className="w-5 h-5 mr-2" />
                  Meet Our Team
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

        {/* Navigation Tabs */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center mb-8 bg-white/5 rounded-2xl p-2">
              {['services', 'physiotherapists', 'why-choose'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-400 to-green-500 text-white shadow-lg'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Tab */}
        {activeTab === 'services' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Our
                  <span className="block bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                    Services
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                  Comprehensive physiotherapy services tailored to your specific needs and conditions.
                </p>

                {/* Specialty Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {specialties.map((specialty) => (
                    <button
                      key={specialty.value}
                      onClick={() => setSelectedSpecialty(specialty.value)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedSpecialty === specialty.value
                          ? 'bg-gradient-to-r from-blue-400 to-green-500 text-white'
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      {specialty.name} ({specialty.count})
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <div key={service.id} className="group cursor-pointer" onClick={() => setSelectedService(service)}>
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                      <div className="text-center mb-6">
                        <div className={`mb-4 mx-auto w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-white/80 mb-4">{service.description}</p>
                      </div>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-white/60">
                            <Clock className="w-4 h-4 mr-2" />
                            Duration
                          </div>
                          <div className="text-white font-semibold">{service.duration}</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-white/60">
                            <Target className="w-4 h-4 mr-2" />
                            Price
                          </div>
                          <div className="text-green-400 font-bold">{service.price}</div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                        <div className="space-y-2">
                          {service.benefits.slice(0, 3).map((benefit, i) => (
                            <div key={i} className="flex items-center text-white/80 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <button className={`w-full py-3 bg-gradient-to-r ${service.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Physiotherapists Tab */}
        {activeTab === 'physiotherapists' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Expert
                  <span className="block bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                    Physiotherapists
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Our team of qualified physiotherapists brings years of experience and specialized training.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {physiotherapists.map((therapist, index) => (
                  <div key={therapist.id} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                      <div className="text-center mb-6">
                        <div className="text-6xl mb-4">{therapist.image}</div>
                        <h3 className="text-2xl font-bold text-white mb-2">{therapist.name}</h3>
                        <p className="text-blue-400 font-semibold mb-2">{therapist.specialization}</p>
                        <p className="text-white/80 text-sm mb-4">{therapist.qualification}</p>
                        
                        <div className="flex items-center justify-center gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(therapist.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                          ))}
                          <span className="text-white/80 ml-2">{therapist.rating}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-white font-semibold mb-2 flex items-center">
                            <Target className="w-4 h-4 mr-2 text-blue-400" />
                            Expertise
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {therapist.expertise.map((skill, i) => (
                              <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-white font-semibold mb-2 flex items-center">
                            <Award className="w-4 h-4 mr-2 text-green-400" />
                            Achievements
                          </h4>
                          <div className="space-y-1">
                            {therapist.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-center text-white/80 text-sm">
                                <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                {achievement}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center pt-4 border-t border-white/10">
                          <div className="text-center">
                            <div className="text-white/60 text-sm">Experience</div>
                            <div className="text-white font-semibold">{therapist.experience}</div>
                          </div>
                          <Link to="/register" className="px-6 py-2 bg-gradient-to-r from-blue-400 to-green-500 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300">
                            Book Session
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Why Choose Us Tab */}
        {activeTab === 'why-choose' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Why Choose
                  <span className="block bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                    Our Physiotherapy
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  We provide comprehensive, evidence-based physiotherapy care with a focus on your complete recovery.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyChooseUs.map((feature, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 text-center h-full">
                      <div className="mb-6 mx-auto w-16 h-16 bg-gradient-to-r from-blue-400 to-green-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-white/80 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-blue-400/20 to-green-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Recovery?</h3>
                  <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                    Take the first step towards better health. Our expert physiotherapists are here to help you recover and achieve your goals.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-400 to-green-500 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300">
                      Book Consultation
                    </Link>
                    <button className="px-8 py-4 border border-white/20 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300">
                      Call Now
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
            <div className="bg-gradient-to-r from-blue-400/20 to-green-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Start Your Recovery Journey Today
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Don't let pain or injury hold you back. Our expert physiotherapists are ready to help you 
                achieve optimal recovery and performance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-blue-400 to-green-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  Book Assessment
                </Link>
                <Link to="/contact" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedService(null)}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-4xl w-full border border-white/20 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-white">{selectedService.name}</h3>
              <button onClick={() => setSelectedService(null)} className="text-white/60 hover:text-white text-2xl">×</button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className={`mb-6 mx-auto w-20 h-20 bg-gradient-to-r ${selectedService.color} rounded-2xl flex items-center justify-center`}>
                  <selectedService.icon className="w-10 h-10 text-white" />
                </div>
                
                <p className="text-white/80 text-lg leading-relaxed mb-6">{selectedService.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <Clock className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <div className="text-sm text-white/60">Duration</div>
                    <div className="text-white font-bold">{selectedService.duration}</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <Target className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <div className="text-sm text-white/60">Price</div>
                    <div className="text-green-400 font-bold">{selectedService.price}</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Benefits
                  </h4>
                  <div className="space-y-2">
                    {selectedService.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                      <Stethoscope className="w-5 h-5 text-blue-400 mr-2" />
                      Conditions Treated
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedService.conditions.map((condition, i) => (
                        <div key={i} className="flex items-center text-white/80">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                          {condition}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                      <Lightbulb className="w-5 h-5 text-yellow-400 mr-2" />
                      Treatment Techniques
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedService.techniques.map((technique, i) => (
                        <div key={i} className="flex items-center text-white/80">
                          <CheckCircle className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                          {technique}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <button className={`flex-1 py-3 bg-gradient-to-r ${selectedService.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                Book This Service
              </button>
              <Link to="/contact" className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
                Ask Questions
              </Link>
              <button onClick={() => setSelectedService(null)} className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
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

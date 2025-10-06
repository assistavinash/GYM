import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  Heart, 
  Shield,
  ArrowRight,
  Star,
  Clock,
  CheckCircle,
  Award,
  Users,
  Calendar,
  Activity,
  Zap,
  TrendingUp,
  User,
  MessageCircle,
  Phone,
  Target,
  BookOpen
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Physiotherapists() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPhysiotherapist, setSelectedPhysiotherapist] = useState(null);
  const [activeTab, setActiveTab] = useState('physiotherapists');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const physiotherapists = [
    {
      id: 1,
      name: 'Dr. Neha Sharma',
      specialization: 'Sports Injury & Orthopedic Rehabilitation',
      qualification: 'MPT Sports Medicine, 8 years experience',
      experience: '8 years',
      patients: 500,
      rating: 4.9,
      expertise: ['ACL/MCL injuries', 'Rotator cuff rehab', 'Tennis elbow', 'Sports performance'],
      achievements: [
        'Sports physiotherapist for state cricket team',
        'Certified manual therapy specialist',
        'Published researcher in sports medicine',
        'Expert in dry needling techniques'
      ],
      philosophy: 'Recovery is not just about healing - it\'s about coming back stronger than before.',
      treatments: [
        { name: 'Sports Injury Assessment', duration: '60 minutes', price: '₹2,000' },
        { name: 'Rehabilitation Program', duration: '8-12 weeks', price: '₹15,000' },
        { name: 'Performance Enhancement', duration: '6 weeks', price: '₹12,000' }
      ],
      sessionFee: '₹1,500',
      availability: 'Mon-Sat: 9AM-7PM',
      image: '👩‍⚕️',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 2,
      name: 'Dr. Rajesh Patel',
      specialization: 'Neurological Rehabilitation & Stroke Recovery',
      qualification: 'MPT Neurology, 12 years experience',
      experience: '12 years',
      patients: 400,
      rating: 4.8,
      expertise: ['Stroke recovery', 'Parkinson\'s management', 'Balance training', 'Gait training'],
      achievements: [
        'Certified Bobath technique specialist',
        'Neurological rehabilitation expert',
        'Balance disorder specialist',
        'Hospital neurology consultant'
      ],
      philosophy: 'Every small step in recovery is a giant leap towards independence and hope.',
      treatments: [
        { name: 'Neurological Assessment', duration: '90 minutes', price: '₹2,500' },
        { name: 'Stroke Recovery Program', duration: '12-16 weeks', price: '₹25,000' },
        { name: 'Balance & Coordination', duration: '8 weeks', price: '₹12,000' }
      ],
      sessionFee: '₹2,000',
      availability: 'Tue-Sun: 8AM-6PM',
      image: '👨‍⚕️',
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 3,
      name: 'Dr. Priya Singh',
      specialization: 'Cardiopulmonary & Respiratory Therapy',
      qualification: 'MPT Cardiorespiratory, 10 years experience',
      experience: '10 years',
      patients: 350,
      rating: 4.9,
      expertise: ['Cardiac rehabilitation', 'COPD management', 'Breathing exercises', 'Post-surgery recovery'],
      achievements: [
        'Cardiac rehabilitation specialist',
        'Pulmonary function expert',
        'ICU physiotherapy consultant',
        'Certified in chest physiotherapy'
      ],
      philosophy: 'Breathing is life. Every breath we help restore brings back hope and vitality.',
      treatments: [
        { name: 'Cardiac Assessment', duration: '60 minutes', price: '₹1,800' },
        { name: 'Cardiac Rehab Program', duration: '12 weeks', price: '₹18,000' },
        { name: 'Pulmonary Therapy', duration: '8 weeks', price: '₹14,000' }
      ],
      sessionFee: '₹1,800',
      availability: 'Mon-Fri: 10AM-6PM',
      image: '👩‍⚕️',
      color: 'from-red-400 to-rose-500'
    },
    {
      id: 4,
      name: 'Dr. Amit Kumar',
      specialization: 'Pediatric Physiotherapy & Development',
      qualification: 'MPT Pediatrics, 6 years experience',
      experience: '6 years',
      patients: 200,
      rating: 4.7,
      expertise: ['Cerebral palsy', 'Developmental delays', 'Autism support', 'Special needs care'],
      achievements: [
        'Pediatric development specialist',
        'Early intervention expert',
        'Special needs physiotherapist',
        'Family-centered care advocate'
      ],
      philosophy: 'Every child deserves the chance to reach their full potential through movement and play.',
      treatments: [
        { name: 'Developmental Assessment', duration: '75 minutes', price: '₹1,500' },
        { name: 'Early Intervention Program', duration: '16 weeks', price: '₹16,000' },
        { name: 'Motor Skills Development', duration: '12 weeks', price: '₹12,000' }
      ],
      sessionFee: '₹1,000',
      availability: 'Mon-Sat: 11AM-7PM',
      image: '👨‍⚕️',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 5,
      name: 'Dr. Kavya Reddy',
      specialization: 'Women\'s Health & Pelvic Floor Therapy',
      qualification: 'MPT Women\'s Health, 7 years experience',
      experience: '7 years',
      patients: 300,
      rating: 4.9,
      expertise: ['Pelvic floor dysfunction', 'Pregnancy care', 'Postnatal recovery', 'Core rehabilitation'],
      achievements: [
        'Women\'s health specialist',
        'Pelvic floor therapy expert',
        'Prenatal & postnatal care specialist',
        'Core rehabilitation consultant'
      ],
      philosophy: 'Supporting women through every stage of life with specialized, compassionate care.',
      treatments: [
        { name: 'Women\'s Health Assessment', duration: '60 minutes', price: '₹1,600' },
        { name: 'Pelvic Floor Program', duration: '10 weeks', price: '₹13,000' },
        { name: 'Postnatal Recovery', duration: '8 weeks', price: '₹10,000' }
      ],
      sessionFee: '₹1,300',
      availability: 'Tue-Sat: 9AM-5PM',
      image: '👩‍⚕️',
      color: 'from-pink-400 to-purple-500'
    },
    {
      id: 6,
      name: 'Dr. Suresh Menon',
      specialization: 'Geriatric & Senior Care Physiotherapy',
      qualification: 'MPT Geriatrics, 15 years experience',
      experience: '15 years',
      patients: 450,
      rating: 4.8,
      expertise: ['Fall prevention', 'Arthritis management', 'Balance training', 'Mobility enhancement'],
      achievements: [
        'Geriatric physiotherapy specialist',
        'Fall prevention expert',
        'Senior mobility consultant',
        'Age-friendly care advocate'
      ],
      philosophy: 'Age is just a number. Movement and independence can be maintained at any stage of life.',
      treatments: [
        { name: 'Senior Health Assessment', duration: '60 minutes', price: '₹1,400' },
        { name: 'Fall Prevention Program', duration: '10 weeks', price: '₹12,000' },
        { name: 'Mobility Enhancement', duration: '12 weeks', price: '₹14,000' }
      ],
      sessionFee: '₹1,600',
      availability: 'Mon-Fri: 8AM-4PM',
      image: '👨‍⚕️',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  const stats = [
    {
      icon: Users,
      number: '20+',
      label: 'Expert Physiotherapists',
      description: 'Certified professionals'
    },
    {
      icon: Heart,
      number: '3000+',
      label: 'Patients Treated',
      description: 'Successful recoveries'
    },
    {
      icon: Star,
      number: '4.8',
      label: 'Average Rating',
      description: 'Patient satisfaction'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Specializations',
      description: 'Areas of expertise'
    }
  ];

  const specialties = [
    { name: 'All Specialists', value: 'all', count: physiotherapists.length },
    { name: 'Sports Medicine', value: 'sports', count: 1 },
    { name: 'Neurological', value: 'neuro', count: 1 },
    { name: 'Cardiopulmonary', value: 'cardio', count: 1 },
    { name: 'Pediatric', value: 'pediatric', count: 1 },
    { name: 'Women\'s Health', value: 'womens', count: 1 },
    { name: 'Geriatric', value: 'geriatric', count: 1 }
  ];

  const getFilteredPhysiotherapists = () => {
    if (selectedSpecialty === 'all') return physiotherapists;
    
    const specialtyMap = {
      'sports': [1],
      'neuro': [2],
      'cardio': [3],
      'pediatric': [4],
      'womens': [5],
      'geriatric': [6]
    };
    
    return physiotherapists.filter(pt => 
      specialtyMap[selectedSpecialty]?.includes(pt.id)
    );
  };

  const services = [
    {
      icon: Stethoscope,
      title: 'Comprehensive Assessment',
      description: 'Detailed evaluation of your condition and personalized treatment planning',
      features: ['Physical examination', 'Movement analysis', 'Treatment planning', 'Goal setting'],
      price: 'From ₹1,400/session'
    },
    {
      icon: Activity,
      title: 'Manual Therapy',
      description: 'Hands-on treatment techniques for pain relief and mobility improvement',
      features: ['Joint mobilization', 'Soft tissue massage', 'Trigger point therapy', 'Myofascial release'],
      price: 'From ₹1,500/session'
    },
    {
      icon: Target,
      title: 'Exercise Therapy',
      description: 'Customized exercise programs for strength, flexibility, and function',
      features: ['Therapeutic exercises', 'Strength training', 'Flexibility work', 'Home programs'],
      price: 'From ₹1,200/session'
    },
    {
      icon: Zap,
      title: 'Electrotherapy',
      description: 'Advanced modalities for pain management and tissue healing',
      features: ['Ultrasound therapy', 'TENS therapy', 'Electrical stimulation', 'Laser therapy'],
      price: 'From ₹800/session'
    }
  ];

  const conditionsTreated = [
    {
      icon: Shield,
      title: 'Orthopedic Conditions',
      conditions: ['Back pain', 'Neck pain', 'Joint pain', 'Arthritis', 'Fracture recovery', 'Post-surgery rehab'],
      description: 'Comprehensive care for musculoskeletal disorders'
    },
    {
      icon: Activity,
      title: 'Sports Injuries',
      conditions: ['ACL injuries', 'Tennis elbow', 'Shoulder impingement', 'Ankle sprains', 'Muscle strains', 'Overuse injuries'],
      description: 'Specialized treatment for athletic injuries'
    },
    {
      icon: Zap,
      title: 'Neurological Conditions',
      conditions: ['Stroke recovery', 'Parkinson\'s disease', 'Multiple sclerosis', 'Spinal cord injuries', 'Head injuries', 'Balance disorders'],
      description: 'Expert care for neurological rehabilitation'
    },
    {
      icon: Heart,
      title: 'Cardiopulmonary',
      conditions: ['Heart attack recovery', 'COPD', 'Asthma', 'Post-surgery care', 'Breathing difficulties', 'Exercise intolerance'],
      description: 'Specialized cardiac and respiratory care'
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Particles Background */}
      <div className="fixed inset-0 z-[1] w-full h-full min-h-screen pointer-events-none">
        <Particles
          particleCount={550}
          particleSpread={25}
          speed={0.16}
          particleColors={["#3B82F6", "#10B981", "#8B5CF6", "#EF4444", "#F59E0B"]}
          moveParticlesOnHover={true}
          particleHoverFactor={1.1}
          alphaParticles={true}
          particleBaseSize={110}
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
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full border border-blue-400/30 backdrop-blur-sm mb-6">
                <Stethoscope className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-sm text-white/80">Healthcare Excellence</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Expert
                <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Physiotherapists
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-8">
                Meet our team of highly qualified physiotherapists specializing in various areas of rehabilitation. 
                Get personalized treatment plans designed to restore your movement, reduce pain, and improve quality of life.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="group relative px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Book Appointment
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <button 
                  onClick={() => setActiveTab('conditions')}
                  className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Conditions Treated
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
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center mb-8 bg-white/5 rounded-2xl p-2">
              {['physiotherapists', 'services', 'conditions'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab
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

        {/* Physiotherapists Tab */}
        {activeTab === 'physiotherapists' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Meet Our
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Physiotherapy Team
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                  Our certified physiotherapists bring specialized expertise and compassionate care to help you recover and thrive.
                </p>

                {/* Specialty Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {specialties.map((specialty) => (
                    <button
                      key={specialty.value}
                      onClick={() => setSelectedSpecialty(specialty.value)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedSpecialty === specialty.value
                          ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white'
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      {specialty.name} ({specialty.count})
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getFilteredPhysiotherapists().map((physiotherapist, index) => (
                  <div key={physiotherapist.id} className="group cursor-pointer" onClick={() => setSelectedPhysiotherapist(physiotherapist)}>
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                      <div className="text-center mb-6">
                        <div className="text-6xl mb-4">{physiotherapist.image}</div>
                        <h3 className="text-2xl font-bold text-white mb-2">{physiotherapist.name}</h3>
                        <p className="text-blue-400 font-semibold mb-2">{physiotherapist.specialization}</p>
                        <p className="text-white/80 text-sm mb-4">{physiotherapist.qualification}</p>
                        
                        <div className="flex items-center justify-center gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(physiotherapist.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                          ))}
                          <span className="text-white/80 ml-2">{physiotherapist.rating}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4 mb-6">
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div className="bg-white/5 rounded-lg p-2">
                            <div className="text-xs text-white/60">Experience</div>
                            <div className="text-white font-semibold text-sm">{physiotherapist.experience}</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-2">
                            <div className="text-xs text-white/60">Patients</div>
                            <div className="text-white font-semibold text-sm">{physiotherapist.patients}+</div>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-sm text-white/60 mb-1">Session Fee</div>
                          <div className="text-blue-400 font-bold text-lg">{physiotherapist.sessionFee}</div>
                        </div>
                        
                        <div>
                          <h4 className="text-white font-semibold mb-2 text-sm">Expertise:</h4>
                          <div className="flex flex-wrap gap-1">
                            {physiotherapist.expertise.slice(0, 2).map((skill, i) => (
                              <span key={i} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <button className={`w-full py-3 bg-gradient-to-r ${physiotherapist.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
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
                  Physiotherapy
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Services
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Comprehensive physiotherapy services using the latest techniques and equipment for optimal recovery.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                      <div className="mb-6">
                        <div className="mb-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-white/80 mb-4">{service.description}</p>
                        <div className="text-blue-400 font-bold text-xl mb-4">{service.price}</div>
                      </div>
                      
                      <div className="space-y-3">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-white/80">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <button className="w-full mt-6 py-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-blue-400/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">Personalized Treatment Plans</h3>
                  <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                    Every patient receives a customized treatment plan based on thorough assessment and individual needs.
                  </p>
                  <Link to="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300">
                    Schedule Assessment
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Conditions Tab */}
        {activeTab === 'conditions' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Conditions We
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Treat
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Our physiotherapists specialize in treating a wide range of conditions across multiple disciplines.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {conditionsTreated.map((category, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                      <div className="mb-6">
                        <div className="mb-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <category.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                        <p className="text-white/80 mb-6">{category.description}</p>
                      </div>
                      
                      <div className="space-y-3">
                        {category.conditions.map((condition, i) => (
                          <div key={i} className="flex items-center text-white/80">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {condition}
                          </div>
                        ))}
                      </div>
                      
                      <button className="w-full mt-6 py-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300">
                        Get Treatment
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-blue-400/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">Don't See Your Condition Listed?</h3>
                  <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                    We treat many more conditions. Contact us to discuss your specific needs and how we can help.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300">
                      Contact Us
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
            <div className="bg-gradient-to-r from-blue-400/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Start Your Recovery Journey Today
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Don't let pain or limited mobility hold you back. Our expert physiotherapists are here to help you 
                recover, strengthen, and return to the activities you love.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  Book Appointment
                </Link>
                <Link to="/contact" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Get Information
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Physiotherapist Detail Modal */}
      {selectedPhysiotherapist && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedPhysiotherapist(null)}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-6xl w-full border border-white/20 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-white">{selectedPhysiotherapist.name}</h3>
              <button onClick={() => setSelectedPhysiotherapist(null)} className="text-white/60 hover:text-white text-2xl">×</button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-center mb-6">
                  <div className="text-8xl mb-4">{selectedPhysiotherapist.image}</div>
                  <div className="text-blue-400 font-semibold text-lg mb-2">{selectedPhysiotherapist.specialization}</div>
                  <div className="text-white/80 mb-4">{selectedPhysiotherapist.qualification}</div>
                  
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.floor(selectedPhysiotherapist.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                    ))}
                    <span className="text-white/80 ml-2">{selectedPhysiotherapist.rating}</span>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-xl p-4 mb-6">
                  <h4 className="text-white font-semibold mb-2">Philosophy</h4>
                  <p className="text-white/80 italic">"{selectedPhysiotherapist.philosophy}"</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <Clock className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <div className="text-sm text-white/60">Experience</div>
                    <div className="text-white font-bold">{selectedPhysiotherapist.experience}</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <Users className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <div className="text-sm text-white/60">Patients Treated</div>
                    <div className="text-white font-bold">{selectedPhysiotherapist.patients}+</div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                      <Target className="w-5 h-5 text-blue-400 mr-2" />
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPhysiotherapist.expertise.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                      <Award className="w-5 h-5 text-yellow-400 mr-2" />
                      Achievements
                    </h4>
                    <div className="space-y-2">
                      {selectedPhysiotherapist.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center text-white/80">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                      <BookOpen className="w-5 h-5 text-purple-400 mr-2" />
                      Treatment Programs
                    </h4>
                    <div className="space-y-3">
                      {selectedPhysiotherapist.treatments.map((treatment, i) => (
                        <div key={i} className="bg-white/5 rounded-lg p-3">
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="text-white font-semibold">{treatment.name}</h5>
                            <span className="text-blue-400 font-bold">{treatment.price}</span>
                          </div>
                          <div className="text-white/60 text-sm">{treatment.duration}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-white font-semibold">Session Fee</div>
                        <div className="text-blue-400 font-bold text-2xl">{selectedPhysiotherapist.sessionFee}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-white/60 text-sm">Availability</div>
                        <div className="text-white font-semibold text-sm">{selectedPhysiotherapist.availability}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <button className={`flex-1 py-3 bg-gradient-to-r ${selectedPhysiotherapist.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                Book Appointment
              </button>
              <button className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300 flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                Message
              </button>
              <button onClick={() => setSelectedPhysiotherapist(null)} className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
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

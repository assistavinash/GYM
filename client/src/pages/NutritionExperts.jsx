import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Apple, 
  Heart, 
  Target,
  ArrowRight,
  Star,
  Clock,
  CheckCircle,
  Award,
  Users,
  Calendar,
  BookOpen,
  Zap,
  TrendingUp,
  User,
  MessageCircle,
  Phone,
  Leaf,
  Activity
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function NutritionExperts() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [activeTab, setActiveTab] = useState('experts');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nutritionExperts = [
    {
      id: 1,
      name: 'Dr. Ravi Gupta',
      specialization: 'Sports Nutrition & Performance',
      qualification: 'Ph.D. Sports Nutrition, RD',
      experience: '12 years',
      clients: 300,
      rating: 4.9,
      expertise: ['Sports nutrition', 'Performance optimization', 'Supplement guidance', 'Athletic recovery'],
      achievements: [
        'Sports nutritionist for national teams',
        'Published researcher in sports nutrition',
        'Certified strength & conditioning specialist',
        'Elite athlete nutrition consultant'
      ],
      philosophy: 'Nutrition is the foundation of peak performance. Every meal is an opportunity to fuel greatness.',
      programs: [
        { name: 'Athletic Performance Plan', duration: '12 weeks', price: '₹15,000' },
        { name: 'Competition Prep Nutrition', duration: '16 weeks', price: '₹20,000' },
        { name: 'Recovery & Regeneration', duration: '8 weeks', price: '₹12,000' }
      ],
      consultationFee: '₹2,000',
      availability: 'Mon-Sat: 9AM-6PM',
      image: '👨‍⚕️',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 2,
      name: 'Dr. Priya Sharma',
      specialization: 'Weight Management & Clinical Nutrition',
      qualification: 'M.Sc Clinical Nutrition, RD',
      experience: '10 years',
      clients: 250,
      rating: 4.8,
      expertise: ['Weight management', 'Diabetes care', 'Heart-healthy nutrition', 'Clinical nutrition'],
      achievements: [
        'Clinical nutrition specialist',
        'Weight management expert',
        'Diabetes educator certification',
        'Hospital nutrition consultant'
      ],
      philosophy: 'Sustainable weight management comes from understanding your body and creating lasting lifestyle changes.',
      programs: [
        { name: 'Healthy Weight Loss', duration: '12 weeks', price: '₹10,000' },
        { name: 'Diabetes Management', duration: '16 weeks', price: '₹14,000' },
        { name: 'Heart-Healthy Nutrition', duration: '10 weeks', price: '₹12,000' }
      ],
      consultationFee: '₹1,500',
      availability: 'Tue-Sun: 10AM-7PM',
      image: '👩‍⚕️',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 3,
      name: 'Kavya Reddy',
      specialization: 'Plant-Based & Holistic Nutrition',
      qualification: 'M.Sc Food & Nutrition, Holistic Health Coach',
      experience: '8 years',
      clients: 200,
      rating: 4.9,
      expertise: ['Plant-based nutrition', 'Holistic wellness', 'Gut health', 'Detox programs'],
      achievements: [
        'Certified holistic health coach',
        'Plant-based nutrition specialist',
        'Ayurvedic nutrition consultant',  
        'Wellness retreat facilitator'
      ],
      philosophy: 'Food is medicine. A plant-forward approach nurtures both body and planet for optimal health.',
      programs: [
        { name: 'Plant-Based Transition', duration: '8 weeks', price: '₹8,000' },
        { name: 'Gut Health Reset', duration: '6 weeks', price: '₹7,000' },
        { name: 'Holistic Wellness', duration: '12 weeks', price: '₹12,000' }
      ],
      consultationFee: '₹1,200',
      availability: 'Mon-Fri: 11AM-8PM',
      image: '👩‍🌾',
      color: 'from-green-400 to-lime-500'
    },
    {
      id: 4,
      name: 'Amit Patel',
      specialization: 'Fitness Nutrition & Body Composition',
      qualification: 'M.Sc Sports Science, Certified Nutrition Coach',
      experience: '9 years',
      clients: 180,
      rating: 4.7,
      expertise: ['Body composition', 'Muscle building', 'Fat loss', 'Metabolic health'],
      achievements: [
        'Body composition specialist',
        'Certified nutrition coach',
        'Fitness industry consultant',
        'Metabolic health expert'
      ],
      philosophy: 'Precision nutrition for body composition goals. Science-based approach for sustainable results.',
      programs: [
        { name: 'Lean Muscle Building', duration: '16 weeks', price: '₹16,000' },
        { name: 'Fat Loss Transformation', duration: '12 weeks', price: '₹12,000' },
        { name: 'Body Recomposition', duration: '20 weeks', price: '₹22,000' }
      ],
      consultationFee: '₹1,800',
      availability: 'Mon-Sat: 8AM-5PM',
      image: '👨‍💪',
      color: 'from-orange-400 to-red-500'
    },
    {
      id: 5,
      name: 'Dr. Meera Joshi',
      specialization: 'Women\'s Health & Hormonal Balance',
      qualification: 'Ph.D. Nutrition Science, Women\'s Health Specialist',
      experience: '11 years',
      clients: 220,
      rating: 4.9,
      expertise: ['Hormonal health', 'PCOS management', 'Pregnancy nutrition', 'Menopause support'],
      achievements: [
        'Women\'s health nutrition expert',
        'PCOS specialist certification',
        'Prenatal nutrition consultant',
        'Hormonal balance researcher'
      ],
      philosophy: 'Women\'s nutritional needs are unique. Balanced nutrition supports hormonal health and vitality.',
      programs: [
        { name: 'PCOS Management', duration: '12 weeks', price: '₹14,000' },
        { name: 'Pregnancy Nutrition', duration: '9 months', price: '₹25,000' },
        { name: 'Hormonal Balance', duration: '16 weeks', price: '₹18,000' }
      ],
      consultationFee: '₹2,200',
      availability: 'Tue-Sat: 10AM-6PM',
      image: '👩‍⚕️',
      color: 'from-pink-400 to-rose-500'
    },
    {
      id: 6,
      name: 'Rajesh Kumar',
      specialization: 'Senior Nutrition & Preventive Care',
      qualification: 'M.Sc Geriatric Nutrition, Clinical Dietitian',
      experience: '15 years',
      clients: 160,
      rating: 4.8,
      expertise: ['Senior nutrition', 'Chronic disease management', 'Preventive nutrition', 'Digestive health'],
      achievements: [
        'Geriatric nutrition specialist',
        'Chronic disease management expert',
        'Senior care facility consultant',
        'Preventive nutrition advocate'
      ],
      philosophy: 'Nutrition is the best medicine for aging gracefully and maintaining independence in later years.',
      programs: [
        { name: 'Healthy Aging Plan', duration: '12 weeks', price: '₹10,000' },
        { name: 'Chronic Disease Support', duration: '16 weeks', price: '₹15,000' },
        { name: 'Digestive Health', duration: '8 weeks', price: '₹8,000' }
      ],
      consultationFee: '₹1,600',
      availability: 'Mon-Fri: 9AM-5PM',
      image: '👨‍⚕️',
      color: 'from-purple-400 to-indigo-500'
    }
  ];

  const stats = [
    {
      icon: Users,
      number: '15+',
      label: 'Expert Nutritionists',
      description: 'Certified professionals'
    },
    {
      icon: Heart,
      number: '2000+',
      label: 'Success Stories',
      description: 'Lives transformed'
    },
    {
      icon: Star,
      number: '4.8',
      label: 'Average Rating',
      description: 'Client satisfaction'
    },
    {
      icon: Award,
      number: '20+',
      label: 'Specializations',
      description: 'Areas of expertise'
    }
  ];

  const specialties = [
    { name: 'All Experts', value: 'all', count: nutritionExperts.length },
    { name: 'Sports Nutrition', value: 'sports', count: 2 },
    { name: 'Weight Management', value: 'weight', count: 2 },
    { name: 'Plant-Based', value: 'plant', count: 1 },
    { name: 'Women\'s Health', value: 'womens', count: 1 },
    { name: 'Senior Care', value: 'senior', count: 1 }
  ];

  const getFilteredExperts = () => {
    if (selectedSpecialty === 'all') return nutritionExperts;
    
    const specialtyMap = {
      'sports': [1, 4],
      'weight': [2, 4],
      'plant': [3],
      'womens': [5],
      'senior': [6]
    };
    
    return nutritionExperts.filter(expert => 
      specialtyMap[selectedSpecialty]?.includes(expert.id)
    );
  };

  const services = [
    {
      icon: User,
      title: 'Individual Nutrition Consultation',
      description: 'Personalized one-on-one nutrition counseling and meal planning',
      features: ['Comprehensive assessment', 'Custom meal plans', 'Supplement guidance', 'Progress monitoring'],
      price: 'From ₹1,200/session'
    },
    {
      icon: BookOpen,
      title: 'Nutrition Education Programs',
      description: 'Comprehensive programs to transform your relationship with food',
      features: ['Evidence-based education', 'Practical workshops', 'Recipe collections', 'Lifestyle integration'],
      price: 'From ₹7,000/program'
    },
    {
      icon: Target,
      title: 'Specialized Diet Plans',
      description: 'Targeted nutrition plans for specific health conditions and goals',
      features: ['Medical nutrition therapy', 'Condition-specific plans', 'Regular adjustments', 'Health monitoring'],
      price: 'From ₹10,000/plan'
    },
    {
      icon: Phone,
      title: 'Online Nutrition Coaching',
      description: 'Remote nutrition guidance and support through digital platforms',
      features: ['Virtual consultations', 'Mobile app support', 'Daily check-ins', 'Flexible scheduling'],
      price: 'From ₹800/session'
    }
  ];

  const whyChooseNutritionExpert = [
    {
      icon: Award,
      title: 'Expert Credentials',
      description: 'All nutritionists hold advanced degrees and professional certifications'
    },
    {
      icon: Target,
      title: 'Personalized Approach',
      description: 'Every plan is customized based on your unique needs and lifestyle'
    },
    {
      icon: Activity,
      title: 'Evidence-Based Practice',
      description: 'Latest nutritional science and research guide all recommendations'
    },
    {
      icon: Heart,
      title: 'Holistic Health Focus',
      description: 'We address nutrition\'s impact on overall health and wellbeing'
    },
    {
      icon: TrendingUp,
      title: 'Measurable Results',
      description: 'Track progress with biomarkers, body composition, and health metrics'
    },
    {
      icon: Leaf,
      title: 'Sustainable Solutions',
      description: 'Long-term lifestyle changes rather than quick fixes or fad diets'
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Particles Background */}
      <div className="fixed inset-0 z-[1] w-full h-full min-h-screen pointer-events-none">
        <Particles
          particleCount={650}
          particleSpread={22}
          speed={0.14}
          particleColors={["#22C55E", "#10B981", "#F59E0B", "#3B82F6", "#EC4899"]}
          moveParticlesOnHover={true}
          particleHoverFactor={1.4}
          alphaParticles={true}
          particleBaseSize={130}
          sizeRandomness={1.6}
          cameraDistance={32}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-full border border-green-400/30 backdrop-blur-sm mb-6">
                <Apple className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-sm text-white/80">Expert Guidance</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Nutrition
                <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Experts
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-8">
                Transform your health with expert nutrition guidance. Our certified nutritionists and dietitians 
                provide personalized plans to help you achieve your wellness goals through optimal nutrition.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="group relative px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-green-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Book Consultation
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <button 
                  onClick={() => setActiveTab('services')}
                  className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
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
                  <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
              {['experts', 'services', 'why-choose'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Experts Tab */}
        {activeTab === 'experts' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Meet Our
                  <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    Nutrition Experts
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                  Our team of certified nutritionists and dietitians brings specialized expertise to help you achieve optimal health.
                </p>

                {/* Specialty Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {specialties.map((specialty) => (
                    <button
                      key={specialty.value}
                      onClick={() => setSelectedSpecialty(specialty.value)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedSpecialty === specialty.value
                          ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white'
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      {specialty.name} ({specialty.count})
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getFilteredExperts().map((expert, index) => (
                  <div key={expert.id} className="group cursor-pointer" onClick={() => setSelectedExpert(expert)}>
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                      <div className="text-center mb-6">
                        <div className="text-6xl mb-4">{expert.image}</div>
                        <h3 className="text-2xl font-bold text-white mb-2">{expert.name}</h3>
                        <p className="text-green-400 font-semibold mb-2">{expert.specialization}</p>
                        <p className="text-white/80 text-sm mb-4">{expert.qualification}</p>
                        
                        <div className="flex items-center justify-center gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(expert.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                          ))}
                          <span className="text-white/80 ml-2">{expert.rating}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4 mb-6">
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div className="bg-white/5 rounded-lg p-2">
                            <div className="text-xs text-white/60">Experience</div>
                            <div className="text-white font-semibold text-sm">{expert.experience}</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-2">
                            <div className="text-xs text-white/60">Clients</div>
                            <div className="text-white font-semibold text-sm">{expert.clients}+</div>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-sm text-white/60 mb-1">Consultation Fee</div>
                          <div className="text-green-400 font-bold text-lg">{expert.consultationFee}</div>
                        </div>
                        
                        <div>
                          <h4 className="text-white font-semibold mb-2 text-sm">Expertise:</h4>
                          <div className="flex flex-wrap gap-1">
                            {expert.expertise.slice(0, 2).map((skill, i) => (
                              <span key={i} className="px-2 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <button className={`w-full py-3 bg-gradient-to-r ${expert.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
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
                  Nutrition
                  <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    Services
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Comprehensive nutrition services tailored to your health goals and lifestyle needs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                      <div className="mb-6">
                        <div className="mb-4 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-white/80 mb-4">{service.description}</p>
                        <div className="text-green-400 font-bold text-xl mb-4">{service.price}</div>
                      </div>
                      
                      <div className="space-y-3">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-white/80">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <button className="w-full mt-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300">
                        Get Started
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-green-400/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">Need Help Choosing the Right Service?</h3>
                  <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                    Our nutrition experts can help you select the perfect program based on your health goals, dietary preferences, and lifestyle.
                  </p>
                  <Link to="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300">
                    Get Free Assessment
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
                  Why Choose Our
                  <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    Nutrition Experts
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Experience the difference that professional nutrition guidance makes in achieving lasting health results.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyChooseNutritionExpert.map((benefit, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 text-center h-full">
                      <div className="mb-6 mx-auto w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                      <p className="text-white/80 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-green-400/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Health?</h3>
                  <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                    Take the first step towards optimal nutrition and better health. Our experts are here to guide you on your wellness journey.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300">
                      Find Your Expert
                    </Link>
                    <button className="px-8 py-4 border border-white/20 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300">
                      Free Consultation
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
            <div className="bg-gradient-to-r from-green-400/20 to-emerald-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Nourish Your Body, Transform Your Life
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Stop struggling with confusing nutrition advice. Get personalized guidance from certified experts 
                who understand your unique needs and goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-green-400/25 transition-all duration-300 hover:scale-105">
                  Start Your Journey
                </Link>
                <Link to="/contact" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Expert Detail Modal */}
      {selectedExpert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedExpert(null)}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-6xl w-full border border-white/20 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-white">{selectedExpert.name}</h3>
              <button onClick={() => setSelectedExpert(null)} className="text-white/60 hover:text-white text-2xl">×</button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-center mb-6">
                  <div className="text-8xl mb-4">{selectedExpert.image}</div>
                  <div className="text-green-400 font-semibold text-lg mb-2">{selectedExpert.specialization}</div>
                  <div className="text-white/80 mb-4">{selectedExpert.qualification}</div>
                  
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.floor(selectedExpert.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                    ))}
                    <span className="text-white/80 ml-2">{selectedExpert.rating}</span>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-xl p-4 mb-6">
                  <h4 className="text-white font-semibold mb-2">Philosophy</h4>
                  <p className="text-white/80 italic">"{selectedExpert.philosophy}"</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <Clock className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <div className="text-sm text-white/60">Experience</div>
                    <div className="text-white font-bold">{selectedExpert.experience}</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <Users className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <div className="text-sm text-white/60">Clients Helped</div>
                    <div className="text-white font-bold">{selectedExpert.clients}+</div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                      <Target className="w-5 h-5 text-green-400 mr-2" />
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedExpert.expertise.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
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
                      {selectedExpert.achievements.map((achievement, i) => (
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
                      Nutrition Programs
                    </h4>
                    <div className="space-y-3">
                      {selectedExpert.programs.map((program, i) => (
                        <div key={i} className="bg-white/5 rounded-lg p-3">
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="text-white font-semibold">{program.name}</h5>
                            <span className="text-green-400 font-bold">{program.price}</span>
                          </div>
                          <div className="text-white/60 text-sm">{program.duration}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-white font-semibold">Consultation Fee</div>
                        <div className="text-green-400 font-bold text-2xl">{selectedExpert.consultationFee}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-white/60 text-sm">Availability</div>
                        <div className="text-white font-semibold text-sm">{selectedExpert.availability}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <button className={`flex-1 py-3 bg-gradient-to-r ${selectedExpert.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                Book Consultation
              </button>
              <button className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300 flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                Message
              </button>
              <button onClick={() => setSelectedExpert(null)} className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
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

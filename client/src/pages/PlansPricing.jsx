import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  Crown, 
  Zap,
  ArrowRight,
  Star,
  CheckCircle,
  X,
  Users,
  Calendar,
  Clock,
  Target,
  Trophy,
  Heart,
  Flame,
  Gift,
  Percent
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function PlansPricing() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [activeTab, setActiveTab] = useState('membership');
  const [billingCycle, setBillingCycle] = useState('monthly');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const membershipPlans = [
    {
      id: 1,
      name: 'Basic Fit',
      type: 'basic',
      popular: false,
      description: 'Perfect for fitness beginners and casual gym-goers',
      monthlyPrice: 1999,
      yearlyPrice: 19999,
      savings: 4000,
      features: [
        'Access to gym equipment',
        'Locker facility',
        'Basic fitness assessment',
        'Mobile app access',
        'Open gym timings: 6AM-10PM'
      ],
      notIncluded: [
        'Personal training sessions',
        'Group classes',
        'Nutrition consultation',
        'Guest passes'
      ],
      color: 'from-gray-400 to-slate-500',
      icon: Target,
      duration: 'Flexible membership',
      badge: null
    },
    {
      id: 2,
      name: 'Pro Fitness',
      type: 'premium',
      popular: true,
      description: 'Comprehensive fitness package with professional guidance',
      monthlyPrice: 3999,
      yearlyPrice: 39999,
      savings: 8000,
      features: [
        'All Basic Fit features',
        '4 personal training sessions/month',
        'Access to all group classes',
        'Nutrition consultation (quarterly)',
        'Progress tracking & reports',
        'Priority booking',
        '2 guest passes/month',
        'Steam & sauna access'
      ],
      notIncluded: [
        'Unlimited personal training',
        'Daily nutrition monitoring'
      ],
      color: 'from-blue-400 to-cyan-500',
      icon: Star,
      duration: 'Most popular choice',
      badge: 'Most Popular'
    },
    {
      id: 3,
      name: 'Elite Transform',
      type: 'premium-plus',
      popular: false,
      description: 'Ultimate transformation package with unlimited access',
      monthlyPrice: 6999,
      yearlyPrice: 69999,
      savings: 14000,
      features: [
        'All Pro Fitness features',
        'Unlimited personal training',
        'Daily nutrition monitoring',
        'Physiotherapy consultation',
        'Specialized programs (CrossFit, Yoga)',
        'VIP locker with amenities',
        'Unlimited guest passes',
        'Home workout plans',
        'Priority customer support',
        '24/7 gym access'
      ],
      notIncluded: [],
      color: 'from-yellow-400 to-orange-500',
      icon: Crown,
      duration: 'Premium experience',
      badge: 'Best Value'
    }
  ];

  const corporatePlans = [
    {
      id: 1,
      name: 'Team Fitness',
      employees: '5-20 employees',
      price: 2499,
      description: 'Perfect for small teams and startups',
      features: [
        'Group membership rates',
        'Team building sessions',
        'Health workshops',
        'Flexible scheduling',
        'Monthly progress reports'
      ],
      discount: '15% off individual rates'
    },
    {
      id: 2,
      name: 'Corporate Wellness',
      employees: '21-100 employees',
      price: 1999,
      description: 'Comprehensive wellness program for growing companies',
      features: [
        'All Team Fitness features',
        'On-site fitness assessments',
        'Nutrition seminars',
        'Stress management workshops',
        'Quarterly health camps',
        'Dedicated account manager'
      ],
      discount: '25% off individual rates'
    },
    {
      id: 3,
      name: 'Enterprise Health',
      employees: '100+ employees',
      price: 1499,
      description: 'Complete health and wellness solution for large organizations',
      features: [
        'All Corporate Wellness features',
        'Custom fitness programs',
        'Executive health screenings',
        'On-site physiotherapy',
        'Digital wellness platform',
        'Annual wellness summit',
        '24/7 support'
      ],
      discount: '35% off individual rates'
    }
  ];

  const personalTrainingPlans = [
    {
      id: 1,
      name: 'Starter Pack',
      sessions: 4,
      price: 6000,
      pricePerSession: 1500,
      description: 'Get started with professional guidance',
      features: [
        '4 one-on-one training sessions',
        'Fitness assessment',
        'Custom workout plan',
        'Basic nutrition guidance',
        'Progress tracking'
      ],
      validity: '1 month',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 2,
      name: 'Transformation',
      sessions: 12,
      price: 16000,
      pricePerSession: 1333,
      description: 'Comprehensive 3-month transformation program',
      features: [
        '12 personal training sessions',
        'Detailed nutrition plan',
        'Weekly progress reviews',
        'Supplement recommendations',
        'Lifestyle coaching',
        'Body composition analysis'
      ],
      validity: '3 months',
      color: 'from-blue-400 to-purple-500',
      popular: true
    },
    {
      id: 3,
      name: 'Elite Coaching',
      sessions: 24,
      price: 28000,
      pricePerSession: 1167,
      description: 'Premium coaching for serious fitness goals',
      features: [
        '24 personal training sessions',
        'Complete nutrition monitoring',
        'Performance optimization',
        'Recovery protocols',
        'Competition preparation',
        'VIP support access'
      ],
      validity: '6 months',
      color: 'from-orange-400 to-red-500'
    }
  ];

  const addOnServices = [
    {
      name: 'Nutrition Consultation',
      price: 2000,
      description: 'Detailed nutrition plan with expert dietitian',
      icon: Heart
    },
    {
      name: 'Physiotherapy Session',
      price: 1500,
      description: 'Professional physiotherapy for injury recovery',
      icon: Zap
    },
    {
      name: 'Group Classes (10 sessions)',
      price: 3000,
      description: 'Access to yoga, pilates, dance fitness classes',
      icon: Users
    },
    {
      name: 'Guest Pass (Day)',
      price: 500,
      description: 'Bring a friend for a day workout',
      icon: Gift
    }
  ];

  const stats = [
    {
      icon: Users,
      number: '5000+',
      label: 'Happy Members',
      description: 'Active memberships'
    },
    {
      icon: Percent,
      number: '95%',
      label: 'Retention Rate',
      description: 'Member satisfaction'
    },
    {
      icon: Trophy,
      number: '50+',
      label: 'Programs',
      description: 'Available options'
    },
    {
      icon: Star,
      number: '4.8',
      label: 'Average Rating',
      description: 'Member reviews'
    }
  ];

  const getCurrentPrice = (plan) => {
    if (billingCycle === 'yearly') {
      return plan.yearlyPrice;
    }
    return plan.monthlyPrice;
  };

  const getDiscountedPrice = (originalPrice, discountPercent) => {
    return originalPrice - (originalPrice * discountPercent / 100);
  };

  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Particles Background */}
      <div className="fixed inset-0 z-[1] w-full h-full min-h-screen pointer-events-none">
        <Particles
          particleCount={600}
          particleSpread={20}
          speed={0.13}
          particleColors={["#FACC15", "#3B82F6", "#10B981", "#F59E0B", "#EF4444"]}
          moveParticlesOnHover={true}
          particleHoverFactor={1.3}
          alphaParticles={true}
          particleBaseSize={135}
          sizeRandomness={1.3}
          cameraDistance={27}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full border border-yellow-400/30 backdrop-blur-sm mb-6">
                <CreditCard className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-sm text-white/80">Flexible Options</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Plans &
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Pricing
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-8">
                Choose from our flexible membership plans designed to fit your fitness goals and budget. 
                Start your transformation journey with options that work for you.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Start Your Journey
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <button 
                  onClick={() => setActiveTab('corporate')}
                  className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Corporate Plans
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
                  <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
              {['membership', 'personal-training', 'corporate', 'add-ons'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Plans Tab */}
        {activeTab === 'membership' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Membership
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Plans
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                  Choose the perfect membership plan that fits your fitness goals and lifestyle.
                </p>

                {/* Billing Toggle */}
                <div className="inline-flex items-center bg-white/10 rounded-full p-1 mb-8">
                  <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                      billingCycle === 'monthly'
                        ? 'bg-white text-gray-900'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle('yearly')}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                      billingCycle === 'yearly'
                        ? 'bg-white text-gray-900'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Yearly
                    <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                      Save up to 20%
                    </span>
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {membershipPlans.map((plan, index) => (
                  <div key={plan.id} className={`group cursor-pointer relative ${plan.popular ? 'lg:-mt-8' : ''}`} onClick={() => setSelectedPlan(plan)}>
                    <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full ${plan.popular ? 'border-yellow-400/50 shadow-lg shadow-yellow-400/20' : ''}`}>
                      {plan.badge && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                            {plan.badge}
                          </span>
                        </div>
                      )}
                      
                      <div className="text-center mb-8">
                        <div className={`mb-4 mx-auto w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center`}>
                          <plan.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <p className="text-white/80 mb-4">{plan.description}</p>
                        
                        <div className="mb-4">
                          <div className="text-4xl font-bold text-white">
                            ₹{getCurrentPrice(plan).toLocaleString()}
                            <span className="text-lg font-normal text-white/60">
                              /{billingCycle === 'yearly' ? 'year' : 'month'}
                            </span>
                          </div>
                          {billingCycle === 'yearly' && (
                            <div className="text-green-400 text-sm font-semibold mt-1">
                              Save ₹{plan.savings.toLocaleString()} annually
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-4 mb-8">
                        <div>
                          <h4 className="text-white font-semibold mb-3">What's Included:</h4>
                          <div className="space-y-2">
                            {plan.features.map((feature, i) => (
                              <div key={i} className="flex items-center text-white/80">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {plan.notIncluded.length > 0 && (
                          <div>
                            <h4 className="text-white/60 font-semibold mb-3">Not Included:</h4>
                            <div className="space-y-2">
                              {plan.notIncluded.map((feature, i) => (
                                <div key={i} className="flex items-center text-white/60">
                                  <X className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <button className={`w-full py-4 bg-gradient-to-r ${plan.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300 text-lg`}>
                        Choose Plan
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">Not Sure Which Plan is Right for You?</h3>
                  <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                    Our fitness consultants can help you choose the perfect plan based on your goals and preferences.
                  </p>
                  <Link to="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300">
                    Get Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Personal Training Tab */}
        {activeTab === 'personal-training' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Personal Training
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Packages
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Accelerate your fitness journey with professional one-on-one training sessions.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {personalTrainingPlans.map((plan, index) => (
                  <div key={plan.id} className={`group cursor-pointer ${plan.popular ? 'lg:-mt-4' : ''}`}>
                    <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full ${plan.popular ? 'border-blue-400/50 shadow-lg shadow-blue-400/20' : ''}`}>
                      {plan.popular && (
                        <div className="text-center mb-4">
                          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}
                      
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <p className="text-white/80 mb-6">{plan.description}</p>
                        
                        <div className="mb-4">
                          <div className="text-4xl font-bold text-white mb-2">
                            ₹{plan.price.toLocaleString()}
                          </div>
                          <div className="text-green-400 text-sm font-semibold mb-2">
                            ₹{plan.pricePerSession}/session
                          </div>
                          <div className="text-white/60 text-sm">
                            {plan.sessions} sessions • Valid for {plan.validity}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-8">
                        {plan.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-white/80">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <button className={`w-full py-4 bg-gradient-to-r ${plan.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                        Select Package
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Corporate Plans Tab */}
        {activeTab === 'corporate' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Corporate
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Wellness Plans
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Invest in your team's health and productivity with our corporate wellness programs.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {corporatePlans.map((plan, index) => (
                  <div key={plan.id} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <p className="text-yellow-400 font-semibold mb-2">{plan.employees}</p>
                        <p className="text-white/80 mb-6">{plan.description}</p>
                        
                        <div className="mb-4">
                          <div className="text-4xl font-bold text-white mb-2">
                            ₹{plan.price}
                            <span className="text-lg font-normal text-white/60">/employee/month</span>
                          </div>
                          <div className="text-green-400 text-sm font-semibold">
                            {plan.discount}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-8">
                        {plan.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-white/80">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <button className="w-full py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300">
                        Get Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">Custom Corporate Solutions</h3>
                  <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                    Have specific needs? We can create a customized wellness program tailored to your organization's requirements.
                  </p>
                  <Link to="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300">
                    Contact Sales Team
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Add-ons Tab */}
        {activeTab === 'add-ons' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Additional
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Services
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Enhance your fitness journey with our premium add-on services and specialized programs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {addOnServices.map((service, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                          <p className="text-white/80 mb-4">{service.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="text-2xl font-bold text-yellow-400">
                              ₹{service.price.toLocaleString()}
                            </div>
                            <button className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300">
                              Add Service
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">Bundle & Save</h3>
                  <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                    Combine multiple services and get up to 25% off. Talk to our team about creating a custom package.
                  </p>
                  <Link to="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300">
                    Create Custom Bundle
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Start Your Fitness Journey?
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied members who have transformed their lives with our comprehensive 
                fitness programs and expert guidance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-105">
                  Join Now
                </Link>
                <Link to="/contact" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Ask Questions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

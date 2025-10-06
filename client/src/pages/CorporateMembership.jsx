import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Users, 
  TrendingUp,
  ArrowRight,
  Star,
  Shield,
  Calendar,
  Award,
  Heart,
  Clock,
  Target,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  Activity,
  BarChart3
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function CorporateMembership() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedTab, setSelectedTab] = useState('benefits');
  const [selectedPackage, setSelectedPackage] = useState('wellness');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    { key: 'benefits', label: 'Benefits', icon: TrendingUp },
    { key: 'packages', label: 'Packages', icon: Briefcase },
    { key: 'services', label: 'Services', icon: Activity },
    { key: 'success', label: 'Success Stories', icon: Award }
  ];

  const corporatePackages = [
    {
      id: 1,
      name: 'Corporate Wellness',
      subtitle: 'Complete Employee Health Program',
      description: 'Comprehensive wellness program designed to improve employee health and productivity',
      price: '₹2,500',
      duration: 'per employee/year',
      minEmployees: 50,
      maxEmployees: 200,
      features: [
        'Full gym access during business hours',
        'Monthly health assessments',
        'Nutrition counseling sessions',
        'Stress management workshops',
        'Team building fitness activities',
        'Quarterly wellness reports',
        'Dedicated account manager',
        'Flexible scheduling options'
      ],
      additionalServices: [
        'On-site fitness consultations',
        'Employee wellness seminars',
        'Customized workout programs',
        'Health screening events'
      ],
      color: 'from-blue-400 to-cyan-500',
      icon: Heart,
      popular: false,
      savings: '40% vs individual memberships'
    },
    {
      id: 2,
      name: 'Executive Fitness',
      subtitle: 'Premium Package for Leadership',
      description: 'Exclusive fitness program tailored for executives and senior management',
      price: '₹5,000',
      duration: 'per executive/year',
      minEmployees: 10,
      maxEmployees: 50,
      features: [
        '24/7 gym access with VIP areas',
        'Personal training sessions (12/year)',
        'Executive health checkups',
        'Priority booking for facilities',
        'Concierge fitness services',
        'Nutrition and meal planning',
        'Stress relief programs',
        'Executive lounge access'
      ],
      additionalServices: [
        'Private training rooms',
        'Executive wellness retreats',
        'Health coaching services',
        'Priority customer support'
      ],
      color: 'from-purple-400 to-pink-500',
      icon: Award,
      popular: true,
      savings: '35% vs premium individual plans'
    },
    {
      id: 3,
      name: 'Team Fitness',
      subtitle: 'Group Training & Team Building',
      description: 'Focus on team building through fitness activities and group challenges',
      price: '₹1,800',
      duration: 'per employee/year',
      minEmployees: 20,
      maxEmployees: 100,
      features: [
        'Group fitness classes',
        'Team building activities',
        'Inter-department competitions',
        'Group training sessions',
        'Team progress tracking',
        'Motivational challenges',
        'Group workout programs',
        'Team wellness events'
      ],
      additionalServices: [
        'Corporate sports leagues',
        'Team fitness challenges',
        'Group nutrition workshops',
        'Team building retreats'
      ],
      color: 'from-green-400 to-emerald-500',
      icon: Users,
      popular: false,
      savings: '45% vs individual memberships'
    },
    {
      id: 4,
      name: 'Startup Special',
      subtitle: 'Affordable Plan for Growing Companies',
      description: 'Budget-friendly wellness solution for startups and small businesses',
      price: '₹1,200',
      duration: 'per employee/year',
      minEmployees: 10,
      maxEmployees: 50,
      features: [
        'Basic gym access',
        'Group fitness classes',
        'Health awareness sessions',
        'Basic wellness programs',
        'Flexible payment options',
        'Scalable membership plans',
        'Online fitness resources',
        'Employee wellness tracking'
      ],
      additionalServices: [
        'Startup wellness workshops',
        'Budget-friendly programs',
        'Growth-oriented plans',
        'Community events'
      ],
      color: 'from-orange-400 to-red-500',
      icon: TrendingUp,
      popular: false,
      savings: '50% vs individual memberships'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Productivity',
      description: 'Studies show 23% increase in productivity among employees with fitness programs',
      statistic: '+23%',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Reduced Healthcare Costs',
      description: 'Average 28% reduction in healthcare premiums and medical expenses',
      statistic: '-28%',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Higher Employee Retention',
      description: 'Companies with wellness programs see 40% lower turnover rates',
      statistic: '+40%',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Decreased Absenteeism',
      description: 'Fit employees take 27% fewer sick days throughout the year',
      statistic: '-27%',
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: Star,
      title: 'Enhanced Company Culture',
      description: 'Builds stronger team bonds and positive workplace environment',
      statistic: '95%',
      color: 'from-indigo-400 to-purple-500'
    },
    {
      icon: Target,
      title: 'Improved Employee Satisfaction',
      description: 'Higher job satisfaction and better work-life balance',
      statistic: '+32%',
      color: 'from-teal-400 to-green-500'
    }
  ];

  const services = [
    {
      icon: Activity,
      title: 'On-site Fitness Programs',
      description: 'Bring fitness directly to your workplace with mobile trainers and equipment'
    },
    {
      icon: BarChart3,
      title: 'Health Analytics & Reporting',
      description: 'Comprehensive health metrics and wellness program effectiveness reports'
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Customized schedules that work around your business hours and requirements'
    },
    {
      icon: Award,
      title: 'Wellness Challenges',
      description: 'Engaging company-wide fitness challenges and competitions with rewards'
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Dedicated account management and round-the-clock customer support'
    },
    {
      icon: CheckCircle,
      title: 'Custom Solutions',
      description: 'Tailored wellness programs designed specifically for your company culture'
    }
  ];

  const successStories = [
    {
      company: 'Tech Innovators Pvt Ltd',
      employees: 150,
      industry: 'Technology',
      results: [
        '35% reduction in sick days',
        '42% increase in employee satisfaction',
        '₹2.8L saved in healthcare costs',
        '89% program participation rate'
      ],
      testimonial: "The corporate wellness program has transformed our workplace culture. Our employees are healthier, happier, and more productive than ever before.",
      ceo: 'Rajesh Kumar, CEO',
      duration: '18 months',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      company: 'Marketing Solutions Inc',
      employees: 85,
      industry: 'Marketing & Advertising',
      results: [
        '28% improvement in productivity',
        '45% reduction in stress levels',
        '₹1.5L healthcare savings',
        '92% employee retention rate'
      ],
      testimonial: "Our team is more energized and collaborative. The fitness program has become an integral part of our company identity.",
      ceo: 'Priya Sharma, Founder',
      duration: '12 months',
      color: 'from-purple-400 to-pink-500'
    },
    {
      company: 'Financial Services Corp',
      employees: 200,
      industry: 'Financial Services',
      results: [
        '40% decrease in healthcare claims',
        '38% better work-life balance',
        '₹4.2L annual savings',
        '94% program satisfaction'
      ],
      testimonial: "The ROI on this wellness investment has exceeded our expectations. Healthier employees mean a healthier bottom line.",
      ceo: 'Amit Patel, Managing Director',
      duration: '24 months',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  const stats = [
    {
      icon: Building,
      number: '250+',
      label: 'Corporate Clients',
      description: 'Companies trust us'
    },
    {
      icon: Users,
      number: '15,000+',
      label: 'Corporate Members',
      description: 'Employees enrolled'
    },
    {
      icon: TrendingUp,
      number: '89%',
      label: 'Satisfaction Rate',
      description: 'Client satisfaction'
    },
    {
      icon: Award,
      number: '12+',
      label: 'Industry Awards',
      description: 'Recognition received'
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Particles Background */}
      <div className="fixed inset-0 z-[1] w-full h-full min-h-screen pointer-events-none">
        <Particles
          particleCount={600}
          particleSpread={30}
          speed={0.12}
          particleColors={["#3B82F6", "#10B981", "#8B5CF6", "#F59E0B", "#EF4444"]}
          moveParticlesOnHover={true}
          particleHoverFactor={1.2}
          alphaParticles={true}
          particleBaseSize={120}
          sizeRandomness={1.4}
          cameraDistance={32}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full border border-blue-400/30 backdrop-blur-sm mb-6">
                <Building className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-sm text-white/80">Corporate Wellness</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Corporate
                <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Membership
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-8">
                Invest in your most valuable asset - your employees. Our corporate wellness programs 
                boost productivity, reduce healthcare costs, and create a healthier, happier workplace.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="group relative px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Get Quote
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <button 
                  onClick={() => setSelectedTab('packages')}
                  className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <Briefcase className="w-5 h-5 mr-2" />
                  View Packages
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
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap justify-center mb-12 bg-white/5 rounded-2xl p-2 gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setSelectedTab(tab.key)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 flex-1 justify-center ${
                    selectedTab === tab.key
                      ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-lg'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Tab */}
        {selectedTab === 'benefits' && (
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why Choose Corporate Wellness?</h2>
                <p className="text-white/80">Proven benefits that transform your business</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full text-center">
                      <div className={`mb-6 mx-auto w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                      <p className="text-white/80 mb-6">{benefit.description}</p>
                      
                      <div className={`text-3xl font-black bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                        {benefit.statistic}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Packages Tab */}
        {selectedTab === 'packages' && (
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Corporate Packages</h2>
                <p className="text-white/80">Choose the perfect wellness solution for your team</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {corporatePackages.map((pkg, index) => (
                  <div key={pkg.id} className="group cursor-pointer" onClick={() => setSelectedPlan(pkg)}>
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full relative">
                      {pkg.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full text-white text-sm font-bold">
                          MOST POPULAR
                        </div>
                      )}

                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-12 h-12 bg-gradient-to-r ${pkg.color} rounded-xl flex items-center justify-center`}>
                          <pkg.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">{pkg.price}</div>
                          <div className="text-white/60 text-sm">{pkg.duration}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                      <p className="text-blue-400 font-semibold mb-4">{pkg.subtitle}</p>
                      <p className="text-white/80 mb-6">{pkg.description}</p>
                      
                      <div className="mb-6">
                        <div className="flex justify-between text-sm mb-4">
                          <span className="text-white/60">Employee Range:</span>
                          <span className="text-white">{pkg.minEmployees} - {pkg.maxEmployees}</span>
                        </div>
                        <div className="flex justify-between text-sm mb-4">
                          <span className="text-white/60">Savings:</span>
                          <span className="text-green-400 font-semibold">{pkg.savings}</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Features</h4>
                        <div className="space-y-2">
                          {pkg.features.slice(0, 4).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start text-white/80 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                              {feature}
                            </div>
                          ))}
                          {pkg.features.length > 4 && (
                            <div className="text-blue-400 text-sm">
                              +{pkg.features.length - 4} more features
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <button className={`w-full py-3 bg-gradient-to-r ${pkg.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                        Get Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Services Tab */}
        {selectedTab === 'services' && (
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Corporate Services</h2>
                <p className="text-white/80">Comprehensive wellness solutions for your business</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                      <div className="mb-4 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-white/80">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Success Stories Tab */}
        {selectedTab === 'success' && (
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Success Stories</h2>
                <p className="text-white/80">Real results from real companies</p>
              </div>

              <div className="grid lg:grid-cols-1 gap-8">
                {successStories.map((story, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                      <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-1/3">
                          <div className={`w-16 h-16 bg-gradient-to-r ${story.color} rounded-2xl flex items-center justify-center mb-4`}>
                            <Building className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">{story.company}</h3>
                          <p className="text-blue-400 mb-2">{story.industry}</p>
                          <p className="text-white/60 text-sm">{story.employees} employees • {story.duration}</p>
                        </div>
                        
                        <div className="lg:w-2/3">
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            {story.results.map((result, resultIndex) => (
                              <div key={resultIndex} className="bg-white/5 rounded-lg p-3">
                                <div className="text-green-400 font-semibold text-sm">{result}</div>
                              </div>
                            ))}
                          </div>
                          
                          <blockquote className="text-white/80 italic mb-4 text-lg">
                            "{story.testimonial}"
                          </blockquote>
                          
                          <div className="text-blue-400 font-semibold">- {story.ceo}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-blue-400/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Workplace?
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies that have invested in their employees' health and seen remarkable returns. 
                Get a custom quote for your organization today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  Request Consultation
                </Link>
                <a href="tel:+91-9876543210" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Package Detail Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedPlan(null)}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-2xl w-full border border-white/20 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">{selectedPlan.name}</h3>
              <button onClick={() => setSelectedPlan(null)} className="text-white/60 hover:text-white text-2xl">×</button>
            </div>
            
            <div className="text-center mb-6">
              <div className={`mb-4 mx-auto w-20 h-20 bg-gradient-to-r ${selectedPlan.color} rounded-2xl flex items-center justify-center`}>
                <selectedPlan.icon className="w-10 h-10 text-white" />
              </div>
              <p className="text-white/80 text-lg leading-relaxed mb-4">{selectedPlan.description}</p>
              <div className="text-3xl font-bold text-white mb-2">{selectedPlan.price}</div>
              <div className="text-white/60">{selectedPlan.duration}</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-white/60 text-sm">Employee Range</div>
                <div className="text-white font-semibold">{selectedPlan.minEmployees} - {selectedPlan.maxEmployees}</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-white/60 text-sm">Savings</div>
                <div className="text-green-400 font-semibold">{selectedPlan.savings}</div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">All Features Included</h4>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {selectedPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-start text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Additional Services</h4>
              <div className="space-y-2">
                {selectedPlan.additionalServices.map((service, index) => (
                  <div key={index} className="flex items-start text-white/70 text-sm">
                    <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                    {service}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className={`flex-1 py-3 bg-gradient-to-r ${selectedPlan.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                Request Quote
              </button>
              <button onClick={() => setSelectedPlan(null)} className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
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

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Heart, 
  Home,
  ArrowRight,
  Star,
  Gift,
  Shield,
  Calendar,
  Clock,
  CheckCircle,
  Baby,
  User,
  Crown,
  Sparkles,
  Award,
  Target,
  Activity,
  Smile
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function FamilyPackages() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedTab, setSelectedTab] = useState('packages');
  const [familySize, setFamilySize] = useState(4);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    { key: 'packages', label: 'Family Packages', icon: Users },
    { key: 'benefits', label: 'Benefits', icon: Heart },
    { key: 'activities', label: 'Family Activities', icon: Activity },
    { key: 'testimonials', label: 'Success Stories', icon: Star }
  ];

  const familyPackages = [
    {
      id: 1,
      name: 'Family Starter',
      subtitle: 'Perfect for Small Families',
      description: 'Ideal package for families with 2-3 members starting their fitness journey together',
      members: '2-3 Members',
      price: '₹18,000',
      originalPrice: '₹25,000',
      duration: '6 Months',
      discount: '28%',
      features: [
        'Full gym access for all members',
        'Group family fitness classes',
        'Kids zone access (5-12 years)',
        'Family health assessments',
        'Shared locker facilities',
        'Weekend family yoga sessions',
        'Nutrition consultation',
        'Progress tracking for all'
      ],
      ageGroups: ['Adults (18+)', 'Children (5-17)'],
      specialInclusions: [
        'Family workout programs',
        'Parent-child activities',
        'Healthy lifestyle workshops'
      ],
      color: 'from-green-400 to-emerald-500',
      icon: Home,
      popular: false,
      savings: '₹7,000'
    },
    {
      id: 2,
      name: 'Family Premium',
      subtitle: 'Most Popular Choice',
      description: 'Comprehensive fitness solution for families of 4-5 members with premium benefits',
      members: '4-5 Members',
      price: '₹32,000',
      originalPrice: '₹50,000',
      duration: '12 Months',
      discount: '36%',
      features: [
        'All Family Starter benefits',
        'Personal training sessions (2/month)',
        'Priority class bookings',
        'Family swimming pool access',
        'Teen fitness programs',
        'Senior-friendly activities',
        'Monthly family challenges',
        'Complimentary guest passes (4/month)'
      ],
      ageGroups: ['Adults (18+)', 'Teenagers (13-17)', 'Children (5-12)'],
      specialInclusions: [
        'Multi-generational programs',
        'Family sports leagues',
        'Seasonal family events',
        'Health monitoring for all ages'
      ],
      color: 'from-blue-400 to-purple-500',
      icon: Users,
      popular: true,
      savings: '₹18,000'
    },
    {
      id: 3,
      name: 'Family Elite',
      subtitle: 'Ultimate Family Experience',
      description: 'Premium package for large families (6+ members) with exclusive benefits and services',
      members: '6+ Members',
      price: '₹45,000',
      originalPrice: '₹75,000',
      duration: '12 Months',
      discount: '40%',
      features: [
        'All Family Premium benefits',
        'Private family training sessions',
        'VIP locker room access',
        'Unlimited guest passes',
        'Exclusive family events',
        'Dedicated family coordinator',
        'Customized meal plans',
        'Priority customer support'
      ],
      ageGroups: ['All Ages Welcome'],
      specialInclusions: [
        'Extended family programs',
        'Grandparent fitness activities',
        'Multi-sport access',
        'Exclusive family retreats'
      ],
      color: 'from-orange-400 to-red-500',
      icon: Crown,
      popular: false,
      savings: '₹30,000'
    },
    {
      id: 4,
      name: 'Active Seniors + Family',
      subtitle: 'Three Generation Fitness',
      description: 'Special package designed for families including senior members (60+)',
      members: '3-6 Members',
      price: '₹28,000',
      originalPrice: '₹40,000',
      duration: '12 Months',
      discount: '30%',
      features: [
        'Senior-friendly equipment access',
        'Low-impact exercise programs',
        'Family health monitoring',
        'Intergenerational activities',
        'Physical therapy support',
        'Chair yoga and gentle exercises',
        'Medical fitness programs',
        'Flexible timing options'
      ],
      ageGroups: ['Seniors (60+)', 'Adults (18+)', 'Children (5-17)'],
      specialInclusions: [
        'Senior wellness programs',
        'Balance and mobility training',
        'Chronic condition management',
        'Social engagement activities'
      ],
      color: 'from-teal-400 to-green-500',
      icon: Heart,
      popular: false,
      savings: '₹12,000'
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Stronger Family Bonds',
      description: 'Exercise together and build lasting memories while improving health',
      color: 'from-pink-400 to-red-500'
    },
    {
      icon: Shield,
      title: 'Cost Effective',
      description: 'Save up to 40% compared to individual memberships for each family member',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Users,
      title: 'All Ages Welcome',
      description: 'Programs designed for every family member from kids to grandparents',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Family-friendly timing with weekend and evening sessions available',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Target,
      title: 'Healthy Lifestyle',
      description: 'Instill healthy habits in children and maintain them as a family unit',
      color: 'from-orange-400 to-yellow-500'
    },
    {
      icon: Smile,
      title: 'Fun & Motivation',
      description: 'Stay motivated with family support and make fitness enjoyable for everyone',
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  const familyActivities = [
    {
      name: 'Family Yoga Sessions',
      description: 'Gentle yoga classes designed for all family members to practice together',
      ageRange: 'All Ages',
      duration: '45 minutes',
      schedule: 'Weekends',
      icon: Heart,
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Parent-Child Bootcamp',
      description: 'Fun obstacle courses and challenges for parents and children to tackle together',
      ageRange: '8+ with Parents',
      duration: '30 minutes',
      schedule: 'Saturdays',
      icon: Target,
      color: 'from-orange-400 to-red-500'
    },
    {
      name: 'Family Swimming',
      description: 'Dedicated family swim times with water games and swimming lessons',
      ageRange: 'All Ages',
      duration: '60 minutes',
      schedule: 'Daily',
      icon: Activity,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      name: 'Kids Fitness Games',
      description: 'Age-appropriate fitness activities disguised as fun games and play',
      ageRange: '5-12 years',
      duration: '30 minutes',
      schedule: 'Weekdays',
      icon: Baby,
      color: 'from-green-400 to-emerald-500'
    },
    {
      name: 'Teen Strength Training',
      description: 'Supervised strength training sessions specifically designed for teenagers',
      ageRange: '13-17 years',
      duration: '45 minutes',
      schedule: 'Weekdays',
      icon: User,
      color: 'from-indigo-400 to-purple-500'
    },
    {
      name: 'Grandparent Fitness',
      description: 'Low-impact exercises and activities perfect for senior family members',
      ageRange: '60+ years',
      duration: '30 minutes',
      schedule: 'Mornings',
      icon: Heart,
      color: 'from-teal-400 to-green-500'
    }
  ];

  const testimonials = [
    {
      family: 'The Kumar Family',
      members: 5,
      duration: '18 months',
      story: 'Our family has become so much closer since we started working out together. The kids love the activities, and we adults have lost a combined 45 kg!',
      results: ['45kg total weight loss', 'Improved family bonding', 'Better sleep for everyone', 'Kids are more active'],
      image: '/images/families/kumar-family.jpg',
      package: 'Family Premium',
      color: 'from-blue-400 to-purple-500'
    },
    {
      family: 'The Patel Household',
      members: 7,
      duration: '2 years',
      story: 'Three generations working out together! My mother-in-law (68) does chair yoga while the grandkids play. It\'s beautiful to watch.',
      results: ['3 generations active', 'Grandma more energetic', 'Kids developed healthy habits', 'Family traditions created'],
      image: '/images/families/patel-family.jpg',
      package: 'Active Seniors + Family',
      color: 'from-teal-400 to-green-500'
    },
    {
      family: 'The Sharma Trio',
      members: 3,
      duration: '8 months',
      story: 'As a single parent, finding time for fitness was impossible. Now my twins and I work out together, and it\'s our favorite time of the day!',
      results: ['Quality time together', 'Kids love fitness', 'Mom stress relief', 'Healthy routine established'],
      image: '/images/families/sharma-family.jpg',
      package: 'Family Starter',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Family Members',
      description: 'Active families'
    },
    {
      icon: Heart,
      number: '40%',
      label: 'Average Savings',
      description: 'Vs individual plans'
    },
    {
      icon: Star,
      number: '4.9',
      label: 'Family Rating',
      description: 'Satisfaction score'
    },
    {
      icon: Gift,
      number: '100%',
      label: 'Fun Guarantee',
      description: 'Family enjoyment'
    }
  ];

  const calculateSavings = (size) => {
    const individualRate = 5000; // per person per 6 months
    const individualCost = size * individualRate * 2; // 12 months
    let familyRate;
    
    if (size <= 3) familyRate = 18000;
    else if (size <= 5) familyRate = 32000;
    else familyRate = 45000;
    
    return individualCost - familyRate;
  };

  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Particles Background */}
      <div className="fixed inset-0 z-[1] w-full h-full min-h-screen pointer-events-none">
        <Particles
          particleCount={600}
          particleSpread={25}
          speed={0.1}
          particleColors={["#10B981", "#3B82F6", "#F59E0B", "#EF4444", "#8B5CF6"]}
          moveParticlesOnHover={true}
          particleHoverFactor={1.3}
          alphaParticles={true}
          particleBaseSize={115}
          sizeRandomness={1.6}
          cameraDistance={28}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full border border-green-400/30 backdrop-blur-sm mb-6">
                <Users className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-sm text-white/80">Family Fitness</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Family
                <span className="block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Packages
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-8">
                Bring your family together through fitness! Our family packages offer incredible value while 
                helping your loved ones build healthy habits that last a lifetime.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="group relative px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-green-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Start Family Journey
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <button 
                  onClick={() => setSelectedTab('benefits')}
                  className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Family Benefits
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
                  <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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

        {/* Family Size Calculator */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white text-center mb-6">Calculate Your Family Savings</h3>
              
              <div className="text-center mb-6">
                <label className="block text-white/80 mb-4">How many family members?</label>
                <div className="flex items-center justify-center gap-4">
                  <button 
                    onClick={() => setFamilySize(Math.max(2, familySize - 1))}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-3xl font-bold text-white w-16 text-center">{familySize}</span>
                  <button 
                    onClick={() => setFamilySize(Math.min(10, familySize + 1))}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-lg text-white/80 mb-2">Your Annual Savings:</div>
                <div className="text-4xl font-bold text-green-400 mb-4">₹{calculateSavings(familySize).toLocaleString()}</div>
                <div className="text-white/60">Compared to individual memberships</div>
              </div>
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
                      ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg'
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

        {/* Packages Tab */}
        {selectedTab === 'packages' && (
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Choose Your Family Package</h2>
                <p className="text-white/80">Packages designed for every family size and budget</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {familyPackages.map((pkg, index) => (
                  <div key={pkg.id} className="group cursor-pointer" onClick={() => setSelectedPackage(pkg)}>
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
                          <div className="text-white/60 text-sm line-through">{pkg.originalPrice}</div>
                          <div className="text-green-400 text-sm font-semibold">{pkg.discount} OFF</div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                      <p className="text-blue-400 font-semibold mb-2">{pkg.subtitle}</p>
                      <p className="text-white/80 mb-4">{pkg.description}</p>
                      
                      <div className="mb-6">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-white/60">Family Size:</span>
                          <span className="text-white font-semibold">{pkg.members}</span>
                        </div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-white/60">Duration:</span>
                          <span className="text-white">{pkg.duration}</span>
                        </div>
                        <div className="flex justify-between text-sm mb-4">
                          <span className="text-white/60">You Save:</span>
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
                        Choose Package
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Benefits Tab */}
        {selectedTab === 'benefits' && (
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Family Fitness Benefits</h2>
                <p className="text-white/80">Why families that workout together, stay together</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full text-center">
                      <div className={`mb-6 mx-auto w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                      <p className="text-white/80">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Activities Tab */}
        {selectedTab === 'activities' && (
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Family Activities</h2>
                <p className="text-white/80">Fun fitness activities for every family member</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {familyActivities.map((activity, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                      <div className={`mb-4 w-12 h-12 bg-gradient-to-r ${activity.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <activity.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{activity.name}</h3>
                      <p className="text-white/80 mb-4">{activity.description}</p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-white/60">Age Range:</span>
                          <span className="text-blue-400">{activity.ageRange}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Duration:</span>
                          <span className="text-white">{activity.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Schedule:</span>
                          <span className="text-green-400">{activity.schedule}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonials Tab */}
        {selectedTab === 'testimonials' && (
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Family Success Stories</h2>
                <p className="text-white/80">Real families, real transformations</p>
              </div>

              <div className="grid lg:grid-cols-1 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                      <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-1/3">
                          <div className={`w-16 h-16 bg-gradient-to-r ${testimonial.color} rounded-2xl flex items-center justify-center mb-4`}>
                            <Users className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">{testimonial.family}</h3>
                          <p className="text-blue-400 mb-2">{testimonial.package}</p>
                          <p className="text-white/60 text-sm">{testimonial.members} members • {testimonial.duration}</p>
                        </div>
                        
                        <div className="lg:w-2/3">
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            {testimonial.results.map((result, resultIndex) => (
                              <div key={resultIndex} className="bg-white/5 rounded-lg p-3">
                                <div className="text-green-400 font-semibold text-sm">{result}</div>
                              </div>
                            ))}
                          </div>
                          
                          <blockquote className="text-white/80 italic text-lg">
                            "{testimonial.story}"
                          </blockquote>
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
            <div className="bg-gradient-to-r from-green-400/20 to-blue-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Start Your Family Fitness Journey Today!
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join hundreds of families who have discovered the joy of staying fit together. 
                Build healthy habits, create lasting memories, and save money too!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-green-400/25 transition-all duration-300 hover:scale-105">
                  Join as Family
                </Link>
                <Link to="/contact" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Ask Questions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Package Detail Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedPackage(null)}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-2xl w-full border border-white/20 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">{selectedPackage.name}</h3>
              <button onClick={() => setSelectedPackage(null)} className="text-white/60 hover:text-white text-2xl">×</button>
            </div>
            
            <div className="text-center mb-6">
              <div className={`mb-4 mx-auto w-20 h-20 bg-gradient-to-r ${selectedPackage.color} rounded-2xl flex items-center justify-center`}>
                <selectedPackage.icon className="w-10 h-10 text-white" />
              </div>
              <p className="text-white/80 text-lg leading-relaxed mb-4">{selectedPackage.description}</p>
              <div className="text-3xl font-bold text-white mb-2">{selectedPackage.price}</div>
              <div className="text-white/60 line-through">{selectedPackage.originalPrice}</div>
              <div className="text-green-400 font-semibold">Save {selectedPackage.savings}</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-white/60 text-sm">Family Size</div>
                <div className="text-white font-semibold">{selectedPackage.members}</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-white/60 text-sm">Duration</div>
                <div className="text-white font-semibold">{selectedPackage.duration}</div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Age Groups Included</h4>
              <div className="flex flex-wrap gap-2">
                {selectedPackage.ageGroups.map((age, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm">
                    {age}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">All Features Included</h4>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {selectedPackage.features.map((feature, index) => (
                  <div key={index} className="flex items-start text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Special Inclusions</h4>
              <div className="space-y-2">
                {selectedPackage.specialInclusions.map((inclusion, index) => (
                  <div key={index} className="flex items-start text-white/70 text-sm">
                    <Sparkles className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                    {inclusion}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className={`flex-1 py-3 bg-gradient-to-r ${selectedPackage.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                Choose This Package
              </button>
              <button onClick={() => setSelectedPackage(null)} className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
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

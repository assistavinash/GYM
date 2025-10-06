import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Gift, 
  Clock, 
  Users,
  ArrowRight,
  Star,
  Percent,
  Calendar,
  Crown,
  Zap,
  Heart,
  Trophy,
  Tag,
  Timer,
  Sparkles,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Promotions() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPromo, setSelectedPromo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    setIsVisible(true);
    
    // Update countdown timers
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const newTimeLeft = {};
      
      promotions.forEach(promo => {
        if (promo.endDate) {
          const endTime = new Date(promo.endDate).getTime();
          const difference = endTime - now;
          
          if (difference > 0) {
            newTimeLeft[promo.id] = {
              days: Math.floor(difference / (1000 * 60 * 60 * 24)),
              hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
              minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
              seconds: Math.floor((difference % (1000 * 60)) / 1000)
            };
          }
        }
      });
      
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const categories = [
    { key: 'all', label: 'All Offers', count: 12 },
    { key: 'membership', label: 'Membership', count: 4 },
    { key: 'training', label: 'Training', count: 3 },
    { key: 'seasonal', label: 'Seasonal', count: 3 },
    { key: 'student', label: 'Student', count: 2 }
  ];

  const promotions = [
    {
      id: 1,
      title: 'Diwali Festival Special',
      subtitle: '50% OFF First 3 Months',
      description: 'Celebrate the festival of lights with our biggest membership discount of the year',
      discount: '50%',
      originalPrice: '₹15,000',
      salePrice: '₹7,500',
      category: 'seasonal',
      type: 'Limited Time',
      endDate: '2025-10-31',
      features: ['3 Months Membership', 'Personal Training Session', 'Nutrition Consultation', 'Gym Kit'],
      terms: ['Valid for new members only', 'Cannot be combined with other offers', 'Payment required upfront'],
      color: 'from-orange-400 to-red-500',
      icon: Sparkles,
      badge: 'FESTIVAL SPECIAL',
      priority: 'high',
      saved: '₹7,500'
    },
    {
      id: 2,
      title: 'Student Power Pack',
      subtitle: '40% Student Discount',
      description: 'Special rates for students with valid ID. Get fit while you study!',
      discount: '40%',
      originalPrice: '₹8,000',
      salePrice: '₹4,800',
      category: 'student',
      type: 'Student Offer',
      endDate: '2025-12-31',
      features: ['6 Months Membership', 'Flexible Timings', 'Study Break Area', 'Healthy Snacks'],
      terms: ['Valid student ID required', 'Age limit 18-25 years', 'Proof of enrollment needed'],
      color: 'from-blue-400 to-cyan-500',
      icon: Crown,
      badge: 'STUDENT SPECIAL',
      priority: 'medium',
      saved: '₹3,200'
    },
    {
      id: 3,
      title: 'New Year Resolution',
      subtitle: 'Buy 1 Year, Get 3 Months FREE',
      description: 'Start your fitness journey right! 15 months for the price of 12',
      discount: '20%',
      originalPrice: '₹36,000',
      salePrice: '₹28,800',
      category: 'membership',
      type: 'Annual Deal',
      endDate: '2025-01-31',
      features: ['15 Months Membership', '12 Personal Training Sessions', 'Nutrition Plan', 'Body Composition Analysis'],
      terms: ['Annual payment required', 'Non-refundable after 30 days', 'Transferable once'],
      color: 'from-green-400 to-emerald-500',
      icon: Trophy,
      badge: 'BEST VALUE',
      priority: 'high',
      saved: '₹7,200'
    },
    {
      id: 4,
      title: 'Couple Membership Deal',
      subtitle: '30% OFF for Two',
      description: 'Train together, stay together! Special rates for couples and friends',
      discount: '30%',
      originalPrice: '₹20,000',
      salePrice: '₹14,000',
      category: 'membership',
      type: 'Partner Deal',
      endDate: '2025-11-30',
      features: ['6 Months for 2 People', 'Partner Workouts', 'Couples Training Session', 'Progress Tracking'],
      terms: ['Both members must join together', 'Same membership duration', 'Joint responsibility'],
      color: 'from-pink-400 to-purple-500',
      icon: Heart,
      badge: 'COUPLES SPECIAL',
      priority: 'medium',
      saved: '₹6,000'
    },
    {
      id: 5,
      title: 'Morning Warrior',
      subtitle: 'Early Bird 25% Discount',
      description: 'For the early risers! Special rates for morning workout sessions',
      discount: '25%',
      originalPrice: '₹12,000',
      salePrice: '₹9,000',
      category: 'training',
      type: 'Time-based',
      endDate: '2025-12-31',
      features: ['6 Months Morning Access', 'Personal Trainer', 'Less Crowded', 'Energy Boost'],
      terms: ['Valid 5 AM - 10 AM only', 'Weekdays only', 'No weekend access'],
      color: 'from-yellow-400 to-orange-500',
      icon: Zap,
      badge: 'EARLY BIRD',
      priority: 'low',
      saved: '₹3,000'
    },
    {
      id: 6,
      title: 'Corporate Wellness',
      subtitle: 'Group Discounts Available',
      description: 'Special rates for corporate teams and employee wellness programs',
      discount: '35%',
      originalPrice: '₹50,000',
      salePrice: '₹32,500',
      category: 'membership',
      type: 'Corporate',
      endDate: '2025-12-31',
      features: ['Team Memberships', 'Wellness Programs', 'Health Assessments', 'Corporate Events'],
      terms: ['Minimum 10 employees', 'Corporate agreement required', 'Bulk payment'],
      color: 'from-indigo-400 to-purple-500',
      icon: Users,
      badge: 'CORPORATE',
      priority: 'medium',
      saved: '₹17,500'
    },
    {
      id: 7,
      title: 'Senior Citizens Special',
      subtitle: '45% OFF for 60+ Age',
      description: 'Special fitness programs designed for senior citizens with expert guidance',
      discount: '45%',
      originalPrice: '₹10,000',
      salePrice: '₹5,500',
      category: 'membership',
      type: 'Senior Special',
      endDate: '2025-12-31',
      features: ['6 Months Membership', 'Senior-friendly Equipment', 'Health Monitoring', 'Gentle Exercises'],
      terms: ['Age proof required', 'Medical clearance needed', 'Special timings'],
      color: 'from-teal-400 to-green-500',
      icon: Heart,
      badge: 'SENIOR SPECIAL',
      priority: 'medium',
      saved: '₹4,500'
    },
    {
      id: 8,
      title: 'Weekend Warrior',
      subtitle: 'Weekend-Only Membership',
      description: 'Perfect for busy professionals - weekend exclusive access',
      discount: '30%',
      originalPrice: '₹8,000',
      salePrice: '₹5,600',
      category: 'training',
      type: 'Weekend Only',
      endDate: '2025-12-31',
      features: ['Weekend Access', 'Saturday Classes', 'Sunday Sessions', 'Flexible Schedule'],
      terms: ['Saturday-Sunday only', 'No weekday access', 'Holiday access included'],
      color: 'from-purple-400 to-pink-500',
      icon: Calendar,
      badge: 'WEEKEND ONLY',
      priority: 'low',
      saved: '₹2,400'
    },
    {
      id: 9,
      title: 'Refer & Earn',
      subtitle: 'Get ₹2000 for Every Referral',
      description: 'Bring your friends and earn rewards! Both you and your friend get benefits',
      discount: 'Reward',
      originalPrice: 'Earn ₹2000',
      salePrice: 'Per Referral',
      category: 'training',
      type: 'Referral Program',
      endDate: '2025-12-31',
      features: ['Cash Rewards', 'Friend Gets Discount', 'Unlimited Referrals', 'Quick Payout'],
      terms: ['Friend must complete 3 months', 'Reward after friend joins', 'No limit on referrals'],
      color: 'from-green-400 to-blue-500',
      icon: Gift,
      badge: 'REFERRAL PROGRAM',
      priority: 'medium',
      saved: 'Earn ₹2000'
    },
    {
      id: 10,
      title: 'Summer Body Challenge',
      subtitle: 'Transform in 90 Days',
      description: '3-month intensive program with guaranteed results or money back',
      discount: '20%',
      originalPrice: '₹25,000',
      salePrice: '₹20,000',
      category: 'seasonal',
      type: 'Challenge Program',
      endDate: '2025-11-15',
      features: ['90-Day Program', 'Personal Trainer', 'Nutrition Plan', 'Progress Photos'],
      terms: ['Commitment required', 'Attendance minimum 80%', 'Results guaranteed'],
      color: 'from-orange-400 to-yellow-500',
      icon: Trophy,
      badge: 'CHALLENGE',
      priority: 'high',
      saved: '₹5,000'
    },
    {
      id: 11,
      title: 'Family Fitness Pack',
      subtitle: 'Whole Family, One Price',
      description: 'Get the entire family fit with our special family membership rates',
      discount: '40%',
      originalPrice: '₹30,000',
      salePrice: '₹18,000',
      category: 'membership',
      type: 'Family Deal',
      endDate: '2025-12-31',
      features: ['Up to 4 Family Members', 'Kids Programs', 'Family Classes', 'Health Tracking'],
      terms: ['Same household only', 'Kids programs included', 'Age restrictions apply'],
      color: 'from-blue-400 to-purple-500',
      icon: Users,
      badge: 'FAMILY SPECIAL',
      priority: 'medium',
      saved: '₹12,000'
    },
    {
      id: 12,
      title: 'Flash Sale',
      subtitle: '24 Hours Only - 60% OFF',
      description: 'Limited time flash sale! Grab this incredible offer before it expires',
      discount: '60%',
      originalPrice: '₹15,000',
      salePrice: '₹6,000',
      category: 'seasonal',
      type: 'Flash Sale',
      endDate: '2025-10-06',
      features: ['6 Months Membership', 'All Classes Included', 'Equipment Access', 'Guest Passes'],
      terms: ['24 hours only', 'Limited quantity', 'First come first serve'],
      color: 'from-red-400 to-pink-500',
      icon: Timer,
      badge: 'FLASH SALE',
      priority: 'urgent',
      saved: '₹9,000'
    }
  ];

  const stats = [
    {
      icon: Gift,
      number: '12+',
      label: 'Active Offers',
      description: 'Current promotions'
    },
    {
      icon: Users,
      number: '2000+',
      label: 'Members Saved',
      description: 'This month'
    },
    {
      icon: Percent,
      number: '60%',
      label: 'Max Discount',
      description: 'Best offer'
    },
    {
      icon: Star,
      number: '4.9',
      label: 'Satisfaction',
      description: 'Member rating'
    }
  ];

  const getFilteredPromotions = () => {
    if (selectedCategory === 'all') return promotions;
    return promotions.filter(promo => promo.category === selectedCategory);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return 'bg-red-500 text-white';
      case 'high': return 'bg-orange-500 text-white';
      case 'medium': return 'bg-yellow-500 text-black';
      case 'low': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const formatTimeLeft = (time) => {
    if (!time) return 'Expired';
    return `${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s`;
  };

  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Particles Background */}
      <div className="fixed inset-0 z-[1] w-full h-full min-h-screen pointer-events-none">
        <Particles
          particleCount={600}
          particleSpread={20}
          speed={0.08}
          particleColors={["#F59E0B", "#EF4444", "#10B981", "#3B82F6", "#8B5CF6"]}
          moveParticlesOnHover={true}
          particleHoverFactor={1.4}
          alphaParticles={true}
          particleBaseSize={100}
          sizeRandomness={2.0}
          cameraDistance={25}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-400/20 to-red-500/20 rounded-full border border-orange-400/30 backdrop-blur-sm mb-6">
                <Gift className="w-4 h-4 text-orange-400 mr-2" />
                <span className="text-sm text-white/80">Special Offers</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Amazing
                <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Promotions
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-8">
                Discover incredible deals and exclusive offers on memberships, personal training, and fitness programs. 
                Save big while investing in your health and fitness journey!
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="group relative px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-orange-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Claim Offer
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <button 
                  onClick={() => setSelectedCategory('seasonal')}
                  className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Festival Offers
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

        {/* Filter Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.key
                      ? 'bg-gradient-to-r from-orange-400 to-red-500 text-white'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Promotions Grid */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Current Offers</h2>
              <p className="text-white/80">
                {getFilteredPromotions().length} amazing deals available
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredPromotions().map((promo, index) => (
                <div key={promo.id} className="group cursor-pointer" onClick={() => setSelectedPromo(promo)}>
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full relative overflow-hidden">
                    {/* Priority Badge */}
                    <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-bold ${getPriorityColor(promo.priority)}`}>
                      {promo.badge}
                    </div>

                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${promo.color} rounded-xl flex items-center justify-center`}>
                        <promo.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-400">{promo.discount}</div>
                        <div className="text-white/60 text-xs">OFF</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{promo.title}</h3>
                    <p className="text-lg font-semibold text-orange-400 mb-2">{promo.subtitle}</p>
                    <p className="text-white/80 text-sm mb-4">{promo.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-white/60 text-sm line-through">{promo.originalPrice}</span>
                        <span className="text-green-400 font-bold text-lg">{promo.salePrice}</span>
                      </div>
                      <div className="text-orange-400 text-sm font-semibold">
                        You Save: {promo.saved}
                      </div>
                    </div>

                    {/* Countdown Timer */}
                    {timeLeft[promo.id] && (
                      <div className="mb-4 p-3 bg-white/5 rounded-lg">
                        <div className="text-white/60 text-xs mb-1">Offer Expires In:</div>
                        <div className="text-red-400 font-bold">
                          {formatTimeLeft(timeLeft[promo.id])}
                        </div>
                      </div>
                    )}
                    
                    <button className={`w-full py-3 bg-gradient-to-r ${promo.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                      Claim Offer
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {getFilteredPromotions().length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🎁</div>
                <h3 className="text-2xl font-bold text-white mb-4">No Offers Found</h3>
                <p className="text-white/80 mb-6">
                  No promotions match your current filter selection.
                </p>
                <button 
                  onClick={() => setSelectedCategory('all')}
                  className="px-6 py-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300"
                >
                  Show All Offers
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-orange-400/20 to-red-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Don't Miss Out!
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                These amazing offers won't last forever. Join thousands of members who have already 
                transformed their lives while saving big on their fitness journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-orange-400/25 transition-all duration-300 hover:scale-105">
                  Join Now & Save
                </Link>
                <Link to="/contact" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Ask Questions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Promotion Detail Modal */}
      {selectedPromo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedPromo(null)}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-2xl w-full border border-white/20 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">{selectedPromo.title}</h3>
              <button onClick={() => setSelectedPromo(null)} className="text-white/60 hover:text-white text-2xl">×</button>
            </div>
            
            <div className="text-center mb-6">
              <div className={`mb-4 mx-auto w-20 h-20 bg-gradient-to-r ${selectedPromo.color} rounded-2xl flex items-center justify-center`}>
                <selectedPromo.icon className="w-10 h-10 text-white" />
              </div>
              <p className="text-white/80 text-lg leading-relaxed mb-4">{selectedPromo.description}</p>
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${getPriorityColor(selectedPromo.priority)}`}>
                {selectedPromo.badge}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-white/60 text-sm">Original Price</div>
                <div className="text-white font-semibold line-through">{selectedPromo.originalPrice}</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-white/60 text-sm">Sale Price</div>
                <div className="text-green-400 font-bold text-lg">{selectedPromo.salePrice}</div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">What's Included</h4>
              <div className="space-y-2">
                {selectedPromo.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Terms & Conditions</h4>
              <div className="space-y-2">
                {selectedPromo.terms.map((term, index) => (
                  <div key={index} className="flex items-start text-white/70 text-sm">
                    <AlertCircle className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                    {term}
                  </div>
                ))}
              </div>
            </div>

            {/* Countdown Timer in Modal */}
            {timeLeft[selectedPromo.id] && (
              <div className="mb-6 p-4 bg-white/5 rounded-xl text-center">
                <div className="text-white/60 text-sm mb-2">Offer Expires In:</div>
                <div className="text-red-400 font-bold text-lg">
                  {formatTimeLeft(timeLeft[selectedPromo.id])}
                </div>
              </div>
            )}
            
            <div className="flex gap-4">
              <button className={`flex-1 py-3 bg-gradient-to-r ${selectedPromo.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                Claim This Offer
              </button>
              <button onClick={() => setSelectedPromo(null)} className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
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

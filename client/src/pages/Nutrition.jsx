import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Apple, 
  Salad, 
  Droplets, 
  Clock, 
  TrendingUp, 
  Heart,
  ArrowRight,
  BookOpen,
  Calculator,
  Target,
  Award,
  Users,
  Star,
  ChefHat,
  Activity
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Nutrition() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('plans');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [bmiData, setBmiData] = useState({ height: '', weight: '', bmi: null, category: '' });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nutritionPlans = [
    {
      id: 1,
      name: 'Weight Loss Plan',
      goal: 'Lose Weight',
      duration: '3 months',
      calories: '1500-1800',
      description: 'Scientifically designed meal plan to help you lose weight sustainably',
      features: ['Low-calorie meals', 'High protein foods', 'Portion control guides', 'Weekly meal prep'],
      image: '🍎',
      color: 'from-green-400 to-emerald-500',
      macros: { protein: 30, carbs: 40, fats: 30 }
    },
    {
      id: 2,
      name: 'Muscle Gain Plan',
      goal: 'Build Muscle',
      duration: '4 months',
      calories: '2500-3000',
      description: 'High-protein nutrition plan designed to support muscle growth and recovery',
      features: ['High protein intake', 'Post-workout meals', 'Supplement guidance', 'Bulking strategies'],
      image: '💪',
      color: 'from-blue-400 to-cyan-500',
      macros: { protein: 35, carbs: 45, fats: 20 }
    },
    {
      id: 3,
      name: 'Maintenance Plan',
      goal: 'Maintain Weight',
      duration: '6 months',
      calories: '2000-2300',
      description: 'Balanced nutrition plan to maintain your current weight and energy levels',
      features: ['Balanced macros', 'Flexible eating', 'Long-term habits', 'Lifestyle integration'],
      image: '⚖️',
      color: 'from-yellow-400 to-amber-500',
      macros: { protein: 25, carbs: 50, fats: 25 }
    },
    {
      id: 4,
      name: 'Athletic Performance',
      goal: 'Peak Performance',
      duration: '3 months',
      calories: '2800-3500',
      description: 'Elite nutrition plan for athletes and serious fitness enthusiasts',
      features: ['Pre/post workout meals', 'Timing strategies', 'Performance supplements', 'Recovery nutrition'],
      image: '🏆',
      color: 'from-purple-400 to-pink-500',
      macros: { protein: 30, carbs: 50, fats: 20 }
    },
    {
      id: 5,
      name: 'Vegan Fitness Plan',
      goal: 'Plant-Based Fitness',
      duration: '4 months',
      calories: '2000-2500',
      description: 'Complete plant-based nutrition plan for vegans and vegetarians',
      features: ['Plant-based proteins', 'B12 supplementation', 'Iron-rich foods', 'Amino acid profiles'],
      image: '🌱',
      color: 'from-teal-400 to-green-500',
      macros: { protein: 25, carbs: 55, fats: 20 }
    },
    {
      id: 6,
      name: 'Keto Transformation',
      goal: 'Ketosis & Fat Loss',
      duration: '3 months',
      calories: '1800-2200',
      description: 'Low-carb, high-fat ketogenic plan for rapid fat loss and mental clarity',
      features: ['Ultra-low carbs', 'High healthy fats', 'Ketone monitoring', 'Electrolyte balance'],
      image: '🥑',
      color: 'from-orange-400 to-red-500',
      macros: { protein: 25, carbs: 5, fats: 70 }
    }
  ];

  const nutritionTips = [
    {
      title: 'Hydration First',
      description: 'Drink at least 8-10 glasses of water daily for optimal metabolism',
      icon: Droplets,
      color: 'text-blue-400'
    },
    {
      title: 'Meal Timing',
      description: 'Eat every 3-4 hours to maintain steady energy and metabolism',
      icon: Clock,
      color: 'text-green-400'
    },
    {
      title: 'Protein Priority',
      description: 'Include protein in every meal to support muscle growth and repair',
      icon: Target,
      color: 'text-purple-400'
    },
    {
      title: 'Mindful Eating',
      description: 'Practice portion control and eat slowly to improve digestion',
      icon: Heart,
      color: 'text-red-400'
    }
  ];

  const nutritionServices = [
    {
      title: 'Personal Nutrition Consultation',
      description: 'One-on-one session with certified nutritionists',
      price: '₹2,999',
      duration: '60 minutes',
      includes: ['Body composition analysis', 'Custom meal plan', 'Supplement recommendations', 'Follow-up support'],
      icon: Users,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Meal Prep Coaching',
      description: 'Learn to prepare healthy meals efficiently',
      price: '₹1,999',
      duration: '90 minutes',
      includes: ['Meal prep strategies', 'Shopping lists', 'Time-saving tips', 'Recipe collection'],
      icon: ChefHat,
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Body Composition Analysis',
      description: 'Detailed analysis of your body composition',
      price: '₹999',
      duration: '30 minutes',
      includes: ['InBody scan', 'Muscle mass analysis', 'Fat percentage', 'Progress tracking'],
      icon: Activity,
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Supplement Guidance',
      description: 'Expert advice on supplements for your goals',
      price: '₹1,499',
      duration: '45 minutes',
      includes: ['Supplement audit', 'Goal-specific recommendations', 'Timing protocols', 'Budget optimization'],
      icon: Award,
      color: 'from-orange-400 to-red-500'
    }
  ];

  const stats = [
    {
      icon: Users,
      number: '2000+',
      label: 'Nutrition Clients',
      description: 'Successfully transformed'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Nutrition Experts',
      description: 'Certified professionals'
    },
    {
      icon: BookOpen,
      number: '50+',
      label: 'Meal Plans',
      description: 'Customized options'
    },
    {
      icon: Star,
      number: '4.9',
      label: 'Success Rate',
      description: 'Client satisfaction'
    }
  ];

  const calculateBMI = () => {
    if (bmiData.height && bmiData.weight) {
      const heightInMeters = bmiData.height / 100;
      const bmi = (bmiData.weight / (heightInMeters * heightInMeters)).toFixed(1);
      let category = '';
      
      if (bmi < 18.5) category = 'Underweight';
      else if (bmi < 25) category = 'Normal';
      else if (bmi < 30) category = 'Overweight';
      else category = 'Obese';
      
      setBmiData(prev => ({ ...prev, bmi, category }));
    }
  };

  const getBMIColor = (category) => {
    switch (category) {
      case 'Underweight': return 'text-blue-400';
      case 'Normal': return 'text-green-400';
      case 'Overweight': return 'text-yellow-400';
      case 'Obese': return 'text-red-400';
      default: return 'text-white';
    }
  };

  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Particles Background */}
      <div className="fixed inset-0 z-[1] w-full h-full min-h-screen pointer-events-none">
        <Particles
          particleCount={800}
          particleSpread={15}
          speed={0.1}
          particleColors={["#FACC15", "#10B981", "#3B82F6", "#8B5CF6", "#F59E0B"]}
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
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-full border border-green-400/30 backdrop-blur-sm mb-6">
                <Apple className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-sm text-white/80">Nutrition & Wellness</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Fuel Your
                <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Transformation
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
                Discover the power of proper nutrition with our expert-designed meal plans, personalized guidance, 
                and science-backed strategies to achieve your fitness goals.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="group relative px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-green-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Get Nutrition Plan
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <button 
                  onClick={() => setActiveTab('calculator')}
                  className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  BMI Calculator
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
              {['plans', 'services', 'tips', 'calculator'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        {activeTab === 'plans' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Nutrition
                  <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    Plans
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Choose from our scientifically designed nutrition plans tailored to your specific goals.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {nutritionPlans.map((plan, index) => (
                  <div key={plan.id} className="group cursor-pointer" onClick={() => setSelectedPlan(plan)}>
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                      <div className="text-center mb-6">
                        <div className="text-4xl mb-4">{plan.image}</div>
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <p className="text-white/80 mb-4">{plan.description}</p>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-white/80">
                          <span>Goal:</span>
                          <span className="text-white font-semibold">{plan.goal}</span>
                        </div>
                        <div className="flex justify-between text-white/80">
                          <span>Duration:</span>
                          <span className="text-white font-semibold">{plan.duration}</span>
                        </div>
                        <div className="flex justify-between text-white/80">
                          <span>Calories:</span>
                          <span className="text-white font-semibold">{plan.calories}/day</span>
                        </div>
                      </div>

                      {/* Macro Distribution */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Macro Distribution</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-white/80">Protein</span>
                            <span className="text-blue-400">{plan.macros.protein}%</span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <div className="bg-blue-400 h-2 rounded-full" style={{width: `${plan.macros.protein}%`}}></div>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-white/80">Carbs</span>
                            <span className="text-green-400">{plan.macros.carbs}%</span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <div className="bg-green-400 h-2 rounded-full" style={{width: `${plan.macros.carbs}%`}}></div>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-white/80">Fats</span>
                            <span className="text-orange-400">{plan.macros.fats}%</span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <div className="bg-orange-400 h-2 rounded-full" style={{width: `${plan.macros.fats}%`}}></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        {plan.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-white/80 text-sm">
                            <div className={`w-2 h-2 bg-gradient-to-r ${plan.color} rounded-full mr-3`}></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <button className={`w-full py-3 bg-gradient-to-r ${plan.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                        Choose Plan
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

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
                  Professional nutrition services to support your health and fitness journey.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {nutritionServices.map((service, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">{service.price}</div>
                          <div className="text-white/60 text-sm">{service.duration}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-white/80 mb-6">{service.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        <h4 className="text-white font-semibold">Includes:</h4>
                        {service.includes.map((item, i) => (
                          <div key={i} className="flex items-center text-white/80 text-sm">
                            <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                            {item}
                          </div>
                        ))}
                      </div>
                      
                      <button className={`w-full py-3 bg-gradient-to-r ${service.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                        Book Service
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === 'tips' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Nutrition
                  <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    Tips
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Expert tips and guidelines to help you make better nutrition choices.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {nutritionTips.map((tip, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 text-center">
                      <div className="mb-4">
                        <tip.icon className={`w-12 h-12 ${tip.color} mx-auto`} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{tip.title}</h3>
                      <p className="text-white/80 leading-relaxed">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Nutrition Guidelines */}
              <div className="mt-16 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Essential Nutrition Guidelines</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Pre-Workout Nutrition</h4>
                    <ul className="space-y-2 text-white/80">
                      <li>• Eat 1-3 hours before training</li>
                      <li>• Focus on carbohydrates for energy</li>
                      <li>• Include some protein for amino acids</li>
                      <li>• Stay hydrated throughout</li>
                      <li>• Avoid high-fiber foods before training</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Post-Workout Recovery</h4>
                    <ul className="space-y-2 text-white/80">
                      <li>• Consume protein within 30 minutes</li>
                      <li>• Include carbs to replenish glycogen</li>
                      <li>• Hydrate to replace lost fluids</li>
                      <li>• Consider electrolyte replacement</li>
                      <li>• Plan a balanced meal within 2 hours</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'calculator' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  BMI
                  <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    Calculator
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Calculate your Body Mass Index to understand your current health status.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6">Calculate Your BMI</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-white mb-2">Height (cm)</label>
                        <input
                          type="number"
                          value={bmiData.height}
                          onChange={(e) => setBmiData(prev => ({ ...prev, height: e.target.value }))}
                          placeholder="Enter your height"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-green-400 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-white mb-2">Weight (kg)</label>
                        <input
                          type="number"
                          value={bmiData.weight}
                          onChange={(e) => setBmiData(prev => ({ ...prev, weight: e.target.value }))}
                          placeholder="Enter your weight"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-green-400 transition-colors"
                        />
                      </div>
                      <button
                        onClick={calculateBMI}
                        className="w-full py-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300"
                      >
                        Calculate BMI
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-6">Your Results</h3>
                    {bmiData.bmi ? (
                      <div className="space-y-4">
                        <div className="text-center p-6 bg-white/10 rounded-xl">
                          <div className="text-3xl font-bold text-white mb-2">{bmiData.bmi}</div>
                          <div className={`text-lg font-semibold ${getBMIColor(bmiData.category)}`}>
                            {bmiData.category}
                          </div>
                        </div>
                        <div className="space-y-2 text-white/80 text-sm">
                          <div>• Underweight: Below 18.5</div>
                          <div>• Normal: 18.5 - 24.9</div>
                          <div>• Overweight: 25 - 29.9</div>
                          <div>• Obese: 30 and above</div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center p-6 bg-white/10 rounded-xl">
                        <Calculator className="w-12 h-12 text-white/60 mx-auto mb-4" />
                        <p className="text-white/80">Enter your height and weight to calculate your BMI</p>
                      </div>
                    )}
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
                Ready to Transform Your Nutrition?
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Take the first step towards a healthier lifestyle with our expert nutrition guidance and personalized meal plans.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-green-400/25 transition-all duration-300 hover:scale-105">
                  Start Your Journey
                </Link>
                <Link to="/contact" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Consult Expert
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Plan Detail Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedPlan(null)}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-2xl w-full border border-white/20 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-white">{selectedPlan.name}</h3>
              <button onClick={() => setSelectedPlan(null)} className="text-white/60 hover:text-white text-2xl">×</button>
            </div>
            
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{selectedPlan.image}</div>
              <p className="text-white/80 text-lg">{selectedPlan.description}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-xl font-bold text-white">{selectedPlan.goal}</div>
                <div className="text-white/60">Goal</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-xl font-bold text-white">{selectedPlan.duration}</div>
                <div className="text-white/60">Duration</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-xl font-bold text-white">{selectedPlan.calories}</div>
                <div className="text-white/60">Daily Calories</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-xl font-bold text-green-400">Custom</div>
                <div className="text-white/60">Meal Plans</div>
              </div>
            </div>
            
            <div className="space-y-3 mb-8">
              <h4 className="text-xl font-semibold text-white">Features:</h4>
              {selectedPlan.features.map((feature, i) => (
                <div key={i} className="flex items-center text-white/80">
                  <div className={`w-3 h-3 bg-gradient-to-r ${selectedPlan.color} rounded-full mr-3`}></div>
                  {feature}
                </div>
              ))}
            </div>
            
            <div className="flex gap-4">
              <button className={`flex-1 py-3 bg-gradient-to-r ${selectedPlan.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                Choose This Plan
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

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Dumbbell, 
  Target, 
  Trophy,
  Zap,
  Users,
  Star,
  ArrowRight,
  Play,
  Clock,
  Award,
  CheckCircle,
  BarChart3,
  TrendingUp,
  Activity,
  Flame,
  Shield,
  Heart
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function StrengthTraining() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [activeTab, setActiveTab] = useState('programs');
  const [selectedLevel, setSelectedLevel] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const strengthPrograms = [
    {
      id: 1,
      name: 'Powerlifting Foundations',
      level: 'beginner',
      duration: '12 weeks',
      intensity: 'Moderate',
      description: 'Master the fundamental lifts: squat, bench press, and deadlift',
      image: '🏋️‍♂️',
      features: ['Perfect Form Training', 'Progressive Loading', 'Safety Focus', 'Competition Prep'],
      details: 'Build a solid foundation in powerlifting with focus on proper technique and gradual strength building. Perfect for beginners wanting to master the big three lifts.',
      workouts: 3,
      equipment: ['Barbell', 'Weight Plates', 'Squat Rack', 'Bench'],
      color: 'from-blue-400 to-cyan-500',
      benefits: ['Increase Max Strength', 'Build Muscle Mass', 'Improve Bone Density', 'Boost Confidence'],
      targetMuscles: ['Legs', 'Chest', 'Back', 'Core']
    },
    {
      id: 2,
      name: 'Hypertrophy Builder',
      level: 'intermediate',
      duration: '16 weeks',
      intensity: 'High',
      description: 'Focused muscle building program with progressive overload principles',
      image: '💪',
      features: ['Volume Training', 'Muscle Focus', 'Progressive Overload', 'Recovery Protocols'],
      details: 'Scientifically designed program to maximize muscle growth through optimal volume, intensity, and progressive overload techniques.',
      workouts: 5,
      equipment: ['Dumbbells', 'Barbells', 'Cables', 'Machines'],
      color: 'from-purple-400 to-pink-500',
      benefits: ['Significant Muscle Growth', 'Strength Gains', 'Improved Definition', 'Better Endurance'],
      targetMuscles: ['All Major Groups', 'Focus on Weak Points']
    },
    {
      id: 3,
      name: 'Functional Strength',
      level: 'all',
      duration: '10 weeks',
      intensity: 'Moderate-High',
      description: 'Real-world strength for daily activities and athletic performance',
      image: '🏃‍♂️',
      features: ['Movement Patterns', 'Core Integration', 'Stability Training', 'Athletic Performance'],
      details: 'Develop strength that transfers to real-life activities and sports performance through functional movement patterns.',
      workouts: 4,
      equipment: ['Kettlebells', 'TRX', 'Medicine Balls', 'Bodyweight'],
      color: 'from-green-400 to-emerald-500',
      benefits: ['Improved Daily Function', 'Injury Prevention', 'Better Balance', 'Athletic Performance'],
      targetMuscles: ['Full Body', 'Core', 'Stabilizers']
    },
    {
      id: 4,
      name: 'Olympic Lifting',
      level: 'advanced',
      duration: '20 weeks',
      intensity: 'Very High',
      description: 'Master the snatch and clean & jerk with explosive power development',
      image: '🥇',
      features: ['Technical Mastery', 'Explosive Power', 'Mobility Training', 'Competition Ready'],
      details: 'Advanced program focusing on Olympic weightlifting techniques, explosive power development, and competition preparation.',
      workouts: 6,
      equipment: ['Olympic Barbells', 'Bumper Plates', 'Lifting Platform', 'Specialized Equipment'],
      color: 'from-yellow-400 to-orange-500',
      benefits: ['Explosive Power', 'Full Body Coordination', 'Athletic Performance', 'Mental Toughness'],
      targetMuscles: ['Full Body', 'Posterior Chain', 'Core', 'Shoulders']
    },
    {
      id: 5,
      name: 'Strength & Conditioning',
      level: 'intermediate',
      duration: '14 weeks',
      intensity: 'High',
      description: 'Complete athletic development combining strength, power, and endurance',
      image: '⚡',
      features: ['Athletic Training', 'Periodization', 'Sport Specific', 'Performance Testing'],
      details: 'Comprehensive program combining strength training with conditioning work for optimal athletic performance and general fitness.',
      workouts: 5,
      equipment: ['Full Gym Access', 'Cardio Equipment', 'Plyometric Tools', 'Agility Equipment'],
      color: 'from-red-400 to-pink-500',
      benefits: ['Complete Fitness', 'Athletic Performance', 'Endurance & Strength', 'Injury Prevention'],
      targetMuscles: ['Full Body', 'Cardiovascular System', 'Power Systems']
    },
    {
      id: 6,
      name: 'Strongman Training',
      level: 'advanced',
      duration: '18 weeks',
      intensity: 'Very High',
      description: 'Unconventional strength training with real-world objects and movements',
      image: '🦾',
      features: ['Unconventional Training', 'Functional Strength', 'Mental Toughness', 'Competition Prep'],
      details: 'Train like the worlds strongest athletes using unconventional implements and movements that build incredible functional strength.',
      workouts: 4,
      equipment: ['Atlas Stones', 'Farmers Walk', 'Tire Flips', 'Yoke Carry'],
      color: 'from-gray-400 to-slate-500',
      benefits: ['Incredible Strength', 'Mental Fortitude', 'Functional Power', 'Unique Training'],
      targetMuscles: ['Full Body', 'Grip Strength', 'Posterior Chain', 'Core']
    }
  ];

  const trainingPrinciples = [
    {
      icon: Target,
      name: 'Progressive Overload',
      description: 'Gradually increase weight, reps, or intensity to continuously challenge your muscles'
    },
    {
      icon: BarChart3,
      name: 'Periodization',
      description: 'Structured training phases to optimize gains and prevent plateaus'
    },
    {
      icon: Shield,
      name: 'Proper Form',
      description: 'Emphasis on correct technique to maximize results and minimize injury risk'
    },
    {
      icon: Heart,
      name: 'Recovery Focus',
      description: 'Adequate rest and recovery protocols for optimal muscle growth and strength'
    },
    {
      icon: Activity,
      name: 'Movement Quality',
      description: 'Focus on mobility, stability, and movement patterns before heavy loading'
    },
    {
      icon: TrendingUp,
      name: 'Tracking Progress',
      description: 'Detailed logging and assessment to monitor improvements and adjust training'
    }
  ];

  const strengthBenefits = [
    {
      category: 'Physical Benefits',
      benefits: [
        'Increased Muscle Mass & Strength',
        'Improved Bone Density',
        'Better Body Composition',
        'Enhanced Metabolic Rate',
        'Improved Posture & Alignment',
        'Reduced Injury Risk'
      ]
    },
    {
      category: 'Performance Benefits',
      benefits: [
        'Greater Athletic Performance',
        'Improved Daily Function',
        'Better Movement Quality',
        'Enhanced Power Output',
        'Increased Endurance',
        'Better Balance & Coordination'
      ]
    },
    {
      category: 'Mental Benefits',
      benefits: [
        'Increased Confidence',
        'Better Mental Toughness',
        'Stress Reduction',
        'Improved Focus',
        'Goal Achievement Skills',
        'Enhanced Self-Discipline'
      ]
    }
  ];

  const equipment = [
    {
      name: 'Free Weights',
      items: ['Olympic Barbells', 'Dumbbells (5-100 lbs)', 'Weight Plates', 'EZ-Curl Bars'],
      description: 'Complete selection of free weights for all strength training needs'
    },
    {
      name: 'Power Racks',
      items: ['Squat Racks', 'Power Cages', 'Half Racks', 'Smith Machines'],
      description: 'Safe and versatile stations for heavy compound movements'
    },
    {
      name: 'Specialty Equipment',
      items: ['Kettlebells', 'Resistance Bands', 'TRX Systems', 'Medicine Balls'],
      description: 'Functional training tools for varied workout options'
    },
    {
      name: 'Machines',
      items: ['Cable Systems', 'Leg Press', 'Lat Pulldown', 'Chest Press'],
      description: 'Precision machines for targeted muscle development'
    }
  ];

  const stats = [
    {
      icon: Dumbbell,
      number: '15+',
      label: 'Strength Programs',
      description: 'All fitness levels'
    },
    {
      icon: Users,
      number: '200+',
      label: 'Active Members',
      description: 'Training strength'
    },
    {
      icon: Trophy,
      number: '95%',
      label: 'Success Rate',
      description: 'Goal achievement'
    },
    {
      icon: Star,
      number: '4.9',
      label: 'Program Rating',
      description: 'Member satisfaction'
    }
  ];

  const filteredPrograms = selectedLevel === 'all' 
    ? strengthPrograms 
    : strengthPrograms.filter(p => p.level === selectedLevel);

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
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-400/20 to-orange-500/20 rounded-full border border-red-400/30 backdrop-blur-sm mb-6">
                <Dumbbell className="w-4 h-4 text-red-400 mr-2" />
                <span className="text-sm text-white/80">Build Ultimate Strength</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Strength
                <span className="block bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                  Training
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
                Transform your body and mind through the power of strength training. From beginner foundations 
                to advanced powerlifting, discover programs designed to unleash your true potential.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="group relative px-8 py-4 bg-gradient-to-r from-red-400 to-orange-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-red-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Start Training
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <button 
                  onClick={() => setActiveTab('benefits')}
                  className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <Trophy className="w-5 h-5 mr-2" />
                  View Benefits
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
                  <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-red-400 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
              {['programs', 'benefits', 'equipment', 'principles'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-red-400 to-orange-500 text-white shadow-lg'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Tab */}
        {activeTab === 'programs' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Strength Training
                  <span className="block bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                    Programs
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                  Choose from our comprehensive range of strength training programs designed for every fitness level and goal.
                </p>

                {/* Level Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {['all', 'beginner', 'intermediate', 'advanced'].map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedLevel === level
                          ? 'bg-gradient-to-r from-red-400 to-orange-500 text-white'
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPrograms.map((program, index) => (
                  <div key={program.id} className="group cursor-pointer" onClick={() => setSelectedProgram(program)}>
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                      <div className="text-center mb-6">
                        <div className="text-5xl mb-4">{program.image}</div>
                        <h3 className="text-2xl font-bold text-white mb-2">{program.name}</h3>
                        <p className="text-white/80 mb-4">{program.description}</p>
                        <div className="flex justify-center gap-2">
                          <div className={`px-3 py-1 bg-gradient-to-r ${program.color} rounded-full text-white text-sm font-medium`}>
                            {program.level}
                          </div>
                          <div className="px-3 py-1 bg-white/10 rounded-full text-white text-sm">
                            {program.duration}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-white/80 text-sm">
                          <span>Workouts/Week:</span>
                          <span className="text-white font-semibold">{program.workouts}</span>
                        </div>
                        <div className="flex justify-between text-white/80 text-sm">
                          <span>Intensity:</span>
                          <span className="text-white font-semibold">{program.intensity}</span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                        {program.features.slice(0, 3).map((feature, i) => (
                          <div key={i} className="flex items-center text-white/80 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <button className={`w-full py-3 bg-gradient-to-r ${program.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Benefits Tab */}
        {activeTab === 'benefits' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Strength Training
                  <span className="block bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                    Benefits
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Discover the transformative power of strength training and how it can improve every aspect of your life.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {strengthBenefits.map((category, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">{category.category}</h3>
                    <div className="space-y-3">
                      {category.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start text-white/80">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 bg-gradient-to-r from-red-400/20 to-orange-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Transform Your Life Today</h3>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Start your strength training journey and experience the life-changing benefits that come with building a stronger, more capable body.
                </p>
                <Link to="/register" className="inline-block px-8 py-4 bg-gradient-to-r from-red-400 to-orange-500 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300">
                  Begin Your Journey
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Equipment Tab */}
        {activeTab === 'equipment' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Professional
                  <span className="block bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                    Equipment
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Train with the best equipment available. Our facility features premium strength training tools for every workout style.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {equipment.map((category, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                    <p className="text-white/80 mb-6">{category.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {category.items.map((item, i) => (
                        <div key={i} className="flex items-center text-white/80 text-sm">
                          <Dumbbell className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">Equipment Highlights</h3>
                  <div className="grid md:grid-cols-3 gap-8 mt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400 mb-2">50+</div>
                      <div className="text-white font-semibold">Equipment Types</div>
                      <div className="text-white/60 text-sm">Latest models</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
                      <div className="text-white font-semibold">Maintenance</div>
                      <div className="text-white/60 text-sm">Always ready</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400 mb-2">100%</div>
                      <div className="text-white font-semibold">Safety Certified</div>
                      <div className="text-white/60 text-sm">Premium quality</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Principles Tab */}
        {activeTab === 'principles' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Training
                  <span className="block bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                    Principles
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Our strength training programs are built on proven scientific principles that ensure optimal results and safety.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trainingPrinciples.map((principle, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 text-center h-full">
                      <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                        <principle.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{principle.name}</h3>
                      <p className="text-white/80 leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Our Approach Works</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Science-Based Programming</h4>
                    <p className="text-white/80 mb-4">
                      Every program is designed using the latest exercise science research, ensuring optimal results 
                      while minimizing injury risk.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Peer-reviewed methodology
                      </div>
                      <div className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Individualized programming
                      </div>
                      <div className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Regular program updates
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Expert Guidance</h4>
                    <p className="text-white/80 mb-4">
                      Our certified trainers provide hands-on coaching to ensure proper form, 
                      technique, and program adherence.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Certified strength coaches
                      </div>
                      <div className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Form correction & feedback
                      </div>
                      <div className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Progress monitoring
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-red-400/20 to-orange-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Get Stronger?
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join our strength training community and discover what you're truly capable of achieving. 
                Expert guidance, proven programs, and premium equipment await.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-red-400 to-orange-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-red-400/25 transition-all duration-300 hover:scale-105">
                  Start Your Journey
                </Link>
                <Link to="/trainers" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Meet Our Trainers
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedProgram(null)}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-4xl w-full border border-white/20 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-white">{selectedProgram.name}</h3>
              <button onClick={() => setSelectedProgram(null)} className="text-white/60 hover:text-white text-2xl">×</button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-center mb-6">
                  <div className="text-8xl mb-4">{selectedProgram.image}</div>
                  <div className="flex justify-center gap-2 mb-4">
                    <div className={`px-4 py-2 bg-gradient-to-r ${selectedProgram.color} rounded-full text-white font-semibold`}>
                      {selectedProgram.level}
                    </div>
                    <div className="px-4 py-2 bg-white/10 rounded-full text-white">
                      {selectedProgram.duration}
                    </div>
                  </div>
                </div>
                
                <p className="text-white/80 text-lg leading-relaxed mb-6">{selectedProgram.details}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-xl font-bold text-white">{selectedProgram.workouts}/week</div>
                    <div className="text-white/60 text-sm">Workouts</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-xl font-bold text-white">{selectedProgram.intensity}</div>
                    <div className="text-white/60 text-sm">Intensity</div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Program Features</h4>
                    <div className="space-y-2">
                      {selectedProgram.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-white/80">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Benefits</h4>
                    <div className="space-y-2">
                      {selectedProgram.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center text-white/80">
                          <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Target Muscles</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProgram.targetMuscles.map((muscle, i) => (
                        <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-white text-sm">
                          {muscle}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <button className={`flex-1 py-3 bg-gradient-to-r ${selectedProgram.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                Join Program
              </button>
              <Link to="/trainers" className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
                Meet Trainers
              </Link>
              <button onClick={() => setSelectedProgram(null)} className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
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

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Trophy,
  Target,
  Timer,
  Users,
  Star,
  ArrowRight,
  Play,
  Clock,
  Flame,
  CheckCircle,
  Activity,
  TrendingUp,
  Award,
  Shield,
  Heart,
  Dumbbell,
  BarChart3
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function CrossfitSessions() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedWod, setSelectedWod] = useState(null);
  const [activeTab, setActiveTab] = useState('wods');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const crossfitWods = [
    {
      id: 1,
      name: 'Fran',
      type: 'Benchmark',
      difficulty: 'intermediate',
      duration: '5-15 minutes',
      description: 'Classic benchmark WOD combining thrusters and pull-ups for time',
      image: '🔥',
      workout: ['21-15-9 reps for time:', 'Thrusters (95/65 lbs)', 'Pull-ups'],
      details: 'One of CrossFit\'s most famous benchmark workouts. Fran tests your ability to maintain high intensity while fighting through metabolic distress.',
      color: 'from-red-400 to-orange-500',
      benefits: ['Metabolic Conditioning', 'Upper Body Power', 'Mental Toughness', 'Time Efficiency'],
      equipment: ['Barbell', 'Weight Plates', 'Pull-up Bar'],
      scalingOptions: ['Reduce weight', 'Band-assisted pull-ups', 'Ring rows'],
      recordTime: 'Elite: Under 3 min | Good: 5-8 min'
    },
    {
      id: 2,
      name: 'Murph',
      type: 'Hero',
      difficulty: 'advanced',
      duration: '30-60 minutes',
      description: 'Memorial workout honoring Navy Lt. Michael Murphy',
      image: '🇺🇸',
      workout: ['1 mile run', '100 pull-ups', '200 push-ups', '300 air squats', '1 mile run'],
      details: 'A hero workout performed on Memorial Day to honor fallen Navy SEAL Lt. Michael Murphy. This workout tests endurance, strength, and mental fortitude.',
      color: 'from-blue-400 to-cyan-500',
      benefits: ['Total Body Endurance', 'Mental Resilience', 'Cardiovascular Health', 'Honor & Respect'],
      equipment: ['Pull-up Bar', 'Running Space', 'Optional: Weight Vest'],
      scalingOptions: ['Partition reps', 'Reduce distances', 'Modify movements'],
      recordTime: 'Elite: Under 40 min | Good: 50-60 min'
    },
    {
      id: 3,
      name: 'Grace',
      type: 'Benchmark',
      difficulty: 'intermediate',
      duration: '3-8 minutes',
      description: 'Pure power workout with clean and jerks for time',
      image: '⚡',
      workout: ['30 clean and jerks for time', '135/95 lbs'],
      details: 'Grace is all about power endurance. This workout challenges your ability to maintain proper form and speed under fatigue with a technical lift.',
      color: 'from-yellow-400 to-orange-500',
      benefits: ['Olympic Lifting Power', 'Explosive Strength', 'Technical Skill', 'Mental Focus'],
      equipment: ['Barbell', 'Weight Plates', 'Lifting Platform'],
      scalingOptions: ['Reduce weight', 'Modify to power clean', 'Use dumbbells'],
      recordTime: 'Elite: Under 2 min | Good: 3-5 min'
    },
    {
      id: 4,
      name: 'Cindy',
      type: 'Benchmark',
      difficulty: 'beginner',
      duration: '20 minutes',
      description: 'Bodyweight AMRAP perfect for beginners',
      image: '💪',
      workout: ['20 minutes AMRAP:', '5 pull-ups', '10 push-ups', '15 air squats'],
      details: 'Cindy is an excellent benchmark for tracking progress over time. This bodyweight workout is accessible to all fitness levels with proper scaling.',
      color: 'from-green-400 to-emerald-500',
      benefits: ['Bodyweight Strength', 'Endurance Building', 'Movement Practice', 'Progress Tracking'],
      equipment: ['Pull-up Bar', 'Floor Space'],
      scalingOptions: ['Band-assisted pull-ups', 'Knee push-ups', 'Reduce reps'],
      recordTime: 'Elite: 20+ rounds | Good: 15-18 rounds'
    },
    {
      id: 5,
      name: 'Helen',
      type: 'Benchmark',
      difficulty: 'intermediate',
      duration: '10-20 minutes',
      description: 'Running and kettlebell swings combination',
      image: '🏃‍♀️',
      workout: ['3 rounds for time:', '400m run', '21 kettlebell swings (53/35 lbs)', '12 pull-ups'],
      details: 'Helen combines cardiovascular endurance with strength. The running component adds a different dimension to this well-rounded workout.',
      color: 'from-purple-400 to-pink-500',
      benefits: ['Cardio + Strength', 'Running Endurance', 'Posterior Chain', 'Variety'],
      equipment: ['Kettlebell', 'Pull-up Bar', 'Running Space'],
      scalingOptions: ['Reduce distance', 'Lighter kettlebell', 'Modify pull-ups'],
      recordTime: 'Elite: Under 10 min | Good: 12-16 min'
    },
    {
      id: 6,
      name: 'The Seven',
      type: 'Hero',
      difficulty: 'advanced',
      duration: '30-45 minutes',
      description: 'Memorial workout for seven CIA officers',
      image: '🌟',
      workout: ['7 rounds for time:', '7 handstand push-ups', '77 air squats', '7 thrusters (135/95 lbs)', '7 knees to elbows', '7 deadlifts (245/165 lbs)', '7 burpees', '7 kettlebell swings (70/53 lbs)'],
      details: 'A hero workout commemorating seven CIA officers killed in Afghanistan. The sevens theme makes this a unique and challenging tribute workout.',
      color: 'from-gray-400 to-slate-500',
      benefits: ['Total Body Challenge', 'Mental Toughness', 'Strength Endurance', 'Honor & Memory'],
      equipment: ['Barbell', 'Weight Plates', 'Kettlebell', 'Pull-up Bar'],
      scalingOptions: ['Pike push-ups', 'Reduce weights', 'Modify movements'],
      recordTime: 'Elite: Under 25 min | Good: 30-40 min'
    }
  ];

  const crossfitPrinciples = [
    {
      icon: Target,
      name: 'Constantly Varied',
      description: 'No two workouts are the same, keeping your body and mind challenged'
    },
    {
      icon: Zap,
      name: 'High Intensity',
      description: 'Push your limits with workouts that maximize results in minimal time'
    },
    {
      icon: Activity,
      name: 'Functional Movement',
      description: 'Real-world movements that improve daily life and athletic performance'
    },
    {
      icon: Users,
      name: 'Community Driven',
      description: 'Train together, suffer together, celebrate together as a team'
    },
    {
      icon: BarChart3,
      name: 'Measurable Results',
      description: 'Track your progress with quantifiable metrics and benchmarks'
    },
    {
      icon: Shield,
      name: 'Scalable for All',
      description: 'Every workout can be modified for any fitness level or ability'
    }
  ];

  const workoutTypes = [
    {
      name: 'AMRAP',
      fullName: 'As Many Rounds As Possible',
      description: 'Complete as many rounds of the prescribed exercises within a given time frame',
      example: '20 min AMRAP: 5 pull-ups, 10 push-ups, 15 squats',
      benefits: ['Endurance building', 'Progress tracking', 'Mental toughness'],
      color: 'from-blue-400 to-cyan-500'
    },
    {
      name: 'EMOM',
      fullName: 'Every Minute On the Minute',
      description: 'Perform specific exercises at the start of every minute for a set duration',
      example: '10 min EMOM: 5 burpees',
      benefits: ['Pacing practice', 'Consistent intensity', 'Time management'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      name: 'For Time',
      fullName: 'Complete as Fast as Possible',
      description: 'Finish the prescribed work as quickly as possible while maintaining form',
      example: '21-15-9: Thrusters & Pull-ups',
      benefits: ['Speed development', 'Competition prep', 'PR tracking'],
      color: 'from-red-400 to-orange-500'
    },
    {
      name: 'Tabata',
      fullName: '20 seconds on, 10 seconds off',
      description: 'High-intensity intervals with short rest periods for 4 minutes total',
      example: '8 rounds: 20 sec work, 10 sec rest',
      benefits: ['Metabolic boost', 'Time efficient', 'VO2 max improvement'],
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const equipment = [
    'Olympic Barbells & Bumper Plates',
    'Pull-up Bars & Rings',
    'Kettlebells (All Weights)',
    'Dumbbells & Medicine Balls',
    'Rowing Machines',
    'Assault Bikes',
    'Jump Ropes',
    'Plyo Boxes',
    'Wall Balls',
    'Battle Ropes'
  ];

  const stats = [
    {
      icon: Flame,
      number: '800+',
      label: 'Calories/Hour',
      description: 'High-intensity burn'
    },
    {
      icon: Users,
      number: '15',
      label: 'Max Class Size',
      description: 'Personal attention'
    },
    {
      icon: Clock,
      number: '45-60',
      label: 'Minutes',
      description: 'Session duration'
    },
    {
      icon: Star,
      number: '4.9',
      label: 'Member Rating',
      description: 'Satisfaction score'
    }
  ];

  const filteredWods = selectedDifficulty === 'all' 
    ? crossfitWods 
    : crossfitWods.filter(w => w.difficulty === selectedDifficulty);

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
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-400/20 to-red-500/20 rounded-full border border-orange-400/30 backdrop-blur-sm mb-6">
                <Zap className="w-4 h-4 text-orange-400 mr-2" />
                <span className="text-sm text-white/80">Elite Functional Fitness</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                CrossFit
                <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Sessions
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
                Experience the ultimate fitness methodology that has transformed millions worldwide. 
                Constantly varied, high-intensity functional movements that forge elite fitness.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="group relative px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-orange-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Join CrossFit
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <button 
                  onClick={() => setActiveTab('principles')}
                  className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <Target className="w-5 h-5 mr-2" />
                  Learn Methodology
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

        {/* Navigation Tabs */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center mb-8 bg-white/5 rounded-2xl p-2">
              {['wods', 'principles', 'workout-types', 'equipment'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-lg'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* WODs Tab */}
        {activeTab === 'wods' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Signature
                  <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    WODs
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                  Experience legendary CrossFit workouts that have tested athletes worldwide. From benchmarks to hero WODs.
                </p>

                {/* Difficulty Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {['all', 'beginner', 'intermediate', 'advanced'].map((difficulty) => (
                    <button
                      key={difficulty}
                      onClick={() => setSelectedDifficulty(difficulty)}
                      className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedDifficulty === difficulty
                          ? 'bg-gradient-to-r from-orange-400 to-red-500 text-white'
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredWods.map((wod, index) => (
                  <div key={wod.id} className="group cursor-pointer" onClick={() => setSelectedWod(wod)}>
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                      <div className="text-center mb-6">
                        <div className="text-5xl mb-4">{wod.image}</div>
                        <h3 className="text-2xl font-bold text-white mb-2">{wod.name}</h3>
                        <p className="text-white/80 mb-4">{wod.description}</p>
                        <div className="flex justify-center gap-2">
                          <div className={`px-3 py-1 bg-gradient-to-r ${wod.color} rounded-full text-white text-sm font-medium`}>
                            {wod.type}
                          </div>
                          <div className="px-3 py-1 bg-white/10 rounded-full text-white text-sm">
                            {wod.difficulty}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-white/80 text-sm">
                          <span>Duration:</span>
                          <span className="text-white font-semibold">{wod.duration}</span>
                        </div>
                        <div className="flex justify-between text-white/80 text-sm">
                          <span>Record Time:</span>
                          <span className="text-white font-semibold text-xs">{wod.recordTime.split('|')[0]}</span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <h4 className="text-white font-semibold mb-2">Workout:</h4>
                        {wod.workout.slice(0, 3).map((move, i) => (
                          <div key={i} className="text-white/80 text-sm">
                            • {move}
                          </div>
                        ))}
                        {wod.workout.length > 3 && (
                          <div className="text-white/60 text-sm">
                            +{wod.workout.length - 3} more movements
                          </div>
                        )}
                      </div>
                      
                      <button className={`w-full py-3 bg-gradient-to-r ${wod.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                        View Full WOD
                      </button>
                    </div>
                  </div>
                ))}
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
                  CrossFit
                  <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    Methodology
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Understanding the core principles that make CrossFit the world's premier fitness methodology.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {crossfitPrinciples.map((principle, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 text-center h-full">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                        <principle.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{principle.name}</h3>
                      <p className="text-white/80 leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 bg-gradient-to-r from-orange-400/20 to-red-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">The CrossFit Definition of Fitness</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">10 Physical Skills</h4>
                    <div className="grid grid-cols-2 gap-2 text-white/80 text-sm">
                      <div>• Cardiovascular Endurance</div>
                      <div>• Stamina</div>
                      <div>• Strength</div>
                      <div>• Flexibility</div>
                      <div>• Power</div>
                      <div>• Speed</div>
                      <div>• Coordination</div>
                      <div>• Agility</div>
                      <div>• Balance</div>
                      <div>• Accuracy</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Energy Systems</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Phosphocreatine (10 seconds)
                      </div>
                      <div className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Glycolytic (2 minutes)
                      </div>
                      <div className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Oxidative (unlimited)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Workout Types Tab */}
        {activeTab === 'workout-types' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Workout
                  <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    Formats
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Understanding different CrossFit workout structures and how they challenge your fitness.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {workoutTypes.map((type, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                    <div className={`w-full h-2 bg-gradient-to-r ${type.color} rounded-full mb-6`}></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{type.name}</h3>
                    <h4 className="text-lg text-white/80 mb-4">{type.fullName}</h4>
                    <p className="text-white/80 mb-6">{type.description}</p>
                    
                    <div className="bg-white/5 rounded-xl p-4 mb-6">
                      <div className="text-sm text-white/60 mb-2">Example:</div>
                      <div className="text-white font-mono">{type.example}</div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-white/60 mb-3">Key Benefits:</div>
                      <div className="space-y-1">
                        {type.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center text-white/80 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
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
                  CrossFit
                  <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    Equipment
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Professional-grade equipment designed for the demands of high-intensity functional fitness.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {equipment.map((item, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-center">
                      <Dumbbell className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                      <span className="text-white font-semibold">{item}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Equipment Standards</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">Commercial</div>
                    <div className="text-white font-semibold mb-2">Grade Equipment</div>
                    <div className="text-white/60 text-sm">Built for high-volume use</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">Safety</div>
                    <div className="text-white font-semibold mb-2">First Priority</div>
                    <div className="text-white/60 text-sm">Regular maintenance & inspection</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">Olympic</div>
                    <div className="text-white font-semibold mb-2">Standard Weights</div>
                    <div className="text-white/60 text-sm">Competition-ready equipment</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-orange-400/20 to-red-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Forge Elite Fitness
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join the CrossFit community and discover what you're truly capable of achieving. 
                Elite coaching, proven methodology, and a supportive community await.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-orange-400/25 transition-all duration-300 hover:scale-105">
                  Start Your Journey
                </Link>
                <Link to="/trainers" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Meet Our Coaches
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* WOD Detail Modal */}
      {selectedWod && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedWod(null)}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-4xl w-full border border-white/20 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-white">{selectedWod.name}</h3>
              <button onClick={() => setSelectedWod(null)} className="text-white/60 hover:text-white text-2xl">×</button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-center mb-6">
                  <div className="text-8xl mb-4">{selectedWod.image}</div>
                  <div className="flex justify-center gap-2 mb-4">
                    <div className={`px-4 py-2 bg-gradient-to-r ${selectedWod.color} rounded-full text-white font-semibold`}>
                      {selectedWod.type} WOD
                    </div>
                    <div className="px-4 py-2 bg-white/10 rounded-full text-white">
                      {selectedWod.difficulty}
                    </div>
                  </div>
                </div>
                
                <p className="text-white/80 text-lg leading-relaxed mb-6">{selectedWod.details}</p>
                
                <div className="bg-white/5 rounded-xl p-4 mb-6">
                  <div className="text-white font-semibold mb-2">Record Times:</div>
                  <div className="text-white/80 text-sm">{selectedWod.recordTime}</div>
                </div>
              </div>
              
              <div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Full Workout</h4>
                    <div className="bg-white/5 rounded-xl p-4">
                      {selectedWod.workout.map((move, i) => (
                        <div key={i} className="text-white font-mono mb-1">
                          {move}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Equipment Needed</h4>
                    <div className="space-y-2">
                      {selectedWod.equipment.map((item, i) => (
                        <div key={i} className="flex items-center text-white/80">
                          <Dumbbell className="w-4 h-4 text-orange-400 mr-3 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Scaling Options</h4>
                    <div className="space-y-2">
                      {selectedWod.scalingOptions.map((option, i) => (
                        <div key={i} className="flex items-center text-white/80">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <button className={`flex-1 py-3 bg-gradient-to-r ${selectedWod.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                Try This WOD
              </button>
              <Link to="/register" className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
                Book Session
              </Link>
              <button onClick={() => setSelectedWod(null)} className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
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

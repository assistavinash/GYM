import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Zap, 
  Trophy,
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
  Target,
  Award,
  Music,
  Droplets,
  Bolt
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function CardioBlast() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [activeTab, setActiveTab] = useState('workouts');
  const [selectedIntensity, setSelectedIntensity] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cardioBlastWorkouts = [
    {
      id: 1,
      name: 'HIIT Inferno',
      intensity: 'high',
      duration: '30 minutes',
      calories: '400-500',
      description: 'High-intensity interval training that torches calories and boosts metabolism',
      image: '🔥',
      features: ['30 sec work, 15 sec rest', 'Full Body Movements', 'No Equipment Needed', 'Metabolic Boosting'],
      details: 'Experience the ultimate calorie-burning workout with our signature HIIT Inferno class. This high-intensity session combines explosive movements with brief recovery periods to maximize fat burn and improve cardiovascular fitness.',
      exercises: ['Burpees', 'Mountain Climbers', 'Jump Squats', 'High Knees', 'Push-ups', 'Plank Jacks'],
      color: 'from-red-400 to-orange-500',
      benefits: ['Burns Calories Fast', 'Improves VO2 Max', 'Builds Endurance', 'Boosts Metabolism'],
      level: 'Intermediate to Advanced',
      equipment: 'Bodyweight Only'
    },
    {
      id: 2,
      name: 'Cardio Kickboxing',
      intensity: 'high',
      duration: '45 minutes',
      calories: '500-600',
      description: 'High-energy kickboxing combinations that build strength and cardio endurance',
      image: '🥊',
      features: ['Boxing Combinations', 'Kicking Techniques', 'Core Strengthening', 'Stress Relief'],
      details: 'Unleash your inner fighter with our cardio kickboxing class. Combining martial arts techniques with high-energy music, this workout provides a full-body challenge while teaching valuable self-defense skills.',
      exercises: ['Jab-Cross Combos', 'Front Kicks', 'Hook Punches', 'Knee Strikes', 'Roundhouse Kicks', 'Bob & Weave'],
      color: 'from-purple-400 to-pink-500',
      benefits: ['Total Body Workout', 'Stress Relief', 'Improved Coordination', 'Self-Defense Skills'],
      level: 'All Levels',
      equipment: 'Gloves & Pads Provided'
    },
    {
      id: 3,
      name: 'Spin & Burn',
      intensity: 'moderate',
      duration: '50 minutes',
      calories: '450-550',
      description: 'Indoor cycling workout with music-driven intervals and hill climbs',
      image: '🚴‍♀️',
      features: ['Music-Driven Rides', 'Hill Simulations', 'Sprint Intervals', 'Heart Rate Zones'],
      details: 'Join our energetic spin classes that take you on a journey through various terrains. With motivating music and expert instruction, you\'ll climb hills, sprint on flats, and burn serious calories.',
      exercises: ['Seated Climbs', 'Standing Sprints', 'Hill Intervals', 'Recovery Rides', 'Tabata Sprints', 'Endurance Blocks'],
      color: 'from-blue-400 to-cyan-500',
      benefits: ['Leg Strength', 'Cardiovascular Health', 'Low Impact', 'Mental Toughness'],
      level: 'All Levels',
      equipment: 'Spin Bikes & Heart Rate Monitors'
    },
    {
      id: 4,
      name: 'Dance Cardio',
      intensity: 'moderate',
      duration: '45 minutes',
      calories: '300-400',
      description: 'Fun, dance-inspired cardio workout that doesn\'t feel like exercise',
      image: '💃',
      features: ['Dance Choreography', 'Popular Music', 'Full Body Movement', 'Social & Fun'],
      details: 'Get your groove on with our high-energy dance cardio class. Featuring popular music and easy-to-follow choreography, this workout burns calories while having a blast.',
      exercises: ['Hip Hop Moves', 'Latin Rhythms', 'Pop Choreography', 'Freestyle Sections', 'Partner Work', 'Cool Down Flows'],
      color: 'from-pink-400 to-rose-500',
      benefits: ['Improved Coordination', 'Mood Booster', 'Social Connection', 'Rhythm & Timing'],
      level: 'Beginner Friendly',
      equipment: 'Just Bring Energy!'
    },
    {
      id: 5,
      name: 'Tabata Thunder',
      intensity: 'high',
      duration: '20 minutes',
      calories: '250-350',
      description: '4-minute intense intervals repeated multiple times for maximum impact',
      image: '⚡',
      features: ['20 sec work, 10 sec rest', 'Multiple Rounds', 'High Intensity', 'Quick & Effective'],
      details: 'Experience the scientifically proven Tabata protocol in this intense 20-minute session. Short but incredibly effective, this workout will push your limits and deliver amazing results.',
      exercises: ['Squat Jumps', 'Burpees', 'Sprint in Place', 'Push-up Variations', 'Plank Hold', 'Jump Lunges'],
      color: 'from-yellow-400 to-orange-500',
      benefits: ['Time Efficient', 'Metabolic Boost', 'Improved Power', 'Fat Burning'],
      level: 'Advanced',
      equipment: 'Timer & Determination'
    },
    {
      id: 6,
      name: 'Aqua Cardio',
      intensity: 'low',
      duration: '40 minutes',
      calories: '200-300',
      description: 'Low-impact water-based cardio workout perfect for all fitness levels',
      image: '🏊‍♀️',
      features: ['Water Resistance', 'Low Impact', 'Joint Friendly', 'Cooling Effect'],
      details: 'Dive into our refreshing aqua cardio class that provides an excellent cardiovascular workout while being gentle on your joints. Perfect for beginners or those recovering from injury.',
      exercises: ['Water Walking', 'Arm Circles', 'Leg Swings', 'Water Jogging', 'Pool Noodle Work', 'Floating Exercises'],
      color: 'from-cyan-400 to-blue-500',
      benefits: ['Joint Friendly', 'Full Body Workout', 'Cooling', 'Rehabilitation'],
      level: 'All Levels',
      equipment: 'Pool Noodles & Water Weights'
    }
  ];

  const cardioBlastBenefits = [
    {
      icon: Heart,
      title: 'Cardiovascular Health',
      description: 'Strengthen your heart and improve circulation with regular cardio training'
    },
    {
      icon: Flame,
      title: 'Calorie Burning',
      description: 'Torch calories efficiently and boost your metabolism for hours after workout'
    },
    {
      icon: Zap,
      title: 'Energy Boost',
      description: 'Increase daily energy levels and combat fatigue with regular cardio exercise'
    },
    {
      icon: Trophy,
      title: 'Endurance Building',
      description: 'Build stamina and endurance for daily activities and athletic performance'
    },
    {
      icon: Target,
      title: 'Weight Management',
      description: 'Effective tool for weight loss and maintaining healthy body composition'
    },
    {
      icon: Activity,
      title: 'Mental Health',
      description: 'Reduce stress, anxiety, and improve mood through endorphin release'
    }
  ];

  const intensityLevels = [
    {
      level: 'Low',
      description: 'Gentle, sustainable pace perfect for beginners',
      heartRate: '50-60% Max HR',
      examples: ['Aqua Cardio', 'Walking', 'Light Cycling'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      level: 'Moderate',
      description: 'Comfortable challenging pace for fitness building',
      heartRate: '60-70% Max HR',
      examples: ['Dance Cardio', 'Spin & Burn', 'Step Classes'],
      color: 'from-blue-400 to-cyan-500'
    },
    {
      level: 'High',
      description: 'Intense, challenging pace for maximum results',
      heartRate: '70-85% Max HR',
      examples: ['HIIT Inferno', 'Kickboxing', 'Tabata Thunder'],
      color: 'from-red-400 to-orange-500'
    }
  ];

  const schedule = [
    { day: 'Monday', classes: ['HIIT Inferno - 7:00 AM', 'Dance Cardio - 6:00 PM'] },
    { day: 'Tuesday', classes: ['Spin & Burn - 6:30 AM', 'Cardio Kickboxing - 7:00 PM'] },
    { day: 'Wednesday', classes: ['Tabata Thunder - 7:00 AM', 'Aqua Cardio - 5:30 PM'] },
    { day: 'Thursday', classes: ['HIIT Inferno - 6:30 AM', 'Dance Cardio - 6:00 PM'] },
    { day: 'Friday', classes: ['Spin & Burn - 7:00 AM', 'Cardio Kickboxing - 6:30 PM'] },
    { day: 'Saturday', classes: ['HIIT Inferno - 9:00 AM', 'Tabata Thunder - 10:30 AM'] },
    { day: 'Sunday', classes: ['Dance Cardio - 10:00 AM', 'Aqua Cardio - 11:30 AM'] }
  ];

  const stats = [
    {
      icon: Flame,
      number: '500+',
      label: 'Calories Burned',
      description: 'Per session average'
    },
    {
      icon: Users,
      number: '25+',
      label: 'Class Capacity',
      description: 'Small group focus'
    },
    {
      icon: Clock,
      number: '20-50',
      label: 'Minutes',
      description: 'Flexible durations'
    },
    {
      icon: Star,
      number: '4.9',
      label: 'Class Rating',
      description: 'Member satisfaction'
    }
  ];

  const filteredWorkouts = selectedIntensity === 'all' 
    ? cardioBlastWorkouts 
    : cardioBlastWorkouts.filter(w => w.intensity === selectedIntensity);

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
                <Heart className="w-4 h-4 text-red-400 mr-2" />
                <span className="text-sm text-white/80">High-Energy Cardio</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Cardio
                <span className="block bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                  Blast
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
                Ignite your fitness journey with our high-energy cardio classes. From HIIT to dance, 
                kickboxing to cycling - find your perfect cardio match and blast away calories!
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="group relative px-8 py-4 bg-gradient-to-r from-red-400 to-orange-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-red-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Join Classes
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <button 
                  onClick={() => setActiveTab('schedule')}
                  className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <Clock className="w-5 h-5 mr-2" />
                  View Schedule
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
              {['workouts', 'benefits', 'intensity', 'schedule'].map((tab) => (
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

        {/* Workouts Tab */}
        {activeTab === 'workouts' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Cardio Blast
                  <span className="block bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                    Workouts
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                  Choose from our diverse range of high-energy cardio workouts designed to torch calories and boost your fitness level.
                </p>

                {/* Intensity Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {['all', 'low', 'moderate', 'high'].map((intensity) => (
                    <button
                      key={intensity}
                      onClick={() => setSelectedIntensity(intensity)}
                      className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedIntensity === intensity
                          ? 'bg-gradient-to-r from-red-400 to-orange-500 text-white'
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      {intensity.charAt(0).toUpperCase() + intensity.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredWorkouts.map((workout, index) => (
                  <div key={workout.id} className="group cursor-pointer" onClick={() => setSelectedWorkout(workout)}>
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                      <div className="text-center mb-6">
                        <div className="text-5xl mb-4">{workout.image}</div>
                        <h3 className="text-2xl font-bold text-white mb-2">{workout.name}</h3>
                        <p className="text-white/80 mb-4">{workout.description}</p>
                        <div className="flex justify-center gap-2">
                          <div className={`px-3 py-1 bg-gradient-to-r ${workout.color} rounded-full text-white text-sm font-medium`}>
                            {workout.intensity}
                          </div>
                          <div className="px-3 py-1 bg-white/10 rounded-full text-white text-sm">
                            {workout.duration}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-white/80 text-sm">
                          <span>Duration:</span>
                          <span className="text-white font-semibold">{workout.duration}</span>
                        </div>
                        <div className="flex justify-between text-white/80 text-sm">
                          <span>Calories:</span>
                          <span className="text-white font-semibold">{workout.calories}</span>
                        </div>
                        <div className="flex justify-between text-white/80 text-sm">
                          <span>Level:</span>
                          <span className="text-white font-semibold">{workout.level}</span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <h4 className="text-white font-semibold mb-2">Features:</h4>
                        {workout.features.slice(0, 3).map((feature, i) => (
                          <div key={i} className="flex items-center text-white/80 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <button className={`w-full py-3 bg-gradient-to-r ${workout.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
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
                  Cardio
                  <span className="block bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                    Benefits
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Discover the incredible benefits of regular cardio exercise and how it transforms your health and wellbeing.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cardioBlastBenefits.map((benefit, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 text-center h-full">
                      <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                      <p className="text-white/80 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 bg-gradient-to-r from-red-400/20 to-orange-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Transform Your Health</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Physical Benefits</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Improved heart health and circulation
                      </div>
                      <div className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Enhanced lung capacity and breathing
                      </div>
                      <div className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Better sleep quality and recovery
                      </div>
                      <div className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Increased bone density and strength
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Mental Benefits</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Reduced stress and anxiety levels
                      </div>
                      <div className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Enhanced mood and mental clarity
                      </div>
                      <div className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Boosted self-confidence and energy
                      </div>
                      <div className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Better cognitive function and focus
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Intensity Tab */}
        {activeTab === 'intensity' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Intensity
                  <span className="block bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                    Levels
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Find your perfect workout intensity level. From gentle beginners classes to high-intensity challenges.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {intensityLevels.map((level, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                      <div className={`w-full h-2 bg-gradient-to-r ${level.color} rounded-full mb-6`}></div>
                      <h3 className="text-2xl font-bold text-white mb-4">{level.level} Intensity</h3>
                      <p className="text-white/80 mb-6">{level.description}</p>
                      
                      <div className="mb-6">
                        <div className="text-sm text-white/60 mb-2">Target Heart Rate</div>
                        <div className="text-lg font-semibold text-white">{level.heartRate}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-white/60 mb-3">Class Examples</div>
                        <div className="space-y-1">
                          {level.examples.map((example, i) => (
                            <div key={i} className="text-white/80 text-sm">• {example}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Heart Rate Zone Guide</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">How to Calculate</h4>
                    <div className="bg-white/5 rounded-xl p-4 mb-4">
                      <div className="text-white font-semibold">Max Heart Rate Formula:</div>
                      <div className="text-white/80 text-lg">220 - Your Age</div>
                    </div>
                    <div className="text-white/80 text-sm">
                      Example: For a 30-year-old person, Max HR = 220 - 30 = 190 bpm
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Monitoring Tips</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-white/80">
                        <Heart className="w-4 h-4 text-red-400 mr-2" />
                        Use heart rate monitors for accuracy
                      </div>
                      <div className="flex items-center text-white/80">
                        <Activity className="w-4 h-4 text-red-400 mr-2" />
                        Listen to your body's signals
                      </div>
                      <div className="flex items-center text-white/80">
                        <Timer className="w-4 h-4 text-red-400 mr-2" />
                        Start slow and build gradually
                      </div>
                      <div className="flex items-center text-white/80">
                        <TrendingUp className="w-4 h-4 text-red-400 mr-2" />
                        Track progress over time
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Schedule Tab */}
        {activeTab === 'schedule' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Class
                  <span className="block bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                    Schedule
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Plan your week with our comprehensive cardio blast class schedule. Multiple times daily to fit your lifestyle.
                </p>
              </div>

              <div className="grid gap-4">
                {schedule.map((day, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="md:w-32 mb-4 md:mb-0">
                        <h3 className="text-xl font-bold text-white">{day.day}</h3>
                      </div>
                      <div className="flex-1 grid md:grid-cols-2 gap-4">
                        {day.classes.map((classInfo, i) => (
                          <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                            <div className="text-white font-semibold">{classInfo}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">Booking Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-white/80">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Reserve your spot up to 48 hours in advance
                    </div>
                    <div className="flex items-center text-white/80">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Cancel up to 4 hours before class
                    </div>
                    <div className="flex items-center text-white/80">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Walk-ins welcome if space available
                    </div>
                    <div className="flex items-center text-white/80">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      All fitness levels welcome
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">What to Bring</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-white/80">
                      <Droplets className="w-4 h-4 text-blue-400 mr-2" />
                      Water bottle (stay hydrated!)
                    </div>
                    <div className="flex items-center text-white/80">
                      <Activity className="w-4 h-4 text-blue-400 mr-2" />
                      Comfortable workout clothes
                    </div>
                    <div className="flex items-center text-white/80">
                      <Timer className="w-4 h-4 text-blue-400 mr-2" />
                      Arrive 10 minutes early
                    </div>
                    <div className="flex items-center text-white/80">
                      <Heart className="w-4 h-4 text-blue-400 mr-2" />
                      Heart rate monitor (optional)
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
                Ready to Blast Your Fitness?
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join our high-energy cardio community and experience the most fun and effective way to get fit. 
                Your transformation starts with your first class!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-red-400 to-orange-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-red-400/25 transition-all duration-300 hover:scale-105">
                  Join Now
                </Link>
                <Link to="/classes" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  View All Classes
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Workout Detail Modal */}
      {selectedWorkout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedWorkout(null)}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-4xl w-full border border-white/20 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-white">{selectedWorkout.name}</h3>
              <button onClick={() => setSelectedWorkout(null)} className="text-white/60 hover:text-white text-2xl">×</button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-center mb-6">
                  <div className="text-8xl mb-4">{selectedWorkout.image}</div>
                  <div className="flex justify-center gap-2 mb-4">
                    <div className={`px-4 py-2 bg-gradient-to-r ${selectedWorkout.color} rounded-full text-white font-semibold`}>
                      {selectedWorkout.intensity}
                    </div>
                    <div className="px-4 py-2 bg-white/10 rounded-full text-white">
                      {selectedWorkout.duration}
                    </div>
                  </div>
                </div>
                
                <p className="text-white/80 text-lg leading-relaxed mb-6">{selectedWorkout.details}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-xl font-bold text-white">{selectedWorkout.calories}</div>
                    <div className="text-white/60 text-sm">Calories Burned</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-xl font-bold text-white">{selectedWorkout.level}</div>
                    <div className="text-white/60 text-sm">Fitness Level</div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Exercise Examples</h4>
                    <div className="space-y-2">
                      {selectedWorkout.exercises.map((exercise, i) => (
                        <div key={i} className="flex items-center text-white/80">
                          <Bolt className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                          {exercise}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Benefits</h4>
                    <div className="space-y-2">
                      {selectedWorkout.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center text-white/80">
                          <Star className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Equipment</h4>
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="text-white/80">{selectedWorkout.equipment}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <button className={`flex-1 py-3 bg-gradient-to-r ${selectedWorkout.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                Book Class
              </button>
              <Link to="/schedule" className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
                View Schedule
              </Link>
              <button onClick={() => setSelectedWorkout(null)} className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
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

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Timer, 
  Activity, 
  TrendingUp, 
  Users, 
  Star,
  Play,
  ArrowRight,
  Zap,
  Target,
  Award
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Cardio() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cardioWorkouts = [
    {
      id: 1,
      name: 'HIIT Blast',
      duration: '30 min',
      intensity: 'High',
      calories: '400-500',
      description: 'High-intensity interval training for maximum calorie burn',
      benefits: ['Burns fat fast', 'Improves stamina', 'Time efficient'],
      image: '🔥',
      color: 'from-red-400 to-orange-500'
    },
    {
      id: 2,
      name: 'Steady State Run',
      duration: '45 min',
      intensity: 'Medium',
      calories: '300-400',
      description: 'Maintain consistent pace for endurance building',
      benefits: ['Builds endurance', 'Heart healthy', 'Mental clarity'],
      image: '🏃‍♂️',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 3,
      name: 'Cycling Power',
      duration: '60 min',
      intensity: 'High',
      calories: '500-700',
      description: 'Intense cycling workout with varying resistance',
      benefits: ['Leg strength', 'Low impact', 'High calorie burn'],
      image: '🚴‍♂️',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 4,
      name: 'Dance Cardio',
      duration: '45 min',
      intensity: 'Medium',
      calories: '250-350',
      description: 'Fun dance movements that get your heart pumping',
      benefits: ['Fun & engaging', 'Full body workout', 'Improves coordination'],
      image: '💃',
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 5,
      name: 'Boxing Circuit',
      duration: '40 min',
      intensity: 'High',
      calories: '400-600',
      description: 'Boxing-inspired cardio with punching combinations',
      benefits: ['Builds power', 'Stress relief', 'Upper body focus'],
      image: '🥊',
      color: 'from-yellow-400 to-amber-500'
    },
    {
      id: 6,
      name: 'Rowing Challenge',
      duration: '35 min',
      intensity: 'Medium',
      calories: '300-450',
      description: 'Full-body rowing workout for strength and cardio',
      benefits: ['Full body', 'Low impact', 'Core strength'],
      image: '🚣‍♂️',
      color: 'from-teal-400 to-blue-500'
    }
  ];

  const cardioStats = [
    {
      icon: Heart,
      number: '500+',
      label: 'Calories Burned',
      description: 'Average per session'
    },
    {
      icon: Timer,
      number: '30-60',
      label: 'Minutes',
      description: 'Session duration'
    },
    {
      icon: Activity,
      number: '15+',
      label: 'Workout Types',
      description: 'Cardio variations'
    },
    {
      icon: TrendingUp,
      number: '90%',
      label: 'Success Rate',
      description: 'Members see results'
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Heart Health',
      description: 'Strengthen your cardiovascular system and improve circulation'
    },
    {
      icon: Zap,
      title: 'Burn Calories',
      description: 'Effective calorie burning for weight management and fat loss'
    },
    {
      icon: Target,
      title: 'Endurance',
      description: 'Build stamina and improve your overall energy levels'
    },
    {
      icon: Award,
      title: 'Mental Health',
      description: 'Release endorphins and reduce stress through cardio exercise'
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Particles Background */}
      <div className="fixed inset-0 z-[1] w-full h-full min-h-screen pointer-events-none">
        <Particles
          particleCount={800}
          particleSpread={15}
          speed={0.1}
          particleColors={["#FACC15", "#EF4444", "#3B82F6", "#10B981", "#8B5CF6"]}
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
                <span className="text-sm text-white/80">Cardio Excellence</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Cardio
                <span className="block bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                  Workouts
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
                Boost your cardiovascular health with our diverse range of cardio workouts. 
                From high-intensity interval training to steady-state cardio, we have the perfect workout for every fitness level.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="group relative px-8 py-4 bg-gradient-to-r from-red-400 to-orange-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-red-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Start Training
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link to="/schedule" className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <Timer className="w-5 h-5 mr-2" />
                  View Schedule
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {cardioStats.map((stat, index) => (
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

        {/* Cardio Benefits */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Why Choose
                <span className="block bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                  Cardio Training?
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Discover the incredible benefits of cardiovascular exercise for your body and mind.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group">
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                    <p className="text-white/80 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cardio Workouts */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Cardio
                <span className="block bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                  Programs
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Choose from our variety of cardio workouts designed to challenge and inspire you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cardioWorkouts.map((workout, index) => (
                <div key={workout.id} className="group cursor-pointer" onClick={() => setSelectedWorkout(workout)}>
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-4xl">{workout.image}</div>
                      <div className={`px-3 py-1 bg-gradient-to-r ${workout.color} rounded-full text-white text-sm font-semibold`}>
                        {workout.intensity}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{workout.name}</h3>
                    <p className="text-white/80 mb-6">{workout.description}</p>
                    
                    <div className="flex justify-between text-sm text-white/60 mb-6">
                      <span>⏱️ {workout.duration}</span>
                      <span>🔥 {workout.calories} cal</span>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {workout.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center text-white/80 text-sm">
                          <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-orange-500 rounded-full mr-3"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                    
                    <button className="w-full py-3 bg-gradient-to-r from-red-400 to-orange-500 rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                      <Play className="w-4 h-4 mr-2" />
                      Start Workout
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-red-400/20 to-orange-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Elevate Your Heart Rate?
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join our cardio classes and experience the energy, motivation, and results that come with our expert-led training sessions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-red-400 to-orange-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-red-400/25 transition-all duration-300 hover:scale-105">
                  Join Now
                </Link>
                <Link to="/contact" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Workout Detail Modal */}
      {selectedWorkout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedWorkout(null)}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-2xl w-full border border-white/20" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-white">{selectedWorkout.name}</h3>
              <button onClick={() => setSelectedWorkout(null)} className="text-white/60 hover:text-white text-2xl">×</button>
            </div>
            
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{selectedWorkout.image}</div>
              <p className="text-white/80 text-lg">{selectedWorkout.description}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-2xl font-bold text-white">{selectedWorkout.duration}</div>
                <div className="text-white/60">Duration</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-2xl font-bold text-white">{selectedWorkout.calories}</div>
                <div className="text-white/60">Calories</div>
              </div>
            </div>
            
            <div className="space-y-3 mb-8">
              <h4 className="text-xl font-semibold text-white">Benefits:</h4>
              {selectedWorkout.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center text-white/80">
                  <div className={`w-3 h-3 bg-gradient-to-r ${selectedWorkout.color} rounded-full mr-3`}></div>
                  {benefit}
                </div>
              ))}
            </div>
            
            <div className="flex gap-4">
              <Link to="/register" className="flex-1 py-3 bg-gradient-to-r from-red-400 to-orange-500 rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300 text-center">
                Book Session
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

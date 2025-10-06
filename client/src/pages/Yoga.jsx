import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flower2, 
  Sunrise, 
  Moon, 
  Heart, 
  Sparkles, 
  Clock,
  ArrowRight,
  Users,
  Star,
  Calendar,
  Target,
  Award,
  User,
  Play,
  Palette
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Yoga() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [activeStyle, setActiveStyle] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const yogaStyles = [
    { id: 'all', name: 'All Styles', icon: Flower2 },
    { id: 'hatha', name: 'Hatha', icon: Sunrise },
    { id: 'vinyasa', name: 'Vinyasa', icon: Sparkles },
    { id: 'yin', name: 'Yin', icon: Moon },
    { id: 'power', name: 'Power Yoga', icon: Target },
    { id: 'restorative', name: 'Restorative', icon: Heart }
  ];

  const yogaClasses = [
    {
      id: 1,
      name: 'Morning Hatha Flow',
      style: 'hatha',
      instructor: 'Priya Sharma',
      duration: '60 min',
      level: 'Beginner',
      time: '7:00 AM',
      days: ['Mon', 'Wed', 'Fri'],
      capacity: 20,
      enrolled: 16,
      description: 'Gentle morning practice focusing on basic postures and breathing',
      benefits: ['Improves flexibility', 'Reduces stress', 'Better posture', 'Mental clarity'],
      image: '🧘‍♀️',
      color: 'from-orange-400 to-pink-500',
      rating: 4.8,
      price: '₹1500/month'
    },
    {
      id: 2,
      name: 'Vinyasa Power Flow',
      style: 'vinyasa',
      instructor: 'Arjun Mehta',
      duration: '75 min',
      level: 'Intermediate',
      time: '6:30 PM',
      days: ['Tue', 'Thu', 'Sat'],
      capacity: 15,
      enrolled: 12,
      description: 'Dynamic flow connecting breath with movement for strength and flexibility',
      benefits: ['Builds strength', 'Increases flexibility', 'Improves balance', 'Stress relief'],
      image: '🕉️',
      color: 'from-blue-400 to-purple-500',
      rating: 4.9,
      price: '₹2000/month'
    },
    {
      id: 3,
      name: 'Yin Yoga Deep Stretch',
      style: 'yin',
      instructor: 'Meera Patel',
      duration: '90 min',
      level: 'All Levels',
      time: '8:00 PM',
      days: ['Mon', 'Wed'],
      capacity: 12,
      enrolled: 10,
      description: 'Passive stretching practice to release deep tension and calm the mind',
      benefits: ['Deep relaxation', 'Improves mobility', 'Emotional balance', 'Better sleep'],
      image: '🌙',
      color: 'from-purple-400 to-indigo-500',
      rating: 4.7,
      price: '₹1800/month'
    },
    {
      id: 4,
      name: 'Power Yoga Fusion',
      style: 'power',
      instructor: 'Rahul Singh',
      duration: '60 min',
      level: 'Advanced',
      time: '7:30 AM',
      days: ['Tue', 'Thu', 'Sat'],
      capacity: 15,
      enrolled: 11,
      description: 'High-intensity yoga combining strength training with traditional poses',
      benefits: ['Builds muscle', 'Burns calories', 'Increases stamina', 'Full body workout'],
      image: '💪',
      color: 'from-red-400 to-orange-500',
      rating: 4.8,
      price: '₹2200/month'
    },
    {
      id: 5,
      name: 'Restorative Healing',
      style: 'restorative',
      instructor: 'Anjali Gupta',
      duration: '75 min',
      level: 'All Levels',
      time: '5:30 PM',
      days: ['Wed', 'Sun'],
      capacity: 10,
      enrolled: 8,
      description: 'Gentle, supported poses using props for deep relaxation and healing',
      benefits: ['Reduces anxiety', 'Improves immunity', 'Aids recovery', 'Promotes healing'],
      image: '🌸',
      color: 'from-pink-400 to-rose-500',
      rating: 4.9,
      price: '₹1600/month'
    },
    {
      id: 6,
      name: 'Prenatal Yoga',
      style: 'hatha',
      instructor: 'Dr. Sunita Rao',
      duration: '60 min',
      level: 'Prenatal',
      time: '10:00 AM',
      days: ['Mon', 'Thu'],
      capacity: 8,
      enrolled: 6,
      description: 'Safe and gentle yoga practice designed specifically for expecting mothers',
      benefits: ['Safe for pregnancy', 'Reduces back pain', 'Prepares for labor', 'Emotional support'],
      image: '🤱',
      color: 'from-green-400 to-teal-500',
      rating: 5.0,
      price: '₹2500/month'
    },
    {
      id: 7,
      name: 'Kids Yoga Adventure',
      style: 'hatha',
      instructor: 'Kavya Joshi',
      duration: '45 min',
      level: 'Kids (5-12)',
      time: '4:00 PM',
      days: ['Sat', 'Sun'],
      capacity: 12,
      enrolled: 9,
      description: 'Fun and engaging yoga sessions designed to help children develop flexibility and focus',
      benefits: ['Improves concentration', 'Builds confidence', 'Better sleep', 'Emotional regulation'],
      image: '🧒',
      color: 'from-yellow-400 to-orange-400',
      rating: 4.8,
      price: '₹1200/month'
    },
    {
      id: 8,
      name: 'Senior Gentle Yoga',
      style: 'hatha',
      instructor: 'Rakesh Agarwal',
      duration: '50 min',
      level: 'Senior (55+)',
      time: '9:00 AM',
      days: ['Mon', 'Wed', 'Fri'],
      capacity: 15,
      enrolled: 12,
      description: 'Gentle yoga practice tailored for seniors focusing on mobility and balance',
      benefits: ['Improves balance', 'Joint mobility', 'Pain relief', 'Social connection'],
      image: '👴',
      color: 'from-cyan-400 to-blue-500',
      rating: 4.9,
      price: '₹1400/month'
    }
  ];

  const filteredClasses = activeStyle === 'all' 
    ? yogaClasses 
    : yogaClasses.filter(cls => cls.style === activeStyle);

  const yogaBenefits = [
    {
      icon: Heart,
      title: 'Mental Wellness',
      description: 'Reduce stress, anxiety, and improve mental clarity through mindful practice'
    },
    {
      icon: Target,
      title: 'Physical Strength',
      description: 'Build strength, flexibility, and improve overall physical health'
    },
    {
      icon: Sparkles,
      title: 'Spiritual Growth',
      description: 'Connect with your inner self and develop a deeper sense of awareness'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join a supportive community of like-minded individuals on their yoga journey'
    }
  ];

  const stats = [
    {
      icon: Users,
      number: '300+',
      label: 'Yoga Students',
      description: 'Regular practitioners'
    },
    {
      icon: Award,
      number: '8+',
      label: 'Certified Instructors',
      description: 'Expert teachers'
    },
    {
      icon: Flower2,
      number: '15+',
      label: 'Class Types',
      description: 'Diverse styles'
    },
    {
      icon: Star,
      number: '4.9',
      label: 'Average Rating',
      description: 'Student satisfaction'
    }
  ];

  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case 'beginner': return 'text-green-400 bg-green-400/20';
      case 'intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'advanced': return 'text-red-400 bg-red-400/20';
      case 'all levels': return 'text-blue-400 bg-blue-400/20';
      case 'prenatal': return 'text-pink-400 bg-pink-400/20';
      case 'kids (5-12)': return 'text-orange-400 bg-orange-400/20';
      case 'senior (55+)': return 'text-cyan-400 bg-cyan-400/20';
      default: return 'text-white bg-white/20';
    }
  };

  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Particles Background */}
      <div className="fixed inset-0 z-[1] w-full h-full min-h-screen pointer-events-none">
        <Particles
          particleCount={600}
          particleSpread={20}
          speed={0.05}
          particleColors={["#FACC15", "#C084FC", "#FB7185", "#60A5FA", "#34D399"]}
          moveParticlesOnHover={true}
          particleHoverFactor={1.2}
          alphaParticles={true}
          particleBaseSize={120}
          sizeRandomness={1.5}
          cameraDistance={30}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full border border-purple-400/30 backdrop-blur-sm mb-6">
                <Flower2 className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-sm text-white/80">Mind • Body • Spirit</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Yoga
                <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Journey
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
                Discover inner peace, build strength, and enhance flexibility through our diverse range of yoga classes. 
                From gentle Hatha to dynamic Vinyasa, find your perfect practice.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="group relative px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-purple-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Start Your Practice
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link to="/schedule" className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <Calendar className="w-5 h-5 mr-2" />
                  Class Schedule
                </Link>
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
                  <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Benefits of
                <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Yoga Practice
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Experience the transformative power of yoga that nurtures your body, calms your mind, and enriches your spirit.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {yogaBenefits.map((benefit, index) => (
                <div key={index} className="group">
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-6 mx-auto">
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

        {/* Style Filter */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {yogaStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setActiveStyle(style.id)}
                  className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeStyle === style.id
                      ? 'bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-lg'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  <style.icon className="w-4 h-4 mr-2" />
                  {style.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Yoga Classes */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Yoga
                <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Classes
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Choose from our diverse range of yoga classes, each designed to meet different needs and experience levels.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredClasses.map((cls, index) => (
                <div key={cls.id} className="group cursor-pointer" onClick={() => setSelectedClass(cls)}>
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{cls.image}</div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-white text-sm">{cls.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{cls.name}</h3>
                    <p className="text-white/80 mb-4 text-sm">{cls.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(cls.level)}`}>
                        {cls.level}
                      </div>
                      <div className="text-purple-400 font-semibold">
                        {cls.price}
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-white/80 text-sm">
                        <User className="w-4 h-4 mr-2" />
                        {cls.instructor}
                      </div>
                      <div className="flex items-center text-white/80 text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        {cls.duration} • {cls.time}
                      </div>
                      <div className="flex items-center text-white/80 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {cls.days.join(', ')}
                      </div>
                      <div className="flex items-center text-white/80 text-sm">
                        <Users className="w-4 h-4 mr-2" />
                        {cls.enrolled}/{cls.capacity} students
                      </div>
                    </div>
                    
                    {/* Class availability bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-white/60 mb-1">
                        <span>Class Availability</span>
                        <span>{cls.capacity - cls.enrolled} spots left</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div 
                          className={`h-2 bg-gradient-to-r ${cls.color} rounded-full`}
                          style={{ width: `${(cls.enrolled / cls.capacity) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button className={`flex-1 py-2 bg-gradient-to-r ${cls.color} rounded-lg font-semibold text-white text-sm hover:shadow-lg transition-all duration-300`}>
                        Book Class
                      </button>
                      <button className="px-4 py-2 border border-white/20 rounded-lg text-white text-sm hover:bg-white/10 transition-all duration-300 flex items-center">
                        <Play className="w-4 h-4 mr-1" />
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredClasses.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🧘‍♂️</div>
                <h3 className="text-2xl font-bold text-white mb-4">No Classes Found</h3>
                <p className="text-white/80">Try selecting a different yoga style to see available classes.</p>
              </div>
            )}
          </div>
        </section>

        {/* Yoga Philosophy Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  The Philosophy of
                  <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Yoga
                  </span>
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🧘‍♀️</div>
                  <h3 className="text-xl font-bold text-white mb-4">Asanas</h3>
                  <p className="text-white/80">
                    Physical postures that strengthen and purify the body, preparing it for deeper spiritual practices.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🫁</div>
                  <h3 className="text-xl font-bold text-white mb-4">Pranayama</h3>
                  <p className="text-white/80">
                    Breathing techniques that control life force energy, bringing balance to mind and body.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🧠</div>
                  <h3 className="text-xl font-bold text-white mb-4">Meditation</h3>
                  <p className="text-white/80">
                    Practices that quiet the mind, leading to self-realization and inner peace.
                  </p>
                </div>
              </div>

              <div className="text-center mt-12">
                <p className="text-white/90 text-lg italic max-w-3xl mx-auto">
                  "Yoga is not about touching your toes. It is about what you learn on the way down."
                </p>
                <p className="text-white/60 mt-2">- Judith Hanson Lasater</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-purple-400/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Begin Your Yoga Journey Today
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Take the first step towards a healthier, more balanced life. Join our welcoming yoga community and discover your inner strength.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-purple-400/25 transition-all duration-300 hover:scale-105">
                  Start Free Trial
                </Link>
                <Link to="/contact" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Meet Our Teachers
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Class Detail Modal */}
      {selectedClass && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedClass(null)}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-2xl w-full border border-white/20 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-white">{selectedClass.name}</h3>
              <button onClick={() => setSelectedClass(null)} className="text-white/60 hover:text-white text-2xl">×</button>
            </div>
            
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{selectedClass.image}</div>
              <p className="text-white/80 text-lg">{selectedClass.description}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-xl font-bold text-white">{selectedClass.instructor}</div>
                <div className="text-white/60">Instructor</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-xl font-bold text-white">{selectedClass.duration}</div>
                <div className="text-white/60">Duration</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-xl font-bold text-white">{selectedClass.level}</div>
                <div className="text-white/60">Level</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-xl font-bold text-purple-400">{selectedClass.price}</div>
                <div className="text-white/60">Monthly Fee</div>
              </div>
            </div>
            
            <div className="space-y-3 mb-8">
              <h4 className="text-xl font-semibold text-white">Benefits:</h4>
              {selectedClass.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center text-white/80">
                  <div className={`w-3 h-3 bg-gradient-to-r ${selectedClass.color} rounded-full mr-3`}></div>
                  {benefit}
                </div>
              ))}
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white">Class Schedule</span>
                <span className="text-white">{selectedClass.days.join(', ')} at {selectedClass.time}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-white">Available Spots</span>
                <span className="text-white">{selectedClass.capacity - selectedClass.enrolled}/{selectedClass.capacity}</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className={`h-2 bg-gradient-to-r ${selectedClass.color} rounded-full`}
                  style={{ width: `${(selectedClass.enrolled / selectedClass.capacity) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className={`flex-1 py-3 bg-gradient-to-r ${selectedClass.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                Book This Class
              </button>
              <button onClick={() => setSelectedClass(null)} className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
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

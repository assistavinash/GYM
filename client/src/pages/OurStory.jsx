import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Users, 
  Trophy,
  Target,
  Star,
  ArrowRight,
  Calendar,
  MapPin,
  Award,
  CheckCircle,
  Lightbulb,
  TrendingUp,
  Globe,
  Handshake,
  Sparkles,
  Building
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function OurStory() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('journey');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const milestones = [
    {
      year: '2018',
      title: 'The Vision',
      description: 'Founded with a dream to revolutionize fitness in India',
      icon: Lightbulb,
      details: 'Started in a small 1000 sq ft space with just 5 pieces of equipment and a big dream to create India\'s most comprehensive fitness experience.',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      year: '2019',
      title: 'First Expansion',
      description: 'Grew to 5000 sq ft with state-of-the-art equipment',
      icon: Building,
      details: 'Added swimming pool, group fitness studios, and premium equipment. Our membership grew from 50 to 500 dedicated fitness enthusiasts.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      year: '2020',
      title: 'Digital Innovation',
      description: 'Launched virtual training during the pandemic',
      icon: Globe,
      details: 'When the world stopped, we innovated. Launched online classes, virtual personal training, and kept our community connected through fitness.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      year: '2021',
      title: 'Award Recognition',
      description: 'Best Gym in the City - Fitness Excellence Award',
      icon: Trophy,
      details: 'Recognized for outstanding service, innovative programs, and community impact. Our trainers won multiple certifications and competitions.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      year: '2022',
      title: 'Wellness Center',
      description: 'Added spa, nutrition counseling, and physiotherapy',
      icon: Heart,
      details: 'Evolved into a complete wellness destination with holistic health services, meditation rooms, and expert nutritionists.',
      color: 'from-red-400 to-pink-500'
    },
    {
      year: '2023',
      title: 'Community Hub',
      description: '2000+ members, 50+ trainers, endless possibilities',
      icon: Users,
      details: 'Became the city\'s largest fitness community. Hosting events, competitions, and wellness workshops that bring people together.',
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Fitness',
      description: 'We live and breathe fitness. Every decision we make is driven by our love for helping people transform their lives.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'More than a gym, we\'re a family. We celebrate every milestone, support through challenges, and grow together.'
    },
    {
      icon: Trophy,
      title: 'Excellence Always',
      description: 'We never settle for good enough. From equipment to service, we strive for excellence in everything we do.'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'Your success is our success. We\'re committed to helping you achieve your fitness goals, no matter how big or small.'
    },
    {
      icon: Handshake,
      title: 'Integrity & Trust',
      description: 'We build relationships based on trust, honesty, and genuine care for our members\' wellbeing.'
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'We constantly evolve, bringing the latest in fitness technology, training methods, and wellness approaches.'
    }
  ];

  const achievements = [
    {
      number: '2000+',
      label: 'Members Transformed',
      description: 'Lives changed through fitness'
    },
    {
      number: '50+',
      label: 'Expert Trainers',
      description: 'Certified professionals'
    },
    {
      number: '10,000+',
      label: 'Sq Ft Facility',
      description: 'Premium workout space'
    },
    {
      number: '95%',
      label: 'Member Retention',
      description: 'Satisfaction guarantee'
    },
    {
      number: '5',
      label: 'Years Strong',
      description: 'Serving our community'
    },
    {
      number: '24/7',
      label: 'Access Available',
      description: 'Fitness on your schedule'
    }
  ];

  const team = [
    {
      name: 'Raj Sharma',
      role: 'Founder & CEO',
      story: 'Former athlete turned entrepreneur with a vision to democratize fitness in India.',
      achievement: 'Built India\'s most awarded fitness center'
    },
    {
      name: 'Priya Singh',
      role: 'Head of Training',
      story: 'International certified trainer with 15+ years experience in fitness and wellness.',
      achievement: 'Trained 500+ successful transformations'
    },
    {
      name: 'Dr. Amit Patel',
      role: 'Wellness Director',
      story: 'Sports medicine physician ensuring safe and effective training for all members.',
      achievement: 'Zero injury record for 3 consecutive years'
    },
    {
      name: 'Sarah Johnson',
      role: 'Nutrition Expert',
      story: 'Internationally certified nutritionist specializing in sports and wellness nutrition.',
      achievement: 'Created 200+ personalized meal plans'
    }
  ];

  const mission = {
    title: 'Our Mission',
    content: 'To inspire and empower individuals to achieve their best selves through comprehensive fitness, wellness, and community support. We believe fitness is not just about physical transformation – it\'s about building confidence, discipline, and a lifestyle that radiates health and happiness.',
    goals: [
      'Make fitness accessible to everyone',
      'Create a supportive community environment',
      'Provide world-class facilities and expertise',
      'Promote holistic wellness beyond just exercise',
      'Inspire lifelong healthy lifestyle changes'
    ]
  };

  const vision = {
    title: 'Our Vision',
    content: 'To become India\'s most trusted and innovative fitness destination where every individual, regardless of their starting point, can discover their potential and transform their life through the power of fitness and community.',
    future: [
      'Expand to multiple locations across the country',
      'Launch fitness technology innovations',
      'Create scholarship programs for underprivileged youth',
      'Develop online wellness certification programs',
      'Build partnerships with healthcare providers'
    ]
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
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full border border-blue-400/30 backdrop-blur-sm mb-6">
                <Heart className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-sm text-white/80">Our Journey</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Our
                <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Story
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-8">
                From a small dream to India's premier fitness destination. Discover the passion, 
                dedication, and community spirit that built PowerPoint Gym into what it is today.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="group relative px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Join Our Story
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <button 
                  onClick={() => setActiveTab('mission')}
                  className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <Target className="w-5 h-5 mr-2" />
                  Our Mission
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    {achievement.number}
                  </div>
                  <div className="text-white font-semibold mb-1">{achievement.label}</div>
                  <div className="text-white/60 text-sm">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center mb-8 bg-white/5 rounded-2xl p-2">
              {['journey', 'mission', 'values', 'team'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-lg'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Tab */}
        {activeTab === 'journey' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Our
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Journey
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Every great story has humble beginnings. Here's how we grew from a small fitness studio to India's premier wellness destination.
                </p>
              </div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="group">
                    <div className="grid md:grid-cols-12 gap-8 items-center">
                      <div className="md:col-span-2 text-center md:text-right">
                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                          {milestone.year}
                        </div>
                      </div>
                      
                      <div className="md:col-span-2 flex justify-center">
                        <div className={`w-16 h-16 bg-gradient-to-r ${milestone.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <milestone.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      <div className="md:col-span-8">
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                          <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                          <p className="text-lg text-white/80 mb-4">{milestone.description}</p>
                          <p className="text-white/70 leading-relaxed">{milestone.details}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Mission Tab */}
        {activeTab === 'mission' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="bg-gradient-to-r from-blue-400/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-8 border border-white/10 h-full">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-6">{mission.title}</h2>
                    <p className="text-white/80 text-lg leading-relaxed mb-8">{mission.content}</p>
                    
                    <div className="space-y-3">
                      {mission.goals.map((goal, index) => (
                        <div key={index} className="flex items-center text-white/80">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {goal}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gradient-to-r from-purple-400/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-8 border border-white/10 h-full">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-6">{vision.title}</h2>
                    <p className="text-white/80 text-lg leading-relaxed mb-8">{vision.content}</p>
                    
                    <div className="space-y-3">
                      {vision.future.map((item, index) => (
                        <div key={index} className="flex items-center text-white/80">
                          <Star className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Values Tab */}
        {activeTab === 'values' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Our
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Values
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  The core principles that guide everything we do and shape the culture of our fitness community.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 text-center h-full">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                      <p className="text-white/80 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Team Tab */}
        {activeTab === 'team' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Our
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Leadership
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Meet the passionate leaders who drive our mission and make our vision a reality every day.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {team.map((member, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                      <div className="text-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4 mx-auto">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                        <div className="text-blue-400 font-semibold mb-4">{member.role}</div>
                      </div>
                      
                      <p className="text-white/80 text-center mb-6 leading-relaxed">{member.story}</p>
                      
                      <div className="bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-xl p-4 text-center">
                        <div className="text-sm text-white/60 mb-1">Key Achievement</div>
                        <div className="text-white font-semibold">{member.achievement}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">Join Our Team</h3>
                  <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                    We're always looking for passionate individuals who share our values and want to make a difference in people's lives through fitness.
                  </p>
                  <Link to="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300">
                    Career Opportunities
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-blue-400/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Be Part of Our Story
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Every member adds a new chapter to our story. Join thousands who have transformed their lives 
                and become part of our growing fitness family.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  Start Your Journey
                </Link>
                <Link to="/contact" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Visit Our Gym
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

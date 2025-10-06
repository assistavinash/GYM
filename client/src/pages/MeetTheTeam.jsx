import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Star, 
  Award,
  Target,
  Heart,
  ArrowRight,
  Calendar,
  MapPin,
  Trophy,
  CheckCircle,
  Clock,
  Phone,
  Mail,
  Dumbbell,
  Activity,
  Zap,
  Shield
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function MeetTheTeam() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeTab, setActiveTab] = useState('trainers');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const trainers = [
    {
      id: 1,
      name: 'Raj Sharma',
      role: 'Head Trainer & Founder',
      department: 'leadership',
      specializations: ['Strength Training', 'Olympic Lifting', 'Bodybuilding', 'Leadership'],
      experience: '12 Years',
      certifications: ['NASM-CPT', 'Olympic Lifting Coach', 'Nutrition Specialist'],
      image: '💪',
      bio: 'Former national-level powerlifter turned fitness entrepreneur. Raj\'s passion for strength training and helping others achieve their potential led him to create PowerPoint Gym.',
      achievements: ['National Powerlifting Champion 2015', 'Trained 500+ successful transformations', 'Certified Master Trainer'],
      specialties: 'Strength training, Olympic lifts, competition prep, and building mental toughness.',
      philosophy: 'Every rep counts, every day matters. Consistency and dedication are the keys to unlocking your true potential.',
      availability: 'Mon-Fri: 6AM-12PM, Sat: 8AM-2PM',
      rating: 4.9,
      clientsTransformed: 500,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 2,
      name: 'Priya Singh',
      role: 'Senior Personal Trainer',
      department: 'training',
      specializations: ['HIIT', 'Functional Training', 'Weight Loss', 'Group Classes'],
      experience: '8 Years',
      certifications: ['ACE-CPT', 'HIIT Specialist', 'Group Fitness Instructor'],
      image: '🏃‍♀️',
      bio: 'High-energy trainer specializing in metabolic conditioning and functional movement. Known for her motivational coaching style and incredible results.',
      achievements: ['Best Trainer Award 2022', '300+ successful weight loss transformations', 'Featured in Fitness Magazine'],
      specialties: 'HIIT workouts, functional training, weight loss programs, and group motivation.',
      philosophy: 'Fitness should be fun, challenging, and sustainable. I help you fall in love with being strong.',
      availability: 'Mon-Wed-Fri: 5AM-11AM, Tue-Thu: 4PM-8PM',
      rating: 4.8,
      clientsTransformed: 350,
      color: 'from-pink-400 to-rose-500'
    },
    {
      id: 3,
      name: 'Dr. Amit Patel',
      role: 'Sports Medicine & Physiotherapy',
      department: 'wellness',
      specializations: ['Injury Rehabilitation', 'Sports Medicine', 'Movement Analysis', 'Recovery'],
      experience: '15 Years',
      certifications: ['MD Sports Medicine', 'Licensed Physiotherapist', 'Movement Specialist'],
      image: '🩺',
      bio: 'Board-certified sports medicine physician with extensive experience in athlete rehabilitation and injury prevention.',
      achievements: ['Team Doctor for State Athletes', 'Zero injury rate for 3 years', 'Published researcher'],
      specialties: 'Injury prevention, rehabilitation, movement analysis, and safe training protocols.',
      philosophy: 'Prevention is better than cure. Proper movement and recovery are essential for long-term success.',
      availability: 'Tue-Thu-Sat: 9AM-5PM, Mon-Wed: 2PM-6PM',
      rating: 5.0,
      clientsTransformed: 200,
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      role: 'Nutrition & Wellness Coach',
      department: 'wellness',
      specializations: ['Sports Nutrition', 'Meal Planning', 'Supplement Guidance', 'Lifestyle Coaching'],
      experience: '10 Years',
      certifications: ['RD', 'Sports Nutritionist', 'Wellness Coach Certification'],
      image: '🥗',
      bio: 'Registered dietitian and wellness coach helping clients achieve their goals through proper nutrition and sustainable lifestyle changes.',
      achievements: ['Nutrition Coach of the Year', '400+ meal plans created', 'Wellness seminar speaker'],
      specialties: 'Personalized nutrition plans, sports nutrition, supplement guidance, and habit formation.',
      philosophy: 'Nutrition is not about restriction, it\'s about nourishing your body to perform and feel its best.',
      availability: 'Mon-Wed-Fri: 10AM-6PM, Sat: 9AM-1PM',
      rating: 4.9,
      clientsTransformed: 400,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 5,
      name: 'Mike Chen',
      role: 'CrossFit & Functional Training',
      department: 'training',
      specializations: ['CrossFit', 'Olympic Lifting', 'Mobility', 'Competition Prep'],
      experience: '9 Years',
      certifications: ['CrossFit L3', 'Olympic Lifting Coach', 'Mobility Specialist'],
      image: '🏋️‍♂️',
      bio: 'Former competitive CrossFit athlete bringing elite-level training methods to help members achieve peak performance.',
      achievements: ['Regional CrossFit Competitor', 'Coached 50+ competition athletes', 'Mobility workshop leader'],
      specialties: 'CrossFit methodology, Olympic lifts, mobility work, and mental toughness training.',
      philosophy: 'Embrace the discomfort. Every workout is an opportunity to become a better version of yourself.',
      availability: 'Mon-Wed-Fri: 5AM-10AM, Tue-Thu: 6PM-9PM',
      rating: 4.8,
      clientsTransformed: 280,
      color: 'from-red-400 to-orange-500'
    },
    {
      id: 6,
      name: 'Kavya Reddy',
      role: 'Yoga & Mind-Body Wellness',
      department: 'wellness',
      specializations: ['Hatha Yoga', 'Vinyasa Flow', 'Meditation', 'Stress Management'],
      experience: '7 Years',
      certifications: ['RYT-500', 'Meditation Teacher', 'Ayurveda Consultant'],
      image: '🧘‍♀️',
      bio: 'Certified yoga instructor and wellness coach specializing in the mind-body connection and stress management through ancient practices.',
      achievements: ['Yoga Alliance Certified', '300+ students taught', 'Wellness retreat leader'],
      specialties: 'Yoga instruction, meditation, breathwork, and holistic wellness approaches.',
      philosophy: 'True strength comes from the union of mind, body, and spirit. Find your balance within.',
      availability: 'Daily: 7AM-9AM, Mon-Wed-Fri: 6PM-8PM',
      rating: 4.9,
      clientsTransformed: 320,
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const supportStaff = [
    {
      name: 'David Kumar',
      role: 'Gym Manager',
      department: 'operations',
      experience: '6 Years',
      responsibilities: ['Daily Operations', 'Member Services', 'Staff Coordination', 'Facility Management'],
      image: '👨‍💼'
    },
    {
      name: 'Lisa Wong',
      role: 'Member Experience Coordinator',
      department: 'operations',
      experience: '4 Years',
      responsibilities: ['New Member Onboarding', 'Program Coordination', 'Event Planning', 'Community Building'],
      image: '👩‍💼'
    },
    {
      name: 'Tom Rodriguez',
      role: 'Equipment & Maintenance',
      department: 'operations',
      experience: '8 Years',
      responsibilities: ['Equipment Maintenance', 'Safety Inspections', 'Facility Upkeep', 'Technical Support'],
      image: '🔧'
    },
    {
      name: 'Jennifer Lee',
      role: 'Reception & Customer Care',
      department: 'operations',
      experience: '3 Years',
      responsibilities: ['Front Desk Operations', 'Membership Sales', 'Customer Support', 'Administrative Tasks'],
      image: '👩‍💻'
    }
  ];

  const teamStats = [
    {
      icon: Users,
      number: '25+',
      label: 'Team Members',
      description: 'Dedicated professionals'
    },
    {
      icon: Trophy,
      number: '100+',
      label: 'Certifications',
      description: 'Professional credentials'
    },
    {
      icon: Star,
      number: '4.9',
      label: 'Average Rating',
      description: 'Member satisfaction'
    },
    {
      icon: Award,
      number: '50+',
      label: 'Awards Won',
      description: 'Industry recognition'
    }
  ];

  const departments = [
    {
      name: 'Training',
      count: trainers.filter(t => t.department === 'training').length,
      description: 'Personal trainers and fitness specialists',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      name: 'Wellness',
      count: trainers.filter(t => t.department === 'wellness').length,
      description: 'Health and wellness professionals',
      color: 'from-green-400 to-emerald-500'
    },
    {
      name: 'Leadership',
      count: trainers.filter(t => t.department === 'leadership').length,
      description: 'Management and leadership team',
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Operations',
      count: supportStaff.length,
      description: 'Support and operations staff',
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  const filteredTrainers = selectedDepartment === 'all' 
    ? trainers 
    : trainers.filter(t => t.department === selectedDepartment);

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
                <Users className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-sm text-white/80">Expert Team</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Meet The
                <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Team
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-8">
                Get to know the passionate professionals who make your fitness journey possible. 
                Our expert team brings decades of combined experience in fitness, wellness, and member care.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="group relative px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Join Our Community
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <button 
                  onClick={() => setActiveTab('departments')}
                  className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <Target className="w-5 h-5 mr-2" />
                  View Departments
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {teamStats.map((stat, index) => (
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
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center mb-8 bg-white/5 rounded-2xl p-2">
              {['trainers', 'support', 'departments'].map((tab) => (
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

        {/* Trainers Tab */}
        {activeTab === 'trainers' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Our Expert
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Trainers
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                  Meet our certified fitness professionals who are dedicated to helping you achieve your goals safely and effectively.
                </p>

                {/* Department Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {['all', 'training', 'wellness', 'leadership'].map((dept) => (
                    <button
                      key={dept}
                      onClick={() => setSelectedDepartment(dept)}
                      className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedDepartment === dept
                          ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white'
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      {dept.charAt(0).toUpperCase() + dept.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTrainers.map((trainer, index) => (
                  <div key={trainer.id} className="group cursor-pointer" onClick={() => setSelectedMember(trainer)}>
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                      <div className="text-center mb-6">
                        <div className="text-5xl mb-4">{trainer.image}</div>
                        <h3 className="text-2xl font-bold text-white mb-2">{trainer.name}</h3>
                        <p className="text-blue-400 font-semibold mb-4">{trainer.role}</p>
                        <div className="flex items-center justify-center gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(trainer.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                          ))}
                          <span className="text-white/80 text-sm ml-2">{trainer.rating}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-white/80 text-sm">
                          <span>Experience:</span>
                          <span className="text-white font-semibold">{trainer.experience}</span>
                        </div>
                        <div className="flex justify-between text-white/80 text-sm">
                          <span>Clients:</span>
                          <span className="text-white font-semibold">{trainer.clientsTransformed}+</span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <h4 className="text-white font-semibold mb-2">Specializations:</h4>
                        {trainer.specializations.slice(0, 3).map((spec, i) => (
                          <div key={i} className="text-white/80 text-sm">
                            • {spec}
                          </div>
                        ))}
                        {trainer.specializations.length > 3 && (
                          <div className="text-white/60 text-sm">
                            +{trainer.specializations.length - 3} more
                          </div>
                        )}
                      </div>
                      
                      <button className={`w-full py-3 bg-gradient-to-r ${trainer.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                        View Profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Support Staff Tab */}
        {activeTab === 'support' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Support
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Team
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  The dedicated professionals who ensure smooth operations and exceptional member experience every day.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {supportStaff.map((member, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 text-center h-full">
                      <div className="text-4xl mb-4">{member.image}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-blue-400 font-semibold mb-4">{member.role}</p>
                      <div className="text-white/80 text-sm mb-4">{member.experience} Experience</div>
                      
                      <div className="space-y-2">
                        <h4 className="text-white font-semibold text-sm mb-2">Key Responsibilities:</h4>
                        {member.responsibilities.map((resp, i) => (
                          <div key={i} className="text-white/70 text-xs">
                            • {resp}
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

        {/* Departments Tab */}
        {activeTab === 'departments' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Our
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Departments
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Organized teams of specialists working together to provide comprehensive fitness and wellness services.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {departments.map((dept, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 text-center h-full">
                      <div className={`w-16 h-16 bg-gradient-to-r ${dept.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{dept.name}</h3>
                      <div className="text-3xl font-bold text-white mb-2">{dept.count}</div>
                      <div className="text-white/60 text-sm mb-4">Team Members</div>
                      <p className="text-white/80 text-sm leading-relaxed">{dept.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Our Team Stands Out</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h4 className="text-white font-semibold mb-2">Certified Professionals</h4>
                    <p className="text-white/80 text-sm">All trainers hold recognized certifications and continue ongoing education</p>
                  </div>
                  <div className="text-center">
                    <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
                    <h4 className="text-white font-semibold mb-2">Passionate About Results</h4>
                    <p className="text-white/80 text-sm">Genuinely care about your success and celebrate every milestone with you</p>
                  </div>
                  <div className="text-center">
                    <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h4 className="text-white font-semibold mb-2">Personalized Approach</h4>
                    <p className="text-white/80 text-sm">Tailor programs to your specific goals, preferences, and lifestyle</p>
                  </div>
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
                Ready to Meet Your Perfect Trainer?
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Our expert team is here to guide, motivate, and support you every step of the way. 
                Find your perfect fitness partner and start your transformation today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  Start Your Journey
                </Link>
                <Link to="/contact" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Trainer Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedMember(null)}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-4xl w-full border border-white/20 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-white">{selectedMember.name}</h3>
              <button onClick={() => setSelectedMember(null)} className="text-white/60 hover:text-white text-2xl">×</button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-center mb-6">
                  <div className="text-8xl mb-4">{selectedMember.image}</div>
                  <div className="text-blue-400 font-semibold text-lg mb-2">{selectedMember.role}</div>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.floor(selectedMember.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                    ))}
                    <span className="text-white/80 ml-2">{selectedMember.rating}</span>
                  </div>
                </div>
                
                <p className="text-white/80 text-lg leading-relaxed mb-6">{selectedMember.bio}</p>
                
                <div className="bg-white/5 rounded-xl p-4 mb-6">
                  <div className="text-white font-semibold mb-2">Philosophy:</div>
                  <div className="text-white/80 italic">{selectedMember.philosophy}</div>
                </div>
              </div>
              
              <div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Specializations</h4>
                    <div className="space-y-2">
                      {selectedMember.specializations.map((spec, i) => (
                        <div key={i} className="flex items-center text-white/80">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Certifications</h4>
                    <div className="space-y-2">
                      {selectedMember.certifications.map((cert, i) => (
                        <div key={i} className="flex items-center text-white/80">
                          <Award className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                          {cert}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Key Achievements</h4>
                    <div className="space-y-2">
                      {selectedMember.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center text-white/80">
                          <Trophy className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Availability</h4>
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="flex items-center text-white/80">
                        <Clock className="w-4 h-4 text-green-400 mr-3" />
                        {selectedMember.availability}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <Link to="/register" className={`flex-1 py-3 bg-gradient-to-r ${selectedMember.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300 text-center`}>
                Book Session
              </Link>
              <Link to="/contact" className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
                Contact
              </Link>
              <button onClick={() => setSelectedMember(null)} className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
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

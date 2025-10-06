import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Trophy, 
  Heart, 
  Star,
  Target,
  TrendingUp,
  ArrowRight,
  Calendar,
  Weight,
  Timer,
  Award,
  CheckCircle,
  Quote,
  Users,
  Zap,
  Flame
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function SuccessStories() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [activeTab, setActiveTab] = useState('transformations');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const successStories = [
    {
      id: 1,
      name: 'Priya Sharma',
      age: 32,
      category: 'weight-loss',
      achievement: 'Lost 25 kg in 8 months',
      before: 'Struggled with obesity and low confidence',
      after: 'Confident, healthy, and inspiring others',
      story: 'After years of failed diets and low self-esteem, Priya joined PowerPoint Gym feeling hopeless. With dedicated training, proper nutrition guidance, and unwavering support from her trainer, she transformed not just her body but her entire outlook on life.',
      image: '👩‍🦰',
      startWeight: '85 kg',
      currentWeight: '60 kg',
      duration: '8 months',
      trainer: 'Priya Singh',
      program: 'Weight Loss Transformation',
      keyMilestones: [
        'First 5kg lost in 6 weeks',
        'Completed first 5K run in month 4',
        'Reached goal weight in month 8',
        'Now maintains healthy lifestyle'
      ],
      quote: 'PowerPoint Gym didn\'t just change my body, it changed my life. I\'m now the confident woman I always wanted to be.',
      color: 'from-pink-400 to-rose-500'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      age: 45,
      category: 'strength',
      achievement: 'Deadlifted 200kg at age 45',
      before: 'Weak, sedentary office worker',
      after: 'Strong, energetic, competitive powerlifter',
      story: 'A desk job had left Rajesh weak and constantly tired. At 45, he thought it was too late to build strength. Starting with basic movements, he gradually built incredible strength and even competed in powerlifting.',
      image: '👨‍💼',
      startWeight: '78 kg',
      currentWeight: '82 kg',
      duration: '18 months',
      trainer: 'Raj Sharma',
      program: 'Strength Building',
      keyMilestones: [
        'First bodyweight squat in month 1',
        'Deadlifted 100kg in month 6',
        'Competed in first competition month 12',
        'Hit 200kg deadlift in month 18'
      ],
      quote: 'Age is just a number. At 45, I\'m stronger than I was at 25. PowerPoint Gym made me believe in myself again.',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      age: 28,
      category: 'fitness',
      achievement: 'From couch to marathon runner',
      before: 'Couldn\'t run for 2 minutes',
      after: 'Completed 3 marathons, fitness enthusiast',
      story: 'Sarah couldn\'t run to catch a bus without being winded. Through gradual cardio progression and CrossFit training, she not only improved her endurance but fell in love with running and fitness.',
      image: '👩‍🏃',
      startWeight: '65 kg',
      currentWeight: '58 kg',
      duration: '12 months',
      trainer: 'Mike Chen',
      program: 'Endurance & CrossFit',
      keyMilestones: [
        'Ran first 1km without stopping',
        'Completed first 5K race in month 4',
        'Finished first half marathon month 8',
        'Completed first marathon month 12'
      ],
      quote: 'I never thought I\'d be a runner. Now I can\'t imagine life without it. The gym gave me a new identity.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 4,
      name: 'Amit Patel',
      age: 38,
      category: 'health',
      achievement: 'Reversed pre-diabetes',
      before: 'Pre-diabetic, high blood pressure',
      after: 'Normal blood sugar, excellent health markers',
      story: 'Facing a pre-diabetes diagnosis, Amit was scared about his future. Through structured exercise, nutrition counseling, and lifestyle changes, he completely turned around his health.',
      image: '👨‍⚕️',
      startWeight: '92 kg',
      currentWeight: '75 kg',
      duration: '10 months',
      trainer: 'Dr. Amit Patel',
      program: 'Medical Fitness',
      keyMilestones: [
        'Reduced blood sugar levels month 2',
        'Lost first 10kg in month 4',
        'Blood pressure normalized month 6',
        'Doctor cleared pre-diabetes month 10'
      ],
      quote: 'This gym literally saved my life. My doctor is amazed at my transformation.',
      color: 'from-red-400 to-orange-500'
    },
    {
      id: 5,
      name: 'Kavya Reddy',
      age: 35,
      category: 'wellness',
      achievement: 'Overcame chronic stress & anxiety',
      before: 'High stress, anxiety, poor sleep',
      after: 'Calm, balanced, excellent mental health',
      story: 'Corporate stress had taken a toll on Kavya\'s mental health. Through yoga, meditation, and mindful fitness practices, she found inner peace and balance.',
      image: '👩‍🧘',
      startWeight: '68 kg',
      currentWeight: '63 kg',
      duration: '6 months',
      trainer: 'Kavya Reddy',
      program: 'Wellness & Yoga',
      keyMilestones: [
        'Learned meditation techniques',
        'Improved sleep quality month 2',
        'Reduced anxiety levels month 4',
        'Achieved work-life balance month 6'
      ],
      quote: 'I found myself again here. The combination of physical and mental wellness changed everything.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 6,
      name: 'David Chen',
      age: 50,
      category: 'senior',
      achievement: 'Stronger at 50 than at 30',
      before: 'Age-related weakness, joint pain',
      after: 'Strong, flexible, pain-free movement',
      story: 'At 50, David felt his best days were behind him. Joint pain and weakness made daily activities difficult. Specialized senior fitness programs helped him regain strength and mobility.',
      image: '👨‍🦳',
      startWeight: '80 kg',
      currentWeight: '77 kg',
      duration: '15 months',
      trainer: 'Dr. Amit Patel',
      program: 'Senior Fitness',
      keyMilestones: [
        'Eliminated joint pain month 3',
        'Improved flexibility month 6',
        'Built significant strength month 12',
        'Inspired other seniors month 15'
      ],
      quote: 'Age is just a number. I\'m proof that it\'s never too late to get in the best shape of your life.',
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Ravi Gupta',
      role: 'Cardiologist',
      testimonial: 'I recommend PowerPoint Gym to my patients. Their medical fitness programs have helped many of my patients improve their cardiovascular health significantly.',
      rating: 5
    },
    {
      name: 'Meera Joshi',
      role: 'Working Mother',
      testimonial: 'As a busy mom, I thought I\'d never find time for fitness. The flexible schedule and supportive community here made it possible.',
      rating: 5
    },
    {
      name: 'Rohit Sharma',
      role: 'Professional Athlete',
      testimonial: 'Even as a professional athlete, I learned new techniques here. The level of expertise and equipment is world-class.',
      rating: 5
    },
    {
      name: 'Anita Verma',
      role: 'Senior Executive',
      testimonial: 'The stress relief and energy boost I get from my workouts here help me perform better in my demanding job.',
      rating: 5
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      number: '2000+',
      label: 'Success Stories',
      description: 'Lives transformed'
    },
    {
      icon: Target,
      number: '95%',
      label: 'Goal Achievement',
      description: 'Members reach goals'
    },
    {
      icon: Star,
      number: '4.9',
      label: 'Average Rating',
      description: 'Member satisfaction'
    },
    {
      icon: Heart,
      number: '100%',
      label: 'Health Improvements',
      description: 'Better quality of life'
    }
  ];

  const categories = [
    { name: 'All Stories', value: 'all', count: successStories.length },
    { name: 'Weight Loss', value: 'weight-loss', count: successStories.filter(s => s.category === 'weight-loss').length },
    { name: 'Strength Building', value: 'strength', count: successStories.filter(s => s.category === 'strength').length },
    { name: 'Fitness Journey', value: 'fitness', count: successStories.filter(s => s.category === 'fitness').length },
    { name: 'Health Recovery', value: 'health', count: successStories.filter(s => s.category === 'health').length },
    { name: 'Wellness', value: 'wellness', count: successStories.filter(s => s.category === 'wellness').length },
    { name: 'Senior Fitness', value: 'senior', count: successStories.filter(s => s.category === 'senior').length }
  ];

  const filteredStories = selectedCategory === 'all' 
    ? successStories 
    : successStories.filter(s => s.category === selectedCategory);

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
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full border border-yellow-400/30 backdrop-blur-sm mb-6">
                <Trophy className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-sm text-white/80">Real Transformations</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Success
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Stories
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-8">
                Real people, real results, real inspiration. Discover how our members have transformed 
                their lives through dedication, expert guidance, and the power of community support.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Start Your Story
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <button 
                  onClick={() => setActiveTab('testimonials')}
                  className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <Star className="w-5 h-5 mr-2" />
                  View Testimonials
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{achievement.number}</div>
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
              {['transformations', 'testimonials'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Transformations Tab */}
        {activeTab === 'transformations' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Amazing
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Transformations
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                  Every story is unique, but they all share one thing: the courage to start and the determination to succeed.
                </p>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedCategory === category.value
                          ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredStories.map((story, index) => (
                  <div key={story.id} className="group cursor-pointer" onClick={() => setSelectedStory(story)}>
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                      <div className="text-center mb-6">
                        <div className="text-5xl mb-4">{story.image}</div>
                        <h3 className="text-2xl font-bold text-white mb-2">{story.name}</h3>
                        <p className="text-yellow-400 font-semibold mb-2">Age: {story.age}</p>
                        <p className="text-white/80 mb-4 font-semibold">{story.achievement}</p>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="text-center">
                          <div className="text-sm text-white/60 mb-1">Transformation Time</div>
                          <div className="text-white font-semibold">{story.duration}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div className="bg-white/5 rounded-lg p-2">
                            <div className="text-xs text-white/60">Before</div>
                            <div className="text-white font-semibold text-sm">{story.startWeight}</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-2">
                            <div className="text-xs text-white/60">After</div>
                            <div className="text-white font-semibold text-sm">{story.currentWeight}</div>
                          </div>
                        </div>
                      </div>

                      <div className="text-center mb-6">
                        <div className="bg-white/5 rounded-xl p-4">
                          <Quote className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                          <p className="text-white/80 text-sm italic">"{story.quote.substring(0, 80)}..."</p>
                        </div>
                      </div>
                      
                      <button className={`w-full py-3 bg-gradient-to-r ${story.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                        Read Full Story
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonials Tab */}
        {activeTab === 'testimonials' && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Member
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Testimonials
                  </span>
                </h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Hear what our members and healthcare professionals say about their experience with us.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 h-full">
                      <div className="flex items-center justify-center mb-6">
                        <Quote className="w-8 h-8 text-yellow-400" />
                      </div>
                      
                      <p className="text-white/80 text-lg leading-relaxed mb-6 text-center italic">
                        "{testimonial.testimonial}"
                      </p>
                      
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-yellow-400 font-semibold">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">Share Your Story</h3>
                  <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                    Have you experienced transformation at PowerPoint Gym? We'd love to hear about your journey and inspire others.
                  </p>
                  <Link to="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300">
                    Share Your Success
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Your Success Story Starts Here
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Every success story started with a single step. Take yours today and join thousands who have 
                transformed their lives at PowerPoint Gym.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-105">
                  Begin Your Journey
                </Link>
                <Link to="/contact" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Get Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Story Detail Modal */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedStory(null)}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-4xl w-full border border-white/20 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-white">{selectedStory.name}'s Journey</h3>
              <button onClick={() => setSelectedStory(null)} className="text-white/60 hover:text-white text-2xl">×</button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-center mb-6">
                  <div className="text-8xl mb-4">{selectedStory.image}</div>
                  <div className="text-yellow-400 font-semibold text-lg mb-2">Age: {selectedStory.age}</div>
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${selectedStory.color} rounded-full text-white font-semibold mb-4`}>
                    {selectedStory.achievement}
                  </div>
                </div>
                
                <p className="text-white/80 text-lg leading-relaxed mb-6">{selectedStory.story}</p>
                
                <div className="bg-white/5 rounded-xl p-4 mb-6">
                  <Quote className="w-6 h-6 text-yellow-400 mb-2" />
                  <p className="text-white/80 italic">"{selectedStory.quote}"</p>
                </div>
              </div>
              
              <div>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <Weight className="w-6 h-6 text-red-400 mx-auto mb-2" />
                      <div className="text-sm text-white/60">Starting Weight</div>
                      <div className="text-white font-bold">{selectedStory.startWeight}</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <Target className="w-6 h-6 text-green-400 mx-auto mb-2" />
                      <div className="text-sm text-white/60">Current Weight</div>
                      <div className="text-white font-bold">{selectedStory.currentWeight}</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="flex items-center mb-3">
                      <Timer className="w-5 h-5 text-blue-400 mr-2" />
                      <h4 className="text-white font-semibold">Program Details</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-white/80">
                        <span>Duration:</span>
                        <span className="text-white">{selectedStory.duration}</span>
                      </div>
                      <div className="flex justify-between text-white/80">
                        <span>Trainer:</span>
                        <span className="text-white">{selectedStory.trainer}</span>
                      </div>
                      <div className="flex justify-between text-white/80">
                        <span>Program:</span>
                        <span className="text-white">{selectedStory.program}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                      <Trophy className="w-5 h-5 text-yellow-400 mr-2" />
                      Key Milestones
                    </h4>
                    <div className="space-y-2">
                      {selectedStory.keyMilestones.map((milestone, i) => (
                        <div key={i} className="flex items-center text-white/80">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {milestone}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              <button className={`flex-1 py-3 bg-gradient-to-r ${selectedStory.color} rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300`}>
                Start Similar Program
              </button>
              <Link to="/trainers" className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
                Meet Trainers
              </Link>
              <button onClick={() => setSelectedStory(null)} className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
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

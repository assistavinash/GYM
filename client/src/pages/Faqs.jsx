import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Search,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Users,
  CreditCard,
  Dumbbell,
  Calendar,
  Shield,
  ArrowRight
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Faqs() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle },
    { id: 'membership', name: 'Membership', icon: Users },
    { id: 'classes', name: 'Classes', icon: Calendar },
    { id: 'equipment', name: 'Equipment', icon: Dumbbell },
    { id: 'payment', name: 'Payment', icon: CreditCard },
    { id: 'policy', name: 'Policies', icon: Shield }
  ];

  const faqs = [
    // Membership FAQs
    {
      id: 1,
      category: 'membership',
      question: 'What membership plans do you offer?',
      answer: 'We offer various membership plans including Basic (1 month), Pro (3 months), Premium (6 months), Corporate, and Family packages. Each plan includes different benefits like gym access, group classes, personal training sessions, and more. You can view detailed pricing and features on our membership page.',
      popular: true
    },
    {
      id: 2,
      category: 'membership',
      question: 'Can I freeze or cancel my membership?',
      answer: 'Yes, you can freeze your membership for up to 2 months per year due to medical reasons, travel, or other valid circumstances. For cancellations, we require 30 days notice. Corporate and family memberships have different terms. Please contact our support team for assistance.'
    },
    {
      id: 3,
      category: 'membership',
      question: 'Do you offer trial memberships?',
      answer: 'Absolutely! We offer a 3-day free trial for new members. This includes access to gym equipment, one group class, and a consultation with our fitness experts. You can book your trial online or visit our facility directly.'
    },
    {
      id: 4,
      category: 'membership',
      question: 'What are the gym operating hours?',
      answer: 'Our gym is open Monday to Saturday from 5:00 AM to 11:00 PM, and Sunday from 6:00 AM to 10:00 PM. Premium members get 24/7 access after completing our orientation program. Holiday hours may vary.'
    },

    // Classes FAQs
    {
      id: 5,
      category: 'classes',
      question: 'How do I book group classes?',
      answer: 'You can book classes through our mobile app, website, or at the front desk. Booking opens 48 hours in advance. Some popular classes fill up quickly, so we recommend booking early. Cancellations must be made at least 2 hours before class time.'
    },
    {
      id: 6,
      category: 'classes',
      question: 'What should I bring to yoga classes?',
      answer: 'We provide yoga mats, but you\'re welcome to bring your own. Wear comfortable, stretchy clothing and bring a water bottle. For hot yoga classes, bring a towel. Props like blocks and straps are provided.'
    },
    {
      id: 7,
      category: 'classes',
      question: 'Are classes suitable for beginners?',
      answer: 'Yes! We offer beginner-friendly classes in all categories. Our instructors provide modifications for different fitness levels. We recommend starting with our "Introduction to Fitness" class if you\'re new to exercise.'
    },
    {
      id: 8,
      category: 'classes',
      question: 'What happens if I miss a booked class?',
      answer: 'If you miss a class without canceling, it counts as a no-show. Members with excessive no-shows may have booking restrictions. We understand emergencies happen, so contact us if you have a valid reason for missing.'
    },

    // Equipment FAQs
    {
      id: 9,
      category: 'equipment',
      question: 'What equipment do you have available?',
      answer: 'Our gym features state-of-the-art cardio machines (treadmills, bikes, ellipticals), complete free weight section, resistance machines, functional training area, boxing equipment, yoga studio, and swimming pool. All equipment is regularly maintained and updated.'
    },
    {
      id: 10,
      category: 'equipment',
      question: 'Do I need to book equipment in advance?',
      answer: 'No booking required for most equipment. During peak hours (6-9 AM, 6-9 PM), there might be wait times for popular machines. We have a 30-minute limit on cardio machines during busy periods. Premium areas have priority access.'
    },
    {
      id: 11,
      category: 'equipment',
      question: 'Do you provide personal training equipment?',
      answer: 'Yes, personal training sessions include access to specialized equipment like kettlebells, resistance bands, medicine balls, and suspension trainers. Your trainer will provide all necessary equipment for your session.'
    },

    // Payment FAQs
    {
      id: 12,
      category: 'payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, credit/debit cards, UPI payments, net banking, and EMI options. Monthly memberships can be auto-debited. We also accept corporate vouchers and fitness reimbursements from select companies.'
    },
    {
      id: 13,
      category: 'payment',
      question: 'Are there any joining fees?',
      answer: 'Yes, there\'s a one-time joining fee of ₹1,000 which includes gym orientation, body composition analysis, and workout plan creation. This fee is waived during promotional periods and for annual memberships.'
    },
    {
      id: 14,
      category: 'payment',
      question: 'Do you offer refunds?',
      answer: 'Refunds are available within 7 days of purchase if you haven\'t used the facilities. Medical refunds are considered on a case-by-case basis with proper documentation. Processing takes 5-10 business days.'
    },

    // Policy FAQs
    {
      id: 15,
      category: 'policy',
      question: 'What is your guest policy?',
      answer: 'Members can bring guests for ₹200 per visit. Premium members get 2 free guest passes per month. Guests must sign a waiver and be accompanied by the member at all times. Guest access is limited to gym floor only.'
    },
    {
      id: 16,
      category: 'policy',
      question: 'What are your safety protocols?',
      answer: 'We maintain strict safety and hygiene protocols including regular equipment sanitization, temperature checks, mask requirements in certain areas, and social distancing measures. First aid trained staff are always on duty.'
    },
    {
      id: 17,
      category: 'policy',
      question: 'What is your dress code?',
      answer: 'Please wear appropriate athletic attire and closed-toe shoes. Tank tops, shorts, and athletic wear are welcome. No jeans, sandals, or inappropriate clothing. We have a strict no-shirtless policy except in designated areas.'
    },
    {
      id: 18,
      category: 'policy',
      question: 'Can I use the gym if I\'m under 18?',
      answer: 'Members aged 16-18 can join with parental consent and supervision. We offer special teen programs. Children under 16 can participate in our kids\' classes and programs but cannot use adult equipment.'
    },

    // Additional Popular FAQs
    {
      id: 19,
      category: 'membership',
      question: 'Do you have personal trainers?',
      answer: 'Yes! We have certified personal trainers specializing in various areas like weight loss, muscle building, sports conditioning, and rehabilitation. Personal training packages start from ₹2,000 per session with discounts for multiple sessions.',
      popular: true
    },
    {
      id: 20,
      category: 'classes',  
      question: 'Do you offer nutrition counseling?',
      answer: 'Absolutely! Our certified nutritionists provide personalized meal plans, dietary consultations, and ongoing support. Nutrition services are available as add-ons to membership plans or as standalone consultations.',
      popular: true
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularFaqs = faqs.filter(faq => faq.popular);

  const stats = [
    {
      icon: HelpCircle,
      number: '50+',
      label: 'FAQs Answered',
      description: 'Common questions'
    },
    {
      icon: MessageCircle,
      number: '24/7',
      label: 'Support Available',
      description: 'Always here to help'
    },
    {
      icon: Clock,
      number: '<5 min',
      label: 'Response Time',
      description: 'Quick assistance'
    },
    {
      icon: Users,
      number: '98%',
      label: 'Satisfaction Rate',
      description: 'Happy members'
    }
  ];

  const toggleFaq = (faqId) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Particles Background */}
      <div className="fixed inset-0 z-[1] w-full h-full min-h-screen pointer-events-none">
        <Particles
          particleCount={600}
          particleSpread={20}
          speed={0.1}
          particleColors={["#FACC15", "#3B82F6", "#8B5CF6", "#10B981", "#F59E0B"]}
          moveParticlesOnHover={true}
          particleHoverFactor={1.5}
          alphaParticles={true}
          particleBaseSize={120}
          sizeRandomness={1.3}
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
                <HelpCircle className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-sm text-white/80">Help & Support</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Frequently Asked
                <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
                Find answers to common questions about memberships, classes, facilities, and policies. 
                Can't find what you're looking for? Our support team is here to help.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="group relative px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Contact Support
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <a href="tel:+91-1234567890" className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </a>
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

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 mb-8">
              <div className="flex flex-wrap gap-4 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 min-w-[300px]">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white'
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      <category.icon className="w-4 h-4 mr-2" />
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular FAQs Section */}
        {selectedCategory === 'all' && !searchTerm && (
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Popular
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Questions</span>
                </h2>
                <p className="text-white/80">Most frequently asked questions by our members</p>
              </div>

              <div className="space-y-4">
                {popularFaqs.map((faq, index) => (
                  <div key={faq.id} className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
                    >
                      <span className="text-white font-semibold text-lg pr-4">{faq.question}</span>
                      {expandedFaq === faq.id ? 
                        <ChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0" /> : 
                        <ChevronDown className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      }
                    </button>
                    {expandedFaq === faq.id && (
                      <div className="px-6 pb-6 border-t border-white/10">
                        <p className="text-white/80 leading-relaxed pt-4">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All FAQs Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            {(selectedCategory !== 'all' || searchTerm) && (
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  {searchTerm ? 'Search Results' : categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-white/80">
                  {filteredFaqs.length} question{filteredFaqs.length !== 1 ? 's' : ''} found
                </p>
              </div>
            )}

            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div key={faq.id} className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-start">
                      <span className="text-white font-semibold text-lg pr-4">{faq.question}</span>
                      {faq.popular && (
                        <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white text-xs font-medium">
                          Popular
                        </span>
                      )}
                    </div>
                    {expandedFaq === faq.id ? 
                      <ChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0" /> : 
                      <ChevronDown className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    }
                  </button>
                  {expandedFaq === faq.id && (
                    <div className="px-6 pb-6 border-t border-white/10">
                      <p className="text-white/80 leading-relaxed pt-4">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No FAQs Found</h3>
                <p className="text-white/80 mb-6">
                  Try adjusting your search or browse different categories.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300"
                >
                  View All FAQs
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-blue-400/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <div className="text-center mb-8">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Still Have Questions?
                </h3>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                  Our support team is ready to help you with any questions or concerns you may have.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Phone Support</h4>
                  <p className="text-white/80 text-sm mb-2">+91-1234567890</p>
                  <p className="text-white/60 text-xs">Mon-Sat: 9AM-8PM</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Email Support</h4>
                  <p className="text-white/80 text-sm mb-2">support@powerpoint.com</p>
                  <p className="text-white/60 text-xs">Response within 24hrs</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Live Chat</h4>
                  <p className="text-white/80 text-sm mb-2">Available on website</p>
                  <p className="text-white/60 text-xs">Instant responses</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  Contact Us
                </Link>
                <a href="tel:+91-1234567890" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}

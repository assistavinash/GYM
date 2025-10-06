import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Map, 
  Home, 
  Users,
  Dumbbell,
  Calendar,
  Star,
  Phone,
  FileText,
  Shield,
  RefreshCcw,
  Scale,
  Building,
  Heart,
  UserCheck,
  MapPin,
  Clock,
  Award,
  Target,
  ExternalLink,
  Search,
  Filter
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Sitemap() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const siteStructure = [
    {
      category: 'main',
      title: 'Main Pages',
      icon: Home,
      color: 'from-blue-400 to-cyan-500',
      pages: [
        { name: 'Home', path: '/', description: 'Welcome page with gym overview and features' },
        { name: 'About Us', path: '/about', description: 'Our story, mission, and values' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'Our Story', path: '/our-story', description: 'Journey and evolution of PowerPoint Gym' },
        { name: 'Meet The Team', path: '/meet-the-team', description: 'Our professional trainers and staff' },
        { name: 'Our Facilities', path: '/our-facilities', description: 'State-of-the-art equipment and amenities' }
      ]
    },
    {
      category: 'membership',
      title: 'Membership & Pricing',
      icon: Users,
      color: 'from-green-400 to-emerald-500',
      pages: [
        { name: 'Membership Plans', path: '/membership', description: 'All membership options and benefits' },
        { name: 'Plans & Pricing', path: '/plans-pricing', description: 'Detailed pricing for all plans' },
        { name: 'Corporate Membership', path: '/corporate-membership', description: 'B2B wellness solutions' },
        { name: 'Family Packages', path: '/family-packages', description: 'Multi-generational fitness programs' },
        { name: 'Promotions', path: '/promotions', description: 'Current deals and special offers' }
      ]
    },
    {
      category: 'services',
      title: 'Services & Programs',
      icon: Dumbbell,
      color: 'from-orange-400 to-red-500',
      pages: [
        { name: 'Personal Trainers', path: '/personal-trainers', description: 'One-on-one training services' },
        { name: 'Group Classes', path: '/classes', description: 'Fitness classes for all levels' },
        { name: 'Strength Training', path: '/strength-training', description: 'Weight lifting and muscle building' },
        { name: 'Cardio Programs', path: '/cardio', description: 'Cardiovascular fitness training' },
        { name: 'Yoga Classes', path: '/yoga', description: 'Mind-body wellness programs' },
        { name: 'CrossFit Sessions', path: '/crossfit-sessions', description: 'High-intensity functional fitness' },
        { name: 'Physiotherapy', path: '/physiotherapy', description: 'Rehabilitation and recovery services' }
      ]
    },
    {
      category: 'specialized',
      title: 'Specialized Programs',
      icon: Target,
      color: 'from-purple-400 to-pink-500',
      pages: [
        { name: 'Cardio Blast', path: '/cardio-blast', description: 'High-intensity cardio workouts' },
        { name: 'Nutrition Guidance', path: '/nutrition', description: 'Diet and nutrition consultation' },
        { name: 'Nutrition Experts', path: '/nutrition-experts', description: 'Meet our certified nutritionists' },
        { name: 'Physiotherapists', path: '/physiotherapists', description: 'Licensed rehabilitation specialists' },
        { name: 'Success Stories', path: '/success-stories', description: 'Member transformation journeys' }
      ]
    },
    {
      category: 'schedule',
      title: 'Schedules & Events',
      icon: Calendar,
      color: 'from-indigo-400 to-blue-500',
      pages: [
        { name: 'Class Schedule', path: '/class-schedule', description: 'Weekly timetable of all classes' },
        { name: 'Training Schedule', path: '/schedule', description: 'Personal training availability' },
        { name: 'Trainer Availability', path: '/trainer-availability', description: 'Book sessions with trainers' },
        { name: 'Events Calendar', path: '/events-calendar', description: 'Upcoming gym events and workshops' }
      ]
    },
    {
      category: 'location',
      title: 'Location & Access',
      icon: MapPin,
      color: 'from-teal-400 to-cyan-500',
      pages: [
        { name: 'Location Map', path: '/location-map', description: 'Find our gym locations and directions' },
        { name: 'Overview', path: '/overview', description: 'General information and quick facts' }
      ]
    },
    {
      category: 'account',
      title: 'Account Management',
      icon: UserCheck,
      color: 'from-yellow-400 to-orange-500',
      pages: [
        { name: 'Login', path: '/login', description: 'Member account access' },
        { name: 'Register', path: '/register', description: 'Create new membership account' },
        { name: 'Forgot Password', path: '/forgot-password', description: 'Password recovery' },
        { name: 'User Dashboard', path: '/user-dashboard', description: 'Member personal dashboard' },
        { name: 'Admin Dashboard', path: '/admin-dashboard', description: 'Administrative interface' },
        { name: 'Trainer Dashboard', path: '/trainer-dashboard', description: 'Trainer management portal' }
      ]
    },
    {
      category: 'information',
      title: 'Information & Support',
      icon: FileText,
      color: 'from-gray-400 to-slate-500',
      pages: [
        { name: 'FAQ', path: '/faqs', description: 'Frequently asked questions' },
        { name: 'Privacy Policy', path: '/privacy', description: 'How we protect your data' },
        { name: 'Terms of Service', path: '/terms', description: 'Membership terms and conditions' },
        { name: 'Refund Policy', path: '/refund', description: 'Refund eligibility and process' },
        { name: 'Sitemap', path: '/sitemap', description: 'Complete site navigation guide' }
      ]
    },
    {
      category: 'management',
      title: 'User Management',
      icon: Building,
      color: 'from-rose-400 to-pink-500',
      pages: [
        { name: 'Users Management', path: '/users-management', description: 'Admin user management interface' },
        { name: 'Trainers Directory', path: '/trainers', description: 'Browse all available trainers' },
        { name: 'Unauthorized Access', path: '/unauthorized', description: 'Access denied page' }
      ]
    }
  ];

  const stats = [
    {
      icon: Map,
      number: '50+',
      label: 'Total Pages',
      description: 'Comprehensive site'
    },
    {
      icon: Users,
      number: '9',
      label: 'Categories',
      description: 'Organized sections'
    },
    {
      icon: Search,
      number: '100%',
      label: 'Searchable',
      description: 'Find anything'
    },
    {
      icon: ExternalLink,
      number: '24/7',
      label: 'Available',
      description: 'Always accessible'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Pages', count: siteStructure.reduce((total, cat) => total + cat.pages.length, 0) },
    ...siteStructure.map(cat => ({
      key: cat.category,
      label: cat.title,
      count: cat.pages.length
    }))
  ];

  const filteredStructure = siteStructure.filter(category => {
    if (selectedCategory !== 'all' && category.category !== selectedCategory) return false;
    
    if (searchTerm) {
      return category.pages.some(page => 
        page.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        page.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return true;
  }).map(category => ({
    ...category,
    pages: category.pages.filter(page => 
      !searchTerm || 
      page.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      page.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }));

  const totalPages = siteStructure.reduce((total, cat) => total + cat.pages.length, 0);
  const visiblePages = filteredStructure.reduce((total, cat) => total + cat.pages.length, 0);

  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Particles Background */}
      <div className="fixed inset-0 z-[1] w-full h-full min-h-screen pointer-events-none">
        <Particles
          particleCount={400}
          particleSpread={15}
          speed={0.08}
          particleColors={["#6B7280", "#9CA3AF", "#D1D5DB", "#E5E7EB", "#F3F4F6"]}
          moveParticlesOnHover={true}
          particleHoverFactor={1.2}
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
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-500/20 to-slate-600/20 rounded-full border border-gray-500/30 backdrop-blur-sm mb-6">
                <Map className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-sm text-white/80">Site Navigation</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Site
                <span className="block bg-gradient-to-r from-gray-400 to-slate-500 bg-clip-text text-transparent">
                  Map
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-8">
                Navigate through all pages of PowerPoint Gym website. Find exactly what you're looking for 
                with our comprehensive site directory and search functionality.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="#search" className="group relative px-8 py-4 bg-gradient-to-r from-gray-500 to-slate-600 rounded-full font-semibold text-white shadow-2xl hover:shadow-gray-500/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    <Search className="w-5 h-5 mr-2" />
                    Search Pages
                  </span>
                </a>
                <Link to="/" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Back to Home
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
                  <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-gray-500 to-slate-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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

        {/* Search and Filter */}
        <section id="search" className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Find Pages</h2>
                <p className="text-white/80">Search through {totalPages} pages across {siteStructure.length} categories</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Search Input */}
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                    <input
                      type="text"
                      placeholder="Search pages by name or description..."
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:border-gray-500 focus:outline-none"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                    <select
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-gray-500 focus:outline-none appearance-none"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      {categories.map(cat => (
                        <option key={cat.key} value={cat.key} className="bg-gray-800">
                          {cat.label} ({cat.count})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {searchTerm && (
                <div className="mt-4 text-center">
                  <span className="text-white/80">
                    Showing {visiblePages} of {totalPages} pages
                  </span>
                  {visiblePages !== totalPages && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="ml-4 text-gray-400 hover:text-white underline"
                    >
                      Clear search
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Site Structure */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="space-y-12">
              {filteredStructure.map((category) => (
                <div key={category.category} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center mb-8">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                      <p className="text-white/60">{category.pages.length} pages in this section</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.pages.map((page, index) => (
                      <Link
                        key={index}
                        to={page.path}
                        className="group bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/10"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-semibold text-white group-hover:text-gray-300 transition-colors">
                            {page.name}
                          </h3>
                          <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                        </div>
                        <p className="text-white/80 text-sm mb-4 line-clamp-2">
                          {page.description}
                        </p>
                        <div className="flex items-center text-xs text-white/60">
                          <span className="bg-white/10 px-2 py-1 rounded-full">
                            {page.path}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {filteredStructure.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-white/60" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No pages found</h3>
                <p className="text-white/80 mb-4">
                  Try adjusting your search terms or selecting a different category.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-gray-500 to-slate-600 rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-gray-500/20 to-slate-600/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Popular Pages
                </h3>
                <p className="text-xl text-white/80 mb-8">
                  Quick access to our most visited pages
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/" className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 group">
                  <Home className="w-6 h-6 text-gray-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-white text-sm font-medium">Home</span>
                </Link>
                <Link to="/membership" className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 group">
                  <Users className="w-6 h-6 text-gray-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-white text-sm font-medium">Membership</span>
                </Link>
                <Link to="/classes" className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 group">
                  <Dumbbell className="w-6 h-6 text-gray-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-white text-sm font-medium">Classes</span>
                </Link>
                <Link to="/contact" className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 group">
                  <Phone className="w-6 h-6 text-gray-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-white text-sm font-medium">Contact</span>
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-gray-500 to-slate-600 rounded-full font-semibold text-white shadow-2xl hover:shadow-gray-500/25 transition-all duration-300 hover:scale-105">
                  Join PowerPoint Gym
                </Link>
                <Link to="/about" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  Learn More
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

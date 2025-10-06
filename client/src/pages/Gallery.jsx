import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  Play, 
  X, 
  ZoomIn,
  ArrowRight,
  ArrowLeft,
  Grid,
  List,
  Filter,
  Search,
  Download,
  Share2,
  Heart,
  Eye,
  Calendar,
  Users,
  Award,
  ChevronDown,
  Maximize2,
  Info
} from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Particles from '../components/Particles';

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sortBy, setSortBy] = useState('recent');
  const [showFilters, setShowFilters] = useState(false);
  const [imageLoadStates, setImageLoadStates] = useState({});

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeImageModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const categories = [
    { name: 'All', count: 16, icon: '🏋️', color: 'from-purple-500 to-pink-500' },
    { name: 'Gym Equipment', count: 4, icon: '💪', color: 'from-blue-500 to-cyan-500' },
    { name: 'Classes', count: 4, icon: '🏃', color: 'from-green-500 to-emerald-500' },
    { name: 'Trainers', count: 2, icon: '👨‍💼', color: 'from-orange-500 to-red-500' },
    { name: 'Facilities', count: 4, icon: '🏢', color: 'from-indigo-500 to-purple-500' },
    { name: 'Events', count: 1, icon: '🎉', color: 'from-pink-500 to-rose-500' },
    { name: 'Members', count: 2, icon: '👥', color: 'from-yellow-500 to-orange-500' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'State-of-the-Art Cardio Zone',
      category: 'Gym Equipment',
      image: '/images/gallery/cardio-zone.jpg',
      thumbnail: '/images/gallery/Logo.png',
      description: 'Modern cardio equipment with heart rate monitors, built-in entertainment systems, and personalized workout programs',
      date: '2024-10-01',
      views: 1245,
      likes: 89,
      tags: ['cardio', 'equipment', 'modern', 'treadmill', 'cycling'],
      type: 'image',
      photographer: 'John Smith',
      location: 'Main Floor'
    },
    {
      id: 2,
      title: 'High-Intensity Interval Training',
      category: 'Classes',
      image: '/images/gallery/hiit-class.jpg',
      thumbnail: '/images/gallery/Logo.png',
      description: 'Dynamic HIIT session combining cardio and strength training for maximum calorie burn and muscle building',
      date: '2024-09-28',
      views: 987,
      likes: 124,
      tags: ['hiit', 'training', 'fitness', 'cardio', 'strength'],
      type: 'video',
      duration: '2:34',
      photographer: 'Sarah Johnson',
      location: 'Studio A'
    },
    {
      id: 3,
      title: 'Personal Training Session',
      category: 'Trainers',
      image: '/images/gallery/personal-training.jpg',
      thumbnail: '/images/gallery/Logo.png',
      description: 'One-on-one training with certified professionals',
      date: '2024-09-25',
      views: 756,
      likes: 67,
      tags: ['personal', 'training', 'professional'],
      type: 'video',
      duration: '3:12',
      photographer: 'Mike Chen',
      location: 'Training Area'
    },
    {
      id: 4,
      title: 'Olympic Weight Training Area',
      category: 'Gym Equipment',
      image: '/images/gallery/weight-area.jpg',
      thumbnail: '/images/gallery/Logo.png',
      description: 'Professional Olympic weightlifting platform',
      date: '2024-09-22',
      views: 1567,
      likes: 201,
      tags: ['weights', 'olympic', 'strength'],
      type: 'image',
      photographer: 'Alex Turner',
      location: 'Weight Room'
    },
    {
      id: 5,
      title: 'Yoga & Meditation Studio',
      category: 'Facilities',
      image: '/images/gallery/yoga-studio.jpg',
      thumbnail: '/images/gallery/Logo.png',
      description: 'Peaceful space for yoga and mindfulness practice',
      date: '2024-09-20',
      views: 643,
      likes: 89,
      tags: ['yoga', 'meditation', 'peaceful'],
      type: 'image',
      photographer: 'Emma Wilson',
      location: 'Studio B'
    },
    {
      id: 6,
      title: 'Group Fitness Class',
      category: 'Classes',
      image: '/images/gallery/group-fitness.jpg',
      thumbnail: '/images/gallery/Logo.png',
      description: 'Energetic group workout session',
      date: '2024-09-18',
      views: 892,
      likes: 112,
      tags: ['group', 'fitness', 'energy'],
      type: 'image',
      photographer: 'Chris Davis',
      location: 'Main Studio'
    },
    {
      id: 7,
      title: 'Swimming Pool & Aqua Fitness',
      category: 'Facilities',
      image: '/images/gallery/swimming-pool.jpg',
      thumbnail: '/images/gallery/Logo.png',
      description: 'Olympic-size swimming pool with aqua fitness programs',
      date: '2024-09-15',
      views: 1123,
      likes: 156,
      tags: ['swimming', 'pool', 'aqua'],
      type: 'image',
      photographer: 'Lisa Anderson',
      location: 'Pool Area'
    },
    {
      id: 8,
      title: 'Fitness Competition 2024',
      category: 'Events',
      image: '/images/gallery/competition.jpg',
      thumbnail: '/images/gallery/Logo.png',
      description: 'Annual fitness competition highlights',
      date: '2024-09-10',
      views: 2156,
      likes: 342,
      tags: ['competition', 'event', '2024'],
      type: 'video',
      duration: '5:45',
      photographer: 'Team Coverage',
      location: 'Main Arena'
    },
    {
      id: 9,
      title: 'Success Story - Transformation',
      category: 'Members',
      image: '/images/gallery/transformation.jpg',
      thumbnail: '/images/gallery/Logo.png',
      description: 'Amazing 6-month transformation journey',
      date: '2024-09-05',
      views: 3456,
      likes: 567,
      tags: ['transformation', 'success', 'journey'],
      type: 'image',
      photographer: 'Studio Team',
      location: 'Photo Studio'
    },
    {
      id: 10,
      title: 'Boxing & Martial Arts Studio',
      category: 'Facilities',
      image: '/images/gallery/boxing-studio.jpg',
      thumbnail: '/images/gallery/Logo.png',
      description: 'Professional boxing ring and martial arts area',
      date: '2024-09-01',
      views: 876,
      likes: 98,
      tags: ['boxing', 'martial arts', 'professional'],
      type: 'image',
      photographer: 'Mark Thompson',
      location: 'Combat Zone'
    },
    {
      id: 11,
      title: 'Spinning Class in Action',
      category: 'Classes',
      image: '/images/gallery/spinning-class.jpg',
      thumbnail: '/images/gallery/Logo.png',
      description: 'High-energy spinning session with motivating music',
      date: '2024-08-28',
      views: 756,
      likes: 89,
      tags: ['spinning', 'cycling', 'energy'],
      type: 'video',
      duration: '1:58',
      photographer: 'Rachel Green',
      location: 'Spin Studio'
    },
    {
      id: 12,
      title: 'Nutritionist Consultation',
      category: 'Trainers',
      image: '/images/gallery/nutrition-consultation.jpg',
      thumbnail: '/images/gallery/Logo.png',
      description: 'Professional nutrition guidance and personalized meal planning',
      date: '2024-08-25',
      views: 567,
      likes: 67,
      tags: ['nutrition', 'consultation', 'health'],
      type: 'image',
      photographer: 'Dr. Kim Lee',
      location: 'Consultation Room'
    },
    {
      id: 13,
      title: 'Modern Locker Room Facilities',
      category: 'Facilities',
      image: '/images/gallery/locker-room.jpg',
      thumbnail: '/images/gallery/Logo.png',
      description: 'Spacious and clean locker rooms with premium amenities',
      date: '2024-08-20',
      views: 432,
      likes: 56,
      tags: ['locker', 'facilities', 'clean'],
      type: 'image',
      photographer: 'Admin Team',
      location: 'Locker Area'
    },
    {
      id: 14,
      title: 'Free Weight Training Area',
      category: 'Gym Equipment',
      image: '/images/gallery/free-weights.jpg',
      thumbnail: '/images/gallery/Logo.png',
      description: 'Complete free weight section with dumbbells and barbells',
      date: '2024-08-15',
      views: 1876,
      likes: 234,
      tags: ['weights', 'dumbbells', 'barbells'],
      type: 'image',
      photographer: 'Tony Stark',
      location: 'Free Weight Zone'
    },
    {
      id: 15,
      title: 'Zumba Dance Fitness Class',
      category: 'Classes',
      image: '/images/gallery/zumba-class.jpg',
      thumbnail: '/images/gallery/Logo.png',
      description: 'Fun and energetic Zumba classes combining dance with fitness',
      date: '2024-08-10',
      views: 1123,
      likes: 189,
      tags: ['zumba', 'dance', 'fitness'],
      type: 'video',
      duration: '2:45',
      photographer: 'Maria Garcia',
      location: 'Dance Studio'
    },
    {
      id: 16,
      title: 'Member Achievement Wall',
      category: 'Members',
      image: '/images/gallery/achievement-wall.jpg',
      thumbnail: '/images/gallery/Logo.png',
      description: 'Wall showcasing our members\' incredible achievements',
      date: '2024-08-05',
      views: 876,
      likes: 145,
      tags: ['achievements', 'success', 'motivation'],
      type: 'image',
      photographer: 'Community Team',
      location: 'Main Entrance'
    }
  ];

  const filteredItems = galleryItems
    .filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch(sortBy) {
        case 'recent': return new Date(b.date) - new Date(a.date);
        case 'oldest': return new Date(a.date) - new Date(b.date);
        case 'popular': return b.views - a.views;
        case 'liked': return b.likes - a.likes;
        default: return 0;
      }
    });

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const openImageModal = (item) => {
    setSelectedImage(item);
    setLightboxIndex(filteredItems.findIndex(i => i.id === item.id));
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setIsPlaying(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const nextIdx = (lightboxIndex + 1) % filteredItems.length;
    setLightboxIndex(nextIdx);
    setSelectedImage(filteredItems[nextIdx]);
    setIsPlaying(false);
  };

  const prevImage = () => {
    const prevIdx = lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1;
    setLightboxIndex(prevIdx);
    setSelectedImage(filteredItems[prevIdx]);
    setIsPlaying(false);
  };

  const handleImageLoad = (id) => {
    setImageLoadStates(prev => ({ ...prev, [id]: true }));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-purple-500/30 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Loading Gallery
          </h2>
          <p className="text-gray-400">Preparing your visual experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Header />
      <Particles />
      
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white text-sm font-semibold rounded-full transform hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/50">
                <Camera className="w-4 h-4" />
                VISUAL TOUR
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Gallery & Virtual Tour
              </span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Explore our world-class fitness facility through stunning visuals. From cutting-edge equipment to inspiring transformations,
              discover what makes Power Point Gym the ultimate fitness destination.
            </p>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Camera, label: 'HD Photos', value: '800+', color: 'from-blue-400 to-cyan-500', bgColor: 'bg-blue-500/10' },
                { icon: Play, label: 'HD Videos', value: '120+', color: 'from-red-400 to-pink-500', bgColor: 'bg-red-500/10' },
                { icon: Users, label: 'Success Stories', value: '350+', color: 'from-green-400 to-emerald-500', bgColor: 'bg-green-500/10' },
                { icon: Award, label: 'Events Covered', value: '45+', color: 'from-yellow-400 to-orange-500', bgColor: 'bg-yellow-500/10' }
              ].map((stat, index) => (
                <div key={index} className={`${stat.bgColor} backdrop-blur-sm rounded-2xl p-6 group hover:scale-105 transition-all duration-300 border border-gray-700/50`}>
                  <div className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">{stat.value}</div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Filters and Search */}
      <div className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Enhanced Search */}
              <div className="relative w-full lg:w-96 group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                <input
                  type="text"
                  placeholder="Search by title, description, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 bg-gray-800/90 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:bg-gray-800 focus:bg-gray-800"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-3 flex-wrap justify-center lg:justify-end w-full lg:w-auto">
                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none px-5 py-2.5 pr-10 bg-gray-800/90 backdrop-blur-sm border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:bg-gray-800 cursor-pointer font-medium"
                  >
                    <option value="recent">Most Recent</option>
                    <option value="oldest">Oldest First</option>
                    <option value="popular">Most Viewed</option>
                    <option value="liked">Most Liked</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                {/* Filter Toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 ${
                    showFilters
                      ? 'bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                      : 'bg-gray-800/90 text-gray-300 hover:bg-gray-700 border border-gray-600'
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  Filters
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
                </button>

                {/* View Mode */}
                <div className="flex items-center gap-1 bg-gray-800/90 backdrop-blur-sm rounded-xl p-1 border border-gray-600">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2.5 rounded-lg transition-all duration-300 ${
                      viewMode === 'grid' ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30' : 'text-gray-400 hover:text-white hover:bg-gray-700'
                    }`}
                    title="Grid View"
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2.5 rounded-lg transition-all duration-300 ${
                      viewMode === 'list' ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30' : 'text-gray-400 hover:text-white hover:bg-gray-700'
                    }`}
                    title="List View"
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Category Filters */}
            {showFilters && (
              <div className="flex flex-wrap gap-2 animate-fadeIn">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`group px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      selectedCategory === category.name
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-purple-500/30`
                        : 'bg-gray-800/90 backdrop-blur-sm text-gray-300 hover:bg-gray-700 border border-gray-600'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                    <span className={`ml-2 text-xs ${
                      selectedCategory === category.name ? 'text-white/80' : 'text-gray-400'
                    }`}>
                      ({category.count})
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Active Filters Display */}
            {(selectedCategory !== 'All' || searchTerm) && (
              <div className="flex items-center gap-2 flex-wrap animate-fadeIn">
                <span className="text-sm text-gray-400 font-medium">Active filters:</span>
                {selectedCategory !== 'All' && (
                  <span className="px-4 py-1.5 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-300 text-sm flex items-center gap-2">
                    {selectedCategory}
                    <button onClick={() => setSelectedCategory('All')} className="hover:text-white transition-colors">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                )}
                {searchTerm && (
                  <span className="px-4 py-1.5 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-300 text-sm flex items-center gap-2">
                    Search: "{searchTerm.substring(0, 20)}{searchTerm.length > 20 ? '...' : ''}"
                    <button onClick={() => setSearchTerm('')} className="hover:text-white transition-colors">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                )}
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="text-sm text-purple-400 hover:text-purple-300 font-medium underline"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Results Count - Only show if filtered or has favorites */}
            {(filteredItems.length !== galleryItems.length || favorites.length > 0) && (
              <div className="flex items-center justify-between text-sm">
                {filteredItems.length !== galleryItems.length && (
                  <div className="text-gray-400">
                    Showing <span className="text-white font-semibold">{filteredItems.length}</span> of{' '}
                    <span className="text-white font-semibold">{galleryItems.length}</span> items
                  </div>
                )}
                {favorites.length > 0 && (
                  <div className="text-gray-400">
                    <span className="text-pink-400 font-semibold">{favorites.length}</span> favorites
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 cursor-pointer border border-gray-700/50 hover:border-purple-500/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
                onClick={() => openImageModal(item)}
              >
                <div className="aspect-square relative overflow-hidden bg-gray-900">
                  {!imageLoadStates[item.id] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 border-3 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ${imageLoadStates[item.id] ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => handleImageLoad(item.id)}
                  />
                  
                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-base mb-2 line-clamp-2">{item.title}</h3>
                      <div className="flex items-center justify-between text-xs text-gray-300 mb-2">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5" />
                          {item.views.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-3.5 h-3.5" />
                          {item.likes}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {item.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="px-2 py-0.5 bg-purple-500/30 rounded-full text-xs text-purple-200">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Type Indicator */}
                  <div className="absolute top-3 right-3 z-10">
                    {item.type === 'video' && (
                      <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                        <Play className="w-5 h-5 text-white ml-0.5" />
                      </div>
                    )}
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(item.id);
                    }}
                    className="absolute top-3 left-3 z-10 p-2 bg-black/60 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                  >
                    <Heart className={`w-5 h-5 transition-colors ${favorites.includes(item.id) ? 'text-pink-500 fill-current' : 'text-white'}`} />
                  </button>

                  {/* Zoom Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/30">
                      <Maximize2 className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>

                {/* Enhanced Info Bar */}
                <div className="p-4 bg-gray-800/95">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-gradient-to-r from-purple-400 to-pink-500 text-white px-3 py-1 rounded-full font-medium">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <h3 className="text-white font-medium text-sm line-clamp-2 group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 cursor-pointer border border-gray-700/50 hover:border-purple-500/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
                onClick={() => openImageModal(item)}
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0 relative">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-32 h-32 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                          <Play className="w-5 h-5 text-white ml-0.5" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-grow">
                        <h3 className="text-white font-semibold text-xl group-hover:text-purple-400 transition-colors mb-1">
                          {item.title}
                        </h3>
                        <span className="inline-block text-xs bg-gradient-to-r from-purple-400 to-pink-500 text-white px-3 py-1 rounded-full font-medium">
                          {item.category}
                        </span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(item.id);
                        }}
                        className="p-2 hover:scale-110 transition-transform"
                      >
                        <Heart className={`w-6 h-6 ${favorites.includes(item.id) ? 'text-pink-500 fill-current' : 'text-gray-400 hover:text-pink-400'} transition-colors`} />
                      </button>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                    
                    <div className="flex items-center flex-wrap gap-4 text-sm">
                      <span className="flex items-center gap-1.5 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1.5 text-gray-400">
                        <Eye className="w-4 h-4" />
                        {item.views.toLocaleString()} views
                      </span>
                      <span className="flex items-center gap-1.5 text-gray-400">
                        <Heart className="w-4 h-4" />
                        {item.likes} likes
                      </span>
                      {item.type === 'video' && item.duration && (
                        <span className="flex items-center gap-1.5 text-gray-400">
                          <Play className="w-4 h-4" />
                          {item.duration}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-300">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredItems.length === 0 && (
          <div className="text-center py-24">
            <div className="w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-purple-500/30">
              <Camera className="w-16 h-16 text-purple-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-3">No Results Found</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto leading-relaxed">
              We couldn't find any {selectedCategory !== 'All' ? selectedCategory.toLowerCase() : 'items'} matching your search. 
              Try different keywords or browse all categories.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="px-8 py-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full font-semibold text-white hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Enhanced Image Modal/Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/97 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-7xl w-full max-h-full">
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full text-sm font-semibold text-white">
                    {selectedImage.category}
                  </span>
                  <span className="text-gray-300 text-sm">
                    {lightboxIndex + 1} / {filteredItems.length}
                  </span>
                </div>
                <button
                  onClick={closeImageModal}
                  className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <ArrowRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div className="relative flex items-center justify-center min-h-[70vh]">
              <img
                src={selectedImage.thumbnail}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain mx-auto rounded-lg shadow-2xl"
              />
              
              {selectedImage.type === 'video' && !isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    onClick={() => setIsPlaying(true)}
                    className="w-24 h-24 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-red-500/50"
                  >
                    <Play className="w-12 h-12 ml-1" />
                  </button>
                </div>
              )}
            </div>

            {/* Bottom Info Panel */}
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black via-black/90 to-transparent p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-grow">
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{selectedImage.description}</p>
                </div>
                <div className="flex items-center gap-3 ml-6">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(selectedImage.id);
                    }}
                    className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
                  >
                    <Heart className={`w-6 h-6 ${favorites.includes(selectedImage.id) ? 'text-pink-500 fill-current' : 'text-white'}`} />
                  </button>
                  <button className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20">
                    <Download className="w-6 h-6 text-white" />
                  </button>
                  <button className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20">
                    <Share2 className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="text-xs text-gray-500">Date</div>
                    <div className="font-medium">{new Date(selectedImage.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Eye className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="text-xs text-gray-500">Views</div>
                    <div className="font-medium">{selectedImage.views.toLocaleString()}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Heart className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="text-xs text-gray-500">Likes</div>
                    <div className="font-medium">{selectedImage.likes}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Camera className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="text-xs text-gray-500">Photographer</div>
                    <div className="font-medium">{selectedImage.photographer}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Info className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="text-xs text-gray-500">Location</div>
                    <div className="font-medium">{selectedImage.location}</div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedImage.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-purple-500/20 border border-purple-500/50 rounded-full text-sm text-purple-300">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Keyboard Hints */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 text-xs text-gray-400 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <span className="flex items-center gap-1">
                <kbd className="px-2 py-0.5 bg-white/10 rounded text-white">←</kbd>
                <kbd className="px-2 py-0.5 bg-white/10 rounded text-white">→</kbd>
                Navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-2 py-0.5 bg-white/10 rounded text-white">ESC</kbd>
                Close
              </span>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-purple-900 via-pink-900 to-blue-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold rounded-full">
              <Award className="w-4 h-4" />
              JOIN THE ELITE
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Ready to Experience This?
            </span>
          </h2>

          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of members who train in our world-class facilities. Your transformation story starts here,
            in an environment designed for champions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="group px-10 py-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full font-bold text-white text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-10 py-4 border-2 border-white/30 rounded-full font-bold text-white text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Camera className="w-5 h-5" />
              Visit Our Gym
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-gray-300">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium">10,000+ Members</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium">Award-Winning Facility</span>
            </div>
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium">State-of-the-Art Equipment</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        kbd {
          font-family: monospace;
          font-size: 0.875rem;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #a855f7, #ec4899);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #9333ea, #db2777);
        }
      `}</style>
    </div>
  );
}
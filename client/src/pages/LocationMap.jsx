import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Clock,
  ArrowRight,
  Star,
  Navigation,
  Car,
  Bus,
  Train,
  Bike,
  Footprints,
  Coffee,
  Utensils,
  ShoppingBag,
  Hospital,
  GraduationCap,
  Building,
  ExternalLink
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function LocationMap() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [selectedTransport, setSelectedTransport] = useState('car');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const locations = [
    {
      id: 1,
      name: 'PowerPoint Gym - Main Branch',
      address: '123 Fitness Street, Sector 15, Gurgaon, Haryana 122001',
      coordinates: { lat: 28.4595, lng: 77.0266 },
      phone: '+91-9876543210',
      email: 'main@powerpointgym.com',
      hours: {
        weekdays: '5:00 AM - 11:00 PM',
        weekends: '6:00 AM - 10:00 PM'
      },
      facilities: ['24/7 Access', 'Parking Available', 'Cafe', 'Pro Shop'],
      isMain: true,
      image: '/images/locations/main-branch.jpg'
    },
    {
      id: 2,
      name: 'PowerPoint Gym - North Delhi',
      address: '456 Health Avenue, Rohini, New Delhi 110085',
      coordinates: { lat: 28.7041, lng: 77.1025 },
      phone: '+91-9876543211',
      email: 'north@powerpointgym.com',
      hours: {
        weekdays: '5:30 AM - 10:30 PM',
        weekends: '6:00 AM - 10:00 PM'
      },
      facilities: ['Parking Available', 'Group Classes', 'Nutrition Center'],
      isMain: false,
      image: '/images/locations/north-branch.jpg'
    },
    {
      id: 3,
      name: 'PowerPoint Gym - South Delhi',
      address: '789 Wellness Road, Greater Kailash, New Delhi 110048',
      coordinates: { lat: 28.5355, lng: 77.2431 },
      phone: '+91-9876543212',
      email: 'south@powerpointgym.com',
      hours: {
        weekdays: '5:00 AM - 11:00 PM',
        weekends: '6:00 AM - 10:00 PM'
      },
      facilities: ['Valet Parking', 'Spa Services', 'Premium Lounge'],
      isMain: false,
      image: '/images/locations/south-branch.jpg'
    }
  ];

  const transportOptions = [
    {
      type: 'car',
      icon: Car,
      name: 'By Car',
      duration: '15-25 minutes',
      instructions: [
        'Take NH-8 towards Gurgaon',
        'Exit at Sector 15 (Exit 6)',
        'Turn right on Golf Course Road',
        'Continue for 2km, gym will be on your right',
        'Free parking available in basement'
      ],
      tips: 'Peak hours: 8-10 AM, 6-8 PM. Use Waze for real-time traffic updates.'
    },
    {
      type: 'metro',
      icon: Train,
      name: 'By Metro',
      duration: '35-45 minutes',
      instructions: [
        'Take Yellow Line to Huda City Centre',
        'Exit at Iffco Chowk Station',
        'Take Bus No. 106 or auto-rickshaw',
        '10-minute ride to Sector 15',
        'Gym is 200m walk from bus stop'
      ],
      tips: 'Metro operates 6 AM - 11 PM. Keep metro card recharged.'
    },
    {
      type: 'bus',
      icon: Bus,
      name: 'By Bus',
      duration: '45-60 minutes',
      instructions: [
        'Board DTC Bus 106 from ISBT',
        'Get down at Sector 15 stop',
        'Walk 300m towards Golf Course Road',
        'Gym is in the commercial complex',
        'Look for the bright blue signage'
      ],
      tips: 'Bus frequency: every 15-20 minutes during peak hours.'
    },
    {
      type: 'bike',
      icon: Bike,
      name: 'By Bike',
      duration: '20-30 minutes',
      instructions: [
        'Take the dedicated cycling lane on NH-8',
        'Exit at Sector 15 ramp',
        'Follow bike path along Golf Course Road',
        'Secure bike parking available',
        'Shower facilities provided for cyclists'
      ],
      tips: 'Bike rental stations available nearby. Wear safety gear.'
    }
  ];

  const nearbyPlaces = [
    {
      category: 'Restaurants',
      icon: Utensils,
      places: [
        { name: 'Healthy Bites Cafe', distance: '50m', rating: 4.5 },
        { name: 'Protein Palace', distance: '120m', rating: 4.3 },
        { name: 'Subway', distance: '200m', rating: 4.1 }
      ]
    },
    {
      category: 'Shopping',
      icon: ShoppingBag,
      places: [
        { name: 'Sports Zone', distance: '100m', rating: 4.4 },
        { name: 'Health & Glow', distance: '150m', rating: 4.2 },
        { name: 'City Walk Mall', distance: '500m', rating: 4.6 }
      ]
    },
    {
      category: 'Medical',
      icon: Hospital,
      places: [
        { name: 'Max Hospital', distance: '800m', rating: 4.7 },
        { name: 'Apollo Clinic', distance: '600m', rating: 4.5 },
        { name: 'Fortis Healthcare', distance: '1.2km', rating: 4.6 }
      ]
    },
    {
      category: 'Education',
      icon: GraduationCap,
      places: [
        { name: 'Delhi Public School', distance: '300m', rating: 4.8 },
        { name: 'Ryan International', distance: '500m', rating: 4.5 },
        { name: 'Amity University', distance: '2km', rating: 4.4 }
      ]
    }
  ];

  const stats = [
    {
      icon: MapPin,
      number: '3',
      label: 'Locations',
      description: 'Across Delhi-NCR'
    },
    {
      icon: Car,
      number: '500+',
      label: 'Parking Spots',
      description: 'Free parking'
    },
    {
      icon: Clock,
      number: '18hrs',
      label: 'Daily Open',
      description: 'Extended hours'
    },
    {
      icon: Star,
      number: '4.8',
      label: 'Location Rating',
      description: 'Member reviews'
    }
  ];

  const currentLocation = locations[selectedLocation];

  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Particles Background */}
      <div className="fixed inset-0 z-[1] w-full h-full min-h-screen pointer-events-none">
        <Particles
          particleCount={600}
          particleSpread={22}
          speed={0.08}
          particleColors={["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"]}
          moveParticlesOnHover={true}
          particleHoverFactor={1.4}
          alphaParticles={true}
          particleBaseSize={105}
          sizeRandomness={1.7}
          cameraDistance={35}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400/20 to-green-500/20 rounded-full border border-blue-400/30 backdrop-blur-sm mb-6">
                <MapPin className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-sm text-white/80">Find Us</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Location &
                <span className="block bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                  Directions
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-8">
                Find the PowerPoint Gym location nearest to you. We're conveniently located across Delhi-NCR 
                with easy access, ample parking, and extended hours to fit your schedule.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href={`https://maps.google.com/?q=${currentLocation.coordinates.lat},${currentLocation.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-400 to-green-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center">
                    Get Directions
                    <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <button 
                  onClick={() => setSelectedTransport('metro')}
                  className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <Train className="w-5 h-5 mr-2" />
                  Public Transport
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
                  <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-blue-400 to-green-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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

        {/* Location Selector */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {locations.map((location, index) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(index)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedLocation === index
                      ? 'bg-gradient-to-r from-blue-400 to-green-500 text-white'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  {location.name.split(' - ')[1] || location.name}
                  {location.isMain && <span className="ml-1 text-xs">(Main)</span>}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Location Card */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Location Info */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">{currentLocation.name}</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-white font-semibold">Address</div>
                        <div className="text-white/80">{currentLocation.address}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-white font-semibold">Phone</div>
                        <a href={`tel:${currentLocation.phone}`} className="text-green-400 hover:underline">
                          {currentLocation.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-orange-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-white font-semibold">Operating Hours</div>
                        <div className="text-white/80">
                          <div>Mon-Fri: {currentLocation.hours.weekdays}</div>
                          <div>Sat-Sun: {currentLocation.hours.weekends}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-white font-semibold mb-3">Facilities Available</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentLocation.facilities.map((facility, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm">
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={`https://maps.google.com/?q=${currentLocation.coordinates.lat},${currentLocation.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 bg-gradient-to-r from-blue-400 to-green-500 rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300 text-center flex items-center justify-center"
                    >
                      <Navigation className="w-5 h-5 mr-2" />
                      Get Directions
                    </a>
                    <a 
                      href={`tel:${currentLocation.phone}`}
                      className="px-6 py-3 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call
                    </a>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-white/10 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Interactive Map</h3>
                    <p className="text-white/80 mb-4">
                      Click "Get Directions" to open in Google Maps for detailed navigation and real-time traffic updates.
                    </p>
                    <a 
                      href={`https://maps.google.com/?q=${currentLocation.coordinates.lat},${currentLocation.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-400 to-green-500 rounded-xl font-semibold text-white hover:shadow-lg transition-all duration-300"
                    >
                      Open in Maps
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transportation Options */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">How to Reach Us</h2>
              <p className="text-white/80">Choose your preferred mode of transportation</p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {transportOptions.map((option) => (
                <button
                  key={option.type}
                  onClick={() => setSelectedTransport(option.type)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedTransport === option.type
                      ? 'bg-gradient-to-r from-blue-400 to-green-500 text-white'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  <option.icon className="w-4 h-4" />
                  {option.name}
                </button>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              {transportOptions.map((option) => (
                selectedTransport === option.type && (
                  <div key={option.type}>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-green-500 rounded-xl flex items-center justify-center mr-4">
                        <option.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{option.name}</h3>
                        <p className="text-blue-400">Estimated time: {option.duration}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-white font-semibold mb-4">Step-by-step directions:</h4>
                        <ol className="space-y-3">
                          {option.instructions.map((instruction, index) => (
                            <li key={index} className="flex items-start">
                              <span className="flex-shrink-0 w-6 h-6 bg-blue-400 text-white rounded-full text-sm flex items-center justify-center mr-3 mt-0.5">
                                {index + 1}
                              </span>
                              <span className="text-white/80">{instruction}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                      
                      <div className="bg-white/5 rounded-xl p-6">
                        <h4 className="text-white font-semibold mb-3">💡 Pro Tips</h4>
                        <p className="text-white/80">{option.tips}</p>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Places */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">What's Nearby</h2>
              <p className="text-white/80">Convenient amenities around our gym</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {nearbyPlaces.map((category, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-green-500 rounded-xl flex items-center justify-center mr-3">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-white font-semibold">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.places.map((place, placeIndex) => (
                      <div key={placeIndex} className="flex justify-between items-center">
                        <div>
                          <div className="text-white text-sm">{place.name}</div>
                          <div className="text-white/60 text-xs">{place.distance} away</div>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          <span className="text-white text-sm">{place.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-blue-400/20 to-green-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Visit Us Today!
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Come check out our state-of-the-art facilities and meet our friendly team. 
                Free trial sessions available for first-time visitors!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-blue-400 to-green-500 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  Book Free Trial
                </Link>
                <a 
                  href={`tel:${currentLocation.phone}`}
                  className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
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

"use client";
import React, { useState, useEffect } from 'react';
import { Dumbbell, Flower2, Zap, Star, Users, Clock } from 'lucide-react';


const iconMap = {
  Strength: <Dumbbell className="w-6 h-6" />,
  Wellness: <Flower2 className="w-6 h-6" />,
  Cardio: <Zap className="w-6 h-6" />,
};

export default function TrainersPreview() {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE}/api/trainers`);
        
        if (response.ok) {
          const result = await response.json();
          console.log('API Response:', result);
          
          // Check if API response has success and trainers array
          if (result.success && result.trainers) {
            const data = result.trainers;
            
            if (data && data.length > 0) {
              const formattedTrainers = data.map(trainer => ({
                id: trainer._id || trainer.id,
                name: trainer.name,
                photo: trainer.image || '/Logo.png',
                specialization: trainer.specialization?.[0] || 'Fitness',
                experience: trainer.experience || 0,
                classesCount: trainer.classesCount || trainer.classes?.length || 0,
                rating: trainer.rating || 4.5,
                icon: iconMap[trainer.specialization?.[0]] || iconMap['Strength']
              }));
              
              setTrainers(formattedTrainers);
            } else {
              // Empty array from API, show fallback data
              console.log('No trainers in database, showing fallback data');
              setTrainers([
                {
                  id: '1',
                  name: 'Sarah Johnson',
                  photo: '/Logo.png',
                  specialization: 'Strength Training',
                  experience: 8,
                  classesCount: 45,
                  rating: 4.9,
                  icon: iconMap['Strength']
                },
                {
                  id: '2',
                  name: 'Mike Chen',
                  photo: '/Logo.png',
                  specialization: 'Cardio',
                  experience: 6,
                  classesCount: 32,
                  rating: 4.8,
                  icon: iconMap['Cardio']
                },
                {
                  id: '3',
                  name: 'Emma Wilson',
                  photo: '/Logo.png',
                  specialization: 'Yoga & Wellness',
                  experience: 5,
                  classesCount: 28,
                  rating: 5.0,
                  icon: iconMap['Wellness']
                }
              ]);
            }
          } else {
            throw new Error('Invalid API response format');
          }
        } else {
          // Fallback trainers when server is not available
          setTrainers([
            {
              id: '1',
              name: 'Sarah Johnson',
              photo: '/Logo.png',
              specialization: 'Strength Training',
              experience: 8,
              classesCount: 45,
              rating: 4.9,
              icon: iconMap['Strength']
            },
            {
              id: '2',
              name: 'Mike Chen',
              photo: '/Logo.png',
              specialization: 'Cardio',
              experience: 6,
              classesCount: 32,
              rating: 4.8,
              icon: iconMap['Cardio']
            },
            {
              id: '3',
              name: 'Emma Wilson',
              photo: '/Logo.png',
              specialization: 'Yoga & Wellness',
              experience: 5,
              classesCount: 28,
              rating: 5.0,
              icon: iconMap['Wellness']
            }
          ]);
        }
      } catch (error) {
        console.error('Error fetching trainers:', error);
        // Show fallback data on error
        console.log('API error, showing fallback data');
        setTrainers([
          {
            id: '1',
            name: 'Sarah Johnson',
            photo: '/Logo.png',
            specialization: 'Strength Training',
            experience: 8,
            classesCount: 45,
            rating: 4.9,
            icon: iconMap['Strength']
          },
          {
            id: '2',
            name: 'Mike Chen',
            photo: '/Logo.png',
            specialization: 'Cardio',
            experience: 6,
            classesCount: 32,
            rating: 4.8,
            icon: iconMap['Cardio']
          },
          {
            id: '3',
            name: 'Emma Wilson',
            photo: '/Logo.png',
            specialization: 'Yoga & Wellness',
            experience: 5,
            classesCount: 28,
            rating: 5.0,
            icon: iconMap['Wellness']
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchTrainers();
  }, [API_BASE]);

  if (loading) {
    return (
      <div className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-white">Loading trainers...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#FACC15] via-yellow-300 to-[#FACC15] text-black text-sm font-semibold rounded-full mb-4">
            OUR EXPERT TRAINERS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-[#FACC15] via-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Meet Our Trainers
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Learn from certified professionals dedicated to your fitness success
          </p>
        </div>

        {/* Simple Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Trainer Photo */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <img
                    src={trainer.photo}
                    alt={trainer.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-yellow-500/20"
                  />
                  <div className="absolute -top-2 -right-2 bg-gray-900 rounded-full p-2 border border-gray-600">
                    {trainer.icon}
                  </div>
                </div>
              </div>

              {/* Trainer Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">{trainer.name}</h3>
                <p className="text-yellow-400 font-medium mb-4">{trainer.specialization}</p>
                
                {/* Stats */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-center gap-2 text-gray-300">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span>{trainer.experience} years experience</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-300">
                    <Users className="w-4 h-4 text-green-400" />
                    <span>{trainer.classesCount} classes conducted</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-300">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{trainer.rating} rating</span>
                  </div>
                </div>

                {/* View Profile Button */}
                <button className="w-full py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Trainers Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-transparent border-2 border-yellow-500 text-yellow-500 font-semibold rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300">
            View All Trainers
          </button>
        </div>
      </div>
    </div>
  );
}

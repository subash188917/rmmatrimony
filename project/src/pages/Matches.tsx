import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, X, Star, MapPin, Briefcase, GraduationCap, MessageCircle, Eye, Gift } from 'lucide-react';

const Matches: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'recommendations' | 'sent' | 'received'>('recommendations');

  // Mock data
  const recommendations = [
    {
      id: 1,
      name: 'Arjun Kapoor',
      age: 28,
      location: 'Mumbai, Maharashtra',
      profession: 'Software Engineer',
      education: 'B.Tech Computer Science',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
      compatibility: 92,
      verified: true,
      premium: true
    },
    {
      id: 2,
      name: 'Rohit Sharma',
      age: 30,
      location: 'Delhi, Delhi',
      profession: 'Doctor',
      education: 'MBBS, MD',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400',
      compatibility: 88,
      verified: true,
      premium: false
    }
  ];

  const sentInterests = [
    {
      id: 3,
      name: 'Vikram Singh',
      age: 29,
      location: 'Bangalore, Karnataka',
      profession: 'Business Analyst',
      education: 'MBA Finance',
      image: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'pending',
      sentDate: '2 days ago'
    }
  ];

  const receivedInterests = [
    {
      id: 4,
      name: 'Aditya Patel',
      age: 27,
      location: 'Pune, Maharashtra',
      profession: 'Marketing Manager',
      education: 'MBA Marketing',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      receivedDate: '1 day ago'
    }
  ];

  const tabs = [
    { key: 'recommendations', label: 'Recommendations', count: recommendations.length },
    { key: 'sent', label: 'Sent Interests', count: sentInterests.length },
    { key: 'received', label: 'Received Interests', count: receivedInterests.length }
  ];

  const renderProfileCard = (profile: any, type: string) => (
    <motion.div
      key={profile.id}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="relative">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-80 object-cover"
        />
        {profile.compatibility && (
          <div className="absolute top-4 left-4">
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {profile.compatibility}% Match
            </div>
          </div>
        )}
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          {profile.verified && (
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
              <Star className="h-3 w-3 mr-1 fill-current" />
              Verified
            </span>
          )}
          {profile.premium && (
            <span className="bg-gold-500 text-white text-xs px-2 py-1 rounded-full">
              Premium
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-bold text-gray-900">{profile.name}</h3>
          <span className="text-lg text-gray-600">{profile.age} yrs</span>
        </div>

        <div className="space-y-2 mb-6">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-primary-600" />
            <span className="text-sm">{profile.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Briefcase className="h-4 w-4 mr-2 text-primary-600" />
            <span className="text-sm">{profile.profession}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <GraduationCap className="h-4 w-4 mr-2 text-primary-600" />
            <span className="text-sm">{profile.education}</span>
          </div>
        </div>

        {type === 'recommendations' && (
          <div className="flex space-x-3">
            <button className="flex-1 bg-red-500 text-white py-3 px-4 rounded-xl font-semibold hover:bg-red-600 transition-colors flex items-center justify-center">
              <X className="h-5 w-5 mr-2" />
              Pass
            </button>
            <button className="flex-1 bg-primary-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center">
              <Heart className="h-5 w-5 mr-2" />
              Interest
            </button>
          </div>
        )}

        {type === 'sent' && (
          <div className="flex space-x-3">
            <button className="flex-1 bg-gray-100 text-gray-600 py-3 px-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center">
              <Eye className="h-5 w-5 mr-2" />
              View Profile
            </button>
            <div className="flex-1 text-center">
              <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-3 rounded-xl font-semibold">
                Pending
              </span>
            </div>
          </div>
        )}

        {type === 'received' && (
          <div className="flex space-x-3">
            <button className="flex-1 bg-red-500 text-white py-3 px-4 rounded-xl font-semibold hover:bg-red-600 transition-colors flex items-center justify-center">
              <X className="h-5 w-5 mr-2" />
              Decline
            </button>
            <button className="flex-1 bg-green-500 text-white py-3 px-4 rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center">
              <Heart className="h-5 w-5 mr-2" />
              Accept
            </button>
          </div>
        )}

        <div className="flex justify-center mt-4">
          <button className="bg-gold-100 text-gold-700 py-2 px-4 rounded-lg font-medium hover:bg-gold-200 transition-colors flex items-center">
            <MessageCircle className="h-4 w-4 mr-2" />
            Send Message
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
            Your Matches
          </h1>
          <p className="text-xl text-gray-600">
            Discover your perfect life partner
          </p>
        </motion.div>

        {/* Premium Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-2xl p-6 mb-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Gift className="h-8 w-8 mr-4" />
              <div>
                <h3 className="text-xl font-bold">Upgrade to Premium</h3>
                <p className="opacity-90">Get unlimited access to profiles and premium features</p>
              </div>
            </div>
            <button className="bg-white text-gold-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Upgrade Now
            </button>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-2 mb-8"
        >
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                  activeTab === tab.key
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {tab.label}
                {tab.count > 0 && (
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                    activeTab === tab.key ? 'bg-white/20' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'recommendations' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendations.map((profile) => renderProfileCard(profile, 'recommendations'))}
            </div>
          )}

          {activeTab === 'sent' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sentInterests.map((profile) => renderProfileCard(profile, 'sent'))}
            </div>
          )}

          {activeTab === 'received' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {receivedInterests.map((profile) => renderProfileCard(profile, 'received'))}
            </div>
          )}
        </motion.div>

        {/* Empty State */}
        {((activeTab === 'sent' && sentInterests.length === 0) ||
          (activeTab === 'received' && receivedInterests.length === 0)) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Heart className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {activeTab === 'sent' ? 'No Interests Sent' : 'No Interests Received'}
            </h3>
            <p className="text-gray-600 mb-6">
              {activeTab === 'sent' 
                ? 'Start exploring profiles and send interests to potential matches'
                : 'When someone shows interest in your profile, they will appear here'
              }
            </p>
            <button
              onClick={() => setActiveTab('recommendations')}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Explore Matches
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Matches;
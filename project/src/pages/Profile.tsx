import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Edit3, MapPin, Briefcase, GraduationCap, Heart, Star, Phone, Mail, Calendar, User, Lock, Bell, Eye, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'profile' | 'photos' | 'preferences' | 'privacy'>('profile');

  // Mock profile data
  const profileData = {
    name: 'Priya Sharma',
    age: 26,
    location: 'Mumbai, Maharashtra',
    profession: 'Software Engineer',
    education: 'B.Tech Computer Science',
    company: 'Tech Solutions Pvt Ltd',
    experience: '4 years',
    salary: '8-10 LPA',
    religion: 'Hindu',
    caste: 'Brahmin',
    motherTongue: 'Hindi',
    maritalStatus: 'Never Married',
    height: '5\'4"',
    weight: '55 kg',
    complexion: 'Fair',
    physicalStatus: 'Normal',
    eatingHabits: 'Vegetarian',
    drinkingHabits: 'Never',
    smokingHabits: 'Never',
    familyType: 'Nuclear Family',
    fatherOccupation: 'Business',
    motherOccupation: 'Homemaker',
    siblings: '1 Brother',
    bio: 'I am a passionate software engineer who loves to code and create innovative solutions. I enjoy traveling, reading books, and spending time with family and friends. Looking for a life partner who shares similar values and interests.',
    interests: ['Reading', 'Traveling', 'Cooking', 'Music', 'Movies'],
    photos: [
      'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    ]
  };

  const tabs = [
    { key: 'profile', label: 'Profile', icon: User },
    { key: 'photos', label: 'Photos', icon: Camera },
    { key: 'preferences', label: 'Preferences', icon: Heart },
    { key: 'privacy', label: 'Privacy', icon: Lock }
  ];

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
            My Profile
          </h1>
          <p className="text-xl text-gray-600">
            Manage your profile information and preferences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img
                    src={profileData.photos[0]}
                    alt={profileData.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-primary-100"
                  />
                  <button className="absolute bottom-2 right-2 bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 transition-colors">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mt-4">{profileData.name}</h2>
                <p className="text-gray-600">{profileData.age} years • {profileData.location}</p>
                <div className="flex justify-center items-center mt-2">
                  <Star className="h-4 w-4 text-green-500 fill-current mr-1" />
                  <span className="text-sm text-green-600 font-medium">Verified Profile</span>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center text-gray-600">
                  <Briefcase className="h-4 w-4 mr-2 text-primary-600" />
                  <span>{profileData.profession}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <GraduationCap className="h-4 w-4 mr-2 text-primary-600" />
                  <span>{profileData.education}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 text-primary-600" />
                  <span>{profileData.location}</span>
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center">
                  <Edit3 className="h-4 w-4 mr-2" />
                  Edit Profile
                </button>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            {/* Tabs */}
            <div className="bg-white rounded-2xl shadow-lg p-2 mb-8">
              <div className="flex space-x-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as any)}
                    className={`flex-1 flex items-center justify-center py-3 px-4 rounded-xl font-semibold transition-all ${
                      activeTab === tab.key
                        ? 'bg-primary-600 text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="h-4 w-4 mr-2" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl shadow-lg">
              {activeTab === 'profile' && (
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h3>
                  
                  {/* Basic Information */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          value={profileData.name}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          readOnly
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                        <input
                          type="number"
                          value={profileData.age}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Height</label>
                        <input
                          type="text"
                          value={profileData.height}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Weight</label>
                        <input
                          type="text"
                          value={profileData.weight}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Professional Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Profession</label>
                        <input
                          type="text"
                          value={profileData.profession}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                        <input
                          type="text"
                          value={profileData.company}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Education</label>
                        <input
                          type="text"
                          value={profileData.education}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Annual Income</label>
                        <input
                          type="text"
                          value={profileData.salary}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">About Me</h4>
                    <textarea
                      value={profileData.bio}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us about yourself..."
                    />
                  </div>

                  {/* Interests */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Interests & Hobbies</h4>
                    <div className="flex flex-wrap gap-2">
                      {profileData.interests.map((interest, index) => (
                        <span
                          key={index}
                          className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {interest}
                        </span>
                      ))}
                      <button className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                        + Add Interest
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'photos' && (
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Photo Gallery</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {profileData.photos.map((photo, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={photo}
                          alt={`Photo ${index + 1}`}
                          className="w-full h-64 object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                          <div className="flex space-x-2">
                            <button className="bg-white text-gray-800 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                              <Edit3 className="h-4 w-4" />
                            </button>
                            <button className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors">
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    <div className="border-2 border-dashed border-gray-300 rounded-xl h-64 flex items-center justify-center hover:border-primary-500 transition-colors cursor-pointer">
                      <div className="text-center">
                        <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 font-medium">Add Photo</p>
                        <p className="text-sm text-gray-500">Upload up to 10 photos</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'preferences' && (
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Partner Preferences</h3>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Basic Preferences</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Age Range</label>
                          <div className="flex items-center space-x-2">
                            <input
                              type="number"
                              placeholder="Min"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                            <span>-</span>
                            <input
                              type="number"
                              placeholder="Max"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Height Range</label>
                          <div className="flex items-center space-x-2">
                            <input
                              type="text"
                              placeholder="Min"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                            <span>-</span>
                            <input
                              type="text"
                              placeholder="Max"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Location Preferences</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Locations</label>
                          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                            <option>Select Location</option>
                            <option>Mumbai</option>
                            <option>Delhi</option>
                            <option>Bangalore</option>
                            <option>Chennai</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Open to Relocate</label>
                          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                            <option>Yes</option>
                            <option>No</option>
                            <option>Maybe</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                        Save Preferences
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'privacy' && (
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Privacy Settings</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center">
                        <Eye className="h-5 w-5 text-gray-600 mr-3" />
                        <div>
                          <h4 className="font-medium text-gray-900">Profile Visibility</h4>
                          <p className="text-sm text-gray-600">Control who can see your profile</p>
                        </div>
                      </div>
                
                      <select className="px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500">
                        <option>Everyone</option>
                        <option>Premium Members Only</option>
                        <option>Verified Members Only</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center">
                        <Camera className="h-5 w-5 text-gray-600 mr-3" />
                        <div>
                          <h4 className="font-medium text-gray-900">Photo Privacy</h4>
                          <p className="text-sm text-gray-600">Control who can see your photos</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-gray-600 mr-3" />
                        <div>
                          <h4 className="font-medium text-gray-900">Contact Information</h4>
                          <p className="text-sm text-gray-600">Show contact details to interested members</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center">
                        <Bell className="h-5 w-5 text-gray-600 mr-3" />
                        <div>
                          <h4 className="font-medium text-gray-900">Notifications</h4>
                          <p className="text-sm text-gray-600">Receive notifications for new matches and messages</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Phone, Video, MoreVertical, Send, Paperclip, Smile } from 'lucide-react';

const Messages: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(1);
  const [newMessage, setNewMessage] = useState('');

  // Mock conversations
  const conversations = [
    {
      id: 1,
      name: 'Arjun Kapoor',
      lastMessage: 'Looking forward to meeting you!',
      time: '2m ago',
      unread: 2,
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
      online: true
    },
    {
      id: 2,
      name: 'Rohit Sharma',
      lastMessage: 'Thank you for accepting my interest',
      time: '1h ago',
      unread: 0,
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=150',
      online: false
    },
    {
      id: 3,
      name: 'Vikram Singh',
      lastMessage: 'Hi! How are you doing?',
      time: '3h ago',
      unread: 1,
      image: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=150',
      online: true
    }
  ];

  // Mock messages for selected chat
  const messages = [
    {
      id: 1,
      senderId: 1,
      message: 'Hi! I saw your profile and would love to get to know you better.',
      time: '10:30 AM',
      isOwn: false
    },
    {
      id: 2,
      senderId: 'me',
      message: 'Hello! Thank you for your interest. I would like to know more about you too.',
      time: '10:35 AM',
      isOwn: true
    },
    {
      id: 3,
      senderId: 1,
      message: 'Great! I work as a software engineer in Mumbai. What about you?',
      time: '10:40 AM',
      isOwn: false
    },
    {
      id: 4,
      senderId: 'me',
      message: 'I work in marketing in Delhi. I love reading and traveling in my free time.',
      time: '10:45 AM',
      isOwn: true
    },
    {
      id: 5,
      senderId: 1,
      message: 'That sounds wonderful! I enjoy hiking and photography. Maybe we could meet for coffee sometime?',
      time: '11:00 AM',
      isOwn: false
    },
    {
      id: 6,
      senderId: 'me',
      message: 'I would like that! Let me know when you are free.',
      time: '11:05 AM',
      isOwn: true
    },
    {
      id: 7,
      senderId: 1,
      message: 'Looking forward to meeting you!',
      time: '11:10 AM',
      isOwn: false
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message to your backend
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const selectedConversation = conversations.find(c => c.id === selectedChat);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden h-[calc(100vh-8rem)]"
        >
          <div className="flex h-full">
            {/* Conversations List */}
            <div className="w-1/3 border-r border-gray-200 flex flex-col">
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Messages</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Conversations */}
              <div className="flex-1 overflow-y-auto">
                {conversations.map((conversation) => (
                  <motion.div
                    key={conversation.id}
                    whileHover={{ backgroundColor: '#f9fafb' }}
                    onClick={() => setSelectedChat(conversation.id)}
                    className={`p-4 cursor-pointer border-b border-gray-100 ${
                      selectedChat === conversation.id ? 'bg-primary-50' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <img
                          src={conversation.image}
                          alt={conversation.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        {conversation.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-900 truncate">
                            {conversation.name}
                          </h3>
                          <span className="text-xs text-gray-500">{conversation.time}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-600 truncate">
                            {conversation.lastMessage}
                          </p>
                          {conversation.unread > 0 && (
                            <span className="bg-primary-600 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                              {conversation.unread}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {selectedConversation ? (
                <>
                  {/* Chat Header */}
                  <div className="p-6 border-b border-gray-200 bg-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <img
                            src={selectedConversation.image}
                            alt={selectedConversation.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          {selectedConversation.online && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {selectedConversation.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {selectedConversation.online ? 'Online' : 'Last seen 2h ago'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-colors">
                          <Phone className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-colors">
                          <Video className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-colors">
                          <MoreVertical className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                              message.isOwn
                                ? 'bg-primary-600 text-white'
                                : 'bg-white text-gray-900 border border-gray-200'
                            }`}
                          >
                            <p className="text-sm">{message.message}</p>
                            <p
                              className={`text-xs mt-1 ${
                                message.isOwn ? 'text-primary-100' : 'text-gray-500'
                              }`}
                            >
                              {message.time}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-colors">
                        <Paperclip className="h-5 w-5" />
                      </button>
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          placeholder="Type your message..."
                          className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent pr-12"
                        />
                        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-primary-600">
                          <Smile className="h-5 w-5" />
                        </button>
                      </div>
                      <button
                        onClick={handleSendMessage}
                        className="bg-primary-600 text-white p-3 rounded-2xl hover:bg-primary-700 transition-colors"
                      >
                        <Send className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <div className="bg-gray-200 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                      <Search className="h-12 w-12 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Select a conversation
                    </h3>
                    <p className="text-gray-600">
                      Choose from your existing conversations or start a new one
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Messages;
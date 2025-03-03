import React, { useState } from 'react';
import { Car, Calendar, MapPin, ChevronRight, Star, Shield, Clock, Zap, Menu, X, Send } from 'lucide-react';
import BookingModal from './components/bookingModal';
import Contact from './components/contact';

const LandingPage: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const carCategories = [
    {
      id: 1,
      name: 'Economy',
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 35,
      features: ['4 Seats', 'Manual/Auto', 'AC', 'Fuel Efficient']
    },
    {
      id: 2,
      name: 'SUV',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 75,
      features: ['7 Seats', 'Automatic', 'AC', 'Spacious']
    },
    {
      id: 3,
      name: 'Luxury',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 120,
      features: ['5 Seats', 'Automatic', 'Premium Audio', 'Leather Interior']
    },
    {
      id: 4,
      name: 'Convertible',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 95,
      features: ['2 Seats', 'Automatic', 'Retractable Roof', 'Sport Mode']
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Business Traveler',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      quote: 'The booking process was seamless, and the car was in perfect condition. Will definitely use this service again for my business trips!'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Family Vacation',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      quote: 'We rented an SUV for our family vacation and it was perfect. Clean, spacious, and the customer service was exceptional.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Weekend Getaway',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      quote: 'I booked a convertible for a weekend trip along the coast. The car was amazing and made our trip unforgettable!'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">CarRental</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#cars" className="text-gray-700 hover:text-blue-600 font-medium">Cars</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium">How It Works</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Book Now Button (Desktop) */}
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="hidden md:block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 font-medium"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-2">
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-3 py-3">
                <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>Home</a>
                <a href="#cars" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>Cars</a>
                <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>How It Works</a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>Testimonials</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>Contact</a>
                <button
                  onClick={() => {
                    setIsBookingModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 font-medium w-full"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.5)"
          }}
        ></div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Rent the Perfect Car for Your Journey
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Choose from our wide selection of vehicles at competitive prices. Book in minutes and hit the road with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 font-medium text-lg flex items-center justify-center"
              >
                Book a Car Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <a
                href="#cars"
                className="bg-white text-blue-700 py-3 px-6 rounded-md hover:bg-gray-100 transition duration-300 font-medium text-lg flex items-center justify-center"
              >
                Explore Our Fleet
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search Bar */}
      <section className="bg-white py-8 shadow-md relative z-20 -mt-8 rounded-t-3xl">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Quick Search</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>Location</span>
                  </div>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter pickup location"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>Dates</span>
                  </div>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex items-end">
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 font-medium"
                >
                  Search Available Cars
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Car Categories */}
      <section id="cars" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Fleet</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our diverse range of vehicles to suit your needs, whether it's a compact car for city driving or an SUV for a family adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {carCategories.map(car => (
              <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
                    <div className="text-blue-600 font-bold">
                      ${car.price}<span className="text-gray-500 text-sm font-normal">/day</span>
                    </div>
                  </div>

                  <ul className="mb-6 space-y-2">
                    {car.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <ChevronRight className="h-4 w-4 text-blue-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setIsBookingModalOpen(true)}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 font-medium"
                  >
                    Book This Car
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Renting a car with us is quick and easy. Follow these simple steps to get on the road in no time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 inline-flex mb-6 mx-auto">
                <MapPin className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Choose Location & Dates</h3>
              <p className="text-gray-600">
                Select your pickup location, date, and return details to see available vehicles.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 inline-flex mb-6 mx-auto">
                <Car className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Select Your Vehicle</h3>
              <p className="text-gray-600">
                Browse our fleet and choose the perfect car that meets your needs and budget.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 inline-flex mb-6 mx-auto">
                <Calendar className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Book & Confirm</h3>
              <p className="text-gray-600">
                Complete your booking online and receive instant confirmation with all details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We pride ourselves on providing exceptional service and value to all our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 rounded-full p-4 inline-flex mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Safety First</h3>
              <p className="text-gray-600">
                All our vehicles undergo rigorous safety inspections and are regularly maintained.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 rounded-full p-4 inline-flex mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Vehicles</h3>
              <p className="text-gray-600">
                Our fleet consists of new and well-maintained vehicles from trusted manufacturers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 rounded-full p-4 inline-flex mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our customer service team is available around the clock to assist you with any issues.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 rounded-full p-4 inline-flex mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fast & Easy Booking</h3>
              <p className="text-gray-600">
                Our streamlined booking process gets you on the road quickly with minimal hassle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Car className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">CarRental</span>
              </div>
              <p className="text-gray-400 mb-4">
                Providing quality car rental services since 2010. Your journey, our priority.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm4.957 7.571h-1.65c-.614 0-.857.42-.857.823v1.607h2.082l-.271 2.17h-1.811v5.644h-2.238v-5.644H9.957v-2.17h2.255V10.07c0-1.834 1.121-2.877 2.877-2.877h1.868v2.378z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm5.636 13.636c-.172.172-.454.172-.626 0L12 10.636l-5.01 5c-.172.172-.454.172-.626 0-.172-.172-.172-.454 0-.626L11.374 10 6.364 4.99c-.172-.172-.172-.454 0-.626.172-.172.454-.172.626 0L12 9.364l5.01-5c.172-.172.454-.172.626 0 .172.172.172.454 0 .626L12.626 10l5.01 5.01c.172.172.172.454 0 .626z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm-1.25 14.375V7.625l5 4.375-5 4.375z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#cars" className="text-gray-400 hover:text-white">Our Fleet</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white">How It Works</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Car Rental</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Airport Transfers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Corporate Rentals</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Long-term Rentals</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Chauffeur Services</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-300"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CarRental. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  );
};

export default LandingPage;
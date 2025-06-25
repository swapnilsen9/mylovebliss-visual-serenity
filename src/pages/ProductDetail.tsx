
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Zap, Shield, Award } from 'lucide-react';
import Header from '../components/Header';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Product data - in a real app, this would come from a database
  const products = {
    'premium-deep-tissue': {
      name: "Premium Deep Tissue Massager",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=600&fit=crop",
      description: "Professional-grade percussion therapy for ultimate muscle relief",
      longDescription: "Experience the pinnacle of therapeutic technology with our Premium Deep Tissue Massager. Engineered for professionals and wellness enthusiasts alike, this powerful device delivers targeted percussion therapy that penetrates deep into muscle tissue, providing relief from tension, soreness, and stiffness. Whether you're an athlete recovering from intense training or someone seeking daily wellness support, this massager adapts to your needs with precision and power.",
      features: ["6 Speed Settings", "4 Hour Battery", "Whisper Quiet"],
      detailedFeatures: [
        "6 customizable speed settings from gentle to intense",
        "4-hour lithium battery with fast charging",
        "Ultra-quiet operation under 45dB",
        "Ergonomic grip design for comfortable use",
        "Professional-grade percussive therapy",
        "Interchangeable massage heads included"
      ],
      icon: <Zap className="w-6 h-6" />,
      price: "$299",
      specifications: {
        "Weight": "2.2 lbs",
        "Dimensions": "9.5\" x 7\" x 3\"",
        "Battery Life": "4 hours",
        "Charging Time": "2 hours",
        "Noise Level": "< 45dB",
        "Speed Range": "1200-3200 RPM"
      }
    },
    'luxury-wellness-roller': {
      name: "Luxury Wellness Roller",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
      description: "Elegant design meets therapeutic effectiveness for daily wellness",
      longDescription: "Indulge in the perfect fusion of luxury and wellness with our signature Wellness Roller. Crafted with premium materials and featuring innovative heat therapy technology, this elegant device transforms your daily self-care routine into a spa-like experience. The sophisticated design seamlessly integrates into any environment while delivering professional-grade therapeutic benefits.",
      features: ["Ergonomic Design", "Heat Therapy", "Smart Controls"],
      detailedFeatures: [
        "Ergonomic design for optimal comfort",
        "Integrated heat therapy up to 104°F",
        "Smart touch controls with LED display",
        "Premium materials with luxury finish",
        "Multiple massage patterns and intensities",
        "Portable and rechargeable design"
      ],
      icon: <Shield className="w-6 h-6" />,
      price: "$199",
      specifications: {
        "Weight": "1.8 lbs",
        "Dimensions": "8\" x 5\" x 3\"",
        "Heat Range": "98°F - 104°F",
        "Battery Life": "3 hours",
        "Material": "Medical-grade silicone",
        "Warranty": "2 years"
      }
    },
    'signature-relaxation': {
      name: "Signature Relaxation Device",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=600&fit=crop",
      description: "Your personal sanctuary of tranquility and therapeutic relief",
      longDescription: "Create your personal oasis of calm with our Signature Relaxation Device. This innovative wellness companion combines cutting-edge technology with intuitive design to deliver a truly personalized relaxation experience. With app connectivity and multiple therapeutic modes, it adapts to your unique wellness needs, providing consistent, professional-quality care in the comfort of your own space.",
      features: ["Multiple Modes", "App Connected", "Premium Materials"],
      detailedFeatures: [
        "8 therapeutic modes for complete customization",
        "Smartphone app with personalized programs",
        "Premium materials with antimicrobial coating",
        "Wireless connectivity and remote control",
        "Memory foam comfort with breathable design",
        "Automatic shut-off safety feature"
      ],
      icon: <Award className="w-6 h-6" />,
      price: "$399",
      specifications: {
        "Weight": "3.1 lbs",
        "Dimensions": "12\" x 8\" x 4\"",
        "Connectivity": "Bluetooth 5.0",
        "Battery Life": "5 hours",
        "App": "iOS & Android",
        "Modes": "8 therapeutic programs"
      }
    }
  };

  const product = products[productId as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-purple-600 hover:text-purple-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Products
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute top-6 right-6 bg-white rounded-full p-3 shadow-lg">
                {product.icon}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {product.description}
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {product.longDescription}
              </p>
              
              <div className="text-3xl font-bold text-purple-600 mb-8">
                {product.price}
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-gray-800">Key Features:</h3>
                {product.detailedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Star className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full lg:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Contact for Pricing
              </button>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-16 bg-white rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Specifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="bg-gray-50 p-4 rounded-xl">
                  <div className="font-semibold text-gray-800">{key}</div>
                  <div className="text-gray-600">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

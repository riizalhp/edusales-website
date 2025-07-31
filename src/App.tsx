import React, { useState } from 'react';
import { 
  Star, 
  Users, 
  TrendingUp, 
  Award, 
  PlayCircle, 
  CheckCircle, 
  Calendar, 
  MapPin, 
  Clock,
  ArrowRight,
  Target,
  Building,
  UserCheck,
  Zap,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp,
  Quote,
  BarChart3,
  Shield,
  Lightbulb,
  Heart,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('individu');
  const [formTab, setFormTab] = useState('konsultasi');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const stats = [
    { icon: Users, number: '500+', label: 'Peserta Dilatih' },
    { icon: Building, number: '30+', label: 'Perusahaan Bermitra' },
    { icon: TrendingUp, number: '60%', label: 'Peningkatan Closing Rate' },
    { icon: Award, number: '4.9/5', label: 'Rating Kepuasan' }
  ];

  const workshops = [
    {
      title: 'Belajar Sales dari 0',
      date: '15-16 Februari 2025',
      time: '09:00 - 17:00 WIB',
      location: 'Online via Zoom',
      price: 'Rp 299.000',
      originalPrice: 'Rp 499.000',
      seats: '12 kursi tersisa',
      urgent: true
    },
    {
      title: 'Advanced Sales Strategy',
      date: '22-23 Februari 2025', 
      time: '09:00 - 17:00 WIB',
      location: 'Jakarta & Online',
      price: 'Rp 599.000',
      originalPrice: 'Rp 899.000',
      seats: '8 kursi tersisa',
      urgent: true
    },
    {
      title: 'Digital Marketing for Sales',
      date: '1-2 Maret 2025',
      time: '13:00 - 17:00 WIB',
      location: 'Online via Zoom',
      price: 'Rp 399.000',
      originalPrice: 'Rp 599.000',
      seats: '15 kursi tersisa',
      urgent: false
    }
  ];

  const testimonials = [
    {
      name: 'Andi Pratama',
      role: 'Owner Toko Online Fashion',
      company: 'AndiFashion Store',
      content: 'Setelah ikut workshop Edusales, penjualan online saya meningkat 150% dalam 3 bulan. Teknik closing yang diajarkan benar-benar praktis dan mudah diterapkan!',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Sarah Melinda',
      role: 'Sales Manager',
      company: 'PT. Teknologi Maju',
      content: 'Tim sales kami yang mengikuti pelatihan Edusales berhasil mencapai target 200% dari bulan sebelumnya. Metode project-based learning sangat efektif!',
      rating: 5,
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Budi Santoso',
      role: 'Entrepreneur',
      company: 'BudiMart UMKM',
      content: 'Dari tidak tahu sama sekali tentang sales, sekarang saya bisa closing 15-20 prospect per bulan. Mentornya sangat berpengalaman dan supportive!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const faqs = [
    {
      question: 'Apakah cocok untuk pemula yang belum pernah belajar sales?',
      answer: 'Sangat cocok! Program "Belajar Sales dari 0" dirancang khusus untuk pemula. Kami mulai dari dasar-dasar sales hingga teknik closing yang efektif dengan pendekatan step-by-step yang mudah dipahami.'
    },
    {
      question: 'Bagaimana metode pembelajaran project-based learning?',
      answer: 'Setiap peserta akan mendapat project riil untuk dipraktikkan selama pelatihan. Misalnya: membuat sales script, melakukan roleplay, dan praktik langsung dengan real case study dari industri yang relevan.'
    },
    {
      question: 'Apakah mendapat sertifikat setelah menyelesaikan pelatihan?',
      answer: 'Ya, setiap peserta yang menyelesaikan pelatihan akan mendapat sertifikat resmi dari Edusales yang dapat digunakan untuk portofolio profesional.'
    },
    {
      question: 'Bisakah perusahaan request materi khusus sesuai industri?',
      answer: 'Tentu saja! Untuk pelatihan corporate, kami menyediakan modul custom yang disesuaikan dengan industri, produk, dan target market perusahaan Anda.'
    },
    {
      question: 'Bagaimana jika tidak bisa hadir di jadwal yang tersedia?',
      answer: 'Kami menyediakan berbagai batch setiap bulan. Jika masih tidak cocok, tersedia juga program self-paced learning dengan akses modul 24/7 selama 6 bulan.'
    },
    {
      question: 'Apakah ada garansi atau money back guarantee?',
      answer: 'Kami memberikan 100% money back guarantee jika Anda tidak puas dengan kualitas pelatihan dalam 7 hari pertama, tanpa ribet dan pertanyaan macam-macam.'
    }
  ];

  const mentors = [
    {
      name: 'Rizky Adiputra',
      role: 'Lead Sales Trainer & Founder',
      experience: '12+ tahun',
      specialty: 'B2B Sales & Team Leadership',
      achievement: 'Ex-Sales Director di 3 perusahaan multinasional',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    },
    {
      name: 'Maya Sari',
      role: 'Digital Marketing Expert',
      experience: '8+ tahun',
      specialty: 'Social Selling & Content Marketing',
      achievement: 'Berhasil meningkatkan ROI 300%+ untuk 50+ brand',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    },
    {
      name: 'Tommy Wijaya',
      role: 'Sales Psychology Specialist',
      experience: '10+ tahun',
      specialty: 'Consumer Behavior & Closing Techniques',
      achievement: 'Certified Sales Trainer dengan 1000+ jam pelatihan',
      image: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Target className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Edusales</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#program" className="text-gray-700 hover:text-blue-600 transition-colors">Program</a>
              <a href="#workshop" className="text-gray-700 hover:text-blue-600 transition-colors">Workshop</a>
              <a href="#testimoni" className="text-gray-700 hover:text-blue-600 transition-colors">Testimoni</a>
              <a href="#mentor" className="text-gray-700 hover:text-blue-600 transition-colors">Mentor</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Konsultasi Gratis
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#program" className="block px-3 py-2 text-gray-700">Program</a>
              <a href="#workshop" className="block px-3 py-2 text-gray-700">Workshop</a>
              <a href="#testimoni" className="block px-3 py-2 text-gray-700">Testimoni</a>
              <a href="#mentor" className="block px-3 py-2 text-gray-700">Mentor</a>
              <a href="#faq" className="block px-3 py-2 text-gray-700">FAQ</a>
              <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-lg">
                Konsultasi Gratis
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                🔥 Program Terlaris: Belajar Sales dari 0
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Kuasai Seni <span className="text-blue-600">Menjual</span> dalam 30 Hari!
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Platform #1 di Indonesia untuk belajar sales dan digital marketing dengan metode 
                <strong> project-based learning</strong>. Dari pemula hingga profesional, 
                tingkatkan closing rate hingga <strong>60%</strong> bersama mentor berpengalaman!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center">
                  <Users className="w-5 h-5 mr-2" />
                  Daftar Workshop (Individu)
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                
                <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all flex items-center justify-center">
                  <Building className="w-5 h-5 mr-2" />
                  Konsultasi Perusahaan
                </button>
              </div>

              <div className="flex items-center text-sm text-gray-500">
                <div className="flex -space-x-2 mr-4">
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop" alt="" />
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop" alt="" />
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop" alt="" />
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center border-2 border-white">
                    +500
                  </div>
                </div>
                <span>Bergabung dengan 500+ alumni yang sukses meningkatkan penjualannya</span>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-bold">
                  🎯 Early Bird 40% OFF
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Workshop Terdekat</h3>
                  <p className="text-gray-600">Belajar Sales dari 0</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                    <span>15-16 Februari 2025</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <span>09:00 - 17:00 WIB</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Online via Zoom</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-green-600">Rp 299.000</span>
                      <span className="text-gray-400 line-through ml-2">Rp 499.000</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-red-600 font-medium">⏰ 12 kursi tersisa</p>
                    </div>
                  </div>
                  
                  <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                    Daftar Sekarang - Hemat 40%
                  </button>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Rata-rata peningkatan</p>
                    <p className="text-lg font-bold text-gray-900">60% Closing Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              💡 Kenapa Pilih Edusales?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami bukan hanya mengajarkan teori, tapi memberikan pengalaman praktis 
              langsung dengan mentor yang sudah terbukti di lapangan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <UserCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Praktisi Berpengalaman</h3>
              <p className="text-gray-600 leading-relaxed">
                Mentor dengan 10+ tahun pengalaman sales di berbagai industri. 
                Bukan teoritis, tapi praktik langsung dari lapangan.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">📚 Project-Based Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Setiap materi langsung dipraktikkan dengan project riil. 
                Learning by doing, bukan hanya mendengar teori.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">🏆 Sertifikat Resmi</h3>
              <p className="text-gray-600 leading-relaxed">
                Dapatkan sertifikat yang diakui industri untuk meningkatkan 
                value profesional dan portfolio karir Anda.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">🤝 Komunitas Berkelanjutan</h3>
              <p className="text-gray-600 leading-relaxed">
                Akses exclusive ke komunitas alumni untuk networking, 
                sharing case study, dan dukungan berkelanjutan.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">⚡ Modul Custom</h3>
              <p className="text-gray-600 leading-relaxed">
                Khusus perusahaan, kami sediakan modul yang disesuaikan 
                dengan industri, produk, dan target market spesifik.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">💯 Garansi Kepuasan</h3>
              <p className="text-gray-600 leading-relaxed">
                100% money back guarantee dalam 7 hari jika tidak puas 
                dengan kualitas pelatihan. Tanpa ribet!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Segmentation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              🎯 Siapa yang Cocok Ikut Edusales?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Program kami dirancang untuk berbagai level dan kebutuhan, 
              dari individu yang baru memulai hingga perusahaan besar
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Individu & UMKM */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">👤 Individu & UMKM</h3>
                  <p className="text-gray-600">Perfect untuk pemula dan pemilik usaha kecil</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Fresh graduate yang ingin masuk sales</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Pemilik UMKM yang ingin jual langsung</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Freelancer & service provider</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Online shop owner yang stuck di penjualan</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Anyone yang mau upgrade skill sales</span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-blue-900 mb-2">💰 Investasi Terjangkau:</h4>
                <p className="text-blue-800">Mulai dari Rp 299.000 untuk workshop 2 hari dengan materi lengkap + sertifikat</p>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Lihat Program Individu
              </button>
            </div>

            {/* Perusahaan */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mr-4">
                  <Building className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">🏢 Perusahaan</h3>
                  <p className="text-gray-600">Solusi pelatihan dan outsourcing untuk bisnis</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Startup yang butuh tim sales handal</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Perusahaan dengan sales team underperform</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Bisnis yang mau scale up revenue</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Perusahaan yang butuh sales outsourcing</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Enterprise dengan budget training besar</span>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-purple-900 mb-2">🎯 ROI Terukur:</h4>
                <p className="text-purple-800">Rata-rata klien meningkat 60% closing rate dalam 3 bulan setelah pelatihan</p>
              </div>

              <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors">
                Konsultasi Corporate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs & Services */}
      <section id="program" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              🚀 Program & Layanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih program yang sesuai dengan kebutuhan dan level Anda. 
              Semua dirancang untuk hasil maksimal dengan pendekatan praktis.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-xl">
              <button
                onClick={() => setActiveTab('individu')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'individu' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                👤 Program Individu
              </button>
              <button
                onClick={() => setActiveTab('perusahaan')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'perusahaan' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                🏢 Program Perusahaan
              </button>
            </div>
          </div>

          {/* Individu Programs */}
          {activeTab === 'individu' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">Belajar Sales dari 0</h3>
                    <div className="bg-white/20 px-3 py-1 rounded-full">
                      <span className="text-white text-sm font-medium">🔥 Terlaris</span>
                    </div>
                  </div>
                  <p className="text-blue-100 mt-2">Perfect untuk pemula yang mau jago sales</p>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-bold text-gray-900">Rp 299K</span>
                      <span className="text-gray-500 line-through">Rp 499K</span>
                    </div>
                    <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm inline-block">
                      Hemat 40% - Early Bird
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Fundamental sales psychology</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Teknik prospecting yang efektif</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Closing techniques teruji</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Roleplay & praktik langsung</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Sertifikat + modul PDF</span>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                    Daftar Sekarang
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6">
                  <h3 className="text-xl font-bold text-white">Digital Marketing Sales</h3>
                  <p className="text-green-100 mt-2">Jual via social media & online platform</p>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-bold text-gray-900">Rp 399K</span>
                      <span className="text-gray-500 line-through">Rp 599K</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Social selling strategy</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Content marketing for sales</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">WhatsApp & Instagram selling</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Email marketing automation</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Landing page optimization</span>
                    </div>
                  </div>

                  <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors">
                    Daftar Program
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6">
                  <h3 className="text-xl font-bold text-white">Self-Paced Learning</h3>
                  <p className="text-purple-100 mt-2">Belajar kapan saja, sesuai pace Anda</p>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-bold text-gray-900">Rp 199K</span>
                      <span className="text-gray-500 text-sm">Akses 6 bulan</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">50+ video pembelajaran</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Quiz & assignment</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Templates & tools</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Akses komunitas alumni</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Monthly live Q&A</span>
                    </div>
                  </div>

                  <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors">
                    Akses Sekarang
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Corporate Programs */}
          {activeTab === 'perusahaan' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Corporate Training</h3>
                  <p className="text-orange-100">In-house training untuk sales team Anda</p>
                </div>
                
                <div className="p-8">
                  <div className="mb-8">
                    <span className="text-sm text-gray-600">Mulai dari</span>
                    <div className="text-3xl font-bold text-gray-900">Rp 15 Juta</div>
                    <span className="text-gray-600">untuk 20 peserta</span>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold text-gray-900">Kurikulum Custom</span>
                        <p className="text-gray-600 text-sm">Disesuaikan dengan industri & produk</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold text-gray-900">On-site / Online</span>
                        <p className="text-gray-600 text-sm">Flexible sesuai kebutuhan perusahaan</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold text-gray-900">Sales Tools & Templates</span>
                        <p className="text-gray-600 text-sm">SOP, script, dan tools siap pakai</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold text-gray-900">3 Bulan Support</span>
                        <p className="text-gray-600 text-sm">Follow-up & coaching berkelanjutan</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold text-gray-900">ROI Measurement</span>
                        <p className="text-gray-600 text-sm">Laporan hasil & progress tracking</p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition-colors">
                    Konsultasi Gratis
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-red-500 to-red-600 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Sales Outsourcing</h3>
                  <p className="text-red-100">Tim sales profesional untuk bisnis Anda</p>
                </div>
                
                <div className="p-8">
                  <div className="mb-8">
                    <span className="text-sm text-gray-600">Mulai dari</span>
                    <div className="text-3xl font-bold text-gray-900">Rp 8 Juta</div>
                    <span className="text-gray-600">per sales person/bulan</span>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold text-gray-900">Sales Profesional</span>
                        <p className="text-gray-600 text-sm">Tim dengan track record teruji</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold text-gray-900">Ready to Deploy</span>
                        <p className="text-gray-600 text-sm">Langsung action dalam 1 minggu</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold text-gray-900">Performance Monitoring</span>
                        <p className="text-gray-600 text-sm">Dashboard real-time & laporan mingguan</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold text-gray-900">Guaranteed Results</span>
                        <p className="text-gray-600 text-sm">No sales, no pay policy</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold text-gray-900">Scalable Team</span>
                        <p className="text-gray-600 text-sm">Mudah scaling up/down sesuai kebutuhan</p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors">
                    Discuss Project
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Workshop Schedule */}
      <section id="workshop" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              📅 Jadwal Workshop Terdekat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih jadwal yang sesuai dengan waktu Anda. Early bird discount berlaku 
              untuk 20 pendaftar pertama setiap batch!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{workshop.title}</h3>
                    {workshop.urgent && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                        🔥 Hot
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="font-medium">{workshop.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-blue-600 mr-3" />
                      <span>{workshop.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                      <span>{workshop.location}</span>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-green-600">{workshop.price}</span>
                        <span className="text-gray-400 line-through ml-2 text-sm">{workshop.originalPrice}</span>
                      </div>
                      <div className="text-right">
                        <p className={`text-sm font-medium ${workshop.urgent ? 'text-red-600' : 'text-orange-600'}`}>
                          ⏰ {workshop.seats}
                        </p>
                      </div>
                    </div>
                    
                    <button className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                      workshop.urgent 
                        ? 'bg-red-600 hover:bg-red-700 text-white' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}>
                      Daftar Sekarang
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Tidak ada jadwal yang cocok? Atau mau arrange private session?
            </p>
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              Request Custom Schedule
            </button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              📊 Dampak Nyata Edusales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Angka tidak bohong. Inilah hasil nyata yang diraih alumni dan 
              perusahaan yang bekerja sama dengan Edusales.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4 group-hover:bg-blue-200 transition-colors">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Success Metrics */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">85%</h3>
              <p className="text-green-700 font-medium mb-2">Alumni Meningkat Revenue</p>
              <p className="text-green-600 text-sm">dalam 3 bulan pertama setelah training</p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-2">92%</h3>
              <p className="text-blue-700 font-medium mb-2">Tingkat Kepuasan</p>
              <p className="text-blue-600 text-sm">recommend Edusales ke teman & kolega</p>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-purple-800 mb-2">3.2x</h3>
              <p className="text-purple-700 font-medium mb-2">Rata-rata ROI Training</p>
              <p className="text-purple-600 text-sm">return of investment dalam 6 bulan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimoni" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              💬 Apa Kata Alumni?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dengar langsung dari para alumni yang sudah merasakan transformasi 
              skill sales mereka bersama Edusales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-blue-600 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Case Study Highlight */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  🏆 Success Story
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Dari 0 Sales ke 50 Juta/Bulan dalam 6 Bulan
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Awalnya saya cuma freelancer design grafis yang income-nya tidak stabil. 
                  Setelah ikut program Edusales, saya mulai jual jasa secara sistematis. 
                  Sekarang revenue bulanan saya stabil 50 juta dengan client recurring."
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-green-600">0 → 50 Juta</div>
                    <div className="text-sm text-gray-600">Revenue Bulanan</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">15+ Client</div>
                    <div className="text-sm text-gray-600">Recurring Customer</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                    alt="Success Story"
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Dedi Kurniawan</h4>
                    <p className="text-sm text-gray-600">Freelance Designer → Agency Owner</p>
                    <p className="text-sm text-blue-600">@DediCreative Studio</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <PlayCircle className="w-12 h-12" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Video Testimoni</h4>
                  <p className="text-blue-100 mb-6">Dengar langsung cerita lengkap Dedi</p>
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    Tonton Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section id="mentor" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              👨‍🏫 Mentor Berpengalaman
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Belajar langsung dari praktisi sales terbaik yang sudah terbukti 
              di lapangan dan berpengalaman melatih ratusan sales profesional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {mentors.map((mentor, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-w-3 aspect-h-4">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{mentor.name}</h3>
                  <p className="text-blue-600 font-medium mb-1">{mentor.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{mentor.experience} pengalaman</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Spesialisasi:</h4>
                    <p className="text-gray-700 text-sm">{mentor.specialty}</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Achievement:</h4>
                    <p className="text-gray-700 text-sm">{mentor.achievement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              🎯 Konsultasi Langsung dengan Mentor
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Punya pertanyaan spesifik tentang sales challenge Anda? 
              Book 30 menit consultation call gratis dengan salah satu mentor kami.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ❓ Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Pertanyaan yang sering ditanyakan calon peserta. Masih ada pertanyaan? 
              Hubungi kami langsung!
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Masih ada pertanyaan yang belum terjawab?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat dengan Tim
              </button>
              <button className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Telepon Langsung
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12">
            <div className="text-center text-white mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                🚀 Siap Transformasi Sales Anda?
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Jangan tunggu lagi! Bergabunglah dengan 500+ profesional yang sudah 
                meningkatkan skill sales dan revenue mereka bersama Edusales.
              </p>
            </div>

            {/* Form Tabs */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 p-1 rounded-xl">
                <button
                  onClick={() => setFormTab('konsultasi')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    formTab === 'konsultasi' 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-white hover:text-blue-100'
                  }`}
                >
                  💬 Konsultasi Gratis
                </button>
                <button
                  onClick={() => setFormTab('daftar')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    formTab === 'daftar' 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-white hover:text-blue-100'
                  }`}
                >
                  📝 Daftar Workshop
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8">
              {formTab === 'konsultasi' ? (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Konsultasi Gratis 30 Menit
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Ceritakan challenge sales Anda dan dapatkan solusi strategis dari expert kami
                  </p>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Masukkan nama lengkap"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nomor WhatsApp *
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="08xxx"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="nama@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Jenis Bisnis/Industri
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Pilih jenis bisnis</option>
                        <option>UMKM/Usaha Kecil</option>
                        <option>E-commerce/Online Shop</option>
                        <option>Jasa/Service</option>
                        <option>Teknologi/Software</option>
                        <option>Manufacturing</option>
                        <option>Property</option>
                        <option>Lainnya</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Challenge Sales Utama *
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Ceritakan challenge sales yang sedang Anda hadapi..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Book Konsultasi Gratis
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </form>
                </div>
              ) : (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Daftar Workshop
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Pilih program dan jadwal yang sesuai dengan kebutuhan Anda
                  </p>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Masukkan nama lengkap"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nomor WhatsApp *
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="08xxx"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="nama@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pilih Program *
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Pilih program</option>
                        <option>Belajar Sales dari 0 - 15-16 Feb (Rp 299K)</option>
                        <option>Advanced Sales Strategy - 22-23 Feb (Rp 599K)</option>
                        <option>Digital Marketing Sales - 1-2 Mar (Rp 399K)</option>
                        <option>Self-paced Learning (Rp 199K)</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Level Pengalaman Sales
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Pemula (belum pernah sales)</option>
                        <option>Beginner (1-2 tahun)</option>
                        <option>Intermediate (3-5 tahun)</option>
                        <option>Advanced (5+ tahun)</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Goals/Harapan
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Apa yang ingin Anda capai setelah mengikuti program ini?"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-orange-600 text-white py-4 rounded-xl font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center"
                    >
                      <Users className="w-5 h-5 mr-2" />
                      Daftar Workshop Sekarang
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-400" />
                <span className="ml-2 text-2xl font-bold">Edusales</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Platform #1 di Indonesia untuk belajar sales dan digital marketing 
                dengan metode project-based learning. Bergabung dengan 500+ alumni 
                yang sudah sukses meningkatkan penjualannya.
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="#" className="bg-green-600 p-3 rounded-lg hover:bg-green-700 transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" className="bg-red-600 p-3 rounded-lg hover:bg-red-700 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#program" className="text-gray-300 hover:text-white transition-colors">Program & Layanan</a></li>
                <li><a href="#workshop" className="text-gray-300 hover:text-white transition-colors">Jadwal Workshop</a></li>
                <li><a href="#testimoni" className="text-gray-300 hover:text-white transition-colors">Testimoni</a></li>
                <li><a href="#mentor" className="text-gray-300 hover:text-white transition-colors">Mentor</a></li>
                <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Hubungi Kami</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                  <div>
                    <p className="text-gray-300">+62 812-3456-7890</p>
                    <p className="text-sm text-gray-400">Senin-Jumat, 09:00-18:00</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                  <div>
                    <p className="text-gray-300">hello@edusales.id</p>
                    <p className="text-sm text-gray-400">Respon dalam 2 jam</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                  <div>
                    <p className="text-gray-300">Jakarta, Indonesia</p>
                    <p className="text-sm text-gray-400">Training center & online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 Edusales. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <div className="flex items-center text-gray-400">
                  <Heart className="w-4 h-4 text-red-500 mr-1" />
                  <span className="text-sm">Made with love in Jakarta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
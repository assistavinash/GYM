import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye,
  AlertCircle,
  FileText,
  Calendar,
  Mail,
  Phone,
  MapPin,
  User,
  Database,
  Settings,
  Check,
  ExternalLink,
  Download
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Privacy() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('information-collection');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      id: 'information-collection',
      title: 'Information Collection',
      icon: Database,
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">What Information We Collect</h3>
        <div class="space-y-4 text-white/80">
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Personal Information</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Name, email address, phone number</li>
              <li>Date of birth, gender, address</li>
              <li>Emergency contact information</li>
              <li>Medical conditions and fitness goals</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Membership Information</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Membership type and duration</li>
              <li>Payment history and billing information</li>
              <li>Class bookings and attendance records</li>
              <li>Personal training sessions</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Technical Information</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Website usage patterns</li>
              <li>Cookies and tracking data</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'information-use',
      title: 'How We Use Information',
      icon: Settings,
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">Purpose of Data Processing</h3>
        <div class="space-y-4 text-white/80">
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Service Provision</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Process membership applications and renewals</li>
              <li>Schedule classes and personal training sessions</li>
              <li>Provide access to gym facilities</li>
              <li>Communicate about services and updates</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Safety and Security</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Ensure member and staff safety</li>
              <li>Monitor facility access and usage</li>
              <li>Respond to medical emergencies</li>
              <li>Maintain security of premises</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Business Operations</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Process payments and manage billing</li>
              <li>Analyze usage patterns and preferences</li>
              <li>Improve services and facilities</li>
              <li>Marketing and promotional activities</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      icon: Eye,
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">When We Share Your Information</h3>
        <div class="space-y-4 text-white/80">
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Service Providers</h4>
            <p class="text-sm mb-2">We may share your information with trusted third parties who help us operate our business:</p>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Payment processors for membership fees</li>
              <li>Cloud storage providers for data backup</li>
              <li>Marketing platforms for communications</li>
              <li>Software vendors for gym management systems</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Legal Requirements</h4>
            <p class="text-sm mb-2">We may disclose your information when required by law or to:</p>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Comply with legal processes or court orders</li>
              <li>Protect our rights and property</li>
              <li>Ensure safety of members and staff</li>
              <li>Investigate potential violations of our terms</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Business Transfers</h4>
            <p class="text-sm">In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction, subject to equivalent privacy protections.</p>
          </div>
        </div>
      `
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Lock,
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">How We Protect Your Information</h3>
        <div class="space-y-4 text-white/80">
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Technical Safeguards</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>SSL encryption for data transmission</li>
              <li>Encrypted database storage</li>
              <li>Regular security updates and patches</li>
              <li>Firewall protection and intrusion detection</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Physical Security</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Secure server facilities with restricted access</li>
              <li>Locked filing cabinets for physical documents</li>
              <li>Surveillance systems and access controls</li>
              <li>Secure disposal of sensitive documents</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Administrative Controls</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Background checks for staff with data access</li>
              <li>Regular privacy training for employees</li>
              <li>Access controls based on job responsibilities</li>
              <li>Incident response procedures</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      icon: User,
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">Your Privacy Rights</h3>
        <div class="space-y-4 text-white/80">
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Access and Correction</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Request a copy of your personal information</li>
              <li>Update or correct inaccurate information</li>
              <li>Review how your information is being used</li>
              <li>Download your data in a portable format</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Control and Deletion</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Opt-out of marketing communications</li>
              <li>Request deletion of your personal information</li>
              <li>Restrict processing of your data</li>
              <li>Object to certain uses of your information</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">How to Exercise Your Rights</h4>
            <p class="text-sm mb-2">To exercise any of these rights, please contact us:</p>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Email: privacy@powerpointgym.com</li>
              <li>Phone: +91-11-2345-6789</li>
              <li>In-person at any gym location</li>
              <li>Online through your member portal</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'cookies-tracking',
      title: 'Cookies & Tracking',
      icon: Eye,
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">Cookies and Online Tracking</h3>
        <div class="space-y-4 text-white/80">
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">What Are Cookies</h4>
            <p class="text-sm mb-2">Cookies are small text files stored on your device when you visit our website. We use different types of cookies:</p>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li><strong>Essential Cookies:</strong> Required for website functionality</li>
              <li><strong>Performance Cookies:</strong> Help us analyze website usage</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences</li>
              <li><strong>Marketing Cookies:</strong> Used for targeted advertising</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Third-Party Services</h4>
            <p class="text-sm mb-2">We use third-party services that may collect information:</p>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Google Analytics for website traffic analysis</li>
              <li>Facebook Pixel for advertising optimization</li>
              <li>Payment processors for secure transactions</li>
              <li>Customer support chat services</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Managing Cookies</h4>
            <p class="text-sm mb-2">You can control cookies through:</p>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Browser settings to block or delete cookies</li>
              <li>Our cookie consent banner options</li>
              <li>Opt-out links from third-party services</li>
              <li>Privacy settings in your member account</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'updates-contact',
      title: 'Updates & Contact',
      icon: Mail,
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">Policy Updates and Contact Information</h3>
        <div class="space-y-4 text-white/80">
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Policy Updates</h4>
            <p class="text-sm mb-2">We may update this privacy policy periodically to reflect changes in our practices or legal requirements:</p>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Significant changes will be communicated via email</li>
              <li>Updated policy will be posted on our website</li>
              <li>Effective date will be clearly indicated</li>
              <li>Continued use constitutes acceptance of changes</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Contact Our Privacy Team</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p class="font-semibold text-white mb-1">Email</p>
                <p>privacy@powerpointgym.com</p>
              </div>
              <div>
                <p class="font-semibold text-white mb-1">Phone</p>
                <p>+91-11-2345-6789</p>
              </div>
              <div>
                <p class="font-semibold text-white mb-1">Address</p>
                <p>123 Fitness Street<br>New Delhi, 110001</p>
              </div>
              <div>
                <p class="font-semibold text-white mb-1">Response Time</p>
                <p>Within 30 days of request</p>
              </div>
            </div>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Complaints and Concerns</h4>
            <p class="text-sm mb-2">If you have concerns about our privacy practices:</p>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Contact our privacy team directly</li>
              <li>File a complaint with data protection authorities</li>
              <li>Seek legal advice if necessary</li>
              <li>We will investigate and respond promptly</li>
            </ul>
          </div>
        </div>
      `
    }
  ];

  const stats = [
    {
      icon: Shield,
      number: '100%',
      label: 'Data Protection',
      description: 'Secure encryption'
    },
    {
      icon: Lock,
      number: '24/7',
      label: 'Security Monitoring',
      description: 'Continuous protection'
    },
    {
      icon: FileText,
      number: '30 Days',
      label: 'Response Time',
      description: 'For privacy requests'
    },
    {
      icon: Check,
      number: 'GDPR',
      label: 'Compliance',
      description: 'Global standards'
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Particles Background */}
      <div className="fixed inset-0 z-[1] w-full h-full min-h-screen pointer-events-none">
        <Particles
          particleCount={400}
          particleSpread={15}
          speed={0.08}
          particleColors={["#3B82F6", "#1E40AF", "#1D4ED8", "#2563EB", "#3B82F6"]}
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
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-full border border-blue-400/30 backdrop-blur-sm mb-6">
                <Shield className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-sm text-white/80">Last Updated: October 2024</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Privacy
                <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-8">
                Your privacy is our priority. Learn how we collect, use, and protect your personal information 
                to provide you with the best fitness experience while keeping your data secure.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="#information-collection" className="group relative px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10">Read Policy</span>
                </a>
                <button className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF
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
                  <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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

        {/* Navigation */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Policy Sections</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center p-4 rounded-xl font-medium transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white'
                        : 'bg-white/5 text-white/80 hover:bg-white/10'
                    }`}
                  >
                    <section.icon className="w-5 h-5 mr-3" />
                    <span className="text-sm">{section.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Policy Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 transition-all duration-500 ${
                  activeSection === section.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute'
                }`}
                style={{ display: activeSection === section.id ? 'block' : 'none' }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                </div>
                
                <div 
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-blue-400/20 to-blue-600/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Questions About Your Privacy?
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Our privacy team is here to help. Contact us with any questions or concerns 
                about how we handle your personal information.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 rounded-xl p-6">
                  <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-2">Email Us</h4>
                  <p className="text-white/80 text-sm">privacy@powerpointgym.com</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-2">Call Us</h4>
                  <p className="text-white/80 text-sm">+91-11-2345-6789</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-2">Visit Us</h4>
                  <p className="text-white/80 text-sm">Any gym location</p>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full font-semibold text-white shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105">
                  Contact Privacy Team
                </Link>
                <Link to="/terms" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  View Terms of Service
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

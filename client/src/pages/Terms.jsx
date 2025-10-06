import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Scale, 
  Users,
  AlertTriangle,
  Clock,
  CreditCard,
  Shield,
  Calendar,
  Mail,
  Phone,
  MapPin,
  User,
  CheckCircle,
  XCircle,
  Info,
  Download
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Terms() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('membership-terms');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      id: 'membership-terms',
      title: 'Membership Terms',
      icon: Users,
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">Membership Agreement</h3>
        <div class="space-y-4 text-white/80">
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Membership Types</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li><strong>Monthly Membership:</strong> 30-day access from date of purchase</li>
              <li><strong>Quarterly Membership:</strong> 90-day access with 10% discount</li>
              <li><strong>Annual Membership:</strong> 365-day access with 20% discount</li>
              <li><strong>Student Membership:</strong> Special rates with valid student ID</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Membership Benefits</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>24/7 access to all gym facilities</li>
              <li>Unlimited group fitness classes</li>
              <li>Access to locker rooms and showers</li>
              <li>Free initial fitness assessment</li>
              <li>Guest privileges (varies by membership type)</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Membership Responsibilities</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Present valid photo ID and membership card for entry</li>
              <li>Follow all gym rules and regulations</li>
              <li>Report any injuries or incidents immediately</li>
              <li>Keep membership information up to date</li>
              <li>Treat staff and other members with respect</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'payment-terms',
      title: 'Payment & Billing',
      icon: CreditCard,
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">Payment Policies</h3>
        <div class="space-y-4 text-white/80">
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Payment Methods</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Credit cards (Visa, MasterCard, American Express)</li>
              <li>Debit cards with PIN verification</li>
              <li>Bank transfers and online payments</li>
              <li>Cash payments at reception (for monthly memberships)</li>
              <li>Corporate billing for business memberships</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Billing Cycle</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Monthly memberships: Charged on the same date each month</li>
              <li>Annual memberships: Single payment at time of enrollment</li>
              <li>Automatic renewal unless cancelled 30 days in advance</li>
              <li>Pro-rated charges for partial months</li>
              <li>Late payment fees apply after 7-day grace period</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Refund Policy</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>3-day cooling-off period for new memberships</li>
              <li>Medical cancellations with doctor's certificate</li>
              <li>Relocation refunds with proof of address change</li>
              <li>Pro-rated refunds for unused membership periods</li>
              <li>Processing fee may apply to all refund requests</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'facility-rules',
      title: 'Facility Rules',
      icon: Shield,
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">Gym Rules and Regulations</h3>
        <div class="space-y-4 text-white/80">
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">General Conduct</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Proper athletic attire and closed-toe shoes required</li>
              <li>Clean and return all equipment after use</li>
              <li>Use towels on all equipment during workouts</li>
              <li>No profanity, harassment, or inappropriate behavior</li>
              <li>Mobile phones must be on silent in workout areas</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Equipment Usage</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>30-minute time limit on cardio equipment during peak hours</li>
              <li>Re-rack all weights and plates after use</li>
              <li>Report damaged or broken equipment immediately</li>
              <li>No dropping of weights or excessive noise</li>
              <li>Follow posted instructions for specialized equipment</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Safety Requirements</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Exercise at your own risk and within your abilities</li>
              <li>Use spotters for heavy lifting when necessary</li>
              <li>Stay hydrated and take breaks as needed</li>
              <li>No children under 16 in fitness areas</li>
              <li>Follow emergency procedures and staff directions</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'liability-waiver',
      title: 'Liability & Risk',
      icon: AlertTriangle,
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">Liability and Risk Acknowledgment</h3>
        <div class="space-y-4 text-white/80">
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Assumption of Risk</h4>
            <p class="text-sm mb-2">By using our facilities, you acknowledge that:</p>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Physical exercise involves inherent risks of injury</li>
              <li>You voluntarily assume all risks associated with gym activities</li>
              <li>You are physically able to participate in fitness activities</li>
              <li>You will exercise within your personal limitations</li>
              <li>You will seek medical advice before starting any exercise program</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Release of Claims</h4>
            <p class="text-sm mb-2">You agree to release PowerPoint Gym from:</p>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Any injuries sustained during gym activities</li>
              <li>Loss or theft of personal property</li>
              <li>Damages resulting from equipment malfunction</li>
              <li>Claims arising from other members' actions</li>
              <li>Consequential or indirect damages of any kind</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Medical Conditions</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Disclose any medical conditions or injuries to staff</li>
              <li>Obtain physician clearance if recommended</li>
              <li>Stop exercising if you experience any discomfort</li>
              <li>Take responsibility for your health and safety</li>
              <li>Follow all posted safety guidelines and warnings</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'cancellation-policy',
      title: 'Cancellation Policy',
      icon: XCircle,
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">Membership Cancellation</h3>
        <div class="space-y-4 text-white/80">
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Cancellation Process</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Submit written cancellation request to management</li>
              <li>30-day advance notice required for monthly memberships</li>
              <li>Annual memberships cannot be cancelled mid-term</li>
              <li>Cancellation form must be completed in person</li>
              <li>Email and phone cancellations not accepted</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Valid Cancellation Reasons</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li><strong>Medical:</strong> Doctor's certificate required</li>
              <li><strong>Relocation:</strong> Moving more than 25 miles away</li>
              <li><strong>Financial Hardship:</strong> Documentation may be required</li>
              <li><strong>Dissatisfaction:</strong> Within 3-day cooling-off period</li>
              <li><strong>Facility Closure:</strong> Full refund provided</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Cancellation Fees</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Monthly memberships: No cancellation fee after 30 days</li>
              <li>Annual memberships: Medical/relocation only</li>
              <li>Early termination fee may apply</li>
              <li>Administrative processing fee: ₹500</li>
              <li>Outstanding balances must be paid in full</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'privacy-terms',
      title: 'Privacy & Data',
      icon: Shield,
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">Privacy and Data Protection</h3>
        <div class="space-y-4 text-white/80">
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Information Collection</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Personal information for membership registration</li>
              <li>Emergency contact and medical information</li>
              <li>Payment and billing information</li>
              <li>Facility usage and attendance records</li>
              <li>Photos and videos for marketing (with consent)</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Information Use</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Processing membership applications and renewals</li>
              <li>Providing access to facilities and services</li>
              <li>Emergency contact and medical assistance</li>
              <li>Marketing communications (opt-out available)</li>
              <li>Legal compliance and business operations</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Data Protection</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Secure storage of all personal information</li>
              <li>Limited access to authorized personnel only</li>
              <li>Regular security audits and updates</li>
              <li>Compliance with applicable privacy laws</li>
              <li>Right to access, correct, or delete your data</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'dispute-resolution',
      title: 'Disputes & Legal',
      icon: Scale,
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">Dispute Resolution and Legal Terms</h3>
        <div class="space-y-4 text-white/80">
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Dispute Resolution Process</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>First attempt: Direct discussion with gym management</li>
              <li>Second step: Written complaint to corporate office</li>
              <li>Third step: Mediation through neutral third party</li>
              <li>Final resort: Binding arbitration if required</li>
              <li>Class action lawsuits are waived by membership</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Governing Law</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Terms governed by laws of Delhi, India</li>
              <li>Disputes subject to jurisdiction of Delhi courts</li>
              <li>Indian Consumer Protection Act applies</li>
              <li>International members subject to local laws</li>
              <li>Terms may vary by location and local regulations</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Agreement Modifications</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Terms may be updated with 30-day notice</li>
              <li>Material changes require explicit consent</li>
              <li>Continued use constitutes acceptance</li>
              <li>Individual modifications require written agreement</li>
              <li>Severability clause applies to invalid provisions</li>
            </ul>
          </div>
        </div>
      `
    }
  ];

  const stats = [
    {
      icon: FileText,
      number: '7',
      label: 'Key Sections',
      description: 'Comprehensive terms'
    },
    {
      icon: Clock,
      number: '30 Days',
      label: 'Notice Period',
      description: 'For cancellations'
    },
    {
      icon: CheckCircle,
      number: '24/7',
      label: 'Access Rights',
      description: 'Member benefits'
    },
    {
      icon: Scale,
      number: '100%',
      label: 'Legal Protection',
      description: 'Both parties'
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
          particleColors={["#059669", "#10B981", "#34D399", "#6EE7B7", "#A7F3D0"]}
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
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-full border border-green-500/30 backdrop-blur-sm mb-6">
                <Scale className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-sm text-white/80">Effective: October 2024</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Terms of
                <span className="block bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                  Service
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-8">
                Welcome to PowerPoint Gym! These terms govern your membership and use of our facilities. 
                Please read carefully to understand your rights and responsibilities as a valued member.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="#membership-terms" className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-semibold text-white shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10">Read Terms</span>
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
                  <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Terms Sections</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center p-4 rounded-xl font-medium transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
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

        {/* Terms Content */}
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
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
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

        {/* Important Notice */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-3xl p-8 border border-yellow-500/30">
              <div className="flex items-start">
                <AlertTriangle className="w-8 h-8 text-yellow-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Important Notice</h3>
                  <p className="text-white/80 mb-4">
                    By signing up for membership or using our facilities, you acknowledge that you have read, 
                    understood, and agree to be bound by these terms of service. If you do not agree with 
                    any part of these terms, please do not use our services.
                  </p>
                  <p className="text-white/80 text-sm">
                    These terms are subject to change. We will notify members of any significant changes 
                    via email or posted notices at our facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Info className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Questions About Our Terms?
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Our member services team is here to help clarify any questions you have 
                about our terms of service or membership policies.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 rounded-xl p-6">
                  <Mail className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-2">Email Support</h4>
                  <p className="text-white/80 text-sm">support@powerpointgym.com</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <Phone className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-2">Phone Support</h4>
                  <p className="text-white/80 text-sm">+91-11-2345-6789</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <MapPin className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-2">In-Person</h4>
                  <p className="text-white/80 text-sm">Any gym location</p>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-semibold text-white shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105">
                  Contact Support
                </Link>
                <Link to="/privacy" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  View Privacy Policy
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

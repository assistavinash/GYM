import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  RefreshCcw, 
  CreditCard, 
  Calendar,
  AlertCircle,
  Clock,
  CheckCircle,
  XCircle,
  FileText,
  Mail,
  Phone,
  MapPin,
  Calculator,
  ArrowRight,
  Info,
  Download,
  DollarSign
} from 'lucide-react';
import Particles from '../components/Particles';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Refund() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('eligibility');
  const [refundCalculator, setRefundCalculator] = useState({
    membershipType: 'monthly',
    membershipCost: 2000,
    daysUsed: 15,
    reason: 'medical'
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      id: 'eligibility',
      title: 'Refund Eligibility',
      icon: CheckCircle,
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">Who Qualifies for Refunds</h3>
        <div class="space-y-4 text-white/80">
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2 flex items-center">
              <span class="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Eligible Scenarios
            </h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li><strong>Medical Reasons:</strong> Doctor's certificate required for injury/illness</li>
              <li><strong>Relocation:</strong> Moving more than 25 miles from nearest gym</li>
              <li><strong>Job Loss:</strong> Documented unemployment with government benefits</li>
              <li><strong>Student Status Change:</strong> Graduation or course completion</li>
              <li><strong>Cooling-off Period:</strong> Within 3 days of membership purchase</li>
              <li><strong>Facility Closure:</strong> Permanent or extended temporary closure</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2 flex items-center">
              <span class="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
              Non-Eligible Scenarios
            </h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Change of mind after cooling-off period</li>
              <li>Temporary travel or vacation</li>
              <li>Dissatisfaction with facilities (after trial period)</li>
              <li>Failure to use membership regularly</li>
              <li>Violation of gym rules resulting in termination</li>
              <li>Missed payments or account suspension</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'process',
      title: 'Refund Process',
      icon: RefreshCcw,
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">How to Request a Refund</h3>
        <div class="space-y-4 text-white/80">
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Step-by-Step Process</h4>
            <div class="space-y-3">
              <div class="flex items-start">
                <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold text-white mr-3 mt-0.5">1</div>
                <div>
                  <p class="font-semibold text-white text-sm">Submit Request</p>
                  <p class="text-xs text-white/70">Complete refund request form at reception or online</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold text-white mr-3 mt-0.5">2</div>
                <div>
                  <p class="font-semibold text-white text-sm">Provide Documentation</p>
                  <p class="text-xs text-white/70">Submit required documents (medical certificate, proof of relocation, etc.)</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold text-white mr-3 mt-0.5">3</div>
                <div>
                  <p class="font-semibold text-white text-sm">Review Process</p>
                  <p class="text-xs text-white/70">Management reviews request within 5-7 business days</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold text-white mr-3 mt-0.5">4</div>
                <div>
                  <p class="font-semibold text-white text-sm">Decision Notification</p>
                  <p class="text-xs text-white/70">Email notification with approval or denial reasons</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold text-white mr-3 mt-0.5">5</div>
                <div>
                  <p class="font-semibold text-white text-sm">Refund Processing</p>
                  <p class="text-xs text-white/70">If approved, refund processed within 10-14 business days</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Required Documents</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div>
                <p class="font-semibold text-white mb-1">Medical Refunds</p>
                <ul class="list-disc list-inside text-xs space-y-1">
                  <li>Doctor's certificate or medical report</li>
                  <li>Proof of treatment or hospitalization</li>
                  <li>Recommendation against physical activity</li>
                </ul>
              </div>
              <div>
                <p class="font-semibold text-white mb-1">Relocation Refunds</p>
                <ul class="list-disc list-inside text-xs space-y-1">
                  <li>New address proof (utility bill/lease)</li>
                  <li>Employment transfer letter</li>
                  <li>Distance verification from nearest gym</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'calculation',
      title: 'Refund Calculation',
      icon: Calculator,
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">How Refunds Are Calculated</h3>
        <div class="space-y-4 text-white/80">
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Pro-Rated Refund Formula</h4>
            <div class="bg-purple-500/20 rounded-lg p-3 mb-3 border border-purple-500/30">
              <p class="text-center font-mono text-white text-sm">
                Refund = (Total Paid - Processing Fee) × (Unused Days / Total Days)
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              <div class="bg-white/3 rounded-lg p-3">
                <p class="font-semibold text-white mb-1">Monthly Membership</p>
                <p class="text-xs">Pro-rated daily calculation</p>
                <p class="text-xs text-purple-400">30-day period basis</p>
              </div>
              <div class="bg-white/3 rounded-lg p-3">
                <p class="font-semibold text-white mb-1">Quarterly Membership</p>
                <p class="text-xs">Pro-rated weekly calculation</p>
                <p class="text-xs text-purple-400">90-day period basis</p>
              </div>
              <div class="bg-white/3 rounded-lg p-3">
                <p class="font-semibold text-white mb-1">Annual Membership</p>
                <p class="text-xs">Pro-rated monthly calculation</p>
                <p class="text-xs text-purple-400">365-day period basis</p>
              </div>
            </div>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Processing Fees</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li><strong>Standard Processing:</strong> ₹500 administrative fee</li>
              <li><strong>Medical Refunds:</strong> Fee waived with valid documentation</li>
              <li><strong>Cooling-off Period:</strong> No processing fee within 3 days</li>
              <li><strong>Facility Closure:</strong> Full refund with no fees</li>
              <li><strong>Early Termination:</strong> Additional 10% penalty may apply</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Refund Examples</h4>
            <div class="space-y-3 text-sm">
              <div class="bg-white/3 rounded-lg p-3">
                <p class="font-semibold text-white mb-1">Example 1: Monthly Membership</p>
                <p class="text-xs">₹2,000 monthly fee, used 15 days, medical reason</p>
                <p class="text-xs text-green-400">Refund: ₹1,000 (no processing fee)</p>
              </div>
              <div class="bg-white/3 rounded-lg p-3">
                <p class="font-semibold text-white mb-1">Example 2: Annual Membership</p>
                <p class="text-xs">₹20,000 annual fee, used 3 months, relocation</p>
                <p class="text-xs text-green-400">Refund: ₹14,500 (₹500 processing fee)</p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'timelines',
      title: 'Processing Times',
      icon: Clock,
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">Refund Processing Timelines</h3>
        <div class="space-y-4 text-white/80">
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Standard Processing Timeline</h4>
            <div class="space-y-3">
              <div class="flex justify-between items-center py-2 border-b border-white/10">
                <span class="text-sm">Request Submission</span>
                <span class="text-purple-400 text-sm font-semibold">Day 0</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-white/10">
                <span class="text-sm">Document Review</span>
                <span class="text-purple-400 text-sm font-semibold">Days 1-5</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-white/10">
                <span class="text-sm">Management Approval</span>
                <span class="text-purple-400 text-sm font-semibold">Days 3-7</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-white/10">
                <span class="text-sm">Payment Processing</span>
                <span class="text-purple-400 text-sm font-semibold">Days 7-14</span>
              </div>
              <div class="flex justify-between items-center py-2">
                <span class="text-sm">Bank Credit</span>
                <span class="text-purple-400 text-sm font-semibold">Days 10-21</span>
              </div>
            </div>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Express Processing</h4>
            <p class="text-sm mb-2">Available for certain scenarios with faster timelines:</p>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li><strong>Medical Emergencies:</strong> 3-5 business days</li>
              <li><strong>Cooling-off Period:</strong> 2-3 business days</li>
              <li><strong>Facility Issues:</strong> Same day approval possible</li>
              <li><strong>System Errors:</strong> Immediate processing</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Factors Affecting Timeline</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Completeness of documentation submitted</li>
              <li>Bank processing times for credit/debit cards</li>
              <li>Public holidays and weekends</li>
              <li>Complexity of refund calculation</li>
              <li>Need for additional verification</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'payment-methods',
      title: 'Refund Methods',
      icon: CreditCard,
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">How You'll Receive Your Refund</h3>
        <div class="space-y-4 text-white/80">
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Original Payment Method</h4>
            <p class="text-sm mb-3">Refunds are typically processed back to the original payment method:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div class="bg-white/3 rounded-lg p-3">
                <h5 class="font-semibold text-white text-sm mb-1">Credit/Debit Cards</h5>
                <ul class="text-xs space-y-1">
                  <li>• Processed through payment gateway</li>
                  <li>• 7-14 business days to appear</li>
                  <li>• Appears as credit on statement</li>
                </ul>
              </div>
              <div class="bg-white/3 rounded-lg p-3">
                <h5 class="font-semibold text-white text-sm mb-1">Bank Transfer</h5>
                <ul class="text-xs space-y-1">
                  <li>• Direct deposit to account</li>
                  <li>• 3-5 business days processing</li>
                  <li>• Requires bank verification</li>
                </ul>
              </div>
              <div class="bg-white/3 rounded-lg p-3">
                <h5 class="font-semibold text-white text-sm mb-1">Cash Payments</h5>
                <ul class="text-xs space-y-1">
                  <li>• Bank transfer or check issued</li>
                  <li>• Account details required</li>
                  <li>• 5-10 business days</li>
                </ul>
              </div>
              <div class="bg-white/3 rounded-lg p-3">
                <h5 class="font-semibold text-white text-sm mb-1">Digital Wallets</h5>
                <ul class="text-xs space-y-1">
                  <li>• PayTM, PhonePe, GPay</li>
                  <li>• Same wallet as payment</li>
                  <li>• 2-5 business days</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Alternative Methods</h4>
            <p class="text-sm mb-2">When original method isn't available:</p>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li><strong>Account Credit:</strong> Applied to future membership payments</li>
              <li><strong>Bank Transfer:</strong> Direct deposit to your bank account</li>
              <li><strong>Check Payment:</strong> Mailed to registered address</li>
              <li><strong>Gift Certificate:</strong> Transferable to family/friends</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Tracking Your Refund</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Email confirmation with tracking reference</li>
              <li>SMS updates on processing status</li>
              <li>Online portal to check refund status</li>
              <li>Customer service support for inquiries</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'special-cases',
      title: 'Special Situations',
      icon: AlertCircle,
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">Special Refund Situations</h3>
        <div class="space-y-4 text-white/80">
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Corporate Memberships</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Refunds processed through corporate billing contact</li>
              <li>Company approval may be required</li>
              <li>Bulk refund calculations for multiple employees</li>
              <li>Contract terms may override standard policy</li>
              <li>Net 30-60 day processing for corporate accounts</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Family Memberships</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Partial refunds available for individual family members</li>
              <li>Pro-rated based on remaining family members</li>
              <li>Primary account holder must authorize refunds</li>
              <li>Age restrictions may affect refund eligibility</li>
              <li>Family package discounts considered in calculations</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Promotional Memberships</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Special promotional terms may apply</li>
              <li>Discounted rates affect refund calculations</li>
              <li>Free membership periods excluded from refunds</li>
              <li>Bonus services not eligible for separate refunds</li>
              <li>Terms disclosed at time of promotion</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Suspended or Frozen Accounts</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Frozen period not counted in usage calculations</li>
              <li>Suspension fees non-refundable</li>
              <li>Medical freeze periods extend refund eligibility</li>
              <li>Account must be active to process refunds</li>
              <li>Outstanding balances deducted from refund</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'contact-support',
      title: 'Refund Support',
      icon: Mail,
      content: `
        <h3 class="text-xl font-semibold text-white mb-4">Getting Help with Refunds</h3>
        <div class="space-y-4 text-white/80">
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Contact Methods</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-white/3 rounded-lg p-3">
                <div class="flex items-center mb-2">
                  <Mail class="w-4 h-4 text-purple-400 mr-2" />
                  <h5 class="font-semibold text-white text-sm">Email Support</h5>
                </div>
                <p class="text-xs">refunds@powerpointgym.com</p>
                <p class="text-xs text-white/60">Response within 24 hours</p>
              </div>
              <div class="bg-white/3 rounded-lg p-3">
                <div class="flex items-center mb-2">
                  <Phone class="w-4 h-4 text-purple-400 mr-2" />
                  <h5 class="font-semibold text-white text-sm">Phone Support</h5>
                </div>
                <p class="text-xs">+91-11-2345-6789</p>
                <p class="text-xs text-white/60">Mon-Fri, 9 AM - 6 PM</p>
              </div>
              <div class="bg-white/3 rounded-lg p-3">
                <div class="flex items-center mb-2">
                  <MapPin class="w-4 h-4 text-purple-400 mr-2" />
                  <h5 class="font-semibold text-white text-sm">In-Person</h5>
                </div>
                <p class="text-xs">Any gym location</p>
                <p class="text-xs text-white/60">Bring membership ID</p>
              </div>
              <div class="bg-white/3 rounded-lg p-3">
                <div class="flex items-center mb-2">
                  <FileText class="w-4 h-4 text-purple-400 mr-2" />
                  <h5 class="font-semibold text-white text-sm">Online Portal</h5>
                </div>
                <p class="text-xs">Member dashboard</p>
                <p class="text-xs text-white/60">Submit requests online</p>
              </div>
            </div>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Refund Status Updates</h4>
            <ul class="list-disc list-inside space-y-1 text-sm">
              <li>Automatic email notifications at each stage</li>
              <li>SMS alerts for important updates</li>
              <li>Online tracking with reference number</li>
              <li>Customer service status inquiries</li>
              <li>Final confirmation when refund is processed</li>
            </ul>
          </div>
          <div class="bg-white/5 rounded-xl p-4">
            <h4 class="font-semibold text-white mb-2">Escalation Process</h4>
            <div class="text-sm space-y-2">
              <p><strong>Level 1:</strong> Front desk and customer service</p>
              <p><strong>Level 2:</strong> Membership manager review</p>
              <p><strong>Level 3:</strong> Regional manager decision</p>
              <p><strong>Level 4:</strong> Corporate office final review</p>
              <p class="text-xs text-white/60 mt-2">Most issues resolved at Level 1-2</p>
            </div>
          </div>
        </div>
      `
    }
  ];

  const stats = [
    {
      icon: RefreshCcw,
      number: '7-14',
      label: 'Business Days',
      description: 'Processing time'
    },
    {
      icon: CheckCircle,
      number: '95%',
      label: 'Approval Rate',
      description: 'Valid requests'
    },
    {
      icon: Clock,
      number: '3 Days',
      label: 'Cooling Period',
      description: 'Full refund'
    },
    {
      icon: DollarSign,
      number: '₹500',
      label: 'Processing Fee',
      description: 'Standard charge'
    }
  ];

  const calculateRefund = () => {
    const { membershipType, membershipCost, daysUsed, reason } = refundCalculator;
    const totalDays = membershipType === 'monthly' ? 30 : membershipType === 'quarterly' ? 90 : 365;
    const unusedDays = totalDays - daysUsed;
    const processingFee = reason === 'medical' ? 0 : 500;
    const refundAmount = Math.max(0, (membershipCost - processingFee) * (unusedDays / totalDays));
    
    return {
      totalDays,
      unusedDays,
      processingFee,
      refundAmount: Math.round(refundAmount)
    };
  };

  const refundResult = calculateRefund();

  return (
    <div className="min-h-screen relative">
      <Header />
      
      {/* Particles Background */}
      <div className="fixed inset-0 z-[1] w-full h-full min-h-screen pointer-events-none">
        <Particles
          particleCount={400}
          particleSpread={15}
          speed={0.08}
          particleColors={["#8B5CF6", "#A855F7", "#C084FC", "#DDD6FE", "#EDE9FE"]}
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
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-violet-600/20 rounded-full border border-purple-500/30 backdrop-blur-sm mb-6">
                <RefreshCcw className="w-4 h-4 text-purple-500 mr-2" />
                <span className="text-sm text-white/80">Fair & Transparent</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                Refund
                <span className="block bg-gradient-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-8">
                We believe in transparent and fair refund policies. Learn about our refund eligibility, 
                process, and timelines to understand your rights as a valued member.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="#eligibility" className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full font-semibold text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Check Eligibility
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <button className="flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <Download className="w-5 h-5 mr-2" />
                  Download Policy
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
                  <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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

        {/* Refund Calculator */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 mb-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Refund Calculator</h2>
                <p className="text-white/80">Get an estimate of your potential refund amount</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Membership Type</label>
                  <select 
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white"
                    value={refundCalculator.membershipType}
                    onChange={(e) => setRefundCalculator({...refundCalculator, membershipType: e.target.value})}
                  >
                    <option value="monthly">Monthly (₹2,000)</option>
                    <option value="quarterly">Quarterly (₹5,400)</option>
                    <option value="annual">Annual (₹20,000)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Membership Cost (₹)</label>
                  <input 
                    type="number" 
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white"
                    value={refundCalculator.membershipCost}
                    onChange={(e) => setRefundCalculator({...refundCalculator, membershipCost: parseInt(e.target.value)})}
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Days Used</label>
                  <input 
                    type="number" 
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white"
                    value={refundCalculator.daysUsed}
                    onChange={(e) => setRefundCalculator({...refundCalculator, daysUsed: parseInt(e.target.value)})}
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Refund Reason</label>
                  <select 
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white"
                    value={refundCalculator.reason}
                    onChange={(e) => setRefundCalculator({...refundCalculator, reason: e.target.value})}
                  >
                    <option value="medical">Medical</option>
                    <option value="relocation">Relocation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/20 to-violet-600/20 rounded-2xl p-6 border border-purple-500/30">
                <h3 className="text-xl font-bold text-white mb-4">Estimated Refund</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">{refundResult.totalDays}</div>
                    <div className="text-sm text-white/70">Total Days</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{refundResult.unusedDays}</div>
                    <div className="text-sm text-white/70">Unused Days</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">₹{refundResult.processingFee}</div>
                    <div className="text-sm text-white/70">Processing Fee</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400">₹{refundResult.refundAmount}</div>
                    <div className="text-sm text-white/70">Refund Amount</div>
                  </div>
                </div>
                <p className="text-xs text-white/60 mt-4 text-center">
                  This is an estimate. Actual refund may vary based on policy terms and verification.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Policy Sections</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center p-4 rounded-xl font-medium transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-purple-500 to-violet-600 text-white'
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
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mr-4">
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
            <div className="bg-gradient-to-r from-purple-500/20 to-violet-600/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Info className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Need Help with Your Refund?
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Our refund specialists are here to guide you through the process and answer 
                any questions about your eligibility or refund status.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 rounded-xl p-6">
                  <Mail className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-2">Email Support</h4>
                  <p className="text-white/80 text-sm">refunds@powerpointgym.com</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <Phone className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-2">Phone Support</h4>
                  <p className="text-white/80 text-sm">+91-11-2345-6789</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <MapPin className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-2">Visit Us</h4>
                  <p className="text-white/80 text-sm">Any gym location</p>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full font-semibold text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                  Request Refund
                </Link>
                <Link to="/terms" className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  View Terms
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

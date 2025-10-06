import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RefreshHandler from './refreshHandler';
import { clearAllAuthData, checkCurrentStorage } from './utils/clearStorage';
import Home from './pages/Home';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import Overview from './pages/Overview';
// Additional pages imports
import SuccessStories from './pages/SuccessStories';
import Promotions from './pages/Promotions';
import OurStory from './pages/OurStory';
import MeetTheTeam from './pages/MeetTheTeam';
import OurFacilities from './pages/OurFacilities';
import StrengthTraining from './pages/StrengthTraining';
import YogaClasses from './pages/YogaClasses';
import CardioBlast from './pages/CardioBlast';
import CrossfitSessions from './pages/CrossfitSessions';
import PersonalTrainers from './pages/PersonalTrainers';
import NutritionExperts from './pages/NutritionExperts';
import Physiotherapists from './pages/Physiotherapists';
import PlansPricing from './pages/PlansPricing';
import CorporateMembership from './pages/CorporateMembership';
import FamilyPackages from './pages/FamilyPackages';
import ClassSchedule from './pages/ClassSchedule';
import TrainerAvailability from './pages/TrainerAvailability';
import EventsCalendar from './pages/EventsCalendar';
import LocationMap from './pages/LocationMap';
import Faqs from './pages/Faqs';
import About from './pages/About';
import Classes from './pages/Classes';
import Trainers from './pages/Trainers';
import Membership from './pages/Membership';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import ForgetPage from './pages/ForgetPage';
import AdminDashboard from './pages/AdminDashboard';
import TrainerDashboard from './pages/TrainerDashboard';
import UserDashboard from './pages/UserDashboard';
import Cardio from './pages/Cardio';
import Yoga from './pages/Yoga';
import Nutrition from './pages/Nutrition';
import Physiotherapy from './pages/Physiotherapy';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Refund from './pages/Refund';
import Sitemap from './pages/Sitemap';
import Gallery from './pages/Gallery';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // ✅ Check and clear invalid tokens on app start
  useEffect(() => {
    console.log('=== App Started - Checking Storage ===');
    checkCurrentStorage();
    
    // Clear any invalid or leftover tokens
    const token = localStorage.getItem('token') || localStorage.getItem('jwtToken');
    const user = localStorage.getItem('user') || localStorage.getItem('loggedInUser');
    
    // If token exists but no valid user data, clear everything
    if (token && (!user || user === 'null' || user === 'undefined')) {
      console.log('Found invalid token without user data, clearing...');
      clearAllAuthData();
    }
  }, []);

  // ✅ PrivateRoute component
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      {/* ✅ Token Refresh / Auto Login Check */}
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
 
      <Routes>
        {/* ✅ Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgetPage />} />

        {/* ✅ Main Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/tour" element={<Gallery />} />

        {/* ✅ Submenu Pages */}
        <Route path="/overview" element={<Overview />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/meet-the-team" element={<MeetTheTeam />} />
        <Route path="/our-facilities" element={<OurFacilities />} />
        <Route path="/strength-training" element={<StrengthTraining />} />
        <Route path="/yoga-classes" element={<YogaClasses />} />
        <Route path="/cardio-blast" element={<CardioBlast />} />
        <Route path="/crossfit-sessions" element={<CrossfitSessions />} />
        <Route path="/personal-trainers" element={<PersonalTrainers />} />
        <Route path="/nutrition-experts" element={<NutritionExperts />} />
        <Route path="/physiotherapists" element={<Physiotherapists />} />
        <Route path="/plans-pricing" element={<PlansPricing />} />
        <Route path="/corporate-membership" element={<CorporateMembership />} />
        <Route path="/family-packages" element={<FamilyPackages />} />
        <Route path="/class-schedule" element={<ClassSchedule />} />
        <Route path="/trainer-availability" element={<TrainerAvailability />} />
        <Route path="/events-calendar" element={<EventsCalendar />} />
        <Route path="/location-map" element={<LocationMap />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/faq" element={<Navigate to="/faqs" replace />} />

        {/* ✅ Footer Pages */}
        <Route path="/cardio" element={<Cardio />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/physiotherapy" element={<Physiotherapy />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/sitemap" element={<Sitemap />} />

        {/* ✅ Private Routes */}
        <Route path="/admin" element={<PrivateRoute element={<AdminDashboard />} />} />
        <Route path="/trainer" element={<PrivateRoute element={<TrainerDashboard />} />} />
        <Route path="/user" element={<PrivateRoute element={<UserDashboard />} />} />
      </Routes>
    </div>
  );
}

export default App;
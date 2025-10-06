import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Function to clear all authentication data
export function clearAllAuthData() {
  const itemsToRemove = [
    'token',
    'jwtToken', 
    'user',
    'loggedInUser',
    'refreshToken',
    'userRole',
    'isAuthenticated'
  ];
  
  itemsToRemove.forEach(item => {
    localStorage.removeItem(item);
    sessionStorage.removeItem(item);
  });
  
  console.log('All authentication data cleared');
}

function RefreshHandler({ setIsAuthenticated }) {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const token = localStorage.getItem('token') || localStorage.getItem('jwtToken');
      const user = localStorage.getItem('user') || localStorage.getItem('loggedInUser');
      
      // More strict validation - check if token exists and is valid format
      if (token && token !== 'cookie' && token !== 'null' && token !== 'undefined' && token.length > 20) {
        // Additional validation - check if user data exists
        if (user && user !== 'null' && user !== 'undefined') {
          try {
            const userData = JSON.parse(user);
            if (userData && userData.role) {
              setIsAuthenticated(true);
              
              // Only navigate to dashboards if user is on login/register pages
              const currentPath = window.location.pathname;
              if (currentPath === '/login' || currentPath === '/register') {
                // Navigate based on user role
                switch (userData.role) {
                  case 'admin':
                    navigate('/admin');
                    break;
                  case 'trainer':
                    navigate('/trainer');
                    break;
                  case 'user':
                    navigate('/user');
                    break;
                  default:
                    navigate('/');
                }
              }
              return;
            }
          } catch (parseError) {
            console.error('Error parsing user data:', parseError);
          }
        }
      }
      
      // If we reach here, authentication is invalid
      console.log('Invalid or missing authentication data, clearing storage');
      clearAllAuthData();
      setIsAuthenticated(false);
      
    } catch (error) {
      console.error('Error in RefreshHandler:', error);
      clearAllAuthData();
      setIsAuthenticated(false);
    }
  }, [navigate, setIsAuthenticated]);

  return null;
}

export default RefreshHandler;
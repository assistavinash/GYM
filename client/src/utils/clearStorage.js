// Utility function to clear all authentication data
export const clearAllAuthData = () => {
  const itemsToRemove = [
    'token',
    'jwtToken', 
    'user',
    'loggedInUser',
    'refreshToken',
    'userRole',
    'isAuthenticated',
    'authToken'
  ];
  
  console.log('Before clearing:');
  itemsToRemove.forEach(item => {
    const value = localStorage.getItem(item);
    if (value) {
      console.log(`${item}: ${value.substring(0, 20)}...`);
    }
  });
  
  // Clear localStorage
  itemsToRemove.forEach(item => {
    localStorage.removeItem(item);
  });
  
  // Clear sessionStorage
  itemsToRemove.forEach(item => {
    sessionStorage.removeItem(item);
  });
  
  // Clear all localStorage (nuclear option)
  localStorage.clear();
  sessionStorage.clear();
  
  console.log('All authentication data cleared!');
  console.log('Current localStorage length:', localStorage.length);
  
  // Reload the page to reset state
  window.location.reload();
};

// Function to check current storage
export const checkCurrentStorage = () => {
  console.log('=== Current Storage Status ===');
  console.log('localStorage length:', localStorage.length);
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`${key}: ${value?.substring(0, 50)}...`);
  }
  
  console.log('sessionStorage length:', sessionStorage.length);
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    const value = sessionStorage.getItem(key);
    console.log(`Session ${key}: ${value?.substring(0, 50)}...`);
  }
};

// Add to window for easy access in browser console
if (typeof window !== 'undefined') {
  window.clearAllAuthData = clearAllAuthData;
  window.checkCurrentStorage = checkCurrentStorage;
}
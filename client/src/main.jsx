
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider 
        clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
        onScriptLoadError={() => console.error('Google OAuth script failed to load')}
        onScriptLoadSuccess={() => console.log('Google OAuth script loaded successfully')}
      >
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)

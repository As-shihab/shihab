import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './CSS/media.mobile.css'
import './CSS/media.desktop.css'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
ReactDOM.createRoot(document.getElementById('root')).render(
<GoogleOAuthProvider clientId="12373619186-us17erb4f22p6f4sgfjemjqh1k5qa0kk.apps.googleusercontent.com">

<App />
</GoogleOAuthProvider>
  

)

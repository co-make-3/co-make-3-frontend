// Package imports
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// Component imports
import App from './App'

// File imports
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'


ReactDOM.render(<Router><App /></Router>, document.getElementById('root'))
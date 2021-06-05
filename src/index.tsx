import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function main() {
  const component = <React.StrictMode></React.StrictMode>

  ReactDOM.render(component, document.getElementById('root'))
}

main()

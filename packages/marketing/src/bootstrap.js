import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// Mount html to element in dom
const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
}

// check where app is running in isolation
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root')

    if (devRoot) {
        mount(devRoot)
    }
}


export { mount }
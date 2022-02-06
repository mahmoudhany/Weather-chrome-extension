import * as React from "react"
import * as ReactDOM from 'react-dom'
import './popup.css'

const popup = <div>hello world</div>


const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(popup, root)

import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect"

import BrowserApp from "./BrowserApp"
import MobileApp from "./MobileApp"
import store from "./store"

const render = () => {
	ReactDOM.render(
		<Provider store={store}>
			<div>
				<BrowserView device={isBrowser}>
					<BrowserApp/>
				</BrowserView>
				<MobileView device={isMobile}>
					<MobileApp/>
				</MobileView>
			</div>
		</Provider>, 
		document.getElementById("root")
	)
}

render()
store.subscribe(render)
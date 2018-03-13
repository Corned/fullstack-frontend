import React from "react"
import { connect } from "react-redux"

import Post from "./components/Post"
import FlatList from "./components/FlatList"
import CommunityList from "./components/CommunityList"

import "./index.css"

class App extends React.Component {
	render() {
		return (
			<div>
				<div class="header">
					<CommunityList>
						<p className="flat-list-item">ProgrammerHumor</p>
						<p className="flat-list-item selected-flat-list-item">Gaming</p>
						<p className="flat-list-item">Pictures</p>
						<p className="flat-list-item">Overwatch</p>
						<p className="flat-list-item">TalesFromRetail</p>
						<p className="flat-list-item">Videos</p>
						<p className="flat-list-item">Jokes</p>
						<p className="flat-list-item">DankMemes</p>
					</CommunityList>

					<div className="community-header">
						<img src="https://b.thumbs.redditmedia.com/uDdrVzp_IUelqrB5xeFvvj7_eBpi1fdtapBWDJt7bkk.png"/>
					</div>	
					
					<div className="community-navigation">
						<div className="community-navigation-button selected-community-navigation-button">Hot</div>
						<div className="community-navigation-button">New</div>
						<div className="community-navigation-button">Rising</div>
						<div className="community-navigation-button">Controversial</div>
						<div className="community-navigation-button">Top</div>
						<div className="community-navigation-button">Gilded</div>
						<div className="community-navigation-button">Wiki</div>
					</div>			
				</div>
				<div className="content">
					<div className="all-posts">
						<div className="posts pinned-posts">
							<Post title="Read the rules!"/>
							<Post title="Test post, please ignore"/>
						</div>
						<div className="posts user-posts">
							<Post title="Mods are a bunch of butts amirite"/>
							<Post title="Overwatch is the best game ever!"/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default connect(null, null)(App)

import React from "react"
import { connect } from "react-redux"

import Post from "./components/Post"
import Communities from "./components/Communities"
import CommunityNavigation from "./components/CommunityNavigation"

import "./css/index.css"

class App extends React.Component {
	render() {
		return (
			<div>
				<div id="header">
					<CommunityNavigation/>	
				</div>
				<div id="content">
					<Communities>
						<p className="select-community">AskReddit</p>
						<p className="select-community">WorldNews</p>
						<p className="select-community">Videos</p>
						<p className="select-community">Funny</p>
						<p className="select-community">TodayILearned</p>
						<p className="select-community">Pics</p>
						<p className="select-community">Gaming</p>
						<p className="select-community">Movies</p>
						<p className="select-community">News</p>
						<p className="select-community">GIFs</p>
						<p className="select-community">Movies</p>
						<p className="select-community">MildlyInteresting</p>
						<p className="select-community">Aww</p>
						<p className="select-community">WTF</p>
						<p className="select-community">Showerthoughts</p>
						<p className="select-community">Technology</p>
						<p className="select-community">me_irl</p>
					</Communities>
					<div className="frame" id="posts">
						<p className="post">hello world</p>
						<p className="post">hello world</p>
						<p className="post">hello world</p>
						<p className="post">hello world</p>
						<p className="post">hello world</p>
						<p className="post">hello world</p>
						<p className="post">hello world</p>
						<p className="post">hello world</p>
						<p className="post">hello world</p>
						<p className="post">hello world</p>
						<p className="post">hello world</p>
						<p className="post">hello world</p>
						<p className="post">hello world</p>
						<p className="post">hello world</p>
						<p className="post">hello world</p>
						<p className="post">hello world</p>
						<p className="post">hello world</p>
					</div>
					<div className="frame" id="sidebar">
					</div>
				</div>


			</div>
		)
	}
}

export default connect(null, null)(App)

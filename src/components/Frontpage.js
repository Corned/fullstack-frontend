import React from "react"
import { connect } from "react-redux"
import { withRouter, Route, Switch } from "react-router-dom"

import CommunityForm from "./forms/CommunityForm"
import Navigation from "./community/Navigation"
import PostList from "./community/PostList"
import Sidebar from "./Sidebar"
import Loading from "./Loading"
import Link from "./Link"

import { getCommunityByName } from "../reducers/communityReducer"
import { getAllPosts } from "../reducers/postReducer"


class Frontpage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			view: props.view
		}
	}

	componentWillMount() {
		this.props.getAllPosts()
	}

	setView = (view) => {
		return () => {
			this.setState({ view })
		}
	}


	render() {
		/*
		return (
			<Loading 
				loadingMessage={"Hey, this will be the frontpage."}
				timeoutMessage={"It's not finished yet, go away."}
				timeout={1500}
			/>
		)
		*/
		
		return (
			<div id="community" className="apply-margin--vertical-xl">
				<Navigation 
					action={this.setView}
					currentView={this.state.view}
					baseUrl="/"
					labels={[ "hot", "new", "controversial", "top" ]}
				/>

				<div id="community-content">
					<Switch>
						<Route exact path="/create" render={() => 
							<CommunityForm/>
						}/>

						<Route exact path="/:view" render={() => 
							<PostList 
								postList={this.props.postList}
							/>	
						}/>
					</Switch>

					<Sidebar>
						<div className="card background-white">
							<h1>Frontpage of Cordial</h1>
							<Link to="/create">
								<button>
									Start a Community
								</button>
							</Link>
						</div>
					</Sidebar>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { 
		"community": state.communityData.current,
		"postList": state.postData.list
	}
}

const mapDispatchToProps = { getAllPosts }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Frontpage))

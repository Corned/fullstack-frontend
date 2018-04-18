import React from "react"
import { connect } from "react-redux"
import { withRouter, Route } from 'react-router-dom'

import Navigation from "./community/Navigation"
import PostList from "./community/PostList"
import Sidebar from "./Sidebar"
import TextPostForm from "./forms/TextPostForm"
import LinkPostForm from "./forms/LinkPostForm"
import ExpandedPost from "./community/ExpandedPost"
import Post from "./community/Post"
import Loading from "./Loading"
import Link from "./Link"

import { getCommunityByName } from "../reducers/communityReducer"
import { getAllPostsByCommunity } from "../reducers/postReducer"


class Frontpage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
		}
	}

	componentWillMount() {
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
				{/* <Navigation view={this.state.view} setView={this.setView}/> */}

				<div id="community-content">
					<Route exact path="/front" render={() => 
						<div className="frame fill">
							Communities -> Cordial
						</div>
					}/>

					<Route exact path="/front/create" render={() => 
						<div className="frame fill">
							create a community yes :D
						</div>
					}/>

					<Sidebar>
						<div className="frame">
							<Link to="/front/create">
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
		"posts": state.postData
	}
}

const mapDispatchToProps = { getCommunityByName, getAllPostsByCommunity }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Frontpage))

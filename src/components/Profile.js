import React from "react"
import { connect } from "react-redux"
import { withRouter, Route } from 'react-router-dom'

import ExpandedPost from "./community/ExpandedPost"
import LinkPostForm from "./forms/LinkPostForm"
import Loading from "./Loading"
import Navigation from "./community/Navigation"
import PostList from "./community/PostList"
import Sidebar from "./Sidebar"
import TextPostForm from "./forms/TextPostForm"

import { getAllPostsByCommunity } from "../reducers/postReducer"
import { getCommunityByName } from "../reducers/communityReducer"


class Profile extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			view: props.view
		}
	}

	componentWillMount() {
	}

	setView = (view) => {
		return () => {
			if (this.props.Profile === undefined) {
				return
			}

			this.setState({ view })
		}
	}

	render() {
		return (
			<p>empty</p>
		)
	}
}

const mapStateToProps = (state) => {
	return { 
	}
}

const mapDispatchToProps = {  }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile))

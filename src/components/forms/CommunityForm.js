import React from "react"
import { connect } from "react-redux"
import { withRouter, Redirect } from "react-router-dom"

import { createCommunity } from "../../reducers/communityReducer"

class CommunityForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			error: "",
			name: ""
		}
	}

	textFieldHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	submit = async (event) => {
		event.preventDefault()

		try {
			await this.props.createCommunity({
				name: this.state.name,
			}, this.props.loggedUserData.token)

			this.props.history.push(`/c/${this.props.community.name}/`)
		} catch (exception) {
			if (exception.response && exception.response.data && exception.response.data.error) {
				this.setState({ error: exception.response.data.error })
			} else {
				console.log(exception)
			}
		}
	}

	render() {
		if (this.props.loggedUserData.user === null) {
			return (
				<Redirect to={`/login?redirect=${this.props.history.location.pathname}`}/>
			)
		}

		return (
			<div className="card submit apply-margin--vertical">
				<h1>Start a Community</h1>
				<p className="primary-text">You're about to start a community.</p>
				<br/>
				<p className="error">{this.state.error}</p>
				<form onSubmit={this.submit} className="apply-margin--vertical">
					<h2>Community Name</h2>
					<input 
						className=""
						type="text" 
						name="name" 
						placeholder="Name"
						value={this.state.name}
						autoComplete="off"
						onChange={this.textFieldHandler}
					/>
					<button 
						type="submit"
					>Submit</button>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { 
		"community": state.communityData.current,
		"loggedUserData": state.loggedUserData,
	}
}

const mapDispatchToProps = { createCommunity }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CommunityForm))

import React from "react"
import Link from "../Link"

const ProfileInformation = ({ user }) => {
	return (
		<div id="community-information" className="card background-white apply-margin--vertical">
			<h1>{user.username}</h1>
			<p className="secondary-text">{user.posts.length} posts</p>
		</div>
	)
}

export default ProfileInformation
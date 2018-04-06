export default (date) => {
	if (typeof date === "string") {
		date = new Date(date)
	}

	date = date.getTime() / (1000 * 60 * 60)

	const currentTime = new Date().getTime() / (1000 * 60 * 60)

	const deltaTimeHours = Math.floor(currentTime - date)
	const deltaTimeDays = Math.floor(deltaTimeHours / 24)
	
	if (deltaTimeHours < 1) {
		return "less than an hour ago"
	} else if (deltaTimeHours < 24) {
		return `${deltaTimeHours === 1 ? "an" : deltaTimeHours} hour${deltaTimeHours === 1 ? "" : "s"} ago`
	} else {
		return `${deltaTimeDays === 1 ? "a" : deltaTimeDays} day${(deltaTimeDays === 1 ? "" : "s")} ago`
	}
}
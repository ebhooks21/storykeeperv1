/**
 * Storykeeper.js -- File to hold the StoryKeeper class, the main class for the application.
 * Author: Eric Hooks, 2025
 */

class StoryKeeper {
	/**
	 * Main constructor for the StoryKeeper class.
	 */
	constructor() {
		let self = this;

	}

	/**
	 * Function for starting the application.
	 */
	start() {
		let self = this;

		//Hide all areas
		$(".storykeeper-app-area").hide();

		//Initialize the project listing area
		self.initProjectListingArea();
	}

	/**
	 * Function to initialize the project listing area.
	 */
	initProjectListingArea() {
		let self = this;

		//Show the project listing area
		$("#projectlisting-area").show();

		//Render the project list
		self.renderProjectList();
	}

	/**
	 * Function to render the project listing.
	 */
	renderProjectList() {
		let self = this;
	}
}

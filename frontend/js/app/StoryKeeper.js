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

		//Create a new ProjectListingArea
		self.projectListingArea = new ProjectListingArea();

	}

	/**
	 * Function for starting the application.
	 */
	start() {
		let self = this;

		//Hide all areas
		$(".storykeeper-app-area").hide();

		//Initialize the project listing area
		(self.projectListingArea).initProjectListingArea();
	}

	
}

/**
 * ProjectListingArea.js -- File to contain the ProjectListingArea class, which controls the project listing area.
 * Author: Eric Hooks, 2025
 */

class ProjectListingArea {
	/**
	 * Main constructor for the ProjectListingArea class.
	 */
	constructor() {
		let self = this;

		self.projectListingContainer = $("#projectlisting-area");
	}
	/**
	 * Function to initialize the project listing area.
	 */
	initProjectListingArea() {
		let self = this;

		//Show the project listing area
		(self.projectListingContainer).show();

		//Setup the add project button
		$("#addprojectbtn").on("click", function (e) {
			self.addProjectBtnOnClick(e);
		});

		//Render the project list
		self.renderProjectList();
	}

	/**
	 * Function to render the project listing.
	 */
	renderProjectList() {
		let self = this;
	}

	/**
	 * Function for the add project button onclick.
	 */
	addProjectBtnOnClick(e) {
		//Stop default propagation
		e.stopPropagation();
	}
}
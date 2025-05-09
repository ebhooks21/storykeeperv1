/**
 * Project.js -- File to hold the Project class, which is a model for projects.
 * Author: Eric Hooks, 2025
 */

class Project {
	/**
	 * Constructor for the Project class.
	 */
	constructor(id, name, description) {
		let self = this;

		self.id = id;
		self.name = name;
		self.description = description;
	}
}
<!--
	Index.php -- Entry point to the web app.
	Author: Eric Hooks, 2025
-->

<!DOCTYPE html>
<html>
	<head>
		<title>StoryKeeper</title>

		<!-- CSS Files -->
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">	
		<link href="css/style.css" rel="stylesheet">
		<link href="css/ProjectListingAreaStyle.css" rel="stylesheet">

		<!-- JS Files -->
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>	
		<script src="js/jquery-3.7.1.min.js"></script>	

		<script src="js/models/Project.js"></script>
		<script src="js/models/ProjectListing.js"></script>
		<script src="js/app/ProjectListingArea.js"></script>
		<script src="js/app/StoryKeeper.js"></script>
	</head>

	<body>
		<div class="card col-11 bg-primary text-white projectlisting-area storykeeper-app-area" id="projectlisting-area">
			<h2>Projects</h2>

			<div class="card col-11 bg-secondary projectlistingtable-area">

				<div class="addprojectbtn-area">
					<button class="btn btn-lg btn-success" id="addprojectbtn">Add Project</button>
				</div>
			</div>
		</div>
	</body>

	<script type="text/javascript">
		let SK = new StoryKeeper();

		//Start the application
		SK.start();
	</script>
</html>

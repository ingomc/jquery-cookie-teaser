# JQuery-Cookie-Teaser
This is a JQuery Plugin with Cookie Teaser Consent

## Installation
The easiest way to get up and running is to download the JS-file and the CSS-file, and add it to you HTML. How you can use it, is described below.

### How to use it
#### Step 1: HTML

```sh
<div class="cookie1 cookie-teaser">
    <div>
        Hello, im a Cookie-Controlled Teaser, the X-Button is generated through JS. 
        It's completely configurable.
    </div>
</div>

```
#### Step 2: JS
Add this before the closing <body>-TAG
```sh
<script type="text/javascript">
    document.addEventListener("DOMContentLoaded", function() {
        $('.cookie1').cookieTeaser();
    });
</script>
```

#### This Could be a working expample
See the example-folder

```sh

<!DOCTYPE html>
<html>
	<head>
		<title>Cookie</title>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="css/jquery-cookie-teaser.css">
		<style type="text/css"></style>
	</head>
	<body>
		<p>Let the game begin!</p>
		<div class="cookie1 cookie-teaser">
		    <div>
		        Hello, im a Cookie-Controlled Teaser, the X-Button is generated through JS. 
		        It's completely configurable.
		    </div>
		</div>
	</body>
	<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
	<script src="js/jquery-cookie-teaser.js"></script>
	<script type="text/javascript">
	    document.addEventListener("DOMContentLoaded", function() {
	        $('.cookie1').cookieTeaser();
	    });
	</script>
</html>
```


/*
External JavaScript
Scripts can also be placed in external files:

External file: myScript.js
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
External scripts are practical when the same code is used in many different web pages.

JavaScript files have the file extension .js.

To use an external script, put the name of the script file in the src (source) attribute of a <script> tag:

Example
<script src="myScript.js"></script>
You can place an external script reference in <head> or <body> as you like.

The script will behave as if it was located exactly where the <script> tag is located.

External scripts cannot contain <script> tags.

External JavaScript Advantages
Placing scripts in external files has some advantages:

It separates HTML and code
It makes HTML and JavaScript easier to read and maintain
Cached JavaScript files can speed up page loads
To add several script files to one page  - use several script tags:

Example
<script src="myScript1.js"></script>
<script src="myScript2.js"></script>
External References
An external script can be referenced in 3 different ways:

With a full URL (a full web address)
With a file path (like /js/)
Without any path
This example uses a full URL to link to myScript.js:

Example
<script src="https://www.w3schools.com/js/myScript.js"></script>

This example uses a file path to link to myScript.js:

Example
<script src="/js/myScript.js"></script>

This example uses no path to link to myScript.js:

Example
<script src="myScript.js"></script>

*/
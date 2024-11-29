// Get Refernces to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle  Form Submission:
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent  Page Reload
    // collect Input Values.
    var name = document.getElementById('name').value;
    var fathername = document.getElementById('fathername').value;
    var phone = document.getElementById('phone').value;
    var national = document.getElementById('national').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experiance = document.getElementById('experiance').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content Dynamically
    var resumeHTML = "\n<h4><b>Resume Generated </b></h4>\n<h3>PERSONAL INFORMATION</h3>\n<p><b>Name: </b>".concat(name, "<p>\n<p><b>Father Name: </b>").concat(fathername, "</p>\n<p><b>Phone: </b>").concat(phone, "</p>\n<p><b>National ID: </b>").concat(national, "</p>\n<p><b>Email: </b>").concat(email, "</p>\n\n\n<h3>EDUCATION</h3>\n<p>").concat(education, "</p>\n\n<h3>EXPERIANCE</h3>\n<p>").concat(experiance, "</p>\n\n<h3>SKILLS</h3>\n<p>").concat(skills, "</p>\n");
    //display the Generate Resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume display element is missing.');
    }
});

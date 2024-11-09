// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); // Prevent page reload on form submission
    // Collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Get the photo file and create an image URL (if available)
    var photoFile = (_a = document.getElementById('photo').files) === null || _a === void 0 ? void 0 : _a[0];
    var photoUrl = '';
    if (photoFile) {
        photoUrl = URL.createObjectURL(photoFile); // Create URL for the uploaded image
    }
    // Save the form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills,
        photoUrl: photoUrl,
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Save data in localStorage
    // Generate the resume content dynamically
    var resumeHTML = "\n    <h2>Editable Resume</h2>\n    ".concat(photoUrl ? "<img src=\"".concat(photoUrl, "\" alt=\"Profile Photo\" style=\"max-width: 150px; max-height: 150px; border-radius: 50%; margin-bottom: 20px;\" />") : '', "\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> <span contenteditable=\"true\">").concat(name, "</span></p>\n    <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});

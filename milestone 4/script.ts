// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload on form submission

    // Collect input values
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Get the photo file and create an image URL (if available)
    const photoFile = (document.getElementById('photo') as HTMLInputElement).files?.[0];
    let photoUrl = '';
    if (photoFile) {
        photoUrl = URL.createObjectURL(photoFile); // Create URL for the uploaded image
    }

    // Save the form data in localStorage with the username as the key
    const resumeData = {
        name,
        email,
        phone,
        education,
        experience,
        skills,
        photoUrl, // Save the photo URL for dynamic display
    };

    localStorage.setItem(username, JSON.stringify(resumeData)); // Save data in localStorage

    // Generate the resume content dynamically
    const resumeHTML = `
    <h2>Editable Resume</h2>
    ${photoUrl ? `<img src="${photoUrl}" alt="Profile Photo" style="max-width: 150px; max-height: 150px; border-radius: 50%; margin-bottom: 20px;" />` : ''}
    <h3>Personal Information</h3>
    <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
    <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
    <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
    <h3>Education</h3>
    <p contenteditable="true">${education}</p>
    <h3>Experience</h3>
    <p contenteditable="true">${experience}</p>
    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
    `;

    // Display the generated resume

    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else{
        console.error('The resume display element is missing.')
}

})

 

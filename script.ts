// Get Refernces to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle  Form Submission:
form.addEventListener('submit', (event: Event)=>{
    event.preventDefault(); //prevent  Page Reload

// collect Input Values.
const name = (document.getElementById ('name') as HTMLInputElement).value
const fathername = (document.getElementById ('fathername') as HTMLInputElement).value
const phone = (document.getElementById ('phone') as HTMLInputElement).value
const national = (document.getElementById ('national') as HTMLInputElement).value
const email = (document.getElementById ('email') as HTMLInputElement).value
const education = (document.getElementById ('education') as HTMLInputElement).value
const experiance = (document.getElementById ('experiance') as HTMLInputElement).value
const skills = (document.getElementById ('skills') as HTMLInputElement).value


// Generate the resume content Dynamically
const resumeHTML = `
<h4><b> Editable Resume Generated </b></h4>
<h3>PERSONAL INFORMATION</h3>
<p><b>Name:</b><span contenteditable ="true"${name}</span><p>
<p><b>Father Name:</b><span contenteditable ="true"${fathername}</span></p>
<p><b>Phone:</b><span contenteditable ="true"${phone} </span> </p>
<p><b>National ID:</b><span contenteditable ="true"${national} </span></p>
<p><b>Email ID:</b><span contenteditable ="true"${national} </span></b>${email}</p>


<h3>EDUCATION</h3>
<p contenteditable ="true">${education}</p>

<h3>EXPERIANCE</h3>
<p contenteditable ="true">${experiance}</p>

<h3>SKILLS</h3>
<p contenteditable ="true">${skills}</p>
`;
//display the Generate Resume

if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
}else{ 
   console.error('The Resume display element is missing.'); 
}
});
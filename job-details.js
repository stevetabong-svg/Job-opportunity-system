// Display job details for the selected job
function displayJobDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const jobId = urlParams.get("id") || 0;
  const jobs = JSON.parse(localStorage.getItem("jobs")) || getDefaultJobs();
  const job = jobs[jobId];

  const detailsDiv = document.getElementById("job-details");

  if (job) {
    detailsDiv.innerHTML = `
      <div class="job-title">${job.title}</div>
      <div class="company-info">
        <strong>${job.company}</strong>
        <span>•</span>
        <span>${job.location}</span>
        <span>•</span>
        <span>${job.salary}</span>
      </div>
      <div class="section-title">Job Description</div>
      <div class="job-description">
        ${job.description}
      </div>
      <div class="section-title">Requirements</div>
      <ul class="requirements-list">
        ${job.requirements.map((req) => `<li>${req}</li>`).join("")}
      </ul>
      <div class="section-title">Benefits</div>
      <ul class="requirements-list">
        ${job.benefits.map((benefit) => `<li>${benefit}</li>`).join("")}
      </ul>
      <button class="apply-btn" onclick="applyForJob(${jobId})">Apply Now</button>
    `;
  } else {
    detailsDiv.innerHTML = `
      <button class="back-btn" onclick="window.history.back()">← Back</button>
      <div class="empty-state">
        <h2>Job Not Found</h2>
        <p>The job you're looking for doesn't exist.</p>
      </div>
    `;
  }
}

function applyForJob(jobId) {
  const jobs = JSON.parse(localStorage.getItem("jobs")) || getDefaultJobs();
  const job = jobs[jobId];

  // Store application
  let applications = JSON.parse(localStorage.getItem("applications")) || [];
  applications.push({
    jobTitle: job.title,
    company: job.company,
    appliedDate: new Date().toLocaleDateString(),
    status: "pending",
  });
  localStorage.setItem("applications", JSON.stringify(applications));

  alert("Application submitted successfully!");
  window.location.href = "applications.html";
}

function getDefaultJobs() {
  return [
    {
      title: "Frontend Developer",
      company: "TechCorp",
      location: "Remote",
      salary: "$80,000 - $120,000/year",
      description:
        "We are looking for an experienced Frontend Developer to join our team. You will work with modern JavaScript frameworks and create responsive web applications.",
      requirements: [
        "3+ years of experience with HTML, CSS, JavaScript",
        "Experience with React or Vue.js",
        "Strong understanding of responsive design",
        "Git version control experience",
        "Bachelor's degree in Computer Science or related field",
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Remote work options",
        "Professional development budget",
        "Flexible working hours",
      ],
    },
    {
      title: "Backend Developer",
      company: "SoftPlus",
      location: "Kenya",
      salary: "$70,000 - $110,000/year",
      description:
        "Join our backend development team to build scalable APIs and microservices. You'll work with cloud technologies and modern development practices.",
      requirements: [
        "4+ years of backend development experience",
        "Proficiency in Python, Java, or Node.js",
        "Experience with RESTful API design",
        "Database design and optimization skills",
        "Knowledge of Docker and Kubernetes",
      ],
      benefits: [
        "Competitive salary",
        "Health and wellness programs",
        "Career growth opportunities",
        "Team building activities",
        "Educational sponsorship",
      ],
    },
    {
      title: "UI/UX Designer",
      company: "CreativeHub",
      location: "USA",
      salary: "$75,000 - $115,000/year",
      description:
        "Create beautiful and intuitive user interfaces for our suite of products. Work with a talented design team to deliver exceptional user experiences.",
      requirements: [
        "3+ years of UI/UX design experience",
        "Proficiency in design tools (Figma, Adobe XD)",
        "Strong portfolio demonstrating design skills",
        "Understanding of user research and testing",
        "Experience with responsive design",
      ],
      benefits: [
        "Competitive salary",
        "Creative work environment",
        "Design tools and software provided",
        "Mentorship opportunities",
        "Collaborative team",
      ],
    },
  ];
}

document.addEventListener('DOMContentLoaded', displayJobDetails);

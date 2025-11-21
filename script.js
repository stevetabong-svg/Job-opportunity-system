const jobs = [
  { title: "Frontend Developer", company: "TechCorp", location: "Remote" },
  { title: "Backend Developer", company: "SoftPlus", location: "Kenya" },
  { title: "UI/UX Designer", company: "CreativeHub", location: "USA" }
];

const container = document.getElementById('jobs');

jobs.forEach(job => {
  const div = document.createElement('div');
  div.className = 'job';
  div.innerHTML = `<h3>${job.title}</h3>
                   <p><strong>Company:</strong> ${job.company}</p>
                   <p><strong>Location:</strong> ${job.location}</p>`;
  container.appendChild(div);
});
// Example function to filter job listings based on keyword
function filterJobs(keyword) {
    const filteredJobs = jobs.filter(job => 
        job.title.toLowerCase().includes(keyword.toLowerCase()) ||
        job.company.toLowerCase().includes(keyword.toLowerCase()) ||
        job.description.toLowerCase().includes(keyword.toLowerCase())
    );
    displayJobs(filteredJobs);
}

// Assuming there's an input field for search
document.getElementById("searchInput").addEventListener("input", (event) => {
    const keyword = event.target.value;
    filterJobs(keyword);
});

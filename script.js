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

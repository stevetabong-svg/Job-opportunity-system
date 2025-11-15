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
}

const jobs = [
  { tittle: "Frontend developer", company:"TechCorp",loction:"Remote",salary:"1500 USD"),
   {tittle:"Backend Developer",company:,"Cloudworks",
   location:"Buea",salary:"1700 USD"),
   {tittle:"Cybersecurity Analyst",company:"secureNet",
   location:"Remote", salary:"1800 USD"},
  {tittle:"IT support Technician", company:"HelpDesk Ltd",
   location:"Douala",salary:"900 USD"},
  {tittle:"UI/UX Desiggner",company:"Pixelflow",location:"On-site",salary:"1000 USD"},
  {tittle:"Network Engineer",company:"ConnectHub",loction:"Buea",salary:"1200 USD"}
  ];

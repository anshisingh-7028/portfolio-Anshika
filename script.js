document.getElementById("downloadResume").addEventListener("click", function (e) {
  e.preventDefault();

  const resumeUrl = "anshika resume.pdf";

  const link = document.createElement("a");
  link.href = resumeUrl;
  link.download = "anshika resume.pdf"
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

/* ============ CONTACT FORM LOGIC ============ */

const contactForm = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");

if (contactForm && statusText) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // ❌ Empty field check
    if (!name || !email || !message) {
      showStatus("Please fill all the fields ❌", "error");
      return;
    }

    // ❌ Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      showStatus("Please enter a valid email ❌", "error");
      return;
    }

    // ✅ Success
    showStatus("Message sent successfully ✅", "success");

    contactForm.reset();
  });
}

/* ============ STATUS MESSAGE FUNCTION ============ */

function showStatus(message, type) {
  statusText.textContent = message;
  statusText.style.marginTop = "15px";
  statusText.style.fontWeight = "500";

  if (type === "success") {
    statusText.style.color = "#00ff99";
  } else {
    statusText.style.color = "#ff4d4d";
  }

  setTimeout(() => {
    statusText.textContent = "";
  }, 4000);
}

/* ================= PROJECT SECTION ================= */

const projects = [
 
  {
    title: "Resume Based AI Interview",
    description: "A smart AI-powered interview platform that generates personalized interview questions based on a candidate’s resume. This project leverages modern AI techniques to simulate real interview experiences and help users prepare effectively.",
    liveLink: "https://ai-interview-agent-70em.onrender.com/",
    githubLink: "https://github.com/anshisingh-7028/AI-Interview-Agent"
  } ,
  {
    title: "StayEasy",
    description: "StayEasy is a property booking web app built using the MERN stack (MongoDB, Express, React, Node). Users can easily book villas, farmhouses, pool houses, rooms, flats, PGs, cabins, and shops.It also allows owners to add and manage their own listings, making it a simple and user-friendly rental platform.",
    liveLink: "https://stayeasy-d17y.onrender.com",
    githubLink: "https://github.com/anshisingh-7028/StayEasy"
  },
 
   {
    title: "Foodies Website",
    description: "Foodie Lab is a responsive food website built using HTML, CSS, and JavaScript. It showcases different food items with an attractive design and smooth user experience.The project focuses on clean UI, responsive layout, and basic interactivity, making it easy for users to explore menus and food options.",
    liveLink: "https://anshisingh-7028.github.io/Flavour-Lab-project/",
    githubLink: "https://github.com/anshisingh-7028/Flavour-Lab-project"
  },

];

const projectGrid = document.getElementById("projectGrid");

if (projectGrid) {
  projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-btns">
        <a href="${project.liveLink}" target="_blank">Live</a>
        <a href="${project.githubLink}" target="_blank">GitHub</a>
      </div>
    `;

    projectGrid.appendChild(card);
  });
}
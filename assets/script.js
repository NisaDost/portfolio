// Projects data - English and Turkish versions
const projectsData = {
  en: [
    {
      title: "Project Name 1",
      description:
        "A brief description of your project. Explain what it does, what technologies you used, and what problems it solves.",
      image: "project1.jpg",
      link: "https://github.com/nisadost/project1",
      linkText: "View on GitHub",
    },
    {
      title: "Project Name 2",
      description:
        "Another project description. Highlight the key features and technologies used in this project.",
      image: "project2.jpg",
      link: "https://github.com/nisadost/project2",
      linkText: "View on GitHub",
    },
    {
      title: "Project Name 3",
      description:
        "Describe your third project here. What makes it unique? What did you learn while building it?",
      image: "project3.jpg",
      link: "https://github.com/nisadost/project3",
      linkText: "View on GitHub",
    },
    {
      title: "Project Name 4",
      description:
        "Your fourth project description. Include any notable achievements or challenges you overcame.",
      image: "project4.jpg",
      link: "https://github.com/nisadost/project4",
      linkText: "View on GitHub",
    },
    {
      title: "Project Name 5",
      description:
        "Fifth project description. Talk about the impact or use cases of this project.",
      image: "project5.jpg",
      link: "https://github.com/nisadost/project5",
      linkText: "View on GitHub",
    },
    {
      title: "Project Name 6",
      description:
        "Last project description. Share what you're most proud of in this project.",
      image: "project6.jpg",
      link: "https://github.com/nisadost/project6",
      linkText: "View on GitHub",
    },
  ],
  tr: [
    {
      title: "Proje Adı 1",
      description:
        "Projeniz hakkında kısa bir açıklama. Ne yaptığını, hangi teknolojileri kullandığınızı ve hangi sorunları çözdüğünü açıklayın.",
      image: "project1.jpg",
      link: "https://github.com/nisadost/project1",
      linkText: "GitHub'da Görüntüle",
    },
    {
      title: "Proje Adı 2",
      description:
        "Başka bir proje açıklaması. Bu projede kullanılan temel özellikleri ve teknolojileri vurgulayın.",
      image: "project2.jpg",
      link: "https://github.com/nisadost/project2",
      linkText: "GitHub'da Görüntüle",
    },
    {
      title: "Proje Adı 3",
      description:
        "Üçüncü projenizi burada açıklayın. Onu benzersiz kılan nedir? Onu oluştururken ne öğrendiniz?",
      image: "project3.jpg",
      link: "https://github.com/nisadost/project3",
      linkText: "GitHub'da Görüntüle",
    },
    {
      title: "Proje Adı 4",
      description:
        "Dördüncü proje açıklamanız. Kayda değer başarıları veya üstesinden geldiğiniz zorlukları ekleyin.",
      image: "project4.jpg",
      link: "https://github.com/nisadost/project4",
      linkText: "GitHub'da Görüntüle",
    },
    {
      title: "Proje Adı 5",
      description:
        "Beşinci proje açıklaması. Bu projenin etkisi veya kullanım senaryoları hakkında konuşun.",
      image: "project5.jpg",
      link: "https://github.com/nisadost/project5",
      linkText: "GitHub'da Görüntüle",
    },
    {
      title: "Proje Adı 6",
      description:
        "Son proje açıklaması. Bu projede en çok neyle gurur duyduğunuzu paylaşın.",
      image: "project6.jpg",
      link: "https://github.com/nisadost/project6",
      linkText: "GitHub'da Görüntüle",
    },
  ],
};

// Current language (default: English)
let currentLang = "en";

// Function to create project cards
function createProjectCard(project) {
  return `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <a href="${project.link}" target="_blank" class="project-link">
                    ${project.linkText}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>
            </div>
        </div>
    `;
}

// Function to load projects
function loadProjects(lang) {
  const projectsContainer = document.getElementById("projectsContainer");
  const projects = projectsData[lang];
  const projectsHTML = projects.map(createProjectCard).join("");
  projectsContainer.innerHTML = projectsHTML;
}

// Function to update page language
function updateLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Update all elements with data-lang attributes
  document.querySelectorAll("[data-en]").forEach((element) => {
    const text = element.getAttribute(`data-${lang}`);
    if (text) {
      element.innerHTML = text;
    }
  });

  // Update language toggle buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    }
  });

  // Reload projects with new language
  loadProjects(lang);

  // Save preference to localStorage
  localStorage.setItem("preferredLanguage", lang);
}

// Load projects on page load
document.addEventListener("DOMContentLoaded", () => {
  // Check for saved language preference
  const savedLang = localStorage.getItem("preferredLanguage") || "en";
  updateLanguage(savedLang);

  // Language toggle event listeners
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      updateLanguage(lang);
    });
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
  } else {
    header.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
  }

  lastScroll = currentScroll;
});

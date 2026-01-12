// Projects data - English and Turkish versions
const projectsData = {
  en: [
    {
      title: "EduPilot",
      description:
        "EduPilot aims to improve student performance and engagement by addressing educational inefficiencies through gamification, learning analytics, image processing, and effective time management strategies.",
      image: "assets/img/edupilot.png",
      link: "https://github.com/NisaDost/EduPilot",
      linkText: "View on GitHub",
    },
    {
      title: "DashUp E-Commerce",
      description:
        "A demo e-commerce website  for the online shoe retail market, allowing users to easily browse, compare, and purchase footwear through a user-friendly platform.",
      image: "assets/img/dashup.png",
      link: "https://github.com/NisaDost/E-Commerce",
      linkText: "View on GitHub",
    },
    {
      title: "FileIntegrity",
      description:
        "This project aims to design and implement a full-stack File Integrity Monitoring System that enhances visibility into critical file system operations by securely monitoring and reporting file changes across multiple platforms.",
      image: "assets/img/fileintegrity.png",
      link: "https://github.com/NisaDost/staj-agent",
      linkText: "View on GitHub",
    },
    {
      title: "Face Recognition and Attendance System",
      description:
        "This project aims to automate attendance tracking by using facial recognition to accurately identify individuals and record attendance in real time.",
      image: "assets/img/face-rec-en.png",
      link: "https://github.com/NisaDost/Face-Recognition-Attendance-System",
      linkText: "View on GitHub",
    },
    {
      title: "Turkish Vacuum Devices Corporate Website",
      description:
        "This corporate website represents 'Turkish Vacuum Devices and Technologies' and aims to showcase the company’s services, technological capabilities, and industry expertise, while strengthening brand awareness and providing a professional digital identity.",
      image: "assets/img/turkishvacuum.png",
      link: "https://github.com/NisaDost/Turkish-Vacuum",
      linkText: "View on GitHub",
    },
    {
      title: "Pinpoint Application",
      description:
        "A web application that enables users to search for nearby places using the Google Maps API, display results on an interactive map, and save selected locations as favorites within a specified radius.",
      image: "assets/img/pinpoint.png",
      link: "https://github.com/NisaDost/Codexist-Pinpoint-Frontend",
      linkText: "View on GitHub",
    },
  ],
  tr: [
    {
      title: "EduPilot",
      description:
        "EduPilot’in amacı, oyunlaştırma, öğrenme analitiği, görüntü işleme ve zaman yönetimi yaklaşımlarıyla eğitimdeki verimsizlikleri gidererek öğrenci performansını ve katılımını artırmaktır.",
      image: "assets/img/edupilot.png",
      link: "https://github.com/NisaDost/EduPilot",
      linkText: "GitHub'da Görüntüle",
    },
    {
      title: "DasUp E-Ticaret",
      description:
        "Kullanıcıların ayakkabıları kullanıcı dostu bir platform üzerinden kolayca inceleyebildiği, karşılaştırabildiği ve satın alabildiği çevrim içi ayakkabı perakende pazarına yönelik bir demo e-ticaret web sitesidir.",
      image: "assets/img/dashup.png",
      link: "https://github.com/NisaDost/E-Commerce",
      linkText: "GitHub'da Görüntüle",
    },
    {
      title: "FileIntegrity",
      description:
        "Bu projenin amacı, farklı platformlarda gerçekleşen kritik dosya sistemi değişikliklerini güvenli bir şekilde izleyerek raporlayan ve dosya bütünlüğü görünürlüğünü artıran tam kapsamlı bir File Integrity Monitoring sistemi geliştirmektir.",
      image: "assets/img/fileintegrity.png",
      link: "https://github.com/NisaDost/staj-agent",
      linkText: "GitHub'da Görüntüle",
    },
    {
      title: "Yüz Tanıma ve Yoklama Sistemi",
      description:
        "Bu projenin amacı, yüz tanıma teknolojisi kullanarak bireyleri doğru şekilde tespit eden ve yoklama süreçlerini gerçek zamanlı olarak otomatikleştiren bir sistem geliştirmektir.",
      image: "assets/img/face-rec-tr.png",
      link: "https://github.com/NisaDost/Face-Recognition-Attendance-System",
      linkText: "GitHub'da Görüntüle",
    },
    {
      title: "Turkish Vakum Cihazları Kurumsal Web Sitesi",
      description:
        "'Turkish Vakum Cihazları ve Teknolojisi' firmasını temsil eden bu kurumsal web sitesi; şirketin hizmetlerini, teknolojik yetkinliklerini ve sektörel uzmanlığını tanıtmayı, marka bilinirliğini artırmayı ve dijital kimlik sunmayı amaçlamaktadır.",
      image: "assets/img/turkishvacuum.png",
      link: "https://github.com/NisaDost/Turkish-Vacuum",
      linkText: "GitHub'da Görüntüle",
    },
    {
      title: "Pinpoint Uygulaması",
      description:
        "Google Maps API kullanılarak geliştirilen web uygulaması, kullanıcıların belirlenen bir yarıçap içerisinde çeşitli mekânları aramasına, sonuçları etkileşimli bir harita üzerinde görüntülemesine ve seçilen konumları favorilerine kaydetmesine olanak tanır.",
      image: "assets/img/pinpoint.png",
      link: "https://github.com/NisaDost/Codexist-Pinpoint-Frontend",
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

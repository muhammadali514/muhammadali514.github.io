const symbols = ["△", "○", "✕", "▢"];
const colors = ["#ff3366", "#33ccff", "#ffcc00", "#9933ff"];

function createFloatingSymbols(count = 20) {
    const container = document.getElementById('floating-symbols');
    
    for(let i = 0; i < count; i++) {
        const symbol = document.createElement('div');
        symbol.className = 'retro-symbol';
        symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        
        symbol.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            color: ${colors[Math.floor(Math.random() * colors.length)]};
            animation-delay: ${-Math.random() * 3}s;
            font-size: ${0.5 + Math.random() * 2}rem;
        `;
        
        container.appendChild(symbol);
    }
}

function initSpaceship() {
    const spaceship = document.getElementById('spaceship');
    
    document.addEventListener('mousemove', (e) => {
        spaceship.style.left = `${e.clientX}px`;
        spaceship.style.top = `${e.clientY}px`;
    });
}

window.addEventListener('load', () => {
    createFloatingSymbols();
    initSpaceship();
});

function createDottedBackground() {
    const container = document.querySelector('.neon-grid');
    const dotCount = Math.floor(window.innerWidth / 10) * Math.floor(window.innerHeight / 10);
    
    for(let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');
        dot.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(51, 204, 255, ${Math.random() * 0.5});
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        container.appendChild(dot);
    }
}

function createMatrixEffect() {
    const symbols = ["0", "1", "✕", "▢", "◆", "●"];
    const container = document.createElement('div');
    container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;

    for(let i = 0; i < 50; i++) {
        const column = document.createElement('div');
        column.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            animation: matrix-fall ${10 + Math.random() * 20}s linear infinite;
            animation-delay: ${-Math.random() * 10}s;
        `;

        for(let j = 0; j < 30; j++) {
            const char = document.createElement('div');
            char.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            char.style.cssText = `
                color: rgba(51, 204, 255, ${0.2 + Math.random() * 0.5});
                font-size: ${0.5 + Math.random() * 1}rem;
                margin: 2px 0;
                opacity: ${0.3 + Math.random() * 0.7};
            `;
            column.appendChild(char);
        }
        
        container.appendChild(column);
    }
    document.body.appendChild(container);
}

// Update window load event listener
window.addEventListener('load', () => {
    createFloatingSymbols();
    initSpaceship();
    createDottedBackground();
    createMatrixEffect();
});

// ==================== //
//   HEADER INTERACTION  //
// ==================== //
function initHeaderEffects() {
    const navItems = document.querySelectorAll('.nav-list li');
    
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const color = item.dataset.color;
            item.style.textShadow = `0 0 15px ${color}`;
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.textShadow = 'none';
        });
    });
}

// Update window load event listener
window.addEventListener('load', () => {
    createFloatingSymbols();
    initSpaceship();
    createDottedBackground();
    createMatrixEffect();
    initHeaderEffects(); // Add this line
});

// ==================== //
//   HEADER ENDS        //
// ==================== //

// ==================== //
//   Hero Section TYPEWRITER EFFECT   //
// ==================== //
function initTypewriter() {
    const elements = document.querySelectorAll('.typewriter');
    
    elements.forEach(element => {
        const text = element.dataset.text;
        element.style.width = '0';
        element.style.borderRight = '2px solid #fff';
        
        setTimeout(() => {
            element.style.width = '100%';
            element.textContent = text;
        }, 100);
    });
}

// Update window load event listener
window.addEventListener('load', () => {
    createFloatingSymbols();
    initSpaceship();
    createDottedBackground();
    createMatrixEffect();
    initHeaderEffects();
    initTypewriter(); // Add this line
});

// ==================== //
//  TYPEWRITER EFFECT    //
// ==================== //
// function initAboutAnimation() {
// // Corrected text content
//     const fullText = `Unity Game Developer with over 6 years of professional experience designing, developing, and deploying 2D and 3D games for mobile and PC platforms. Proven ability to lead full project lifecycles from concept to launch, delivering 10+ titles with over 200K combined downloads. Expertise in C#, object-oriented architecture, performance optimization (reducing load times by 40%, boosting FPS by 30%), and cross-platform build management. Skilled in UI/UX design, VFX integration, and multiplayer systems using Photon PUN. Strong communicator adept at Agile methodologies, code reviews, and remote collaboration.`;
//     const aboutSection = document.getElementById('about');
//     const textElement = document.querySelector('.typewriter-text');
//     const cursor = document.querySelector('.type-cursor');
//     let animationDone = false;

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting && !animationDone) {
//                 cursor.style.opacity = '1';
//                 textElement.style.opacity = '1';
                
//                 let index = 0;
//                 textElement.textContent = '';
                
//                 function typeWriter() {
//                     if (index < fullText.length) {
//                         textElement.textContent += fullText.charAt(index);
//                         index++;
//                         setTimeout(typeWriter, -5000); // Adjust typing speed
//                     } else {
//                         cursor.style.opacity = '0';
//                     }
//                 }
                
//                 typeWriter();
//                 animationDone = true;
//             }
//         });
//     }, { threshold: 0.5 });

//     observer.observe(aboutSection);
// }
function initAboutAnimation() {
    const fullText = `Unity Game Developer with over 6 years of professional experience designing, developing, and deploying 2D and 3D games for mobile and PC platforms. Proven ability to lead full project lifecycles from concept to launch, delivering 10+ titles with over 200K combined downloads. Expertise in C#, object-oriented architecture, performance optimization (reducing load times by 40%, boosting FPS by 30%), and cross-platform build management. Skilled in UI/UX design, VFX integration, and multiplayer systems using Photon PUN. Strong communicator adept at Agile methodologies, code reviews, and remote collaboration.`;

    const aboutSection = document.getElementById('about');
    const textElement   = document.querySelector('.typewriter-text');
    const cursor        = document.querySelector('.type-cursor');
    let animationDone   = false;
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animationDone) {
          cursor.style.opacity = '1';
          textElement.style.opacity = '1';
          let index = 0;
          const chunkSize = 5;    // ← number of chars per iteration
          const delay     = 1;    // still 1 ms, will be clamped ~4 ms
  
          function typeWriter() {
            if (index < fullText.length) {
              const nextIndex = Math.min(index + chunkSize, fullText.length);
              textElement.textContent += fullText.slice(index, nextIndex);
              index = nextIndex;
              setTimeout(typeWriter, delay);
            } else {
              cursor.style.opacity = '0';
            }
          }
  
          typeWriter();
          animationDone = true;
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(aboutSection);
  }
  
// ==================== //
// PORTFOLIO INTERACTION //
// ==================== //
// Project Data - Add your projects here
const projects = [
    {
        id: 1,
        title: "Bakery Crush",
        subtitle: "Match 3",
        image: "assets/bakerycrush.jpg",
        video: "assets/project1-demo.mp4",
        features: [
            "Developed & Designed game",
            "Game Updates & Level design",
            "Monetization, Mediation & Analytics",
            "Visual effects & story making",
            "Marketing & design"
        ],
        // download: "https://play.google.com/store/apps/details?id=com.levantestudios.bakerycrush&hl=en",
        // trailer: "#"
    },
    // Add more projects below
    {
        id: 2,
        title: "SNIPER GAME",
        subtitle: "Game Development & Design",
        image: "assets/sniper game.png",
        video: "assets/Guns.mp4",
        features: [
            "Sniper Controls",
            "Level Design",
            "Cross-platform deployment",
            "Object pooling, Weapon system",
            "Analysis, testing and monetization policies"
        ],
    },

    {
        id: 3,
        title: "BRICK BREAKER",
        subtitle: "Game Design & Development",
        image: "assets/brickbreaker.png",
        video: "assets/Brickbreaker.mp4",
        features: [
            "Gameplay mechanics",
            "User interace design and development",
            "Visual effects, game mechanics",
            "Save system (saving the game progress and bricks management)",
            "object pooling, optimization",
            "Cross-platform deployment",
            "Analysis, testing and monetization policies",
            "All screen optimization"
        ],
    },

    {
        id: 4,
        title: "FOOTBALL BATTLE 2D",
        subtitle: "Game Design & Development",
        image: "assets/firefootball.png",
        video: "assets/Footballbattlenew(1).mp4",
        features: [
            "Gameplay mechanics",
            "User interace design and development",
            "Visual effects, game mechanics",
            "Complex ai design",
            "object pooling, optimization",
            "Cross-platform deployment, HTML, Mobile Devices",
            "Analysis, testing and monetization policies",
            "All screen optimization"
        ],
    },

    {
        id: 4,
        title: "ZOMBIE HUNT",
        subtitle: "Game Design & Development",
        image: "assets/zombiehunt.png",
        video: "assets/zombiehunt.png",
        features: [
            "Gameplay mechanics",
            "User interace design and development",
            "Visual effects, game mechanics",
            "Complex ai design",
            "object pooling, optimization",
            "Cross-platform deployment, HTML, Mobile Devices",
            "Analysis, testing and monetization policies",
            "All screen optimization"
        ],
    },
    
];

// Generate Project Cards
function generateProjectCards() {
    const grid = document.getElementById('portfolioGrid');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="card-preview" data-project="${project.id}">
                <img src="${project.image}" alt="${project.title}">
                <div class="card-overlay">
                    <h3>${project.title}</h3>
                    <p class="card-subtitle">${project.subtitle}</p>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Initialize Modal
function initProjectModal() {
    const modal = document.querySelector('.project-modal');
    const closeBtn = document.querySelector('.close-modal');
    
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.project-card');
        if(card) {
            const projectId = card.querySelector('.card-preview').dataset.project;
            const project = projects.find(p => p.id == projectId);
            showProjectModal(project);
        }
    });

    closeBtn.addEventListener('click', () => closeModal());
    modal.addEventListener('click', (e) => {
        if(e.target === modal) closeModal();
    });
}

function showProjectModal(project) {
    const modal = document.querySelector('.project-modal');
    const title = modal.querySelector('.modal-title');
    const content = modal.querySelector('.detail-content');
    const video = modal.querySelector('.project-video source');
    
    // Set Content
    title.textContent = project.title;
    video.src = project.video;
    
    // Set Features
    content.innerHTML = `
        <h4>${project.subtitle}</h4>
        <ul class="project-features">
            ${project.features.map(f => `<li>✔️ ${f}</li>`).join('')}
        </ul>
    `;

    // Load new video source
    modal.querySelector('.project-video').load();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.querySelector('.project-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
    document.querySelector('.project-video').pause();
}

// ==================== //
// SKILL SECTION //
// ==================== //
// Initialize Skill Hover Effects
function initSkills() {
    document.querySelectorAll('.skill-item').forEach(item => {
        const level = item.dataset.level;
        const dots = item.querySelector('.proficiency-dots');
        dots.innerHTML = '●'.repeat(level) + '○'.repeat(5 - level);
    });
}

// Add to your existing JS
function initPlatforms() {
    // Add click handlers if needed
    document.querySelectorAll('.platform-card').forEach(card => {
        card.addEventListener('click', () => {
            // Add platform-specific interaction
        });
    });
}



// Update window load event
window.addEventListener('load', () => {
    // ... previous initializations
    initPlatforms();
});

//Resume Modal
// Update resume modal handling
// function initResumeModal() {
//     const resumeBtn = document.querySelector('.resume-orb');
//     const resumeModal = document.querySelector('.resume-modal');
//     const closeBtn = resumeModal.querySelector('.close-modal');

//     resumeBtn.addEventListener('click', () => {
//         resumeModal.style.display = 'block';
//         document.body.style.overflow = 'hidden';
//         startTerminalAnimation();
//     });

//     closeBtn.addEventListener('click', closeResumeModal);
//     window.addEventListener('click', (e) => {
//         if(e.target === resumeModal) closeResumeModal();
//     });

//     function startTerminalAnimation() {
//         const elements = document.querySelectorAll('.terminal-text, .experience-item');
//         elements.forEach((el, index) => {
//             el.style.opacity = '0';
//             setTimeout(() => {
//                 el.style.opacity = '1';
//                 el.style.animation = `typeIn 0.5s ${index * 0.2}s forwards`;
//             }, 100);
//         });
//     }

//     function closeResumeModal() {
//         resumeModal.style.display = 'none';
//         document.body.style.overflow = 'auto';
//     }
// }
// Resume Modal Handling
// document.querySelector('.resume-orb').addEventListener('click', () => {
//     document.querySelector('.resume-modal').style.display = 'block';
//     document.body.style.overflow = 'hidden';
// });

// document.querySelector('.close-modal').addEventListener('click', () => {
//     document.querySelector('.resume-modal').style.display = 'none';
//     document.body.style.overflow = 'auto';
// });

// window.addEventListener('click', (e) => {
//     if(e.target === document.querySelector('.resume-modal')) {
//         document.querySelector('.resume-modal').style.display = 'none';
//         document.body.style.overflow = 'auto';
//     }
// });
// document.querySelector('.resume-orb').addEventListener('click', () => {
//     const modal = document.querySelector('.resume-modal');
//     modal.style.display = 'block';
//     document.body.style.overflow = 'hidden';
// });

// document.querySelector('.close-modal').addEventListener('click', closeModal);

// document.querySelector('.modal-backdrop').addEventListener('click', closeModal);

// function closeModal() {
//     document.querySelector('.resume-modal').style.display = 'none';
//     document.body.style.overflow = 'auto';
// }

document.addEventListener('DOMContentLoaded', () => {
    // Get references to elements
    const resumeButton = document.querySelector('.resume-orb');
    const modal = document.querySelector('.resume-modal');
    const closeButton = modal.querySelector('.close-modal');
    const backdrop = modal.querySelector('.modal-backdrop');

    // Show modal
    resumeButton.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    // Close modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Event listeners
    closeButton.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);
    
    // Close when clicking outside modal content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});

// Add this to your JavaScript
const bgMusic = document.getElementById('bgMusic');
const muteBtn = document.getElementById('muteBtn');

// Set initial volume (0.2 = 20% volume)
bgMusic.volume = 0.2;

// Try to autoplay music after user interaction
document.body.addEventListener('click', initAudio, { once: true });

function initAudio() {
    bgMusic.play().catch(error => {
        console.log('Audio playback failed:', error);
    });
}

// Mute toggle
muteBtn.addEventListener('click', () => {
    bgMusic.muted = !bgMusic.muted;
    muteBtn.innerHTML = bgMusic.muted ? 
        '<i class="fas fa-volume-mute"></i>' : 
        '<i class="fas fa-volume-up"></i>';
    
    // Add animation
    muteBtn.style.animation = 'pulse 0.5s';
    setTimeout(() => {
        muteBtn.style.animation = '';
    }, 500);
});



// Update window load event listener
window.addEventListener('load', () => {
    createFloatingSymbols();
    initSpaceship();
    createDottedBackground();
    createMatrixEffect();
    initHeaderEffects();
    initTypewriter();
    initAboutAnimation(); 
    generateProjectCards();
    initProjectModal();
    initSkills();
    initPlatforms();
    initResumeModal();
});
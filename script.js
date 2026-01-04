// Portfolio Data
const portfolioData = {
    name: "Ask Lisa",
    title: "IT Enthusiast",
    email: "lillihook@gmail.com",
    linkedin: "https://www.linkedin.com/in/ask-lisa-494362170/",
    //github: "https://github.com/mygithub",
    resume: "assets/resume.pdf",
    

    // Themes du terminal
    themes: {
        "default": {
            name: "Default",
            description: "Classic terminal green",
            colors: {
                primary: "#00ffb3",
                secondary: "#00fff7",
                background: "rgba(30, 32, 40, 0.7)",
                text: "#fff",
                accent: "#00ffb3"
            },
            effects: {
                glow: "0 0 10px rgba(0, 255, 179, 0.5)",
                shadow: "0 2px 8px rgba(0, 255, 179, 0.3)"
            },
            wallpaper: "assets/wallpaper.jpg"
        },
        "cyberpunk": {
            name: "Cyberpunk",
            description: "Tron-like style",
            colors: {
                primary: "#ff00ff",
                secondary: "#00ffff",
                background: "rgba(10, 10, 30, 0.8)",
                text: "#ffffff",
                accent: "#ff00ff"
            },
            effects: {
                glow: "0 0 20px rgba(255, 0, 255, 0.7)",
                shadow: "0 4px 15px rgba(255, 0, 255, 0.5)"
            },
            wallpaper: "assets/wallpaper-cyberpunk.jpg"
        },
        "ocean": {
            name: "Ocean",
            description: "Deep blue sea",
            colors: {
                primary: "#00bfff",
                secondary: "#0080ff",
                background: "rgba(0, 20, 40, 0.8)",
                text: "#ffffff",
                accent: "#00bfff"
            },
            effects: {
                glow: "0 0 12px rgba(0, 191, 255, 0.6)",
                shadow: "0 2px 10px rgba(0, 191, 255, 0.4)"
            },
            wallpaper: "assets/wallpaper-ocean.jpg"
        },
        "pink": {
            name: "Pink",
            description: "Soft pink colors",
            colors: {
                primary: "#F58C7F", //#F58C7F
                secondary: "#fcc8cfff",
                background: "rgba(54, 25, 39, 0.8)",
                text: "#ffffff", // #842F3A
                accent: "#ffb8adff"
            },
            effects: {
                glow: "0 0 12px rgba(134, 59, 80, 0.6)",
                shadow: "0 2px 10px rgba(134, 59, 80, 0.4)"
            },
            wallpaper: "assets/wallpaper-pinkmountain.jpg"
        },
        "fallout": {
            name: "Fallout",
            description: "Green Pip-boy/Matrix style",
            colors: {
                primary: "#00ff00",
                secondary: "#00cc00",
                background: "rgba(0, 20, 0, 0.9)",
                text: "#00ff00",
                accent: "#00cc00"
            },
            effects: {
                glow: "0 0 25px rgba(0, 255, 0, 0.8)",
                shadow: "0 3px 12px rgba(0, 255, 0, 0.6)"
            },
            wallpaper: "assets/wallpaper-pipboy.jpg"
        },
        "retro": {
            name: "Retro",
            description: "Old-school style",
            colors: {
                primary: "#ffb300",
                secondary: "#ff8c00",
                background: "rgba(20, 20, 20, 0.8)",
                text: "#ffb300",
                accent: "#ff8c00"
            },
            effects: {
                glow: "0 0 15px rgba(255, 179, 0, 0.6)",
                shadow: "0 2px 10px rgba(255, 179, 0, 0.4)"
            },
            wallpaper: "assets/wallpaper-retro.jpg"
        },
        "parks": {
            name: "Parks & Recreation",
            description: "Don't you Knope Pawnee ?",
            colors: {
                primary: "#fff400", // #016300 #f3d502
                secondary: "#2fbf03", // 
                background: "rgba(19, 75, 3, 0.8)", // 2, 39, 1
                text: "#ffffff", 
                accent: "#00d0ee"
            },
            effects: {
                glow: "0 0 12px rgba(53, 98, 48, 0.6)",
                shadow: "0 2px 10px rgba(53, 98, 48, 0.4)"
            },
            wallpaper: "assets/wallpaper-parks.jpg"
        },
        "stranger": {
            name: "Stranger Things",
            description: "Stranger Things Theme",
            colors: {
                primary: "#f9de8a", 
                secondary: "#3ec7f0", // #b02274
                background: "rgba(34, 5, 65, 0.8)",
                text: "#f9de8a",
                accent: "#eb2d32"
            },
            effects: {
                glow: "0 0 12px rgba(163, 143, 83, 0.6)",
                shadow: "0 2px 10px rgba(249, 222, 138, 0.4)"
            },
            wallpaper: "assets/wallpaper-strangerthings.jpg"
        },
        "the": {
            name: "The Upside Down",
            description: "More Stranger Things",
            colors: {
                primary: "#c92e20ff", // #d73222 #a42e4b
                secondary: "#7162bdff", // #3e3668
                background: "rgba(20, 15, 39, 0.8)",
                text: "#ec763e",
                accent: "#be3658ff"
            },
            effects: {
                glow: "0 0 12px rgba(211, 50, 112, 0.8)",
                shadow: "0 2px 10px rgba(211, 50, 112, 0.4)"
            },
            wallpaper: "assets/wallpaper-strangerthings-ud.jpg"
        },
        "comics": {
            name: "Comics",
            description: "Electric comics-like style",
            colors: {
                primary: "#fff400", // #f3d502
                secondary: "#fb4873", // #00d0ee
                background: "rgba(5, 107, 122, 0.8)",  // 4, 132, 151
                text: "#ffffff", 
                accent: "#00d0ee" //#f1933bff
            },
            effects: {
                glow: "0 0 12px rgba(209, 199, 3, 0.8)",
                shadow: "0 2px 10px rgba(209, 199, 3, 0.4)"
            },
            wallpaper: "assets/wallpaper-electric.jpg"
        },
    },
    // Credits to Nihal Shetty
    credits: `Ce portfolio est un fork du projet de Nihal Shetty. <br> 
                <a href="https://github.com/nihalshetty-boop/nihalshetty.me" class="link" target="_blank">Visiter le repository Github du projet initial →</a>`,

    // About me
    about: `IT enthusiast passionnée en quête permanente d'apprentissage. J'apprécie particulièrement la résolution de problèmes techniques. J'aime aussi jardiner, les animaux, jouer de la musique et les jeux vidéos. A ce sujet, je vous laisse, Hyrule m'attends.`,
    
    projects: [
        {
            title: "Cluster Docker Swarm",
            description: "Déploiement de Docker Swarm derrière un cluster HAProxy avec chiffrement de bout en bout.",
            tech: "Ubuntu, Docker Engine, Docker Swarm, Keepalived, Traefik, Crowdsec, HAProxy"
        },
        {
            title: "P2V vers un environnement IaaS",
            description: "P2V d'un serveur applicatif on premise vers un environnement VMware vSphere hébergé dans un datacenter.",
            tech: "Windows Server 2016, Veeam Agent, Veeam Cloud Connect, VMware vSphere",
        },
        {
            title: "Migration RMM",
            description: "Migration de 1500 endpoints répartis sur 30 organisations distinctes depuis une solution RMM vers une autre. Opération transparente pour les utilisateurs. ",
            tech: "Powershell, solutions RMM"
        },
        {
            title: "Migration antivirus",
            description: "Migration de la solution antivirale sur 1500 endpoints/30 organisations au travers de scripts PowerShell et d'une solution RMM. Opération transparente pour les utilisateurs.",
            tech: "Powershell, solution RMM"
        },
        {
            title: "Projet Veeam Cloud Connect",
            description: "Administration d'une infrastructure Veeam Cloud Connect. Déploiement d'un cluster de gateways VCC.",
            tech: "Veeam B&R, Veeam Service Provider Console, Windows Server 2022, SQL Server, Firewalling/Networking",
        },
        {
            title: "Infrastructure Reporting",
            description: "Déploiement et administration d'infrastructures SSRS et Power BI RS. Création de reporting ad-hoc.",
            tech: "SQL Server, Active Directory, SSMS, SSRS, Power BI"
        }

    ],
    
    experience: [
        {
            title: "Référente Technique SI interne",
            company: "Abicom - Groupe OCI",
            date: "Juin 2024 – Aujourd'hui",
            description: "Réception, analyse, mise en oeuvre et suivi de l'évolution des besoins du SI. Administration systèmes et réseaux. Pilote de processus SI (ISO 9001, 27001, HDS). Gestion de projets. Reporting d'exploitation et de pilotages Power BI pour les BU."
        },
        {
            title: "Référente Technique CDS",
            company: "Abicom",
            date: "Janvier 2023 – Mai 2024",
            description: "Formalisation et gestion du support interne N1/N2 au travers de documentations, workflows et process. Rédaction de documentations techniques. Veille technologique et transfert de compétences. POC, déploiement et administration de consoles de gestion centralisées en mode MSP. Création et déploiement de scripts de correctifs, d'applications et de configuration personnalisées sur les parcs informatique clients."
        },
        {
            title: "Team Leader CDS",
            company: "Abicom",
            date: "Juin 2018 – Décembre 2022",
            description: "Affectation et priorisation des tickets en file d'attente. Coordination d'équipe (management de proximité, gestion des plannings). Création de rapports SSRS d'exploitation et de pilotage pour le service."
        },
        {
            title: "Technicienne support",
            company: "Abicom",
            date: "March 2016 - Mai 2017",
            description: "Support utilisateurs et MCO infrastructure. Prise d'appels, analyse et traitement des demandes de service et incidents."
        }
    ],
    
    skills: {
        "Systèmes": ["Windows Server", "Windows 10", "Windows 11", "Debian", "Ubuntu", "Kali", "Unix-like"],
        "M365": ["Exchange", "Teams", "SharePoint", "Intune", "Defender", "Entra/AzureAD", "Power Automate"],
        "Réseaux": ["TCP/IP", "DNS", "DHCP", "vLAN", "Wi-Fi", "VPN SSL", "VPN IPSec"],
        "Sécurité": ["Firewall IDS/IPS", "Antivirus/EDR", "Antispam", "IAM", "Proxies"],
        "Virtualisation": ["VMware vSphere", "Microsoft Hyper-V", "Proxmox VE"],
        "Conteneurisation": ["Docker", "Docker Compose", "Docker Swarm", "Portainer"],
        "Sauvegarde": ["Veeam B&R", "Veeam Agent", "Veeam Cloud Connect", "VSPC", "Ahsay", "PBS", "Backup Exec"],
        "Scripting": ["Powershell", "Batch", "Bash"],
        "Base de données": ["SQL", "MariaDB", "PostgreSQL", "MySQL"],
        "Reporting": ["SSRS", "Power BI RS", "Power BI Online"],
        "Monitoring": ["EVObserve", "Centron", "UptimeKuma", "Beszel"],
        "Soft Skills": ["Communication", "Rigueur", "Travail en équipe", "Autonomie", "Documentation"]

    },

    /*    
    publications: [
        {
            title: "My publication",
            journal: "Journal",
            date: "2023",
            link: "https://monsiteweb.com",
            // pdf: "assets/documentation.pdf" 
        }
    ]
    */
};

// ASCII Art for the name
const asciiArt = `
 █████╗ ███████╗██╗  ██╗    ██╗     ██╗███████╗ █████╗ 
██╔══██╗██╔════╝██║ ██╔╝    ██║     ██║██╔════╝██╔══██╗
███████║███████╗█████╔╝     ██║     ██║███████╗███████║
██╔══██║╚════██║██╔═██╗     ██║     ██║╚════██║██╔══██║
██║  ██║███████║██║  ██╗    ███████╗██║███████║██║  ██║
╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝    ╚══════╝╚═╝╚══════╝╚═╝  ╚═╝                               
                                        
Admin Systèmes & Réseaux / IT Enthusiast


`;

const mobileAsciiArt = `
 █████╗ ███████╗██╗  ██╗    ██╗     ██╗███████╗ █████╗ 
██╔══██╗██╔════╝██║ ██╔╝    ██║     ██║██╔════╝██╔══██╗
███████║███████╗█████╔╝     ██║     ██║███████╗███████║
██╔══██║╚════██║██╔═██╗     ██║     ██║╚════██║██╔══██║
██║  ██║███████║██║  ██╗    ███████╗██║███████║██║  ██║
╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝    ╚══════╝╚═╝╚══════╝╚═╝  ╚═╝                                                                                                     
                                      
Admin Systèmes & Réseaux / IT Enthusiast


`;

// SVG icons
const icons = {
    resume: `<svg class='info-icon' viewBox='0 0 20 20' fill='none'><path d='M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.83a2 2 0 0 0-.59-1.41l-3.83-3.83A2 2 0 0 0 10.17 2H6zm4 1.5V7a1 1 0 0 0 1 1h3.5' stroke='var(--primary-color)' stroke-width='1.2'/></svg>`, //#00ffb3
 // github: `<svg class='info-icon' viewBox='0 0 24 24' fill='none'><path d='M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z' stroke='var(--primary-color)' stroke-width='1.2'/></svg>`, // #00ffff
    linkedin: `<svg class='info-icon' viewBox='0 0 24 24' fill='none'><path d='M6.94 19.5V9.5H3.5v10h3.44zm-1.72-11.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm4.78 11.5h3.44v-5.5c0-1.32.47-2.22 1.65-2.22 1.17 0 1.65.9 1.65 2.22v5.5h3.44v-6.5c0-2.22-1.18-3.25-2.76-3.25-1.28 0-1.85.7-2.17 1.19h.03V9.5h-3.44c.05.66 0 10 0 10z' stroke='var(--primary-color)' stroke-width='1.2'/></svg>`, //#00ffff
    email: `<svg class='info-icon' viewBox='0 0 24 24' fill='none'><path d='M4 4h16v16H4V4zm8 8l8-6H4l8 6zm0 2l-8-6v12h16V8l-8 6z' stroke='var(--primary-color)' stroke-width='1.2'/></svg>`, //#00ffff
};

// Terminal functionality
class Terminal {
    constructor() {
        this.output = document.getElementById('output');
        this.commandInput = document.getElementById('command-input');
        this.loadingScreen = document.getElementById('loading-screen');
        this.terminal = document.getElementById('terminal');
        this.commandHistory = [];
        this.historyIndex = -1;
        this.loadingTimeout = null;
        this.loadingSkipped = false;
        this.userScrolled = false;
        this.lastScrollTop = 0;
        this.particles = [];
        this.tabCompletionIndex = -1;
        this.lastTabCompletionMatches = [];
            
        
        this.commands = {
            help: this.showHelp.bind(this),
            about: this.showAbout.bind(this),
            projects: this.showProjects.bind(this),
            experience: this.showExperience.bind(this),
            skills: this.showSkills.bind(this),
        //    publications: this.showPublications.bind(this),
            clear: this.clear.bind(this),
            contact: this.showContact.bind(this),
            resume: this.openResume.bind(this),
        //    publication: this.openPublication.bind(this),
            theme: this.showThemes.bind(this),
            sudo: this.showSudo.bind(this),
            ls: this.listCommands.bind(this),
            whoami: this.showAbout.bind(this),
            'show-all': this.showAll.bind(this),
        //   gui: this.enterGUIMode.bind(this),
        //    cd: this.changeDirectory.bind(this),
        //    cat: this.displayFile.bind(this),
        //    pwd: this.showCurrentPath.bind(this)
        };
        
        this.init();
        
        const savedTheme = localStorage.getItem('terminal-theme');
        if (savedTheme && portfolioData.themes[savedTheme]) {
            this.applyTheme(savedTheme);
        } else {
            document.body.style.backgroundImage = "url('assets/wallpaper.jpg')";
            const defaultTheme = portfolioData.themes.default;
            this.updateLoadingScreen(defaultTheme);
            this.updateThemeElements(defaultTheme);
        }
    }   
    
    // Particle System
    initParticles() {
        // Delay particle initialization until after loading
        setTimeout(() => {
            this.createParticles();
            setInterval(() => this.createParticle(), 2000); // Reduced frequency
        }, 100);
    }
    
    createParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;
        
        // Reduced initial particles from 15 to 8
        for (let i = 0; i < 8; i++) {
            setTimeout(() => this.createParticle(), i * 100); // Reduced delay from 300ms to 100ms
        }
    }
    
    createParticle() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;
        
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size
        const size = Math.random() * 8 + 4;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random position
        const x = Math.random() * window.innerWidth;
        particle.style.left = x + 'px';
        
        // Random animation duration
        const duration = Math.random() * 4 + 6;
        particle.style.animationDuration = duration + 's';
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, duration * 1000);
    }
    
    init() {
        this.initParticles();
        this.startLoadingAnimation();
        this.setupEventListeners();
        const minimizeBtn = this.loadingScreen.querySelector('.minimize');
        if (minimizeBtn) {
            minimizeBtn.addEventListener('click', () => {
                this.skipLoadingAnimation();
            });
        }
        const closeBtn = this.loadingScreen.querySelector('.close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.loadingScreen.style.display = 'none';
                this.terminal.style.display = 'none';
            });
        }
    }
    
    startLoadingAnimation() {
        const loadingMessages = [
            "Initializing terminal...",
            "Loading system modules...",
            "Establishing connection...",
            "Loading portfolio data...",
            "System ready!"
        ];
        
        let messageIndex = 0;
        const loadingMessage = document.getElementById('loading-message');
        
        // Preload background images for faster theme switching
        this.preloadBackgroundImages();
        
        const updateMessage = () => {
            if (this.loadingSkipped) return; // If skipped, do nothing
            if (messageIndex < loadingMessages.length) {
                loadingMessage.textContent = loadingMessages[messageIndex];
                this.updateLoadingProgress(messageIndex + 1);
                messageIndex++;
                // Reduced delay from 800ms to 300ms
                this.loadingTimeout = setTimeout(updateMessage, 300);
            } else {
                this.updateLoadingProgress(loadingMessages.length);
                // Reduced final delay from 1000ms to 200ms
                this.loadingTimeout = setTimeout(() => {
                    if (this.loadingSkipped) return;
                    this.loadingScreen.style.display = 'none';
                    this.terminal.classList.remove('hidden');
                    this.showWelcome();
                    this.commandInput.focus();
                }, 200);
            }
        };
        
        updateMessage();
    }

    updateLoadingProgress(messageIndex = 0) {
        const progressBar = document.getElementById('loading-progress');
        const percentageText = document.getElementById('loading-percentage');
        if (progressBar && percentageText) {
            const loadingMessages = [
                "Initializing terminal...",
                "Loading system modules...",
                "Establishing connection...",
                "Loading portfolio data...",
                "System ready!"
            ];
            const progress = (messageIndex / loadingMessages.length) * 100;
            progressBar.style.width = progress + '%';
            percentageText.textContent = Math.round(progress) + '%';
        }
    }

    preloadBackgroundImages() {
        const themes = Object.values(portfolioData.themes);
        themes.forEach(theme => {
            if (theme.wallpaper) {
                const img = new Image();
                img.src = theme.wallpaper;
            }
        });
    }

    skipLoadingAnimation() {
        this.loadingSkipped = true;
        if (this.loadingTimeout) clearTimeout(this.loadingTimeout);
        this.loadingScreen.style.display = 'none';
        this.terminal.classList.remove('hidden');
        this.showWelcome();
        this.commandInput.focus();
    }
    
    setupEventListeners() {
        this.commandInput.addEventListener('keydown', (e) => {
            if (this.guiMode) {
                this.handleGUINavigation(e);
                return;
            }
            
            if (e.key === 'Enter') {
                this.processCommand();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.navigateHistory('up');
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.navigateHistory('down');
            } else if (e.key === 'Tab') {
                e.preventDefault();
                this.handleTabCompletion();
            }
        });     

        
        const terminalBody = this.terminal.querySelector('.terminal-body');
        if (terminalBody) {
            terminalBody.addEventListener('scroll', () => {
                const currentScrollTop = terminalBody.scrollTop;
                const scrollHeight = terminalBody.scrollHeight;
                const clientHeight = terminalBody.clientHeight;
                
                if (currentScrollTop < this.lastScrollTop) {
                    this.userScrolled = true;
                    console.log('User scrolled up - auto-scroll disabled');
                }
                
                if (currentScrollTop + clientHeight >= scrollHeight - 10) {
                    this.userScrolled = false;
                    console.log('User at bottom - auto-scroll enabled');
                }
                
                this.lastScrollTop = currentScrollTop;
            });
        }
    }
    
    showWelcome() {
        this.output.innerHTML = '';
        this.output.innerHTML = `
            <div class="terminal-main-flex">
                <div class="ascii-art" id="ascii-art"></div>
                <div class="info-block" id="info-block"></div>
            </div>
        `;

        // Use mobile ASCII art for mobile, regular for desktop
        const isMobile = window.innerWidth <= 900;
        document.getElementById('ascii-art').textContent = isMobile ? mobileAsciiArt : asciiArt;
        
        // Create shorter URLs for mobile
        // const githubUrl = isMobile ? 'github.com/my-github' : 'https://github.com/mygithub';
        const linkedinUrl = isMobile ? 'linkedin.com/in/ask-lisa-494362170/' : 'https://www.linkedin.com/in/ask-lisa-494362170/';
        
        // info bloc on top right
        document.getElementById('info-block').innerHTML = `               
            <a class="info-link" href="${portfolioData.linkedin}" target="_blank">${icons.linkedin} LinkedIn
            <a class="info-link" href="mailto:${portfolioData.email}">${icons.email} Email
        `;

        const currentTheme = localStorage.getItem('terminal-theme') || 'default';
        const theme = portfolioData.themes[currentTheme];
        if (theme) {
            this.updateAsciiArt(currentTheme);
            this.updateInfoBox(theme);
            this.updateThemeElements(theme);
        }

        this.addToOutput(`
            <div class="content-section">
                <div class="section-content">
                    Bienvenue ! Utilisez <span class="help-command">help</span>pour obtenir la liste des commandes disponibles.<br>
                    <span style="color: var(--primary-color);"> Astuce:</span> Utilisez la touche <span class="help-command">Tab</span>pour profiter de l'autocomplétion.
                </div>
            </div>
        `);
    }
    
    processCommand() {
        const command = this.commandInput.value.trim();
        this.commandInput.value = '';
        
        if (command === '') return;
        
        this.commandHistory.push(command);
        this.historyIndex = this.commandHistory.length;
        
        this.userScrolled = false;
        
        this.addToOutput(`<div class="command-history">
            <span class="prompt">visitor@portfolio:~$</span>
            <span class="command">${command}</span>
        </div>`);
        
        const commandLower = command.toLowerCase();
        const parts = command.split(' ');
        const mainCommand = parts[0].toLowerCase();
        const args = parts.slice(1);
       
        // Handle GUI mode commands
        if (this.guiMode) {
            this.processGUIModeCommand(command);
            return;
        }
        
        if (mainCommand === 'theme') {
            if (args.length === 0) {
                this.commands['theme']();
            } else {
                this.applyTheme(args[0].toLowerCase());
            }
        } else if (this.commands[mainCommand]) {
            this.commands[mainCommand]();
        } else {
            this.addToOutput(`<div class="command-history">
                <div class="output">Commande non reconnue: ${mainCommand}. Saisissez <span class="help-command">help</span>pour lister les commandes disponibles.</div>
            </div>`);
        }
    }

    navigateHistory(direction) {
        if (direction === 'up' && this.historyIndex > 0) {
            this.historyIndex--;
            this.commandInput.value = this.commandHistory[this.historyIndex];
        } else if (direction === 'down' && this.historyIndex < this.commandHistory.length - 1) {
            this.historyIndex++;
            this.commandInput.value = this.commandHistory[this.historyIndex];
        } else if (direction === 'down' && this.historyIndex === this.commandHistory.length - 1) {
            this.historyIndex++;
            this.commandInput.value = '';
        }
        
        this.commandInput.setSelectionRange(this.commandInput.value.length, this.commandInput.value.length);
    }

    handleTabCompletion() {
        const currentInput = this.commandInput.value.trim();
        if (!currentInput) return;
        
        // Get all available commands
        const availableCommands = Object.keys(this.commands);
        
        // Find commands that start with the current input
        const matches = availableCommands.filter(cmd => 
            cmd.toLowerCase().startsWith(currentInput.toLowerCase())
        );
        
        if (matches.length === 0) {
            // No matches found
            this.showTabCompletionFeedback('No matches found');
            return;
        }
        
        if (matches.length === 1) {
            // Single match - complete it
            this.commandInput.value = matches[0];
            this.showTabCompletionFeedback(`Completed: ${matches[0]}`);
        } else {
            // Multiple matches - cycle through them
            if (this.lastTabCompletionMatches.length !== matches.length || 
                !this.arraysEqual(this.lastTabCompletionMatches, matches)) {
                // New set of matches, reset index
                this.tabCompletionIndex = 0;
                this.lastTabCompletionMatches = [...matches];
            } else {
                // Same matches, cycle to next
                this.tabCompletionIndex = (this.tabCompletionIndex + 1) % matches.length;
            }
            
            this.commandInput.value = matches[this.tabCompletionIndex];
            this.showTabCompletionFeedback(`Match ${this.tabCompletionIndex + 1}/${matches.length}: ${matches[this.tabCompletionIndex]}`);
        }
        
        // Reset tab completion state when input changes
        this.commandInput.addEventListener('input', () => {
            this.tabCompletionIndex = -1;
            this.lastTabCompletionMatches = [];
        }, { once: true });
    }
    
    arraysEqual(a, b) {
        return a.length === b.length && a.every((val, index) => val === b[index]);
    }
    
    showTabCompletionFeedback(message) {
        // Create a temporary feedback element
        const feedback = document.createElement('div');
        feedback.className = 'tab-completion-feedback';
        feedback.textContent = message;
        feedback.style.cssText = `
            position: absolute;
            top: -25px;
            left: 0;
            background: var(--background-color, rgba(30, 32, 40, 0.9));
            color: var(--primary-color, #00ffb3);
            padding: 2px 6px;
            border-radius: 3px;
            font-size: 12px;
            border: 1px solid var(--primary-color, #00ffb3);
            z-index: 1000;
            pointer-events: none;
        `;
        
        // Position relative to input
        const inputLine = this.commandInput.parentElement;
        inputLine.style.position = 'relative';
        inputLine.appendChild(feedback);
        
        // Remove feedback after a short delay
        setTimeout(() => {
            if (feedback.parentElement) {
                feedback.parentElement.removeChild(feedback);
            }
        }, 1500);
    }
    
    addToOutput(content, shouldScroll = true) {
        this.output.innerHTML += content;
        
        const currentTheme = localStorage.getItem('terminal-theme') || 'default';
        const theme = portfolioData.themes[currentTheme];
        if (theme) {
            this.updateThemeElements(theme);
        }
        
        if (shouldScroll) {
            this.scrollToBottom();
        }
    }
    
    scrollToBottom() {
        const terminalBody = this.terminal.querySelector('.terminal-body');
        if (!terminalBody) return;
        
        if (this.userScrolled) {
            console.log('Auto-scroll blocked - user has scrolled up');
            return;
        }
        
        console.log('Auto-scrolling to bottom');
        const target = terminalBody.scrollHeight - terminalBody.clientHeight;
        const step = 8; 
        
        function animateScroll() {
            const current = terminalBody.scrollTop;
            if (current < target) {
                terminalBody.scrollTop = Math.min(current + step, target);
                requestAnimationFrame(animateScroll);
            }
        }
        animateScroll();
    }
    
    // Command implementations
    showHelp() {
        const helpContent = `
            <div class="command-history">
                <div class="output">
                    <div class="help-section">
                        <span class="help-command">show-all</span>
                        <span class="help-description">- Développer toutes les sections</span>
                    </div>
                    <div class="help-section">
                        <span class="help-command">about</span>
                        <span class="help-description">- En apprendre plus sur moi</span>
                    </div>
                    <div class="help-section">
                        <span class="help-command">projects</span>
                        <span class="help-description">- Mes projets</span>
                    </div>
                    <div class="help-section">
                        <span class="help-command">experience</span>
                        <span class="help-description">- Mes expériences professionnelles</span>
                    </div>
                    <div class="help-section">
                        <span class="help-command">skills</span>
                        <span class="help-description">- Mes compétences</span>
                    </div>
                    <div class="help-section">
                        <span class="help-command">contact</span>
                        <span class="help-description">- Mes informations de contact</span>
                    </div>
                    <div class="help-section">
                        <span class="help-command">resume</span>
                        <span class="help-description">- Télécharger mon CV</span>
                    </div>
                    <div class="help-section">
                        <span class="help-command">theme</span>
                        <span class="help-description">- Changer le thème du terminal</span>
                    </div>
                    <div class="help-section">
                        <span class="help-command">sudo</span>
                        <span class="help-description">- sudo &lt;faites un voeu&gt; </span>
                    </div>
                    <div class="help-section">
                        <span class="help-command">clear</span>
                        <span class="help-description">- Nettoyer le terminal</span>
                    </div>
                    <div class="help-section" style="margin-top: 15px; padding-top: 10px; border-top: 1px solid var(--primary-color, #00ffb3);">
                        <span class="help-command">credits</span>
                        <span class="help-description">- Ce portfolio est un fork du projet de <a href="https://github.com/nihalshetty-boop/" class="link" target="_blank"> Nihal Shetty </span>
                    </div>
                </div>
            </div>
        `;
                 /*
                    <div class="help-section" style="margin-top: 15px; padding-top: 10px; border-top: 1px solid var(--primary-color, #00ffb3);">
                        <span class="help-command">Tab</span>
                        <span class="help-description">- Auto-complétion des commandes (e.g., "proj" + Tab → "projects")</span>
                    </div>
                    <div class="help-section">
                        <span class="help-command">publications</span>
                        <span class="help-description">- Mon site web</span>
                    </div>   
                */
        this.addToOutput(helpContent);
    }

    showAll() {
        this.showAbout();
        this.showProjects();
        this.showExperience();
        this.showSkills();
    //  this.showPublications();
        this.showContact();
        this.showCredits();    
    }
    
    showAbout() {
        const aboutContent = `
            <div class="command-history">
                <div class="output">
                    <div class="content-section">
                        <div class="section-title">A propos de moi</div>
                        <div class="section-content">${portfolioData.about}</div>
                    </div>
                </div>
            </div>
        `;
        this.addToOutput(aboutContent);
    }

    /*  This is a fork of nihalshetty.me repository */
    showCredits() {
        const creditsContent = `
            <div class="command-history">
                <div class="output">
                    <div class="content-section">
                        <div class="section-title">Credits</div>
                        <div class="section-content">${portfolioData.credits}</div>
                    </div>
                </div>
            </div>
        `;
        this.addToOutput(creditsContent);
    }
    
    showProjects() {
        let projectsContent = `
            <div class="command-history">
                <div class="output">
                    <div class="section-title">Projects</div>
                    <div class="projects-grid">
        `;
        
        portfolioData.projects.forEach(project => {
            projectsContent += `
                <div class="project-card">
                    <div class="project-title">${project.title}</div>
                    <div class="project-description">${project.description}</div>
                    <div class="project-tech">Tech: ${project.tech}</div>
                </div>
            `;
                   // <a href="${project.link}" class="link" target="_blank">View Project →</a> -- à ajouter dans le bloc project-card pour ajouter un lien "View Projetc"
        });
        
        projectsContent += `
                    </div>
                </div>
            </div>
        `;
        this.addToOutput(projectsContent);
    }
    
    showExperience() {
        let experienceContent = `
            <div class="command-history">
                <div class="output">
                    <div class="section-title" style="color: var(--accent-color);">Expériences professionnelles</div>
        `;
        
        portfolioData.experience.forEach(exp => {
            experienceContent += `
                <div class="experience-item">
                    <div class="experience-title" style="color: var(--primary-color);">${exp.title}</div>
                    <div class="experience-company" style="color: var(--secondary-color);">${exp.company}</div>
                    <div class="experience-date">${exp.date}</div>
                    <div class="experience-description">${exp.description}</div>
                </div>
            `;
        });
        
        experienceContent += `
                </div>
            </div>
        `;
        this.addToOutput(experienceContent);
    }
    
    showSkills() { 
        let skillsContent = `
            <div class="command-history">
                <div class="output">
                    <div class="section-title" style="color: var(--accent-color);">Compétences</div>
                    <div class="skills-grid">
        `;
        
        Object.entries(portfolioData.skills).forEach(([category, skills]) => {
            skillsContent += `
                <div class="skill-category">
                    <div class="skill-category-title" style="color: var(--primary-color);">${category}</div>
                    <div class="skill-badges">
            `;
            
            skills.forEach(skill => {
                skillsContent += `<span class="skill-badge">${skill}</span>`;
            });
            
            skillsContent += `
                    </div>
                </div>
            `;
        });
        
        skillsContent += `
                    </div>
                </div>
            </div>
        `;
        this.addToOutput(skillsContent);
    }

    showContact() {
        const contactContent = `
            <div class="command-history">
                <div class="output">
                    <div class="content-section">
                        <div class="section-content contact-links">

                            <a href="mailto:${portfolioData.email}" class="contact-link">
                                ${icons.email}
                                Email
                            </a>
                            <br>                               
                            <a href="${portfolioData.linkedin}" 
                            class="contact-link" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            ${icons.linkedin}
                            LinkedIn
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        `;
        this.addToOutput(contactContent);
    }

    openResume() {
        const pdfOverlay = document.getElementById('pdf-viewer-overlay');
        const pdfFrame = document.getElementById('pdf-frame');
        if (pdfOverlay && pdfFrame) {
            pdfFrame.src = 'assets/resume.pdf';
            document.querySelector('.pdf-viewer-title').textContent = 'Mon Curriculum Vitae';
            pdfOverlay.classList.remove('hidden');
        }
        this.addToOutput(`
            <div class="command-history">
                <div class="output">Ouverture du CV dans le lecteur...</div>
            </div>
        `);
    }
 
    showSudo() {
        const sudoContent = `
            <div class="command-history">
                <div class="output">
                    <div class="content-section">
                        <div class="section-content">Oups, vous n'êtes pas admin...</div>
                    </div>
                </div>
            </div>
        `;
        this.addToOutput(sudoContent);

        // Ouverture du lien après 1 seconde
        setTimeout(() => {
        window.open(
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            "_blank"
        );
        }, 1000);
    }
    
    showThemes() {
        let themesContent = `
            <div class="command-history">
                <div class="output">
                    <div class="section-title" style="color: var(--primary-color);">Thèmes disponibles</div>
                    <div class="themes-grid">
        `;
        
        Object.entries(portfolioData.themes).forEach(([key, theme]) => {
            themesContent += `
                <div class="theme-card" data-theme="${key}" style="background: ${theme.colors.background}; border-color: ${theme.colors.primary};">
                    <div class="theme-name" style="color: ${theme.colors.primary};">${theme.name}</div>
                    <div class="theme-description" style="color: ${theme.colors.text};">${theme.description}</div>
                    <button class="theme-apply-btn" onclick="window.terminal.applyTheme('${key}')" style="background: ${theme.colors.primary}; color: ${theme.colors.background};">Apply</button>
                </div>
            `;
        });
        
        themesContent += `
                    </div>
                    <div class="theme-info">
                        <p>Tapez <span class="command-highlight">theme [name]</span> pour appliquer un thème directement.</p>
                        <p>Exemple: <span class="command-highlight">theme cyberpunk</span></p>
                    </div>
                </div>
            </div>
        `;
        this.addToOutput(themesContent);
    }
    
    applyTheme(themeName) {
        const theme = portfolioData.themes[themeName];
        if (!theme) {
            this.addToOutput(`
                <div class="command-history">
                    <div class="output">Theme '${themeName}' introuvable. Tapez 'theme' pour voir la liste des thèmes disponibles.</div>
                </div>
            `);
            return;
        }
        
        const root = document.documentElement;
        root.style.setProperty('--primary-color', theme.colors.primary);
        root.style.setProperty('--secondary-color', theme.colors.secondary);
        root.style.setProperty('--background-color', theme.colors.background);
        root.style.setProperty('--text-color', theme.colors.text);
        root.style.setProperty('--accent-color', theme.colors.accent);
        
        root.style.setProperty('--glow-effect', theme.effects.glow);
        root.style.setProperty('--shadow-effect', theme.effects.shadow);
        
        const wallpaperUrl = theme.wallpaper;
        
        console.log(`Changing wallpaper to: ${wallpaperUrl}`);
        
        const img = new Image();
        img.onload = () => {
            console.log(`Wallpaper loaded successfully: ${wallpaperUrl}`);
            document.body.style.backgroundImage = `url('${wallpaperUrl}')`;
        };
        img.onerror = () => {
            console.error(`Failed to load wallpaper: ${wallpaperUrl}`);
            document.body.style.backgroundImage = "url('assets/wallpaper.jpg')";
        };
        img.src = wallpaperUrl;
        
        this.updateAsciiArt(themeName); 
        this.updateInfoBox(theme);
        this.updateThemeElements(theme);
        this.updateLoadingScreen(theme);
        this.updateParticleColors(theme);
        localStorage.setItem('terminal-theme', themeName);
        
        this.addToOutput(`
            <div class="command-history">
                <div class="output">Thème appliqué: <span style="color: ${theme.colors.primary};">${theme.name}</span></div>
            </div>
        `, false);
    }
    
    updateAsciiArt(themeName) {
        const asciiElement = document.getElementById('ascii-art');
        if (!asciiElement) return;
        
        // Reset to default styling
        asciiElement.style.fontFamily = '';
        asciiElement.style.fontWeight = '';
        asciiElement.style.letterSpacing = '';
        asciiElement.style.animation = '';
        asciiElement.style.textShadow = 'var(--shadow-effect)';
        
        // Add theme-specific effects only
        /*
        switch(themeName) {
            case 'fallout':
                asciiElement.style.animation = 'matrixGlow 2s ease-in-out infinite alternate';
                asciiElement.style.textShadow = 'var(--glow-effect)';
                break;
            default:
                asciiElement.style.textShadow = 'var(--glow-effect)';
                break;
        }
        */
    }

    updateInfoBox(theme) {
        const infoBlock = document.getElementById('info-block');
        if (!infoBlock) return;
        
        // Update links with theme colors
        const links = infoBlock.querySelectorAll('.info-link');
        links.forEach(link => {
            link.style.color = theme.colors.primary;
            link.style.textShadow = theme.effects.shadow;
        });
        
        // Update name styling
        const nameElement = infoBlock.querySelector('.info-name');
        if (nameElement) {
            nameElement.style.color = theme.colors.primary;
            nameElement.style.textShadow = theme.effects.glow;
        }
    }
    
    updateThemeElements(theme) {
        // Update help commands
        const helpCommands = document.querySelectorAll('.help-command');
        helpCommands.forEach(cmd => {
            cmd.style.color = theme.colors.primary;
            cmd.style.textShadow = theme.effects.shadow;
        });
        
        // Update prompts
        const prompts = document.querySelectorAll('.prompt');
        prompts.forEach(prompt => {
            prompt.style.color = theme.colors.primary;
            prompt.style.textShadow = theme.effects.shadow;
        });
        
        // Update content sections
        const contentSections = document.querySelectorAll('.content-section');
        contentSections.forEach(section => {
            section.style.color = theme.colors.text;
        });
        
        // Update command text
        const commands = document.querySelectorAll('.command');
        commands.forEach(cmd => {
            cmd.style.color = theme.colors.secondary;
        });
    }
    
    updateLoadingScreen(theme) {
        const loadingContent = document.querySelector('.loading-content');
        if (!loadingContent) return;
        
        // Update loading content glow and border
        loadingContent.style.boxShadow = `0 0 20px ${theme.colors.primary}40`;
        loadingContent.style.border = `1px solid ${theme.colors.primary}60`;
        
        // Update loading text color
        const loadingText = document.querySelector('.loading-text');
        if (loadingText) {
            loadingText.style.color = theme.colors.primary;
        }
        
        // Update cursor color
        const cursor = document.querySelector('.cursor');
        if (cursor) {
            cursor.style.color = theme.colors.primary;
        }
    }
    
    updateParticleColors(theme) {
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            particle.style.background = theme.colors.primary;
        });
    }
 
    clear() {
        this.output.innerHTML = '';
        this.showWelcome();
    }
    
    listCommands() {
        this.showHelp();
    }

 /*   
    // GUI File Viewer Methods
    processGUIModeCommand(command) {
        const parts = command.split(' ');
        const cmd = parts[0];
        const args = parts.slice(1);

        switch (cmd) {
            case 'ls':
                this.listFiles();
                break;      
            case 'cd':
                this.changeDirectory(args[0] || '');
                break;
            case 'cat':
                this.displayFile(args[0] || '');
                break;
            case 'pwd':
                this.showCurrentPath();
                break;
            case 'gui':
                this.exitGUIMode();
                break;
            case 'help':
                this.showGUIHelp();
                break;
            case 'search':
                this.setSearchFilter(args.join(' '));
                break;
            case 'clear':
                this.clearSearchFilter();
                break;
            case 'sort':
                this.setSorting(args[0] || 'name', args[1] || 'asc');
                break;
            default:
                this.addToOutput(`Command not found: ${cmd}. Type 'help' for available commands.`);
        }
    }
*/

/*
    enterGUIMode() {
        this.guiMode = true;
        this.currentPath = '/';
        this.addToOutput('Entering GUI File Viewer Mode. ');
        this.addToOutput('');
        this.listFiles();
    }

    exitGUIMode() {
        this.guiMode = false;
        this.addToOutput('Exiting GUI File Viewer Mode...');
        this.addToOutput('Welcome back to terminal mode!');
    }

    listFiles() {
        const currentDir = this.getCurrentDirectory();
        if (!currentDir) return;

        let header = `Contents of ${this.currentPath}:`;
        if (this.searchFilter) {
            header += ` (filtered by: "${this.searchFilter}")`;
        }
        if (this.sortBy !== 'name' || this.sortOrder !== 'asc') {
            header += ` (sorted by: ${this.sortBy} ${this.sortOrder})`;
        }
        
        this.addToOutput(header);
        this.addToOutput('');

        // Add breadcrumb navigation
        const breadcrumbHTML = this.generateBreadcrumb();
        this.addToOutput(breadcrumbHTML);

        // Add GUI-style file listing
        const guiHTML = this.generateGUIListing(currentDir);
        this.addToOutput(guiHTML);
    }

    generateGUIListing(directory) {
        let html = '<div class="gui-listing">';
        this.guiItems = []; // Reset GUI items array
        
        // Get all items (directories and files)
        let allItems = Object.entries(directory.children || {});
        
        // Apply search filter
        if (this.searchFilter) {
            const filter = this.searchFilter.toLowerCase();
            allItems = allItems.filter(([name, item]) => 
                name.toLowerCase().includes(filter) || 
                (item.description && item.description.toLowerCase().includes(filter))
            );
        }
        
        // Separate directories and files
        const dirs = allItems.filter(([name, item]) => item.type === 'directory');
        const files = allItems.filter(([name, item]) => item.type === 'file');
        
        // Sort items
        const sortItems = (items) => {
            return items.sort(([a, itemA], [b, itemB]) => {
                let comparison = 0;
                
                switch (this.sortBy) {
                    case 'name':
                        comparison = a.localeCompare(b);
                        break;
                    case 'size':
                        const sizeA = this.parseSize(itemA.size);
                        const sizeB = this.parseSize(itemB.size);
                        comparison = sizeA - sizeB;
                        break;
                    case 'date':
                        comparison = new Date(itemA.modified) - new Date(itemB.modified);
                        break;
                    case 'type':
                        comparison = itemA.type.localeCompare(itemB.type);
                        break;
                }
                
                return this.sortOrder === 'desc' ? -comparison : comparison;
            });
        };
        
        const sortedDirs = sortItems(dirs);
        const sortedFiles = sortItems(files);
        
        // Add parent directory link
        if (this.currentPath !== '/' && (!this.searchFilter || '..'.includes(this.searchFilter.toLowerCase()))) {
            html += '<div class="gui-item gui-directory" onclick="terminal.navigateToParent()">';
            html += '<span class="gui-icon">📁</span>';
            html += '<span class="gui-name">..</span>';
            html += '<span class="gui-type">Parent Directory</span>';
            html += '</div>';
        }

        // List directories first
        sortedDirs.forEach(([name, item]) => {
            html += '<div class="gui-item gui-directory" onclick="terminal.navigateToDirectory(\'' + name + '\')">';
            html += '<span class="gui-icon">📁</span>';
            html += '<span class="gui-name">' + name + '</span>';
            html += '<span class="gui-type">Directory</span>';
            html += '</div>';
        });

        // List files
        sortedFiles.forEach(([name, item]) => {
            const icon = this.getFileIcon(name);
            html += '<div class="gui-item gui-file" onclick="terminal.openFile(\'' + name + '\')">';
            html += '<span class="gui-icon">' + icon + '</span>';
            html += '<span class="gui-name">' + name + '</span>';
            html += '<span class="gui-size">' + item.size + '</span>';
            html += '<span class="gui-modified">' + item.modified + '</span>';
            html += '</div>';
        });

        html += '</div>';
        
        // Store GUI items for keyboard navigation
        setTimeout(() => {
            this.guiItems = Array.from(document.querySelectorAll('.gui-item'));
            this.selectedIndex = 0;
            this.updateSelection();
        }, 100);
        
        return html;
    }

    getFileIcon(filename) {
        const ext = filename.split('.').pop().toLowerCase();
        const icons = {
            'pdf': '📄',
            'md': '📝',
            'js': '📜',
            'html': '🌐',
            'css': '🎨',
            'py': '🐍',
            'java': '☕',
            'cpp': '⚡',
            'json': '📋',
            'txt': '📄',
            'zip': '📦',
            'jpg': '🖼️',
            'png': '🖼️',
            'gif': '🖼️'
        };
        return icons[ext] || '📄';
    }

    navigateToDirectory(name) {
        const newPath = this.currentPath === '/' ? `/${name}` : `${this.currentPath}/${name}`;
        this.currentPath = newPath;
        this.listFiles();
    }

    navigateToParent() {
        if (this.currentPath === '/') return;
        const pathParts = this.currentPath.split('/').filter(part => part);
        pathParts.pop();
        this.currentPath = pathParts.length > 0 ? '/' + pathParts.join('/') : '/';
        this.listFiles();
    }

    openFile(filename) {
        const file = this.getCurrentDirectory().children[filename];
        if (!file) return;

        this.addToOutput(`Opening ${filename}...`);
        this.addToOutput(`Size: ${file.size}`);
        this.addToOutput(`Modified: ${file.modified}`);
        this.addToOutput(`Description: ${file.description}`);
        
        // Special handling for certain files
        if (filename === 'resume.pdf') {
            this.openResume();
        } else if (filename.endsWith('.pdf')) {
            this.openPublication();
        } else if (file.content) {
            // Show file content preview
            this.addToOutput('');
            this.addToOutput('--- File Content Preview ---');
            this.addToOutput('');
            
            const content = file.content;
            const lines = content.split('\n');
            const maxLines = 20; // Show first 20 lines
            
            if (lines.length > maxLines) {
                lines.slice(0, maxLines).forEach(line => {
                    this.addToOutput(`<div class="file-preview-line">${this.escapeHtml(line)}</div>`);
                });
                this.addToOutput(`<div class="file-preview-more">... (${lines.length - maxLines} more lines)</div>`);
            } else {
                lines.forEach(line => {
                    this.addToOutput(`<div class="file-preview-line">${this.escapeHtml(line)}</div>`);
                });
            }
            
            this.addToOutput('');
            this.addToOutput('--- End Preview ---');
        } else {
            this.addToOutput(`File content preview not available for ${filename}`);
        }
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    changeDirectory(path) {
        if (!path) {
            this.currentPath = '/';
        } else if (path === '..') {
            this.navigateToParent();
            return;
        } else if (path.startsWith('/')) {
            this.currentPath = path;
        } else {
            this.currentPath = this.currentPath === '/' ? `/${path}` : `${this.currentPath}/${path}`;
        }
        this.listFiles();
    }

    displayFile(filename) {
        if (!filename) {
            this.addToOutput('Usage: cat <filename>');
            return;
        }
        this.openFile(filename);
    }

    showCurrentPath() {
        this.addToOutput(this.currentPath);
    }

    getCurrentDirectory() {
        let current = this.fileSystem['/'];
        if (this.currentPath === '/') return current;
        
        const pathParts = this.currentPath.split('/').filter(part => part);
        for (const part of pathParts) {
            if (current.children && current.children[part]) {
                current = current.children[part];
            } else {
                this.addToOutput(`Directory not found: ${this.currentPath}`);
                return null;
            }
        }
        return current;
    }

    showGUIHelp() {
        const guiHelpContent = `
            <div class="command-history">
                <div class="output">
                    <div class="help-section">
                        <span class="help-command">ls</span>
                        <span class="help-description">- List files and directories</span>
                    </div>
                    <div class="help-section">
                        <span class="help-command">cd &lt;dir&gt;</span>
                        <span class="help-description">- Change directory</span>
                    </div>
                    <div class="help-section">
                        <span class="help-command">cat &lt;file&gt;</span>
                        <span class="help-description">- Display file contents</span>
                    </div>
                    <div class="help-section">
                        <span class="help-command">pwd</span>
                        <span class="help-description">- Show current path</span>
                    </div>
                    <div class="help-section">
                        <span class="help-command">gui</span>
                        <span class="help-description">- Exit GUI mode</span>
                    </div>
                    <div class="help-section">
                        <span class="help-command">help</span>
                        <span class="help-description">- Show this help</span>
                    </div>
                    <div class="help-section">
                        <span class="help-command">search &lt;term&gt;</span>
                        <span class="help-description">- Filter files by name or description</span>
                    </div>
                    <div class="help-section">
                        <span class="help-command">clear</span>
                        <span class="help-description">- Clear search filter</span>
                    </div>
                    <div class="help-section">
                        <span class="help-command">sort &lt;by&gt; [order]</span>
                        <span class="help-description">- Sort by name/size/date/type (asc/desc)</span>
                    </div>
                    <div class="help-section" style="margin-top: 15px; padding-top: 10px; border-top: 1px solid var(--primary-color, #00ffb3);">
                        <span class="help-description">💡 Utiliser les flèches ↑↓ pour naviguer, Entrée pour ouvrir, Esc pour sortir du mode GUI.</span>
                    </div>
                </div>
            </div>
        `;
        this.addToOutput(guiHelpContent);
    }
    
    // Keyboard Navigation for GUI Mode
    handleGUINavigation(e) {
        e.preventDefault();
        
        switch(e.key) {
            case 'ArrowUp':
                this.selectedIndex = Math.max(0, this.selectedIndex - 1);
                this.updateSelection();
                break;
            case 'ArrowDown':
                this.selectedIndex = Math.min(this.guiItems.length - 1, this.selectedIndex + 1);
                this.updateSelection();
                break;
            case 'Enter':
                this.activateSelectedItem();
                break;
            case 'Escape':
                this.exitGUIMode();
                break;
            case 'Backspace':
                if (this.currentPath !== '/') {
                    this.navigateToParent();
                }
                break;
        }
    }
    
    updateSelection() {
        // Remove previous selection
        document.querySelectorAll('.gui-item').forEach(item => {
            item.classList.remove('selected');
        });
        
        // Add selection to current item
        if (this.guiItems[this.selectedIndex]) {
            this.guiItems[this.selectedIndex].classList.add('selected');
            this.guiItems[this.selectedIndex].scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest' 
            });
        }
    }
    
    activateSelectedItem() {
        if (!this.guiItems[this.selectedIndex]) return;
        
        const item = this.guiItems[this.selectedIndex];
        const name = item.querySelector('.gui-name').textContent;
        
        if (name === '..') {
            this.navigateToParent();
        } else if (item.classList.contains('gui-directory')) {
            this.navigateToDirectory(name);
        } else {
            this.openFile(name);
        }
    }
    
    // Search and Filter Methods
    setSearchFilter(filter) {
        this.searchFilter = filter;
        this.addToOutput(`Search filter set to: "${filter}"`);
        this.listFiles();
    }
    
    clearSearchFilter() {
        this.searchFilter = '';
        this.addToOutput('Search filter cleared');
        this.listFiles();
    }
    
    setSorting(sortBy, sortOrder) {
        const validSortBy = ['name', 'size', 'date', 'type'];
        const validSortOrder = ['asc', 'desc'];
        
        if (validSortBy.includes(sortBy)) {
            this.sortBy = sortBy;
        }
        if (validSortOrder.includes(sortOrder)) {
            this.sortOrder = sortOrder;
        }
        
        this.addToOutput(`Sorting by: ${this.sortBy} ${this.sortOrder}`);
        this.listFiles();
    }
    
    parseSize(sizeStr) {
        const match = sizeStr.match(/(\d+\.?\d*)([KMGT]?B)/);
        if (!match) return 0;
        
        const value = parseFloat(match[1]);
        const unit = match[2];
        
        const multipliers = { 'B': 1, 'KB': 1024, 'MB': 1024*1024, 'GB': 1024*1024*1024, 'TB': 1024*1024*1024*1024 };
        return value * (multipliers[unit] || 1);
    }
    
    // Breadcrumb Navigation
    generateBreadcrumb() {
        const pathParts = this.currentPath.split('/').filter(part => part);
        let html = '<div class="gui-breadcrumb">';
        
        // Always show root
        html += '<span class="gui-breadcrumb-item" onclick="terminal.navigateToPath(\'/\')">🏠 Root</span>';
        
        // Add path parts
        let currentPath = '';
        pathParts.forEach((part, index) => {
            currentPath += '/' + part;
            html += '<span class="gui-breadcrumb-separator">/</span>';
            html += `<span class="gui-breadcrumb-item" onclick="terminal.navigateToPath('${currentPath}')">${part}</span>`;
        });
        
        html += '</div>';
        return html;
    }
    
    navigateToPath(path) {
        this.currentPath = path;
        this.listFiles();
    }
        */
}

document.addEventListener('DOMContentLoaded', () => {
    window.terminal = new Terminal();
    if (window.setupPDFViewer) window.setupPDFViewer();
}); 

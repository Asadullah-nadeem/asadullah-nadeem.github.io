const output = document.getElementById('output');
const commandInput = document.getElementById('commandInput');
const splashScreen = document.getElementById('splashScreen');
const terminal = document.querySelector('.terminal');
const timeElement = document.getElementById('time');
const cpuElement = document.getElementById('cpu');
const gpuElement = document.getElementById('gpu');
const storageElement = document.getElementById('storage');

// Simulated system information
const systemInfo = {
    ip: '192.168.1.100',
    mac: '00:1A:2B:3C:4D:5E',
    os: 'WebOS 1.0',
    user: 'guest'
};

setTimeout(() => {
    splashScreen.style.display = 'none';
    terminal.style.display = 'block';
    commandInput.disabled = false;
    commandInput.focus();
}, 1000);

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    timeElement.textContent = `Time: ${timeString}`;
}
setInterval(updateTime, 1000);
updateTime();

function simulateUsage() {
    const cpuUsage = Math.floor(Math.random() * 100);
    const gpuUsage = Math.floor(Math.random() * 100);
    const storageUsage = Math.floor(Math.random() * 100);

    cpuElement.textContent = `CPU: ${cpuUsage}%`;
    gpuElement.textContent = `GPU: ${gpuUsage}%`;
    storageElement.textContent = `Storage: ${storageUsage}%`;
}
setInterval(simulateUsage, 3000);
simulateUsage();

const commands = {
    help: () => {
        return `
  Available commands:<br>
  - <span class="command">about</span>: Learn more about me.<br>
  - <span class="command">skills</span>: View my skills.<br>
  - <span class="command">projects</span>: View my projects.<br>
  - <span class="command">education</span>: See my educational background.<br>
  - <span class="command">contact</span>: Get in touch.<br>
  - <span class="command">socials</span>: Check out my social media.<br>
  - <span class="command">clear</span>: Clear the terminal.<br>
`;
    },
    h: () => {
        return `
  Available commands:<br>
  - <span class="command">about</span>: Learn more about me.<br>
  - <span class="command">skills</span>: View my skills.<br>
  - <span class="command">projects</span>: View my projects.<br>
  - <span class="command">education</span>: See my educational background.<br>
  - <span class="command">contact</span>: Get in touch.<br>
  - <span class="command">socials</span>: Check out my social media.<br>
  - <span class="command">Resume</span>: Check out Resume.<br>

  - <span class="command">clear</span>: Clear the terminal.<br>
`;
    },
    about: () => {
        return `
I am Asadullah Nadeem, a developer who believes in turning ideas into reality. Every challenge is an opportunity, and every line of code is a step towards innovation.

I don't just follow trends—I create them. Intelligence is not just about knowing things, but about thinking differently. Here, you won’t find the ordinary.

If you're here, you're already thinking beyond limits. Let's build something extraordinary!        `;
    },
    skills: () => {
        return `
  My skills include:<br>
  - <span class="success">Java</span><br>
`;
    },
    projects: () => {
        return `
  Here are some of my projects:<br>
  - <a href="https://github.com/Asadullah-nadeem/Android-Device-Information" class="link"> Project 1</a>: Android Device Information using Java.<br>
  - <a href="https://github.com/Asadullah-nadeem/Block-Web-Scraping-Tools" class="link"> Project 2</a>: Block Web Scraping Tools using htaccess.<br>
  - <a href="https://github.com/Asadullah-nadeem/File-uploader" class="link"> Project 3</a>: File Upload API built using PHP.<br>
`;
    },
    education: () => {
        return `
  My educational background:<br>
  - <span class="success">Computer Science</span> from Sarala Birla University - SBU, Ranchi.<br>
`;
    },
    contact: () => {
        return `
  You can reach me at:<br>
  - Email: <a href="mailto:asadullahnadeem48@gmail.com" class="link">asadullahnadeem48@gmail.com</a><br>
  - LinkedIn: <a href="https://www.linkedin.com/in/asadullah-nadeem/" class="link">LinkedIn Profile</a><br>
`;
    },
    socials: () => {
        return `
  Follow me on:<br>
  - <a href="https://github.com/Asadullah-nadeem/" class="link">GitHub</a><br>
  - <a href="https://www.linkedin.com/in/asadullah-nadeem/" class="link">LinkedIn Profile</a><br>
`;
    },
    Resume: () => {
        return `
  - <a href="#" class="link">ERROr⚠️</a><br>
`;
    },
    clear: () => {
        output.innerHTML = '';
        return null;
    }
};

commandInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        const command = commandInput.value.trim();
        commandInput.value = '';

        if (commands[command]) {
            output.innerHTML += `<p class="output">user@guest:~ ${command}</p>`;
            const result = commands[command]();
            if (result !== null) {
                output.innerHTML += `<p class="output">${result}</p>`;
            }
        } else {
            output.innerHTML += `<p class="output">user@guest:~ ${command}</p>`;
            output.innerHTML += `<p class="error">Command not found. Type <span class="command">help</span> for a list of commands.</p>`;
        }
        output.scrollTop = output.scrollHeight;
    }
});

const cursor = document.querySelector('.cursor');
setInterval(() => {
    cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
}, 500);

async function fetchIPAddresses() {
    try {
        const response4 = await fetch('https://api.ipify.org?format=json');
        const data4 = await response4.json();
        document.getElementById('ip-address4').textContent = `${data4.ip}`;
        const response6 = await fetch('https://api64.ipify.org?format=json');
        const data6 = await response6.json();
        document.getElementById('ip-address6').textContent = `${data6.ip}`;
    } catch (error) {
        console.error('Error fetching IP addresses:', error);
        document.getElementById('ip-address4').textContent = 'Failed to load IPv4';
        document.getElementById('ip-address6').textContent = 'Failed to load IPv6';
    }
}
fetchIPAddresses();
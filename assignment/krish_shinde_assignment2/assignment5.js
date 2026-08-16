const http = require('http');

// Helper function with minimal CSS just for alignment
const generateHTML = (title, content) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title} | Portfolio</title>
        <style>
            body { 
                font-family: sans-serif; 
                text-align: center; 
                margin: 0; 
                padding: 20px; 
            }
            nav { 
                margin-bottom: 20px; 
            }
            nav a { 
                margin: 0 15px; 
                text-decoration: none; 
                color: #0056b3; 
                font-weight: bold; 
            }
            hr {
                max-width: 700px;
                margin-bottom: 30px;
            }
            .content { 
                max-width: 600px; 
                margin: 0 auto; 
                text-align: left; 
                line-height: 1.6;
            }
            h1 { 
                text-align: center; 
            }
        </style>
    </head>
    <body>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About Me</a>
            <a href="/skills">Skills</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact Details</a>
        </nav>
        <hr>
        <div class="content">
            ${content}
        </div>
    </body>
    </html>
    `;
};

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    switch (req.url) {
        case '/':
            res.end(generateHTML("Home", `
                <h1>Welcome to My Portfolio</h1>
                <p>Hi, I'm Krish Shinde. Welcome to my personal server-side portfolio built entirely using the Node.js HTTP module.</p>
                <p>Feel free to navigate through the links above to learn more about my academic background, technical skill set, and recent software development projects.</p>
            `));
            break;
        case '/about':
            res.end(generateHTML("About Me", `
                <h1>About Me</h1>
                <p>I am a B.Tech Computer Science undergraduate student currently studying at ITM.</p>
                <p>I am passionate about software engineering, i love to play sports and watch sports.</p>
            `));
            break;
        case '/skills':
            res.end(generateHTML("Skills", `
                <h1>Skills & Technologies</h1>
                <ul>
                    <li><strong>Languages:</strong> Python, HTML, CSS</li>
                    <li><strong>Tools & Platforms:</strong> Firebase, Netlify, DaVinci Resolve</li>
                </ul>
            `));
            break;
        case '/projects':
            res.end(generateHTML("Projects", `
                <h1>Recent Projects</h1>
                <ul>
                    <li><strong>Gamified Learning Platform:</strong> An interactive coding environment built with ReactJS designed to teach HTML and CSS.</li>
                    <li><strong>8-Bit Escape Room:</strong> A multi-page interactive puzzle web application featuring sequential logic challenges.</li>
                    <li><strong>Secret Santa Application:</strong> A web-based application utilizing Firebase to securely organize and randomize participants for family gift exchanges.</li>
                    <li><strong>Diet Coke Tracker:</strong> A custom tracking application featuring a specialized, data-driven dashboard.</li>
                </ul>
            `));
            break;
        case '/contact':
            res.end(generateHTML("Contact Details", `
                <h1>Contact Details</h1>
                <p><strong>Email:</strong> krishshinde2128@gmail.com</p>
                <p><strong>GitHub:</strong>https://github.com/krishshinde2128-glitch</p>
            `));
            break;
        default:
            res.statusCode = 404;
            res.end(generateHTML("404", `
                <h1>404 - Page Not Found</h1>
                <p>Oops! The requested route does not exist on this server. Please use the navigation menu to return to a valid page.</p>
            `));
            break;
    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
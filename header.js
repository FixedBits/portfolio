class Header extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="banner">
                <h1>Victor's Portfolio</h1>
            </div>

            <div id="nav-container">
                <ul id="nav-list">
                    <li>
                        <a href="/portfolio/index.html">Home</a>
                    </li>
                    <li>
                        <a href="/portfolio/projects.html">Projects</a>
                    </li>
                    <li>
                        <a href="/portfolio/database-diagrams.html">Database Diagrams</a>
                    </li>
                    <li>
                        <a href="/portfolio/api-unit-tests.html">API Unit Tests</a>
                    </li>
                    <li>
                        <a href="/portfolio/resume.html">Resume</a>
                    </li>
                    <li>
                        <a href="/portfolio/about.html">About</a>
                    </li>
                    <li>
                        <a href="/portfolio/web-430/soto-tech-value-stream.html">DevOps Presentations</a>
                    </li>
                </ul>
            </div>
        `;
    }
}
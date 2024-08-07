class Header extends HTMLElement {
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
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="projects.html">Projects</a>
                    </li>
                    <li>
                        <a href="database-diagrams.html">Database Diagrams</a>
                    </li>
                    <li>
                        <a href="api-unit-tests.html">API Unit Tests</a>
                    </li>
                    <li>
                        <a href="resume.html">Resume</a>
                    </li>
                    <li>
                        <a href="about.html">About</a>
                    </li>
                    <li class="dropdown">
                    <a href="web-430/devops-index.html" class="dropbtn">DevOps Presentations &#9662;</a>
                    <div class="dropdown-content">
                    <a href="web-430/soto-tech-value-stream.html">Tech-Value-Stream</a>
                    <a href="web-430/soto-two-pizza-rule.html">The Two-Pizza Team Rule</a>
                    <a href="web-430/soto-testing.html">Testing</a>
                    <a href="web-430/soto-continuous-integration.html">Continuous Integration</a>
                    <a href="web-430/soto-pager-rotation.html">Pager Rotation</a>
                    <a href="web-430/soto-ca-processes.html">Dangers of Change Approval Processes</a>
                    <a href="web-430/soto-it-vs-business.html">Technology vs. Business</a>
                    <a href="web-430/soto-source-control-security.html">Source Control Security</a>
                    <a href="web-430/soto-change-management.html">Change Management</a>
                    <a href="web-430/upcoming-presentation.html">Upcoming Presentation</a>
                    </div>
                    </li>
                </ul>
            </div>
        `;
    }
}

customElements.define("header-component", Header);

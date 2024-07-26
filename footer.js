class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <div id="footer">
                <p>
                    Copyright © 2024 <a href="https://www.bellevue.edu/">Bellevue University</a> | 
                    <a href="https://github.com/FixedBits">GitHub</a> | 
                    <a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/">Web Development Degree</a> | 
                    <a href="https://www.youtube.com/@bellevueuniversity">YouTube Channel</a> | 
                    <a href="https://github.com/buwebdev/web-330">Course GitHub</a>
                </p>
            </div>
        `;
  }
}

customElements.define("footer-component", Footer);

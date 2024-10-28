class DynHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
          <link rel="stylesheet" href="/styles.css">
          <header>
          <h1>OSCA Hack Club</h1>
          <nav>
              <ul>
                  <li><a href="/index.html">Home</a></li>
                  <li><a href="/calendar.html">Calendar</a></li>
              </ul>
          </nav>
          </header>
          `;
    }
  }
  
  class DynFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
          <link rel="stylesheet" href="/styles.css">
          <footer>
              <p>&copy; 2024 Ormiston Sandwell Community Academy. All rights reserved.</p>
          </footer>
          `;
    }
  }
  
  customElements.define("dyn-header", DynHeader);
  customElements.define("dyn-footer", DynFooter);

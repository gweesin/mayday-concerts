import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import poster from "../assets/poster.png";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("home-view")
export class HomeView extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = "Click on the button to explore more!";

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  render() {
    return html`
      <section class="home-part">
        <div>
          <a target="_blank">
            <img src=${poster} class="logo poster" alt="Mayday Poster" />
          </a>
        </div>
        <h1>好好好想见到你</h1>
        <button @click=${this._onClick} part="button">
          immerse with Mayday Concerts
        </button>
        <p class="read-the-docs">${this.docsHint}</p>
      </section>
    `;
  }

  private _onClick() {
    location.href = "/music-list";
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .home-part {
      padding: 0 2rem;
    }

    .logo {
      width: 100%;
      object-fit: cover;
      will-change: filter;
      transition: filter 300ms;
      border-radius: 8px;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.poster:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }

    .read-the-docs {
      color: #888;
    }

    ::slotted(h1) {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "home-view": HomeView;
  }
}

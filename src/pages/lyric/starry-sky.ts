import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { sleep } from "../../utils.ts";

@customElement("starry-sky")
export class StarrySky extends LitElement {
  render() {
    return html`<slot></slot>`;
  }

  connectedCallback() {
    super.connectedCallback();
    this.createStars();
  }

  createStars() {
    const numberOfStars = 100; // 星星数量

    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = `${Math.random() * 100}vw`; // 随机水平位置
      star.style.top = `${Math.random() * 100}vh`; // 随机垂直位置

      sleep(Math.random() * 800).then(() => {
        this.shadowRoot!.appendChild(star);
      });
    }
  }

  static styles = css`
    :host {
      display: block;
      height: 100%;
      width: 100%;
    }

    .star {
      position: absolute;
      width: 2px;
      height: 2px;
      background-color: #fff; /* 白色星星 */
      border-radius: 50%;
      animation: twinkle 1s infinite;
    }

    @keyframes twinkle {
      50% {
        opacity: 0; /* 闪烁效果 */
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "starry-sky": StarrySky;
  }
}

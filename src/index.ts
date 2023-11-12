import { LitElement, html, css } from "lit";
import { Router } from "@vaadin/router";
import "./pages/home-view.ts";
import "./pages/music-list-view.ts";
import "./pages/lyric-view.ts";

class LitRealWorldIndex extends LitElement {
  firstUpdated() {
    // @ts-ignore
    super.firstUpdated();
    const router = new Router(this.shadowRoot!.querySelector("#outlet"));
    router.setRoutes([
      { path: "/", component: "home-view" },
      { path: "/music-list", component: "music-list-view" },
      { path: "/lyric", component: "lyric-view" },
      { path: "(.*)", redirect: "/" },
    ]);
  }

  render() {
    return html` <div id="outlet"></div> `;
  }

  static styles = css`
    :host,
    #outlet {
      width: 100%;
      height: 100%;
    }
  `;
}

customElements.define("lit-real-world", LitRealWorldIndex);

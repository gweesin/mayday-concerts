import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './lyric/starry-sky.ts';

/**
 * An example element.
 */
@customElement('lyric-view')
export class LyricView extends LitElement {
  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Array<String> })
  musicList = [];

  render() {
    return html`
      <starry-sky class='lyric'></starry-sky>
    `;
  }

  static styles = css`
    :host {
      width: 100vw;
      height: 100vh;
      display: block;
    }
    
    .lyric {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'lyric-view': LyricView;
  }
}

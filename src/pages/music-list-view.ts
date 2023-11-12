import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import music from '../assets/music.svg';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("music-list-view")
export class MusicListView extends LitElement {
  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Array<String> })
  musicList = [
    "盛夏光年",
    "爱情万岁",
    "派对动物",
    "离开地球表面",
    "因为你所以我",
    "知足",
    "疯狂世界",
    "香水",
    "拥抱",
    "小太阳",
    "干杯",
    "最重要的小事",
    "你不是真正的快乐",
    "我心中尚未崩坏的地方",
    "人生海海（feat.白安）",
    "恋爱ing",
    "孙悟空",
    "轧车（喊麦）",
    "突然好想你",
    "生命有一种绝对",
  ];

  render() {
    const musicList = this.musicList.map((musicData, idx) => html`
      <div class="music-list-item">
        <div class="music-list-item__pic-wrap">
          <img src="${music}" class="music-list-item__pic" alt="music logo" />
        </div>
        
        <div class="music-list-item__content" @click=${this._onClick}>
          <i class="music-list-item__content__index">#${ idx + 1 }</i>
          <span>${ musicData }</span>
        </div>
      </div>
    `)

    return html`
      <div class="music-list">
        ${musicList}
      </div>
    `;
  }

  private _onClick() {
    location.href = "/lyric";
  }

  static styles = css`
    :host {
      height: 100vh;
      color: #bdc1c6;
    }

    .music-list {
      padding: 0 0.5rem;
    }

    .music-list-item {
      padding: 0.75rem 0.5rem;
      border-radius: 4px;
      display: flex;
      align-items: center;
      position: relative;
      height: 51px;

      //border: 1px solid #ebebeb;
    }

    .music-list-item + .music-list-item {
      //margin-top: 0.75rem;
      border-top: 1px solid #3c4043;
    }

    .music-list-item__pic-wrap {
      position: absolute;
      width: 92px;
      height: 51px;
      background-color: #4f5155;
      border-radius: 8px;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .music-list-item__pic {
      width: 1rem;
      height: 1rem;
      color: #9aa0a6;
      fill: currentColor;
    }

    .music-list-item__content {
      margin-left: 108px;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .music-list-item__content__index {
      color: #666;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "music-list-view": MusicListView;
  }
}

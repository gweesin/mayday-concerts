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
    "知足",
    "乾杯",
    "我不願 讓你一個人",
    "星空",
    "溫柔",
    "後來的我們",
    "戀愛ing",
    "玫瑰少年",
    "志明與春嬌",
    "最重要的小事",
    "倔強",
    "頑固",
    "倉頡",
    "你不是真正的快樂",
    "任意門",
    "入陣曲",
    "夜訪吸血鬼",
    "為你寫下這首情歌",
    "擁抱",
    "派對動物",
    "盛夏光年",
    "私奔到月球",
    "因為你 所以我",
    "香水"
  ];

  render() {
    const musicList = this.musicList.map(musicData => html`
      <div class="music-list-item">
        <div class="music-list-item__pic-wrap">
          <img src="${music}" class="music-list-item__pic" alt="music logo" />
        </div>
        
        <div class="music-list-item__content">
          ${musicData}
        </div>
      </div>
    `)

    return html`
      <div class="music-list">
        ${musicList}
      </div>
    `;
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
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "music-list-view": MusicListView;
  }
}

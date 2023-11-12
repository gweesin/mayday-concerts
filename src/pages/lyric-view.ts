import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './lyric/starry-sky.ts';
import Lyric from 'lrc-file-parser';
import type { Lines } from 'lrc-file-parser';

/**
 * An example element.
 */
@customElement('lyric-view')
export class LyricView extends LitElement {
  /**
   * The number of times the button has been clicked.
   */
  @property({ type: String })
  activeLyricText = '';

  @property({ type: Number })
  activeLyricLine = -1;

  @property({ type: Array<String> })
  lines: Lines = [];

  render() {
    return html`
      <starry-sky class='lyric'>
        ${this.lines.map((line, index) =>
          html`
            <li class='${this.activeLyricLine === index ? 'lyric--active' : ''}'>${line.text}</li>`
        )}
      </starry-sky>`;
  }

  connectedCallback() {
    super.connectedCallback();
    const lrc = new Lyric({
      onPlay: (line, text) => {
        // Listening play event
        this.activeLyricText = text;
        this.activeLyricLine = line;
        console.log(line, text); // line is line number of current play
        // text is lyric text of current play line
      },
      onSetLyric: function(lines) {
        // listening lyrics seting event
        console.log(lines); // lines is array of all lyric text
      },
      offset: 150, // offset time(ms), default is 150 ms
      playbackRate: 1, // playback rate, default is 1
      isRemoveBlankLine: true // is remove blank line, default is true
    });

    lrc.setLyric(`[00:00.11]五月天 - 盛夏光年
[00:02.20]作词：阿信
[00:02.53]作曲：阿信
[00:37.18]我骄傲的破坏 我痛恨的平凡
[00:42.61]才想起那些是我最爱
[00:48.23]让盛夏去贪玩 把残酷的未来
[00:53.81]狂放到光年外 而现在
[00:59.09]放弃规则 放纵去爱
[01:04.78]放肆自己 放空未来
[01:10.48]我不转弯 我不转弯
[01:16.07]我不转弯 我不转弯
[01:44.85]让定律更简单 让秩序更混乱
[01:50.35]这样的青春我才喜欢
[01:56.06]让盛夏去贪玩 把残酷的未来
[02:01.60]狂放到光年外 而现在
[02:06.93]放弃规则 放纵去爱
[02:12.50]放肆自己 放空未来
[02:18.38]我不转弯 我不转弯
[02:23.82]我不转弯 我不转弯
[02:51.44]我要 我疯 我要 我爱 就是
[02:54.04]我要 我疯 我要 我爱 现在
[02:56.63]一万首的mp3
[02:57.79]一万次疯狂的爱
[02:59.25]灭不了一个渺小的孤单
[03:02.42]我要 我疯 我要 我爱 就是
[03:05.44]我要 我疯 我要 我爱 现在
[03:07.89]盛夏的一场狂欢
[03:09.22]来到了光年之外
[03:10.54]长大难道是人必经的溃烂
[03:14.62]放弃规则 放纵去爱
[03:20.24]放肆自己 放空未来
[03:25.91]我不转弯 我不转弯
[03:31.58]我不转弯 我不转弯
`); // set lyric, lyricStr is lyric file text, extendedLyricStrs is extended lyric file text array (optional)
    // note: Setting the lyrics will automatically pause the lyrics playback
    lrc.play(0); // play lyric, 30000 is curent play time, unit: ms
    // lrc.pause() // pause lyric

    this.lines = lrc.lines;
    console.log(this.lines);
    lrc.setPlaybackRate(1.2); // set playback rate to 1.2x
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
    
    .lyric--active {
      color: #fff;
      font-size: 2rem;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'lyric-view': LyricView;
  }
}

// date
const date = new Date;
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const week = '日月火水木金土'[date.getDay()];
const hour = date.getHours();
const minute = date.getMinutes();
const accessDate = `${year}年${month}月${day}日(${week}) ${hour}時${minute}分`;


// copy text
new Vue({
  el: '#app',
  data: {
    copyText: '',
    items: [
      { id: 1, type: false, title: '受付日', text: accessDate },
      { id: 2, type: false, title: 'お問い合わせ内容', text: '' },
      { id: 3, type: false, title: 'いつから', text: '' },
      { id: 4, type: false, title: 'きっかけ', text: '' },
      { id: 5, type: 'radio', title: '利用している機器', text: '', values: ['ゲーム機器', 'iPhone', 'iPad', 'android', 'Windows', 'Mac'] },
      { id: 5, type: false, title: 'OSのバージョン', text: '' },
      { id: 6, type: false, title: 'プロバイダ', text: '' },
      { id: 7, type: false, title: 'ルーターメーカー', text: '' },
      { id: 8, type: 'radio', title: 'ネットワーク接続方法', text: '', values: ['LAN', 'Wi-Fi'] },
      { id: 9, type: 'check', title: '予想される問題点', text: [], values: ['ネットワークが不安定', '一時的な現象', 'OSのバージョンが古い', 'ゲームのバージョンが古い'] },
      { id: 10, type: 'check', title: '案内した内容', text: [], values: ['一時的な不具合である', 'LAN接続の切替え', 'テザリングなど別のネットワークで改善ないか', 'OS、ゲームのバージョン更新'] },
      { id: 11, type: 'radio', title: '結果', text: '', values: ['解決', '未解決', '再度ご連絡'] }
    ]
  },
  methods: {
    // formで入力したデータをcopyTextに統合する
    copy: function () {
      // copyTextをクリア
      if (this.copyText !== '') this.copyText = '';
      for (item of this.items) {
        // 配列をStringに修正
        if (item.type === 'check') {
          const text = item.text.join('、');
          this.copyText += `- ${item.title}\n${text}\n\n`;
        } else {
          // copyTextに統合
          this.copyText += `- ${item.title}\n${item.text}\n\n`;
        }
      }
      // クリップボードにコピー
      navigator.clipboard.writeText(this.copyText);
      // ページ上にスクロール
      // window.location.href = '/#';
    }
  },
});

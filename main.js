var app = new Vue({
  el: '#app',
  methods: {
    handleClick: function(event) {
      alert(event.target)
    }
  },
  data: {
    message: '初期メッセーじ',
    kudamono: ['りんご', 'ばなな', 'いちご'],
    show: false
  }
})

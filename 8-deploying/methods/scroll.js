export default {
  methods: {
    handleScroll(event) {
      // Any code to be executed when the window is scrolled
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}

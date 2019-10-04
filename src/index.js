export default class OnleaveIntent {
  constructor(calback) {
    this.calback = calback
    this.handleMouseOut()
  }
  //aula04
  checkoutOfBound = e => {
    if (e.relatedTarget === null) {
      this.calback()
    }
  }

  handleMouseOut() {
    document.addEventListener('mouseout', this.checkoutOfBound)
  }
}

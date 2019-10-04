import OnleaveIntent from './index'

describe('OnleaveIntent', () => {
  it('should run the calback function is the user goes out te screen', () => {
    const calback = jest.fn()
    const onleaveIntent = new OnleaveIntent(calback)
    //simulate the user leaving the page
    document.dispatchEvent(new MouseEvent('mouseout', { relatedTarget: null }))
    expect(calback).toHaveBeenCalled()
  })
})

describe('OnleaveIntent', () => {
  it('should not run the calback function is the user goes out te screen', () => {
    const calback = jest.fn()
    const onleaveIntent = new OnleaveIntent(calback)
    //simulate the user leaving the page
    document.dispatchEvent(
      new MouseEvent('mouseout', { relatedTarget: new EventTarget() })
    )
    expect(calback).not.toHaveBeenCalled()
  })
})

export class A2d3BarPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.id("algorithmist")).getText();
  }
}

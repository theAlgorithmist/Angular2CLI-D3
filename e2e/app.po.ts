export class A2d3BarPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('a2d3-bar-app h1')).getText();
  }
}

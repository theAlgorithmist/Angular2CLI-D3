import { A2d3BarPage } from './app.po';

describe('a2d3-bar App', function() {
  let page: A2d3BarPage;

  beforeEach(() => {
    page = new A2d3BarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('a2d3-bar works!');
  });
});

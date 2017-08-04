import { Angular2DemoKudVenkatPage } from './app.po';

describe('angular2-demo-kud-venkat App', () => {
  let page: Angular2DemoKudVenkatPage;

  beforeEach(() => {
    page = new Angular2DemoKudVenkatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

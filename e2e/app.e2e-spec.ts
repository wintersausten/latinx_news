import { LatinxPage } from './app.po';

describe('latinx App', () => {
  let page: LatinxPage;

  beforeEach(() => {
    page = new LatinxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

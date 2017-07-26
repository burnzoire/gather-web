import { GatherWebPage } from './app.po';

describe('gather-web App', () => {
  let page: GatherWebPage;

  beforeEach(() => {
    page = new GatherWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

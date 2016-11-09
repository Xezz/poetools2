import { PoetoolsPage } from './app.po';

describe('poetools App', function() {
  let page: PoetoolsPage;

  beforeEach(() => {
    page = new PoetoolsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

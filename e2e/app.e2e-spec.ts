import { Obrazac4Page } from './app.po';

describe('obrazac4 App', function() {
  let page: Obrazac4Page;

  beforeEach(() => {
    page = new Obrazac4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

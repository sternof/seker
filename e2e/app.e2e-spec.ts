import { NgSekerPage } from './app.po';

describe('ng-seker App', function() {
  let page: NgSekerPage;

  beforeEach(() => {
    page = new NgSekerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

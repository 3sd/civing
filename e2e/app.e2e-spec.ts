import { TivyngPage } from './app.po';

describe('tivyng App', () => {
  let page: TivyngPage;

  beforeEach(() => {
    page = new TivyngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

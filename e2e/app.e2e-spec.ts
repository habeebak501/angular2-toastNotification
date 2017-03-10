import { ToastNotPage } from './app.po';

describe('toast-not App', function() {
  let page: ToastNotPage;

  beforeEach(() => {
    page = new ToastNotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

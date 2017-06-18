import { Angular4testPage } from './app.po';

describe('angular4test App', () => {
  let page: Angular4testPage;

  beforeEach(() => {
    page = new Angular4testPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

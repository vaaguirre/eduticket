import { EduRafflePage } from './app.po';

describe('edu-raffle App', () => {
  let page: EduRafflePage;

  beforeEach(() => {
    page = new EduRafflePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

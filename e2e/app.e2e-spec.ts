import { AutocompletePage } from './app.po';

describe('autocomplete App', () => {
  let page: AutocompletePage;

  beforeEach(() => {
    page = new AutocompletePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

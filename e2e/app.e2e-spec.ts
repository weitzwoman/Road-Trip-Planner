import { RoadTripPage } from './app.po';

describe('road-trip App', function() {
  let page: RoadTripPage;

  beforeEach(() => {
    page = new RoadTripPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

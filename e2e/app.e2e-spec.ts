import { AppPage } from './app.po';

describe('protractor512-checkbox App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it(`should have '3' labels`, () => {
    expect(page.getLabelCount()).toBe(3);
  });

  it(`should have '3' checkboxes`, () => {
    expect(page.getCheckboxCount()).toBe(3);
  });

  it(`should have '0' checkbox selected by default`, () => {
    expect(page.getSelectedCloudCount()).toBe('0');
  });

  it(`should show '1' when 'AWS' selected`, () => {
    page.selectCloudByIndex(0);
    expect(page.getSelectedCloudCount()).toBe('1');
  });

  it(`should have '2' when 'AWS' and 'Azure' selected`, () => {
    page
      .selectCloudByText('AWS')
      .selectCloudByText('Azure');
    expect(page.getSelectedCloudCount()).toBe('2');
  });

  it(`should '3' when all checkbox selected`, () => {
    page
      .selectCloudByText('AWS')
      .selectCloudByText('Azure')
      .selectCloudByText('GCP');
    expect(page.getSelectedCloudCount()).toBe('3');
  });
});

import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getLabelCount(): any {
    return element.all(by.tagName('label')).count();
  }

  getCheckboxCount(): any {
    return element.all(by.css('input[type="checkbox"]')).count();
  }

  selectCloudByIndex(index: number): AppPage {
    element.all(by.css('label[name="cloud"]'))
      .get(index)
      .click();

    return this;
  }

  selectCloudByText(text: string): AppPage {
    element(by.cssContainingText('label', text)).click();

    return this;
  }

  getSelectedCloudCount(): any {
    return element(by.css('p')).getText();
  }
}

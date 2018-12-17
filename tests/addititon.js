module.exports = {
  'Test addition' : function (browser) {
      browser
        .url(browser.globals.file_link)
        .setValue('input[id="add1"]', 4)
        .setValue('input[id="add2"]', 8)
        .click('button[id="act"]')
        .expect.element('label[id="add3"]').text.to.contain(12);
        browser.waitForElementVisible('body', 1000)
        .end();
      }
  };
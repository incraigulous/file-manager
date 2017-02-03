var {defineSupportCode} = require('cucumber');
var {By, until} = require('selenium-webdriver');

defineSupportCode(function({Given, When, Then}) {
    Given("I visit the demo", function() {
        return this.driver.get("http://www.file-manager.dev/demo/")
    });

    When("The page loads", function() {
        var condition = until.elementLocated(By.css('body'));
        return this.driver.wait(condition, 5000);
    });

    Then("I should see an element with the attribute {attribute}", function(attribute) {
        var condition = until.elementLocated(By.css(`[_celltype='${attribute}']`));
        return this.driver.wait(condition, 5000);
    });

    Then("I should see an element with the selector {selector}", function(selector) {
        var condition = until.elementLocated(By.css(selector));
        return this.driver.wait(condition, 5000);
    });

    Then("I should not see an element with the selector {selector}", function(selector) {
        return this.driver.findElements(By.css(selector)).then(function(elements_arr){
            return elements_arr.length
        });
    });

    When('I click on {stringInDoubleQuotes}', function (text) {
        return this.driver.findElement({linkText: text}).then(function(element) {
            return element.click();
        });
    });

    When('I click on an element with the selector {selector}', function (selector) {
        let element = this.driver.findElement(By.css(selector))
        element.click();
    });
});
this.Popup = $page("Popup", {
        closeButton:    "xpath: html/body/div[7]/div/div/div[1]/button", // xpath locator
	
        clickCloseButton: function () {
          this.closeButton.click();
        }
});

this.MyPage = $page("My page", {
  alertPopup: $component(Popup, "xpath: html/body/div[7]/div")
});


require('../page/confirm_page.js');

var srchresult_page = function(){
	
	
	this.pagetitle = function(){
		
		return browser.getTitle();;
	};
	
	this.enterFieldValue = function(value){
		
		element(by.model('searchText')).sendKeys(value);
	};
	
	this.search = function(){
		
		element(by.css('.input-group-btn')).click();
	};
	
	this.firstresultname = function(){
		
				
		element(by.xpath("//div[@class='meeting-locations-list__item'][1]//span")).getText().then(function(text) {
				console.log(text);
		});
			
	};
		
		
	this.firstresultdistance = function(){
		
				
		element(by.xpath("//div[@class='meeting-locations-list__item'][1]//div[@class='location__distance']")).getText().then(function(text) {
				console.log(text);
		});
	};
		
		
	this.firstresultselect = function(){
		
				
		element(by.xpath("//div[@class='meeting-locations-list__item'][1]//span")).click();
		return require('./confirm.js');
	};
	
	
	
};
module.exports = new srchresult_page();


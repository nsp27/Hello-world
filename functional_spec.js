describe('to test Weight watcher app', function() {
	
	beforeEach(function(){
		
		browser.get('https://www.weightwatchers.com/us/');
		expect (browser.getTitle()).toBe('Weight Loss Program, Recipes & Help | Weight Watchers');
	
		
	});
	
	var home_page = require('../page/home_page.js');
 
	it ('should be able to find a meeting',function(){
		
		
		
		var srchresult_page = home_page.clickmeeting();
		var srchresultpagetext = srchresult_page.pagetitle();
		expect(srchresultpagetext).toContain('Get Schedules & Times Near You');
		srchresult_page.enterFieldValue('10011');
		srchresult_page.search();
		var firstresultvalue = srchresult_page.firstresultname();
		srchresult_page.firstresultname();
		srchresult_page.firstresultdistance();
		var confirm = srchresult_page.firstresultselect();
		var textname = confirm.name();
		expect(firstresultvalue).toEqual(textname);
		confirm.currentday();
		confirm.currentoperations();
		
		
	
		
		
		
	});


});
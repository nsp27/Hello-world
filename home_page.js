require ('../page/srchresult_page.js');

var home_page = function(){
	
		this.clickmeeting = function(value){
		
		element(by.css('.find-a-meeting')).click();
		return require('./srchresult_page.js');
	};
		
	
};

module.exports = new home_page();
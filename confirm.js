var confirm = function(){
	
	
	this.name = function(){
		
				
		element(by.xpath("//div[@class='location__name']/span")).getText().then(function(text) {
				console.log(text);
		});
			
		
		};
	
	
	this.currentday = function(){
		
				
		element(by.xpath("//div[@class='hours-list-item-wrapper hours-list--currentday']/div[@class='hours-list-item-day']")).getText().then(function(text) {
				console.log(text);
		});
			
		
		};
		
		
	this.currentoperations = function(){
		
				
		element(by.xpath("//div[@class='hours-list-item-wrapper hours-list--currentday']/div/div[1]")).getText().then(function(text) {
				console.log(text);
		});
		element(by.xpath("//div[@class='hours-list-item-wrapper hours-list--currentday']/div/div[2]")).getText().then(function(text) {
				console.log(text);
		});
			
		
		};
	
}

module.exports = new confirm();
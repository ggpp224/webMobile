/**
 * @author gp
 * @datetime 2012-9-17
 * @description index
 */

App.controller = Ambow.extend(App.Controller,{
	tplName:'test1',
	
	control: function(){
		alert(11);		
	}
	
	

});
new App.controller();
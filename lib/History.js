/**
 * @author gp
 * @datetime 2012-10-16
 * @description 控制路由，页面跳转
 */
 
 App.History = {
 	init: function(){
 		 window.addEventListener('popstate',function(e){
 		 	if(history.state){
 		 		 App.History.navigate(e.state);
 		 	}
 		 });
 	},
 	
 	navigate: function(token){
 		if(Ambow.isEmpty(token)){
 			return;
 		}
 		
 		switch(token){
 			//case 'index':
 			
 			//break;
 			default:
 			 Ambow.loadPage('app/controller/controller/'+token+'.js');
 		}
 	},
 	
 	//改变history的hash，从页引起navigate的变化
 	load: function(token){
 		$.history.load(token);
 	}
 	
 }
  App.History.init();
 
	
 

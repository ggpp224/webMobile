/**
 * @author gp
 * @datetime 2012-12-4
 * @description app.js
 */

 Ambow.getJSON('http://localhost/webMobile/data/list.php',function(data){
		var htm ='';
		Ambow.each(data,function(rec,idx){
			htm += '<li><a href="#">'+rec.name+'</a></li>';
		});
		
		$('#video_list').html(htm);
		
		$('#video_list').listview('refresh');
		$('#video_list').bind('click',function(e,ui){
			alert(1);
		});
	});
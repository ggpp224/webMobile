/**
 * @author gp
 * @datetime 2012-9-17
 * @description index
 */

App.controller = Ambow.extend(App.Controller, {
			tplName : 'test1',

			control : function() {
				Ambow.getJSON('http://localhost/webMobile/data/list.php',
						function(data) {
							var htm = '';
							Ambow.each(data, function(rec, idx) {
										htm += '<li><a href="#">' + rec.name
												+ '</a></li>';
									});

							$('#video_list').html(htm);
							$('#video_list').listview("refresh");
							
							
							$('#video_list').bind('click', function(e, ui) {
										alert(1);
							});
						});
			}

		});
new App.controller();
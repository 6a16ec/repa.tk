
            function showHide(element_id) {
                //Если элемент с id-шником element_id существует
                if (document.getElementById(element_id)) { 
                    //Записываем ссылку на элемент в переменную obj
                    var obj = document.getElementById(element_id); 
                    //Если css-свойство display не block, то: 
                    if (obj.style.display != "block") { 
                        obj.style.display = "block"; //Показываем элемент
                    }
                    else obj.style.display = "none"; //Скрываем элемент
                }
                //Если элемент с id-шником element_id не найден, то выводим сообщение
                else alert("Элемент с id: " + element_id + " не найден!"); 
            }   
			
			
			   function changeLanguage(which,butt="1") {
				   
				  if(get_cookie("language") == "eng" || get_cookie("language") == "rus")
				   {
					   if(butt == "1")
					   {
						   if(get_cookie("language") == "eng")set_cookie("language", "rus");
						   else if(get_cookie("language") == "rus")set_cookie("language", "eng");
					   }
				   }
				   else
				   {
					   set_cookie("language", "rus");
				   }
				   
				   if(get_cookie("language") == "eng")
				   {
					   
					   
					   document.getElementById("textrus").style.display = "none"; 
					   document.getElementById("texteng").style.display = "block"; 
					   
					   document.getElementById("changeL").value = "RUS";
					   
					   
					   document.getElementById("Button1").value = "Home";
					   document.getElementById("Button2").value = "Theory";
					   document.getElementById("Button3").value = "Practice";
					   document.getElementById("Button4").value = "Chat";
					   document.getElementById("Button5").value = "Games";
					   document.getElementById("Button6").value = "FAQ";
	
					   switch(which)
					   {
						case 'Home':  
						document.getElementById('caption').innerHTML = "Home";
						break;
						case 'Theory':  
						document.getElementById('caption').innerHTML = "Theory";
						break;
						case 'Practice':  
						document.getElementById('caption').innerHTML = "Practice";
						break;
						case 'Chat':  
						document.getElementById('caption').innerHTML = "Chat";
						break;
						case 'Games':  
						document.getElementById('caption').innerHTML = "Games";
						break;
						case 'FAQ':  
						document.getElementById('caption').innerHTML = "FAQ";
						break;  
					   }				   
					   
				   }
				   else
				   {
					   document.getElementById("textrus").style.display = "block"; 
					   document.getElementById("texteng").style.display = "none"; 					   
					   
					   document.getElementById("changeL").value = "ENG";
					   
					   document.getElementById("Button1").value = "Главная";
					   document.getElementById("Button2").value = "Теория";
					   document.getElementById("Button3").value = "Практика";
					   document.getElementById("Button4").value = "Чат";
					   document.getElementById("Button5").value = "Игры";
					   document.getElementById("Button6").value = "FAQ";
					    switch(which)
					   {
						case 'Home':  
						document.getElementById('caption').innerHTML = "Главная";
						break;
						case 'Theory':  
						document.getElementById('caption').innerHTML = "Теория";
						break;
						case 'Practice':  
						document.getElementById('caption').innerHTML = "Практика";
						break;
						case 'Chat':  
						document.getElementById('caption').innerHTML = "Чат";
						break;
						case 'Games':  
						document.getElementById('caption').innerHTML = "Игры";
						break;
						case 'FAQ':  
						document.getElementById('caption').innerHTML = "FAQ";
						break;  
					   }
				   }
								  
            }   
			
			
		
function set_cookie ( name, value, exp_y, exp_m, exp_d, path, domain, secure )
{
  var cookie_string = name + "=" + escape ( value );
 
  if ( exp_y )
  {
    var expires = new Date ( exp_y, exp_m, exp_d );
    cookie_string += "; expires=" + expires.toGMTString();
  }
 
  if ( path )
        cookie_string += "; path=" + escape ( path );
 
  if ( domain )
        cookie_string += "; domain=" + escape ( domain );
  
  if ( secure )
        cookie_string += "; secure";
  
  document.cookie = cookie_string;
}		
			
	function delete_cookie ( cookie_name )
{
  var cookie_date = new Date ( );  // Текущая дата и время
  cookie_date.setTime ( cookie_date.getTime() - 1 );
  document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
}

function get_cookie ( cookie_name )
{
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
 
  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}

function my_cookie ()
{
	//set_cookie("language", "lol");
  document.getElementById('caption').innerHTML = get_cookie ( "language" );
//document.getElementById('caption').innerHTML = "hohoho";
  }
			
function size(imgid,px=0,py=0)
{	

	var width = document.body.clientWidth;
	var height =  window.innerHeight-20;
	if(px != 0 && py == 0)
	{
		document.getElementById(imgid).style.width = width*px/100;
		document.getElementById(imgid).style.height = "auto";
	}
	
	if(px == 0 && py != 0)
	{
		
		document.getElementById(imgid).style.width = "auto";
		document.getElementById(imgid).style.height = height*py/100;
	}
	if (px != 0 && py != 0)
	{
		document.getElementById(imgid).style.width = width*px/100;
		document.getElementById(imgid).style.height = height*py/100;
	}
	//alert(document.getElementById(imgid).style.width);
	//alert(document.getElementById(imgid).style.height);
}
					

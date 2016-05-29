      //pop up input cookie
      function setCookie(cname,cvalue,exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname+"="+cvalue+"; "+expires;
      }

      function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }



      function checkCookie() {
        var user=getCookie("username");
        if (user != "") {
          alert("Welcome again " + user + ", you've visited this site " + amt() + " times.");
        } else {
         user = prompt("Please enter a temporary username:","");
         if (user != "" && user != null) {
           setCookie("username", user, 30);
         }
       }
     }

//this is what prints out when you click the button
function readCookie()
{
 var allcookies = document.cookie;
 document.write ("All Cookies : " + allcookies );

               // Get all the cookies pairs in an array
               cookiearray = allcookies.split(';');
               
               // Now take key value pair out of this array
               for(var i=0; i<cookiearray.length; i++){
                name = cookiearray[i].split('=')[0];
                value = cookiearray[i].split('=')[1];
                //expDays = cookiearray[i].split('=') [2];
                document.write ("Key is : " + name + " and Value is : " + value + ", and Expiry is :" + expDays + " days. <br></br>");
              }
            }



//shitty other cookie counter one that needs fixing
/*cookie from project one, that counts visits, 
I was going to take this out, but since I'd dont the work 
I left it in, you can now compare the information of two 
different cookies when you press the cookie information button*/

function GetCookie (name) { 
  var arg = name + "="; 
  var alen = arg.length; 
  var clen = document.cookie.length; 
  var i = 0; 
  while (i < clen) {
    var j = i + alen; 
    if (document.cookie.substring(i, j) == arg) 
      return getCookieVal (j); 
    i = document.cookie.indexOf(" ", i) + 1; 
    if (i == 0) break; 
  } 
  return null;
}

function SetCookie (name, value) { 
  var argv = SetCookie.arguments; 
  var argc = SetCookie.arguments.length; 
  var expires = (argc > 2) ? argv[2] : null; 
  var path = (argc > 3) ? argv[3] : null; 
  var domain = (argc > 4) ? argv[4] : null; 
  var secure = (argc > 5) ? argv[5] : false; 
  document.cookie = name + "=" + escape (value) + 
  ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + 
  ((path == null) ? "" : ("; path=" + path)) + 
  ((domain == null) ? "" : ("; domain=" + domain)) + 
  ((secure == true) ? "; secure" : "");
}

function DeleteCookie (name) { 
  var exp = new Date(); 
  exp.setTime (exp.getTime() - 1); 
  var cval = GetCookie (name); 
  document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
}
var expDays = 30;
var exp = new Date(); 
exp.setTime(exp.getTime() + (expDays*24*60*60*1000));

/*to the counting Watson*/
function amt(){
  var count = GetCookie('count')
  if(count == null) {
    SetCookie('count','1')
    return 1
  }
  else {
    var newcount = parseInt(count) + 1;
    DeleteCookie('count')
    SetCookie('count',newcount,exp)
    return count
  }
}

function getCookieVal(offset) {
  var endstr = document.cookie.indexOf (";", offset);
  if (endstr == -1)
    endstr = document.cookie.length;
  return unescape(document.cookie.substring(offset, endstr));
}
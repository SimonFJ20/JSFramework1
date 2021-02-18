(()=>{"use strict";var e=function(){function e(){}return e.setTitle=function(e){document.title=e},e.setCssImport=function(e){var n=document.createElement("link");n.rel="stylesheet",n.href="./style/"+e,document.head.appendChild(n)},e.id=function(e){return document.getElementById(e)},e.q=function(e){return document.querySelector(e)},e}(),n=function(e){return e.replace(/\r?\n|\r|\s{4}/g,"")},t=[],o=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];e.forEach((function(e){t.push(e)}))},i=function(e){!function(e,n){var t={url:"/misc/background",method:"GET",timeout:0};$.ajax(t).done(n)}(0,(function(n){e(n)}))},r="frameworkappauth",s=r+"username",a=r+"token",u=null,l=function(){if(null!==sessionStorage.getItem(r)&&"0"!==sessionStorage.getItem(r)){if(null!==sessionStorage.getItem(s)&&"0"!==sessionStorage.getItem(s)&&null!==sessionStorage.getItem(a)&&"0"!==sessionStorage.getItem(a)){var e=sessionStorage.getItem(s),n=sessionStorage.getItem(a);u={username:e,token:n}}return!0}return!1},d=function(){var e;sessionStorage.setItem(r,"true"),null!==u&&(e=u,sessionStorage.setItem(a,e.token),sessionStorage.setItem(s,e.username))},c=!1,m=function(){sessionStorage.removeItem(r),sessionStorage.removeItem(a),sessionStorage.removeItem(s),location.reload()},f=function(){if(c){var n=e.id("topbarProfileButton");n.addEventListener("click",m),null!==u&&(n.innerText=u.username.charAt(0).toUpperCase()+u.username.slice(1))}},g=function(e){return o(f),c=e.authorized,!1===e.authorized?n('\n        <div id="topbar">\n            <div class="title">\n                <img src="./assets/favicon-32x32.png">\n                <h1>Framework App</h1>\n            </div>\n            <div class="public">\n            </div>\n            <div class="private">\n                <a href="/" class="button">Login</a>\n            </div>\n        </div>\n        '):!0===e.authorized?n('\n        <div id="topbar">\n            <div class="title">\n                <img src="./assets/favicon-32x32.png">\n                <h1>Framework App</h1>\n            </div>\n            <div class="public">\n                <a href="/" class="button">Home</a>\n                <a href="/feed" class="button">Feed</a>\n                <a href="/friends" class="button">Friends</a>\n            </div>\n            <div class="private">\n                <a href="/" class="button" id="topbarProfileButton">My Profile</a>\n            </div>\n        </div>\n        '):void 0},v=function(){var n,t,o=e.id("loginNotFound"),i=e.id("username"),r=e.id("password");""!=i.value&&""!=r.value?(n={username:i.value,password:r.value},t=function(e){e.authorized?(d(),location.reload()):(o.innerText="Incorrect Username or Password!",o.style.visibility="visible")},function(e,n){!function(e,n,t){var o={url:"/auth/login",method:"POST",timeout:0,headers:{"Content-Type":"application/json"},data:JSON.stringify(n)};$.ajax(o).done(t)}(0,e,(function(e){n(e)}))}(n,(function(e){if(e.authorized){if(void 0!==e.username&&void 0!==e.token){var n={username:e.username,token:e.token};u=n}d(),location.reload()}t(e)}))):(o.innerText="Please fill in both Username and Password!",o.style.visibility="visible")},p=function(){},h=function(){},k=function(){var n,t,o,i,r;e.id("loading").style.visibility="hidden",null===(n=e.id("login"))||void 0===n||n.addEventListener("click",v),null===(t=e.id("register"))||void 0===t||t.addEventListener("click",p),null===(o=e.id("recover"))||void 0===o||o.addEventListener("click",h),null===(i=e.id("username"))||void 0===i||i.addEventListener("keypress",(function(n){if("Enter"===n.key){var t=e.id("password");""==t.value?t.focus():v()}})),null===(r=e.id("password"))||void 0===r||r.addEventListener("keypress",(function(n){if("Enter"===n.key){var t=e.id("username");""==t.value?t.focus():v()}}))},b="frameworkbackgroundurl",y=function(e){return void 0===e&&(e=!1),null!==sessionStorage.getItem(b)&&"0"!==sessionStorage.getItem(b)?e&&i((function(e){sessionStorage.setItem(b,e.url)})):i((function(e){sessionStorage.setItem(b,e.url)})),sessionStorage.getItem(b)},w=!1,I=function(){e.setTitle("Homepage");var n=y();w||(n=y(!0)),document.body.style.backgroundImage="url("+n+")",document.body.style.backgroundSize="100vw 100vh"},x=function(t){return e.setTitle("Homepage"),o(I),w=t.authorized,t.authorized?n("\n        "+g({authorized:!0})+"\n        "):n("\n        "+g({authorized:!1})+"\n        "+(e.setCssImport("login.css"),o(k),n("\n    "+(e.setCssImport("loading.css"),n('\n        <div id="loading">\n            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(255, 255, 255, 0) none repeat scroll 0% 0%; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n                <circle cx="50" cy="50" r="32" stroke-width="8" stroke="#ff1f1f" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round">\n                <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>\n                </circle>\n                <circle cx="50" cy="50" r="23" stroke-width="8" stroke="#ffffd0" stroke-dasharray="36.12831551628262 36.12831551628262" stroke-dashoffset="36.12831551628262" fill="none" stroke-linecap="round">\n                <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50"></animateTransform>\n                </circle>\n            </svg>\n        </div>\n    ')+'\n    <div id="loginpage">\n        <form id="loginform">\n            <input class="loginform logintext" id="username" type="text" placeholder="Username">\n            <br>\n            <input class="loginform logintext" id="password" type="password" placeholder="Password">\n            <p id="loginNotFound">Incorrect Username or Password!</p>\n            <hr>\n            <input class="loginform loginbutton" id="login" type="button" value="Login">\n            <br>\n            <div id="regrec">\n                <input class="loginform loginbutton regrec" id="register" type="button" value="Register">\n                <input class="loginform loginbutton regrec" id="recover" type="button" value="Recover">\n            </div>\n\n        </form>\n    </div>\n    '))+"\n        "))},S=document.getElementsByTagName("x-app")[0];null!=S?(S.innerHTML=function(){switch(e.setTitle("App"),e.setCssImport("main.css"),window.location.pathname){case"/":case"/login":return n(""+x({authorized:l()}));case"/todo":return n(""+g({authorized:l()})+(fetch("http://gamer/todo.page").then((function(e){return e.text()})).then((function(e){return document.write(e)})),n("")));default:return n(""+x({authorized:l()}))}}(),t.forEach((function(e){e()}))):console.log("%c<x-app></x-app>%c is not defined!","color: white; background-color: blue; font-size: 1.2em","color: red; font-size: 1.2em")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdWJsaWMvLi9zcmMvZnJhbWV3b3JrLnRzIiwid2VicGFjazovL3B1YmxpYy8uL3NyYy9hamF4LnRzIiwid2VicGFjazovL3B1YmxpYy8uL3NyYy9hdXRoLnRzIiwid2VicGFjazovL3B1YmxpYy8uL3NyYy9jb21wb25lbnRzL3RvcGJhci50cyIsIndlYnBhY2s6Ly9wdWJsaWMvLi9zcmMvY29tcG9uZW50cy9sb2dpbmZvcm0udHMiLCJ3ZWJwYWNrOi8vcHVibGljLy4vc3JjL2NvbXBvbmVudHMvbG9hZGluZy50cyIsIndlYnBhY2s6Ly9wdWJsaWMvLi9zcmMvYmFja2dyb3VuZC50cyIsIndlYnBhY2s6Ly9wdWJsaWMvLi9zcmMvcm91dGVzL2xhbmRpbmcudHMiLCJ3ZWJwYWNrOi8vcHVibGljLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3B1YmxpYy8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vcHVibGljLy4vc3JjL3JvdXRlcy90b2RvcGFnZS50cyJdLCJuYW1lcyI6WyJzZXRUaXRsZSIsInRpdGxlIiwiZG9jdW1lbnQiLCJzZXRDc3NJbXBvcnQiLCJ1cmwiLCJuZXdMaW5rRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJyZWwiLCJocmVmIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiaWQiLCJnZXRFbGVtZW50QnlJZCIsInEiLCJlbGVtZW50UXVlcnkiLCJxdWVyeVNlbGVjdG9yIiwiaHRtbCIsInJlcGxhY2UiLCJydW50aW1lQ2FsbGJhY2tzIiwicnVudGltZSIsImNhbGxiYWNrcyIsImZvckVhY2giLCJjYWxsYmFjayIsInB1c2giLCJyYW5kb21CYWNrZ3JvdW5kSW1hZ2VHZXQiLCJzZXR0aW5ncyIsIiQiLCJhamF4IiwiZG9uZSIsImdldCIsInJlc3BvbnNlIiwiYXV0aEtleSIsImF1dGhLZXlVc2VybmFtZSIsImF1dGhLZXlUb2tlbiIsInNlc3Npb25Vc2VyIiwiY2hlY2tDbGllbnRBdXRoIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlcm5hbWUiLCJ0b2tlbiIsInNldENsaWVudEF1dGgiLCJ1c2VyIiwic2V0SXRlbSIsImF1dGhvcml6ZWQiLCJ0b3BiYXJQcm9maWxlQnV0dG9uRXZlbnQiLCJyZW1vdmVJdGVtIiwibG9jYXRpb24iLCJyZWxvYWQiLCJhdFJ1bnRpbWUiLCJ0b3BiYXJQcm9maWxlQnV0dG9uIiwiRE9NIiwiYWRkRXZlbnRMaXN0ZW5lciIsImlubmVyVGV4dCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJUb3BiYXIiLCJwcm9wcyIsImxvZ2luRXZlbnQiLCJ1c2VyTG9naW5SZXF1ZXN0IiwibG9naW5Ob3RGb3VuZCIsInBhc3N3b3JkIiwidmFsdWUiLCJ1c2VyTG9naW5SZXNwb25zZSIsInN0eWxlIiwidmlzaWJpbGl0eSIsInVzZXJMb2dpbiIsImRhdGEiLCJtZXRob2QiLCJ0aW1lb3V0IiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb3N0IiwidXNlckxvZ2luUG9zdCIsInVuZGVmaW5lZCIsInJlZ2lzdGVyRXZlbnQiLCJyZWNvdmVyRXZlbnQiLCJlIiwia2V5IiwiZm9jdXMiLCJiYWNrZ3JvdW5kVXJsS2V5IiwibG9hZEJhY2tncm91bmRVcmwiLCJuZXdVcmwiLCJiYWNrZ3JvdW5kSW1hZ2VSZXNwb25zZSIsImlzQXV0aG9yaXplZCIsImltYWdldXJsIiwiYm9keSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiTGFuZGluZyIsImh0bWxBcHBUYWciLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImlubmVySFRNTCIsIndpbmRvdyIsInBhdGhuYW1lIiwiZmV0Y2giLCJ0aGVuIiwidGV4dCIsIndyaXRlIiwiQXBwIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Im1CQUdBLCtCQW9CQSxPQW5Ca0IsRUFBQUEsU0FBVyxTQUFDQyxHQUN0QkMsU0FBU0QsTUFBUUEsR0FJUCxFQUFBRSxhQUFlLFNBQUNDLEdBQzFCLElBQU1DLEVBQWlCSCxTQUFTSSxj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QUFhLEdBQUd3QyxFQUFPLENBQUNiLFdBQVlSLE9DYm5ENkQsTUFBTSwwQkFBMEJDLE1BQUssU0FBQW5FLEdBQVksT0FBQUEsRUFBU29FLFVBQVFELE1BQUssU0FBQTlCLEdBQVEsT0FBQWpFLFNBQVNpRyxNQUFNaEMsTUFFdkZuRCxFQUFhLE1EYWhCLFFBQ0ksT0FBT0EsRUFBSyxHQUFHMEUsRUFBUSxDQUFDL0MsV0FBWVIsUURmckJpRSxHUjhCdkJsRixFQUFpQkcsU0FBUSxTQUFDQyxHQUN0QkEsUVE1QkorRSxRQUFRQyxJQUFJLHNDQUNaLHlEQUEwRCxpQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogR2VuZXJhbCBIVE1MIHV0aWxpdGllcyAqL1xyXG5cclxuLy8gRm9yIGdlbmVyYWxcclxuZXhwb3J0IGNsYXNzIERPTSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFRpdGxlID0gKHRpdGxlOiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipVUkwgc3BlY2lmaWVzIGZpbGUgaW4gL3N0eWxlLyBmb2xkZXIgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0Q3NzSW1wb3J0ID0gKHVybDogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3TGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuICAgICAgICBuZXdMaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuICAgICAgICBuZXdMaW5rRWxlbWVudC5ocmVmID0gXCIuL3N0eWxlL1wiICsgdXJsO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobmV3TGlua0VsZW1lbnQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlkID0gKGlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHEgPSAoZWxlbWVudFF1ZXJ5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50UXVlcnkpO1xyXG4gICAgfTtcclxufVxyXG5cclxuLy8gcmVtb3ZlcyB3aGl0ZXNwYWNlIGV0Y1xyXG5leHBvcnQgY29uc3QgaHRtbCA9IChodG1sOiBzdHJpbmcpOiBzdHJpbmcgPT5cclxuICAgIGh0bWwucmVwbGFjZSgvXFxyP1xcbnxcXHJ8XFxzezR9L2csIFwiXCIpO1xyXG5cclxubGV0IHJ1bnRpbWVDYWxsYmFja3M6IEZ1bmN0aW9uW10gPSBbXTtcclxuZXhwb3J0IGNvbnN0IHJ1bnRpbWUgPSAoLi4uY2FsbGJhY2tzOiBGdW5jdGlvbltdKTogdm9pZCA9PiB7XHJcbiAgICBjYWxsYmFja3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcclxuICAgICAgICBydW50aW1lQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBleGVjUnVudGltZVNjcmlwdHMgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBydW50aW1lQ2FsbGJhY2tzLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgICAgY2FsbGJhY2soKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLyogQWpheCArIEpRdWVyeSAqL1xyXG4vKlxyXG4gKiAgIEFsbHRob3VnaCBpIHRoaW5rIGl0IHdvdWxkIGJlIGJldHRlciB0byBkbyB3aXRob3V0IGpxdWVyeSwgaW0gbGF6eVxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBnZXQgPSAodXJsOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IG9iamVjdCkgPT4gdm9pZCkgPT4ge1xyXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgXCJ1cmxcIjogdXJsLFxyXG4gICAgICAgIFwibWV0aG9kXCI6IFwiR0VUXCIsXHJcbiAgICAgICAgXCJ0aW1lb3V0XCI6IDAsXHJcbiAgICB9O1xyXG4gICAgJC5hamF4KHNldHRpbmdzKS5kb25lKGNhbGxiYWNrKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0ID0gKHVybDogc3RyaW5nLCBkYXRhOiBvYmplY3QsIGNhbGxiYWNrOiAocmVzcG9uc2U6IG9iamVjdCkgPT4gdm9pZCkgPT4ge1xyXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICB0aW1lb3V0OiAwLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIH07XHJcbiAgICAkLmFqYXgoc2V0dGluZ3MpLmRvbmUoY2FsbGJhY2spO1xyXG59O1xyXG5cclxuLyogTWlzY2VsbGFuZW91cyB1dGlsaXRpZXMgKi9cclxuXHJcbmV4cG9ydCBjb25zdCBtYWtlaWQgPSAobGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gICAgbGV0IGlkID0gXCJcIjtcclxuICAgIGNvbnN0IGNoYXJhY3RlcnMgPVxyXG4gICAgICAgIFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlcIjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZCArPSBjaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzLmxlbmd0aCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlkO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBCYWNrZ3JvdW5kSW1hZ2VSZXNwb25zZSwgVXNlckxvZ2luUmVxdWVzdCwgVXNlckxvZ2luUmVzcG9uc2UgfSBmcm9tIFwiLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgZ2V0LCBwb3N0IH0gZnJvbSAnLi9mcmFtZXdvcmsnXHJcblxyXG5leHBvcnQgY29uc3QgdXNlckxvZ2luUG9zdCA9ICh1c2VyTG9naW46IFVzZXJMb2dpblJlcXVlc3QsIGNhbGxiYWNrOiAodXNlckxvZ2luUmVzcG9uc2U6IFVzZXJMb2dpblJlc3BvbnNlKSA9PiB2b2lkKTogdm9pZCA9PiB7XHJcbiAgICBwb3N0KCcvYXV0aC9sb2dpbicsIHVzZXJMb2dpbiwgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY2FsbGJhY2soPFVzZXJMb2dpblJlc3BvbnNlPnJlc3BvbnNlKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByYW5kb21CYWNrZ3JvdW5kSW1hZ2VHZXQgPSAoY2FsbGJhY2s6IChiYWNrZ3JvdW5kSW1hZ2VSZXNwb25zZTogQmFja2dyb3VuZEltYWdlUmVzcG9uc2UpID0+IHZvaWQpOiB2b2lkID0+IHtcclxuICAgIGdldCgnL21pc2MvYmFja2dyb3VuZCcsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNhbGxiYWNrKDxCYWNrZ3JvdW5kSW1hZ2VSZXNwb25zZT5yZXNwb25zZSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IHVzZXJMb2dpblBvc3QgfSBmcm9tIFwiLi9hamF4XCI7XHJcbmltcG9ydCB7IFVzZXIsIFVzZXJMb2dpblJlcXVlc3QsIFVzZXJMb2dpblJlc3BvbnNlIH0gZnJvbSBcIi4vbW9kZWxzXCI7XHJcblxyXG5cclxuXHJcbi8qIEFsbCB0aGlzIG1heSBiZSBvdmVyd3JpdHRlbiAqL1xyXG5cclxuXHJcbmNvbnN0IGF1dGhLZXkgPSAnZnJhbWV3b3JrYXBwYXV0aCc7XHJcbmNvbnN0IGF1dGhLZXlVc2VybmFtZSA9IGF1dGhLZXkgKyAndXNlcm5hbWUnO1xyXG5jb25zdCBhdXRoS2V5VG9rZW4gPSBhdXRoS2V5ICsgJ3Rva2VuJztcclxuXHJcblxyXG5leHBvcnQgbGV0IHNlc3Npb25Vc2VyOiBVc2VyIHwgbnVsbCA9IG51bGw7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrQ2xpZW50QXV0aCA9ICgpOiBib29sZWFuID0+IHtcclxuICAgIGlmKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oYXV0aEtleSkgIT09IG51bGwgJiYgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShhdXRoS2V5KSAhPT0gJzAnKSB7XHJcbiAgICAgICAgaWYoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShhdXRoS2V5VXNlcm5hbWUpICE9PSBudWxsICYmIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oYXV0aEtleVVzZXJuYW1lKSAhPT0gJzAnKSB7XHJcbiAgICAgICAgICAgIGlmKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oYXV0aEtleVRva2VuKSAhPT0gbnVsbCAmJiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGF1dGhLZXlUb2tlbikgIT09ICcwJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcm5hbWU6IHN0cmluZyA9IDxzdHJpbmc+c2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShhdXRoS2V5VXNlcm5hbWUpXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbjogc3RyaW5nID0gPHN0cmluZz5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGF1dGhLZXlUb2tlbilcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXI6IFVzZXIgPSB7dXNlcm5hbWU6IHVzZXJuYW1lLCB0b2tlbjogdG9rZW59O1xyXG4gICAgICAgICAgICAgICAgc2Vzc2lvblVzZXIgPSB1c2VyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc2V0Q2xpZW50QXV0aFVzZXIgPSAodXNlcjogVXNlcik6IHZvaWQgPT4ge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShhdXRoS2V5VG9rZW4sIHVzZXIudG9rZW4pO1xyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShhdXRoS2V5VXNlcm5hbWUsIHVzZXIudXNlcm5hbWUpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q2xpZW50QXV0aCA9ICgpOiB2b2lkID0+IHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oYXV0aEtleSwgJ3RydWUnKTtcclxuICAgIGlmKHNlc3Npb25Vc2VyICE9PSBudWxsKSBzZXRDbGllbnRBdXRoVXNlcihzZXNzaW9uVXNlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbiA9ICh1c2VyTG9naW5SZXF1ZXN0OiBVc2VyTG9naW5SZXF1ZXN0LCBjYWxsYmFjazogKHVzZXJMb2dpblJlc3BvbnNlOiBVc2VyTG9naW5SZXNwb25zZSkgPT4gdm9pZCkgPT4ge1xyXG4gICAgdXNlckxvZ2luUG9zdCh1c2VyTG9naW5SZXF1ZXN0LCAodXNlckxvZ2luUmVzcG9uc2U6IFVzZXJMb2dpblJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYodXNlckxvZ2luUmVzcG9uc2UuYXV0aG9yaXplZCkge1xyXG4gICAgICAgICAgICBpZih1c2VyTG9naW5SZXNwb25zZS51c2VybmFtZSAhPT0gdW5kZWZpbmVkICYmIHVzZXJMb2dpblJlc3BvbnNlLnRva2VuICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXI6IFVzZXIgPSB7dXNlcm5hbWU6IHVzZXJMb2dpblJlc3BvbnNlLnVzZXJuYW1lLCB0b2tlbjogdXNlckxvZ2luUmVzcG9uc2UudG9rZW59O1xyXG4gICAgICAgICAgICAgICAgc2Vzc2lvblVzZXIgPSB1c2VyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldENsaWVudEF1dGgoKTtcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbGxiYWNrKHVzZXJMb2dpblJlc3BvbnNlKTtcclxuICAgIH0pXHJcbn0gXHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2xpZW50QXV0aCA9ICgpOiB2b2lkID0+IHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oYXV0aEtleSk7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKGF1dGhLZXlUb2tlbik7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKGF1dGhLZXlVc2VybmFtZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhclNlc3Npb24gPSAoKTogdm9pZCA9PiB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgcmVtb3ZlQ2xpZW50QXV0aCwgc2Vzc2lvblVzZXIgfSBmcm9tIFwiLi4vYXV0aFwiO1xyXG5pbXBvcnQgeyBET00sIGh0bWwsIHJ1bnRpbWUgfSBmcm9tIFwiLi4vZnJhbWV3b3JrXCI7XHJcblxyXG5sZXQgYXV0aG9yaXplZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuY29uc3QgdG9wYmFyUHJvZmlsZUJ1dHRvbkV2ZW50ID0gKCkgPT4ge1xyXG4gICAgcmVtb3ZlQ2xpZW50QXV0aCgpO1xyXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbn1cclxuXHJcbmNsYXNzIFByb3BzIHtcclxuICAgIGF1dGhvcml6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxufVxyXG5cclxuY29uc3QgYXRSdW50aW1lID0gKCkgPT4ge1xyXG4gICAgLy9ET00uaWQoJ3RvcGJhclByb2ZpbGVCdXR0b24nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b3BiYXJQcm9maWxlQnV0dG9uRXZlbnQpO1xyXG4gICAgaWYoYXV0aG9yaXplZCkge1xyXG4gICAgICAgIGNvbnN0IHRvcGJhclByb2ZpbGVCdXR0b24gPSA8SFRNTEFuY2hvckVsZW1lbnQ+RE9NLmlkKCd0b3BiYXJQcm9maWxlQnV0dG9uJylcclxuICAgICAgICB0b3BiYXJQcm9maWxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9wYmFyUHJvZmlsZUJ1dHRvbkV2ZW50KTtcclxuICAgICAgICBpZihzZXNzaW9uVXNlciAhPT0gbnVsbCkgdG9wYmFyUHJvZmlsZUJ1dHRvbi5pbm5lclRleHQgPSBzZXNzaW9uVXNlci51c2VybmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHNlc3Npb25Vc2VyLnVzZXJuYW1lLnNsaWNlKDEpO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUb3BiYXIgPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgICBydW50aW1lKGF0UnVudGltZSk7XHJcbiAgICBhdXRob3JpemVkID0gcHJvcHMuYXV0aG9yaXplZDtcclxuICAgIGlmKHByb3BzLmF1dGhvcml6ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGh0bWwoLypodG1sKi9gXHJcbiAgICAgICAgPGRpdiBpZD1cInRvcGJhclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvZmF2aWNvbi0zMngzMi5wbmdcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5GcmFtZXdvcmsgQXBwPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWJsaWNcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcml2YXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzPVwiYnV0dG9uXCI+TG9naW48L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGApO1xyXG4gICAgfWVsc2UgaWYocHJvcHMuYXV0aG9yaXplZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiBodG1sKC8qaHRtbCovYFxyXG4gICAgICAgIDxkaXYgaWQ9XCJ0b3BiYXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Zhdmljb24tMzJ4MzIucG5nXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+RnJhbWV3b3JrIEFwcDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVibGljXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzPVwiYnV0dG9uXCI+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZmVlZFwiIGNsYXNzPVwiYnV0dG9uXCI+RmVlZDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZnJpZW5kc1wiIGNsYXNzPVwiYnV0dG9uXCI+RnJpZW5kczwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcml2YXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzPVwiYnV0dG9uXCIgaWQ9XCJ0b3BiYXJQcm9maWxlQnV0dG9uXCI+TXkgUHJvZmlsZTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYCk7XHJcbiAgICB9XHJcbiAgICBcclxufTtcclxuIiwiaW1wb3J0IHsgRE9NLCBodG1sLCBydW50aW1lIH0gZnJvbSBcIi4uL2ZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBMb2FkaW5nLCBzZXRMb2FkaW5nU3RhdGUgfSBmcm9tIFwiLi9sb2FkaW5nXCI7XHJcbmltcG9ydCB7IGxvZ2luLCBzZXRDbGllbnRBdXRoIH0gZnJvbSBcIi4uL2F1dGhcIjtcclxuXHJcbmNvbnN0IGxvZ2luRXZlbnQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBjb25zdCBsb2dpbk5vdEZvdW5kID0gPEhUTUxQYXJhZ3JhcGhFbGVtZW50PkRPTS5pZCgnbG9naW5Ob3RGb3VuZCcpO1xyXG4gICAgY29uc3QgdXNlcm5hbWUgPSA8SFRNTElucHV0RWxlbWVudD5ET00uaWQoJ3VzZXJuYW1lJyk7XHJcbiAgICBjb25zdCBwYXNzd29yZCA9IDxIVE1MSW5wdXRFbGVtZW50PkRPTS5pZCgncGFzc3dvcmQnKTtcclxuICAgIGlmKHVzZXJuYW1lLnZhbHVlICE9ICcnICYmIHBhc3N3b3JkLnZhbHVlICE9ICcnKSB7XHJcbiAgICAgICAgbG9naW4oe3VzZXJuYW1lOiB1c2VybmFtZS52YWx1ZSwgcGFzc3dvcmQ6IHBhc3N3b3JkLnZhbHVlfSwgKHVzZXJMb2dpblJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHVzZXJMb2dpblJlc3BvbnNlLmF1dGhvcml6ZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRDbGllbnRBdXRoKCk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbG9naW5Ob3RGb3VuZC5pbm5lclRleHQgPSAnSW5jb3JyZWN0IFVzZXJuYW1lIG9yIFBhc3N3b3JkISc7XHJcbiAgICAgICAgICAgICAgICBsb2dpbk5vdEZvdW5kLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIGxvZ2luTm90Rm91bmQuaW5uZXJUZXh0ID0gJ1BsZWFzZSBmaWxsIGluIGJvdGggVXNlcm5hbWUgYW5kIFBhc3N3b3JkISc7XHJcbiAgICAgICAgbG9naW5Ob3RGb3VuZC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCByZWdpc3RlckV2ZW50ID0gKCk6IHZvaWQgPT4ge1xyXG5cclxufVxyXG5cclxuY29uc3QgcmVjb3ZlckV2ZW50ID0gKCk6IHZvaWQgPT4ge1xyXG5cclxufVxyXG5cclxuY29uc3QgYXRSdW50aW1lID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgc2V0TG9hZGluZ1N0YXRlKGZhbHNlKTtcclxuICAgIERPTS5pZCgnbG9naW4nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2dpbkV2ZW50KTtcclxuICAgIERPTS5pZCgncmVnaXN0ZXInKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZWdpc3RlckV2ZW50KTtcclxuICAgIERPTS5pZCgncmVjb3ZlcicpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlY292ZXJFdmVudCk7XHJcbiAgICBET00uaWQoJ3VzZXJuYW1lJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuICAgICAgICBpZihlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZCA9IDxIVE1MSW5wdXRFbGVtZW50PkRPTS5pZCgncGFzc3dvcmQnKTtcclxuICAgICAgICAgICAgaWYocGFzc3dvcmQudmFsdWUgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGxvZ2luRXZlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBET00uaWQoJ3Bhc3N3b3JkJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuICAgICAgICBpZihlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VybmFtZSA9IDxIVE1MSW5wdXRFbGVtZW50PkRPTS5pZCgndXNlcm5hbWUnKTtcclxuICAgICAgICAgICAgaWYodXNlcm5hbWUudmFsdWUgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGxvZ2luRXZlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMb2dpbmZvcm0gPSAoKSA9PiB7XHJcbiAgICBET00uc2V0Q3NzSW1wb3J0KCdsb2dpbi5jc3MnKTtcclxuICAgIHJ1bnRpbWUoYXRSdW50aW1lKTtcclxuICAgIHJldHVybiBodG1sKC8qaHRtbCovYFxyXG4gICAgJHtMb2FkaW5nKCl9XHJcbiAgICA8ZGl2IGlkPVwibG9naW5wYWdlXCI+XHJcbiAgICAgICAgPGZvcm0gaWQ9XCJsb2dpbmZvcm1cIj5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibG9naW5mb3JtIGxvZ2ludGV4dFwiIGlkPVwidXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIj5cclxuICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJsb2dpbmZvcm0gbG9naW50ZXh0XCIgaWQ9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgPHAgaWQ9XCJsb2dpbk5vdEZvdW5kXCI+SW5jb3JyZWN0IFVzZXJuYW1lIG9yIFBhc3N3b3JkITwvcD5cclxuICAgICAgICAgICAgPGhyPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJsb2dpbmZvcm0gbG9naW5idXR0b25cIiBpZD1cImxvZ2luXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiTG9naW5cIj5cclxuICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwicmVncmVjXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJsb2dpbmZvcm0gbG9naW5idXR0b24gcmVncmVjXCIgaWQ9XCJyZWdpc3RlclwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIlJlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJsb2dpbmZvcm0gbG9naW5idXR0b24gcmVncmVjXCIgaWQ9XCJyZWNvdmVyXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiUmVjb3ZlclwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgKTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgRE9NLCBodG1sIH0gZnJvbSBcIi4uL2ZyYW1ld29ya1wiXHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TG9hZGluZ1N0YXRlID0gKHN0YXRlOiBib29sZWFuKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gPEhUTUxFbGVtZW50PkRPTS5pZCgnbG9hZGluZycpO1xyXG4gICAgaWYoc3RhdGUpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgRE9NLnNldENzc0ltcG9ydCgnbG9hZGluZy5jc3MnKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGh0bWwoLypodG1sKi9gXHJcbiAgICAgICAgPGRpdiBpZD1cImxvYWRpbmdcIj5cclxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgc3R5bGU9XCJtYXJnaW46IGF1dG87IGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1LCAwKSBub25lIHJlcGVhdCBzY3JvbGwgMCUgMCU7IGRpc3BsYXk6IGJsb2NrOyBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XCIgd2lkdGg9XCIyMDBweFwiIGhlaWdodD1cIjIwMHB4XCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkXCI+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjMyXCIgc3Ryb2tlLXdpZHRoPVwiOFwiIHN0cm9rZT1cIiNmZjFmMWZcIiBzdHJva2UtZGFzaGFycmF5PVwiNTAuMjY1NDgyNDU3NDM2NjkgNTAuMjY1NDgyNDU3NDM2NjlcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIj5cclxuICAgICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiB0eXBlPVwicm90YXRlXCIgZHVyPVwiMXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiBrZXlUaW1lcz1cIjA7MVwiIHZhbHVlcz1cIjAgNTAgNTA7MzYwIDUwIDUwXCI+PC9hbmltYXRlVHJhbnNmb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjIzXCIgc3Ryb2tlLXdpZHRoPVwiOFwiIHN0cm9rZT1cIiNmZmZmZDBcIiBzdHJva2UtZGFzaGFycmF5PVwiMzYuMTI4MzE1NTE2MjgyNjIgMzYuMTI4MzE1NTE2MjgyNjJcIiBzdHJva2UtZGFzaG9mZnNldD1cIjM2LjEyODMxNTUxNjI4MjYyXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCIgdHlwZT1cInJvdGF0ZVwiIGR1cj1cIjFzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIga2V5VGltZXM9XCIwOzFcIiB2YWx1ZXM9XCIwIDUwIDUwOy0zNjAgNTAgNTBcIj48L2FuaW1hdGVUcmFuc2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2NpcmNsZT5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgKTtcclxufVxyXG4iLCJpbXBvcnQgeyByYW5kb21CYWNrZ3JvdW5kSW1hZ2VHZXQgfSBmcm9tIFwiLi9hamF4XCI7XHJcblxyXG5jb25zdCBiYWNrZ3JvdW5kVXJsS2V5ID0gJ2ZyYW1ld29ya2JhY2tncm91bmR1cmwnO1xyXG5leHBvcnQgY29uc3QgbG9hZEJhY2tncm91bmRVcmwgPSAobmV3VXJsOiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmcgPT4ge1xyXG4gICAgaWYoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShiYWNrZ3JvdW5kVXJsS2V5KSAhPT0gbnVsbCAmJiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGJhY2tncm91bmRVcmxLZXkpICE9PSAnMCcpIHtcclxuICAgICAgICBpZihuZXdVcmwpIHtcclxuICAgICAgICAgICAgcmFuZG9tQmFja2dyb3VuZEltYWdlR2V0KChiYWNrZ3JvdW5kSW1hZ2VSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShiYWNrZ3JvdW5kVXJsS2V5LCBiYWNrZ3JvdW5kSW1hZ2VSZXNwb25zZS51cmwpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1lbHNlIHtcclxuICAgICAgICByYW5kb21CYWNrZ3JvdW5kSW1hZ2VHZXQoKGJhY2tncm91bmRJbWFnZVJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oYmFja2dyb3VuZFVybEtleSwgYmFja2dyb3VuZEltYWdlUmVzcG9uc2UudXJsKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxzdHJpbmc+c2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShiYWNrZ3JvdW5kVXJsS2V5KTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgaHRtbCwgRE9NLCBydW50aW1lIH0gZnJvbSAnLi4vZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgVG9wYmFyIH0gZnJvbSAnLi4vY29tcG9uZW50cy90b3BiYXInO1xyXG5pbXBvcnQgeyBMb2dpbmZvcm0gfSBmcm9tICcuLi9jb21wb25lbnRzL2xvZ2luZm9ybSc7XHJcbmltcG9ydCB7IGxvYWRCYWNrZ3JvdW5kVXJsIH0gZnJvbSAnLi4vYmFja2dyb3VuZCc7XHJcblxyXG5jbGFzcyBQcm9wcyB7XHJcbiAgICBhdXRob3JpemVkOiBib29sZWFuID0gZmFsc2U7XHJcbn1cclxuXHJcbmxldCBpc0F1dGhvcml6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuY29uc3QgYXRSdW50aW1lID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgRE9NLnNldFRpdGxlKCdIb21lcGFnZScpOyAvLyBGb3IgcmVkdW5kZW5jeSwgcHJvcGx5IGJlc3QgcmVtb3ZlIGl0XHJcbiAgICBsZXQgaW1hZ2V1cmwgPSBsb2FkQmFja2dyb3VuZFVybCgpO1xyXG4gICAgaWYoIWlzQXV0aG9yaXplZCkgaW1hZ2V1cmwgPSBsb2FkQmFja2dyb3VuZFVybCh0cnVlKTtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgaW1hZ2V1cmwgKyAnKSc7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRTaXplID0gJzEwMHZ3IDEwMHZoJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTGFuZGluZyA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICAgIERPTS5zZXRUaXRsZSgnSG9tZXBhZ2UnKTsgLy8gRmFzdCBhY3Rpb25cclxuICAgIHJ1bnRpbWUoYXRSdW50aW1lKTtcclxuICAgIGlzQXV0aG9yaXplZCA9IHByb3BzLmF1dGhvcml6ZWQ7XHJcbiAgICBpZihwcm9wcy5hdXRob3JpemVkKSB7XHJcbiAgICAgICAgcmV0dXJuIGh0bWwoYFxyXG4gICAgICAgICR7VG9wYmFyKHthdXRob3JpemVkOiB0cnVlfSl9XHJcbiAgICAgICAgYCk7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGh0bWwoYFxyXG4gICAgICAgICR7VG9wYmFyKHthdXRob3JpemVkOiBmYWxzZX0pfVxyXG4gICAgICAgICR7TG9naW5mb3JtKCl9XHJcbiAgICAgICAgYCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4vYXBwXCI7XHJcbmltcG9ydCB7IGV4ZWNSdW50aW1lU2NyaXB0cyB9IGZyb20gXCIuL2ZyYW1ld29ya1wiO1xyXG5cclxuY29uc3QgaHRtbEFwcFRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCd4LWFwcCcpWzBdO1xyXG5cclxuaWYoaHRtbEFwcFRhZyAhPSBudWxsKSB7XHJcbiAgICBodG1sQXBwVGFnLmlubmVySFRNTCA9IEFwcCgpO1xyXG4gICAgZXhlY1J1bnRpbWVTY3JpcHRzKCk7XHJcbn1lbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKCclYzx4LWFwcD48L3gtYXBwPiVjIGlzIG5vdCBkZWZpbmVkIScsXHJcbiAgICAnY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyBmb250LXNpemU6IDEuMmVtJywgJ2NvbG9yOiByZWQ7IGZvbnQtc2l6ZTogMS4yZW0nKTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgY2hlY2tDbGllbnRBdXRoLCBzZXRDbGllbnRBdXRoIH0gZnJvbSAnLi9hdXRoJztcclxuaW1wb3J0IHsgVG9wYmFyIH0gZnJvbSAnLi9jb21wb25lbnRzL3RvcGJhcic7XHJcbmltcG9ydCB7IGh0bWwsIERPTSB9IGZyb20gJy4vZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgTGFuZGluZyB9IGZyb20gJy4vcm91dGVzL2xhbmRpbmcnO1xyXG5pbXBvcnQgeyBUb2RvcGFnZSB9IGZyb20gJy4vcm91dGVzL3RvZG9wYWdlJztcclxuXHJcbmV4cG9ydCBjb25zdCBBcHAgPSAoKTogc3RyaW5nID0+IHtcclxuICAgIERPTS5zZXRUaXRsZSgnQXBwJyk7XHJcbiAgICBET00uc2V0Q3NzSW1wb3J0KCdtYWluLmNzcycpXHJcblxyXG4gICAgc3dpdGNoKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkge1xyXG4gICAgICAgIGNhc2UgJy8nOlxyXG4gICAgICAgICAgICByZXR1cm4gaHRtbCgvKmh0bWwqL2Ake0xhbmRpbmcoe2F1dGhvcml6ZWQ6IGNoZWNrQ2xpZW50QXV0aCgpfSl9YCk7XHJcblxyXG4gICAgICAgIGNhc2UgJy9sb2dpbic6XHJcbiAgICAgICAgICAgIHJldHVybiBodG1sKC8qaHRtbCovYCR7TGFuZGluZyh7YXV0aG9yaXplZDogY2hlY2tDbGllbnRBdXRoKCl9KX1gKTtcclxuXHJcbiAgICAgICAgY2FzZSAnL3RvZG8nOlxyXG4gICAgICAgICAgICByZXR1cm4gaHRtbCgvKmh0bWwqL2Ake1RvcGJhcih7YXV0aG9yaXplZDogY2hlY2tDbGllbnRBdXRoKCl9KX0ke1RvZG9wYWdlKCl9YCk7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBodG1sKGAke0xhbmRpbmcoe2F1dGhvcml6ZWQ6IGNoZWNrQ2xpZW50QXV0aCgpfSl9YCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCIuLi9mcmFtZXdvcmtcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUb2RvcGFnZSA9ICgpID0+IHtcclxuXHJcbiAgICBcclxuICAgIGZldGNoKCdodHRwOi8vZ2FtZXIvdG9kby5wYWdlJykudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpLnRoZW4oZGF0YSA9PiBkb2N1bWVudC53cml0ZShkYXRhKSk7XHJcblxyXG4gICAgcmV0dXJuIGh0bWwoLypodG1sKi9gYCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
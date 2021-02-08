(()=>{"use strict";var n="frameworkappauth",e=function(n){return n.replace(/\r?\n|\r|\s{4}/g,"")},t=function(){function n(){}return n.setTitle=function(n){document.title=n},n.setCssImport=function(n){document.createElement},n}(),i=function(n){return!1===n.authorized?e('\n        <div id="topbar">\n            <div class="title">\n                <img src="./assets/favicon-32x32.png">\n                <h1>Framework App</h1>\n            </div>\n            <div class="public">\n            </div>\n            <div class="private">\n                <a href="/" class="button">Login</a>\n            </div>\n        </div>\n        '):!0===n.authorized?e('\n        <div id="topbar">\n            <div class="title">\n                <img src="./assets/favicon-32x32.png">\n                <h1>Framework App</h1>\n            </div>\n            <div class="public">\n                <a href="/" class="button">Front page</a>\n                <a href="/feed" class="button">My feed</a>\n                <a href="/friends" class="button">Friends</a>\n            </div>\n            <div class="private">\n                <a href="/" class="button">My Profile</a>\n            </div>\n        </div>\n        '):void 0},a=document.getElementsByTagName("x-app")[0];null!=a?a.innerHTML=function(){switch(t.setTitle("App"),window.location.pathname){case"/":case"/login":default:return e(""+(a={authorized:null!=sessionStorage.getItem(n)&&"0"!==sessionStorage.getItem(n)},t.setTitle("Homepage"),a.authorized?e("\n        "+i({authorized:!0})+"\n        "):e("\n        "+i({authorized:!1})+"\n        "+e('\n    <div id="loginform">\n        <input id="username" type="text" placeholder="Username">\n        <br>\n        <input id="password" type="text" placeholder="Password">\n        <br>\n        <input id="login" type="button" value="Login">\n    </div>\n    ')+"\n        ")))}var a}():console.log("%c<x-app></x-app>%c is not defined!","color: white; background-color: blue; font-size: 1.2em","color: red; font-size: 1.2em")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdWJsaWMvLi9zcmMvYXV0aC50cyIsIndlYnBhY2s6Ly9wdWJsaWMvLi9zcmMvZnJhbWV3b3JrLnRzIiwid2VicGFjazovL3B1YmxpYy8uL3NyYy9jb21wb25lbnRzL3RvcGJhci50cyIsIndlYnBhY2s6Ly9wdWJsaWMvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcHVibGljLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9wdWJsaWMvLi9zcmMvcm91dGVzL2xhbmRpbmcudHMiLCJ3ZWJwYWNrOi8vcHVibGljLy4vc3JjL2NvbXBvbmVudHMvbG9naW5mb3JtLnRzIl0sIm5hbWVzIjpbImF1dGhLZXkiLCJodG1sIiwicmVwbGFjZSIsInNldFRpdGxlIiwidGl0bGUiLCJkb2N1bWVudCIsInNldENzc0ltcG9ydCIsInVybCIsImNyZWF0ZUVsZW1lbnQiLCJUb3BiYXIiLCJwcm9wcyIsImF1dGhvcml6ZWQiLCJodG1sQXBwVGFnIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbm5lckhUTUwiLCJET00iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiQXBwIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Im1CQUNBLElBQU1BLEVBQVUsbUJDR0hDLEVBQU8sU0FBQ0EsR0FBeUIsT0FBQUEsRUFBS0MsUUFBUSxrQkFBbUIsS0FFOUUsMkJBVUEsT0FSa0IsRUFBQUMsU0FBVyxTQUFDQyxHQUN0QkMsU0FBU0QsTUFBUUEsR0FHUCxFQUFBRSxhQUFlLFNBQUNDLEdBQzFCRixTQUFTRyxlQUdqQixFQVZBLEdDQWFDLEVBQVMsU0FBQ0MsR0FDbkIsT0FBd0IsSUFBckJBLEVBQU1DLFdBQ0VWLEVBQWEsa1hBYU0sSUFBckJTLEVBQU1DLFdBQ0pWLEVBQWEsaWpCQURsQixHQ25CSlcsRUFBYVAsU0FBU1EscUJBQXFCLFNBQVMsR0FFekMsTUFBZEQsRUFDQ0EsRUFBV0UsVUNESSxXQUdmLE9BRkFDLEVBQUlaLFNBQVMsT0FFTmEsT0FBT0MsU0FBU0MsVUFDbkIsSUFBSyxJQUdMLElBQUssU0FHTCxRQUNJLE9BQU9qQixFQUFLLElDTkFTLEVETVcsQ0FBQ0MsV0pYTSxNQUFuQ1EsZUFBZUMsUUFBUXBCLElBQXdELE1BQXBDbUIsZUFBZUMsUUFBUXBCLElLTXJFZSxFQUFJWixTQUFTLFlBQ1ZPLEVBQU1DLFdBQ0VWLEVBQUssYUFDVlEsRUFBTyxDQUFDRSxZQUFZLElBQU0sY0FHckJWLEVBQUssYUFDVlEsRUFBTyxDQUFDRSxZQUFZLElBQU8sYUNkMUJWLEVBQWEsd1FEZUgsZ0JBVEUsSUFBQ1MsRUZKR1csR0FFdkJDLFFBQVFDLElBQUksc0NBQ1oseURBQTBELGlDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgYXV0aEtleSA9ICdmcmFtZXdvcmthcHBhdXRoJztcclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0NsaWVudEF1dGggPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICBpZihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGF1dGhLZXkpICE9IG51bGwgJiYgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShhdXRoS2V5KSAhPT0gJzAnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q2xpZW50QXV0aCA9ICgpOiB2b2lkID0+IHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oYXV0aEtleSwgJzAnKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNsaWVudEF1dGggPSAoKTogdm9pZCA9PiB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKGF1dGhLZXkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2xlYXJTZXNzaW9uID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcclxufVxyXG5cclxuXHJcbiIsIlxyXG5cclxuLyogR2VuZXJhbCBIVE1MIHV0aWxpdGllcyAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IGh0bWwgPSAoaHRtbDogc3RyaW5nKTogc3RyaW5nID0+IGh0bWwucmVwbGFjZSgvXFxyP1xcbnxcXHJ8XFxzezR9L2csICcnKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBET00ge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0VGl0bGUgPSAodGl0bGU6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRDc3NJbXBvcnQgPSAodXJsOiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8qIE1pc2NlbGxhbmVvdXMgdXRpbGl0aWVzICovXHJcblxyXG5leHBvcnQgY29uc3QgbWFrZWlkID0gKGxlbmd0aDogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgIGxldCBpZCA9ICcnO1xyXG4gICAgY29uc3QgY2hhcmFjdGVycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgIGlkICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnMubGVuZ3RoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaWQ7XHJcbiB9XHJcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiLi4vZnJhbWV3b3JrXCI7XHJcblxyXG5jbGFzcyBQcm9wcyB7XHJcbiAgICBhdXRob3JpemVkOiBib29sZWFuID0gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUb3BiYXIgPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgICBpZihwcm9wcy5hdXRob3JpemVkID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiBodG1sKC8qaHRtbCovYFxyXG4gICAgICAgIDxkaXYgaWQ9XCJ0b3BiYXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2Zhdmljb24tMzJ4MzIucG5nXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+RnJhbWV3b3JrIEFwcDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVibGljXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpdmF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzcz1cImJ1dHRvblwiPkxvZ2luPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgKTtcclxuICAgIH1lbHNlIGlmKHByb3BzLmF1dGhvcml6ZWQgPT09IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gaHRtbCgvKmh0bWwqL2BcclxuICAgICAgICA8ZGl2IGlkPVwidG9wYmFyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9mYXZpY29uLTMyeDMyLnBuZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPkZyYW1ld29yayBBcHA8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1YmxpY1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzcz1cImJ1dHRvblwiPkZyb250IHBhZ2U8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2ZlZWRcIiBjbGFzcz1cImJ1dHRvblwiPk15IGZlZWQ8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2ZyaWVuZHNcIiBjbGFzcz1cImJ1dHRvblwiPkZyaWVuZHM8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpdmF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzcz1cImJ1dHRvblwiPk15IFByb2ZpbGU8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGApO1xyXG4gICAgfVxyXG4gICAgXHJcbn07XHJcbiIsImltcG9ydCB7IEFwcCB9IGZyb20gXCIuL2FwcFwiO1xuXG5jb25zdCBodG1sQXBwVGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3gtYXBwJylbMF07XG5cbmlmKGh0bWxBcHBUYWcgIT0gbnVsbCkge1xuICAgIGh0bWxBcHBUYWcuaW5uZXJIVE1MID0gQXBwKCk7XG59ZWxzZSB7XG4gICAgY29uc29sZS5sb2coJyVjPHgtYXBwPjwveC1hcHA+JWMgaXMgbm90IGRlZmluZWQhJyxcbiAgICAnY29sb3I6IHdoaXRlOyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyBmb250LXNpemU6IDEuMmVtJywgJ2NvbG9yOiByZWQ7IGZvbnQtc2l6ZTogMS4yZW0nKTtcbn1cblxuIiwiaW1wb3J0IHsgY2hlY2tDbGllbnRBdXRoLCBzZXRDbGllbnRBdXRoIH0gZnJvbSAnLi9hdXRoJztcclxuaW1wb3J0IHsgaHRtbCwgRE9NLCBtYWtlaWQgfSBmcm9tICcuL2ZyYW1ld29yayc7XHJcbmltcG9ydCB7IExhbmRpbmcgfSBmcm9tICcuL3JvdXRlcy9sYW5kaW5nJztcclxuXHJcbmV4cG9ydCBjb25zdCBBcHAgPSAoKTogc3RyaW5nID0+IHtcclxuICAgIERPTS5zZXRUaXRsZSgnQXBwJyk7XHJcblxyXG4gICAgc3dpdGNoKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkge1xyXG4gICAgICAgIGNhc2UgJy8nOlxyXG4gICAgICAgICAgICByZXR1cm4gaHRtbChgJHtMYW5kaW5nKHthdXRob3JpemVkOiBjaGVja0NsaWVudEF1dGgoKX0pfWApO1xyXG5cclxuICAgICAgICBjYXNlICcvbG9naW4nOlxyXG4gICAgICAgICAgICByZXR1cm4gaHRtbChgJHtMYW5kaW5nKHthdXRob3JpemVkOiBjaGVja0NsaWVudEF1dGgoKX0pfWApO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gaHRtbChgJHtMYW5kaW5nKHthdXRob3JpemVkOiBjaGVja0NsaWVudEF1dGgoKX0pfWApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGh0bWwsIERPTSB9IGZyb20gJy4uL2ZyYW1ld29yayc7XHJcbmltcG9ydCB7IFRvcGJhciB9IGZyb20gJy4uL2NvbXBvbmVudHMvdG9wYmFyJztcclxuaW1wb3J0IHsgTG9naW5mb3JtIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sb2dpbmZvcm0nO1xyXG5cclxuY2xhc3MgUHJvcHMge1xyXG4gICAgYXV0aG9yaXplZDogYm9vbGVhbiA9IGZhbHNlO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IExhbmRpbmcgPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgICBET00uc2V0VGl0bGUoJ0hvbWVwYWdlJyk7XHJcbiAgICBpZihwcm9wcy5hdXRob3JpemVkKSB7XHJcbiAgICAgICAgcmV0dXJuIGh0bWwoYFxyXG4gICAgICAgICR7VG9wYmFyKHthdXRob3JpemVkOiB0cnVlfSl9XHJcbiAgICAgICAgYCk7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGh0bWwoYFxyXG4gICAgICAgICR7VG9wYmFyKHthdXRob3JpemVkOiBmYWxzZX0pfVxyXG4gICAgICAgICR7TG9naW5mb3JtKCl9XHJcbiAgICAgICAgYCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCIuLi9mcmFtZXdvcmtcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dpbmZvcm0gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gaHRtbCgvKmh0bWwqL2BcclxuICAgIDxkaXYgaWQ9XCJsb2dpbmZvcm1cIj5cclxuICAgICAgICA8aW5wdXQgaWQ9XCJ1c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiPlxyXG4gICAgICAgIDxicj5cclxuICAgICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiPlxyXG4gICAgICAgIDxicj5cclxuICAgICAgICA8aW5wdXQgaWQ9XCJsb2dpblwiIHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkxvZ2luXCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIGApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
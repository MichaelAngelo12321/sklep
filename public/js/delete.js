/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/delete.js":
/*!********************************!*\
  !*** ./resources/js/delete.js ***!
  \********************************/
/***/ (() => {

eval("$(function () {\n  $('.delete').click(function () {\n    var _this = this;\n\n    Swal.fire({\n      title: 'delete',\n      icon: 'warning',\n      showCancelButton: true,\n      confirmButtonText: 'TAK',\n      cancelButtonText: 'NIE'\n    }).then(function (result) {\n      if (result.isConfirmed) {\n        $.ajax({\n          method: \"DELETE\",\n          url: deleteUrl + $(_this).data(\"id\")\n        }).done(function (data) {\n          window.location.reload();\n        }).fail(function (data) {\n          Swal.fire({\n            icon: data.responseJSON.status,\n            title: 'Oops...',\n            text: data.responseJSON.message,\n            footer: '<a href=\"\">Why do I have this issue?</a>'\n          });\n        });\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyIkIiwiY2xpY2siLCJTd2FsIiwiZmlyZSIsInRpdGxlIiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwiaXNDb25maXJtZWQiLCJhamF4IiwibWV0aG9kIiwidXJsIiwiZGVsZXRlVXJsIiwiZGF0YSIsImRvbmUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImZhaWwiLCJyZXNwb25zZUpTT04iLCJzdGF0dXMiLCJ0ZXh0IiwibWVzc2FnZSIsImZvb3RlciJdLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzPzZjMTEiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG4gICAgJCgnLmRlbGV0ZScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxudGl0bGU6ICdkZWxldGUnLFxyXG5pY29uOiAnd2FybmluZycsXHJcbnNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbmNvbmZpcm1CdXR0b25UZXh0OiAnVEFLJyxcclxuY2FuY2VsQnV0dG9uVGV4dDogJ05JRSdcclxufSkudGhlbigocmVzdWx0KSA9PiB7XHJcbmlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuJC5hamF4KHtcclxuICAgICAgICAgICAgbWV0aG9kOlwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgIHVybDogZGVsZXRlVXJsICskKHRoaXMpLmRhdGEoXCJpZFwiKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZG9uZShmdW5jdGlvbiAoZGF0YSl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmFpbChmdW5jdGlvbiAoZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IGRhdGEucmVzcG9uc2VKU09OLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdPb3BzLi4uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZGF0YS5yZXNwb25zZUpTT04ubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVyOiAnPGEgaHJlZj1cIlwiPldoeSBkbyBJIGhhdmUgdGhpcyBpc3N1ZT88L2E+J1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59KTsiXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUMsWUFBVTtFQUNSQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFDLEtBQWIsQ0FBbUIsWUFBVTtJQUFBOztJQUN6QkMsSUFBSSxDQUFDQyxJQUFMLENBQVU7TUFDbEJDLEtBQUssRUFBRSxRQURXO01BRWxCQyxJQUFJLEVBQUUsU0FGWTtNQUdsQkMsZ0JBQWdCLEVBQUUsSUFIQTtNQUlsQkMsaUJBQWlCLEVBQUUsS0FKRDtNQUtsQkMsZ0JBQWdCLEVBQUU7SUFMQSxDQUFWLEVBTUxDLElBTkssQ0FNQSxVQUFDQyxNQUFELEVBQVk7TUFDcEIsSUFBSUEsTUFBTSxDQUFDQyxXQUFYLEVBQXdCO1FBQ3hCWCxDQUFDLENBQUNZLElBQUYsQ0FBTztVQUNLQyxNQUFNLEVBQUMsUUFEWjtVQUVLQyxHQUFHLEVBQUVDLFNBQVMsR0FBRWYsQ0FBQyxDQUFDLEtBQUQsQ0FBRCxDQUFRZ0IsSUFBUixDQUFhLElBQWI7UUFGckIsQ0FBUCxFQUthQyxJQUxiLENBS2tCLFVBQVVELElBQVYsRUFBZTtVQUNqQkUsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtRQUNLLENBUHJCLEVBU3lCQyxJQVR6QixDQVM4QixVQUFVTCxJQUFWLEVBQWU7VUFDckJkLElBQUksQ0FBQ0MsSUFBTCxDQUFVO1lBQ1ZFLElBQUksRUFBRVcsSUFBSSxDQUFDTSxZQUFMLENBQWtCQyxNQURkO1lBRVZuQixLQUFLLEVBQUUsU0FGRztZQUdWb0IsSUFBSSxFQUFFUixJQUFJLENBQUNNLFlBQUwsQ0FBa0JHLE9BSGQ7WUFJVkMsTUFBTSxFQUFFO1VBSkUsQ0FBVjtRQU1QLENBaEJqQjtNQWtCYTtJQUNKLENBM0JEO0VBNEJILENBN0JEO0FBOEJILENBL0JBLENBQUQiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/delete.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/delete.js"]();
/******/ 	
/******/ })()
;
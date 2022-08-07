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

eval("$(function () {\n  $('.delete').click(function () {\n    var _this = this;\n\n    Swal.fire({\n      title: 'delete',\n      icon: 'warning',\n      showCancelButton: true,\n      confirmButtonText: 'TAK',\n      cancelButtonText: 'NIE'\n    }).then(function (result) {\n      if (result.isConfirmed) {\n        $.ajax({\n          method: \"DELETE\",\n          url: deleteUrl + $(_this).data(\"id\")\n        }).done(function (data) {\n          window.location.reload();\n        }).fail(function (data) {\n          Swal.fire({\n            icon: data.responseJSON.status,\n            title: 'Oops...',\n            text: data.responseJSON.message,\n            footer: '<a href=\"\">Why do I have this issue?</a>'\n          });\n        });\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyIkIiwiY2xpY2siLCJTd2FsIiwiZmlyZSIsInRpdGxlIiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwiaXNDb25maXJtZWQiLCJhamF4IiwibWV0aG9kIiwidXJsIiwiZGVsZXRlVXJsIiwiZGF0YSIsImRvbmUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImZhaWwiLCJyZXNwb25zZUpTT04iLCJzdGF0dXMiLCJ0ZXh0IiwibWVzc2FnZSIsImZvb3RlciJdLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzPzZjMTEiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG4gXHJcbiAgICQoJy5kZWxldGUnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIFN3YWwuZmlyZSh7XHJcbnRpdGxlOiAnZGVsZXRlJyxcclxuaWNvbjogJ3dhcm5pbmcnLFxyXG5zaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG5jb25maXJtQnV0dG9uVGV4dDogJ1RBSycsXHJcbmNhbmNlbEJ1dHRvblRleHQ6ICdOSUUnXHJcbn0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5pZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcbiQuYWpheCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDpcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICB1cmw6IGRlbGV0ZVVybCArJCh0aGlzKS5kYXRhKFwiaWRcIilcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmRvbmUoZnVuY3Rpb24gKGRhdGEpe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhaWwoZnVuY3Rpb24gKGRhdGEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBkYXRhLnJlc3BvbnNlSlNPTi5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnT29wcy4uLicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGRhdGEucmVzcG9uc2VKU09OLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvb3RlcjogJzxhIGhyZWY9XCJcIj5XaHkgZG8gSSBoYXZlIHRoaXMgaXNzdWU/PC9hPidcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxufSk7Il0sIm1hcHBpbmdzIjoiQUFBQUEsQ0FBQyxDQUFDLFlBQVU7RUFFVEEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhQyxLQUFiLENBQW1CLFlBQVU7SUFBQTs7SUFFeEJDLElBQUksQ0FBQ0MsSUFBTCxDQUFVO01BQ2xCQyxLQUFLLEVBQUUsUUFEVztNQUVsQkMsSUFBSSxFQUFFLFNBRlk7TUFHbEJDLGdCQUFnQixFQUFFLElBSEE7TUFJbEJDLGlCQUFpQixFQUFFLEtBSkQ7TUFLbEJDLGdCQUFnQixFQUFFO0lBTEEsQ0FBVixFQU1MQyxJQU5LLENBTUEsVUFBQ0MsTUFBRCxFQUFZO01BQ3BCLElBQUlBLE1BQU0sQ0FBQ0MsV0FBWCxFQUF3QjtRQUN4QlgsQ0FBQyxDQUFDWSxJQUFGLENBQU87VUFDS0MsTUFBTSxFQUFDLFFBRFo7VUFFS0MsR0FBRyxFQUFFQyxTQUFTLEdBQUVmLENBQUMsQ0FBQyxLQUFELENBQUQsQ0FBUWdCLElBQVIsQ0FBYSxJQUFiO1FBRnJCLENBQVAsRUFLYUMsSUFMYixDQUtrQixVQUFVRCxJQUFWLEVBQWU7VUFDakJFLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEI7UUFDSyxDQVByQixFQVN5QkMsSUFUekIsQ0FTOEIsVUFBVUwsSUFBVixFQUFlO1VBQ3JCZCxJQUFJLENBQUNDLElBQUwsQ0FBVTtZQUNWRSxJQUFJLEVBQUVXLElBQUksQ0FBQ00sWUFBTCxDQUFrQkMsTUFEZDtZQUVWbkIsS0FBSyxFQUFFLFNBRkc7WUFHVm9CLElBQUksRUFBRVIsSUFBSSxDQUFDTSxZQUFMLENBQWtCRyxPQUhkO1lBSVZDLE1BQU0sRUFBRTtVQUpFLENBQVY7UUFNUCxDQWhCakI7TUFrQmE7SUFDSixDQTNCRDtFQTRCSCxDQTlCRjtBQStCRixDQWpDQSxDQUFEIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2RlbGV0ZS5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/delete.js\n");

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
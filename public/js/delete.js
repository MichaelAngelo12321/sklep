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

eval("$(function () {\n  $('.delete').click(function () {\n    var _this = this;\n\n    Swal.fire({\n      title: 'Czy napewno chcesz usunąć rekord!',\n      icon: 'warning',\n      showCancelButton: true,\n      confirmButtonText: 'TAK',\n      cancelButtonText: 'NIE'\n    }).then(function (result) {\n      if (result.isConfirmed) {\n        $.ajax({\n          method: \"DELETE\",\n          url: deleteUrl + $(_this).data(\"id\")\n        }).done(function (data) {\n          window.location.reload();\n        }).fail(function (data) {\n          Swal.fire({\n            icon: data.responseJSON.status,\n            title: 'Oops...',\n            text: data.responseJSON.message,\n            footer: '<a href=\"\">Why do I have this issue?</a>'\n          });\n        });\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzLmpzIiwibmFtZXMiOlsiJCIsImNsaWNrIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsImlzQ29uZmlybWVkIiwiYWpheCIsIm1ldGhvZCIsInVybCIsImRlbGV0ZVVybCIsImRhdGEiLCJkb25lIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJmYWlsIiwicmVzcG9uc2VKU09OIiwic3RhdHVzIiwidGV4dCIsIm1lc3NhZ2UiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9kZWxldGUuanM/NmMxMSJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuZGVsZXRlJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG50aXRsZTogJ0N6eSBuYXBld25vIGNoY2VzeiB1c3VuxIXEhyByZWtvcmQhJyxcclxuaWNvbjogJ3dhcm5pbmcnLFxyXG5zaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG5jb25maXJtQnV0dG9uVGV4dDogJ1RBSycsXHJcbmNhbmNlbEJ1dHRvblRleHQ6ICdOSUUnXHJcbn0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5pZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcbiQuYWpheCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDpcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICB1cmw6IGRlbGV0ZVVybCArJCh0aGlzKS5kYXRhKFwiaWRcIilcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmRvbmUoZnVuY3Rpb24gKGRhdGEpe1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhaWwoZnVuY3Rpb24gKGRhdGEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBkYXRhLnJlc3BvbnNlSlNPTi5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnT29wcy4uLicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGRhdGEucmVzcG9uc2VKU09OLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvb3RlcjogJzxhIGhyZWY9XCJcIj5XaHkgZG8gSSBoYXZlIHRoaXMgaXNzdWU/PC9hPidcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxufSk7Il0sIm1hcHBpbmdzIjoiQUFBQUEsQ0FBQyxDQUFDLFlBQVU7RUFDUkEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhQyxLQUFiLENBQW1CLFlBQVU7SUFBQTs7SUFDekJDLElBQUksQ0FBQ0MsSUFBTCxDQUFVO01BQ2xCQyxLQUFLLEVBQUUsbUNBRFc7TUFFbEJDLElBQUksRUFBRSxTQUZZO01BR2xCQyxnQkFBZ0IsRUFBRSxJQUhBO01BSWxCQyxpQkFBaUIsRUFBRSxLQUpEO01BS2xCQyxnQkFBZ0IsRUFBRTtJQUxBLENBQVYsRUFNTEMsSUFOSyxDQU1BLFVBQUNDLE1BQUQsRUFBWTtNQUNwQixJQUFJQSxNQUFNLENBQUNDLFdBQVgsRUFBd0I7UUFDeEJYLENBQUMsQ0FBQ1ksSUFBRixDQUFPO1VBQ0tDLE1BQU0sRUFBQyxRQURaO1VBRUtDLEdBQUcsRUFBRUMsU0FBUyxHQUFFZixDQUFDLENBQUMsS0FBRCxDQUFELENBQVFnQixJQUFSLENBQWEsSUFBYjtRQUZyQixDQUFQLEVBS2FDLElBTGIsQ0FLa0IsVUFBVUQsSUFBVixFQUFlO1VBQ2pCRSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCO1FBQ0ssQ0FQckIsRUFTeUJDLElBVHpCLENBUzhCLFVBQVVMLElBQVYsRUFBZTtVQUNyQmQsSUFBSSxDQUFDQyxJQUFMLENBQVU7WUFDVkUsSUFBSSxFQUFFVyxJQUFJLENBQUNNLFlBQUwsQ0FBa0JDLE1BRGQ7WUFFVm5CLEtBQUssRUFBRSxTQUZHO1lBR1ZvQixJQUFJLEVBQUVSLElBQUksQ0FBQ00sWUFBTCxDQUFrQkcsT0FIZDtZQUlWQyxNQUFNLEVBQUU7VUFKRSxDQUFWO1FBTVAsQ0FoQmpCO01Ba0JhO0lBQ0osQ0EzQkQ7RUE0QkgsQ0E3QkQ7QUE4QkgsQ0EvQkEsQ0FBRCJ9\n//# sourceURL=webpack-internal:///./resources/js/delete.js\n");

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
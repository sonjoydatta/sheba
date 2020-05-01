webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./components/index.jsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./utils/index.jsx");
/* harmony import */ var _components_Homepage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Homepage */ "./components/Homepage/index.jsx");
/* harmony import */ var _components_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AppContext */ "./components/AppContext.jsx");
var _jsxFileName = "/Users/sonjoydatta/Desktop/sheba/pages/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Homepage(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isLoaded = _useState[0],
      setIsLoaded = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var timer = setTimeout(function () {
      return setIsLoaded(true);
    }, 1000);
    return function () {
      clearTimeout(timer);
    };
  }, []);
  return __jsx(_components_AppContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: {
      isMobile: props.isMobile,
      searchOptions: [{
        value: 1,
        label: 'AC Repair Services'
      }, {
        value: 2,
        label: 'Home Cleaning'
      }, {
        value: 3,
        label: 'Beauty Salon Service for Woman'
      }, {
        value: 4,
        label: 'Sheba Groceries'
      }, {
        value: 5,
        label: 'Health Checkup & Lab Test'
      }],
      categories: [{
        id: 1,
        title: 'Grocery',
        image: '01.png'
      }, {
        id: 2,
        title: 'Emergency Services',
        image: '02.png'
      }, {
        id: 3,
        title: 'Cleaning & Pest Control',
        image: '03.png'
      }, {
        id: 4,
        title: 'Beauty & Salon',
        image: '04.png'
      }, {
        id: 5,
        title: 'Shifting',
        image: '05.png'
      }, {
        id: 6,
        title: 'Appliance Repair',
        image: '06.png'
      }, {
        id: 7,
        title: 'Electric and Plumbing',
        image: '08.svg'
      }],
      highDemand: [{
        id: 1,
        title: 'Hire a Cleaner',
        image: '06.jpg'
      }, {
        id: 2,
        title: 'AC Repair Services',
        image: '01.jpg'
      }, {
        id: 3,
        title: 'Beauty Salon Service for Woman',
        image: '03.jpg'
      }, {
        id: 4,
        title: 'Plumbing & Sanitary Services',
        image: '07.jpg'
      }, {
        id: 5,
        title: 'Electricians for Electrical Service',
        image: '08.jpg'
      }, {
        id: 6,
        title: 'Home Cleaning',
        image: '02.jpg'
      }, {
        id: 7,
        title: 'House Shifting Services',
        image: '09.jpg'
      }, {
        id: 8,
        title: 'Laptop Servicing',
        image: '10.jpg'
      }, {
        id: 9,
        title: 'Bosontokalin Offer @349 Tk',
        image: '11.jpeg'
      }, {
        id: 10,
        title: 'Exclusive Winter Package for Laundry & Dry Wash',
        image: '12.jpg'
      }],
      trending: [{
        id: 1,
        title: 'AC Repair Services',
        image: '01.jpg'
      }, {
        id: 2,
        title: 'Home Cleaning',
        image: '02.jpg'
      }, {
        id: 3,
        title: 'Beauty Salon Service for Woman',
        image: '03.jpg'
      }, {
        id: 4,
        title: 'Sheba Groceries',
        image: '04.jpg'
      }, {
        id: 5,
        title: 'Health Checkup & Lab Test',
        image: '05.png'
      }],
      counters: [{
        id: 1,
        title: 'Service Providers',
        count: '15,000'
      }, {
        id: 2,
        title: 'Order Served',
        count: '1,00,000'
      }, {
        id: 3,
        title: '5 Star Received',
        count: '76,000'
      }],
      testimonials: [{
        id: 1,
        comment: 'Such service platforms are available in other countries. I’ve personally used those when I was abroad. I’m very pleased that such a portal is available here in Bangladesh as well. Thank you Sheba.xyz.',
        name: 'Zabeen Yusuf Nur',
        profession: 'IT Consultant, Australia',
        image: '01.jpg',
        video: 'https://www.youtube.com/watch?v=Ey0ESUxWTL0'
      }, {
        id: 2,
        comment: 'It was my marriage and wasn’t getting schedule from any beauty parlor. So, I downloaded Sheba.xyz app and found that it has all of my requirements. The beautician arrived in time and was really amazing. Thank you.',
        name: 'Zeba Fariba',
        profession: 'Management Trainee',
        image: '02.jpg',
        video: 'https://youtu.be/_1juTr9E46U'
      }]
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, isLoaded ? __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "Homepage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, props.isMobile ? __jsx(_components_Homepage__WEBPACK_IMPORTED_MODULE_3__["FeaturedCategoriesMobile"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 19
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }, __jsx(_components_Homepage__WEBPACK_IMPORTED_MODULE_3__["HeroBanner"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }), __jsx(_components_Homepage__WEBPACK_IMPORTED_MODULE_3__["FeaturedCategories"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }), __jsx(_components_Homepage__WEBPACK_IMPORTED_MODULE_3__["HighDemand"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }), __jsx(_components_Homepage__WEBPACK_IMPORTED_MODULE_3__["TrendingServices"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }), __jsx(_components_Homepage__WEBPACK_IMPORTED_MODULE_3__["HappyService"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }), __jsx(_components_Homepage__WEBPACK_IMPORTED_MODULE_3__["Counter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  })), __jsx(_components_Homepage__WEBPACK_IMPORTED_MODULE_3__["ServiceProcess"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }), __jsx(_components_Homepage__WEBPACK_IMPORTED_MODULE_3__["Testimonial"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }), !props.isMobile && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  }, __jsx(_components_Homepage__WEBPACK_IMPORTED_MODULE_3__["AppDownload"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }), __jsx(_components_Homepage__WEBPACK_IMPORTED_MODULE_3__["RequestService"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }), __jsx(_components_Homepage__WEBPACK_IMPORTED_MODULE_3__["OfficeSolution"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }), __jsx(_components_Homepage__WEBPACK_IMPORTED_MODULE_3__["BecomePartner"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  })))) : __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["PageLoader"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }));
}

Homepage.getInitialProps = function (_ref) {
  var req = _ref.req;
  var userAgent;

  if (req) {
    userAgent = req.headers['user-agent'];
  } else {
    userAgent = navigator.userAgent;
  }

  var isMobile = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isMobileAgent"])(userAgent);
  return {
    isMobile: isMobile
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ })

})
//# sourceMappingURL=index.js.6ea8993ce7a6894139c1.hot-update.js.map
"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var Create;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [],
    execute: function () {
      Create =
      /*#__PURE__*/
      function () {
        function Create() {
          _classCallCheck(this, Create);

          this.btn = $("#js-btn");
        }

        _createClass(Create, [{
          key: "fn",
          value: function fn() {
            this.btn.click(function () {
              console.log("btn");
            });
          }
        }]);

        return Create;
      }();

      _export("default", Create);
    }
  };
});

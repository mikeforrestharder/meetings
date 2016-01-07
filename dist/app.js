System.register(["aurelia-router"], function (_export) {
  "use strict";

  var Router, App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      App = (function () {
        _createClass(App, null, [{
          key: "inject",
          value: function inject() {
            return [Router];
          }
        }]);

        function App(router) {
          _classCallCheck(this, App);

          this.router = router;
          this.router.configure(function (config) {
            config.title = "Cloud Meetings";
            config.map([{ route: "", moduleId: "splash", nav: true, title: "This is the splash page" }]);
          });
        }

        return App;
      })();

      _export("App", App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Y0FFYSxHQUFHOzs7Ozs7Ozs4QkFGUixNQUFNOzs7QUFFRCxTQUFHO3FCQUFILEdBQUc7O2lCQUNELGtCQUFHO0FBQUUsbUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztXQUFFOzs7QUFFekIsaUJBSEEsR0FBRyxDQUdGLE1BQU0sRUFBRTtnQ0FIVCxHQUFHOztBQUlaLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQzlCLGtCQUFNLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDO0FBQ2hDLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBQyxLQUFLLEVBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUseUJBQXlCLEVBQUMsQ0FDOUUsQ0FBQyxDQUFDO1dBQ0osQ0FBQyxDQUFDO1NBQ0o7O2VBWFUsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlcn0gZnJvbSBcImF1cmVsaWEtcm91dGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuICBzdGF0aWMgaW5qZWN0KCkgeyByZXR1cm4gW1JvdXRlcl07IH1cblxuICBjb25zdHJ1Y3Rvcihyb3V0ZXIpIHtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB0aGlzLnJvdXRlci5jb25maWd1cmUoY29uZmlnID0+IHtcbiAgICAgIGNvbmZpZy50aXRsZSA9IFwiQ2xvdWQgTWVldGluZ3NcIjtcbiAgICAgIGNvbmZpZy5tYXAoW1xuICAgICAgICB7cm91dGU6ICBcIlwiLCBtb2R1bGVJZDogXCJzcGxhc2hcIiwgbmF2OiB0cnVlLCB0aXRsZTogXCJUaGlzIGlzIHRoZSBzcGxhc2ggcGFnZVwifVxuICAgICAgXSk7XG4gICAgfSk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

(function(angular) {
	"use strict";
	angular.module('datepicker', [])
		.directive('datePicker', function() {
			return {
				restrict: 'A',
				require: 'ngModel',
				scope: {
					ngModel: '='
				},
				link: function(scope, elements, attrs, ngModel) {
					elements.jeDate({
						skinCell: attrs.skinCell,
						format: attrs.format,
						okfun: function(elemet, data) {
							scope.ngModel = data;
							scope.$apply();
						},
						choosefun: function(elemet, data) {
							scope.ngModel = data;
							scope.$apply();
						}
					});
				}
			}
		})
})(angular);
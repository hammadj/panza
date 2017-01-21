Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _index=require('../index');




var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}









var screen=_reactNative.Dimensions.get('window');var















InputDatePicker=function(_React$Component){_inherits(InputDatePicker,_React$Component);function InputDatePicker(){_classCallCheck(this,InputDatePicker);return _possibleConstructorReturn(this,(InputDatePicker.__proto__||Object.getPrototypeOf(InputDatePicker)).apply(this,arguments));}_createClass(InputDatePicker,[{key:'render',value:function render()
























{var _this2=this;var _props=








this.props,expanded=_props.expanded,onToggleExpansion=_props.onToggleExpansion,label=_props.label,value=_props.value,editable=_props.editable,other=_objectWithoutProperties(_props,['expanded','onToggleExpansion','label','value','editable']);

var Row=
_react2.default.createElement(_index.TouchableInput,_extends({
label:label,
value:value,
onPress:function onPress(){
if(_reactNative.Platform.OS==='ios'){
return onToggleExpansion();
}else if(_reactNative.Platform.OS==='android'){
_this2.toggleDatePicker();
}
},
disabled:!editable},
other));



return(
_react2.default.createElement(_index.InputExpandable,{
expanded:_reactNative.Platform.OS==='ios'?expanded:false,
Row:Row},

_reactNative.Platform.OS==='ios'&&this.renderIOS()));


}},{key:'renderIOS',value:function renderIOS()

{var _this3=this;
return(
_react2.default.createElement(_reactNative.View,{
style:styles.pickerWrapper},

_react2.default.createElement(_reactNative.DatePickerIOS,{
date:new Date(this.props.date),
maximumDate:this.props.maxDate,
minimumDate:this.props.minDate,
mode:this.props.mode,
onDateChange:function onDateChange(date){
_this3.props.onDateChange(date);
}})));



}},{key:'toggleDatePicker',value:function toggleDatePicker(){var _ref,action,year,month,day,code,message;return regeneratorRuntime.async(function toggleDatePicker$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!(



_reactNative.Platform.OS==='android')){_context.next=17;break;}_context.prev=1;_context.next=4;return regeneratorRuntime.awrap(


_reactNative.DatePickerAndroid.open({
date:this.props.date,
minDate:this.props.minDate,
maxDate:this.props.maxDate}));case 4:_ref=_context.sent;action=_ref.action;year=_ref.year;month=_ref.month;day=_ref.day;


if(action===_reactNative.DatePickerAndroid.dismissedAction){
console.log('dismissed');
}else{
this.props.onDateChange(new Date(year,month,day));
}_context.next=17;break;case 12:_context.prev=12;_context.t0=_context['catch'](1);

code=_context.t0.code;message=_context.t0.message;
console.warn('error opening date picker',code,message);case 17:case'end':return _context.stop();}}},null,this,[[1,12]]);}}]);return InputDatePicker;}(_react2.default.Component);InputDatePicker.displayName='InputDatePicker';InputDatePicker.propTypes={expanded:_react.PropTypes.bool.isRequired,onToggleExpansion:_react.PropTypes.func.isRequired,value:_react.PropTypes.string,maxDate:_react.PropTypes.string,minDate:_react.PropTypes.string,label:_react.PropTypes.string,mode:_react.PropTypes.string,date:_react.PropTypes.object.isRequired,onDateChange:_react.PropTypes.func.isRequired,editable:_react.PropTypes.bool};InputDatePicker.defaultProps={editable:true};







var styles=_reactNative.StyleSheet.create({
pickerWrapper:{
flex:1,
alignSelf:'stretch'}});exports.default=



InputDatePicker;
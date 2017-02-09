Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');




var _index=require('../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var























InputPicker=function(_React$Component){_inherits(InputPicker,_React$Component);function InputPicker(){_classCallCheck(this,InputPicker);return _possibleConstructorReturn(this,(InputPicker.__proto__||Object.getPrototypeOf(InputPicker)).apply(this,arguments));}_createClass(InputPicker,[{key:'renderAndroid',value:function renderAndroid()




























{var _props=




this.props,label=_props.label,editable=_props.editable;var


panza=
this.context.panza;var _config$panza=_extends({},_index.config,

panza),fontSizes=_config$panza.fontSizes;


var androidStyles={
padding:0,
fontSize:fontSizes[4]};


var child=_react2.default.Children.only(this.props.children);
var clone=_react2.default.cloneElement(child,{
enabled:editable,
style:_extends(androidStyles,child.props.style)});


return(
_react2.default.createElement(_index.Base,{px:1,pt:2},
_react2.default.createElement(_index.Base,{px:1},
_react2.default.createElement(_index.Text,{small:true,light:true},label)),

clone));



}},{key:'renderIOS',value:function renderIOS()

{var _props2=









this.props,label=_props2.label,value=_props2.value,expanded=_props2.expanded,onToggleExpansion=_props2.onToggleExpansion,editable=_props2.editable,backgroundColor=_props2.backgroundColor,other=_objectWithoutProperties(_props2,['label','value','expanded','onToggleExpansion','editable','backgroundColor']);

var Row=
_react2.default.createElement(_index.TouchableInput,_extends({
label:label,
value:value,
onPress:onToggleExpansion,
backgroundColor:backgroundColor,
disabled:!editable},
other));



return(
_react2.default.createElement(_index.InputExpandable,{
expanded:expanded,
Row:Row},

_react2.default.Children.only(this.props.children)));


}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.View,{style:{flex:1}},
_reactNative.Platform.OS==='android'?
this.renderAndroid():
this.renderIOS()));



}}]);return InputPicker;}(_react2.default.Component);InputPicker.displayName='InputPicker';InputPicker.propTypes={onToggleExpansion:_react.PropTypes.func.isRequired,editable:_react.PropTypes.bool,value:_react.PropTypes.string,label:_react.PropTypes.string.isRequired,expanded:_react.PropTypes.bool,children:_react.PropTypes.node,backgroundColor:_react.PropTypes.string};InputPicker.contextTypes={panza:_react.PropTypes.object};InputPicker.defaultProps={editable:true};exports.default=



InputPicker;
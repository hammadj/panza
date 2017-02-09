Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');





var _config=require('../config');var _config2=_interopRequireDefault(_config);
var _color=require('color');var _color2=_interopRequireDefault(_color);

var _index=require('../index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}









var Button=function Button(_ref,_ref2)








{var label=_ref.label,textColor=_ref.textColor,block=_ref.block,children=_ref.children,backgroundColor=_ref.backgroundColor,disabled=_ref.disabled,underlayColor=_ref.underlayColor,other=_objectWithoutProperties(_ref,['label','textColor','block','children','backgroundColor','disabled','underlayColor']);var panza=_ref2.panza;

var child=children&&typeof children==='string'?
_react2.default.createElement(_index.PrimaryText,{color:textColor},children):
children;

return(
_react2.default.createElement(_index.Base,_extends({
Component:_reactNative.TouchableHighlight,
accessibilityComponentType:'button',
disabled:disabled,
baseStyle:[
styles.button,
block&&styles.block,
disabled&&styles.disabled],

backgroundColor:backgroundColor,
underlayColor:underlayColor},
other),

_react2.default.createElement(_reactNative.View,{style:styles.buttonContent},
child||
_react2.default.createElement(_index.PrimaryText,{color:textColor},label))));




};

Button.propTypes={


disabled:_react.PropTypes.bool,


label:_react.PropTypes.string,
onPress:_react.PropTypes.func.isRequired,
underlayColor:_react.PropTypes.string,
backgroundColor:_react.PropTypes.string,


block:_react.PropTypes.bool,


textColor:_react.PropTypes.string};


Button.displayName='Button';

Button.defaultProps={
backgroundColor:'info',
disabled:false,
textColor:'white',
underlayColor:'darken',
block:false,
p:2};


Button.contextTypes={
panza:_react.PropTypes.object};


var styles=_reactNative.StyleSheet.create({
button:{
borderWidth:0,
borderRadius:3,
justifyContent:'space-around',
alignItems:'center',
flexDirection:'row'},

disabled:{
opacity:0.2},

block:{
alignSelf:'stretch'},

buttonContent:{
flexDirection:'row',
justifyContent:'center',
alignItems:'center'}});exports.default=



Button;
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');





var _Base=require('../Base');var _Base2=_interopRequireDefault(_Base);
var _index=require('./index');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}








function renderOption(option,i){
var primary=i===0;
if(primary){
return(
_react2.default.createElement(_index.PrimaryButton,{
key:i,
block:true,
onPress:option.onSelect,
label:option.label}));


}

return(
_react2.default.createElement(_index.NakedButton,{
key:i,
mt:1,
block:true,
backgroundColor:option.backgroundColor||'white',
onPress:option.onSelect,
label:option.label}));


}








var VerticalButtonGroup=function VerticalButtonGroup(_ref){var style=_ref.style,options=_ref.options,other=_objectWithoutProperties(_ref,['style','options']);

return(
_react2.default.createElement(_Base2.default,_extends({style:style},other),
options.map(function(option,i){return renderOption(option,i);})));


};

VerticalButtonGroup.displayName='VerticalButtonGroup';

VerticalButtonGroup.propTypes={


options:_react.PropTypes.arrayOf(
_react.PropTypes.shape({
label:_react.PropTypes.string.isRequired,
onSelect:_react.PropTypes.func.isRequired})).

isRequired};exports.default=



VerticalButtonGroup;
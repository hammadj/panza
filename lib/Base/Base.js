Object.defineProperty(exports,"__esModule",{value:true});exports.colorStyle=exports.paddings=exports.margins=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.






























































radii=radii;var _react=require('react');var _react2=_interopRequireDefault(_react);var _config=require('../config');var _config2=_interopRequireDefault(_config);var _reactNative=require('react-native');var _color=require('color');var _color2=_interopRequireDefault(_color);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var n=function n(key,x,s){return typeof x==='number'?_defineProperty({},key,s[x]):null;};var margins=exports.margins=function margins(props,scale){var s=scale||[];var _ref2=props||{},m=_ref2.m,mx=_ref2.mx,my=_ref2.my,mt=_ref2.mt,mr=_ref2.mr,mb=_ref2.mb,ml=_ref2.ml;var result=_extends({},n('margin',m,s),n('marginTop',mt,s),n('marginBottom',mb,s),n('marginTop',my,s),n('marginBottom',my,s),n('marginLeft',ml,s),n('marginRight',mr,s),n('marginLeft',mx,s),n('marginRight',mx,s));return result;};var paddings=exports.paddings=function paddings(props,scale){var s=scale||[];var _ref3=props||{},p=_ref3.p,px=_ref3.px,py=_ref3.py,pt=_ref3.pt,pr=_ref3.pr,pb=_ref3.pb,pl=_ref3.pl;var result=_extends({},n('padding',p,s),n('paddingTop',pt,s),n('paddingBottom',pb,s),n('paddingTop',py,s),n('paddingBottom',py,s),n('paddingLeft',pl,s),n('paddingRight',pr,s),n('paddingLeft',px,s),n('paddingRight',px,s));return result;};var getColor=function getColor(color,colors){if(color&&colors[color]){return colors[color];}else if(typeof color==='string'){return color;}};function radii(props){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:2;var _ref4=


props||{},rounded=_ref4.rounded;

var borderRadius=void 0;

if(rounded===true){
borderRadius=r;
}else if(rounded===false){
borderRadius=0;
}else if(typeof rounded==='number'){
borderRadius=rounded;
}

if(typeof borderRadius==='undefined'){
return{};
}else{
return{borderRadius:borderRadius};
}
}

var colorStyle=exports.colorStyle=function colorStyle(props){var colors=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var _ref5=



props||{},backgroundColor=_ref5.backgroundColor;

var result={};

if(backgroundColor){
result.backgroundColor=getColor(backgroundColor,colors);
}

return result;
};var







Base=function(_React$Component){_inherits(Base,_React$Component);function Base(){_classCallCheck(this,Base);return _possibleConstructorReturn(this,(Base.__proto__||Object.getPrototypeOf(Base)).apply(this,arguments));}_createClass(Base,[{key:'render',value:function render()















































































{var _props=














this.props,style=_props.style,Component=_props.Component,_props$baseStyle=_props.baseStyle,baseStyle=_props$baseStyle===undefined?{}:_props$baseStyle,wrap=_props.wrap,underlayColor=_props.underlayColor,flex=_props.flex,row=_props.row,column=_props.column,auto=_props.auto,align=_props.align,justify=_props.justify,props=_objectWithoutProperties(_props,['style','Component','baseStyle','wrap','underlayColor','flex','row','column','auto','align','justify']);var


panza=
this.context.panza;var _config$panza=_extends({},_config2.default,





panza),scale=_config$panza.scale,colors=_config$panza.colors,borderRadius=_config$panza.borderRadius;

var sx=[
baseStyle,
style,
margins(props,scale),
paddings(props,scale),
colorStyle(props,colors,panza),
radii(props,borderRadius),
flex?{flex:flex}:null,
wrap?{flexWrap:'wrap'}:null,
column?{flexDirection:'column'}:null,
row?{flexDirection:'row'}:null,
align?{alignItems:align}:null,
justify?{justifyContent:justify}:null];


var underlay=underlayColor==='darken'&&props.backgroundColor?
(0,_color2.default)(getColor(props.backgroundColor,colors)).
darken(0.1).
hexString():
underlayColor;

var Element=Component||_reactNative.View;

return _react2.default.createElement(Element,_extends({},props,{underlayColor:underlay,style:sx}));

}}]);return Base;}(_react2.default.Component);Base.propTypes={m:_react.PropTypes.oneOf([0,1,2,3,4]),mt:_react.PropTypes.oneOf([0,1,2,3,4]),mr:_react.PropTypes.oneOf([0,1,2,3,4]),mb:_react.PropTypes.oneOf([0,1,2,3,4]),ml:_react.PropTypes.oneOf([0,1,2,3,4]),mx:_react.PropTypes.oneOf([0,1,2,3,4]),my:_react.PropTypes.oneOf([0,1,2,3,4]),p:_react.PropTypes.oneOf([0,1,2,3,4]),pt:_react.PropTypes.oneOf([0,1,2,3,4]),pr:_react.PropTypes.oneOf([0,1,2,3,4]),pb:_react.PropTypes.oneOf([0,1,2,3,4]),pl:_react.PropTypes.oneOf([0,1,2,3,4]),px:_react.PropTypes.oneOf([0,1,2,3,4]),py:_react.PropTypes.oneOf([0,1,2,3,4]),backgroundColor:_react.PropTypes.string,rounded:_react.PropTypes.oneOfType([_react.PropTypes.bool,_react.PropTypes.number]),flex:_react.PropTypes.number,wrap:_react.PropTypes.bool,column:_react.PropTypes.bool,row:_react.PropTypes.bool,align:_react.PropTypes.string,justify:_react.PropTypes.string};Base.displayName='Base';Base.contextTypes={panza:_react.PropTypes.object};exports.default=



Base;
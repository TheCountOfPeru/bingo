(this.webpackJsonpbingo=this.webpackJsonpbingo||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var r=s(1),a=s.n(r),l=s(8),c=s.n(l),n=(s(13),s(2)),i=s(3),u=s(4),h=s(6),o=s(5),x=(s(14),s(0)),d="border-2 border-solid border-black text-center focus:outline-none float-left text-white bg-black w-8 h-8 text-sm 2xl:w-24 2xl:h-24 2xl:text-7xl xl:w-20 xl:h-20 xl:text-4xl lg:w-16 lg:h-16 lg:text-2xl md:w-12 md:h-12 md:text-lg sm:w-8 sm:h-8 sm:text-sm flex items-center justify-center",b=" border-2 border-solid border-black text-center focus:outline-none float-left bg-white w-8 h-8 text-sm 2xl:w-24 2xl:h-24 2xl:text-7xl xl:w-20 xl:h-20 xl:text-4xl lg:w-16 lg:h-16 lg:text-2xl md:w-12 md:h-12 md:text-lg sm:w-8 sm:h-8 sm:text-sm flex items-center justify-center",j="text-9xl text-center border-2 p-0 border-solid border-black",p="after:table after:clear-both bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-4 px-8 border border-blue-500 hover:border-transparent rounded text-sm 2xl:text-5xl xl:text-4xl md:text-2xl sm:text-sm mx-10 my-3";function v(e,t){return Array(t-e+1).fill().map((function(t,s){return e+s}))}function f(e){return Object(x.jsx)("p",{className:e.css,children:e.value})}var m=function(e){Object(h.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){var e=[];return null===this.props.value?e.push(Object(x.jsx)("p",{className:"text-9xl text-center border-2 p-0 border-solid border-black select-none text-transparent",children:"nothing"})):0<this.props.value&&this.props.value<16?e.push(Object(x.jsxs)("p",{className:j,children:["B",this.props.value]})):15<this.props.value&&this.props.value<31?e.push(Object(x.jsxs)("p",{className:j,children:["I",this.props.value]})):15<this.props.value&&this.props.value<31?e.push(Object(x.jsxs)("p",{className:j,children:["N",this.props.value]})):30<this.props.value&&this.props.value<46?e.push(Object(x.jsxs)("p",{className:j,children:["G",this.props.value]})):45<this.props.value&&this.props.value<61?e.push(Object(x.jsxs)("p",{className:j,children:["O",this.props.value]})):60<this.props.value&&this.props.value<76&&e.push(Object(x.jsxs)("p",{className:j,children:["I",this.props.value]})),Object(x.jsx)("div",{children:e})}}]),s}(a.a.Component),O=function(e){Object(h.a)(s,e);var t=Object(o.a)(s);function s(e){var r;return Object(i.a)(this,s),(r=t.call(this,e)).state={squares_value:v(1,75),squares_active:v(1,75),squares_css:Array(75).fill(b),current_value:null},r.drawNumber=r.drawNumber.bind(Object(n.a)(r)),r.resetBoard=r.resetBoard.bind(Object(n.a)(r)),r}return Object(u.a)(s,[{key:"drawNumber",value:function(){if(this.state.squares_active.length>0){var e=Math.floor(Math.random()*this.state.squares_active.length),t=this.state.squares_active.slice(),s=t.splice(e,1),r=this.state.squares_css.slice();r[this.state.squares_value.indexOf(s[0])]="border-black text-center focus:outline-none float-left text-white bg-black w-8 h-8 text-sm 2xl:w-24 2xl:h-24 2xl:text-7xl xl:w-20 xl:h-20 xl:text-4xl lg:w-16 lg:h-16 lg:text-2xl md:w-12 md:h-12 md:text-lg sm:w-8 sm:h-8 sm:text-sm flex items-center justify-center",this.setState({squares_css:r}),this.setState({squares_active:t}),this.setState({current_value:s[0]})}}},{key:"resetBoard",value:function(){this.setState({squares_css:Array(75).fill(b)}),this.setState({squares_active:v(1,75)}),this.setState({current_value:null})}},{key:"renderSquare",value:function(e){return Object(x.jsx)(f,{value:this.state.squares_value[e],css:this.state.squares_css[e]})}},{key:"renderCurrentDrawnValue",value:function(){return Object(x.jsx)(m,{value:this.state.current_value})}},{key:"renderBoard",value:function(){var e=[];e.push(Object(x.jsx)("p",{class:d,children:"B"}));for(var t=0;t<15;t++)e.push(this.renderSquare(t));var s=[];s.push(Object(x.jsx)("p",{class:d,children:"I"}));for(var r=15;r<30;r++)s.push(this.renderSquare(r));var a=[];a.push(Object(x.jsx)("p",{class:d,children:"N"}));for(var l=30;l<45;l++)a.push(this.renderSquare(l));var c=[];c.push(Object(x.jsx)("p",{class:d,children:"G"}));for(var n=45;n<60;n++)c.push(this.renderSquare(n));var i=[];i.push(Object(x.jsx)("p",{class:d,children:"O"}));for(var u=60;u<75;u++)i.push(this.renderSquare(u));return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:" after:table after:clear-both",children:e}),Object(x.jsx)("div",{className:" after:table after:clear-both",children:s}),Object(x.jsx)("div",{className:" after:table after:clear-both",children:a}),Object(x.jsx)("div",{className:" after:table after:clear-both",children:c}),Object(x.jsx)("div",{className:" after:table after:clear-both",children:i})]})}},{key:"render",value:function(){return Object(x.jsxs)("div",{class:" ml-auto mr-auto w-auto ",children:[Object(x.jsx)("div",{class:"text-center text-7xl ",children:"BINGO"}),this.renderBoard(),Object(x.jsxs)("div",{class:" ml-auto mr-auto w-auto",children:[Object(x.jsx)("button",{class:p,onClick:this.drawNumber,children:"Draw"}),Object(x.jsx)("button",{class:p,onClick:this.resetBoard,children:"Reset"})]}),Object(x.jsx)("div",{children:this.renderCurrentDrawnValue()})]})}}]),s}(a.a.Component),w=function(e){Object(h.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{class:" flex flex-row",children:Object(x.jsx)(O,{})}),Object(x.jsx)("footer",{class:"border-t border-gray-400 ",children:Object(x.jsx)("div",{class:"",children:Object(x.jsx)("div",{class:"flex flex-wrap justify-center ",children:Object(x.jsx)("ul",{class:"flex items-center space-x-4",children:"Made by Jonathan Yee"})})})})]})}}]),s}(a.a.Component);var g=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{class:"",children:Object(x.jsx)(w,{})})})},y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(t){var s=t.getCLS,r=t.getFID,a=t.getFCP,l=t.getLCP,c=t.getTTFB;s(e),r(e),a(e),l(e),c(e)}))};c.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(g,{})}),document.getElementById("root")),y()}},[[16,1,2]]]);
//# sourceMappingURL=main.d263d60a.chunk.js.map
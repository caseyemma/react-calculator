import{j as jsxRuntime,r as react,R as ReactDOM,a as React}from"./vendor.c5be457d.js";const p=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const t of l.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function r(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=r(a);fetch(a.href,l)}};p();var index="",App$1="";const jsx=jsxRuntime.exports.jsx,jsxs=jsxRuntime.exports.jsxs;function App(){const[display,setDisplay]=react.exports.useState("0"),[firstVal,setFirstVal]=react.exports.useState(""),[nextVal,setNextVal]=react.exports.useState(""),[operatorFlag,setOperatorFlag]=react.exports.useState(0),[result,setResult]=react.exports.useState(""),handleClick=e=>{e==="."&&firstVal.slice(-1)=="."||display.indexOf(".")!=-1&&e==="."||e==="0"&&display==="0"||(operatorFlag?e!=="+"&&e!=="/"&&e!=="*"&&e!=="-"?nextVal.length>1?nextVal.slice(-1)=="-"?(setFirstVal(firstVal+nextVal.slice(-2)),setNextVal(e),setDisplay(e),setOperatorFlag(0)):(setFirstVal(firstVal+nextVal.slice(-1)),setNextVal(e),setDisplay(e),setOperatorFlag(0)):(setFirstVal(firstVal+nextVal),setNextVal(e),setDisplay(e),setOperatorFlag(0)):(setNextVal(nextVal+e),setDisplay(nextVal+e)):e=="+"||e=="/"||e=="*"||e=="-"?(setOperatorFlag(1),setFirstVal(firstVal+nextVal),setNextVal(e),setDisplay(e)):(setNextVal(nextVal+e),setDisplay(nextVal+e)))},calculate=()=>{let answer=eval(firstVal+nextVal);setFirstVal(String(answer)),setResult(String(answer)),setDisplay(String(answer)),setNextVal(""),setOperatorFlag(0)},clear=()=>{setFirstVal(""),setDisplay("0"),setResult(""),setNextVal("")};return jsx("div",{className:"container",children:jsxs("div",{className:"grid",children:[jsx("div",{id:"display-area",children:jsx("div",{id:"display",className:"total",children:display})}),jsx("div",{onClick:()=>handleClick("7"),className:"padButton inner-pad",value:"7",id:"seven",children:"7"}),jsx("div",{onClick:()=>handleClick("8"),className:"padButton inner-pad",value:"8",id:"eight",children:"8"}),jsx("div",{onClick:()=>handleClick("9"),className:"padButton inner-pad",value:"9",id:"nine",children:"9"}),jsx("div",{onClick:()=>handleClick("4"),className:"padButton inner-pad",value:"4",id:"four",children:"4"}),jsx("div",{onClick:()=>handleClick("5"),className:"padButton inner-pad",value:"5",id:"five",children:"5"}),jsx("div",{onClick:()=>handleClick("6"),className:"padButton inner-pad",value:"6",id:"six",children:"6"}),jsx("div",{onClick:()=>handleClick("1"),className:"padButton inner-pad",value:"1",id:"one",children:"1"}),jsx("div",{onClick:()=>handleClick("2"),className:"padButton inner-pad",value:"2",id:"two",children:"2"}),jsx("div",{onClick:()=>handleClick("3"),className:"padButton inner-pad",value:"3",id:"three",children:"3"}),jsx("div",{onClick:()=>handleClick("0"),className:"padButton inner-pad",value:"0",id:"zero",children:"0"}),jsx("div",{onClick:()=>handleClick("/"),className:"padButton operators",value:"/",id:"divide",children:"/"}),jsx("div",{onClick:()=>handleClick("*"),className:"padButton operators",value:"*",id:"multiply",children:"x"}),jsx("div",{onClick:()=>handleClick("."),className:"padButton inner-pad",value:".",id:"decimal",children:"."}),jsx("div",{onClick:clear,className:"padButton alert-btn",value:"c",id:"clear",children:"CLEAR"}),jsx("div",{onClick:()=>handleClick("-"),className:"padButton operators",value:"-",id:"subtract",children:"-"}),jsx("div",{onClick:()=>handleClick("+"),className:"padButton operators",value:"+",id:"add",children:"+"}),jsx("div",{onClick:calculate,className:"padButton operators",value:"=",id:"equals",children:"="})]})})}ReactDOM.render(jsx(React.StrictMode,{children:jsx(App,{})}),document.getElementById("root"));
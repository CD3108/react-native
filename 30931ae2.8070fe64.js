(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,r=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,u=p["".concat(r,".").concat(m)]||p[m]||d[m]||c;return n?a.a.createElement(u,i(i({ref:t},b),{},{components:n})):a.a.createElement(u,i({ref:t},b))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,r=new Array(c);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var b=2;b<c;b++)r[b]=n[b];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},278:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n(2),a=n(7),c=(n(0),n(1006)),r={id:"components-and-apis",title:"Core Components and APIs"},i={unversionedId:"components-and-apis",id:"components-and-apis",isDocsHomePage:!1,title:"Core Components and APIs",description:"React Native provides a number of built-in Core Components ready for you to use in your app. You can find them all in the left sidebar (or menu above, if you are on a narrow screen). If you're not sure where to get started, take a look at the following categories:",source:"@site/../docs/components-and-apis.md",slug:"/components-and-apis",permalink:"/docs/next/components-and-apis",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/components-and-apis.md",version:"current",lastUpdatedAt:1604408219,sidebar:"components",next:{title:"ActivityIndicator",permalink:"/docs/next/activityindicator"}},s=[{value:"Basic Components",id:"basic-components",children:[]},{value:"User Interface",id:"user-interface",children:[]},{value:"List Views",id:"list-views",children:[]},{value:"Android Components and APIs",id:"android-components-and-apis",children:[]},{value:"iOS Components and APIs",id:"ios-components-and-apis",children:[]},{value:"Others",id:"others",children:[]}],b={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"React Native provides a number of built-in ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"intro-react-native-components"}),"Core Components")," ready for you to use in your app. You can find them all in the left sidebar (or menu above, if you are on a narrow screen). If you're not sure where to get started, take a look at the following categories:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"components-and-apis#basic-components"}),"Basic Components")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"components-and-apis#user-interface"}),"User Interface")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"components-and-apis#list-views"}),"List Views")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"components-and-apis#android-components-and-apis"}),"Android-specific")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"components-and-apis#ios-components-and-apis"}),"iOS-specific")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(o.a)({parentName:"li"},{href:"components-and-apis#others"}),"Others"))),Object(c.b)("p",null,"You're not limited to the components and APIs bundled with React Native. React Native has a community of thousands of developers. If you're looking for a library that does something specific, please refer to ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"libraries#finding-libraries"}),"this guide about finding libraries"),"."),Object(c.b)("h2",{id:"basic-components"},"Basic Components"),Object(c.b)("p",null,"Most apps will end up using one of these basic components."),Object(c.b)("div",{className:"component-grid component-grid-border"},Object(c.b)("div",{className:"component"},Object(c.b)("a",{href:"./view"},Object(c.b)("h3",null,"View"),Object(c.b)("p",null,"The most fundamental component for building a UI."))),Object(c.b)("div",{className:"component"},Object(c.b)("a",{href:"./text"},Object(c.b)("h3",null,"Text"),Object(c.b)("p",null,"A component for displaying text."))),Object(c.b)("div",{className:"component"},Object(c.b)("a",{href:"./image"},Object(c.b)("h3",null,"Image"),Object(c.b)("p",null,"A component for displaying images."))),Object(c.b)("div",{className:"component"},Object(c.b)("a",{href:"./textinput"},Object(c.b)("h3",null,"TextInput"),Object(c.b)("p",null,"A component for inputting text into the app via a keyboard."))),Object(c.b)("div",{className:"component"},Object(c.b)("a",{href:"./scrollview"},Object(c.b)("h3",null,"ScrollView"),Object(c.b)("p",null,"Provides a scrolling container that can host multiple components and views."))),Object(c.b)("div",{className:"component"},Object(c.b)("a",{href:"./stylesheet"},Object(c.b)("h3",null,"StyleSheet"),Object(c.b)("p",null,"Provides an abstraction layer similar to CSS stylesheets.")))),Object(c.b)("h2",{id:"user-interface"},"User Interface"),Object(c.b)("p",null,"These common user interface controls will render on any platform."),Object(c.b)("div",{className:"component-grid component-grid-border"},Object(c.b)("div",{className:"component"},Object(c.b)("a",{href:"./button"},Object(c.b)("h3",null,"Button"),Object(c.b)("p",null,"A basic button component for handling touches that should render nicely on any platform."))),Object(c.b)("div",{className:"component"},Object(c.b)("a",{href:"./switch"},Object(c.b)("h3",null,"Switch"),Object(c.b)("p",null,"Renders a boolean input.")))),Object(c.b)("h2",{id:"list-views"},"List Views"),Object(c.b)("p",null,"Unlike the more generic ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"./scrollview"}),Object(c.b)("inlineCode",{parentName:"a"},"ScrollView")),", the following list view components only render elements that are currently showing on the screen. This makes them a performant choice for displaying long lists of data."),Object(c.b)("div",{className:"component-grid component-grid-border"},Object(c.b)("div",{className:"component"},Object(c.b)("a",{href:"./flatlist"},Object(c.b)("h3",null,"FlatList"),Object(c.b)("p",null,"A component for rendering performant scrollable lists."))),Object(c.b)("div",{className:"component"},Object(c.b)("a",{href:"./sectionlist"},Object(c.b)("h3",null,"SectionList"),Object(c.b)("p",null,"Like ",Object(c.b)("code",null,"FlatList"),", but for sectioned lists.")))),Object(c.b)("h2",{id:"android-components-and-apis"},"Android Components and APIs"),Object(c.b)("p",null,"Many of the following components provide wrappers for commonly used Android classes."),Object(c.b)("div",{className:"component-grid component-grid-border"},Object(c.b)("div",{className:"component"},Object(c.b)("a",{href:"./backhandler"},Object(c.b)("h3",null,"BackHandler"),Object(c.b)("p",null,"Detect hardware button presses for back navigation."))),Object(c.b)("div",{className:"component"},Object(c.b)("a",{href:"./drawerlayoutandroid"},Object(c.b)("h3",null,"DrawerLayoutAndroid"),Object(c.b)("p",null,"Renders a ",Object(c.b)("code",null,"DrawerLayout")," on Android."))),Object(c.b)("div",{className:"component"},Object(c.b)("a",{href:"./permissionsandroid"},Object(c.b)("h3",null,"PermissionsAndroid"),Object(c.b)("p",null,"Provides access to the permissions model introduced in Android M."))),Object(c.b)("div",{className:"component"},Object(c.b)("a",{href:"./toastandroid"},Object(c.b)("h3",null,"ToastAndroid"),Object(c.b)("p",null,"Create an Android Toast alert.")))),Object(c.b)("h2",{id:"ios-components-and-apis"},"iOS Components and APIs"),Object(c.b)("p",null,"Many of the following components provide wrappers for commonly used UIKit classes."),Object(c.b)("div",{className:"component-grid component-grid-border"},Object(c.b)("div",{className:"component"},Object(c.b)("a",{href:"./actionsheetios"},Object(c.b)("h3",null,"ActionSheetIOS"),Object(c.b)("p",null,"API to display an iOS action sheet or share sheet.")))),Object(c.b)("h2",{id:"others"},"Others"),Object(c.b)("p",null,"These components may be useful for certain applications. For an exhaustive list of components and APIs, check out the sidebar to the left (or menu above, if you are on a narrow screen)."),Object(c.b)("div",{className:"component-grid"},Object(c.b)("div",{className:"component"},Object(c.b)("a",{href:"./activityindicator"},Object(c.b)("h3",null,"ActivityIndicator"),Object(c.b)("p",null,"Displays a circular loading indicator."))),Object(c.b)("div",{className:"component"},Object(c.b)("a",{href:"./alert"},Object(c.b)("h3",null,"Alert"),Object(c.b)("p",null,"Launches an alert dialog with the specified title and message."))),Object(c.b)("div",{className:"component"},Object(c.b)("a",{href:"./animated"},Object(c.b)("h3",null,"Animated"),Object(c.b)("p",null,"A library for creating fluid, powerful animations that are easy to build and maintain."))),Object(c.b)("div",{className:"component"},Object(c.b)("a",{href:"./dimensions"},Object(c.b)("h3",null,"Dimensions"),Object(c.b)("p",null,"Provides an interface for getting device dimensions."))),Object(c.b)("div",{className:"component"},Object(c.b)("a",{href:"./keyboardavoidingview"},Object(c.b)("h3",null,"KeyboardAvoidingView"),Object(c.b)("p",null,"Provides a view that moves out of the way of the virtual keyboard automatically."))),Object(c.b)("div",{className:"component"},Object(c.b)("a",{href:"./linking"},Object(c.b)("h3",null,"Linking"),Object(c.b)("p",null,"Provides a general interface to interact with both incoming and outgoing app links."))),Object(c.b)("div",{className:"component"},Object(c.b)("a",{href:"./modal"},Object(c.b)("h3",null,"Modal"),Object(c.b)("p",null,"Provides a simple way to present content above an enclosing view."))),Object(c.b)("div",{className:"component"},Object(c.b)("a",{href:"./pixelratio"},Object(c.b)("h3",null,"PixelRatio"),Object(c.b)("p",null,"Provides access to the device pixel density."))),Object(c.b)("div",{className:"component"},Object(c.b)("a",{href:"./refreshcontrol"},Object(c.b)("h3",null,"RefreshControl"),Object(c.b)("p",null,"This component is used inside a ",Object(c.b)("code",null,"ScrollView")," to add pull to refresh functionality."))),Object(c.b)("div",{className:"component"},Object(c.b)("a",{href:"./statusbar"},Object(c.b)("h3",null,"StatusBar"),Object(c.b)("p",null,"Component to control the app status bar.")))))}l.isMDXComponent=!0}}]);
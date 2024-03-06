"use strict";(self.webpackChunkdashy=self.webpackChunkdashy||[]).push([[903],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>c});var a=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=p(n),h=i,c=g["".concat(l,".").concat(h)]||g[h]||u[h]||r;return n?a.createElement(c,o(o({ref:t},d),{},{components:n})):a.createElement(c,o({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4484:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(8168),i=(n(6540),n(5680));const r={},o="Development Guides",s={unversionedId:"development-guides",id:"development-guides",isDocsHomePage:!1,title:"Development Guides",description:"A series of short tutorials, to guide you through the most common development tasks.",source:"@site/docs/development-guides.md",sourceDirName:".",slug:"/development-guides",permalink:"/docs/development-guides",editUrl:"https://github.com/Lissy93/dashy/edit/gh-pages/docs/docs/development-guides.md",version:"current",frontMatter:{},sidebar:"dashySidebar",previous:{title:"Developing",permalink:"/docs/developing"},next:{title:"Privacy & Security",permalink:"/docs/privacy"}},l=[{value:"Creating a new theme",id:"creating-a-new-theme",children:[{value:"1. Add Theme Name",id:"1-add-theme-name",children:[]},{value:"2. Write some Styles",id:"2-write-some-styles",children:[]}]},{value:"Writing Translations",id:"writing-translations",children:[{value:"1. Create a new Language File",id:"1-create-a-new-language-file",children:[]},{value:"2. Translate",id:"2-translate",children:[]},{value:"3. Add your file to the app",id:"3-add-your-file-to-the-app",children:[]}]},{value:"Adding a new option in the config file",id:"adding-a-new-option-in-the-config-file",children:[]},{value:"Updating Dependencies",id:"updating-dependencies",children:[]},{value:"Developing Netlify Cloud Functions",id:"developing-netlify-cloud-functions",children:[{value:"1. Run Netlify Dev Server",id:"1-run-netlify-dev-server",children:[]},{value:"2. Create a lambda function",id:"2-create-a-lambda-function",children:[]},{value:"3. Redirect the Node endpoint to the function",id:"3-redirect-the-node-endpoint-to-the-function",children:[]}]},{value:"Hiding Page Furniture on Certain Routes",id:"hiding-page-furniture-on-certain-routes",children:[{value:"1. Add the route name to the should hide array",id:"1-add-the-route-name-to-the-should-hide-array",children:[]},{value:"2. Add the conditional to the structural component to hide",id:"2-add-the-conditional-to-the-structural-component-to-hide",children:[]}]},{value:"Adding / Using Environmental Variables",id:"adding--using-environmental-variables",children:[]},{value:"Building a Widget",id:"building-a-widget",children:[{value:"Step 0 - Prerequisites",id:"step-0---prerequisites",children:[]},{value:"Step 1 - Create Widget",id:"step-1---create-widget",children:[]},{value:"Step 2 - Adding Functionality",id:"step-2---adding-functionality",children:[]},{value:"Step 3 - Register",id:"step-3---register",children:[]},{value:"Step 4 - Docs",id:"step-4---docs",children:[]}]},{value:"Respecting Config Permissions",id:"respecting-config-permissions",children:[]}],p={toc:l},d="wrapper";function g(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"development-guides"},"Development Guides"),(0,i.yg)("p",null,"A series of short tutorials, to guide you through the most common development tasks."),(0,i.yg)("p",null,"Sections:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#creating-a-new-theme"},"Creating a new theme")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#writing-translations"},"Writing Translations")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#adding-a-new-option-in-the-config-file"},"Adding a new option in the config file")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#updating-dependencies"},"Updating Dependencies")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#developing-netlify-cloud-functions"},"Writing Netlify Cloud Functions")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#hiding-page-furniture-on-certain-routes"},"Hiding Page Furniture")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#adding--using-environmental-variables"},"Adding / Using Environmental Variables")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#building-a-widget"},"Building a Widget")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#respecting-config-permissions"},"Respecting Config Permissions"))),(0,i.yg)("h2",{id:"creating-a-new-theme"},"Creating a new theme"),(0,i.yg)("p",null,"Adding a new theme is really easy. There're two things you need to do: Pass the theme name to Dashy, so that it can be added to the theme selector dropdown menu, and then write some styles!"),(0,i.yg)("h3",{id:"1-add-theme-name"},"1. Add Theme Name"),(0,i.yg)("p",null,"Choose a snappy name for your theme, and add it to the ",(0,i.yg)("inlineCode",{parentName:"p"},"builtInThemes")," array inside ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/src/utils/defaults.js#L27"},(0,i.yg)("inlineCode",{parentName:"a"},"defaults.js")),"."),(0,i.yg)("h3",{id:"2-write-some-styles"},"2. Write some Styles"),(0,i.yg)("p",null,"Put your theme styles inside ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/src/styles/color-themes.scss"},(0,i.yg)("inlineCode",{parentName:"a"},"color-themes.scss")),".\nCreate a new block, and make sure that ",(0,i.yg)("inlineCode",{parentName:"p"},"data-theme")," matches the theme name you chose above. For example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-css"},"html[data-theme='tiger'] {\n  --primary: #f58233;\n  --background: #0b1021;\n}\n")),(0,i.yg)("p",null,"Then you can go ahead and write your own custom CSS. Although all CSS is supported here, the best way to define your theme is by setting the CSS variables. You can find a ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/docs/theming.md#css-variables"},"list of all CSS variables, here"),"."),(0,i.yg)("p",null,"For a full guide on styling, see ",(0,i.yg)("a",{parentName:"p",href:"./theming"},"Theming Docs"),"."),(0,i.yg)("p",null,"Note that if your theme is just for yourself, and you're not submitting a PR, then you can instead just pass it under ",(0,i.yg)("inlineCode",{parentName:"p"},"appConfig.cssThemes")," inside your config file. And then put your theme in your own stylesheet, and pass it into the Docker container - ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/docs/theming.md#adding-your-own-theme"},"see how"),"."),(0,i.yg)("h2",{id:"writing-translations"},"Writing Translations"),(0,i.yg)("p",null,"For full docs about Dashy's multi-language support, see ",(0,i.yg)("a",{parentName:"p",href:"./multi-language-support"},"Multi-Language Support")),(0,i.yg)("p",null,"Dashy is using ",(0,i.yg)("a",{parentName:"p",href:"https://vue-i18n.intlify.dev/guide/"},"vue-i18n")," to manage multi-language support."),(0,i.yg)("p",null,"Adding a new language is pretty straightforward, with just three steps:"),(0,i.yg)("h3",{id:"1-create-a-new-language-file"},"1. Create a new Language File"),(0,i.yg)("p",null,"Create a new JSON file in ",(0,i.yg)("inlineCode",{parentName:"p"},"./src/assets/locales")," name is a 2-digit ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"},"ISO-639 code")," for your language, E.g. for German ",(0,i.yg)("inlineCode",{parentName:"p"},"de.json"),", French ",(0,i.yg)("inlineCode",{parentName:"p"},"fr.json")," or Spanish ",(0,i.yg)("inlineCode",{parentName:"p"},"es.json")," - You can find a list of all ISO codes at ",(0,i.yg)("a",{parentName:"p",href:"https://www.iso.org/obp/ui"},"iso.org"),"."),(0,i.yg)("h3",{id:"2-translate"},"2. Translate"),(0,i.yg)("p",null,"Using ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/tree/master/src/assets/locales/en.json"},(0,i.yg)("inlineCode",{parentName:"a"},"en.json"))," as an example, translate the JSON values to your language, while leaving the keys as they are. It's fine to leave out certain items, as if they're missing they will fall-back to English. If you see any attribute which include curly braces (",(0,i.yg)("inlineCode",{parentName:"p"},"{xxx}"),"), then leave the inner value of these braces as is, as this is for variables."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "theme-maker": {\n    "export-button": "Benutzerdefinierte Variablen exportieren",\n    "reset-button": "Stile zur\xfccksetzen f\xfcr",\n    "show-all-button": "Alle Variablen anzeigen",\n    "save-button": "Speichern",\n    "cancel-button": "Abbrechen",\n    "saved-toast": "{theme} Erfolgreich aktualisiert",\n    "reset-toast": "Benutzerdefinierte Farben f\xfcr {theme} entfernt"\n  },\n}\n')),(0,i.yg)("h3",{id:"3-add-your-file-to-the-app"},"3. Add your file to the app"),(0,i.yg)("p",null,"In ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/tree/master/src/utils/languages.js"},(0,i.yg)("inlineCode",{parentName:"a"},"./src/utils/languages.js")),", you need to do 2 small things:"),(0,i.yg)("p",null,"First import your new translation file, do this at the top of the page.\nE.g. ",(0,i.yg)("inlineCode",{parentName:"p"},"import de from '@/assets/locales/de.json';")),(0,i.yg)("p",null,"Second, add it to the array of languages, e.g:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"export const languages = [\n  {\n    name: 'English',\n    code: 'en',\n    locale: en,\n    flag: '\ud83c\uddec\ud83c\udde7',\n  },\n  {\n    name: 'German', // The name of your language\n    code: 'de', // The ISO code of your language\n    locale: de, // The name of the file you imported (no quotes)\n    flag: '\ud83c\udde9\ud83c\uddea', // An optional flag emoji\n  },\n];\n")),(0,i.yg)("p",null,"You can also add your new language to the readme file, under the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy#language-switching-"},"Language Switching")," section, and optionally include your name/ username if you'd like to be credited for your work. Done!"),(0,i.yg)("p",null,"If you are not comfortable with making pull requests, or do not want to modify the code, then feel free to instead send the translated file to me, and I can add it into the application. I will be sure to credit you appropriately."),(0,i.yg)("h2",{id:"adding-a-new-option-in-the-config-file"},"Adding a new option in the config file"),(0,i.yg)("p",null,"This section is for, adding a new setting to the config file."),(0,i.yg)("p",null,"All of the users config is specified in ",(0,i.yg)("inlineCode",{parentName:"p"},"./public/conf.yml")," - see ",(0,i.yg)("a",{parentName:"p",href:"./configuring"},"Configuring Docs")," for info.\nIt's important to first ensure that there isn't a similar option already available, the new option is definitely necessary, and most importantly that it is fully backwards compatible."),(0,i.yg)("p",null,"Next choose the appropriate section to place it under"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Application settings should be located under ",(0,i.yg)("inlineCode",{parentName:"li"},"appConfig")),(0,i.yg)("li",{parentName:"ul"},"Page info (such as text and metadata) should be under ",(0,i.yg)("inlineCode",{parentName:"li"},"pageInfo")),(0,i.yg)("li",{parentName:"ul"},"Data relating to specific sections should be under ",(0,i.yg)("inlineCode",{parentName:"li"},"section[n].displayData")),(0,i.yg)("li",{parentName:"ul"},"Settings applied to specific items or widgets, should be under ",(0,i.yg)("inlineCode",{parentName:"li"},"item[n]")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"widget[n]"))),(0,i.yg)("p",null,"For example, if your option is added under ",(0,i.yg)("inlineCode",{parentName:"p"},"appConfig"),", you can access it within your component using the ",(0,i.yg)("inlineCode",{parentName:"p"},"$store"),", this is typically placed in a computed property, e.g:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"computed: {\n  appConfig() {\n    return this.$store.getters.appConfig;\n  },\n  ...\n},\n")),(0,i.yg)("p",null,"Then, where you want to get the users value within your component, use something like: ",(0,i.yg)("inlineCode",{parentName:"p"},"this.appConfig.myProperty"),". If the user hasn't specified the value, Don't forget to have a fallback or default for it."),(0,i.yg)("p",null,"If you have a default fallback value, then this would typically be specified in the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/src/utils/defaults.js"},(0,i.yg)("inlineCode",{parentName:"a"},"defaults.js"))," file."),(0,i.yg)("p",null,"You will now need to add the definition of your new attribute into the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/src/utils/ConfigSchema.js"},"ConfigSchema"),". This will make it available in the UI config editor, and also ensure that the config validation check doesn't fail.\nFor example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'"fontAwesomeKey": {\n  "type": "string",\n  "pattern": "^[a-z0-9]{10}$",\n  "description": "API key for font-awesome",\n  "example": "0821c65656"\n}\n')),(0,i.yg)("p",null,"or"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'"iconSize": {\n  "enum": [ "small", "medium", "large" ],\n  "default": "medium",\n  "description": "The size of each link item / icon"\n}\n')),(0,i.yg)("p",null,"Finally, add your new property to the ",(0,i.yg)("a",{parentName:"p",href:"./configuring"},(0,i.yg)("inlineCode",{parentName:"a"},"configuring.md"))," API docs. Put it under the relevant section, and be sure to include field name, data type, a description and mention that it is optional.  If your new feature needs more explanation, then you can also document it under the relevant section elsewhere in the documentation."),(0,i.yg)("p",null,"Checklist:"),(0,i.yg)("ul",{className:"contains-task-list"},(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Ensure the new attribute is actually necessary, and nothing similar already exists"),(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Update the ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/Lissy93/dashy/blob/master/src/utils/ConfigSchema.js"},"Schema")," with the parameters for your new option"),(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","If required, set a default or fallback value (usually in ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/Lissy93/dashy/blob/master/src/utils/defaults.js"},(0,i.yg)("inlineCode",{parentName:"a"},"defaults.js")),")"),(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Document the new value in ",(0,i.yg)("a",{parentName:"li",href:"./configuring"},(0,i.yg)("inlineCode",{parentName:"a"},"configuring.md")),", and if required under the relevant section in the docs"),(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Ensure your changes are backwards compatible, and that nothing breaks if the attribute isn't specified")),(0,i.yg)("hr",null),(0,i.yg)("h2",{id:"updating-dependencies"},"Updating Dependencies"),(0,i.yg)("p",null,"Running ",(0,i.yg)("inlineCode",{parentName:"p"},"yarn upgrade")," will updated all dependencies based on the ranges specified in the ",(0,i.yg)("inlineCode",{parentName:"p"},"package.json"),". The ",(0,i.yg)("inlineCode",{parentName:"p"},"yarn.lock")," file will be updated, as will the contents of ",(0,i.yg)("inlineCode",{parentName:"p"},"./node_modules"),", for more info, see the ",(0,i.yg)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs/cli/upgrade/"},"yarn upgrade documentation"),". ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/raineorshine/npm-check-updates"},(0,i.yg)("inlineCode",{parentName:"a"},"npm-check-updates"))," is a useful tool to help with this.\nIt is important to thoroughly test after any big dependency updates."),(0,i.yg)("hr",null),(0,i.yg)("h2",{id:"developing-netlify-cloud-functions"},"Developing Netlify Cloud Functions"),(0,i.yg)("p",null,"When Dashy is deployed to Netlify, it is effectively running as a static app, and therefore the server-side code for the Node.js endpoints is not available. However Netlify now supports serverless cloud lambda functions, which can be used to replace most functionality."),(0,i.yg)("h3",{id:"1-run-netlify-dev-server"},"1. Run Netlify Dev Server"),(0,i.yg)("p",null,"First off all, install the Netlify CLI: ",(0,i.yg)("inlineCode",{parentName:"p"},"npm install netlify-cli -g"),"\nThen, from within the root of Dashy's directory, start the server, by running: ",(0,i.yg)("inlineCode",{parentName:"p"},"netlify dev")),(0,i.yg)("h3",{id:"2-create-a-lambda-function"},"2. Create a lambda function"),(0,i.yg)("p",null,"This should be saved in the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/tree/master/services/serverless-functions"},(0,i.yg)("inlineCode",{parentName:"a"},"./services/serverless-functions"))," directory"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"exports.handler = async () => ({\n  statusCode: 200,\n  body: 'Return some data here...',\n});\n")),(0,i.yg)("h3",{id:"3-redirect-the-node-endpoint-to-the-function"},"3. Redirect the Node endpoint to the function"),(0,i.yg)("p",null,"In the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/FEATURE/serverless-functions/netlify.toml"},(0,i.yg)("inlineCode",{parentName:"a"},"netlify.toml"))," file, add a 301 redirect, with the path to the original Node.js endpoint, and the name of your cloud function"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'[[redirects]]\n  from = "/status-check"\n  to = "/.netlify/functions/cloud-status-check"\n  status = 301\n  force = true\n')),(0,i.yg)("hr",null),(0,i.yg)("h2",{id:"hiding-page-furniture-on-certain-routes"},"Hiding Page Furniture on Certain Routes"),(0,i.yg)("p",null,"For some pages (such as the login page, the minimal start page, etc) the basic page furniture, (like header, footer, nav, etc) is not needed. This section explains how you can hide furniture on a new view (step 1), or add a component that should be hidden on certain views (step 2)."),(0,i.yg)("h3",{id:"1-add-the-route-name-to-the-should-hide-array"},"1. Add the route name to the should hide array"),(0,i.yg)("p",null,"In ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/src/utils/defaults.js"},(0,i.yg)("inlineCode",{parentName:"a"},"./src/utils/defaults.js")),", there's an array called ",(0,i.yg)("inlineCode",{parentName:"p"},"hideFurnitureOn"),". Append the name of the route (the same as it appears in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/src/router.js"},(0,i.yg)("inlineCode",{parentName:"a"},"router.js")),") here."),(0,i.yg)("h3",{id:"2-add-the-conditional-to-the-structural-component-to-hide"},"2. Add the conditional to the structural component to hide"),(0,i.yg)("p",null,"First, import the helper function:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"import { shouldBeVisible } from '@/utils/SectionHelpers';\n")),(0,i.yg)("p",null,"Then you can create a computed value, that calls this function, passing in the route name:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"export default {\n  ...\n  computed: {\n    ...\n    isVisible() {\n      return shouldBeVisible(this.$route.name);\n    },\n  },\n};\n")),(0,i.yg)("p",null,"Finally, in the markup of your component, just add a ",(0,i.yg)("inlineCode",{parentName:"p"},"v-if")," statement, referencing your computed value"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-vue"},'<header v-if="isVisible">\n  ...\n</header>\n')),(0,i.yg)("hr",null),(0,i.yg)("h2",{id:"adding--using-environmental-variables"},"Adding / Using Environmental Variables"),(0,i.yg)("p",null,"All environmental variables are optional. Currently there are not many environmental variables used, as most of the user preferences are stored under ",(0,i.yg)("inlineCode",{parentName:"p"},"appConfig")," in the ",(0,i.yg)("inlineCode",{parentName:"p"},"conf.yml")," file."),(0,i.yg)("p",null,"You can set variables either in your environment, or using the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/.env"},(0,i.yg)("inlineCode",{parentName:"a"},".env"))," file."),(0,i.yg)("p",null,"Any environmental variables used by the frontend are preceded with ",(0,i.yg)("inlineCode",{parentName:"p"},"VUE_APP_"),". Vue will merge the contents of your ",(0,i.yg)("inlineCode",{parentName:"p"},".env")," file into the app in a similar way to the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/motdotla/dotenv"},"'dotenv'")," package, where any variables that you set on your system will always take preference over the contents of any ",(0,i.yg)("inlineCode",{parentName:"p"},".env")," file."),(0,i.yg)("p",null,"If add any new variables, ensure that there is always a fallback (define it in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/src/utils/defaults.js"},(0,i.yg)("inlineCode",{parentName:"a"},"defaults.js")),"), so as to not cause breaking changes. Don't commit the contents of your ",(0,i.yg)("inlineCode",{parentName:"p"},".env")," file to git, but instead take a few moments to document what you've added under the appropriate section. Try and follow the concepts outlined in the ",(0,i.yg)("a",{parentName:"p",href:"https://12factor.net/config"},"12 factor app"),"."),(0,i.yg)("hr",null),(0,i.yg)("h2",{id:"building-a-widget"},"Building a Widget"),(0,i.yg)("h3",{id:"step-0---prerequisites"},"Step 0 - Prerequisites"),(0,i.yg)("p",null,"If this is your first time working on Dashy, then the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/docs/developing.md"},"Developing Docs")," instructions for project setup and running. In short, you just need to clone the project, cd into it, install dependencies (",(0,i.yg)("inlineCode",{parentName:"p"},"yarn"),") and then start the development server (",(0,i.yg)("inlineCode",{parentName:"p"},"yarn dev"),")."),(0,i.yg)("p",null,"To build a widget, you'll also need some basic knowledge of Vue.js. The ",(0,i.yg)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/"},"official Vue docs")," provides a good starting point, as does ",(0,i.yg)("a",{parentName:"p",href:"https://www.taniarascia.com/getting-started-with-vue/"},"this guide")," by Tania Rascia"),(0,i.yg)("p",null,"If you just want to jump straight in, then ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/commit/3da76ce2999f57f76a97454c0276301e39957b8e"},"here")," is a complete implementation of a new example widget, or take a look at the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/src/components/Widgets/XkcdComic.vue"},(0,i.yg)("inlineCode",{parentName:"a"},"XkcdComic.vue"))," widget, which is pretty simple."),(0,i.yg)("h3",{id:"step-1---create-widget"},"Step 1 - Create Widget"),(0,i.yg)("p",null,"Firstly, create a new ",(0,i.yg)("inlineCode",{parentName:"p"},".vue")," file under ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/tree/master/src/components/Widgets"},(0,i.yg)("inlineCode",{parentName:"a"},"./src/components/Widgets")),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-vue"},"<template>\n<div class=\"example-wrapper\">\n</div>\n</template>\n\n<script>\n\nimport axios from 'axios';\nimport WidgetMixin from '@/mixins/WidgetMixin';\nimport { widgetApiEndpoints } from '@/utils/defaults';\n\nexport default {\n  mixins: [WidgetMixin],\n  data() {\n    return {\n      results: null,\n    };\n  },\n  computed: {\n    endpoint() {\n      return `${widgetApiEndpoints.myApi}/something`;\n    },\n  },\n  methods: {\n    fetchData() {\n      this.makeRequest(this.endpoint).then(this.processData);\n    },\n    processData(data) {\n      // Do processing any here, and set component data\n      this.results = data;\n    },\n  },\n};\n<\/script>\n\n<style scoped lang=\"scss\">\n</style>\n")),(0,i.yg)("p",null,"All widgets extend from the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/src/mixins/WidgetMixin.js"},"Widget")," mixin. This provides some basic functionality that is shared by all widgets. The mixin includes the following ",(0,i.yg)("inlineCode",{parentName:"p"},"options"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"startLoading()"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"finishLoading()"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"error()")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"update()"),"."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Getting user options: ",(0,i.yg)("inlineCode",{parentName:"strong"},"options")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Any user-specific config can be accessed with ",(0,i.yg)("inlineCode",{parentName:"li"},"this.options.something")," (where something is the data key you're accessing)"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Loading state: ",(0,i.yg)("inlineCode",{parentName:"strong"},"startLoading()")," and ",(0,i.yg)("inlineCode",{parentName:"strong"},"finishLoading()")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"You can show the loader with ",(0,i.yg)("inlineCode",{parentName:"li"},"this.startLoading()"),", then when your data request completes, hide it again with ",(0,i.yg)("inlineCode",{parentName:"li"},"this.finishLoading()")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Error handling: ",(0,i.yg)("inlineCode",{parentName:"strong"},"error()")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"If something goes wrong (such as API error, or missing user parameters), then call ",(0,i.yg)("inlineCode",{parentName:"li"},"this.error()")," to show message to user"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Updating data: ",(0,i.yg)("inlineCode",{parentName:"strong"},"update()")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"When the user clicks the update button, or if continuous updates are enabled, then the ",(0,i.yg)("inlineCode",{parentName:"li"},"update()")," method within your widget will be called")))),(0,i.yg)("h3",{id:"step-2---adding-functionality"},"Step 2 - Adding Functionality"),(0,i.yg)("h4",{id:"accessing-user-options"},(0,i.yg)("strong",{parentName:"h4"},"Accessing User Options")),(0,i.yg)("p",null,"If your widget is going to accept any parameters from the user, then we can access these with ",(0,i.yg)("inlineCode",{parentName:"p"},"this.options.[parmName]"),". It's best to put these as computed properties, which will enable us to check it exists, is valid, and if needed format it. For example, if we have an optional property called ",(0,i.yg)("inlineCode",{parentName:"p"},"count")," (to determine number of results), we can do the following, and then reference it within our component with ",(0,i.yg)("inlineCode",{parentName:"p"},"this.count")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"computed: {\n  count() {\n    if (!this.options.count) {\n      return 5;\n    }\n    return this.options.count;\n  },\n    ...\n},\n")),(0,i.yg)("h4",{id:"adding-an-api-endpoint"},(0,i.yg)("strong",{parentName:"h4"},"Adding an API Endpoint")),(0,i.yg)("p",null,"If your widget makes a data request, then add the URL for the API endpoint to the ",(0,i.yg)("inlineCode",{parentName:"p"},"widgetApiEndpoints")," array in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/src/utils/defaults.js#L207"},(0,i.yg)("inlineCode",{parentName:"a"},"defaults.js"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"widgetApiEndpoints: {\n  ...\n  exampleEndpoint: 'https://hub.dummyapis.com/ImagesList',\n},\n")),(0,i.yg)("p",null,"Then in your widget file:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"import { widgetApiEndpoints } from '@/utils/defaults';\n")),(0,i.yg)("p",null,"For GET requests, you may need to add some parameters onto the end of the URL. We can use another computed property for this, for example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"endpoint() {\n  return `${widgetApiEndpoints.exampleEndpoint}?count=${this.count}`;\n},\n")),(0,i.yg)("h4",{id:"making-an-api-request"},(0,i.yg)("strong",{parentName:"h4"},"Making an API Request")),(0,i.yg)("p",null,"Axios is used for making data requests, so import it into your component: ",(0,i.yg)("inlineCode",{parentName:"p"},"import axios from 'axios';")),(0,i.yg)("p",null,"Under the ",(0,i.yg)("inlineCode",{parentName:"p"},"methods")," block, we'll create a function called ",(0,i.yg)("inlineCode",{parentName:"p"},"fetchData"),", here we can use Axios to make a call to our endpoint."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"fetchData() {\n  this.makeRequest(this.endpoint, this.headers).then(this.processData);\n},\n")),(0,i.yg)("p",null,"There are three things happening here:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"If the response completes successfully, we'll pass the results to another function that will handle them"),(0,i.yg)("li",{parentName:"ul"},"If there's an error, then we call ",(0,i.yg)("inlineCode",{parentName:"li"},"this.error()"),", which will show a message to the user"),(0,i.yg)("li",{parentName:"ul"},"Whatever the result, once the request has completed, we call ",(0,i.yg)("inlineCode",{parentName:"li"},"this.finishLoading()"),", which will hide the loader")),(0,i.yg)("h4",{id:"processing-response"},(0,i.yg)("strong",{parentName:"h4"},"Processing Response")),(0,i.yg)("p",null,"In the above example, we call the ",(0,i.yg)("inlineCode",{parentName:"p"},"processData()")," method with the result from the API, so we need to create that under the ",(0,i.yg)("inlineCode",{parentName:"p"},"methods")," section. How you handle this data will vary depending on what's returned by the API, and what you want to render to the user. But however you do it, you will likely need to create a data variable to store the response, so that it can be easily displayed in the HTML."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"data() {\n  return {\n    myResults: null,\n  };\n},\n")),(0,i.yg)("p",null,"And then, inside your ",(0,i.yg)("inlineCode",{parentName:"p"},"processData()")," method, you can set the value of this, with:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"`this.myResults = 'whatever'`\n")),(0,i.yg)("h4",{id:"rendering-response"},(0,i.yg)("strong",{parentName:"h4"},"Rendering Response")),(0,i.yg)("p",null,"Now that the results are in the correct format, and stored as data variables, we can use them within the ",(0,i.yg)("inlineCode",{parentName:"p"},"<template>")," to render results to the user. Again, how you do this will depend on the structure of your data, and what you want to display, but at it's simplest, it might look something like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-vue"},'<p class="results">{{ myResults }}</p>\n')),(0,i.yg)("h4",{id:"styling"},(0,i.yg)("strong",{parentName:"h4"},"Styling")),(0,i.yg)("p",null,"Styles can be written for your widget within the ",(0,i.yg)("inlineCode",{parentName:"p"},"<style>")," block."),(0,i.yg)("p",null,"There are several color variables used by widgets, which extend from the base palette. Using these enables users to override colors to theme their dashboard, if they wish. The variables are: ",(0,i.yg)("inlineCode",{parentName:"p"},"--widget-text-color"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"--widget-background-color")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"--widget-accent-color")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-vue"},'<style scoped lang="scss">\np.results {\n  color: var(--widget-text-color);\n}\n</style>\n')),(0,i.yg)("p",null,"For examples of finished widget components, see the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/tree/master/src/components/Widgets"},"Widgets")," directory. Specifically, the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/src/components/Widgets/XkcdComic.vue"},(0,i.yg)("inlineCode",{parentName:"a"},"XkcdComic.vue"))," widget is quite minimal, so would make a good example, as will ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/commit/3da76ce2999f57f76a97454c0276301e39957b8e"},"this example implementation"),"."),(0,i.yg)("h3",{id:"step-3---register"},"Step 3 - Register"),(0,i.yg)("p",null,"Next, register your new widget in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/src/components/Widgets/WidgetBase.vue"},(0,i.yg)("inlineCode",{parentName:"a"},"WidgetBase.vue")),". In this file, you'll need to add the following:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"const COMPAT = {\n  ...\n  'example-widget': 'ExampleWidget',\n};\n")),(0,i.yg)("p",null,"Here, the ",(0,i.yg)("inlineCode",{parentName:"p"},"example-widget")," property name will be used to identify the widget when parsing the ",(0,i.yg)("inlineCode",{parentName:"p"},"type")," property in a configuration file. The ",(0,i.yg)("inlineCode",{parentName:"p"},"ExampleWidget")," string is used to dynamically import the widget, and therefore must match the widget's filename as it exists in the ",(0,i.yg)("inlineCode",{parentName:"p"},"components/widgets")," folder."),(0,i.yg)("h3",{id:"step-4---docs"},"Step 4 - Docs"),(0,i.yg)("p",null,"Finally, add some documentation for your widget in the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/docs/widgets.md"},"Widget Docs"),", so that others know how to use it. Include the following information: Title, short description, screenshot, config options and some example YAML."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Summary"),": For a complete example of everything discussed here, see: ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/commit/3da76ce2999f57f76a97454c0276301e39957b8e"},(0,i.yg)("inlineCode",{parentName:"a"},"3da76ce"))),(0,i.yg)("hr",null),(0,i.yg)("h2",{id:"respecting-config-permissions"},"Respecting Config Permissions"),(0,i.yg)("p",null,"Any screen that displays part or all of the users config, must not be shown when the user has disabled viewing config."),(0,i.yg)("p",null,"This can be done by checking the ",(0,i.yg)("inlineCode",{parentName:"p"},"allowViewConfig")," attribute of the ",(0,i.yg)("inlineCode",{parentName:"p"},"permissions")," getter, in the store.\nFirst create a new ",(0,i.yg)("inlineCode",{parentName:"p"},"computed")," property, like:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"allowViewConfig() {\n  return this.$store.getters.permissions.allowViewConfig;\n},\n")),(0,i.yg)("p",null,"Then wrap the part of your UI which displays config with: ",(0,i.yg)("inlineCode",{parentName:"p"},'v-if="allowViewConfig"')),(0,i.yg)("p",null,"If required, add a message showing that the component isn't available, using the ",(0,i.yg)("inlineCode",{parentName:"p"},"AccessError")," component. E.g."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"import AccessError from '@/components/Configuration/AccessError';\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-vue"},"<AccessError v-else />\n")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"$store.getters.permissions")," object also returns options for when and where config can be saved, using: ",(0,i.yg)("inlineCode",{parentName:"p"},"allowWriteToDisk"),",  and ",(0,i.yg)("inlineCode",{parentName:"p"},"allowSaveLocally")," - both are booleans."))}g.isMDXComponent=!0}}]);
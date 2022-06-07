<h1 align = "justify">🚦 Table Extraction Extension</h1>

## 📢 Warning
<span>
This is not a project, it's just a study of the features needed to create an extension that interacts with a web page.
In the document folder there is an html table to test the concept.
</span>

## 📜 Motivation
<span style="margin-botton: 5px">
 The main motivation was the study of Google Developers Documentation, to use the knowledge of HTML, CSS and JavaScript in the development of browser extensions.
 <br>
 Reference: https://developer.chrome.com/docs/extensions/
</span>

## 🎯 Description
<span style="margin-botton: 5px">
  The structure of this exercise is based in the minimal resources needed to create an extension.
  Extensions are made of different, but cohesive components can include background script, content script, and UI elements.

  ### Interface Elements
  The interface elements are based on the files like HTML, CSS, Icons, and JavaScript. Together they work to compose the popup of extension.

  ### Background Script
  A background script is a service worker, that is loaded when needed and unloaded when it goes idle. Your main goal is monitoring the extensions events, maintaining communication with the other scrips.

  ### Content Script
  Content scripts are files that run in the context of web pages, with then we can manipulate the DOM of the current page, make injections of take informations of page structure.

  ### Manifest V3
  The manifest.json is the entry point of our extension, it contains the main information  like the scrips, icons, interface elements, and others.
</span>


## 🔩 Extension Structure

  ```
📂3-extract-table-extension
│
├───📁docs                      ✔️ Exercise documentation.
│    └───📄 README.md           🔸  Exercise Overview. 
│    └───📄 Architecture.png    🔸  Extension Architecture.   
│    └───📄 Preview.png         🔸  Extension Image Preview.
│    └───📄 Table.html          🔸  Test HTML Table.  
│       
├───📁interface   
│    ├───📁 icons               ✔️  UI Element, icons of extension.   
│    └───📄 icon.png            🔸  UI Element, it is the default icon of the popup interface. 
│    └───📄 popup.css           🔸  UI Element, contain stylization of the popup interface.   
│    └───📄 popup.html          🔸  UI Element, main HTML structure of the popup interface. 
│    └───📄 popup.js            🔸  UI Element, contain the script of the popup interface. 
│
├───📄 background.j             🔸  Service worker, responsible to monitor the events.
├───📄 content.js               🔸  Content script, run in the context of web pages.
└───📄 manifest.json            🔸  Extension start, contain the main informations.


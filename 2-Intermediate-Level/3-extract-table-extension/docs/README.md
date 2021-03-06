<h1 align = "justify">ð¦ Table Extraction Extension</h1>

## ð¢ Warning
<span>
This is not a project, it's just a study of the features needed to create an extension that interacts with a web page.
In the document folder there is an HTML table to test the concept.
</span>

## ð Motivation
<span style="margin-botton: 5px">
 The main motivation was the study of Google Developers Documentation, to use the knowledge of HTML, CSS and JavaScript in the development of browser extensions.
 <br>
 Reference: https://developer.chrome.com/docs/extensions/
</span>

## ð¯ Description
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


## ð© Extension Structure

  ```
ð3-extract-table-extension
â
ââââðdocs                      âï¸ Exercise documentation.
â    ââââð README.md           ð¸  Exercise Overview. 
â    ââââð Architecture.png    ð¸  Extension Architecture.   
â    ââââð Preview.png         ð¸  Extension Image Preview.
â    ââââð Table.html          ð¸  Test HTML Table.  
â       
ââââðinterface   
â    ââââð icons               âï¸  UI Element, icons of extension.   
â    ââââð icon.png            ð¸  UI Element, it is the default icon of the popup interface. 
â    ââââð popup.css           ð¸  UI Element, contain stylization of the popup interface.   
â    ââââð popup.html          ð¸  UI Element, main HTML structure of the popup interface. 
â    ââââð popup.js            ð¸  UI Element, contain the script of the popup interface. 
â
ââââð background.j             ð¸  Service worker, responsible to monitor the events.
ââââð content.js               ð¸  Content script, run in the context of web pages.
ââââð manifest.json            ð¸  Extension start, contain the main informations.
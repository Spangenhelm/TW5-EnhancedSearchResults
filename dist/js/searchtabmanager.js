/*\
title: $:/plugins/spangenhelm/enhancedsearch/searchtabmanager.js
type: application/javascript
module-type: macro
\*/

(function(){
  
/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

exports.name = "search-tab-manager";
exports.params = [ { name : "searchTerm" }, { name: "qualifier" }  ];

// constants
var sideBarTabPrefix = "$:/state/tab/sidebar-";
var searchTabTRef = "$:/core/ui/SearchResults";
var tabBackup = null;

/**
 * Called: <$macrocall $name="search-tab-manager" searchTerm={{$:/temp/search}} />
 */
exports.run = function(searchTerm, qualifier) {
    
  var tabsStateTRef = sideBarTabPrefix + this.getStateQualifier();    
  var tabsStateTObj = $tw.wiki.getTiddler(tabsStateTRef);
  
  console.log("sr:", tabsStateTObj);
  
  if(tabsStateTObj) {
    
    if(searchTerm && tabsStateTObj.fields.text !== searchTabTRef) {
    
      // backup old tab
      tabBackup = tabsStateTObj.fields.text;
      
      // set tab to search results
      $tw.wiki.addTiddler(new $tw.Tiddler({
        title: tabsStateTRef,
        text: searchTabTRef
      }));
      
    } else if(!searchTerm && tabsStateTObj.fields.text === searchTabTRef && tabBackup) {
          
      // set tab to search results
      $tw.wiki.addTiddler(new $tw.Tiddler({
        title: tabsStateTRef,
        text: tabBackup
      }));
      
    }
    
  }
  
  // always return an empty string
  return "";
  
};

})();

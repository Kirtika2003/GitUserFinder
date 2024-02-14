'use strict';

/**
 * 
 * @param {NodeList} $elements NodeList
 * @param {String} eventType String
 * @param {Function} callback Function
 */
const addEventOnElements= function($elements, eventType, callback){
    for(const $item of $elements){
        $item.addEventListener(eventType, callback);
    }

}
/**
 * Header scroll state
 */

const /**{NodeElement} */ $header=document.querySelector("[data-header]");
window.addEventListener("scroll",function(){
    $header.classList[window.scroll>50? "add" : "remove"]("active")
});

/**search toggle */

const /**{NodeElement} */SearchToggler= document.querySelector("[data-search-toggler]");
const /**{NodeElement} */SearchField= document.querySelector("[data-search-field]");

// // Respond to the click on extension Icon
// chrome.browserAction.onClicked.addListener(function (tab) {
//     chrome.tabs.executeScript({
//         file: 'work.js'
//     });
// });

// TODO: make selection more elegant
var udacity = document.getElementsByClassName("menu-1392 last")[0]
// var title = document.getElementById("page-title")
// title.val() = title + udacity
$(document).ready(
  // $("#page-title").html("<font size=32>"+udacity+"</font>")
  // TODO: make bigger
  $("#page-title").html(udacity)
)

// console.log($("#page-title")[0])
// console.log($("#page-title").html())

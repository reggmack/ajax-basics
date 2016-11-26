var url = '/employees.php';
var data = {
    firstName : "Dave",
    lastName : "McFarland"
};
var callback = function (response) {
    // do something
};
$.get(url, data, callback);




var callback = ;
$.get(/employees.php', {
    firstName : "Dave",
    lastName : "McFarland"
}, function (response) {
    //do something
});
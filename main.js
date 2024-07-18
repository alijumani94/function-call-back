function parentfunc(person) {
    console.log("This is parent function");
    person("parent function");
}
function child(fname) {
    console.log("This is child function.");
}
parentfunc(child);

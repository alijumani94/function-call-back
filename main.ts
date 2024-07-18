function parentfunc(person: (fname: string)=> void){
    console.log("This is parent function");
    person("parent function");
    
}
function child(fname: string){
    console.log("This is child function.");

}
parentfunc(child);
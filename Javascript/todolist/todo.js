let todo=[];
let req=prompt("Enter your request");
while(true){
    if(req=="quite"){
        console.log("Quiting app");
        break
    }

    if (req=="list"){
        console.log("---------------")
        for(let i=0;i<todo.length;i=i+1){
            console.log(`${i} '${todo[i]}'`);
        }
        console.log("---------------")
    }
    else if (req=="add"){
        let task=prompt("Enter your task to add");
        todo.push(task);
        console.log("Task added");
    }
    else if(req=="delete"){
        let idx=prompt("Enter the index of task to remove");
        todo.splice(idx,1);
        console.log(`${idx} deleted`);
    }
    else{
        console.log("Wrong request")
    }
    req=prompt("Enter your request")
}
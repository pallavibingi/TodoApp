let todo=[];
let req=prompt("Enter your request ( add / delete / list / quit ) : ");

while(true){
    if(req==="quit"){
        console.log("Quitting App");
        break;
    }
    else if(req==="add"){
        let task=prompt("Enter Task you want to add :");
        todo.push(task);
        console.log(`${task} - task added`);
    }

    else if(req==="delete"){
        let task=prompt("Enter Task you want to delete :");
        let idx;
        for(i of todo){
            if(i=== task){
                idx=todo.indexOf(i);
                break;
            }
        }
        console.log(`${todo.splice(idx,1)} deleted`);
    }
    else if(req==="list"){
        console.log("-------------------------");

        for(i of todo){
            console.log(i);
        }
        console.log("-------------------------");
    }
    req=prompt("Enter your request ( add / delete / list / quit ) : ");
}

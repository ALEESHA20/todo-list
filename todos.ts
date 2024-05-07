#! /usr/bin/env node

import inquirer from "inquirer"

let todos = []
let condition =true
while(condition){
    let addTask=await inquirer.prompt(
        [
            {
                name:"firstQuestion",
                message:"what you want to add in your To do-list?",
                type:"input",
            },
            {
                name:"secondQuestion",
                message:"do you want to add more?",
                type:"confirm",
                default:"true",
            }
        ]
    );
    todos.push(addTask.firstQuestion)
    console.log(todos)
    condition=addTask.secondQuestion
}


var taskList={
    tasks:[],

    addTask:function(taskTitle,taskDate){
        this.tasks.push({
        title:taskTitle.value,
        date:taskDate.value,
        completed:false
    });
},
}

var handler={
     add:function(){
        var taskTitle=document.getElementById("taskTitle");
        var taskDate=document.getElementById("taskDate");
        if(taskTitle.value==="" || taskDate.value===""){
            alert("Fields can't be left empty!")
        }
        else{
            taskList.addTask(taskTitle,taskDate);
            this.displayTask();
            }
        
    },

   displayTask : function (){
        view.displayTasks();    
    },
    delete : function () {
     var checkboxes = document.getElementsByName("checkIt");
     for (var index=checkboxes.length ; index --;){
         if(checkboxes[index].checked){
            this.deleteByIndex(index);
         }}
        view.displayTasks();
    },
    
    deleteByIndex : function (index){
        console.log(index);
        taskList.tasks.splice(index,1);
        console.log(taskList.tasks[index]);
    },
    changeStatus : function (){
    var checkboxes = document.getElementsByName("checkIt");
     for (index = checkboxes.length ; index --;){
         if(checkboxes[index].checked){
            this.changeStatusByIndex(index);
         }}
        view.displayTasks();
    },
    
    changeStatusByIndex : function (index){
        console.log(index);
        taskList.tasks[index].completed = true;
        console.log(taskList.tasks[index]);
    
    },

    filterTasks:function(value){
        if(value==="all"){
            this.displayTask();
        }else{
            if(value==="complete"){
                view.listCompletedTasks();
            }else{
                view.listInProgressTasks();
            }
        }
        
    }
}

var view = {
    displayTasks : function(){
        var taskTable = document.querySelector("table");
        taskTable=this.createTableWithHead(taskTable);

        for(let i=0;i<taskList.tasks.length;i++){
            var checkBox = this.createCheckBox();
                checkBox.setAttribute("name","checkIt");
                checkBox.setAttribute("id",i);
            var task = taskList.tasks[i].title;
            var date=taskList.tasks[i].date;
            var status=taskList.tasks[i].completed;
            var taskTr = document.createElement("tr");
            taskTr.setAttribute = ("id",i);
            console.log(taskTr);
            var titleTd = document.createElement("td");
            titleTd.append(task) ;
            var dueDateTd = document.createElement("td");
            dueDateTd.append(this.findTaskStatus(date)) ;
             var statusTd = document.createElement("td");
            if(status){
                statusTd.textContent= "Completed";
            }else{
                statusTd.textContent= "In progress";
            }
            taskTable=this.makeTableElement(taskTr,checkBox,titleTd,dueDateTd,statusTd,taskTable);
        }
    },

    listCompletedTasks:function(){
         var taskTable = document.querySelector("table");
         taskTable=this.createTableWithHead(taskTable);
        for(let i=0;i<taskList.tasks.length;i++){
            if(taskList.tasks[i].completed){
            var checkBox = this.createCheckBox();
                checkBox.setAttribute("name","checkIt");
                checkBox.setAttribute("id",i);
            var task = taskList.tasks[i].title;
            var date=taskList.tasks[i].date;
            var status=taskList.tasks[i].completed;
            var taskTr = document.createElement("tr");
            taskTr.setAttribute = ("id",i);
            console.log(taskTr);
            var titleTd = document.createElement("td");
            titleTd.append(task) ;
            var dueDateTd = document.createElement("td");
             dueDateTd.append(this.findTaskStatus(date)) ;
             var statusTd = document.createElement("td");
            statusTd.textContent= "Completed";
            taskTable=this.makeTableElement(taskTr,checkBox,titleTd,dueDateTd,statusTd,taskTable);
        }
    }
},
    listInProgressTasks:function(){
         var taskTable = document.querySelector("table");
         taskTable=this.createTableWithHead(taskTable);
        for(let i=0;i<taskList.tasks.length;i++){
            if(!taskList.tasks[i].completed){
            var checkBox = this.createCheckBox();
                checkBox.setAttribute("name","checkIt");
                checkBox.setAttribute("id",i);
            var task = taskList.tasks[i].title;
            var date=taskList.tasks[i].date;
            var status=taskList.tasks[i].completed;
            var taskTr = document.createElement("tr");
            taskTr.setAttribute = ("id",i);
            console.log(taskTr);
            var titleTd = document.createElement("td");
            titleTd.append(task) ;
            var dueDateTd = document.createElement("td");
            dueDateTd.append(this.findTaskStatus(date)) ;
             var statusTd = document.createElement("td");
           
                statusTd.textContent= "In progress";
            taskTable=this.makeTableElement(taskTr,checkBox,titleTd,dueDateTd,statusTd,taskTable);
        }
        }
    },
    createTableWithHead:function(taskTable){
        taskTable.setAttribute("class","table");
        taskTable.innerHTML = "";

        viewElement="";

        var tableRow=document.createElement("tr");
        var action=document.createElement("td");
        action.append("");
        var title=document.createElement("td");
        title.append("TITLE");
        var due=document.createElement("td");
        due.append("DUE");
        var status=document.createElement("td");
        status.append("STATUS");
        tableRow.appendChild(action);
        tableRow.appendChild(title);
        tableRow.appendChild(due);
        tableRow.appendChild(status);
        taskTable.appendChild(tableRow);
        return taskTable;
    },

    makeTableElement:function(taskTr,checkBox,titleTd,dueDateTd,statusTd,taskTable){
        taskTr.appendChild(checkBox);
            taskTr.appendChild(titleTd);
            taskTr.appendChild(dueDateTd);
            taskTr.appendChild(statusTd);
            taskTable.appendChild(taskTr);
            return taskTable;
    },

    findTaskStatus : function (input) {
        var inputDate = new Date(input);
        var currentDate = new Date();
        var message ="";
        if(inputDate.getDate() === currentDate.getDate()){
            message = "Due Today";
        }else if(inputDate.getTime() > currentDate.getTime()){
            var daysLeft = inputDate.getDate() - currentDate.getDate();
            message = daysLeft+" Days Due";
        }else{
            message = "OverDue";
        }
    return message;

    },
    createCheckBox : function(){
        var checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        return checkBox;
    }
};



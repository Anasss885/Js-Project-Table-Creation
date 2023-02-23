var num_of_rows=document.getElementById("rows");
var num_of_cols=document.getElementById("cols");
var btn =document.getElementById("btn");
btn.addEventListener('click',FormTable);
function FormTable(){
    var body=document.body;
    var table=document.createElement("table");
    for(var i=0;i<+num_of_rows.value;i++){
        let tr=document.createElement("tr");
        for(var j=0;j<+num_of_cols.value;j++){
            let td=document.createElement("td");
            td.innerHTML="Data";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    body.appendChild(table);
}
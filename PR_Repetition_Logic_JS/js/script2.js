let empTable = document.querySelector('#empTable tbody')

let employees =  JSON.parse(localStorage.getItem('employees')) || [];
let getData = ()=>{
    empTable.innerHTML = '';
    employees.map((emp,index)=>{
        let {ename,salary,post,manager,id} = emp;
        let row = document.createElement('tr');

        row.innerHTML = `
            <td>${index+1}</td>
            <td>${ename}</td>
            <td>${salary}</td>
            <td>${post}</td>
            <td>${manager}</td>
            <td>
                <button onclick="handleDelete(${id})" class="btn btn-danger">Delete</button>
                <button onclick="handleEdit(${id})" class="btn btn-edit">Edit</button>
            </td>
        `
        empTable.appendChild(row);
    })
};


const handleDelete=(id)=>{
   
    let newData = employees.filter((emp)=>{
        return emp.id !== id
    })
    employees = newData;
    localStorage.setItem('employees',JSON.stringify(newData));
    getData();
}

const handleEdit = (id) => {
    let emp = employees[id];

    let empName = prompt("Enter emp name: ",emp.empName);
    if(empName === null) return;

    let empSalary = prompt("Enter emp salary: ",emp.empSalary);
    if(empSalary === null) return;

    let empPost = prompt("Enter emp post: ",emp.empPost);
    if(empPost === null) return;

    let empManager = prompt("Enter emp manager: ",emp.empManager);
    if(empManager === null) return;
   

    employees[id] = {empName, empSalary,empPost,empManager};
    localStorage.setItem('employees',JSON.stringify(employees));
    getData();
}
getData();
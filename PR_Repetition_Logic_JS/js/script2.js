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
    const empIndex = employees.findIndex(emp => emp.id === id);
    if (empIndex === -1) return;

    const emp = employees[empIndex];
    const ename = prompt("Edit Name:", emp.ename);
    const salary = prompt("Edit Salary:", emp.salary);
    const post = prompt("Edit Post:", emp.post);
    const manager = prompt("Edit Manager:", emp.manager);

    if (ename && salary && post && manager) {
        employees[empIndex] = { ...emp, ename, salary, post, manager };
        localStorage.setItem('employees', JSON.stringify(employees));
        getData();
    }
}
getData();
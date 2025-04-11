const Name= document.querySelector("#courseName");
const category= document.querySelector("#courseCategory");
const Price= document.querySelector("#coursePrice");
const Description= document.querySelector("#courseDescription");
const Capacity= document.querySelector("#courseCapacity");
const addBtn= document.querySelector("#click");
const data= document.querySelector("#data");
let courses=[];

if(localStorage.getItem("courses")!=null){
    courses=JSON.parse(localStorage.getItem("courses"));
    displaycourses();
}


addBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const course={
        Name:Name.value,
        category:category.value,
        Price:Price.value,
        Description:Description.value,
        Capacity:Capacity.value,
    }
    courses.push(course);
    localStorage.setItem("courses",JSON.stringify(courses));
    Swal.fire({
        title: "successful!",
        text: "the course is added!",
        icon: "success"
      });
    displaycourses();

});

function displaycourses(){
    const result=courses.map((course,index)=>{
        return`
            <tr>
                <td>${index+1}</td>
                <td>${course.Name}</td>
                <td>${course.category}</td>
                <td>${course.Price}</td>
                <td>${course.Price}</td>
                <td>${course.Description}</td>

            </tr>`
    }).join(' ');
    data.innerHTML=result;
}

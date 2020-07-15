// using async function to enable use of await within it
async function checkGender(){
    var user_name = document.getElementById("name").value;

    // await resumes progress only when the below API will give a response
    // this will prevent the code from processing further resulting in an 
    // error if the api takes time to provide response
    let response = await fetch('https://api.genderize.io?name='+user_name);
    let user1 = await response.json();
    if(user1.gender!=undefined){
        document.getElementById("op_gender").innerHTML="Gender - "+user1.gender;
        document.getElementById("op_probability").innerHTML="Probability - "+user1.probability;
        console.log(user1.gender);
    }
    else{
        alert("Please enter a valid/different name!")
        window.location.reload();
    }
}

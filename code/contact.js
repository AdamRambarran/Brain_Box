// AS
// adding in all javascript in here


// firstly lets open the api's

function drawTable_engine(engines){
    
      let result = document.querySelector('#result');
      
        let html='';
      for(let record of engines){
          html += `<tr>
          
         <td>${record.horsepower}</td>
         <td>${record.torque}</td>
         <td>${record.id}</td>
         <td>${record.name}</td>
         <td>${record.fuelType}</td>
         <td>${record.cylinder}</td>
       </tr>`;
        
      }
      result.innerHTML = html;
    }





 async function getData(url, drawTable){
        try{
          let response = await fetch(url);//1. Send http request and get response
          let result = await response.json();//2. Get data from response
          drawTable(result);// 3. Do something with the data
        }catch(e){
            console.log(e);//catch and log any errors
        }
      }

getData("engine.json",drawTable_engine)


//getData( "car.json",drawTable)



function validateForm()                                    
{ 
    var name = document.forms["myForm"]["name"];               
    var email = document.forms["myForm"]["email"];    
    var message = document.forms["myForm"]["message"];   
   
    if (name.value == "")                                  
    { 
        document.getElementById('errorname').innerHTML="Please enter a valid name";  
        name.focus(); 
        return false; 
    }else{
        document.getElementById('errorname').innerHTML="";  
    }
       
    if (email.value == "")                                   
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    }else{
        document.getElementById('erroremail').innerHTML="";  
    }
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    } 
   
    if (message.value == "")                           
    {
        document.getElementById('errormsg').innerHTML="Please enter a valid message"; 
        message.focus(); 
        return false; 
    }else{
        document.getElementById('errormsg').innerHTML="";  
    }
   
    return true; 
}
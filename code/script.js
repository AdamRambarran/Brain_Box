
  let state = [];

//let mySearch= "hybrid";


// fetch 2 APIS

 // function fetchAPI(api){
   
 //   const engines = await fetch('engine.json);
 //   generateHTML(engines.hits);
 //   console.log(engines); 
   
 // }





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
          let response = await fetch(url);
          let result = await response.json();
          drawTable(result);
        }catch(e){
            console.log(e);
        }
      }



function searchEngines (engines) {
  
  let mySearch = document.querySelector('#mySearch').value;
  
  let results = [];

  for(let record of engines){

    let searchText = record.name.toUpperCase();
    mySearch = mySearch.toUpperCase();

    if ( searchText.search(mySearch) !== -1 ){
      results.push(record);
    }

    drawTable_engine(results);
  }
}

// this function was also implemented tried to fix it 
// tried everything possible that I could thing of but it still isnt working and I'm not sure why. 

function search() {
  
  let mySearch = document.querySelector('#mySearch').value;
  
  let results = [0,100];

  for(let record of engines){

    let searchText = record.name.toUpperCase();
    mySearch = mySearch.toUpperCase();

    if ( searchText.search(mySearch) !== -1 ){
      results.push(record);
    }

    drawTable_engine(results);
  }
}


mySearch.addEventListener( "submit", (e) => {
e.preventDefault();
  searchQuery = e.target.querySelecter( "input").value; 
  //fetchAPI_eng();
  getData('engine.json', drawTable_engine)
});


// filtering 
function filterByFuelType(fuelType){

  let filtered = [];
  for(let record of engines){
    //push only elements that match the given series
    if (record.fuelType === fuelType)
      filtered.push(record);
  }
  drawTable_engine(filtered);
}




function drawTable_car(cars){
    
      let result = document.querySelector('#carResult');
      
        let html='';
      for(let record of cars){
          html += `<tr>
          
         <td>${record.model}</td>
         <td>${record.year}</td>
         <td>${record.make}</td>
         <td>${record.horsepower}</td>
         <td>${record.id}</td>
         <td>${record.price}</td>
         <td> <img src="${record.img_url}"></td>
         
       </tr>`;
        
      }
      result.innerHTML = html;
    }


 // {"model": "ilx", "year": 2017, "make": "acura", "horsepower": 201, "id": 1, "make_id": 2, "price": 29290.0, "img_url": "http://ts1.mm.bing.net/th?id=OIP.M7656c6f6aaa4d51c3ddee4b1192adeeeH0&pid=15.1", "engine_id": 1}



//this function was implemented but it didnt work and we have tried to fix it but it didnt work. 


//  function filterMake(make){
//         const filtered = [];
//         for(let record of engines){
//             if (record.make === make)
//         filtered.push(record);
//     }

// drawTable_car(filtered);
// }





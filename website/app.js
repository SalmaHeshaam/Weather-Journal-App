// Personal API Key for OpenWeatherMap API
const url = 'https://api.openweathermap.org/data/2.5/weather?';
const APIKey = '2d85dbe3752f30727dbb98ec078abb2d&units=metric';

// get the date object
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to the generate btn
const generate = document.getElementById('generate');

generate.addEventListener('click',()=>{
    const zip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    
    if(!zip || !feelings){
        alert('Please fill the required data!');
        return ;
    }

    getRequest(zip)
    .then((data)=>{
        postData('/add',{
            temp: data.main.temp,
            date: newDate,
            feelings: feelings 
        });
    })
    .then((newData)=>updateUI());
})

/* Function to GET Web API Data*/
const getRequest = async (zip)=>{
    const res = await fetch (`${url}zip=${zip}&appid=${APIKey}&units=metric`);
    try {
        const data = await res.json();
        return data;
    }
    catch (err){
        console.log("get res err",err);
    }
};

/* Function to POST data */
const postData = async ( url = '', data = {}) => {

    const req = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)       
  });

    try {
      const newData = await req.json();
      return newData;
    } 
    catch(err) {
    console.log("err", err);
    }
};

/* Function to GET Project Data */
const updateUI = async () => {
    const req = await fetch('/all');
    try{
        const alldata = await req.json();
        document.getElementById("date").innerHTML= "date: "+ alldata.date;
        document.getElementById("temp").innerHTML = "temp: "+ alldata.temp + '&#8451';
        document.getElementById("content").innerHTML= "feelings: "+alldata.feelings;
    }
    catch(err){
        console.log("err",err);
    }

};






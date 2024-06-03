let body=document.getElementById('body');
let div=document.createElement('div');
let boton=document.getElementById('boton');
div.id='def';
body.appendChild(div);
const def=[];
let busca=document.getElementById('browser').value();
fetch('./palabras/def.json')
    .then(response=> response.json())
    .then(data=>{
        for (let index = 0; index < data.length; index++) {
            def.push(data[index]);
                
        }
    }
    )
boton.addEventListener('click', ()=>{
    let pal=busca.value
    for (let index = 0; index < def.length; index++) {
        console.log(def[index].indexOf(busca))
    }
    


})
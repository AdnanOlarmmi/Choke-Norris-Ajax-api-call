const fact = document.getElementById('fact');
const click = document.getElementById('click');

function change(){


    const xhr = new XMLHttpRequest;
    url = 'https://api.chucknorris.io/jokes/random';
    xhr.responseType = 'json';
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            fact.innerHTML =  xhr.response.value;
        } throw new Error('Request failed')
    }
    xhr.open('GET', url);
    xhr.send();
}
window.addEventListener('DOMContentLoaded', change);

click.onclick = change;


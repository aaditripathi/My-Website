let input = document.getElementById('Input');


input.addEventListener('keyup', filterCity);


function filterCity() {
    let filterValue = document.getElementById('Input')
    .value.toUpperCase();

    let ul = document.getElementById('City');

    let li = ul.querySelectorAll('li.address-item');

    for(let i=0; i<li.length; i++){
        let x = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexof(filterValue)> -1){
            li[i].style.display ='';
        } else {
            li[i].style.display = 'none';
        }
    }
}

let xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readyState == 4 && this.status == 200){
        const response = JSON.parse(xhttp.responseText);

        const Address = response.Address;

        let output ='';
        for(let i=0; i < Address.length; i++){
            output += '<li class="address-item">'+'<a href="#">'+Address
            [i].City+''+Address[i].Street+'</a></li>';

        }
        document.getElementById('City').innerHTML = output;
    }
};
xhttp.open('GET', '../dist/js/City.json', true);
xhttp.send();
window.addEventListener('load', function () {
    let tog = document.getElementsByClassName('toggle')[0]
    let burguer = document.getElementsByClassName('burguer')[0]
    let menuItems = document.getElementsByClassName('menu-list')[0].getElementsByTagName('li')
    console.log(menuItems)
    
    tog.onclick = () => {
        this.document.body.classList.toggle('dark');
        tog.getElementsByClassName('bxs-circle')[0].classList.toggle('toggled');
    };

    burguer.onclick = () => {
        document.getElementsByClassName('sidebar')[0].classList.toggle("closed")
    };

    for(let item of menuItems){
        item.onclick = () => {
            document.getElementsByClassName('menu-list')[0].getElementsByClassName('selected')[0].classList.toggle("selected")
            item.classList.toggle("selected")
        };
    }


})
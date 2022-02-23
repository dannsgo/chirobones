// input > date
document.getElementById('nav_date').value = new Date().toISOString().substring(0, 10);
// tab menu
const tabMenu = document.querySelectorAll('tab_btn');
for(let i = 0; i < tabMenu.length; i++) {
    tabMenu[i].getElementsByClassName('tab_btns').addEventListener('click', function(changeMenu){
        changeMenu.preventDefault();
        for(let j = 0; j < tabMenu.length; j++){
            tabMenu[j].classList.remove('tab_menus');
        }
        this.parentNode.classList.add('tab_menus');
    });
}

// Canvas
const canvas = document.getElementById("boneCanvas");
// Pixel Control == 2D
const ctx = canvas.getContext("2d");

// canvas.width = ;
// canvas.height = ;

// // 선 색상
// ctx.strokeStyle = "";
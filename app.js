// input > date
document.getElementById('nav_date').value = new Date().toISOString().substring(0, 10);
// tab menu
const tabList = document.querySelectorAll('.tab_menu .tab_btn li');
for(let i = 0; i < tabList.length; i++){
  tabList[i].querySelector('.tab_btns').addEventListener('click', function(changeTab){
    changeTab.preventDefault();
    for(let j = 0; j < tabList.length; j++){
      tabList[j].classList.remove('tab_menus');
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
// ! input > date
let date = document.getElementById("nav_date");
date.value = new Date().toISOString().substring(0, 10);

// ! tab menu
const tabList = document.querySelectorAll(".tab_menu .tab_btn li");
for (let i = 0; i < tabList.length; i++) {
    tabList[i].querySelector(".tab_btns").addEventListener("click", function (changeTab) {
        changeTab.preventDefault();
        for (let j = 0; j < tabList.length; j++) {
            tabList[j].classList.remove("tab_menus");
        }
        this.parentNode.classList.add("tab_menus");
    });
}

// ! Canvas
const canvas = document.getElementById("boneCanvas");
const ctx = canvas.getContext("2d");

// start__coordinate
function coordinate(event) {
    let x = event.offsetX; // X-coordinate
    let y = event.offsetY; // y-coordinate\
    console.log(x, y);
}

if (canvas) {
    canvas.addEventListener("mousemove", coordinate);
}

// coordinate__end

// start__image uploader
const reader = new FileReader();
const img = new Image();

const uploadImage = (upload) => {
    reader.onload = () => {
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
        img.src = reader.result;
    };
    reader.readAsDataURL(upload.target.files[0]);
};
const imageLeader = document.getElementById("uploader");
imageLeader.addEventListener("change", uploadImage);
// image uploader__end
// image download

// 선 색상
// ctx.strokeStyle = "";

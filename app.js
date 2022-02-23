// input > date
const navDate = document.getElementById('nav_date');
navDate.value = new Date().toISOString().substring(0, 10);

// Canvas
const canvas = document.getElementById("boneCanvas");
// Pixel Control == 2D
const ctx = canvas.getContext("2d");

// canvas.width = ;
// canvas.height = ;

// // 선 색상
// ctx.strokeStyle = "";
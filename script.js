// 確保 DOM 已經載入
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("check");
    const btnt = document.getElementById("aside");

    btn.onclick = function() {
        // 顯示 class A
        const elementsA = document.getElementsByClassName("A");
        for (let i = 0; i < elementsA.length; i++) {
            elementsA[i].style.display = "none";
        }

        // 隱藏 class B
        const elementsB = document.getElementsByClassName("overlay");
        for (let i = 0; i < elementsB.length; i++) {
            elementsB[i].style.display = "block";
        }
    };
    

    btnt.onclick = function() {
        // 顯示 class A
        const elementsA = document.getElementsByClassName("A");
        for (let i = 0; i < elementsA.length; i++) {
            elementsA[i].style.display = "flex";
        }

        // 隱藏 class B
        const elementsB = document.getElementsByClassName("overlay");
        for (let i = 0; i < elementsB.length; i++) {
            elementsB[i].style.display = "none";
        }
    };
});

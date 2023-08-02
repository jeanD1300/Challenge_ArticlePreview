let shareBtt = document.getElementById('share-btt');
let share = document.getElementById('share');

let popup = false;

let avatar = document.getElementById('avatar');

// Show share
function showShare() {
    popup = true;
    share.style.visibility = 'visible';
    shareBtt.style.backgroundColor = "#6d7f97"
    shareBtt.style.color = "white";
    avatar.style.visibility = 'hidden';

    // เช็คว่าเป็นเวอร์ชั่นเดสท็อปหรือไม่
    if (window.innerWidth > 600) {
        avatar.style.visibility = 'visible';
    } else {
        avatar.style.visibility = 'hidden';
    }

}

// Hide share
function hideShare() {
    popup = false;
    share.style.visibility = 'hidden';
    shareBtt.style.backgroundColor = "#ecf2f8";
    shareBtt.style.color = "#6d7f97";
    avatar.style.visibility = 'visible';

    // เช็คว่าเป็นเวอร์ชั่นเดสท็อปหรือไม่
    if (window.innerWidth > 600) {
        avatar.style.visibility = 'visible';
    } else {
        avatar.style.visibility = 'visible'; 
    }
}

// toggle btt
shareBtt.addEventListener('click', () => {
    if (popup) {
        hideShare();
    }
    else {

        showShare();
    }
});

// window.addEventListener('resize', () => {
//     if (popup) {
//         if (window.innerWidth > 600) {
//             avatar.classList.add('avatar-desktop');
//         } else {
//             avatar.classList.remove('avatar-desktop');
//         }
//     } else {
//         if (window.innerWidth > 600) {
//             avatar.style.visibility = 'visible';
//         } else {
//             avatar.style.visibility = 'hidden';
//         }
//     }
// });
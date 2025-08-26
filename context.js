let heart_count = 0;
let coin_count = 100;
let copy_count = 0;

document.getElementById("coin").innerHTML = coin_count;
document.getElementById("copy").innerHTML = copy_count + " Copy";

// heart count increase

const favourites = document.querySelectorAll(".favourite");
favourites.forEach((fav) => {
  let fav_state = false;
  fav.addEventListener("click", () => {
    // if (fav_state === false) {
    //   heart_count ++;

    //   document.getElementById("heart").innerHTML = heart_count;
    //   fav_state = true;
    // } else {
    //   heart_count--;

    //   document.getElementById("heart").innerHTML = heart_count;
    //   fav_state = false;
    // }

    heart_count++;
    document.getElementById("heart").innerHTML = heart_count;
  });
});

const copy_btn = document.querySelectorAll('.copy-btn');
copy_btn.forEach((copied) =>{
    copied.addEventListener('click', ()=>{
        const card = copied.closest('.card');
        const hotline = card.querySelector('.hotline').innerHTML;
        navigator.clipboard.writeText(hotline)
        .then(() => alert(`Copied: ${hotline}`) )
        .catch(err => console.error('Copy failed',err));
    });
});

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

// Copy Feature

const copy_btn = document.querySelectorAll('.copy-btn');
copy_btn.forEach((copied) =>{
    copied.addEventListener('click', ()=>{
        const card = copied.closest('.card');
        const hotline = card.querySelector('.hotline').innerHTML;
        navigator.clipboard.writeText(hotline)
        .then(() => alert(`Copied: ${hotline}`) )
        .catch(err => console.error('Copy failed',err));
        copy_count++;
        document.getElementById("copy").innerHTML = copy_count + " Copy";
    });
});


// Call Feature
const call_btn = document.querySelectorAll('.call-btn');
const historyDiv = document.querySelector('.history-block');
call_btn.forEach((called) =>{
  called.addEventListener('click', ()=>{
    const card = called.closest('.card');
    const serviceName = card.querySelector('.service-name').innerHTML;
    const hotline = card.querySelector('.hotline').innerHTML;
    const serviceTitle = card.querySelector('.service-title').innerHTML;
    const now = new Date();
    const time = now.toLocaleTimeString([],{hour: '2-digit', minute: '2-digit', second: '2-digit'});
    
    if(coin_count<20){
      alert('You do not have sufficient coin. Minimum 20 coins are required to access this service');
      return;
    }
    else{
      coin_count-=20;
      document.getElementById("coin").innerHTML = coin_count;
      
      const historyCard = document.createElement('div');
      historyCard.className = "bg-[#FAFAFA] rounded-lg p-4 flex items-center justify-between lg:flex-row flex-col";
      historyCard.innerHTML = `
      <div>
        <h1 class="text-xl font-bold text-black">${serviceTitle}</h1>
        <p class= "lg:p-0 lg:bg-white p-3 bg-gray-200 rounded-2xl w-fit">${hotline}</p>
      </div>
      <div>
        <p>${time}</p>
      </div>
    `;
    historyDiv.prepend(historyCard);
    alert(`Calling ${serviceName} ${hotline}`);
    }
  });
});

// Delete history
const clearButton = document.getElementById('clear-btn');
clearButton.addEventListener('click', ()=>{
  if(historyDiv.lastElementChild){
    historyDiv.removeChild(historyDiv.lastElementChild);
  }
} );


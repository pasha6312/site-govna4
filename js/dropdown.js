let overlay=document.querySelector('.overlay');

let nav=document.querySelector('#nav-content');
let navButton=document.querySelector('#nav-button');

function openNav() {
  document.getElementById("nav-content").classList.remove('hidden');
}

function closeNav() {
  document.getElementById("nav-content").classList.add('hidden');
}

document.addEventListener( 'click', (e) => {
  const withinBoundaries = e.composedPath().includes(nav);
  const withinBoundaries1 = e.composedPath().includes(navButton);

  if ( !withinBoundaries && !withinBoundaries1) {
    document.getElementById("nav-content").classList.add('hidden');
  }
});

let feedback=document.querySelector('#feedback_block');
let feedbackButton=document.querySelector('#feedback-button');

function openFeedback() {
  document.getElementById("feedback_block").classList.remove('hidden');
}

function closeFeedback() {
  document.getElementById("feedback_block").classList.add('hidden');
}



document.addEventListener( 'click', (e) => {
  const withinBoundaries = e.composedPath().includes(feedback);
  const withinBoundaries1 = e.composedPath().includes(feedbackButton);

  if ( !withinBoundaries && !withinBoundaries1) {
    document.getElementById("feedback_block").classList.add('hidden');
  }

});

let callOrder=document.querySelector('#call-order_block');
let callOrderButton=document.querySelector('#call-order-button');

function openCallOrder() {
  document.getElementById("call-order_block").classList.remove('hidden');
}

function closeCallOrder() {
  document.getElementById("call-order_block").classList.add('hidden');
}

document.addEventListener( 'click', (e) => {
  const withinBoundaries = e.composedPath().includes(callOrder);
  const withinBoundaries1 = e.composedPath().includes(callOrderButton);

  if ( !withinBoundaries && !withinBoundaries1) {
    document.getElementById("call-order_block").classList.add('hidden');
  }

});


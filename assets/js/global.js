// Check for mouse clicks, enter keypress (13), or spacebar keypress (32)
// https://karlgroves.com/2014/11/24/ridiculously-easy-trick-for-keyboard-accessibility
function a11yClick(event){
  if(event.type === 'click') {
    return true;
  } else if(event.type === 'keypress') {
    var code = event.charCode || event.keyCode;
    if((code === 32) || (code === 13)) {
      return true;
    }
  } else {
    return false;
  }
}

function loadMessageForm() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    // Return early if the request is not complete
    if (this.readyState !== 4) return;
    // Process our return data
    // Get the form and replace its contents
    var targetElement = document.getElementById('js__insert-form');
    if (targetElement !== null && targetElement !== '') {
      if (this.status >= 200 && this.status < 300) {
        //console.log('success!', this);
        targetElement.innerHTML = this.responseText;
      } else {
        //console.log('Whoops, the request failed!');
        if (this.status == 404) {
          targetElement.innerHTML = "External Page not found.";
        }
      }
    }
  };
  xhr.open( 'GET', '/assets/partials/message-form.php' );
  xhr.send();
}

document.addEventListener("DOMContentLoaded", function() {
  // Make it clear whether JS has loaded or not
  document.body.classList.remove("no-js");
  document.body.classList.add("js");

  // Load the anecdote form immediately if someone clicks the loader button
  loadMessageForm();

  // Expand / Collapse utility
  //
  //Minimum expected markup:
  //<div>
  //  <div>
  //    <button id="summaryId" class="js__expand-collapse" aria-expanded="false" aria-controls="targetId">See More</button>
  //  </div>
  //  <div id="targetId" aria-labelledby="summaryId" class="aria-expand">Content to reveal here</div>
  //</div>
  //
  // This function ONLY toggles a show/hide class on the target and toggles aria-expanded
  // Any other functionality (like swapping the text content if true/false) needs to be in the component JS
  document.querySelectorAll(".js__expand-collapse").forEach(function(toggle_element) {
    toggle_element.addEventListener('click', function(event) {
      event.preventDefault();
      if (a11yClick(event) === true) {
        var expanded = toggle_element.getAttribute('aria-expanded');
        var target_id = toggle_element.getAttribute('aria-controls');
        var target_element = document.getElementById(target_id);

        if (expanded == 'true') {
          toggle_element.setAttribute('aria-expanded', 'false');
          target_element.classList.remove('js__aria-expanded')
        } else {
          toggle_element.setAttribute('aria-expanded', 'true');
          target_element.classList.add('js__aria-expanded')
        }
      }
    })
  });
});
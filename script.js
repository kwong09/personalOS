function updateTime() {
    var todayTime = new Date().toLocaleString();
    var timeText = document.querySelector("#timeElement");
    timeText.innerHTML = todayTime;
  }

  setInterval(updateTime, 1000);

// Make the DIV element draggable:
dragElement(document.getElementById("welcome"));

// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "header")) {
    // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
    // This allows you to drag the window around by its header.
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
    // This allows you to drag the window by holding down anywhere on the window.
    element.onmousedown = startDragging;
  }

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;

    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}




var welcomeScreen = document.querySelector("#welcome");

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "block"
}

var welcomeScreenClose = document.querySelector("#welcomeclose");

var welcomeScreenOpen = document.querySelector("#welcomeopen");

welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});



dragElement(document.querySelector("#boba"))

var bobaScreen = document.querySelector("#boba")

var selectedIcon = undefined;


function deselectIcon(element) {
  element.classList.remove("selected");
  selectedIcon = undefined
} 

function selectIcon(element) {  
  element.classList.add("selected");
  selectedIcon = element
}

function makeClosable(elementId) {
  var screen = document.querySelector("#" + elementId);
  var screenClose = document.querySelector("#" + elementId + "close");
  
  screenClose.addEventListener("click", function() {
    closeWindow(screen);
    deselectIcon(document.querySelector("#" + elementId + "open"));
  });
}

function makeOpenable(elementId) {
  var screen = document.querySelector("#" + elementId);
  var screenOpen = document.querySelector("#" + elementId + "open");
  
  screenOpen.addEventListener("click", function() {
    openWindow(screen);
    selectIcon(document.querySelector("#" + elementId + "open"));
  });
}

var biggestIndex = 1;
var topBar = document.querySelector("#top")

function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () =>
    handleWindowTap(element)
  )
}

function openWindow(element) {
  element.style.display = "block";
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}

function handleWindowTap(element) {
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}

function initializeWindow(elementName) {
  var screen = document.querySelector("#" + elementName);
  addWindowTapHandling(screen);
  makeClosable(elementName);
  dragElement(screen);
  if(elementName != "welcome") {
    makeOpenable(elementName) 
  }
}

initializeWindow("welcome")
initializeWindow("boba")
initializeWindow("basketball")
initializeWindow("art")
initializeWindow("tech")
initializeWindow("settings")
initializeWindow("business")


showIntro.addEventListener("click", function() {
  bobaIntro.style.display = "block";
  gongCha.style.display = "none";
  sevenLeaves.style.display = "none";
  vendingMachine.style.display = "none";
});
showGongCha.addEventListener("click", function() {
  bobaIntro.style.display = "none";
  gongCha.style.display = "block";
  sevenLeaves.style.display = "none";
  vendingMachine.style.display = "none";
});
show7Leaves.addEventListener("click", function() {
  bobaIntro.style.display = "none";
  gongCha.style.display = "none";
  sevenLeaves.style.display = "block";
  vendingMachine.style.display = "none";
});
showVendingMachine.addEventListener("click", function() {
  bobaIntro.style.display = "none";
  gongCha.style.display = "none";
  sevenLeaves.style.display = "none";
  vendingMachine.style.display = "block";
});

function changeHeaderColor(color) {
  var headers = [
    welcomeheader,
    bobaheader,
    basketballheader,
    artheader,
    techheader,
    businessheader,
    settingsheader,
    sidebar
  ];

  headers.forEach(header => {
    header.style.backgroundColor = color;
  });
}

duckBackground.addEventListener("click", function() {
  body.style.backgroundImage = "url('https://kwong09.github.io/personalOS/duckBackground.gif')"
  changeHeaderColor("rgba(255, 101, 155, 0.5)");
});

bearBackground.addEventListener("click", function() {
  body.style.backgroundImage = "url('https://kwong09.github.io/personalOS/bearAni.gif')";
  changeHeaderColor("rgba(94, 140, 188, 0.5)");
});

redPandaBackground.addEventListener("click", function() {
  body.style.backgroundImage = "url('https://kwong09.github.io/personalOS/redPandaBackground.gif')";
  changeHeaderColor("rgba(206, 132, 255, 0.5)");
});
let theWheel = new Winwheel({
    'numSegments': 16,     // Specify number of segments.
    'textFontSize': 28,    // Set font size as desired.
    'responsive': true,  // This wheel is responsive!
    'segments':        // Define segments including colour and text.
        [
            { 'fillStyle': '#ad091f', 'text': '1' },
            { 'fillStyle': '#89f26e', 'text': '2' },
            { 'fillStyle': '#ad091f', 'text': '3' },
            { 'fillStyle': '#89f26e', 'text': '4' },
            { 'fillStyle': '#ad091f', 'text': '5' },
            { 'fillStyle': '#89f26e', 'text': '6' },
            { 'fillStyle': '#ad091f', 'text': '7' },
            { 'fillStyle': '#89f26e', 'text': '8' },
            { 'fillStyle': '#ad091f', 'text': '9' },
            { 'fillStyle': '#89f26e', 'text': '10' },
            { 'fillStyle': '#ad091f', 'text': '11' },
            { 'fillStyle': '#89f26e', 'text': '12' },
            { 'fillStyle': '#ad091f', 'text': '13' },
            { 'fillStyle': '#89f26e', 'text': '14' },
            { 'fillStyle': '#ad091f', 'text': '15' },
            { 'fillStyle': '#89f26e', 'text': '16' }
        ],
    'pins':
    {
        'outerRadius': 5,
        'responsive': true, // This must be set to true if pin size is to be responsive, if not just location is.
    },
    'animation':           // Specify the animation to use.
    {
        'type': 'spinToStop',
        'duration': 15,
        'spins': 8,
        'callbackSound': playSound,   // Function to call when the tick sound is to be triggered.
        'soundTrigger': 'pin'        // Specify pins are to trigger the sound, the other option is 'segment'.
    },
    'pins':
    {
        'number': 16   // Number of pins. They space evenly around the wheel.
    }
});

let audio = new Audio('tick.mp3');  // Create audio object and load tick.mp3 file.
function playSound() {
    // Stop and rewind the sound if it already happens to be playing.
    audio.pause();
    audio.currentTime = 0;

    // Play the sound.
    audio.play();
}
let buton = document.querySelector('.spin')
let bool = false
let even = document.querySelector('.even')
let odd = document.querySelector('.odd')
let firsteight = document.querySelector('.firsteight')
let secondeight = document.querySelector('.secondeight')
let option

buton.classList.add('spinning')

even.addEventListener('click', () => {
    option = 'even'
    checkifanotherclassisactive() 
    even.classList.add('active')
})
odd.addEventListener('click', () => {
    option = 'odd'
    checkifanotherclassisactive() 
    odd.classList.add('active')
})
firsteight.addEventListener('click', () => {
    option = 'first eight'
    checkifanotherclassisactive() 
    firsteight.classList.add('active')
})
secondeight.addEventListener('click', () => {
    option = 'second eight'
    checkifanotherclassisactive() 
    secondeight.classList.add('active')
})

buton.addEventListener('click', () => {
    bool = true
    console.log(bool)
    if(option!=undefined)
    startSpinning()
})
console.log(bool)
function checkifanotherclassisactive(){
    let butoane=[even,odd,firsteight,secondeight]
    for(let i=0;i<butoane.length;i++)
    {
        if(butoane[i].classList.contains('active'))
            butoane[i].classList.remove('active')
    }
}
function startSpinning(da) {
    if (bool == true && option != undefined) {
        console.log('se invarte')
        theWheel.startAnimation();
    }
    else {
        console.log('false')
    }
    if (buton.classList.contains('spinning')) {
        buton.classList.remove('spinning')
        buton.classList.add('notspinning')
    }
    else{
        if (buton.classList.contains('notspinning')) {
            buton.classList.remove('notspinning')
            buton.classList.add('spinning')
        }   
    }
    bool = false
    option=undefined
    setTimeout(function () {
        bool = true
        theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
        theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
        theWheel.draw();               // Call draw to render changes to the wheel.
        if (buton.classList.contains('notspinning')) {
            buton.classList.remove('notspinning')
            buton.classList.add('spinning')
        }
        checkifanotherclassisactive()               
    }, 15000);


}
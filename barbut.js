const buton = document.querySelector('.flip-button')

const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')

const dissapear = document.querySelector('.dissapear')

const cap = document.querySelector('.capsaupajura1')
const pajura = document.querySelector('.capsaupajura2')

const balance = document.querySelector('.capsaupajura3')

let selected, extrasa
let balanta = 0, wins = 0
let trojan = false
let random

alert("please select a side, every bet consists of 5 lei")
function flip() {
    cap.addEventListener('click', () => {
        console.log("cap selected")
       /* alert('cap selected') */
        selected = 'cap'
        cap.classList.add('selected')
        if(pajura.classList.contains('selected'))
            pajura.classList.remove('selected')
    })
    pajura.addEventListener('click', () => {
        console.log("pajura selected")
       /* alert('pajura selected') */
        selected = 'pajura'
        pajura.classList.add('selected')
        if(cap.classList.contains('selected'))
            cap.classList.remove('selected')
    })
    buton.addEventListener('click', () => {
        event.preventDefault();

        if (trojan == true) {
            if (selected == 'cap') {
                random = 1
            }
            else {
                pica = 'cap'
                random = 0
            }
        }
        else {
            random = Math.random()
        }

        if (random > 0.5) {
            img1.style.display = "none"
            img2.style.display = "inline-block"
            extrasa = 'pajura'
        }
        else {
            img2.style.display = "none"
            img1.style.display = "inline-block"
            extrasa = 'cap'
        }
        console.log(`${selected} si extrasa: ${extrasa}`)

        if (selected == extrasa && selected != undefined) {
            balanta += 5
            alert(`You won, remaining:${balanta} wins:${wins}`)
            wins++
            if (wins >= 3)
                trojan = true
            else
                trojan = false

        }
        else {
            balanta -= 5
            alert(`You lost, remaining:${balanta} wins:${wins}`)
            wins--
            if (wins >= 3)
                trojan = true
            else
                trojan = false
        }
        balance.innerHTML=`balanta: ${balanta}`
    })
}
flip()

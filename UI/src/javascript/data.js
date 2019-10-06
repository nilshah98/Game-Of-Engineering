// Graph builder strings
const pathLeft =`<div class="graph__pathWrapper graph__pathWrapper--left">
<div class="graph__path graph__path--left"></div>
</div>`

const pathRight =`<div class="graph__pathWrapper graph__pathWrapper--right">
<div class="graph__path graph__path--right"></div>
</div>`

const nodeLeft =`<div class="graph__nodeWrapper graph__nodeWrapper--left">
<div class="graph__node graph__node--left"></div>
</div>`

const nodeRight =`<div class="graph__nodeWrapper graph__nodeWrapper--right">
<div class="graph__node graph__node--right"></div>
</div>`

const pathTop =`<div class="graph__pathWrapper graph__pathWrapper--top">
<div class="graph__path graph__path--top"></div>
</div> `

// Mock Data
data = {
    question: 'Choose from one of the available activities',
    title: 'Slot ek aur activity teen bahut na insaanfi hain',
    type: 0,
    options: [
        {
            text: 'Attend workshop on <programming in python>',
            effect: {
                technical: 10
            }
        },
        {
            text: 'Go for <basketball> team selection',
            effect: {
                sports: 10
            }
        },
        {
            text: 'Take part in debate society',
            effect: {
                cultural: 10,
                social: 10
            }
        },
        {
            text: 'Go home else trains will get crowded'
        }
    ]
}
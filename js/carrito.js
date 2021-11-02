const item = document.getElementById ('item')
const templateCard = document.getElementById ('template-card').content 
const fragment = document.createDocumentFragment()



document.addEventListener('DOMContentLoaded', () => {fetchData()
})



const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        console.log(data)
        pintarCards (data)

    }
    catch(error) {
        console.log(error)
    }
}


  const pintarCards = data =>{
data.forEach(producto => {
templateCard.querySelector('h5').textContent = producto.title

const clone = templateCard.cloneNode(true)
fragment.appendChild(clone)}) 
item.appendChild(fragment)
 } 
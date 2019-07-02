document.addEventListener('DOMContentLoaded', function(){

    const list = document.querySelector('#list ul');
    const forms = document.forms;



// delete a book 
list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
    li.parentNode.removeChild(li);
    }

    })


//add book 

const form = document.querySelector('form.add-book')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('submit')
    const value = input.value


    // create element 

    const li = document.createElement('li')
    const bookname = document.createElement('span')
    const deletebtn = document.createElement('span')

    // add text content

    deletebtn.textContent = 'delete'
    bookname.textContent = value

    // add classes 

    bookname.classList.add('name')
    deletebtn.classList.add('delete')

    // append 

    li.appendChild(bookname)
    li.appendChild(deletebtn)
    list.appendChild(li)


})

const checkBox = document.querySelector('#hide')

checkBox.addEventListener('change', (e) => {

    if(checkBox.checked){
        list.style.display = 'none'
    }
    else {
        list.style.display = 'initial'
    }
})

const searchBar = document.forms[0].querySelector('input')

searchBar.addEventListener('keyup', (e)=>{
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li')
    Array.from(books).forEach((book) => {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block'
        }
        else {
            book.style.display = 'none'
        }
    })
})
})



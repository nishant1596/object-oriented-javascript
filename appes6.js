class Book{
  constructor(title,author,isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
  }
}
class UI{
  addBookToList(book){
    const list=document.querySelector('#book-list');
    //create tr element
    const row=document.createElement('tr');
    //insert cols
    row.innerHTML=`<td>${book.title}</td>
                  <td>${book.author}</td>
                  <td>${book.isbn}</td>`;
  }

  //showAlert
  showAlert(message,className){
    const div=document.createElement('div');
    //Add classes
    div.className=`alert ${className}`
    //Add Text
    div.appendChild(document.createTextNode(message));
    const container=document.querySelector('.container');
    const form=document.querySelector('form');
    console.log(div);
    container.insertBefore(div,form);
    setTimeout(()=> {
      document.querySelector('.alert').remove()
    },3000);
  }

  deleteBook(target){
    if(target.className==='delete'){
      target.parentElement.parentElement.remove();
    }
  }
  clearFields(){
    document.querySelector('#title').value='';
    document.querySelector('#author').value='';
    document.querySelector('#isbn').value='';
  }
}

//Event Listeners for add book
document.querySelector('#book-form').addEventListener('submit',(e)=>{
  //Get form values
  const title=document.querySelector('#title').value;
  const author=document.querySelector('#author').value;
  const isbn=document.querySelector('#isbn').value;

  //Instantiate book
  const book=new Book(title,author,isbn);

  //instantiate the UI
  const ui=new UI();

  //validate
  if(title==='' || author===''|| isbn===''){
    ui.showAlert('Please fill all the fields','danger');
  }
  else{
    //add book to the row
    ui.addBookToList(book);

    //show success
    ui.showAlert('successfully added with isbn number','success');
    //ui.clearFields
    ui.clearFields();
  }
  e.preventDefault();
});


//EventListener for delete (click)
document.querySelector('#book-list').addEventListener('click',function (e) {

  //instantiate ui
  const ui=new UI();
  ui.deleteBook(e.taget);

  //show message
  ui.showAlert('Book removed!','success');
  e.preventDefault();
});

function comentar(){
  comments = document.getElementById('comment').value;
  document.getElementById('comment').value = '';

  if(comments.length === 0 || comments === null){
    alert ('Debes ingresar un mensaje');
    return false;
  }
  
  const cont = document.getElementById('cont');
  
  const newComments = document.createElement('div');
    
  const contenedorElemento = document.createElement('p');
  
  let textNewComment = document.createTextNode(comments);

  const hr = document.createElement('hr')

  const trash = document.createElement('i');
  trash.classList.add('fa', 'fa-trash', 'trash');
  
  contenedorElemento.appendChild(textNewComment);
  newComments.appendChild(contenedorElemento);
  newComments.appendChild(trash);
  newComments.appendChild(hr);
  cont.appendChild(newComments);

  trash.addEventListener('click', ()=> {
    cont.removeChild(newComments);
  })
}



document.getElementById('btn-1').addEventListener('click', function () {
  const input1 = document.getElementById('input-1');
  const newComment = document.createElement('p');
  newComment.innerText = input1.value;
  const section1 = document.getElementById('section-1');
  section1.appendChild(newComment);
})

function addComment() {
  const input2 = document.getElementById('input-2');
  const newComment = document.createElement('p');
  newComment.innerText = input2.value;
  const section2 = document.getElementById('section-2');
  section2.appendChild(newComment);
}

document.getElementById('add-both').addEventListener('click', function () {
  const input1 = document.getElementById('input-1');
  const input2 = document.getElementById('input-2');
  const addedComment = document.getElementById('added-comment');
  addedComment.innerText = input1.value + ' ' + input2.value;
})
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const number = document.getElementById('number').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let errors = [];

    if (name === '') {
      errors.push('Name is required.');
    }

    if (!/^\d{10}$/.test(number)) {
      errors.push('Enter a valid 10-digit phone number.');
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push('Enter a valid email address.');
    }

    if (message === '') {
      errors.push('Message cannot be empty.');
    }

    if (errors.length > 0) {
      formMessage.style.color = 'red';
      formMessage.textContent = errors.join(' | ');
    } else {
      formMessage.style.color = 'limegreen';
      formMessage.textContent = 'Your form is submitted successfully!';
      contactForm.reset();
    }
  });
});
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.style.marginLeft = '10px';

  removeBtn.addEventListener('click', function () {
    li.remove();
  });

  li.appendChild(removeBtn);

  document.getElementById('taskList').appendChild(li);

  taskInput.value = '';
}

const data = [
  {
    name: 'John Doe',
    age: '32',
    gender: 'male',
    lookingfor: 'female',
    location: 'Lisbon',
    image: 'http://randomuser.me/api/portraits/men/53.jpg'
  },
  {
    name: 'Jill Lane',
    age: '31',
    gender: 'female',
    lookingfor: 'female',
    location: 'Lisbon',
    image: 'http://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'Vore',
    age: '28',
    gender: 'female',
    lookingfor: 'female',
    location: 'Lisbon',
    image: 'http://randomuser.me/api/portraits/women/76.jpg'
  }
];

const profiles = profileIterator(data);

nextProfile();

document.querySelector('#next').addEventListener('click', nextProfile);



function nextProfile() {

  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {
    document.querySelector('#profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
      </ul>
      `;
  
    document.querySelector('#imageDisplay').innerHTML = `<img src=${currentProfile.image}>`
  } else {
    location.reload();
  }
}

// profile iterator

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      {value: profiles[nextIndex ++], done: false} :
      {done: true}
    }
  };
}
const professional = [{
    id: 0,
    name: 'Ali Haider',
    job: 'React Js developer',
    img: 'https://www.shutterstock.com/image-photo/smiling-busy-professional-latin-business-260nw-2392837495.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
},
{
    id: 1,
    name: 'Husnain',
    job: 'App developer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
},
{

    id: 2,
    name: 'Salman ',
    Job: 'React Native Developer',
    img: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',


},
{
    id: 3,
    name: 'Naveed Islam',
    job: 'Next js developer',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',


},
{
    id: 4,
    name: 'Haris',
    job: 'Node Js developer',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
}]
const Professional = [
  {
    id: 5,
    name: 'Areeba Khan',
    job: 'UI/UX Designer',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'Creative mind with a strong aesthetic sense. I love designing interfaces that users fall in love with. Sketch, Figma, and Adobe XD are my go-to tools.',
  },
  {
    id: 6,
    name: 'Zain Ali',
    job: 'Full Stack Developer',
    img: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'Building both frontend and backend is my jam. MERN stack enthusiast with a passion for scalable and efficient apps.',
  },
  {
    id: 7,
    name: 'Sana Iqbal',
    job: 'Product Manager',
    img: 'https://randomuser.me/api/portraits/women/72.jpg',
    text: 'I bridge the gap between tech and business. Focused on delivering value and leading teams with empathy and clarity.',
  },
  {
    id: 8,
    name: 'Ahmed Raza',
    job: 'DevOps Engineer',
    img: 'https://randomuser.me/api/portraits/men/31.jpg',
    text: 'I automate everything! CI/CD, monitoring, cloud deployments—bringing development and operations together.',
  },
  {
    id: 9,
    name: 'Fatima Noor',
    job: 'AI/ML Engineer',
    img: 'https://randomuser.me/api/portraits/women/40.jpg',
    text: 'Turning data into decisions with machine learning. Python, TensorFlow, and clean datasets are my best friends.',
  },
  {
    id: 10,
    name: 'Imran Qureshi',
    job: 'Cybersecurity Analyst',
    img: 'https://randomuser.me/api/portraits/men/25.jpg',
    text: 'Protecting apps and users from threats. Penetration testing, firewalls, and zero-day exploits are part of my daily routine.',
  },
  {
    id: 11,
    name: 'Mehwish Aslam',
    job: 'Data Analyst',
    img: 'https://randomuser.me/api/portraits/women/55.jpg',
    text: 'Finding insights in messy data is what I live for. Excel, SQL, and Power BI help me turn numbers into stories.',
  }
];
const reviews = [...Professional,...professional]
const PersonImage = document.getElementById('person-img')
const Author = document.getElementById('author')
const Job = document.getElementById('job')
const Info = document.getElementById('info')
const PreviousBtn = document.querySelector('.prev-btn')
const NextBtn = document.querySelector('.next-btn')
const RandomBtn = document.querySelector('.random-btn')

let currentItem = 1
window.addEventListener('DOMContentLoaded',function () {
  const item = reviews[currentItem]
  PersonImage.src = item.img
  Job.textContent = item.Job
  Author.textContent = item.name
  Info.textContent = item.text
})

//  show person base on item 
function ShowPerson(person) {
    let item = reviews[person]
    PersonImage.src = item.img
    Author.textContent = item.name 
    Info.textContent = item.text 
    Job.textContent = item.job  
}

// Next Person
NextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  ShowPerson(currentItem);
});
// previous button
PreviousBtn.addEventListener('click',function () {
    currentItem--
    if (currentItem < 0) {
        currentItem = reviews.length - 1
    }
    ShowPerson(currentItem)
})

// random Person show

RandomBtn.addEventListener('click',function () {

currentItem= Math.floor(    Math.random()*reviews.length
)    
ShowPerson(currentItem)
})
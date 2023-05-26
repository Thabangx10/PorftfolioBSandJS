// We are targeting a ceratin part of the about section

let about = document.querySelector('section#about .row:last-child');

// We are storing our values
let contents = [
    // About myself
    "Hello and welcome to my about page! My name is Thabang and I am thrilled to have you here. As an aspiring software engineer, I am passionate about exploring innovative and future-driven ideologies. I believe that technology has the power to transform the world and create solutions that can make a positive impact on people's lives.",
    // Current situation
    "Continued learning and exploring different aspects of technology. Started looking for more structured learning opportunities. Enrolled in ALX Software Engineering and Data Science programs to gain practical experience and learn from experienced professionals in the field. Participated in a 1-week boot camp at WeThinkCode to learn Python and unit testing in a peer-to-peer environment. Graduated from ALX Software Engineering and Data Science programs and started working on various projects to apply his skills and gain practical experience. Currently up-skilling his full-stack development skills at Life Choices Academy."
]

// Loop through our content

contents.forEach((content) => {
    about.innerHTML += `
        <p class='lead'>${content}</p>
    `
});

// Education Section

let structure = document.querySelector('section#education .row:last-child')

// Create an array for our content
let edu_contents = [
    // Life after high school
    "Graduated from high school and developed an interest in innovation and technology. Started exploring technology through YouTube videos and online courses on Sololearn, learning programming languages like C and SQL. Enrolled in FreeCodeCamp and started learning Python and MySQL. Discovered Khan Academy and began exploring data and math concepts to improve his problem-solving skills.",

    // My self taught Journey
    "My journey in the technology space started with my curiosity for innovation. I was self-taught and used various resources, such as YouTube, Sololearn, FreeCodeCamp, and Khan Academy to learn programming languages like C, SQL, Python, and MySQL, and to understand data and math concepts. As I progressed, I also participated in accelerated programs and boot camps, such as ALX Software Engineering and Data Science programs, and a 1-week boot camp at WeThinkCode, where I learned Python and unit testing in a peer-to-peer environment. These experiences have been invaluable in helping me to become a skilled software engineer, with a deep understanding of programming languages, data analysis, and problem-solving. My journey has been one of determination, self-motivation, and continuous learning. I hope that my experiences will inspire others who are also on a journey to learn and grow their skills in the technology space.",
]
 
// Creating a loop to get our content

edu_contents.forEach((content) =>{
    structure.innerHTML += `
    <p class='lead'>${content}</p>
    `
})



// Education
// let education = [
//     {
//         id: 1,
//         year: 2020,
//         description: 'I got my certificates on Data science',
//         place: 'Data Camp',
//         type: 'certificate',
//         certificate: ''
//     },
//     {
//         id: 2,
//         year: 2019,
//         description: 'I got my certificates on Advanced to Python',
//         place: 'Data Camp',
//         type: 'certificate',
//         certificate: ''
//     },
//     {
//         id: 3,
//         year: 2018,
//         description: 'I got my certificates on Intro to Python',
//         place: 'Data Camp',
//         type: 'certificate',
//         certificate: ''
//     },
//     {
//         id: 4,
//         year: 2015,
//         description: 'I got my certificate on Intro to Android Developer',
//         place: 'Study Jams',
//         type: 'certificate',
//         certificate: ''
//     },
//     {
//         id: 5,
//         year: 2014,
//         description: 'I got my diploma on Software Engineering',
//         place: 'Tshwane University of Technology',
//         type: 'Diploma',
//         certificate: ''
//     },
//     {
//         id: 6,
//         year: 2005,
//         description: 'Completed my course on PC Engineering',
//         place: 'Havatech',
//         type: 'Certificate',
//         certificate: ''
//     },
//     {
//         id: 7,
//         year: 2000,
//         description: 'Grade 12',
//         place: '',
//         type: 'Certificate',
//         certificate: ''
//     },
// ]
// //
// let divEducation = document.querySelector('.education');
// education.forEach((data)=> {
//     divEducation.innerHTML += `
//     <div class="card">
//         <h4 class="display-4">${data.year}</h4>
//         <div class="card-body">
//             <p class="text-white">
//                 ${data.description} @ <span>${data.place}</span> 
//                 <a href="${data.certificate}" target="_blank">${data.type}</a>
//             </p>
//         </div>
//     </div>
//     `
// })
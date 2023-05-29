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
    <p class='lead'>${content}</p><br>
    `
})

// Education
let education = [
    {
        id: 1,
        year: 2020,
        description: 'I got my certificates on Data science',
        place: 'Data Camp',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 2,
        year: 2019,
        description: 'I got my certificates on Advanced to Python',
        place: 'Data Camp',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 3,
        year: 2018,
        description: 'I got my certificates on Intro to Python',
        place: 'Data Camp',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 4,
        year: 2015,
        description: 'I got my certificate on Intro to Android Developer',
        place: 'Study Jams',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 5,
        year: 2014,
        description: 'I got my diploma on Software Engineering',
        place: 'Tshwane University of Technology',
        type: 'Diploma',
        certificate: ''
    },
    {
        id: 6,
        year: 2005,
        description: 'Completed my course on PC Engineering',
        place: 'Havatech',
        type: 'Certificate',
        certificate: ''
    },
    {
        id: 7,
        year: 2000,
        description: 'Grade 12',
        place: '',
        type: 'Certificate',
        certificate: ''
    },
]

let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
                <a href="${data.certificate}" target="_blank">${data.type}</a>
            </p>
        </div>
    </div>
    `
})

// Skills section

let skills = document.querySelector('.skill');
let skillcontent = `

<div class="row">
<h2 class="display-2">Skills</h2>
</div>
<div class="row">
<div class="skills">
  <h2>Front-end:</h2>
  <div class="container2">
    <div class="row">
      <div class="col-md-12">
        <h3 class="progress-title">HTML</h3>
        <div class="progress">
          <div class="progress-bar" style="width:85%; background:#97c513;">
            <div class="progress-value">85%</div>
          </div>
        </div>
        <h3 class="progress-title">CSS</h3>
        <div class="progress">
          <div class="progress-bar" style="width:70%; background:#f2545b;">
            <div class="progress-value">70%</div>
          </div>
        </div>
        <h3 class="progress-title">JAVASCRIPT</h3>
        <div class="progress">
          <div class="progress-bar" style="width:100%; background:#4286f4;">
            <div class="progress-value">Pending Module</div>
          </div>
        </div>
        <h3 class="progress-title">BOOTSTRAP</h3>
        <div class="progress">
          <div class="progress-bar" style="width:60%; background:#21ff63;">
            <div class="progress-value">60%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br><br><br>
  <h2>Back-end:</h2>
  <div class="container2">
    <div class="row">
      <div class="col-md-12">
        <h3 class="progress-title">C</h3>
        <div class="progress">
          <div class="progress-bar" style="width:65%; background:#97c513;">
            <div class="progress-value">65%</div>
          </div>
        </div>
        <h3 class="progress-title">PYTHON</h3>
        <div class="progress">
          <div class="progress-bar" style="width:80%; background:#f2545b;">
            <div class="progress-value">80%</div>
          </div>
        </div>
        <h3 class="progress-title">MYSQL</h3>
        <div class="progress">
          <div class="progress-bar" style="width:75%; background:#4286f4;">
            <div class="progress-value">75%</div>
          </div>
        </div>
        <h3 class="progress-title">LINUX</h3>
        <div class="progress">
          <div class="progress-bar" style="width:80%; background:#21ff63;">
            <div class="progress-value">80%</div>
          </div>
        </div>
        <h3 class="progress-title">GIT</h3>
        <div class="progress">
          <div class="progress-bar" style="width:90%; background:red">
            <div class="progress-value">90%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<br><br>
<section>
<ul class="">
  <p><strong>Communication</strong><br>
    <p>
      being part of online communities such as Sololearn and FreeCodeCamp has helped me to hone my communication skills, a key aspect of teamwork and collaboration in the technology industry. I am convinced that these soft skills, such as my growth and grit mindset, teachability, teamwork, problem-solving, and communication skills, are critical for my success as a software engineer and will continue to serve me well in my future endeavors.
    </p>
  </p>
  <p><strong>Teamplayer</strong><br>
    <p>
      Working in peer-to-peer environments, such as my participation in the WeThinkCode boot camp, has helped me develop my ability to work collaboratively and become a good team player. In addition, my experience exploring data and math concepts on Khan Academy, combined with my participation in accelerated programs and boot camps, has allowed me to become a good problem solver, with the ability to identify complex issues and develop innovative solutions.
    </p>
  </p>
  <p><strong>Teachable</strong><br>
    <p>
      My willingness to explore and learn from various online resources, such as YouTube, Sololearn, FreeCodeCamp, and Khan Academy, demonstrate his teachability.I have been always open to new ideas and approaches to solving problems, which has helped me to become a well-rounded and skilled software engineer.
    </p>
  </p>
  <p><strong>Growth Mindset</strong><br>
    <p>
      Curiosity and passion for innovation in the technology space demonstrate his growth mindset. I always been willing to learn new things, even when faced with challenges
    </p>
  </p>
  <p><strong>Grind Mindset</strong><br>
    <p>
      My self-taught approach, along with participation in various online courses and accelerated programs, showen determination and grit to overcome obstacles and achieve set goals.
    </p>
  </p>
</ul>
</section>              
</div>
</div>
</section>
`;
 
skills.innerHTML = skillcontent;

// Testimonial section

let testimonial = document.querySelector('.testimonial');
let testimonialcontent = `

<section class="container" id="testimonial">
<div class="row">
  <h2 class="display-2">
    Testimonials
  </h2>
</div>
<div class="row">
  <div class="testimonials">
    <div class="container d-flex align-items-center justify-content-center flex-wrap">
      <div class="box">
          <div class="body">
              <div class="imgContainer">
                  <img src="https://i.postimg.cc/90f6DW0N/C12-Mihlali-Matrose-3.jpg" alt="Mihlali Matrose">
              </div>
              <div class="content d-flex flex-column align-items-center justify-content-center">
                  <div>
                      <h3 class="text-white fs-5">Mihlali Matrose</h3>
                      <p class="fs-6 text-white">Thabang is a young and pessionate person especial when it come to any digital. He is easy to with ingage as a teamate and any company would be lucky to have him.</p>
                  </div>
              </div>
          </div>
      </div>
      <div class="box">
          <div class="body">
              <div class="imgContainer">
                  <img src="https://i.postimg.cc/gcVyJfZm/image-1.png" alt="">
              </div>
              <div class="content d-flex flex-column align-items-center justify-content-center">
                  <div>
                      <h3 class="text-white fs-5">Imtiyaaz Damon</h3>
                      <p class="fs-6 text-white">Thabang is a strong person and very intelligent person. He helps me alot in coding and understanding the work.He is very supportive and kind</p>
                  </div>
              </div>
          </div>
      </div>
      <div class="box">
          <div class="body">
              <div class="imgContainer">
                  <img src="https://i.postimg.cc/0yb9W1Gs/IMG-20230505-WA0000.jpg" alt="Alonso Cupido">
              </div>
              <div class="content d-flex flex-column align-items-center justify-content-center">
                  <div>
                      <h3 class="text-white fs-5">Alonso Cupido</h3>
                      <p class="fs-6 text-white">Thabang is a very great person he works well in a team and also works really hard , and he is always punctual. He has a good understanding of IT and web development, he would be a great asset to your team and a very reliable team member. Any team would be lucky if you were to accept him.</p>
                  </div>
              </div>
          </div>
      </div>
      <div class="box">
          <div class="body">
              <div class="imgContainer">
                  <img src="https://i.postimg.cc/BbGXcKTV/C12-C2-Siyamanga-Zweni-2.jpg" alt="Siyamthanda Mazokwana">
              </div>
              <div class="content d-flex flex-column align-items-center justify-content-center">
                  <div>
                      <h3 class="text-white fs-5">Siyamanga</h3>
                      <p class="fs-6 text-white">Thabang is an exceptional learner with a keen eye for detail, He is also an excellent team player who always goes above and beyond to help where needed. His determination, positive attitude,  and passion for technology makes working with him easy  His attention to details makes working with him an incredible experience. I have no doubt that he would be a valuable asset to your company.</p>
                  </div>
              </div>
          </div>
      </div>
      <div class="box">
          <div class="body">
              <div class="imgContainer">
                  <img src="https://i.postimg.cc/JhDc4SRc/C12-Siyamthanda-Mazokwana-2.jpg" alt="">
              </div>
              <div class="content d-flex flex-column align-items-center justify-content-center">
                  <div>
                      <h3 class="text-white fs-5">Siyamthanda Mazokwana</h3>
                      <p class="fs-6 text-white">Thabang is a dedicated and goal driven individual. He always goes an extra mile in everything that he does. He is respectful and panctual</p>
                  </div>
              </div>
          </div>
      </div>
      <div class="box">
        <div class="body">
            <div class="imgContainer">
                <img src="https://i.postimg.cc/s2p1LVs8/t0.jpg" alt="Assistant lecturer">
            </div>
            <div class="content d-flex flex-column align-items-center justify-content-center">
                <div>
                    <h3 class="text-white fs-5"></h3>
                    <p class="fs-6 text-white">I highly recommend Thabang Kganana, an aspiring web developer with a passion for creating stunning and functional websites.Thabang has a strong foundation in programming languages such as HTML, CSS, and Bootstrap and is constantly learning and staying up-to-date with the latest technologies. Their attention to detail and commitment to delivering high-quality work make them an excellent choice for any web development project.</p>
                </div>
            </div>
        </div>
    </div>
  </div>
  </div>
  </div>
</div>
</section>
`;

testimonial.innerHTML = testimonialcontent;

// Project section

let project = document.querySelector('.projects');
let projectcontent = `
<section class="container" id="projects">
<div class="row">
  <h2 class="display-2">
    Projects
  </h2>
</div>
<div class="row">
<div class="projects">
  <section class="articles">
    <article>
      <div class="article-wrapper">
        <figure>
          <img src="/images/HTML-and-CSS.png" alt="HTML,CSS" />
        </figure>
        <div class="article-body">
          <h2>Web development</h2>
          <p>
            HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices.
          </p>
          <a href="https://clever-liger-84ce59.netlify.app/" class="read-more">
            Live project <span class="sr-only">about this is some title</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </article>
    <article>
  
      <div class="article-wrapper">
        <figure>
          <img src="/images/girl-holding-smartphone-airbnb-app-260nw-2140051505.webp" alt="Air-Bnb" />
        </figure>
        <div class="article-body">
          <h2>Air-Bnb clone</h2>
          <p>
            A command interpreter to manipulate data without a visual interface, like a shell (for development and debugging).<br>A website (front-end) with static and dynamic functionalities.<br>An API that provides a communication interface between the front and backend of the system<br>
          </p>
          <a href="https://github.com/Thabangx10/AirBnB_clone" class="read-more">
            Github <span class="sr-only">about this is some title</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </article>
    <article>
  
      <div class="article-wrapper">
        <figure>
          <img src="/images/coding-programming-project-ideas-1128x635.jpg" alt="Bootstrap" />
        </figure>
        <div class="article-body">
          <h2>Binary trees</h2>
          <p>
            A project in which we learnt about the details, advantages, and disadvantages of using trees as data structures. We learned about how to qualify trees as well as how to traverse them. Throughout the project, we implemented binary, binary search, AVL, and Max Binary Heap trees.
          </p>
          <a href="#" class="read-more">
            Github <span class="sr-only">about this is some title</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  </section>
</div>
</div>
</section>
`;

project.innerHTML = projectcontent;

// Contact section

let contact = document.querySelector('.contact');
let contactcontent = `
<section class="container" id="contact">
<div class="row">
<h2 class="display-2">
  Contact Us
</h2>
</div>
<div class="row">
<div class="contact">
  <div class="container">
    <!-- <p class="contact">Contact Me </p> -->
    <form action="https://formspree.io/f/mjvdladp" method="post">
      <label for="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name..">
      <label for="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name..">
      <label for="subject">Subject</label>
      <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
      <input type="submit" value="Submit">
    </form>
  </div>
</form>
</div>
</div>
</section>
</main>
`;

contact.innerHTML = contactcontent;
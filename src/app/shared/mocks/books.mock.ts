import { Book } from '../interfaces/book';


export const booksMock: Book[] = [
  {
    id: 1,
    name: 'Continuous Delivery',
    isbn: '252621',
    image: 'http://nh-back.jcramireztello.com/media/books/5f287f75de25badfcc4e4e34_25.jpg',
    language: 'en',
    publishedDate: '2005-12-18',
    publisher: 'Jez Humble & David Farley',
    numberPages: 325,
    summary: 'Getting software released to users is often a painful, risky, and time-consuming process. This groundbreaking new book sets out the principles and technical practices that enable rapid, incremental delivery of high quality, valuable new functionality to users. Through automation of the build, deployment, and testing process, and improved collaboration between developers, testers, and operations, delivery teams can get changes released in a matter of hours— sometimes even minutes–no matter what the size of a project or the complexity of its code base.\r\n\r\nJez Humble and David Farley begin by presenting the foundations of a rapid, reliable, low-risk delivery process. Next, they introduce the “deployment pipeline,” an automated process for managing all changes, from check-in to release. Finally, they discuss the “ecosystem” needed to support continuous delivery, from infrastructure, data and configuration management to governance.',
    featured: true
  },
  {
    id: 2,
    name: 'Algorithms',
    isbn: '252622',
    image: 'http://nh-back.jcramireztello.com/media/books/5f287faff2205a602fc8c376_24.jpg',
    language: 'en',
    publishedDate: '2010-11-16',
    publisher: 'Robert Sedgewick & Kevin Wayne',
    numberPages: 214,
    summary: 'The algorithms in this book represent a body of knowledge developed over the last 50 years that has become indispensable, not just for professional programmers and computer science students but for any student with interests in science, mathematics, and engineering, not to mention students who use computation in the liberal arts.',
    featured: true,
  },
  {
    id: 3,
    name: 'The Self-Taught Programmer',
    isbn: '252623',
    image: 'http://nh-back.jcramireztello.com/media/books/5f288004037f6811b18d3787_23.jpg',
    language: 'en',
    publishedDate: '2017-02-18',
    publisher: 'Cory Althoff',
    numberPages: 212,
    summary: 'I am a self-taught programmer. After a year of self-study, I learned to program well enough to land a job as a software engineer II at eBay.\r\n\r\nOnce I got there, I realized I was severely under-prepared. I was overwhelmed by the amount of things I needed to know but hadn’t learned yet. My journey learning to program, and my experience at my first job as a software engineer were the inspiration for this book.\r\n\r\nThis book is not just about learning to program; although you will learn to code. If you want to program professionally, it is not enough to learn to code; that is why, in addition to helping you learn to program, I also cover the rest of the things you need to know to program professionally that classes and books don’t teach you.\r\n\r\n“The Self-taught Programmer” is a roadmap, a guide to take you from writing your first Python program,  to passing your first technical interview. The path is there. Will you take it?',
    featured: false
  },
  {
    id: 4,
    name: 'Rapid Development',
    isbn: '252624',
    image: 'http://nh-back.jcramireztello.com/media/books/5f288045f3c86d4331191cfa_22.jpg',
    language: 'en',
    publishedDate: '2016-01-02',
    publisher: 'Steve McConnell',
    numberPages: 345,
    summary: 'Corporate and commercial software-development teams all want solutions for one important problem—how to get their high-pressure development schedules under control. In RAPID DEVELOPMENT, author Steve McConnell addresses that concern head-on with overall strategies, specific best practices, and valuable tips that help shrink and control development schedules and keep projects moving. Inside, you’ll find:\r\n\r\n- A rapid-development strategy that can be applied to any project and the best practices to make that strategy work\r\n\r\n- Candid discussions of great and not-so-great rapid-development practices—estimation, prototyping, forced overtime, motivation, teamwork, rapid-development languages, risk management, and many others\r\n\r\n- A list of classic mistakes to avoid for rapid-development projects, including creeping requirements, shortchanged quality, and silver-bullet syndrome\r\n\r\n- Case studies that vividly illustrate what can go wrong, what can go right, and how to tell which direction your project is going\r\n\r\n- RAPID DEVELOPMENT is the real-world guide to more efficient applications development.',
    featured: false
  },
  {
    id: 5,
    name: 'Coders at work',
    isbn: '282621',
    image: 'http://nh-back.jcramireztello.com/media/books/5f2880b2e1a3455cf773e11a_21.jpg',
    language: 'en',
    publishedDate: '2017-04-18',
    publisher: 'Peter Seibel',
    summary: 'This is a who’s who in the programming world - a fascinating look at how some of the best in the world do their work. Patterned after the best selling Founders at Work, the book represents two years of interviews with some of the top programmers of our times.',
    featured: false
  },
  {
    id: 6,
    name: 'Domain-Driven Design',
    isbn: '252625',
    image: 'http://nh-back.jcramireztello.com/media/books/5f2880fe59cedfed5d24eaeb_20.jpg',
    language: 'en',
    publishedDate: '2014-12-08',
    publisher: 'Eric Evans',
    numberPages: 154,
    summary: 'Leading software designers have recognized domain modeling and design as critical topics for at least twenty years, yet surprisingly little has been written about what needs to be done or how to do it. Although it has never been clearly formulated, a philosophy has developed as an undercurrent in the object community, which I call “domain-driven design”.\r\n\r\nI have spent the past decade focused on developing complex systems in several business and technical domains. I’ve tried best practices in design and development process as they have emerged from the leaders in the object-oriented development community. Some of my projects were very successful; a few failed. A feature common to the successes was a rich domain model that evolved through iterations of design and became part of the fabric of the project.\r\n\r\nThis book provides a framework for making design decisions and a technical vocabulary for discussing domain design. It is a synthesis of widely accepted best practices along with my own insights and experiences. Projects facing complex domains can use this framework to approach domain-driven design systematically.',
    featured: true
  },
  {
    id: 7,
    name: 'The Art of Computer Programming',
    isbn: '252626',
    image: 'http://nh-back.jcramireztello.com/media/books/5f2881587ef7356642184b0e_19.jpg',
    language: 'en',
    publishedDate: '2013-02-28',
    publisher: 'Donald E. Knuth',
    numberPages: 254,
    summary: 'Countless readers have spoken about the profound personal influence of Knuth’s work. Scientists have marveled at the beauty and elegance of his analysis, while ordinary programmers have successfully applied his “cookbook” solutions to their day-to-day problems. All have admired Knuth for the breadth, clarity, accuracy, and good humor found in his books.',
    featured: false
  },
  {
    id: 8,
    name: 'Structure and Interpretation of Computer Programs',
    isbn: '252626',
    image: 'http://nh-back.jcramireztello.com/media/books/5f2881f5a59aed1c22dca7ac_17.jpg',
    language: 'en',
    publishedDate: '2018-11-18',
    publisher: 'Harold Abelson',
    numberPages: 785,
    summary: '',
    featured: false
  },
  {
    id: 9,
    name: 'Patterns of Enterprise Application Architecture',
    isbn: '252627',
    image: 'http://nh-back.jcramireztello.com/media/books/5f2882363e3ef359cc768edd_16.jpg',
    language: 'en',
    publishedDate: '2011-03-04',
    publisher: 'Martin Fowler',
    numberPages: 457,
    summary: 'The practice of enterprise application development has benefited from the emergence of many new enabling technologies. Multi-tiered object-oriented platforms, such as Java and .NET, have become commonplace. These new tools and technologies are capable of building powerful applications, but they are not easily implemented. Common failures in enterprise applications often occur because their developers do not understand the architectural lessons that experienced object developers have learned.',
    featured: true
  },
  {
    id: 10,
    name: 'Programming Pearls',
    isbn: '252627',
    image: 'http://nh-back.jcramireztello.com/media/books/5f2882877a7de4b1766cae8f_16-bis.jpg',
    language: 'en',
    publishedDate: '2020-12-18',
    publisher: 'Jon Bentley',
    numberPages: 145,
    summary: 'Computer programming has many faces. Fred Brooks paints the big picture in The Mythical Man Month; his essays underscore the crucial role of management in large software projects. At a finer grain, Steve McConnell teaches good programming style in Code Complete. The topics in those books are the key to good software and the hallmark of the professional programmer. Unfortunately, though, the workmanlike application of those sound engineering principles isn’t always thrilling – until the software is completed on time and works without surprise.\r\n\r\nThe columns in this book are about a more glamorous aspect of the profession: programming pearls whose origins lie beyond solid engineering, in the realm of insight and creativity. Just as natural pearls grow from grains of sand that have irritated oysters, these programming pearls have grown from real problems that have irritated real programmers. The programs are fun, and they teach important programming techniques and fundamental design principles.',
    featured: false
  }
];

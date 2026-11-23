export const PROFESSIONAL_FONTS= [
    {NAME: 'Inter (Modern Sans)', value: "'Inter', sans-serif"},
    {NAME: 'Roboto (Clean Geometric)', value: "'Roboto', sans-serif"},
    {NAME: 'Source Sans 3 (Corporate)', value: "'Source Sans 3', sans-serif"},
    {NAME: 'Merriweather (Editorial Serif)', value: "'Merriweather', serif"},
    {NAME: 'Playfair Display (Executive)', value: "'Playfair Display', serif"},
];

export const FONT_SIZES =[
    {label: 'Compact (13px)', value:'13px'},
    {label: 'Standard (14px)', value:'14px'},
    {label: 'Comfortable (15.5px)', value:'15.5px'},
];

export const INITIAL_PERSONAL={
    fullname: 'john doe',
    role: 'software developer',
    email: 'johndoe@email.com',
    phone:  '+251 912 345 678',
    location: 'Addis Ababa, Ethiopia',
    website: 'github.com/johndoe',
};

export const INITIAL_SECTIONS =[
    {
        id: 'summary',
        title: 'Professional Summary',
        enabled: true,
        type: 'text',
        content: 'Experienced software developer with a strong background in web development and a passion for creating innovative solutions. Skilled in JavaScript, React, and Node.js, with a proven track record of delivering high-quality applications on time.'
    },
    {
        id: 'experience',
        title: 'Work Experience',
        enabled: true,
        type: 'list',
        items: [
            {
                id: 'exp-1',
                heading: 'Senior Sofware Engineer',
                subheading: 'Tech Solutions',
                date: 'Jan 2020 - Present',
                description: 'Lead a team of developers in building scalable web applications. Implemented best practices for code quality and performance optimization.'

            },
        ],
    },
    {
        id: 'education',
        title: 'Education',
        enabled: true,
        type: 'list',
        items: [
            {
                id: 'edu-1',
                heading: 'Bachelor of Science in Computer Science',
                subheading: 'University of Technology',
                date: 'sep 2021- aug 2025',
                description: 'Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems.'
            
            },
        ],
    },
    {
        id: 'projects',
        title: 'Projects',
        enabled: false,
        type: 'list',
        items: [
            {
                id:'proj-1',
                heading: 'Open-Source task engine',
                subheading: 'React, Node.js, PostgreSQL',
                date: 'jan 2025',
                description: 'Developed a task management application that allows users to create, assign, and track tasks in real-time. Implemented a RESTful API and integrated with a PostgreSQL database.'
            },
        ],
    },
    {
        id: 'skills',
        title: 'Skills',
        enabled: true,
        type: 'text',
        content: 'Javascript (ES6+), React, Node.js, Express, PostgreSQL, MongoDB, HTML5, CSS3, Git, Agile Methodologies'
    },
]
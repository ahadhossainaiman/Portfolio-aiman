import port2 from '../img/portImages/port1.png';
import port3 from '../img/portImages/port2.png';
import port4 from '../img/portImages/port3.png';

const portfolios = [
    {
        id: 1,
        category: 'MERN Stack Project',
        link1: 'https://restore-repair-service.web.app/',
        link2: 'https://github.com/ahadhossainaiman/Restore-Repair-Service-client',
        icon1: 'G',
        icon2: 'Y',
        image: port2,
        title: 'Restore Repair Service',
        details:"A MERN project. Website for providing repair services. User can choose any service and add to dashboard and also can provide their valuable feedback. There is also a dashboard for admin. Admin can add new service, create new admin for the page and see all the bookings of services. By admin login, an admin can add services and can also remove any user.Technologies used: React JS, React Router, React-Hook-Form, Firebase authentication, Express, MongoDB, Bootstrap ."
    },
    {
        id: 2,
        category: 'React Project',
        link1: 'https://pensive-colden-18cf6d.netlify.app/',
        link2: 'https://github.com/ahadhossainaiman/BD-Riders',
        icon1: 'G',
        icon2: 'Y',
        image: port3,
        title: 'BD Riders',
        details:"A frontend project where users can explore different places to travel and book suitable ride services.Technologies used: React JS, React Router, Firebase authentication,React-Bootstrap, React-Calender, Google-Map."
    },
    {
        id: 3,
        category: 'Javascript',
        link1: 'https://ahadhossainaiman.github.io/Fancy-Slider/',
        link2: 'https://github.com/ahadhossainaiman/Fancy-Slider',
        icon1: 'G',
        icon2: 'Y',
        image: port4,
        title: 'Fancy Slider',
        details:"It is a vanilla JavaScript Project where user can explore search a different type of image and create a professional Slider and also control a slider duration time.Technologies used: Vanilla JavaScript, Bootstrap, image API, HTML 5,CSS 3."
    }
   
]

export default portfolios;
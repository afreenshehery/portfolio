
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: '',
      description: 'The GMAT Prep Tool is a smart platform that helps users prepare for the GMAT with mock tests, study plans, and performance analytics. It offers a real-exam-like experience to boost confidence and scores.',
      image: 'assets/gmat.png',
      logo: 'assets/gmatLogo.png',
      link: 'https://www.gmatprep.in/'
    },
    {
      title: 'Maptia',
      description: 'Maptia is a storytelling platform that enables users to share inspiring, place-based narratives, each anchored to a specific location on the map. It fosters a global community of photographers, writers, and adventurers, creating a rich tapestry of experiences from around the world.',
      image: 'assets/miro.medium.com_v2_resize_fit_1100_format_webp_1_-WmwD09u5jg1m6hjVpnNww.jpeg.png',
      logo: 'https://miro.medium.com/v2/resize:fill:44:44/1*UKlGYo0e9I_WNmzHcLZkHw.png',
      link: 'https://medium.com/@Maptia/maptia-3-0-explore-a-world-of-stories-8891e20d7e26'
    },

    {
      title: '',
      description: 'CampusFloor is a comprehensive SaaS platform designed to streamline campus management by integrating modules such as attendance tracking, tuition payments, payroll, and advanced analytics. It offers an all-in-one solution to enhance efficiency and scalability for educational institutions.',
      image: 'assets/campusfloor.com_index.html.png',
      logo: 'https://campusfloor.com/assets/images/logos/logo.png',
      link: 'https://github.com/afreenshehery/KartBuddy'
    },



    {
      title: 'KartBuddy',
      description: 'A modern logistics platform offering seamless parcel delivery and supply chain solutions. Designed to connect businesses and customers with speed and reliability.',
      image: 'assets/kartbuddy.in_.png',
      logo: 'assets/kartbuddylogo.png',
      link: 'https://kartbuddy.in/'
    },


  ];


}

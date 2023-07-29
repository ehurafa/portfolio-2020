import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  socialIcons: any[] = [
    {'url': 'http://br.linkedin.com/in/rflrafa', 'title': 'LinkedIn', 'class':'linkedin ', 'pic': 'fa-linkedin-in'},
    {'url': 'https://www.pinterest.com/ehurafa', 'title': 'Pinterest', 'class':'pinterest',  'pic': 'fa-pinterest-p'},
    //{'url': 'https://twitter.com/ehurafa', 'title': 'Twitter', 'class':'twitter'},
    {'url': 'https://github.com/ehurafa', 'title': 'Github', 'class':'github', 'pic': 'fa-github-alt'}  
  ];

  pages: any[] = [
    {'url': '/', 'title': 'Inicial'},
   // {'url': '', 'Sobre mim': 'Sobre mim'},
    {'url': '/certificates', 'title': 'Certificados'},
    {'url': '/contact', 'title': 'Contato'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

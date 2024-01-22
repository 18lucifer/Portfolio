import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
  downloadCV(): void {
    const pdfPath = 'assets/Resume.pdf';
    window.open(pdfPath, '_blank');
  }

}

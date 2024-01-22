import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  facebookurl!: string;
  linkedinurl!: string;

  constructor() { }

  ngOnInit(): void {
  }
  shareFacebookProfile() {
    var facebookProfileUrl = 'https://www.facebook.com/998428336sachin@gmail.com';
    // Create the Facebook share URL
    this.facebookurl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(facebookProfileUrl);

    // Open the share dialog in a new window or tab
    window.open(this.facebookurl, '_blank');
  }

  shareLinkedInProfile() {
    this.linkedinurl = `https://www.linkedin.com/in/sachin-yadav-81966b229?utm_
    source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app `;
    // Open the share dialog in a new window or tab
    window.open(this.linkedinurl, '_blank');
  }
}

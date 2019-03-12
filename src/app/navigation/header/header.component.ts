import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Services } from 'src/app/models/services.model';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  services: Services;
  options: FormGroup;
  public serviceContent: Services;

  constructor(fb: FormBuilder, private service: ServiceService, private afs: AngularFirestore,
    private router: Router) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });

  }
  goToService(item) {
  this.service.serviceName = item;
  this.router.navigate(['/service', item]);

  }



  ngOnInit() {
    this.service.getAllServices().subscribe(
      (services) =>
        this.services = services
    );
  }

}

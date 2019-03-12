import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { Services } from 'src/app/models/services.model';
import { Subscription } from 'rxjs';
import { MicroService } from 'src/app/models/microService.model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnDestroy {
  serviceName;
  navigationSubscription;
  serviceContent: Services;
  microService: MicroService;
  subscription: Subscription;
  constructor(private router: Router, private route: ActivatedRoute, private service: ServiceService
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    if (this.service.serviceName) {
      this.serviceName = this.service.serviceName;
    } else {
      this.serviceName = this.route
        .snapshot.paramMap.get('name');
    }
    this.service.getOneService(this.serviceName).subscribe(
      (data) => this.serviceContent = data[0]
    );
    this.service.getMicroServices(this.serviceName).subscribe(
      (data) => this.microService = data[0]
    );
  }
  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

}

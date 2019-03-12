import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Services } from '../models/services.model';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  serviceCollection: AngularFirestoreCollection<Services>;
  oneServiceCollection: AngularFirestoreCollection<Services>;
  microServiceCollection: AngularFirestoreCollection<Services>;
  services: Observable<Services[]>;
  serviceName; // le service vers lequel on se dirige


  constructor(private afs: AngularFirestore) {
    this.serviceCollection = afs.collection('services', ref => {
      return ref.orderBy('serviceName');
    });
    this.services = this.serviceCollection.valueChanges();
  }

  getAllServices() {
    return this.services;
  }
  getOneService(name) {
    this.oneServiceCollection = this.afs.collection('services', ref => ref.where('serviceName', '==', name));
    return this.services = this.oneServiceCollection.valueChanges();
  }
  getMicroServices(item) {
    this.microServiceCollection = this.afs.collection('microService', ref => ref.where('serviceParent', '==', item)
    .where('enabled', '==', true)
    .orderBy('name'));
    return this.services = this.microServiceCollection.valueChanges();


  }
}

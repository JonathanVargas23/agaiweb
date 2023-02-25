import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
// import { Observable } from 'rxjs';
import 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'agrodat-landing';
  // items: Observable<any[]>;
  constructor(
    private _firestore: AngularFirestore,
  ) {
    // this.items = firestore.collection('landing').valueChanges();
  }

  public queryDoc(path: string): AngularFirestoreDocument<any> {
    return this._firestore.doc(path);
  }

  ngOnInit() {

    const userDoc = this._firestore.doc('/landing/home/page-content/es/')
    userDoc.valueChanges()
    .subscribe(item => {
      console.info('item', item);
      return item; 
    });

    console.info('userDoc', userDoc);

    const task = userDoc.collection('sections').valueChanges().subscribe(item => {
      console.info('item', item);
      return item; 
    });
    console.error('task', task);

    // this.queryDoc('landing/home/page-content/es/section').get().toPromise().then((x) => {
    //   console.log(JSON.stringify(x?.data));
    // });
  }
}

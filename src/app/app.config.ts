import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDQiDj4M9nOL4ashmos24JEVD-S6zym4dQ",
  authDomain: "usuarios-app-634bf.firebaseapp.com",
  projectId: "usuarios-app-634bf",
  storageBucket: "usuarios-app-634bf.firebasestorage.app",
  messagingSenderId: "173186404091",
  appId: "1:173186404091:web:7182abf21c0eeea4a4ea5e",
  measurementId: "G-1DGVZNJCPR"
}; 

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection(
            {eventCoalescing: true}
        ),
        provideRouter(routes),
        provideFirebaseApp(() => initializeApp(firebaseConfig)),
        provideFirestore(() => getFirestore())
    ]
};

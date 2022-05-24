import { credential } from "firebase-admin";
import { cert, getApps, initializeApp } from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";

const apps = getApps()

const app = 
  apps.length > 0 
    ? apps [0]
    : initializeApp({
      credential:  cert ({
        projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey:process.env.FIREBASE_PRIVATE_KEY,
        }),
      })

export const firestore = getFirestore(app)
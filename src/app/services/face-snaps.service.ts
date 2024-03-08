import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {

    
    faceSnaps: FaceSnap[] = [
        {
            id : 1,
            title : 'Archibale',
            description : 'Mon meilleur ami depuis tout petit',
            createdDate : new Date(),
            snaps : 0,
            imageUrl : 'https://th.bing.com/th/id/OIP.87rC-vQdkf1I5qv74_2LjwHaHp?rs=1&pid=ImgDetMain',
            location : 'Paris'
        },
        {
            id : 2,
            title : 'Three Rock Montain',
            description : 'Un endroit magnifique pour les randonnées',
            createdDate : new Date(),
            snaps : 0,
            imageUrl : 'https://th.bing.com/th/id/OIP.87rC-vQdkf1I5qv74_2LjwHaHp?rs=1&pid=ImgDetMain',
            location : 'La montagne'
        },
        {
            id : 3,
            title :  'Un bon repas',
            description :  'Mmmh que c\'est bon ! ',
            createdDate :  new Date(),
            snaps :  0,
            imageUrl :  'https://th.bing.com/th/id/OIP.87rC-vQdkf1I5qv74_2LjwHaHp?rs=1&pid=ImgDetMain'
        },
        {
            id : 4,
            title : 'Archibale',
            description : 'Mon meilleur ami depuis tout petit',
            createdDate : new Date(),
            snaps : 0,
            imageUrl : 'https://th.bing.com/th/id/OIP.87rC-vQdkf1I5qv74_2LjwHaHp?rs=1&pid=ImgDetMain',
            location : 'Paris'
        },
        {
            id : 5,
            title : 'Three Rock Montain',
            description : 'Un endroit magnifique pour les randonnées',
            createdDate : new Date(),
            snaps : 0,
            imageUrl : 'https://th.bing.com/th/id/OIP.87rC-vQdkf1I5qv74_2LjwHaHp?rs=1&pid=ImgDetMain',
            location : 'La montagne'
        },
        {
            id : 6,
            title :  'Un bon repas',
            description :  'Mmmh que c\'est bon ! ',
            createdDate :  new Date(),
            snaps :  0,
            imageUrl :  'https://th.bing.com/th/id/OIP.87rC-vQdkf1I5qv74_2LjwHaHp?rs=1&pid=ImgDetMain'
        }
    ];

    getAllFaceSnaps():FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapsById(faceSnapId: number):FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else{
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void{
        const faceSnap = this.getFaceSnapsById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--
    }
}
import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService{
    faceSnaps: FaceSnap[] = [
        {
       id: 1, 
       title: 'Galatasaray',
       description: "Le logo de l'équipe de foot",
       imageUrl: 'https://maximumwallhd.com/wp-content/uploads/2015/08/fonds-ecran-galatasaray-logo-2.jpg',
       createdDate: new Date(),
       snaps: 190,
       location: 'Istanbul'
       },
       {
         id: 2,
         title: 'GALATA TOWER',
         description: 'La tour de GALATA ',
         imageUrl: 'https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/6/65/Night_Istanbul.jpg/1280px-Night_Istanbul.jpg',
         createdDate: new Date(),
         snaps: 0,
         location: 'Taksim'
        },
        {
         id: 3,
         title: 'Taksim',
         description: 'Taksim Square !',
         imageUrl: 'https://www.toutistanbul.com/wp-content/uploads/2016/03/istiklal-caddesi-tramvay-e1458565114296.jpg',
         createdDate: new Date(),
         snaps: 0
       }
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'like' | 'dislike'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'like' ? faceSnap.snaps++ : faceSnap.snaps--;
    }

}
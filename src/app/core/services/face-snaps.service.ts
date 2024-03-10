import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
import { HttpClient } from "@angular/common/http";
import { Observable, map, switchMap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {

    constructor(private http: HttpClient){

    }

    faceSnaps: FaceSnap[] = [];

    getAllFaceSnaps(): Observable<FaceSnap[]> {
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

    getFaceSnapsById(faceSnapId: number): Observable<FaceSnap> {
        return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap>{
        return this.getFaceSnapsById(faceSnapId).pipe(
            map(FaceSnap => ({
                ...FaceSnap,
                snaps: FaceSnap.snaps + (snapType === 'snap' ? 1 : -1)
            })),
            switchMap(updateFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updateFaceSnap))
        );
    }

    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
        return this.getAllFaceSnaps().pipe(
            map(faceSnaps => [...faceSnaps].sort((a:FaceSnap, b:FaceSnap) => a.id - b.id)),
            map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length -1]),
            map(previousFacesnap => ({
                ...formValue,
                snaps: 0,
                createdDate: new Date(),
                id: previousFacesnap.id + 1
            })),
            switchMap(newFacesnap => this.http.post<FaceSnap>(`http://localhost:3000/facesnaps`, newFacesnap))
        )
    }
}
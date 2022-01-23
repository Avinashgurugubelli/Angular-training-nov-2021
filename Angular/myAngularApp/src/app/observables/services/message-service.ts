import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MessageService {

    private messageObservable$: Subject<string> = new Subject<string>();

    public message(): Observable<string> {
        return this.messageObservable$;
    }

    public setMessage(value: string) {
        this.messageObservable$.next(value);
    }

    constructor() { }
    
}



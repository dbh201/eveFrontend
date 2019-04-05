import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ESIEffects {

  constructor(
    private http: HttpClient,
    private actions$: Actions ) {}

  @Effect()
  priceHistoryEffect = this.actions$.pipe(


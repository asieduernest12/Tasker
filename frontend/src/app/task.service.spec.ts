import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { first, firstValueFrom, of, take } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WebRequestService } from './web-request.service';

describe('TaskService', () => {
  let service: TaskService;
  let taskServiceSpy = jasmine.createSpy('TaskService');
  let httpC: HttpTestingController;
  let ws: WebRequestService;
  const expected = [2];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        // HttpClientModule,
      ],
      providers: [TaskService, WebRequestService],
    });
    service = TestBed.inject(TaskService);
    ws = TestBed.inject(WebRequestService);
    httpC = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpC.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getLists flush [] spyed subscribed and promised', async () => {
    spyOn(ws, 'get').and.returnValue(of(expected));

    service
      .getLists()
      .pipe(take(1))
      .subscribe((val) => expect(val).toEqual(expected));

    expect(await firstValueFrom(service.getLists())).toBe(expected);
  });

  it('should call getLists flush [] subscribed', async () => {
    service
      .getLists()
      .pipe(take(1))
      .subscribe((val) => expect(val).toEqual(expected));

    httpC.match((req) => req.url.includes('api/lists'))[0].flush(expected);
  });

  it('should call getLists flush [] promised', async () => {
    const actualPromise = firstValueFrom(service.getLists());

    httpC.match((req) => req.url.includes('api/lists'))[0].flush(expected);

    const actual = await actualPromise;
    expect(actual).toEqual(expected);
    expect(actual).not.toBeUndefined();
  });
});

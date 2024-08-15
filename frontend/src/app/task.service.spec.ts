import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('TaskService', () => {
  let service: TaskService;
  let taskServiceSpy = jasmine.createSpy('TaskService');
  let httpC: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TaskService],
    });
    service = TestBed.inject(TaskService);
    httpC = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    httpC.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(false).toBeTruthy();
  });

  it('should call getLists flush []', async () => {
    const expected: [] = [];
    const res = service.getLists();
    const req = httpC.expectOne('api/lists');
    req.flush(expected);

    expect(await firstValueFrom(res)).toEqual([2]);
  });
});

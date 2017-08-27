import { TestBed, inject } from '@angular/core/testing';

import { EduticketService } from './eduticket.service';

describe('EduticketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EduticketService]
    });
  });

  it('should be created', inject([EduticketService], (service: EduticketService) => {
    expect(service).toBeTruthy();
  }));
});

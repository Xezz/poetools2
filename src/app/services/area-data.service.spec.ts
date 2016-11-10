/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AreaDataService } from './area-data.service.ts';

describe('Service: Zone', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AreaDataService]
    });
  });

  it('should ...', inject([AreaDataService], (service: AreaDataService) => {
    expect(service).toBeTruthy();
  }));
});

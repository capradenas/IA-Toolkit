/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResourcesService } from './resources.service';

describe('ResourcesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResourcesService]
    });
  });

  it('should ...', inject([ResourcesService], (service: ResourcesService) => {
    expect(service).toBeTruthy();
  }));
});

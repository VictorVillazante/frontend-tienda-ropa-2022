import { TestBed } from '@angular/core/testing';

import { ServiceAdmService } from './service-adm.service';

describe('ServiceAdmService', () => {
  let service: ServiceAdmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAdmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

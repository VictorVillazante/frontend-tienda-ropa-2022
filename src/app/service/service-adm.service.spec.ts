import { TestBed } from '@angular/core/testing';

import { ServiceAdm } from './service-adm.service';

describe('ServiceAdmService', () => {
  let service: ServiceAdm;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAdm);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

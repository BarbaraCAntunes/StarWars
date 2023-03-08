import { TestBed } from '@angular/core/testing';

import { PersonagemServiceService } from './personagem-service.service';

describe('PersonagemServiceService', () => {
  let service: PersonagemServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonagemServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { postResolver } from './post.resolver';

describe('postResolver', () => {
  const executeResolver: ResolveFn<any[]> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => postResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsComponent } from './posts.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { convertToParamMap } from '@angular/router';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsComponent], // Poprawnie dodajemy komponent do 'declarations'
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: '123' }), // Mockujemy paramMap, używając convertToParamMap
              data: { posts: [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }] } // Mockowane dane z resolvera
            },
            queryParams: of({}), // Mock query params jako pusty obiekt
            params: of({ id: '123' }) // Mock parametrów routingu
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Wymuszenie detekcji zmian
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

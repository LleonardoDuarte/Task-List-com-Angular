import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TodoButtonDeleteAllComponent } from './todo-button-delete-all.component';

describe('TodoButtonDeleteAllComponent', () => {
  let component: TodoButtonDeleteAllComponent;
  let fixture: ComponentFixture<TodoButtonDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoButtonDeleteAllComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoButtonDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('(I) should have to be a equal text', () => {
    let element = fixture.debugElement.nativeElement;
    expect(element.querySelector('.deleteButton').textContent).toEqual(
      'Deletar todas tasks'
    );
  });
});

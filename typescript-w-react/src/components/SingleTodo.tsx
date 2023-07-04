import React, { useRef, useState } from 'react';
import { Todo } from '../model';
import { BiEditAlt } from 'react-icons/bi';
import { MdDeleteOutline, MdCheck } from 'react-icons/md';
import { Draggable } from 'react-beautiful-dnd';

interface Props extends Todo {
  index: number;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({
  index,
  todo,
  id,
  isDone,
  setTodos,
  todos,
}) => {
  //

  const inputRef = useRef<HTMLInputElement>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <form
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className='todos-single'
          onSubmit={(e) => {
            handleEdit(e, id);
          }}
        >
          {edit ? (
            <input
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className='todos-single-text black'
              ref={inputRef}
              autoFocus
            />
          ) : (
            <span className={`todos-single-text ${isDone && 'strikethrough'}`}>
              {todo}
            </span>
          )}

          <div>
            <span
              className='icon'
              onClick={() => {
                if (!edit && !isDone) {
                  setEdit(!edit);
                }
              }}
            >
              <BiEditAlt />
            </span>
            <span className='icon' onClick={() => handleDelete(id)}>
              <MdDeleteOutline />
            </span>
            <span className='icon' onClick={() => handleDone(id)}>
              <MdCheck />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;

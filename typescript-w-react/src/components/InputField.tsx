import React, { useRef } from 'react';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form
        action=''
        onSubmit={(e) => {
          inputRef.current?.blur();
          handleAdd(e);
        }}
        className='input'
      >
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type='input'
          placeholder='Enter a task'
          className='input-box'
        />
        <button className='input-submit' type='submit' onClick={handleAdd}>
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;

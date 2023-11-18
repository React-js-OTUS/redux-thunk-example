import React from 'react';
import cn from 'clsx';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';
import { fetchTodos } from 'src/store/todos';
import s from './TodosFetch.sass';

export type TodosFetchProps = {
  className?: string;
};

export const TodosFetch = ({ className }: TodosFetchProps) => {
  const dispatch: AppDispatch = useDispatch();

  console.log('render: TodosFetch');

  const onClick = () => dispatch(fetchTodos('это аргумент'));

  return (
    <div className={cn(s.root, className)}>
      <div>TodosFetch</div>
      <button type="button" onClick={onClick}>
        Запросить todos
      </button>
    </div>
  );
};

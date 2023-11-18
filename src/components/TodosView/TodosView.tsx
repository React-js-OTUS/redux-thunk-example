import React from 'react';
import cn from 'clsx';
import { useSelector } from 'react-redux';
import { AppState } from 'src/store';
import s from './TodosView.sass';

export type TodosViewProps = {
  className?: string;
};

export const TodosView = ({ className }: TodosViewProps) => {
  const status = useSelector((state: AppState) => state.todos.status);
  const error = useSelector((state: AppState) => state.todos.error);
  const todos = useSelector((state: AppState) => state.todos.todos);

  console.log('render: TodosView');

  return (
    <div className={cn(s.root, className)}>
      <div>TodosView</div>
      <div>todos</div>
      <div>{JSON.stringify(todos)}</div>
      <div>status</div>
      <div>{status}</div>
      <div>error</div>
      <div>{error?.message}</div>
    </div>
  );
};

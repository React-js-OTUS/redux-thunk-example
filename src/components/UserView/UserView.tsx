import React, { useEffect } from 'react';
import cn from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from 'src/store';
import { userThunks } from 'src/store/user';
import s from './UserView.sass';

export type UserViewProps = {
  className?: string;
};

export const UserView = ({ className }: UserViewProps) => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: AppState) => state.user);
  const count = useSelector((state: AppState) => state.count);

  useEffect(() => {
    dispatch(userThunks.getByCount());
  }, [count, dispatch]);

  console.log('render: UserView');

  return (
    <div className={cn(s.root, className)}>
      <div>UserView</div>
      <div>user</div>
      <div>{JSON.stringify(user)}</div>
    </div>
  );
};

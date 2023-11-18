import React from 'react';
import cn from 'clsx';
import { connect } from 'react-redux';
import { AppState } from 'src/store';
import s from './CountListenerConnect.sass';

export type CountListenerUseSelectorProps = {
  className?: string;
  count: number;
};

export const CountListenerConnectOrigin = ({ className, count }: CountListenerUseSelectorProps) => {
  console.log('render: CountListenerConnectOrigin');
  return (
    <div className={cn(s.root, className)}>
      <div>CountListenerConnect</div>
      {count}
    </div>
  );
};

export const CountListenerConnect = connect((state: AppState) => ({ count: state.count }))(CountListenerConnectOrigin);

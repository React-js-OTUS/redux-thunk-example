import React from 'react';
import cn from 'clsx';
import { useSelector } from 'react-redux';
import { tokenSelectors } from 'src/store/token';
import { countSelectors } from 'src/store/count';
import { AppState } from 'src/store';
import s from './CombineViewUseSelector.sass';

export type CombineViewUseSelectorProps = {
  className?: string;
};

export const CombineViewUseSelector1 = ({ className }: CombineViewUseSelectorProps) => {
  console.log('render: CombineViewUseSelector1');
  const token = useSelector(tokenSelectors.get);
  const count = useSelector(countSelectors.get);

  return (
    <div className={cn(s.root, className)}>
      <div>CombineViewUseSelector 1</div>
      <div>token</div>
      <div>{token}</div>
      <div>count</div>
      <div>{count}</div>
    </div>
  );
};

export const CombineViewUseSelector2 = ({ className }: CombineViewUseSelectorProps) => {
  console.log('render: CombineViewUseSelector2');
  const { token, count } = useSelector((state: AppState) => ({ token: state.token, count: state.count }));

  return (
    <div className={cn(s.root, className)}>
      <div>CombineViewUseSelector 2</div>
      <div>token</div>
      <div>{token}</div>
      <div>count</div>
      <div>{count}</div>
    </div>
  );
};

export const CombineViewUseSelector3 = ({ className }: CombineViewUseSelectorProps) => {
  console.log('render: CombineViewUseSelector3');
  const { token, count } = useSelector(
    (state: AppState) => ({ token: state.token, count: state.count }),
    (a, b) => a.token === b.token && a.count === b.count
  );

  return (
    <div className={cn(s.root, className)}>
      <div>CombineViewUseSelector 3</div>
      <div>token</div>
      <div>{token}</div>
      <div>count</div>
      <div>{count}</div>
    </div>
  );
};

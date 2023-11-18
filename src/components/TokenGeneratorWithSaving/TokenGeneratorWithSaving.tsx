import React from 'react';
import cn from 'clsx';
import { useDispatch } from 'react-redux';
import { tokenThunks } from 'src/store/token';
import { AppDispatch } from 'src/store';
import s from './TokenGeneratorWithSaving.sass';

export type TokenGeneratorWithSavingProps = {
  className?: string;
};

export const TokenGeneratorWithSaving = ({ className }: TokenGeneratorWithSavingProps) => {
  const dispatch: AppDispatch = useDispatch();

  console.log('render: TokenGeneratorWithSaving');

  const onClick = () => dispatch(tokenThunks.genWithSaving());

  return (
    <div className={cn(s.root, className)}>
      <div>TokenGeneratorWithSaving</div>
      <button type="button" onClick={onClick}>
        Генерировать и сохранить фэйковый токен
      </button>
    </div>
  );
};

import React from 'react';
import cn from 'clsx';
import { connect } from 'react-redux';
import { tokenThunks, tokenActions } from 'src/store/token';
import { AppDispatch } from 'src/store';
import s from './TokenGenerator.sass';

export type TokenGeneratorProps = {
  className?: string;
  gen: () => void;
  genWithSaving: () => void;
  same: () => void;
};

export const TokenGeneratorOrigin = ({ className, gen, genWithSaving, same }: TokenGeneratorProps) => {
  console.log('render: TokenGeneratorOrigin');

  return (
    <div className={cn(s.root, className)}>
      <div>TokenGenerator</div>
      <button type="button" onClick={gen}>
        Генерировать фэйковый токен
      </button>
      <button type="button" onClick={genWithSaving}>
        Генерировать и сохранить фэйковый токен
      </button>
      <button type="button" onClick={same}>
        Установить тот же токен
      </button>
    </div>
  );
};

export const TokenGenerator = connect(null, (dispatch: AppDispatch) => ({
  gen: () => dispatch(tokenActions.gen()),
  genWithSaving: () => dispatch(tokenThunks.genWithSaving()),
  same: () => dispatch(tokenActions.same()),
}))(TokenGeneratorOrigin);

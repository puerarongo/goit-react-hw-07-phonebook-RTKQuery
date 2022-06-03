import { createReducer } from '@reduxjs/toolkit';
import { filtration } from 'redux/actions/contacts-actions';

const filter = createReducer('', {
  [filtration.type]: (_, { payload }) => payload,
});

export default filter;

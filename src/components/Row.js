import React from 'react';
import { connect } from 'react-redux';
import Tile from './Tile';

export const Row = (props) => {
  return (
    <>
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </>
  );
};

const mapState = (state) => ({});

export default connect(mapState)(Row);

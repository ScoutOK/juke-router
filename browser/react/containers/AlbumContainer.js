'use strict';

import { connect } from 'react-redux';
import Album from '../components/Album';
import { fetchAndGoToAlbum } from '../action-creators/albums';

const mapStateToProps = ({ selectedAlbum }) => ({
  selectedAlbum
});

const mapDispatchToProps = dispatch => ({
  getAlbum: album => dispatch(fetchAndGoToAlbum(album))
});



export default connect(
  mapStateToProps, mapDispatchToProps
)(Album);

'use strict';

import React, { Component } from 'react';
import SongsContainer from '../containers/SongsContainer';



export default class Album extends Component  {
  constructor (props) {
    super(props);
  }
  componentDidMount () {
    fetch(`/api/albums/${this.props.params.albumId}`)
    .then(res => res.json())
    .then(album => {
        this.props.getAlbum(album);
        //dispatch(switchLocation('album'));
      })
  }
  render () {
    let selectedAlbum = this.props.selectedAlbum
    return (
      <div className="album">
        <div>
          <h3>{ selectedAlbum.name }</h3>
          <img src={ selectedAlbum.imageUrl } className="img-thumbnail" />
        </div>
        <SongsContainer songs={selectedAlbum.songs} />
      </div>
    )
  }
}

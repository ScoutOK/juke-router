'use strict';

import React, {Component} from 'react';
import SongsContainer from '../containers/SongsContainer';
import {Link} from 'react-router';

export default class Artist extends Component {
    constructor (props) {
    super(props);
  }
  componentDidMount () {
    fetch(`/api/artists/${this.props.params.artistId}`)
    .then(res => res.json())
    .then(artist => {
        this.props.getArtist(artist);
        //dispatch(switchLocation('album'));
      })
  }
  render () {
    console.log(this.props);
    let selectedArtist = this.props.selectedArtist
    //selectedArtist.albums = selectedArtist.albums || [];

    return (
    <div>
      <h3>{ selectedArtist.name }</h3>
      <h3>Albums</h3>
      <div className="row">
        {
          selectedArtist.albums.map(album => (
            <div className="col-xs-4" key={album.id}>
              <Link to={`/albums/${album.id}`} className="thumbnail" >
                <img src={ album.imageUrl } />
                <div className="caption">
                  <h5>
                    <span>{ album.name }</span>
                  </h5>
                  <small>{ album.songs.length } songs</small>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
      <SongsContainer songs={selectedArtist.songs} />
    </div>
    )
}
}

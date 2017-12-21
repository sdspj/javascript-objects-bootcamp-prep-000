var playlist = new Object({ taylor:  'red', eggs: 'pickle' });

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlistt, artistName) {
  delete playlist.artistName
  return playlist
}

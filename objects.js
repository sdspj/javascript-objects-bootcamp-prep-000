var playlist = new Object({ taylor:  'red', eggs: 'pickle' });

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  console.log(playlist)
  return playlist
}

updatePlaylist(playlist, "chica", "pickles")
  delete playlist.chica;
console.log(playlist)
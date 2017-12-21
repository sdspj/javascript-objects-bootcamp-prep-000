var playlist = new Object({ taylor swiz:
  "red"
});

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

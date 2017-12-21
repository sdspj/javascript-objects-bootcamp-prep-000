var playlist = new Object({
  taylor swiz: 'red'
})

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist[artistName] = songTitle
}

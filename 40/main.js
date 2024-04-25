function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Shehzeen", "Album title 1");
console.log(album1);
var album2 = make_album("Atif Aslam", "Album title 2");
console.log(album2);
var album3 = make_album("Asim Azhar", "Album title 3");
console.log(album3);

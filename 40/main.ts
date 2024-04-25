function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?:number} = {
        artist: artist_name,
        title: album_title,
    };
    if(tracks !== undefined){
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("Shehzeen","Album title 1");
console.log(album1);
let album2 = make_album("Atif Aslam","Album title 2",5);
console.log(album2);
let album3 = make_album("Asim Azhar","Album title 3");
console.log(album3);
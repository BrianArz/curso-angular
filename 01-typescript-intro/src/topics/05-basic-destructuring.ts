
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Mess',
    details: { 
        author: 'Ed Sheeran',
        year: 2015
    }
}

const { 
    song: anotherSong,
    songDuration: duration,
    //details: { author: detailsAuthor }
} = audioPlayer;
const { author: author } = audioPlayer.details;

console.log('Song: ', anotherSong);
console.log('Author: ', author);
console.log('Duration: ', duration);

const [, , trunks = 'Not found']: string[] = [ 'Goku', 'Vegetta' /* , 'Trunks' */];

console.log('Character 3: ' , trunks);

export{};
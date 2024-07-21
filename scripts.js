const songs = [
    {
        title: "perfect",
        link: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v"
    },
    {
        title: "all of me",
        link: "https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a"
    },
    {
        title: "just the way you are",
        link: "https://open.spotify.com/track/7BqBn9nzAq8spo5e7cZ0dJ"
    },
    {
        title: "thinking out loud",
        link: "https://open.spotify.com/track/34gCuhDGsG4bRPIf9bb02f"
    },
    {
        title: "a thousand years",
        link: "https://open.spotify.com/track/6uBhi9gBXWjanegOb2Phh0"
    }
];

const gallery = document.getElementById('song-gallery');

songs.forEach(song => {
    const songItem = document.createElement('div');
    songItem.classList.add('song-item');

    const songDetails = document.createElement('div');
    songDetails.classList.add('song-details');

    const songTitle = document.createElement('h3');
    songTitle.textContent = song.title;
    const songArtist = document.createElement('p');
    songArtist.textContent = song.artist;
    const songLink = document.createElement('a');
    songLink.href = song.link;
    songLink.target = '_blank';
    songLink.textContent = 'click';

    songDetails.appendChild(songTitle);
    songDetails.appendChild(songArtist);
    songDetails.appendChild(songLink);

    songItem.appendChild(songDetails);

    gallery.appendChild(songItem);
});

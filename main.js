const music = new Audio('audio/56.mp3');
music.play();

const songs = [
    {
        id: 11,
        songName: ` Dil Ne`,
        poster: 'images/11.jpg'
    },
    {
        id: 12,
        songName: `Panghat`,
        poster: 'images/12.jpg'
    },
    {
        id: 13,
        songName: ` Jalebi Baby`,
        poster: 'images/13.jpg'
    },
    {
        id: 14,
        songName: `Oh Sanam`,
        poster: 'images/14.jpg'
    },
    {
        id: 15,
        songName: `Khabbi Seat`,
        poster: 'images/15.jpg'
    },
    {
        id: 16,
        songName: `Baarish ki`,
        poster: 'images/16.jpg'
    },
    {
        id: 17,
        songName: `Galat `,
        poster: 'images/17.jpg'
    },
    {
        id: 18,
        songName: `Do Varri Jatt`,
        poster: 'images/18.jpg'
    },
    {
        id: 19,
        songName: `Tera Suit`,
        poster: 'images/19.jpg'
    },

    {
        id: 20,
        songName: ` Pathaan `,
        poster: 'images/20.jpg'
    },
    {
        id: 21,
        songName: `Bazaar Band`,
        poster: 'images/21.jpg'
    },
    {
        id: 22,
        songName: `Main Khiladi`,
        poster: 'images/22.jpg'
    },
    {
        id: 23,
        songName: `Raula Pai Gya`,
        poster: 'images/23.jpg'
    },
    {
        id: 24,
        songName: `Piya Re`,
        poster: 'images/24.jpg'
    },
    {
        id: 25,
        songName: `Chandigarh Shehar`,
        poster: 'images/25.jpg'
    },
    {
        id: 26,
        songName: `Keshariya`,
        poster: 'images/26.jpg'
    },
    {
        id: 27,
        songName: `Gallan Mithiyan `,
        poster: 'images/27.jpg'
    },
    {
        id: 28,
        songName: `Chauffeur`,
        poster: 'images/28.jpg'
    },

    {
        id: 29,
        songName: `Bollyhood`,
        poster: 'images/29.jpg'
    },
    {
        id: 30,
        songName: `90's Song`,
        poster: 'images/30.jpg'
    },
    {
        id: 31,
        songName: `Punjabi`,
        poster: 'images/31.jpg'
    },
    {
        id: 32,
        songName: `Love Song`,
        poster: 'images/32.jpg'
    },
    {
        id: 33,
        songName: ` English `,
        poster: 'images/33.jpg'
    },

    {
        id: 34,
        songName: ` Sad Song `,
        poster: 'images/34.jpg'
    },

    {
        id: 35,
        songName: `Spanish`,
        poster: 'images/35.jpg'
    },
    {
        id: 38,
        songName: ` Dilbar`,
        poster: 'images/38.jpg'
    },
    {
        id: 39,
        songName: `Duniya Mai `,
        poster: 'images/39.jpg'
    },
    {
        id: 40,
        songName: `Di Tera Dev.`,
        poster: 'images/40.jpg'
    },
    {
        id: 41,
        songName: `Gajban `,
        poster: 'images/41.jpg'
    },
    {
        id: 42,
        songName: ` Mere Pass`,
        poster: 'images/42.jpg'
    },
    {
        id: 43,
        songName: ` Teri Mitti`,
        poster: 'images/43.jpg'
    },
    {
        id: 44,
        songName: `Halki Si Barsat `,
        poster: 'images/44.jpg'
    },
    {
        id: 45,
        songName: ` Chaand Baaliyan `,
        poster: 'images/45.jpg'
    },
    {
        id: 46,
        songName: `Chaand ke Paar `,
        poster: 'images/46.jpg'
    },
    {
        id: 47,
        songName: ` Jalebi Juda`,
        poster: 'images/47.jpg'
    },
    {
        id: 48,
        songName: ` Mere Balam `,
        poster: 'images/48.jpg'
    },
    {
        id: 49,
        songName: ` Gypsy  `,
        poster: 'images/49.jpg'
    },
    {
        id: 50,
        songName: ` Teri lat lag `,
        poster: 'images/50.jpg'
    },
    {
        id: 51,
        songName: ` Tere Ankho ka kajal `,
        poster: 'images/51.jpg'
    },
    {
        id: 52,
        songName: `No Love `,
        poster: 'images/52.jpg'
    },
    {
        id: 53,
        songName: `Rutba `,
        poster: 'images/53.jpg'
    },
    {
        id: 54,
        songName: `Gaddi Vich `,
        poster: 'images/54.jpg'
    },
    {
        id: 55,
        songName: `Mitti de `,
        poster: 'images/55.jpg'
    },
    {
        id: 56,
        songName: `Shiv Tandav`,
        poster: 'images/56.jpg'
    },
    {
        id: 57,
        songName: ` Arambha hai `,
        poster: 'images/57.jpg'
    },
    {
        id: 58,
        songName: ` Gyatri M `,
        poster: 'images/58.jpg'
    },
    {
        id: 59,
        songName: `H Chalisa `,
        poster: 'images/59.jpg'
    },
    {
        id: 60,
        songName: ` Kabir ke d `,
        poster: 'images/60.jpg'
    },
    {
        id: 61,
        songName: `Ram Bhajan `,
        poster: 'images/61.jpg'
    },
    {
        id: 62,
        songName: ` Kon kahate hai`,
        poster: 'images/62.jpg'
    },
    {
        id: 63,
        songName: `Bum-Bum bole `,
        poster: 'images/63.jpg'
    },
    {
        id: 64,
        songName: `Devi Maa `,
        poster: 'images/64.jpg'
    },

    {
        id: 1,
        songName: `Chhat-Par`,
        poster: 'images/1.jpg'
    },
    {
        id: 2,
        songName: `Keshariya.`,
        poster: 'images/2.jpg'
    },
    {
        id: 3,
        songName: `M Joota H `,
        poster: 'images/3.jpg'
    },

    {
        id: 4,
        songName: `Sandese Aate`,
        poster: 'images/4.jpg'
    },
    {
        id: 5,
        songName: `Tu Cheez L`,
        poster: 'images/5.jpg'
    },
    {
        id: 6,
        songName: `Mere piya.. `,
        poster: 'images/6.jpg'
    },
    {
        id: 7,
        songName: `Parizaad.....`,
        poster: 'images/7.jpg'
    },
    {
        id: 8,
        songName: `Tera Level..`,
        poster: 'images/8.jpg'
    },
    {
        id: 9,
        songName: `Patali Kamariya`,
        poster: 'images/9.jpg'
    },
    {
        id: 10,
        songName: `Kajra Moh..`,
        poster: 'images/10.jpg'
    },
]


Array.from(document.getElementsByClassName('song_item')).forEach((e, i) => {

    e.getElementsByTagName('img')[0].src = songs[i].poster;

    e.getElementsByTagName('span')[0].innerHTML = songs[i].songName;



})


let right_arrow = document.getElementById('right-arrow');
let left_arrow = document.getElementById('left-arrow');
let trends_song = document.getElementsByClassName('trends-song')[0];

// Scrolling-left/right

right_arrow.addEventListener('click', () => {
    trends_song.scrollLeft += 330;
});

left_arrow.addEventListener('click', () => {
    trends_song.scrollLeft -= 330;
});

/////

let right_new_arrow = document.getElementById('right_new_arrow');
let left_new_arrow = document.getElementById('left_new_arrow');
let new_songs = document.getElementsByClassName('new_songs')[0];

// // Scrolling-left/right

right_new_arrow.addEventListener('click', () => {
    new_songs.scrollLeft += 330;
});

left_new_arrow.addEventListener('click', () => {
    new_songs.scrollLeft -= 330;
});

// 

let right_top_arrow = document.getElementById('right_top_arrow');
let left_top_arrow = document.getElementById('left_top_arrow');
let top_charts = document.getElementsByClassName('top_charts')[0];

// // Scrolling-left/right

right_top_arrow.addEventListener('click', () => {
    top_charts.scrollLeft += 330;
});

left_top_arrow.addEventListener('click', () => {
    top_charts.scrollLeft -= 330;
});

//

let right_h_arrow = document.getElementById('right_h_arrow');
let left_h_arrow = document.getElementById('left_h_arrow');
let hindi_song = document.getElementsByClassName('hindi_song')[0];

// // Scrolling-left/right

right_h_arrow.addEventListener('click', () => {
    hindi_song.scrollLeft += 330;
});

left_h_arrow.addEventListener('click', () => {
    hindi_song.scrollLeft -= 330;
});
//

let right_p_arrow = document.getElementById('right_p_arrow');
let left_p_arrow = document.getElementById('left_p_arrow');
let Punjabi_song = document.getElementsByClassName('Punjabi_song')[0];

// // Scrolling-left/right

right_p_arrow.addEventListener('click', () => {
    Punjabi_song.scrollLeft += 330;
});

left_p_arrow.addEventListener('click', () => {
    Punjabi_song.scrollLeft -= 330;
});

///////

let right_b_arrow = document.getElementById('right_b_arrow');
let left_b_arrow = document.getElementById('left_b_arrow');
let bhakti_song = document.getElementsByClassName('bhakti_song')[0];

// // Scrolling-left/right

right_b_arrow.addEventListener('click', () => {
    bhakti_song.scrollLeft += 330;
});

left_b_arrow.addEventListener('click', () => {
    bhakti_song.scrollLeft -= 330;
});



// music-play

let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click', () => {

    if (music.paused || music.currentTime <= 0) {
        music.play();

        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }

    else {
        music.pause();

        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');

let title = document.getElementById('title');


Array.from(document.getElementsByClassName('playlistplay')).forEach((e) => {

    e.addEventListener('click', (el) => {

        index = el.target.id;
        console.log(index);

        music.src = `audio/${index}.mp3`;
        console.log(music.src);

        poster_master_play.src = `images/${index}.jpg`;
        console.log(poster_master_play.src);
        music.play();

        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {

            let { songName, poster } = elss;
            title.innerHTML = songName;
            //   poster_master_play.src = poster;
        })
    })
})



let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');

let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {

    let music_time = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;


    let min2 = Math.floor(music_time / 60);
    let sec2 = Math.floor(music_time % 60);

    if (sec2 < 10) {

        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;



    //Bar-progress

    let progressBar = parseInt((music_time / music_dur) * 100);
    seek.value = progressBar;
    let seekBar = seek.value;
    bar2.style.width = `${seekBar}%`;
    dot.style.left = `${seekBar}%`;

});


seek.addEventListener('change', () => {

    music.currentTime = seek.value * music.duration / 100;
})



let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');



vol.addEventListener('change', () => {

    if (vol.value == 0) {

        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }

    if (vol.value > 0) {

        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    if (vol.value > 50) {

        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;

    music.volume = vol_a / 100;

})


let back = document.getElementById('back');
let next = document.getElementById('next');
index = Array.from(document.getElementsByClassName('song_item')).length;
console.log(index);

back.addEventListener('click', () => {

    index = index - 1;

    if (index < 1) {

        index = Array.from(document.getElementsByClassName('song_item')).length;

    }

    music.src = `audio/${index}.mp3`;
    console.log(music.src);

    poster_master_play.src = `images/${index}.jpg`;
    console.log(poster_master_play.src);
    music.play();

    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {

        let { songName, poster } = elss;
        title.innerHTML = songName;

    })


});


next.addEventListener('click', () => {

    index++;

    last_song = Array.from(document.getElementsByClassName('song_item')).length;
    if (index > last_song) {


        index = 1;

    }

    music.src = `audio/${index}.mp3`;
    console.log(music.src);

    poster_master_play.src = `images/${index}.jpg`;
    console.log(poster_master_play.src);
    music.play();

    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {

        let { songName, poster } = elss;
        title.innerHTML = songName;

    })

});


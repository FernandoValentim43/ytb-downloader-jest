import * as fs from 'node:fs';

import ytdl from 'ytdl-core';



export async function downloadAudio(url) {
    try {
        const info = await ytdl.getInfo(url);
        const videoTitle = info.videoDetails.title;

        //creates folder
        if (!fs.existsSync('./src/downloads')) {
            fs.mkdirSync('./src/downloads');
        }
        const writableStream = fs.createWriteStream(`./src/downloads/${videoTitle}.mp3`);

        ytdl(url, { filter: 'audioonly' })
        .pipe(writableStream);

        console.log(`Downloading audio of "${videoTitle}" to downloads folder`);
    } catch (error) {
        console.log(error);
    }
}





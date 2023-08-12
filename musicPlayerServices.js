import TrackPlayer, { Event } from "react-native-track-player";

import { playListData } from "./src/utils/playListData";

export const setUpPlayer = async () => {
    let isSetup = false;
    try{
        await TrackPlayer.getCurrentTrack();
        isSetup = true;
    }
    catch(err){
        await TrackPlayer.setupPlayer();
        isSetup = true;
    }
    finally{
        return isSetup;
    }
}

export const addTrack = async () => {
    await TrackPlayer.add(playListData)
} 


const musicPlayerServices = async () => {
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause();
    })

    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play()
    })

    TrackPlayer.addEventListener(Event.RemoteStop, () => {
        TrackPlayer.pause();
        TrackPlayer.reset();
    })
}

export { musicPlayerServices };
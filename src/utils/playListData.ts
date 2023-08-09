import { Track } from "react-native-track-player";

const audioUri = 'https://conexion.fm:8000/stream';

export const playListData: Track[] = [
    {
        id: '1',
        url: audioUri,
        title: 'Señal en Vivo',
        artist: 'Conexión.FM',
        artwork: '../../assets/icon.png',
    },
]
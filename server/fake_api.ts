import { VideoItemAPIResponse } from "../interfaces/server/server"

export const api = {
    get_video_list() {
        return new Promise<VideoItemAPIResponse[]>((resolve, reject) => {
            resolve([
                {
                    title: 'video1',
                    creator: 'amogus',
                    url: 'https://eagleconverter.com/index.php?output=yt/HPd2hiYreyc/128%7e%7e1%7e%7eAmogus_uuid-62ea871a9058e.mp4',
                    thumbnail: 'https://img.youtube.com/vi/HPd2hiYreyc/0.jpg'
                }
            ])
        })
    }
}
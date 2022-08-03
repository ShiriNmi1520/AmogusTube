import { VideoItemAPIResponse } from "../interfaces/server/server";

export function VideoItem(props: VideoItemAPIResponse) {
    return (
        <div className="flex flex-col">
            <video controls>
                <source src={props.url}></source>
            </video>
            <p>{props.title}</p>
        </div>
    )
}
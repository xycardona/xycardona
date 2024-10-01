
import { getTimeOffsetOrDate } from "../../../utils/data.ts";
import "./post-metadata.css";
type Props={
    username: string;
    fullname: string;
    createdAt: string;
    verified:boolean;
};
const PostMetadata:React.FC<Props> = ({
    username,
    fullname,
    createdAt, 
    verified,
}) => {
return (
<div className="post-metadata-container">
    <div className="post-metadata-user">
        <span>{username}</span>
        {verified && <span className="post-metadata-verified" />}

    </div>
    <div className="post-metadata-user-time">
        <span>{fullname}</span>
        <span>{getTimeOffsetOrDate(createdAt)}</span>
    </div>
</div>
);
};
export default PostMetadata;
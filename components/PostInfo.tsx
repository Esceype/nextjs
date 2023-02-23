import { postType } from "@/types";
import { FC } from "react";
import Heading from "./Heading";

type Props = {
  post: postType
}

const PostInfo: FC<Props> = ({ post }) => {
  const { title, body } = post;

  if (!post) {
    return <Heading tag="h3" text="Empty post"/>
  }

  return (
    <>
      <Heading tag="h3" text={title} />
      <p>{body}</p>
    </>
  );
};

export default PostInfo;
import React from 'react';
import {DATA} from "../data";
import {PostType} from "../types";
import PostList from "../components/PostList";

const BookmarkedScreen = ({ navigation }: any) => {
    const openPostHandler = (post: PostType) => {
        navigation.navigate('Post', { postId: post.id })
    }

    return <PostList data={DATA.filter((post: PostType) => post.bookmarked)} onOpen={openPostHandler} />;
};

export default BookmarkedScreen;

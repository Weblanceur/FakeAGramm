import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import Post from "./Post";
import {PostType} from "../types";

const PostList = ({data, onOpen}: any) => {
    return (
        <View style={styles.wrapper}>
            <FlatList
                data={data}
                keyExtractor={post => post.id.toString()}
                renderItem={({item}) =>
                    <Post post={item} onOpen={onOpen}/>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
    }
})

export default PostList;
import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import {DATA} from "../data";
import Post from "../components/Post";
import {PostType} from "../types";

const MainScreen = ({ navigation }: any) => {
    const openPostHandler = (post: PostType) => {
        navigation.navigate('Post', { postId: post.id })
    }

    return (
        <View style={styles.wrapper}>
            <FlatList data={DATA} keyExtractor={post => post.id.toString()} renderItem={({item}) =>
                <Post post={item} onOpen={openPostHandler}/>
            } />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
    }
})

export default MainScreen;

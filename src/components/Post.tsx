import React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {PostType} from "../types";

const Post = (props: any) => {
    const post: PostType = props.post

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => props.onOpen(post)}>
            <View style={styles.post}>
                <ImageBackground style={styles.image} source={{uri: post.img}}>
                    <View style={styles.textWrap}>
                        <Text style={styles.title}>
                            {new Date(post.date).toLocaleDateString()}
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    post: {
        marginBottom: 15,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    textWrap: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 5,
        alignItems: 'center',
        width: '100%',
    },
    title: {
        color: '#fff',
        fontFamily: 'openSans-regular',
    },
})

export default Post;

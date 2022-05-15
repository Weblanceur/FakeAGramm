import React, {useEffect} from 'react';
import {Alert, Button, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {DATA} from "../data";
import {THEME} from "../theme";
import {PostType} from "../types";

const PostDefault: PostType = {
    id: '0',
    date: new Date().toJSON(),
    img: 'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg',
    text: 'Post Default',
    bookmarked: true,
}

const PostScreen = ({route, navigation}: any) => {
    const { postId } = route.params

    const post = DATA.find(p => p.id === postId) || PostDefault

    useEffect(() => {
        navigation.setOptions({ title: `Post #${postId}, ${new Date(post.date).toLocaleDateString()}` })
    }, [postId])

    const removeHandler = () => {
        Alert.alert(
            "Удаление поста",
            "Вы точно хотите удалить пост?",
            [
                {
                    text: "Отменить",
                    style: "cancel",
                },
                {
                    text: 'Удалить',
                    style: 'destructive',
                    onPress: () => {},
                }
            ],
            {
                cancelable: false,
            }
        );
    }

    return (
        <ScrollView>
            <Image source={{uri: post.img}} style={styles.image} />
            <View style={styles.textWrap}>
                <Text style={styles.title}>
                    {post.text}
                </Text>
            </View>
            <Button title='Удалить' color={THEME.DANGER_COLOR} onPress={() => removeHandler()} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    textWrap: {
        padding: 10,
    },
    title: {
        fontFamily: 'openSans-regular'
    },
})

export default PostScreen;
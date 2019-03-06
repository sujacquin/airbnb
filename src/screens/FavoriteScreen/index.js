import React from "react";
import List from "../../components/List"
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions, ActivityIndicator, StatusBar, ImageBackground } from "react-native";
import { AsyncStorage } from "react-native";
import axios from "axios"

class FavoriteScreen extends React.Component {
    state = {

        favorites: [],
        isLoading: true
    }
    showRoom = (roomId) => {
        this.props.navigation.navigate({ routeName: "Room", params: roomId });
    }

    async componentDidMount() {
        userId = await AsyncStorage.getItem("userId")
        userToken = await AsyncStorage.getItem("userToken")
        const response = await axios.get(`https://airbnb-api.now.sh/api/user/${userId}`, { headers: { authorization: "Bearer " + userToken } })
        console.log(response.data.account.favorites);
        await this.setState({ favorites: response.data.account.favorites, isLoading: false })
    }

    render() {

        return <List onPress={this.showRoom} rooms={this.state.favorites} isLoading={this.state.isLoading} />;
    }
}

export default FavoriteScreen;
import React from "react";
import { View, Text, FlatList, TouchableHighlight, Image, StyleSheet, Dimensions, ActivityIndicator, StatusBar, ImageBackground } from "react-native";
import axios from "axios";
import { Ionicons } from '@expo/vector-icons';
import { MapView } from "expo";

class Map extends React.Component {
    markerClick = () => {
        alert("Marker was clicked");
    }

    renderMarkers = () => {
        const markers = [];

        for (let i = 0; i < this.props.rooms.length; i++) {
            markers.push(<MapView.Marker key={i} coordinate={{
                latitude: this.props.rooms[i].loc[1],
                longitude: this.props.rooms[i].loc[0]
            }} title={this.props.rooms[i].title}
                description={this.props.rooms[i].description}
                onCalloutPress={() => this.props.onPress(this.props.rooms[i]._id)}>

            </MapView.Marker>)
        }

        return markers;

    }


    render() {
        return (<MapView
            style={{ flex: 1 }}
            initialRegion={{
                latitude: 48.856614,
                longitude: 2.3522219,
                latitudeDelta: 0.15,
                longitudeDelta: 0.15

            }}>
            {this.renderMarkers()}
        </MapView>


        )
    }


}

export default Map;
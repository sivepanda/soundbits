import React from 'react';
import {Button, View, Text, StyleSheet, Image} from 'react-native';
import chart from 'chart.js/auto';
import { getRealitivePosition } from 'chart.js/helpers';
import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";

const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledView = styled(View);
// const StyledButton = styled(Button);

function RadarMap() {

    return <div className="RadarMap">
        <radarChart chartData={{
        data: {
        labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        datasets: [{
            label: 'deaths per day',
            backgroundcolor: '#00FF00',
            bordercolor: '#00FF00',
            borderWidth: 2,
            data: [(Math.random()*10), (Math.random()*10), (Math.random()*10), (Math.random()*10), (Math.random()*10), (Math.random()*10), (Math.random()*10)]
        }
      ]
    }}}/>
    </div>;
}

// const sty = nw`bg-blue-500 text-white`;

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    styTex: {

    }
});

export default withExpoSnack(RadarMap);
import React from 'react';
import { Radar } from "react-chartjs-2";

function barChart({chartData}){
    return <Radar data={chartData} options={{}}/>;
}
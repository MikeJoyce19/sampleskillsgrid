import React from 'react'

import {createDevTools} from 'redux-devtools';

import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const toggleKey = "ctrl-h";
const changePositionKey = "ctrl-k";
const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey={toggleKey} changePositionKey={changePositionKey} defaultIsVisible={false}>
        <LogMonitor theme="tomorrow"/>
    </DockMonitor>
);

export default DevTools
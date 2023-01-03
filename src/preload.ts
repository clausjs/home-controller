// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge } from 'electron';

import * as hass from '../preloads/api/hass';

contextBridge.exposeInMainWorld('hass', hass);
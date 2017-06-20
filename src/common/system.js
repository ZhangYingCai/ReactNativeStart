/**
 * Created by cvicseks-mac1 on 2017/6/20.
 */

import { Platform } from 'react-native'

export default {
    isIOS: Platform.OS === 'ios',
    isAndroid: Platform.OS === 'android'
}
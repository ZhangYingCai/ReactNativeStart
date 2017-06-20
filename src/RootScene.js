/**
 * Created by cvicseks-mac1 on 2017/5/31.
 */

//

import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';

// 主页面
import HomeScene from './scene/Home/HomeScene'
import color from './widget/color'
import { screen, system, tool } from './common'
import TabBarItem from './widget/TabBarItem'

class RootScene extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <MainScreenNavigator

            />
        );
    }
}

const Tab = TabNavigator(
    {
        Home: {
            screen: HomeScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '首页',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/TabBar/pfb_tabbar_homepage@2x.png')}
                        selectedImage={require('./img/TabBar/pfb_tabbar_homepage_selected@2x.png')}
                    />
                )
            }),
        },
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: color.theme,
            inactiveTintColor: '#979797',
            style: { backgroundColor: '#ffffff' },
        },
    }

);

//const HomeNavigator = StackNavigator({
//
//});

const MainScreenNavigator = StackNavigator({
    Tab: { screen: Tab },
}
);

//make this component available to the app
export default RootScene;
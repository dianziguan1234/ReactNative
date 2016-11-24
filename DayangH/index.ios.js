/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import AppGuide from './src/components/AppGuide'
import Swiper from './src/components/AppGuide'
import ReportPage from './src/components/reportPage/ReportPage'
import TabBar from './src/components/TabBar'
import Welcome from './src/components/Welcome'
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import root from './src/components/reducers/LoginReduc'
import LoginAction from './src/components/actions/LoginAction'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(root)
 //alert(JSON.stringify(store))
 //alert(root)
 //const logger = createLogger()
 //const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)
 //const store = createStoreWithMiddleware(root)
//alert(JSON.stringify(store)) 
//alert(store)

class DayangH extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        alert(JSON.stringify(store))
            return (
                <TabBar />
            )
        }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => ({
    DayangState: state
})

const mapDispatchToProps = (dispatch) => ({
    DayangDispath:() => {
        dispatch(LoginAction())
    }
})

/*
 var ContainerDayangH = connect (
     mapStateToProps,
     mapDispatchToProps
 )(DayangH)
 */
AppRegistry.registerComponent('DayangH', () => DayangH);

import React from 'react';
import {connect} from 'react-redux';

import styles from './styles';
import * as actions from '../../store/action';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomePage = (props) => {
  if (!props.isLoggedIn) {
    props.navigation.navigate('LoginPage');
  }

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.wrapperStyle}>

          <View style={styles.componentStyle}>
            <View style={styles.boxStyle}>
              <View style={styles.boxContent}>
                
                <View style={styles.linkContainer}>
                  <TouchableOpacity
                    style={styles.linkWrapperStyle}
                    onPress={() => {
                      props.navigation.navigate('CometChatUI');
                    }}>
                    <Text style={styles.linkStyle}>LAUNCH!</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.componentStyle}>
            <View style={styles.boxStyle}>
              <View style={styles.boxContent}>
                
                <View style={styles.linkContainer}>
                  <TouchableOpacity
                    style={styles.linkWrapperStyle}
                    onPress={() => props.dispatch(actions.logout())}>
                    <Text style={styles.linkStyle}>LOGOUT</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const mapStateToProps = ({reducer}) => {
  return {
    loading: reducer.loading,
    error: reducer.error,
    isLoggedIn: reducer.isLoggedIn,
  };
};

export default connect(mapStateToProps)(HomePage);

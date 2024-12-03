import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>Todo List App</Text>
    <Text style={styles.footerText}>Samarpan Magar</Text>
  </View>
);

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  footer: {
    marginTop: 10,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#black',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#black',
  },
});

export default MainLayout;

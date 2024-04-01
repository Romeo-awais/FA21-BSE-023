import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

// Constants
const SQUARE_SIZE = 40; // Size of each square on the chessboard
const LIGHT_COLOR = 'brown'; // Color for light squares
const DARK_COLOR = 'black'; // Color for dark squares

// Square Component: Represents a single square on the chessboard
const Square = ({ color }) => (
  <View style={[styles.square, { backgroundColor: color }]} /> // Apply background color based on prop
);

// Row Component: Represents a row of squares on the chessboard
const Row = ({ rowNumber }) => (
  <View style={styles.row}>
    {/* Generate 8 squares per row */}
    {[...Array(8)].map((_, index) => (
      <Square
        key={index}
        color={(rowNumber + index) % 2 === 0 ? LIGHT_COLOR : DARK_COLOR} // Alternate colors based on row number and index
      />
    ))}
  </View>
);

// Chessboard Component: Renders the entire chessboard
const Chessboard = () => (
  <View style={styles.container}>
    {/* Generate 8 rows of squares */}
    {[...Array(8)].map((_, index) => (
      <Row key={index} rowNumber={index} />
    ))}
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // Rows are displayed vertically
  },
  row: {
    flexDirection: 'row', // Squares within a row are displayed horizontally
  },
  square: {
    width: SQUARE_SIZE, // Square width
    height: SQUARE_SIZE, // Square height
  },
});

export default Chessboard; // Export Chessboard component

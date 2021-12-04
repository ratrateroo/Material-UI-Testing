import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Payroll from './Payroll';

// Create styles
const styles = StyleSheet.create({
	page: {},
	section: {},
});

// Create Document Component
const MyDocument = () => (
	<Document>
		<Page size="A4" orientation="portrait" style={styles.page}>
			{/* <Payroll /> */}
			<View style={styles.section}>
				<Payroll />
			</View>
		</Page>
	</Document>
);

export default MyDocument;

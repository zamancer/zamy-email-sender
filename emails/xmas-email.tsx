import { Html, Head, Body, Container, Text, Heading, Button } from '@react-email/components';
import * as React from "react";

export default function XmasEmail() {
  return (
    <Html>
      <Head />
      <Body style={styles.body}>
        <Container>
          <Heading style={styles.header}>🎄 Merry Christmas! 🎄</Heading>
          <Text style={styles.text}>
            Wishing you a joyful holiday season filled with love and happiness. Although we can't be together, know that you're in my thoughts.
          </Text>
          <Button style={styles.button} href="https://holiday-wishes.com">
            Click here for a festive surprise!
          </Button>
          <Text style={styles.footer}>Warm wishes, [Your Name]</Text>
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: { backgroundColor: '#f8f9fa', fontFamily: 'Arial, sans-serif' },
  container: { padding: '20px', textAlign: 'center' },
  header: { color: '#ff0000' },
  text: { fontSize: '14px', margin: '10px 0' },
  button: { backgroundColor: '#28a745', color: '#fff', padding: '10px 20px', textDecoration: 'none' },
  footer: { fontSize: '12px', color: '#6c757d', marginTop: '20px' },
};

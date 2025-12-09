import * as React from 'react';
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Link,
  Img,
  Button,
} from '@react-email/components';

interface Navidad2025EmailProps {
  recipientName?: string;
}

const baseUrl = process.env.XMAS_IMAGE_URL
  ? `https://${process.env.XMAS_IMAGE_URL}`
  : "";

const adventCalendarUrl = process.env.ADVENT_CALENDAR_URL || "https://advent-calendar.example.com";

export const Navidad2025Email: React.FC<Navidad2025EmailProps> = ({
  recipientName = '[Amigo]',
}) => {
  return (
    <Html lang="es">
      <Head />
      <Preview>Un calendario de adviento especial te espera...</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Header */}
          <Section style={styles.header}>
            <Text style={styles.starDecoration}>&#10022;</Text>
            <Text style={styles.greeting}>
              ¡Hola, {recipientName}!
            </Text>
            <Text style={styles.subGreeting}>
              Navidad 2025
            </Text>
          </Section>

          {/* Main Content */}
          <Section style={styles.content}>
            <Text style={styles.paragraph}>
              Este año quise hacer algo diferente para celebrar la temporada contigo.
            </Text>

            <Text style={styles.paragraph}>
              He creado un <strong>calendario de adviento digital</strong> especialmente
              para mis amigos cercanos. Son <strong>12 días</strong> de pequeñas sorpresas
              que podrás ir descubriendo poco a poco.
            </Text>

            {/* Advent Calendar Card */}
            <Section style={styles.adventCard}>
              <Text style={styles.adventTitle}>
                Calendario de Adviento 2025
              </Text>
              <Text style={styles.adventDescription}>
                12 ventanas por abrir
              </Text>
              <Text style={styles.adventHint}>
                Al completar todas, te espera una sorpresa especial.
              </Text>
              <Button style={styles.ctaButton} href={adventCalendarUrl}>
                Abrir mi calendario
              </Button>
            </Section>

            <Text style={styles.paragraph}>
              Solo necesitas tu correo para entrar. Cada día podrás desbloquear
              una nueva ventana del calendario.
            </Text>

            <Text style={styles.paragraph}>
              Gracias por ser parte de mi vida. Espero que disfrutes esta
              pequeña actividad tanto como yo disfruté crearla para ti.
            </Text>

            {/* Signature */}
            <Section style={styles.signature}>
              <Text style={styles.signatureText}>
                Con cariño,
              </Text>
              <Text style={styles.signatureName}>
                El Zami
              </Text>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              Felices fiestas &#127876;&#10052;&#127873;
            </Text>
            <Text style={styles.copyright}>
              Zamy The Zam, 2025
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const styles = {
  body: {
    backgroundColor: '#1a1f3c',
    margin: '0',
    padding: '40px 20px',
    fontFamily: 'Georgia, "Times New Roman", serif',
  },
  container: {
    maxWidth: '520px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
  },
  header: {
    backgroundColor: '#2d3a5c',
    padding: '48px 32px',
    textAlign: 'center' as const,
  },
  starDecoration: {
    fontSize: '48px',
    color: '#d4a855',
    margin: '0 0 16px 0',
    lineHeight: '1',
  },
  greeting: {
    color: '#ffffff',
    fontSize: '28px',
    fontWeight: 'normal',
    margin: '0 0 8px 0',
    letterSpacing: '0.5px',
  },
  subGreeting: {
    color: '#a8b4d4',
    fontSize: '16px',
    fontWeight: 'normal',
    margin: '0',
    letterSpacing: '2px',
    textTransform: 'uppercase' as const,
  },
  content: {
    padding: '40px 32px',
  },
  paragraph: {
    fontSize: '17px',
    lineHeight: '1.7',
    color: '#3d3d3d',
    margin: '0 0 24px 0',
  },
  adventCard: {
    backgroundColor: '#f7f5f0',
    borderRadius: '12px',
    padding: '32px 24px',
    margin: '32px 0',
    textAlign: 'center' as const,
    border: '2px solid #d4a855',
  },
  adventTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#2d3a5c',
    margin: '0 0 8px 0',
  },
  adventDescription: {
    fontSize: '32px',
    color: '#d4a855',
    margin: '0 0 16px 0',
    fontWeight: 'normal',
  },
  adventHint: {
    fontSize: '15px',
    color: '#666666',
    margin: '0 0 24px 0',
    fontStyle: 'italic',
  },
  ctaButton: {
    backgroundColor: '#2d3a5c',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '16px 40px',
    borderRadius: '8px',
    textDecoration: 'none',
    display: 'inline-block',
  },
  signature: {
    marginTop: '40px',
    paddingTop: '24px',
    borderTop: '1px solid #e8e8e8',
    textAlign: 'center' as const,
  },
  signatureText: {
    fontSize: '16px',
    color: '#666666',
    margin: '0 0 4px 0',
  },
  signatureName: {
    fontSize: '20px',
    color: '#2d3a5c',
    margin: '0',
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#2d3a5c',
    padding: '24px 32px',
    textAlign: 'center' as const,
  },
  footerText: {
    color: '#d4a855',
    fontSize: '14px',
    margin: '0 0 8px 0',
    letterSpacing: '1px',
  },
  copyright: {
    fontSize: '12px',
    color: '#a8b4d4',
    margin: '0',
  },
} as const;

export default Navidad2025Email;

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
  Hr,
} from '@react-email/components';

interface NavidadEmailProps {
  recipientName?: string;
  videoUrl?: string;
}

export const NavidadEmail: React.FC<NavidadEmailProps> = ({
  recipientName = '[Nombre]',
  videoUrl = '#',
}) => {
  return (
    <Html>
      <Head />
      <Preview>🎁 ¡Un pedacito de mi año para acompañar tu Navidad! 🎄</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Header */}
          <Section style={styles.header}>
            <Text style={styles.greeting}>
              ¡Hola, {recipientName}! 👋✨
            </Text>
          </Section>

          {/* Intro */}
          <Section style={styles.content}>
            <Text style={styles.paragraph}>
              Hoy es Navidad, y como ya es tradición, no quería dejar pasar la oportunidad de escribirte para recordarte lo especial que eres para mí. 🎄
            </Text>
            
            <Text style={styles.paragraph}>
              Este año ha estado lleno de aprendizajes y momentos que me han marcado. Quiero compartir contigo algunos de los instantes que más alegría y satisfacción me trajeron, junto con lo que aprendí de cada uno. Y, por supuesto, desearte que algo de esto también ilumine tu camino en el próximo año:
            </Text>

            {/* Timeline Entries */}
            <div style={styles.timeline}>
              {/* Enero */}
              <Section style={styles.timelineEntry}>
                <Text style={styles.month}>🗓️ Enero</Text>
                <Text style={styles.experience}>
                  Después de superar las cirugías de mi familia, aprendí el valor de la <span style={styles.highlight}>resiliencia</span> y cómo el amor nos mantiene firmes en los momentos difíciles. 💪
                </Text>
                <Text style={styles.wish}>
                  <em>Espero que este año encuentres en ti la fuerza para superar cualquier reto que la vida te ponga enfrente.</em>
                </Text>
              </Section>

              {/* Marzo */}
              <Section style={styles.timelineEntry}>
                <Text style={styles.month}>🗓️ Marzo</Text>
                <Text style={styles.experience}>
                  Volver a trabajar fue un reto lleno de inseguridades, pero descubrí en mí una nueva <span style={styles.highlight}>valentía</span> para enfrentar lo desconocido y crecer con cada paso. 🧗‍♂️
                </Text>
                <Text style={styles.wish}>
                  <em>Deseo que cada nuevo comienzo que enfrentes venga acompañado de una chispa de coraje y confianza.</em>
                </Text>
              </Section>

              {/* Julio */}
              <Section style={styles.timelineEntry}>
                <Text style={styles.month}>🗓️ Julio</Text>
                <Text style={styles.experience}>
                  Mientras Xim exploraba UK, yo disfruté tiempo de calidad con mi familia. Aprendí a valorar la <span style={styles.highlight}>presencia</span> y el impacto de los pequeños momentos compartidos. 🏡
                </Text>
                <Text style={styles.wish}>
                  <em>Ojalá este año puedas disfrutar plenamente de la compañía de las personas que más quieres, sin prisas ni distracciones.</em>
                </Text>
              </Section>

              {/* Agosto */}
              <Section style={styles.timelineEntry}>
                <Text style={styles.month}>🗓️ Agosto</Text>
                <Text style={styles.experience}>
                  Reconectar con colegas en San Francisco me recordó la importancia de la <span style={styles.highlight}>claridad</span> en mis objetivos y el poder de una visión bien definida. 🎯
                </Text>
                <Text style={styles.wish}>
                  <em>Te deseo que tus metas estén siempre claras y que cada paso te acerque a lo que realmente deseas.</em>
                </Text>
              </Section>

              {/* Octubre */}
              <Section style={styles.timelineEntry}>
                <Text style={styles.month}>🗓️ Octubre</Text>
                <Text style={styles.experience}>
                  Al invertir en mi lado creativo con música y clases de comunicación, cultivé la <span style={styles.highlight}>expresión</span>, encontrando nuevas formas de conectar conmigo mismo y con los demás. 🎸🎤
                </Text>
                <Text style={styles.wish}>
                  <em>Espero que este año encuentres una forma auténtica y alegre de expresarte y ser escuchado.</em>
                </Text>
              </Section>
            </div>

            {/* Closing */}
            <Text style={styles.paragraph}>
              Cada uno de estos momentos me ha dejado algo valioso, y quería compartirlos contigo porque formas parte importante de mi vida. 💖
            </Text>

            <Text style={styles.paragraph}>
              Y como ya es tradición, también preparé un pequeño detalle especial para ti: 👉{' '}
              <Link href={videoUrl} style={styles.videoLink}>
                Ver video de buenos deseos 🎥
              </Link>
            </Text>

            <Text style={styles.paragraph}>
              ¡Gracias por estar siempre presente! Espero que podamos vernos pronto para darte un abrazo en persona. 🤗
            </Text>
          </Section>

          {/* Footer */}
          <Section style={styles.footer}>
            <Text style={styles.signature}>
              Con mucho cariño,
              <br />
              <span style={styles.name}>El Zami</span>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const styles = {
  body: {
    backgroundColor: '#f8f8f8',
    margin: '0',
    padding: '0',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#2C5530', // Christmas green
    padding: '40px 20px',
    textAlign: 'center' as const,
  },
  greeting: {
    color: '#ffffff',
    fontSize: '28px',
    fontWeight: 'bold',
    margin: '0',
  },
  content: {
    padding: '30px 20px',
    backgroundColor: '#ffffff',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#333333',
    margin: '20px 0',
  },
  timeline: {
    margin: '30px 0',
  },
  timelineEntry: {
    marginBottom: '30px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    borderLeft: '4px solid #2C5530',
  },
  month: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#2C5530',
    margin: '0 0 10px 0',
  },
  experience: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#333333',
    margin: '10px 0',
  },
  wish: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#666666',
    marginTop: '10px',
    fontStyle: 'italic',
  },
  highlight: {
    backgroundColor: '#E8F5E9',
    padding: '2px 6px',
    borderRadius: '4px',
    fontWeight: 'bold',
    color: '#2C5530',
  },
  videoLink: {
    color: '#2C5530',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  footer: {
    padding: '30px 20px',
    backgroundColor: '#f1f1f1',
    textAlign: 'center' as const,
  },
  signature: {
    fontSize: '16px',
    color: '#666666',
    margin: '0',
  },
  name: {
    fontSize: '20px',
    color: '#2C5530',
    fontWeight: 'bold',
    display: 'block',
    marginTop: '10px',
  },
} as const;

export default NavidadEmail;

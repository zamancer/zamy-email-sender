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
  Hr,
} from '@react-email/components';

interface NavidadEmailProps {
  recipientName?: string;
  videoUrl?: string;
}

const baseUrl = process.env.XMAS_IMAGE_URL
  ? `https://${process.env.XMAS_IMAGE_URL}`
  : "";

export const NavidadEmail: React.FC<NavidadEmailProps> = ({
  recipientName = '[Amigo]',
  videoUrl = '#',
}) => {
  return (
    <Html>
      <Head />
      <Preview>🎁 ¡Un pedacito de mi año para acompañar tu Navidad! 🎄</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Header with Christmas Image */}
          <Section style={styles.header}>
            <Img
              src={`${baseUrl}/static/winter.jpg`}
              alt="Christmas Decorations"
              width="600"
              height="200"
              style={styles.headerImage}
            />
            <Text style={styles.greeting}>
              ¡Hola, {recipientName}! 👋✨
            </Text>
          </Section>

          {/* Main Content */}
          <Section style={styles.content}>
            <div style={styles.contentWrapper}>
              <Text style={styles.paragraph}>
                Hoy es Navidad, y como ya es tradición, no quería dejar pasar la oportunidad de escribirte para recordarte lo especial que eres para mí. 🎄
              </Text>
              
              <Text style={styles.paragraph}>
                Este año ha estado lleno de aprendizajes y momentos que me han marcado. Quiero compartir contigo algunos de los instantes que más alegría y satisfacción me trajeron, junto con lo que aprendí de cada uno. Y, por supuesto, desearte que algo de esto también ilumine tu camino en el próximo año:
              </Text>

              {/* Timeline Entries */}
              <div style={styles.timeline}>
                {/* Month entries remain the same */}
                <Section style={styles.timelineEntry}>
                  <Text style={styles.month}>🗓️ Enero</Text>
                  <Text style={styles.experience}>
                    Después de superar las cirugías de mi familia, aprendí el valor de la <span style={styles.highlight}>resiliencia</span> y cómo el amor nos mantiene firmes en los momentos difíciles. 💪
                  </Text>
                  <Text style={styles.wish}>
                    <em>Espero que este año encuentres en ti la fuerza para superar cualquier reto que la vida te ponga enfrente.</em>
                  </Text>
                </Section>

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

              <Text style={styles.paragraph}>
                Cada uno de estos momentos me ha dejado algo valioso, y quería compartirlos contigo porque formas parte importante de mi vida. 💖
              </Text>

              <Text style={styles.paragraph}>
                Y como ya es tradición, también preparé un pequeño detalle especial para ti: 👉{' '}
                <Link href={videoUrl} style={styles.videoLink}>
                  Ver video de buenos deseos 🎥
                </Link>
              </Text>

              {/* Moved goodbye note to body */}
              <Text style={styles.goodbyeNote}>
                ¡Gracias por estar siempre presente! Espero que podamos vernos pronto para darte un abrazo en persona. 🤗
                <br /><br />
                Con mucho cariño,
                <br />
                El Zami
              </Text>
            </div>
          </Section>

          {/* Simplified Footer */}
          <Section style={styles.footer}>
            <Text style={styles.copyright}>
              © Zamy The Zam, 2024
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
    border: '1px solid #E8E8E8',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    backgroundColor: '#2C5530',
    padding: '0 0 40px 0',
    textAlign: 'center' as const,
  },
  headerImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
    marginBottom: '20px',
  },
  greeting: {
    color: '#ffffff',
    fontSize: '28px',
    fontWeight: 'bold',
    margin: '0',
  },
  content: {
    backgroundColor: '#ffffff',
  },
  contentWrapper: {
    padding: '30px 20px',
    border: '8px solid',
    borderImage: 'linear-gradient(45deg, #2C5530, #E8F5E9) 1',
    margin: '20px',
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
    borderLeft: '4px solid #C41E3A',
    borderTop: '1px solid #FFE4E4',
    borderRight: '1px solid #FFE4E4',
    borderBottom: '1px solid #FFE4E4',
    boxShadow: '0 2px 4px rgba(196, 30, 58, 0.1)',
  },
  month: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#C41E3A',
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
    backgroundColor: '#FFE4E4',
    padding: '2px 6px',
    borderRadius: '4px',
    fontWeight: 'bold',
    color: '#C41E3A',
  },
  videoLink: {
    color: '#C41E3A',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  goodbyeNote: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#333333',
    margin: '40px 0 20px',
    textAlign: 'center' as const,
    padding: '20px',
    borderTop: '2px solid #FFE4E4',
    borderBottom: '2px solid #FFE4E4',
  },
  footer: {
    padding: '20px',
    backgroundColor: '#f1f1f1',
    textAlign: 'center' as const,
  },
  copyright: {
    fontSize: '14px',
    color: '#666666',
    margin: '0',
  },
} as const;

export default NavidadEmail;

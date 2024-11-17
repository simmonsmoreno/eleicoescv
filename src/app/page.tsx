import styles from "./page.module.css";
import MapaHighcharts from './components/MapaHighcharts';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* O mapa ocupará 100% do espaço do contêiner */}
      <div id="mapa">
        <MapaHighcharts />
      </div>
    </div>
  );
}

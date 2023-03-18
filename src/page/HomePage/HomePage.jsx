import card from '../../images/phone-icon.jpg';
import styles from './homePage.module.css';
const HomePage = () => {
  return (
    <div className={styles.home_page}>
      <h2 className={styles.title}> Phonebook</h2>
      <img src={card} alt="Card" width={414} />
    </div>
  );
};

export default HomePage;

import styles from './Cell.module.css';
import { ReactComponent as Skull } from '../skull.svg';
import { ReactComponent as Smile } from '../smile.svg';

export default function Cell(): JSX.Element {
    return (
        <div className={styles.cell}>
            <Skull />
        </div>
    );
}

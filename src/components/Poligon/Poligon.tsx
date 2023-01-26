import styles from './Poligon.module.css';
import Cell from '../Cell/Cell';

export default function Poligon(): JSX.Element {
    // const arr = [<Cell />, <Cell />, <Cell />].fill(<Cell />, 1);
    let arr: any[] = [];
    for (let i = 0; i < 625; i++) {
        arr.push(<Cell />);
    }
    return (
        <div className={styles.poligon}>
            {arr.map((el, i) => (
                <div key={i} className={styles.cell}>
                    {el}
                </div>
            ))}
        </div>
    );
}

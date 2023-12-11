import { useCallback } from 'react';
import styles from './Menu.module.css';

const {
    rightClickStyle,
    menuElementStyle
} = styles;

const Menu = ({ name, setShowMenu }) => {

    const onClickMenu = useCallback((eventName) => {
        alert(`${eventName} ${name}`);
        setShowMenu(false);
    }, [name, setShowMenu]);

    return (
        <div className={rightClickStyle}>
            <div className={menuElementStyle} onClick={() => onClickMenu('Copy') }>
            Copy
            </div>
            <div className={menuElementStyle} onClick={() => onClickMenu('Delete')}>
            Delete
            </div>
            <div className={menuElementStyle} onClick={() => onClickMenu('Rename')}>
            Rename
            </div>
        </div>
    );
}

export default Menu;
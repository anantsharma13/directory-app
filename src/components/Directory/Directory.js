import { useCallback, useState } from 'react';
import Menu from '../Menu';
import styles from './Directory.module.css';
import inactiveDirIcon from '../../assets/plus.png';
import activeDirIcon from '../../assets/minus.png';

const {
    container,
    dirStyle,
    activeDirStyle,
    iconStyle
} = styles;

const Directory = ({ data }) => {
    const [isSelectedFolder, setSelectedFolder] = useState(false);
    const [isSelectedFile, setSelectedFile] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

    const selectionHandler =  useCallback((event, data) => {
        if (data.type === 'file' && event.type === 'contextmenu') {
            event.preventDefault();
            const positionChange = {
                x: event.pageX,
                y: event.pageY,
            };
            setMenuPosition(positionChange);
            setShowMenu(!showMenu)
            return;
        }

        if (data.type === 'folder') {
            setSelectedFolder(!isSelectedFolder);
            return;
        }
        
        if (data.type === 'file'){
            setSelectedFile(!isSelectedFile);
            return;
        }
        console.log('Unknown directory type');
    }, [isSelectedFile, isSelectedFolder, showMenu]);

    return (
        <div className={container} >
            <li
                className={`${(isSelectedFolder || isSelectedFile) && activeDirStyle} ${dirStyle}`}
                onClick={(event) => selectionHandler(event, data)}
                onContextMenu={(event) => selectionHandler(event, data)}
            >
                <img src={`${(data.type !== 'folder') ? activeDirIcon :  inactiveDirIcon }`} alt="icon" className={iconStyle} />
                {data.name}
            </li>
            {showMenu &&
                <div style={{ top: menuPosition.y, left: menuPosition.x }}>
                    <Menu
                        name={data.name}
                        setShowMenu={setShowMenu}
                    />
                </div>}
            {isSelectedFolder && data.data.map((item) => {
                return (
                    <Directory data={item}></Directory>
                );
            })}
       </div>
    );

};

export default Directory;
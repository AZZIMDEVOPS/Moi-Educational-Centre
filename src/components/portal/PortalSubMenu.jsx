import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { FaUserGraduate, FaUsers, FaUserFriends, FaHome } from 'react-icons/fa';

const PortalSubMenu = () => {
    const { t } = useLanguage();

    return (
        <div className="portal-submenu-wrapper">
            <div className="inner-row">
                <ul className="portal-submenu">
                    <li className="portal-submenu-item">
                        <NavLink to="/" end>
                            <FaHome /> Home
                        </NavLink>
                    </li>
                    <li className="portal-submenu-item">
                        <NavLink to="/portal/faculty">
                            <FaUsers /> {t.faculty}
                        </NavLink>
                    </li>
                    <li className="portal-submenu-item">
                        <NavLink to="/portal/students">
                            <FaUserGraduate /> {t.students}
                        </NavLink>
                    </li>
                    <li className="portal-submenu-item">
                        <NavLink to="/portal/alumni">
                            <FaUserFriends /> {t.alumni}
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PortalSubMenu;

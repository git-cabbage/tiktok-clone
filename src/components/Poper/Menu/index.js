import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import { Wrapper as PoperWrapper } from '~/components/Poper'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import Header from './Header'

const cx = classNames.bind(styles)

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />)
    }

    return (
        <Tippy
            delay={[0, 700]} // show, hide
            interactive
            visible
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PoperWrapper className={cx('menu-poper')}>
                        <Header />
                        {renderItems()}
                    </PoperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}

export default Menu

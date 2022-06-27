import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import { Wrapper as PoperWrapper } from '~/components/Poper'
import MenuItem from './MenuItem'

const cx = classNames.bind(styles)

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />)
    }

    return (
        <Tippy
            delay={[0, 700]} // show, hide
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PoperWrapper className={cx('menu-poper')}>{renderItems()}</PoperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}

export default Menu
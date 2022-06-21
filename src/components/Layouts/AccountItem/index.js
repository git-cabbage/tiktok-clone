import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem({ props }) {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/277226796_317030630521933_2223863444420889595_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Dwuisd-RwiQAX_haQ5I&_nc_ht=scontent.fsgn5-2.fna&oh=00_AT9Zo6yeLmYJG0nK4CfHA8w-nDoDXtYu6QZreEKHNzMOVg&oe=62B756B0"
                alt="account-name"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Example</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>

                <span className={cx('username')}>example</span>
            </div>
        </div>
    )
}

export default AccountItem

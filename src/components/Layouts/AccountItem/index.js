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
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/068e10f0c70ce8e96693d822a2141795~c5_300x300.webp?x-expires=1655805600&x-signature=shJscYZcHH4kikD9FJWkaG9vY9E%3D"
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

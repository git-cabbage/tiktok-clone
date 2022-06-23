import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    small = false,
    large = false,
    children,
    disabled,
    leftIcon,
    rigthIcon,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button'

    const props = { onClick, ...passProps }

    // case user turn off css pointer-event
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] == 'function') {
                delete props[key]
            }
        })
    }

    // change component with props
    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        rounded,
        small,
        large,
        disabled,
    })

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rigthIcon && <span className={cx('icon')}>{rigthIcon}</span>}
        </Comp>
    )
}

export default Button

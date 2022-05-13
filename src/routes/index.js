import Following from '~/pages/Following'
import Home from '~/pages/Home'
import Upload from '~/pages/Upload'

import { HeaderOnly } from '~/components/Layouts'

const publicPath = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
]

const privatePath = []

export { publicPath, privatePath }

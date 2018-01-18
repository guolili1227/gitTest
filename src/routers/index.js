import demo from "./demo";
import detail from "./detail";

const routeConfig = [
    { path: '/',
        component: App,
        indexRoute: { component: Dashboard },
        childRoutes: [
            { path: '/', component: demo },
            { path: '/demo/:id',
                component: demo,
                childRoutes: [
                    { path: '/detail', component: detail },
                ]
            }
        ]
    }
]

React.render(<Router routes={routeConfig} />, document.body)
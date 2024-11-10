import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from './routes/HomePage';
import NotFound from './routes/NotFound';
import ErrorPage from '../components/ErrorPage';
import PentestPage from './routes/app/PentestPage';


export const createAppRouter = () => {
    return createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <HomePage />
                },
                {
                    path: "/pentest",
                    element: <PentestPage />
                },
                {
                    path: "*",
                    element: <NotFound />
                }
            ]
        },
    ]);
};

export const AppRouter = () => {
    const router = useMemo(() => createAppRouter(), []);
    return <RouterProvider router={router} />;
};

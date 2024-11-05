import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '@/components/Layout';

export const createAppRouter = () => {
    return createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    lazy: async () => {
                        const { default: HomePage } = await import('./routes/HomePage');
                        return { Component: HomePage };
                    }
                },
                {
                    path: "*",
                    lazy: async () => {
                        const { default: NotFound } = await import('./routes/NotFound');
                        return { Component: NotFound };
                    }
                }
            ]
        },
    ]);
};

export const AppRouter = () => {
    const router = useMemo(() => createAppRouter(), []);
    return <RouterProvider router={router} />;
};

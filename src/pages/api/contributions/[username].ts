import type { APIRoute } from 'astro';

export const prerender = false;

export const OPTIONS: APIRoute = () => {
        return new Response(null, {
                status: 204,
                headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type',
                },
        });
};

export const GET: APIRoute = async ({ params }) => {
        const username = params.username;

        if (!username) {
                return new Response(JSON.stringify({ error: 'Username is required' }), {
                        status: 400,
                        headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*'
                        },
                });
        }

        try {
                const response = await fetch(`https://github.com/${username}.contribs`);

                if (!response.ok) {
                        return new Response(JSON.stringify({ error: `GitHub API error: ${response.statusText}` }), {
                                status: response.status,
                                headers: {
                                        'Content-Type': 'application/json',
                                        'Access-Control-Allow-Origin': '*'
                                },
                        });
                }

                const data = await response.json();

                return new Response(JSON.stringify(data), {
                        status: 200,
                        headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                                'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
                        },
                });
        } catch (error) {
                return new Response(JSON.stringify({ error: 'Internal server error while fetching contributions' }), {
                        status: 500,
                        headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*'
                        },
                });
        }
};

import React from 'react';
import Link from 'next/link';

const errorPage = () => (
    <div>
        <h1>Ooops! Something went wrong...</h1>
        <p>Try <Link href="/">Going Back</Link></p>
    </div>
);

export default errorPage;
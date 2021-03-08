import Document , {Html, Head, Main, NextScript}from 'next/document';

export default class Mydocument extends Document {
    render()
    {
        return (
            <Html>
                <Head>
                    <title>Inicio | move.it</title>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wgth@400;500;600&family=Rajdhani:wgth@600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>

        )
    }
}
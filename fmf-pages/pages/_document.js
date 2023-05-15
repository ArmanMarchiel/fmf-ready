import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
    return (
        <Html>
            <Head>
                {/* <!-- Google Fonts --> */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                {/* <!-- !Google Fonts --> */}
                {/* Stylesheets */}
                {/* <link type="text/css" rel="stylesheet" href="css/plugins.css" />
                <link type="text/css" rel="stylesheet" href="css/style.css?ver=1.1" /> */}
                {/* <!-- !Stylesheets --> */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document;
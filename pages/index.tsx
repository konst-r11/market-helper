import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
<header className="site-header sticky-top py-1">
  <nav className="container d-flex flex-column flex-md-row justify-content-between">
    <a className="py-2" href="#" aria-label="Product">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></svg>
    </a>
    <a className="py-2 d-none d-md-inline-block" href="#">Tour</a>
    <a className="py-2 d-none d-md-inline-block" href="#">Product</a>
    <a className="py-2 d-none d-md-inline-block" href="#">Features</a>
    <a className="py-2 d-none d-md-inline-block" href="#">Enterprise</a>
    <a className="py-2 d-none d-md-inline-block" href="#">Support</a>
    <a className="py-2 d-none d-md-inline-block" href="#">Pricing</a>
    <a className="py-2 d-none d-md-inline-block" href="#">Cart</a>
  </nav>
</header>

<main>
  <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div className="col-md-5 p-lg-5 mx-auto my-5">
      <h1 className="display-4 fw-normal">Market Helper - ваш помощник в выборе техники</h1>
      <p className="lead fw-normal">Легко и быстро подберём вам бытовую технику по вашим запросам. Без сложных слов и многих часов поиска</p>
      <a className="btn btn-outline-secondary" href="#">Вперёд</a>
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>

  <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <Link href="/freezers" className="cat-link text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 py-3">
        <h2 className="display-5">Холодильники</h2>
        <p className="lead">And an even wittier subheading.</p>
      </div>
      <div className="bg-light shadow-sm mx-auto" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
    </Link>
    <Link href="/freezers" className="cat-link bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 p-3">
        <h2 className="display-5">Пылесосы</h2>
        <p className="lead">And an even wittier subheading.</p>
      </div>
      <div className="bg-dark shadow-sm mx-auto" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
    </Link>
  </div>

  <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <Link href="/freezers" className="cat-link bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 p-3">
        <h2 className="display-5">Микроволновые печи и духовки</h2>
        <p className="lead">And an even wittier subheading.</p>
      </div>
      <div className="bg-dark shadow-sm mx-auto" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
    </Link>
    <Link href="/freezers" className="cat-link text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 py-3">
        <h2 className="display-5">Стиральные и сушильные машинки</h2>
        <p className="lead">And an even wittier subheading.</p>
      </div>
      <div className="bg-light shadow-sm mx-auto" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
    </Link>
  </div>

  <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <Link href="/freezers" className="cat-link bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 p-3">
        <h2 className="display-5">Чайники</h2>
        <p className="lead">And an even wittier subheading.</p>
      </div>
      <div className="bg-body shadow-sm mx-auto" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
    </Link>
    <Link href="/freezers" className="cat-link bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 py-3">
        <h2 className="display-5">Мультиварки и скороварки</h2>
        <p className="lead">And an even wittier subheading.</p>
      </div>
      <div className="bg-body shadow-sm mx-auto" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
    </Link>
  </div>

  <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <Link href="/freezers" className="cat-link bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 p-3">
        <h2 className="display-5">Посудомоечные машины</h2>
        <p className="lead">And an even wittier subheading.</p>
      </div>
      <div className="bg-body shadow-sm mx-auto" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
    </Link>
    <Link href="/freezers" className="cat-link bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 py-3">
        <h2 className="display-5">Телевизоры</h2>
        <p className="lead">And an even wittier subheading.</p>
      </div>
      <div className="bg-body shadow-sm mx-auto" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
    </Link>
  </div>
</main>

<footer className="container py-5">
  <div className="row">
    <div className="col-12 col-md">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="d-block mb-2" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></svg>
      <small className="d-block mb-3 text-muted">© 2017–2022</small>
    </div>
    <div className="col-6 col-md">
      <h5>Features</h5>
      <ul className="list-unstyled text-small">
        <li><a className="link-secondary" href="#">Cool stuff</a></li>
        <li><a className="link-secondary" href="#">Random feature</a></li>
        <li><a className="link-secondary" href="#">Team feature</a></li>
        <li><a className="link-secondary" href="#">Stuff for developers</a></li>
        <li><a className="link-secondary" href="#">Another one</a></li>
        <li><a className="link-secondary" href="#">Last time</a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>Resources</h5>
      <ul className="list-unstyled text-small">
        <li><a className="link-secondary" href="#">Resource name</a></li>
        <li><a className="link-secondary" href="#">Resource</a></li>
        <li><a className="link-secondary" href="#">Another resource</a></li>
        <li><a className="link-secondary" href="#">Final resource</a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>Resources</h5>
      <ul className="list-unstyled text-small">
        <li><a className="link-secondary" href="#">Business</a></li>
        <li><a className="link-secondary" href="#">Education</a></li>
        <li><a className="link-secondary" href="#">Government</a></li>
        <li><a className="link-secondary" href="#">Gaming</a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>About</h5>
      <ul className="list-unstyled text-small">
        <li><a className="link-secondary" href="#">Team</a></li>
        <li><a className="link-secondary" href="#">Locations</a></li>
        <li><a className="link-secondary" href="#">Privacy</a></li>
        <li><a className="link-secondary" href="#">Terms</a></li>
      </ul>
    </div>
  </div>
</footer>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous"></script>
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import DataCard from '@/components/data-card'

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
        <div className="d-flex flex-column">
            <div id="content">
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-4">
                        <h1 className="h3 mb-0 text-gray-800">Пара вопросов</h1>
                        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                        Пропустить</a>
                    </div>

                    <div className="row">
                        <DataCard topic="Качество картинки" answer="Самое высокое" success="1"> </DataCard>
                        <DataCard topic="Игры" answer="Да" success="1"/>
                        <DataCard topic="Фильмы" answer="-" success=""/>
                        <DataCard topic="Стоимость" answer="-" success=""/>
                    </div>

                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h5 className="m-0 font-weight-bold text-primary">Поле вопроса</h5>
                                </div>

                                <div className="card-body">
                                    

                                    <div id="form-wrapper">
                                    <form action="/p/quote.php" method="GET">
                                        <h3 id="form-title">Какое качество вы хотите</h3>
                                        <div id="debt-amount-slider">
                                            <input type="radio" name="debt-amount" id="1" value="1" required />
                                            <label htmlFor="1" data-debt-amount="Минимум"></label>
                                            <input type="radio" name="debt-amount" id="2" value="2" required />
                                            <label htmlFor="2" data-debt-amount="Среднее"></label>
                                            <input type="radio" name="debt-amount" id="3" value="3" required />
                                            <label htmlFor="3" data-debt-amount="Высокое"></label>
                                            <input type="radio" name="debt-amount" id="4" value="4" required />
                                            <label htmlFor="4" data-debt-amount="Наивысшее"></label>
                                            <input type="radio" name="debt-amount" id="5" value="5" required />
                                            <label htmlFor="5" data-debt-amount="Премиальное"></label>
                                            <div id="debt-amount-pos"></div>
                                        </div>
                                    </form>
                                    <button type="submit">Выбрать</button>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-5">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h5 className="m-0 font-weight-bold text-primary">Доступные варианты</h5>
                                </div>

                                <div className="card-body">
                                    1) <br />
                                    2) <br />
                                    3) <br />
                                    1) <br />
                                    2) <br />
                                    3) <br />
                                    1) <br />
                                    2) <br />
                                    3) <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}